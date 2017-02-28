<template>
  <div id="app">
    <h1>Home page</h1>
    <router-link to="/one">One</router-link>
    <router-link to="/two">Two</router-link>
    <router-view></router-view>
  </div>
</template>


<style lang="css">
  h1{
    color:red;
  }
</style>
