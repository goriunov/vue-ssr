<template>
  <div id="app">
    <h2>Main Component</h2>
    <router-link to="/lazy">Lazy</router-link>
    <br>
    <router-link to="/">Not Lazy</router-link>
    <hr>
    <router-view class="view"></router-view>
  </div>
</template>

<style>
  h2{
    color: blue;
  }
</style>
