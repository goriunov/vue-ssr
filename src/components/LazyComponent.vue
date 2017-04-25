<template>
  <h1>Lazy loaded component {{ message }}</h1>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default{
    computed: {
      ...mapGetters({
        message:'message/message'
      })
    }
  }
</script>

<style scoped>
  h1{
    color: red;
  }
</style>
