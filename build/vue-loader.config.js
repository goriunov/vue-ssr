module.exports = {
  preserveWhitespace: false,
  postcss: [
    require('autoprefixer')({
      browsers: ['last 10 versions']
    })
  ],
  buble: {
    objectAssign: 'Object.assign',
  }
};
