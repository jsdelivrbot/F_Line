<template>
    <div id="comment">
        <div v-if="showPage">
            <div class="content" >
               <div class="title">
                   <!-- <div class="avator"><img :src="cat"></div> -->
                   <div class="name">分析师点评</div>
                   <div class="likes" @click="likes(id)">
                        <div class="like"><img :src="nor" v-show="ok"><img :src="pre" v-show="!ok"></div>
                        <div class="likeNum">{{GoodNum}}</div>
                   </div>
               </div>
               <div class="inner">
                   <div class="stock">
                       <div>{{StockCode}}</div>
                   </div>
                   <div class="text">
                       <p>{{text}}</p>
                       <img :src="dot" class="dot">
                   </div>
                   <ul class="thumbnail" v-if="thumbnail.length>0">
                        <li v-for="(item,index) in thumbnail" @click="show(index)"><img class="previewer-demo-img" :src="item.src" style="width:100%"></li>
                        <div v-transfer-dom>
                            <previewer :list="imgs" ref="previewer" :options="options" ></previewer>
                        </div>
                   </ul>
                   <div class="readNum">阅读 <span>{{ReadNum}}</span></div>

               </div>
            </div>
            <div class="message">
               <div class="headline" ref="head" style="height:0.9rem">
                    <span></span>
                    <span></span>
                    精彩留言
                </div>
                <div class="write"><img :src="write" @click="toWrite"></div>
                <div class="messageList">
                    <div class="com_not" ref="comnot">
                        <scroller  ref="stopscroller" :on-infinite="infinite" :on-refresh="refresh">
                            <v-message v-for="x in datas" :key="x.Id" :name="x.Nickname" :avator="baseURL+x.Portrait" :text="x.Text" :time="x.AddTime" :child="x.Nodes" :retext="x.Nodes.length!=0?x.Nodes[0].Text:''" :retime="x.Nodes.length!=0? x.Nodes[0].AddTime:''">
                            </v-message>
                        </scroller> 
                    </div>
                </div>
            </div>
        </div>
        <x-dialog v-model="showDialogStyle" hide-on-blur >
            <img :src="picture" style="display:block;width:100%;">
            <p style="color:#fff;text-align:center;" @click="showDialogStyle = false"></p>
        </x-dialog>
    </div>
</template>
<script>
import Vue from 'vue';
import vMessage from '../../components/graphStock/message.vue';
import {  Previewer,XDialog, XButton, Group, XSwitch, XInput, TransferDomDirective as TransferDom } from 'vux'
export default {
    directives: {
        TransferDom
    },
    components: {
        XDialog,
        XButton,
        Group,
        XSwitch,
        XInput,
        vMessage,
        Previewer
   },
    data () {
        return {
            ok:false,
            nor: require('../../assets/images/graph/icon_praise_nor@' + this.$store.state.dpr + 'x.png'),
            pre: require('../../assets/images/graph/icon_praise_pre@' + this.$store.state.dpr + 'x.png'),
            Success: require('../../assets/images/graph/hint_btn_sure@' + this.$store.state.dpr + 'x.png'),
            dot: require('../../assets/images/graph/icon_dot@' + this.$store.state.dpr + 'x.png'),
            write: require('../../assets/images/graph/icon__write@' + this.$store.state.dpr + 'x.png'),
            cat:require("../../assets/images/graph/icon_head_cat@"+this.$store.state.dpr+'x.png'),
            datas:'',
            id:'',//点评id
            StockCode:'',//点评的股票
            text:'',//点评内容
            ReadNum:'',//阅读量
            GoodNum:'',//点赞数
            thumbnail:[],//缩略图
            //获取公告
            infoindex:1,
            infonum:8,

            showPage:false,
            position:'',
            interval:1,
            baseURL:'http://www.shangjin666.cn:9988',
            showDialogStyle:false,
            picture:'',
            imgs:[],
            options: {
                getThumbBoundsFn (index) {
                  // find thumbnail element
                  let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
                  // get window scroll Y
                  let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
                  // optionally get horizontal scroll
                  // get position of element relative to viewport
                  let rect = thumbnail.getBoundingClientRect()
                  // w = width
                  return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
                  // Good guide on how to get element coordinates:
                  // http://javascript.info/tutorial/coordinates
                }
            }
        }
    },
    created(){
        this.getdata();
    },
    mounted(){
        if(sessionStorage.userId=='undefined')sessionStorage.userId=this.$route.query.userId;
        var headHeight=Number(this.$refs.head.style.height.slice(0,-3));
        this.$refs.comnot.style.height=document.documentElement.clientHeight-headHeight*100+'px'; 
    },
    methods:{
        likes(id){
                if(this.ok==true){
                this.$axios.post('EvaluationLike',{
                    id:id,
                    userId:JSON.parse(sessionStorage.userId)
                })
                .then((response)=>{
                    if(response.data.Success=="true"){
                        this.GoodNum=this.GoodNum+1;
                        this.ok=false;
                    }
                })
                .catch((error)=>{
                    //this.$router.push({path:'noComment'})
                })
            }
           
        },
        show(index){
            this.$refs.previewer.show(index);
            console.log(index)
        },
        getdata(){
                //显示loading
                this.$vux.loading.show({text: '正在加载'})
                this.$axios.post('GetEvaluation', {
                    code:this.$route.query.code, 
                    userId:JSON.parse(sessionStorage.userId),
                    nowPage:1
                })
                .then((response)=>{
                    // 隐藏loading
                    this.$vux.loading.hide()
                    if(response.data.Success=="true"){

                        this.showPage=true;
                        this.datas=response.data.Data.Nodes;
                    }else{

                        this.showPage=false;
                        this.$router.replace({
                            path:'noComment',
                            query:{
                                msg:response.data.Error_msg
                            }
                        });
                    }
                })
                .catch((error)=>{
                    // 隐藏loading
                    this.$vux.loading.hide();
                   
                });
        },
        refresh: function (done) {
            setTimeout(() => {
                this.interval=1;
                this.$axios.post('GetEvaluation', {
                    code:this.$route.query.code, 
                    userId:JSON.parse(sessionStorage.userId),
                    nowPage:this.interval
                })
                .then((response)=>{
                    if(response.data.Success=="true"){
                        //判断是否有数据
                        if(response.data.Data.Nodes.length){
                            this.datas=[];
                            response.data.Data.Nodes.forEach((value,index,arr)=>{
                                this.datas.push(value)
                            })
                            //console.log(this.datas)
                            //没有更多数据done(true)
                            done();
                        }else{
                            //没有更多数据done(true)
                            done(true);
                        }
                    }else{
                        this.$router.push({
                            path:'noComment',
                            query:{
                                msg:response.data.Error_msg
                            }
                        });
                    }
                })
                .catch((error)=>{
                    console.log(error)
                });
            })
        },
        infinite (done) {
            setTimeout(() => {
                this.interval=this.interval+1;
                this.$axios.post('GetEvaluation', {
                    code:this.$route.query.code, 
                    userId:JSON.parse(sessionStorage.userId),
                    nowPage:this.interval
                })
                .then((response)=>{
                    if(response.data.Success=="true"){
                        //判断是否有数据
                        if(response.data.Data.length){
                            response.data.Data.forEach((value,index,arr)=>{
                                this.datas.push(value)
                            })
                            //没有更多数据done(true)
                            done();
                        }else{
                            //没有更多数据done(true)
                            done(true);
                        }
                    }else{
                        this.$router.push({
                            path:'noComment',
                            query:{
                                msg:response.data.Error_msg
                            }
                        });
                    }
                })
                .catch((error)=>{
                });
            })
        },
        toWrite(){
            this.$router.push({path:'/write',
                                 query:{
                                    code:this.$route.query.code
                                }})
        }
    },
    activated(){
        document.title='详情';
         this.$axios.post('GetEvaluation',{
            code:this.$route.query.code,
            userId:JSON.parse(sessionStorage.userId),
            nowPage:1
       })
        .then((response)=>{
            if(response.data.Success=="true"){
                if(response.data.Data.IsGood==false){
                    this.ok=true;
               }
               this.StockCode=response.data.Data.StockCode;
               this.text=response.data.Data.Text;
               this.ReadNum=response.data.Data.ReadNum;
               this.GoodNum=response.data.Data.GoodNum;
               this.id=response.data.Data.Id;
               this.thumbnail=response.data.Data.ThumbList;
               if(response.data.Data.ThumbList.length>0){
                    for(var i=0;i<this.thumbnail.length;i++){
                        this.thumbnail[i].src='http://www.shangjin666.cn:9988'+response.data.Data.ThumbList[i].src;
                    }
               }
               console.log(response.data.Data)
                this.imgs=response.data.Data.ImgList;
                if(this.imgs.length>0){
                    for(var i=0;i<this.imgs.length;i++){
                        this.imgs[i].src='http://www.shangjin666.cn:9988'+response.data.Data.ImgList[i].src;
                    }  
                }
              
            }
        })
        .catch((error)=>{
        })
        // if(this.position){
        //          setTimeout(()=>{
        //             this.$refs.stopscroller.scrollTo(0, this.position, false)
        //         })
        // }
        this.getdata();
    },
    deactivated(){
        this.showPage=false;
        //获取滚动位置
        //this.position=this.$refs.stopscroller.getPosition().top;
        //停止滚动加载
        //this.$refs.stopscroller.finishInfinite(true)
    },
}
</script>
<style lang="less" scoped>
*{
    box-sizing: border-box;
} 
#comment{
    width: 100%;
    height:auto;
}
.com_not{
        position: relative;
    }
.messageList{
    margin-top:0.2rem;
}
.content{
    width: 100%;
    height:auto;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    background:#fff;
    padding-bottom: 0.3rem;
    .title{
        height:1.5rem;
        padding-top:0.3rem;
        display: flex;
        position: relative;
        .avator{
            width:1.2rem;
            height:1.2rem;
            background:#fff;
            img{
                display: block;
                width: 100%;
            }
        }
        .name{
            font-family: PingFangSC-Medium;
            font-size: 0.36rem;
            color: #000000;
            letter-spacing: 0;
            text-align: left;
            line-height: 1.2rem;
            font-weight:600;
        }
        .likes{
            width: 1rem;
            height:100%;
            margin-left:2.8rem;
            top:-0.2rem;
            position: relative;
            .like{
                width: 0.3rem;
                height:0.3rem;
                position: absolute;
                right:0.5rem;
                top:52%;
                img{
                    display: block;
                    width: 100%;
                }

            }
            .likeNum{
                width: auto;
                height:0.3rem;
                position: absolute;
                right: 0;
                top:44%;
                font-family: PingFangSC-Regular;
                font-size: 0.34rem;
                color: #999999;
                letter-spacing: 0;
            } 
        }
        

    }
    .inner{
        width: 100%;
        height: auto;
        margin-top: 0.2rem;
        .stock{
            width: 100%;
            height:0.48rem;
            display: flex;
            div{
                font-family: PingFangSC-Medium;
                font-size:0.34rem;
                color: #333333;
                letter-spacing: 0; 
                text-align: left;
                line-height: 0.48rem;     
            } 
        }
        .text{
            width: 100%;
            height:auto;
            margin-top:0.1rem;
            border-left:0.08rem solid #378AD6;
            padding-left: 0.24rem;
            position: relative;
            p{
                text-indent: 2em;
                font-family: PingFangSC-Medium;
                font-size: 0.34rem;
                color: #333333;
                letter-spacing: 0;
                text-align:justify
            }
            .dot{
                position: absolute;
                width: 0.4rem;
                height:0.4rem;
                left:0.2rem;
                top:0.1rem;
            }
        }
        .thumbnail{
            width: 100%;
            height:auto;
            margin-top:0.3rem;
            display: flex;
            align-items:center;
            li{
                width: 1.8rem;
                height:auto;
                background:gray;
                margin-right:0.2rem;
                img{
                    display: block;
                    width: 100%;
                }

            }
        }
        .readNum{
            width: 100%;
            height:0.38rem;
            margin-top:0.3rem;
            font-family: PingFangSC-Regular;
            font-size:0.26rem;
            color: #999999;
            letter-spacing: 0;
            text-align: right;
            line-height: 0.38rem;
            span{
                font-family: PingFangSC-Regular;
                font-size:0.26rem;
                color: #999999;
                letter-spacing: 0;
                text-align: right;
                line-height: 0.38rem;
            }

        }
       
    }

}
.message{
    width: 100%;
    height:auto;
    background:#fff;
    margin-top:0.2rem;
    padding-left:0.3rem;
   // padding-right: 0.3rem;
}
.headline{
    padding-top:0.2rem;
    width: 100%;
    height:0.9rem;
    text-align: center;
    line-height: 0.7rem;
    font-family: PingFangSC-Regular;
    font-size:0.34rem;
    color: #999999;
    letter-spacing: 2.27px;
    position: relative;
    span{
        position: absolute;
        width: 0.8rem;
        height:0.02rem;
        background:#ccc;
        top:60%;
        //margin-top:0.01rem;
    }
    span:first-child{
        left: 2rem;
    }
    span:last-child{
        right: 2rem;
    }
}
.write{
    width: 100%;
    height:0.3rem;
    position: relative;
    margin-top:0.3rem;
    img{
        position: absolute;
        width: 1.42rem;
        height:0.3rem;
        right:0.3rem;
        top:0;

    }
}
</style>
