<template>
  <div>
      <button @click="jumpto">跳转</button>
  </div>
</template>

<script>
export default {
    methods:{
        jumpto(){
        //  window.open("http://8.133.165.116/music")
        window.open("localhost:8080/#/music")
      }
    }
}
</script>

<style>

</style>