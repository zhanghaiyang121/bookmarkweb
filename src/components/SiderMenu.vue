<template>
  <div class="SiderMenu">
     <div @click="changeMenu(menuitem,index)" class="menuitem" :class="{active:index==activeIndex}" v-for="(menuitem,index) in menuConfig">{{menuitem.label}}</div>
  </div>
</template>

<script>
export default {
   props:{
      menuConfig:{
         type:Array,
         default:function() {
            return[
               {
                  label:"导航",
                  route:"/"
               },
               {
                  label:"vue工具",
                  route:"/vuetool"
               },
               {
                  label:"开发工具",
                  route:"/ide"
               },
               {
                  label:"配置",
                  route:"/config"
               },
            ]
         }
      }
   },
   data(){
      return{
         activeIndex:0
      }
   },
   methods:{
      changeMenu(menuitem,index){
         this.activeIndex=index
         this.$router.push(menuitem.route)
         console.log(this.$router)
      }
   }
}
</script>

<style scoped>
.SiderMenu{
   height: 100%;
   background: #313439;
   color: #fff;
}
.menuitem{
   padding: 10px;
   padding-left: 30px;
   font-size: 14px;
   cursor: pointer;
}
.active{
   background: #dea869;
}
</style>