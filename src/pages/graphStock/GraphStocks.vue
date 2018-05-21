<template>
	<div>
        <div class="headline">
            <div><span></span>经典形态</div>
            <p>通过对股票技术图形进行模式识别，快速匹配当前市场经典上涨形态个股.</p>
        </div>
        <div class="graph-boxs">
            <ul class="graph-list">
                <li class="graph-item" v-for='(item,index) in ChooseStocks' @click.prevent="chose(item.Id,item.Description)">
                    <a target="_blank">
                        <img  class="big" alt="" :src="getImgUrl(item.Imgs.split(',',3)[1])">
                    </a>
                    <img :src="hot" class="small" v-if="item.Hot==true">
                </li>
                <li class="graph-item">
                    <a  @click="showDialogStyle = true,right=false"><img :src="addmore" class="big"></a>
                </li>
            </ul>   
        </div>
        <div class="bg"><img :src="bg"></div>
     <div v-transfer-dom>
      <x-dialog v-model="showDialogStyle" hide-on-blur >
        <div v-show="ok">
           <div id="title">添加形态</div>
            <div id="text">
                <input type="text" name="a" placeholder="请输入要添加的形态名称" v-model="typeName">
                <div class="tip" v-show="right">* 请输入类型名称</div>
            </div>
            <x-button plain type="primary" style="border-radius:0.08rem;width:1.8rem;height:0.6rem;text-align:center;background:#378AD6;color:#fff;line-height:0.6rem;font-size:0.3rem;" @click.native="sub">提交</x-button> 
        </div>
        <div class="Success" v-show="!ok" @click="getit"><img :src="Success"></div>
      </x-dialog>
    </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { XDialog, XButton, Group, XSwitch, XInput, TransferDomDirective as TransferDom } from 'vux'
export default {
    directives: {
        TransferDom
    },
    components: {
        XDialog,
        XButton,
        Group,
        XSwitch,
        XInput
   },
    data () {
        return {
            ChooseStocks:[],
            hot: require('../../assets/images/graph/choose_icon_hot@' + this.$store.state.dpr + 'x.png'),
            addmore: require('../../assets/images/graph/choose_btn_add@' + this.$store.state.dpr + 'x.png'),
            Success: require('../../assets/images/graph/hint_img_sure@' + this.$store.state.dpr + 'x.png'),
            bg: require('../../assets/images/graph/choose_img@' + this.$store.state.dpr + 'x.png'), 
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationClickable: true
            },
            typeName:'',//添加类型名字
            datas:1,
            show: false,
            ok:true,
            showDialogStyle: false,
            right:false
        }
    },
    mounted(){
        var _that=this;
        if(sessionStorage.userId=='undefined')sessionStorage.userId=this.$route.query.userId;
        document.getElementsByTagName("body")[0].style.background="#fff";
        var timestamp=(new Date()).valueOf();
        var signdata=this.$socketsign(timestamp);
        var senddata={
            APPID:this.$store.state.APPID,
            timestamp:timestamp,
            signed:signdata
        }
        //获取图形选股首页结果
        this.$axios.post('ChooseStock', {
            data:JSON.stringify(senddata)
        })
        .then((response)=>{
           if(response.data.Success=="true"){
                _that.$vux.loading.hide();
                _that.ChooseStocks=response.data.ChooseStocks;
                _that.ChooseStocks.forEach(function(value,index,arr){
                    value.Idname=_that.graphLists[index];
                })
           }
        })
        .catch((error)=>{
            // 隐藏loading
            // this.$vux.loading.hide();
            // console.log(error);
        });   
    },
    methods:{
        //修改图片路径
        getImgUrl:function(srcUrl){
              return 'http://www.shangjin666.cn:9988'+srcUrl;
        },
        chose(id,type){
             this.$router.push({
                name:'GraphResult',
                params:{
                    id:id,
                    type:type
                }
            })

        },
        //提交类型
        sub(val){
            if(this.typeName==''){
                this.right=true;
            }else{
                this.right=false;
                this.$axios.post('PostStockShape',{
                     userId:JSON.parse(sessionStorage.userId),
                     text:this.typeName
                })
                .then((response)=>{
                    if(response.data.Success=="true"){
                        this.ok=false;
                    }
                })

            }
        },
        getit(){
            this.showDialogStyle=false;
            this.ok=true;
            this.typeName='';
        }
    },
    watch:{
        typeName(val){
            if(val!=""){
                this.right=false;
            }
        }
    },
    activated(){
            document.title='图形选股';
    },
    
}
</script>
<style lang="less" scoped>
#title{
        width: 100%;
        height:auto;
        text-align: center;
        font-family: PingFangSC-Medium;
        font-size:0.36rem;
        color: #378AD6;
        letter-spacing:0.02rem;
        padding-top: 0.4rem;
}
.bg{
    position: fixed;
    bottom: -0.3rem;
    left:50%;
    margin-left:-2rem;
    width: 4rem;
    height:4rem;
    z-index: -10;
    img{
        width: 100%;
        display: block;
    }
}
#text{
    width: 5rem;
    height:0.8rem;
    margin:0.6rem auto;
    position: relative;
    input{
        width: 100%;
        height:100%;
        border: 1px solid #979797;
        display: block;
        outline: none;
    }
    .tip{
        width: 100%;
        height:0.36rem;
        line-height: 0.36rem;
        text-align: left;
        font-family: PingFangSC-Medium;
        font-size:0.28rem;
        color: red;
        letter-spacing:0.02rem;
        position: absolute;
        left:0;
        bottom:-0.5rem;

    }

}
.Success{
    width: 5.8rem;
    height:3.7rem;
    img{
        display: block;
        width: 100%;
    }

}
::-webkit-input-placeholder{
    ont-family: PingFangSC-Regular;
    font-size:0.3rem;
    color: #CCCCCC;
    letter-spacing: 0;
    line-height: 0.8rem;
    text-align: center;
 }
*{
  box-sizing:border-box;
}
ul,li{
  list-style: none;
}
.headline{
    width: 7.1rem;
    height:auto;
    margin:0.2rem auto;
    padding:0.2rem 0.38rem;
    background: #F8F8F8;
    div{
        width: 100%;
        height:auto;
        text-align: left;
        font-family: PingFangSC-Medium;
        font-size:0.36rem;
        color: #000000;
        letter-spacing: 0;
        position: relative;
        font-weight: bold;
        span{
            position: absolute;
            width: 0.08rem;
            height:0.3rem;
            left:-0.2rem;
            top:0.12rem;
            background: #378AD6;

        }
    }
    p{
        width: 100%;
        height:auto;
        font-family: PingFangSC-Regular;
        font-size: 0.3rem;
        color: #333333;
        letter-spacing: 0;
    }
}
.graph-boxs{
    width: 100%;
    height:auto;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    .graph-list{
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        .graph-item{
            width:2.3rem;
            height:2rem;
            background:#fff;
            border: 0.02rem solid #D3D3D3;
            box-shadow: 0 0.02rem 0.06rem 0 #EAEAEA;
            border-radius: 0.1rem;
            margin-bottom: 0.1rem;
            position:relative;
            .small{
                position: absolute;
                left: 0.1rem;
                top:-0.06rem;
                display: block;
                width:0.6rem;
                height:0.6rem; 
            } 
            a{
                width: 100%;
                height:100%;
                .big{
                    display: block;
                    width:100%;
                    height:100%;  
                }   
            } 
        }
    }
}

</style>
