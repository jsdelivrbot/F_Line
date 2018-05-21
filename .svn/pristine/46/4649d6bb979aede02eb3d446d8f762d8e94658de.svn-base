<template>
    <div> 
       <div class="quomore-box" ref="option">
            <div class="top-body">
                <div class="edit" @click="edit">编辑</div>
                <div class="search" @click="osearch"><img :src="opsearch"></div>
            </div>
            <div id="option-list">
                <div class="list-title">
                    <div class="left">全部股票</div>
                    <div class="right">现价</div>
                    <div class="right">涨幅</div>
                    <div class="right">涨额</div>
                </div>
                <div class="list-body">
                    <ul v-show="opsign">
                        <li v-for="item in opdata" @click="toIndividual(item.Code)">
                            <div class="Llist">
                                <span>{{item.Name}}</span>
                                <span>{{item.Code}}</span>
                            </div>
                            <div class="Rlist">
                                <div :class="[item.NowPrice < 0 ? 'declearfont':'risefont' ]">{{item.NowPrice}}</div>
                                <div :class="[item.DiffRate < 0 ? 'declearfont':'risefont' ]">{{item.DiffRate}}</div>
                                <div :class="[item.DiffMoney < 0 ? 'declearfont':'risefont' ]">{{item.DiffMoney}}</div>
                            </div>
                        </li>
                    </ul>
                    <div class="addop" v-show="!opsign" @click="addoption"><img :src="addoptional"></div>
                </div>
            </div>
        </div>
        <v-footer :curpage="'/optional'"></v-footer>
    </div>
</template>
<script>
import vFooter from '../../components/index';
    export default{
        data() {
            return {
                lists:['现价','涨幅','涨额'],
                rise: require('../../assets/images/quotation/price_btn_up@' + this.$store.state.dpr + 'x.png'),
                down: require('../../assets/images/quotation/price_btn_down1@' + this.$store.state.dpr + 'x.png'),
                opsearch: require('../../assets/images/quotation/price_btn_search@' + this.$store.state.dpr + 'x.png'),
                addoptional: require('../../assets/images/optional/editshoose_btn_add@' + this.$store.state.dpr + 'x.png'),
                alert: require('../../assets/images/optional/editshoose_hint_login@' + this.$store.state.dpr + 'x.png'),
                opflag:true,//是否登陆
                opsign:false,//自选列表是否为0
                declearfont:'declearfont',
                risefont:'risefont',
                opdata:''
            }
        },
        components: {
            vFooter
        },
        methods:{
            osearch:function(){
                this.$router.push({
                            path:'search',
                            query:{
                                status:1
                            }
                        });
            },
            edit:function(){
                this.$router.push({path:'/editOptional'});
            },
            tologin:function(){
                this.$router.push({path:'/login'})
            },
            addoption:function(){
                this.$router.push({
                            path:'search',
                            query:{
                                status:1
                            }
                        });
            },
            fetchDatas:function(){
                    this.$axios.post('GetStockOptions', {
                        userId:JSON.parse(sessionStorage.userId)
                    })
                    .then(response =>{
                        if(response.data.Success=="true"){
                            this.$vux.loading.hide();
                            if(response.data.StockOptions.length==0){
                                localStorage.opdata=JSON.stringify([]);
                                this.opsign=false;
                            }else{
                                this.opdata=response.data.StockOptions;
                                localStorage.opdata=JSON.stringify(response.data.StockOptions);
                                this.opsign=true;
                            }
                            
                        }    
                    })
                    .catch((error)=>{
                        // 隐藏loading
                        this.$vux.loading.hide();
                        ;
                        console.log(error);
                    });
               
            },
            toIndividual:function(code){
                 this.$router.push({
                    path:'/markettrend',
                    query:{
                        code:code
                    }
                })
            }
        },
        created(){
            if(sessionStorage.userId=='undefined')sessionStorage.userId=this.$route.query.userId;
            this.fetchDatas();
        },
        mounted(){
            this.$refs.option.style.height=document.documentElement.clientHeight*2/100+"rem";
        },
        watch: {
          // 如果路由有变化，会再次执行该方法
            $route(){
                this.fetchDatas();
            }
        },
        activated(){
            document.title='我的自选';
        },
    }
</script>
<style lang="less" scoped>
 @import '../../style/base.less';
 @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/center.less';
 *{
    box-sizing: border-box;
 }
@riseColor:#FF5E45;
@declearColor:#1CB54A;
@baseLenght:1.62rem;

.declearfont{
    color:@declearColor;
}
.risefont{
    color:@riseColor;
}
.quomore-box{
    width:100%;
    height:auto;
   .top-body{
    width: 100%;
    //height:0.88rem;
    height:6.6%;
    opacity: 0.95;
    background: #378AD6;
    box-shadow: 0 1px 0 0 rgba(153,153,153,0.50);
    padding-left:0.3rem;
    padding-right:0.3rem;
    .edit{
        font-family: PingFangSC-Regular;
        font-size:0.3rem;
        color: #FFFFFF;
        letter-spacing:0.02rem;
        text-align: left;
        line-height: 0.88rem;
        float: left;
    }
    .search{
        width: 0.4rem;
        height:100%;
        float: right;
        position: relative;
        img{
            width: 0.4rem;
            height:0.4rem;
            position: absolute;
            right: 0;
            top:50%;
            margin-top:-0.2rem;

        }
    }
   }
   #option-list{
    width: 100%;
    height:85.4%;
    .list-title{
        width: 100%;
        height:0.6rem;
        overflow: hidden;
        background:#fff;
        border-bottom:1px solid rgba(153,153,153,0.50);
        padding-left: 0.3rem;
        padding-right: 0.3rem;
        .left{
            font-family: PingFangSC-Regular;
            width:2.76rem;
            height:100%;
            font-size:0.24rem;
            color: #999999;
            letter-spacing: 0;
            text-align: left;
            line-height: 0.6rem;
            float: left;
        }
        .right{
            width:1.38rem;
            height:100%;
            float:left;
            font-family: PingFangSC-Regular;
            font-size:0.24rem;
            color: #999999;
            letter-spacing: 0;
            text-align: center;
            line-height: 0.6rem;
        }
    }
    .list-body{
        width: 100%;
        height:94.8%;
        overflow:scroll;
        ul{
            width: 100%;
            height:auto;
            li{
                width: 100%;
                height:1rem;
                border-bottom:1px solid rgba(153,153,153,0.50);
                background:#fff;
                padding-right: 0.3rem;
                padding-left: 0.3rem;
                .Llist{
                    width:40%;
                    height:100%;
                    float: left;
                    span:first-child{
                        text-align:left;
                        font-family: PingFangSC-Regular;
                        font-size:0.3rem;
                        color: #000000;
                        letter-spacing:0.02rem;
                        display: block;
                        padding-top: 0.1rem;
                    }
                    span:last-child{
                        font-family: PingFangSC-Regular;
                        font-size:0.2rem;
                        color: #999999;
                        letter-spacing: 0;
                        display: block;
                        text-align: left;
                    }
                }
                .Rlist{
                    width: 60%;
                    height:100%;
                    float: right;
                    div{
                        width:1.38rem;
                        float: left;
                        font-family: PingFangSC-Medium;
                        font-size:0.3rem;
                        letter-spacing: 0;
                        text-align: center;
                        line-height: 1rem;
                    }
                }
            }
            li:nth-child(2n){
                background:#F8F8F8;

            }

        }
        .addop{
            width: 100%;
            height:1.4rem;
            margin-top:1rem;
            img{
                width: 3.6rem;
                height: 100%;
                display: block;
                margin:0 auto;
            }
        }
    }

}  
} 
.alert{
    width: 5.8rem;
    height:2.9rem;
    position: fixed;
    top:4.4rem;
    left:50%;
    margin-left:-2.9rem;
    z-index: 10000;
    backface-visibility: hidden;
    img{
        width: 100%;
    }
}

.zhezhao {
    position: fixed;
    width: 100%;
    height:13.34rem;
    top: 0;
    left: 0;
    z-index: 5000;
    opacity: 1;
    background: rgba(0,0,0,0.5);
}
</style>
</style>
