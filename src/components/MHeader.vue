<template>
  <div class="m-header">
      <div class="left">
          <div @click="changeMenu(menuitem,index)" class="menuitem" :class="{active:index==activeIndex}" v-for="(menuitem,index) in menuConfig">{{menuitem.label}}</div>
      </div>
      <div class="right">
          <div class="user">
              <img :src="user.avatar" alt="">
              <span>{{user.name}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            user:{
                name:"忘记时间",
                avatar:require("./avatar.jpg")
            },
            menuConfig:[
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
            ],
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
.m-header{
    height: 100%;
    display: flex;
    justify-content: space-between;
}
.menuitem{
    color: #fff;
    font-size: 14px;
    padding: 0 10px;
    line-height: 50px;
    height: 100%;
    width: 60px;
    text-align: center;
    cursor: pointer;
}
.right{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.left{
   display: flex;
   align-items: center;
   padding-left: 50px;
}
.user{
    display: flex;
    align-items: center;
}
.user img{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 3px solid #fff;
    margin-right: 10px;
    cursor: pointer;
}
.user span{
    margin-right: 10px;
    color: #fff;
    font-size: 12px;
}
.active{
   background: #dea869;
}
</style>