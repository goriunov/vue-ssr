const fs = require('fs')
const path = require('path')
const LRU = require('lru-cache')
const express = require('express')
const favicon = require('serve-favicon')
const compression = require('compression')
const microcache = require('route-cache')
const resolve = file => path.resolve(__dirname, file)

const { createBundleRenderer } = require('vue-server-renderer')

const isProd = process.env.NODE_ENV === 'production'
const useMicroCache = process.env.MICRO_CACHE !== 'false'
const serverInfo = `express/${require('express/package.json').version} ` + `vue-server-renderer/${require('vue-server-renderer/package.json').version}`

const app = express()

const template = isProd ? fs.readFileSync(resolve('./dist/index.html'), 'utf-8') : fs.readFileSync(resolve('./src/index.template.html'), 'utf-8')

function createRenderer(bundle, options) {
  return createBundleRenderer(bundle, Object.assign(options, {
    template,
    cache: LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15
    }),
    basedir: resolve('./dist'),
    runInNewContext: false
  }))
}

let renderer
let readyPromise
if (isProd) {
  const bundle = require('./dist/vue-ssr-server-bundle.json')
  const clientManifest = require('./dist/vue-ssr-client-manifest.json')
  renderer = createRenderer(bundle, { clientManifest })
} else {
  readyPromise = require('./build/setup-dev-server')(app, (bundle, options) => renderer = createRenderer(bundle, options))
}

const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
})

app.use(compression({ threshold: 0 }))
app.use('/dist', serve('./dist', true))
app.use('/public', serve('./public', true))
app.use('/manifest.json', serve('./manifest.json', true))

app.use(microcache.cacheSeconds(1, () => useMicroCache))

function render(req, res) {
  const s = Date.now()

  res.setHeader("Content-Type", "text/html")
  res.setHeader("Server", serverInfo)

  const handleError = err => {
    if (err.url) return res.redirect(err.url)
    if (err.code === 404) return res.status(404).send('404 | Page Not Found')

    res.status(500).send('500 | Internal Server Error')
    console.error(`error during render : ${req.url}`)
    console.error(err.stack)
  }

  renderer.renderToString({ url: req.url }, (err, html) => {
    if (err) return handleError(err)
    res.send(html)

    if (!isProd) console.log(`Request: ${Date.now() - s}ms`)
  })
}

app.get('*', isProd ? render : (req, res) => readyPromise.then(() => render(req, res)))

app.listen(process.env.PORT || 8080, () => console.log(`server started at localhost:${process.env.PORT || 8080}`))