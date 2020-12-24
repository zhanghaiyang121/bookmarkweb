<template>
  <div class="page">
     <div class="icon-list">
        <div @click="openNewTab(item)" class="icon-pic" v-for="(item,index) in labelList">
           <div class="img-box">
              <img :src="Ipconfig+item.imgpath">
           </div>
            <div class="text">{{item.title}}</div>
         </div>
     </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
   data(){
      return{
         labelList:[],
         Ipconfig:this.$Ipconfig
      }
   },
   methods:{
      openNewTab(item){
         window.open(item.path)
      }
   },
   mounted(){
      console.log(this.$Ipconfig)
        axios.get(this.$Ipconfig+"/geticoninfos").then(res=>{
            this.labelList=res.data
        })
    }
}
</script>

<style scoped>
.page{
   height: 100%;
   width: 1600px;
   margin: 0 auto;
   box-sizing: border-box;
   background: #eee;
   padding: 10px;
}
.icon-list{
   display: flex;
   flex-wrap: wrap;
   max-height: calc(100% - 20px);
   overflow: auto;
   align-items: flex-start;
}
.icon-pic{
   padding: 10px;
   cursor: pointer;
}
.img-box{
   width:80px;
   height: 80px;
   border-radius: 10px;
   background: #fff;
   display: flex;
   justify-content: center;
   align-items: center;
}
img{
   width:60px;
   height: 60px;
   border-radius: 50%;
   border: 1px solid #eee;
   box-shadow:0px 0px 20px rgb(185, 182, 182) ;
}
.text{
   text-align: center;
   padding: 5px 0;
}
.Pagination{
   display: flex;
   justify-content: center;
   padding: 3px 0;
}
.pageitem{
   height: 30px;
   width:30px;
   border-radius: 5px;
   border:1px solid #000;
   line-height: 30px;
   text-align: center;
   cursor: pointer;
}
</style>