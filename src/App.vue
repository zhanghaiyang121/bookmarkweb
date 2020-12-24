<template>
  <div id="app">
    <div class="head-box">
      <m-header/>
    </div>
    <div class="content-box">
      <div class="right-box">
          <router-view/>
      </div>
    </div>
     
  </div>
</template>

<script>
import SiderMenu from "@/components/SiderMenu"
import MHeader from "@/components/MHeader"
export default {
  name: 'App',
  components: {
    SiderMenu,
    MHeader
  }
  
}
</script>

<style>
body,html{
  height: 100%;
  width:100%;
  padding: 0;
  margin: 0;
  background: #eee;
}
.head-box{
  height: 50px;
  background: #313439;
}
.content-box{
  height: calc(100% - 50px);
  display: flex;
}
#app{
   height: 100%;
   
}
.left-box{
   width:200px;
   height: 100%;
}
.right-box{
   flex:1;
   height: 100%;
}
</style>
