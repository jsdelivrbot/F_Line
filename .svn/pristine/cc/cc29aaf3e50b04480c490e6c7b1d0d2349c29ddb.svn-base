<template>
    <div class="quomore-box" id="rank">
        <div id="option-list">
        <div class="list-title">
            <ul class="right">
                <li v-for="item in lists">{{item}}</li>
            </ul>
        </div>
        <div class="list-body">
            <ul >
                <li v-for="item in items">
                    <div class="list">{{item.Code}}</div>
                    <div class="list">{{item.StockName}}</div>
                    <div class="list">{{item.Num}}</div>
                </li>
            </ul>
        </div>
    </div> 
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import Vue from 'vue';
    export default{
        name:'v-quomore',
        data(){
            return{
                rise: require('../../assets/images/quotation/price_btn_up@' + this.$store.state.dpr + 'x.png'),
                down: require('../../assets/images/quotation/price_btn_down1@' + this.$store.state.dpr + 'x.png'),
                declearfont:'declearfont',
                risefont:'risefont' ,
                show:true,
                lists:['股票代码','股票名称','诊股量'],
                items:[],
                temp:[]  
            }
        },
        created () {
            this.items=[];
            this.temp=[];
            Vue.$nowPage=1;
            Vue.$inter=30;   
        },
        mounted(){
                var by=document.getElementById("rank");
                var _that=this;
                by.addEventListener("scroll",function(){
                var nScrollHight = by.scrollHeight;
                var  nScrollTop = by.scrollTop;
                var nDivHight=by.offsetHeight;
                if(nScrollTop + nDivHight+500 >= nScrollHight){
                    flag=true;
                }
                if(flag){
                    flag=false;
                    Vue.$nowPage=Vue.$nowPage+1;
                    Vue.$inter=30;
                    _that.getLists(Vue.$nowPage,Vue.$inter);
                }
            })
        },
          activated(){
            this.temp=[];
            Vue.$nowPage=1;//起始
            Vue.$inter=30;//间隔数
            this.$vux.loading.show({text: '正在加载'}); 
            this.getLists(Vue.$nowPage,Vue.$inter); 
        },
        methods:{  
            getLists(now,interval){
                var _that=this;
                this.$vux.loading.show({text: '正在加载'}); 
                this.$axios.post('GetZGRanking',{
                    nowPage:now,
                    pageSize:interval
                })
                .then((response)=>{
                     if(response.data.Success=='true'){
                        _that.$vux.loading.hide();
                        response.data.Result.forEach((v,i)=>{
                            _that.temp.push(v);    
                        })
                        _that.items=_that.temp; 
                    }
                })
                .catch((error)=>{
                    // 隐藏loading
                    this.$vux.loading.hide();
                    ;
                    console.log(error);
                });
            },
           
        }
    }
</script>
<style lang="less" scoped>
@riseColor:#FF5E45;
@declearColor:#1CB54A;
   *{
        box-sizing: border-box;
    }
    .declearfont{
        color:@declearColor;
    }
    .risefont{
        color:@riseColor;
    }
    body{
        width:100%;
        height:13.34rem;
        overflow: hidden;
    }
    .quomore-box{
        width:100%;
        height:auto;
        margin-top:0.1rem;
        #option-list{
        width: 100%;
        height:10.26rem;
            .list-title{
                width: 100%;
                height:0.6rem;
                background:#fff;
                border-bottom:1px solid rgba(153,153,153,0.50);
                padding-left: 0.2rem;
                padding-right: 0.2rem;
                .right{
                    width:100%;
                    height:100%;
                    li{ 
                        width:33.333%;
                        float: left;
                        font-family: PingFangSC-Regular;
                        font-size:0.24rem;
                        color: #999999;
                        letter-spacing: 0;
                        text-align:center;
                        line-height: 0.6rem;
                        position: relative;
                    }
                }
            }
            .list-body{
                width: 100%;
                height:9.7rem;
                overflow: scroll;
                ul{
                    width: 100%;
                    height:auto;
                    li{
                        width:100%;
                        height:1rem;
                        border-bottom:1px solid rgba(153,153,153,0.50);
                        background:#fff;
                        padding-right: 0.2rem;
                        padding-left: 0.2rem;
                        div{
                            width: 33.333%;
                            height:100%;
                            float:left;
                            font-family: PingFangSC-Regular;
                            font-size:0.3rem;
                            color: #000000;
                            letter-spacing:0.02rem;
                            text-align: center;
                            line-height: 1rem;
                        }
                    }
                    li:nth-child(2n){
                        background:#F8F8F8;

                    }

                }
            }
        }
    }  
</style>