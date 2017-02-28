<template>
  <li>
    <h2>Main component test</h2>
  </li>
</template>

<script>
  const fetchContent = store =>{

  };
export default {

    data(){
    return {
      data: this.axios.get('http://p-m-t.azurewebsites.net/update/').then(
        (res)=>{
          console.log(res);
        },
        (err)=>{
          console.log(err);
        }
      )
    }
  }
}
</script>

<style lang="css">
  h2{
    color:blue;
  }
</style>
