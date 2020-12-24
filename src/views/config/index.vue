<template>
    <div class="page">
        <div class="left">
            <div class="img-box">
                <img :src="imgpath?Ipconfig+imgpath:loadimg" id="imgWait" />
            </div>
        </div>
        <div class="right">
            <div class="content-box">
                <div class="upload form-item">
                    <div class="btn-box">
                        <div class="btn">上传文件</div><span>{{filename?filename:"未上传文件"}}</span>
                    </div>
                    <input type="file" id="fileLabel" @change="changefile"/>
                </div>
                <div class="form-item">
                    <span class="label">链接:</span><input placeholder="请输入链接，如：http://www.baidu.com" class="textinput" v-model="path"/>
                </div>
                <div class="form-item">
                    <span class="label">标题:</span><input placeholder="请输入书签标题" class="textinput" v-model="title"/>
                </div>
                <div class="form-item ">
                    <span class="label">类别:</span>
                    <div class="radio-list">
                        <div class="item-radio" @click="changeradio(item,index)" v-for="(item,index) in typelist" :key="index">
                            <div class="radio-box">
                                <div class="un-radio-active " :class="{'radio-active':activeradio==index}"></div>
                            </div>
                            <span>{{item.label}}</span>
                        </div>
                    </div>
                </div>
                <div class="form-item">
                    <span class="label">备注:</span><input placeholder="请输入书签备注" class="textinput" v-model="tip"/>
                </div>
                <div class="btn submitbtn" @click="submit">提交</div>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            imgpath:"",
            filename:"",
            path:"",
            title:"",
            size:0,
            Ipconfig:this.$Ipconfig,
            loadimg:require("@/assets/img/loadimg.jpg"),
            activeradio:0,
            type:"",
            tip:"",
            typelist:[
                {
                    value:1,
                    label:"vue",
                    key:"001"
                },
                {
                    value:2,
                    label:"react",
                    key:"002"
                },
                {
                    value:3,
                    label:"vue工具",
                    key:"003"
                }
            ]
        }
    },
    methods:{
        upload(){
            var formData = new FormData();
            formData.append("zipFile", document.getElementById("fileLabel").files[0]);   
            axios.post(this.$Ipconfig+"/upload",
                formData,
                {
                    headers:{
                        'Content-Type':"multipart/form-data"
                    }
            }).then(res=>{
                console.log(res)
                this.filename=res.data.filename
                this.size=res.data.size
                this.imgpath=res.data.path
            })
        },
        changefile(file){
            
            this.upload()
        },
        submit(){
            let form={}
            form.filename=this.filename
            form.size=this.size
            form.imgpath=this.imgpath
            form.title=this.title
            form.path=this.path
            form.username="zhy"
            form.key=this.key
            form.tip=this.tip
            axios.post(this.$Ipconfig+"/saveIconInfo",form).then(res=>{
                console.log(res)
            })
        },
        changeradio(item,index){
            this.activeradio=index
            this.type=item.key
        }
    },
    mounted(){
        axios.get(this.$Ipconfig+"/geticoninfos").then(res=>{
            console.log(res.data)
        })
    }
}
</script>

<style scoped>
.page{
    position: relative;
    display: flex;
    height: 100%;
}
.left{
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.left img{
    height: 400px;
    width: 400px;
}
.img-box{
    overflow:hidden;
    width:390px;
    height:390px;
    border:2px #000 dotted;
    border-radius: 5px;
    margin-right: 30px;
}
.right{
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
.content-box{
    position: relative;
    display: flex;
    flex-direction: column;
    width:390px;
    height:390px;
}
.upload{
    position: relative;
}
.btn-box span{
    margin-left: 20px;
    font-size:12px
}
.btn{
    padding: 8px 20px;
    text-align: center;
    background: #409eff;
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
    display: inline-block;
    max-width: 100px;
    cursor: pointer;
}
#fileLabel{
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    height: 100%;
    width: 80px;
}
#fileLabel:focus{
    cursor: pointer;
}
.form-item{
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}
.form-item .label{
    font-size: 14px;
    margin-right: 10px;
}
.form-item .textinput{
    height: 30px;
    width: 300px;
    border: 1px solid rgb(220, 223, 230);
    border-radius: 5px;
    padding: 0 10px;
}
.form-item .textinput:focus {
    outline: none;
    border-color:#409eff;
}
.radio-box{
    border-radius: 50%;
    width: 15px;
    height: 15px;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
}
.un-radio-active{
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #eee;
    cursor: pointer;
    transition: all .5s;
    display: inline-block;
}
.radio-active{
    background: #409eff;
}
.radio-list{
    display: flex;
}
.item-radio{
    display: flex;
    /* flex: 1; */
    margin-right: 10px;
    justify-content: center;
    align-items: center;
    font-size: 14px;
}
.submitbtn{
    position: absolute;
    bottom: 10px;
}
</style>