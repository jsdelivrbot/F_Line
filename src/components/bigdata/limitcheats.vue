<style lang="less" scoped>
.wrap{
    width:94%;
    background: #FFFFFF;
    padding:0.2rem 3%;
    padding-bottom:0.2rem;
    display:flex;
    margin-bottom:0.2rem;
    &>div{
        padding-bottom:0.08rem;
        flex:1;
        &>div:nth-child(1){
            position: relative;
            font-family: PingFangSC-Semibold;
            font-size: 0.4rem;
            color: #F82F2A;
            letter-spacing: 2px;
            font-weight:600;
            .main_star{
                position: relative;
                top:-3px;
            }
        }
        &>div:nth-child(2){
            position: relative;
            font-family: PingFangSC-Regular;
            font-size: 0.3rem;
            color: #999999;
            letter-spacing: 2px;
        }
        &>div:nth-child(3){
            position: relative;
            top:0.06rem;
            text-align: center;
            font-family: PingFangSC-Regular;
            font-size: 0.3rem;
            color: #000000;
            letter-spacing: 2px;
            background:linear-gradient(left, #F8F4F7 , #F2F8FD);
            border-radius: 0.06rem;
        }
    }
    &>div:nth-child(1){
        padding-right:0.1rem;
    }
    &>div:nth-child(2){
        padding-left:0.1rem;
        text-align: center;
    }
}
.showred{
    color: #F82F2A;
}
.showgreen{
    color: #1CB54A;
}
.fortest{
    font-size:0.12rem;
    width:0;
    height:0;
    overflow-y: hidden;
}
</style>
<template>
	<div>
        <div class="fortest">{{test}}</div>
		<div class="wrap" v-for="x in datas2">
            <div>
                <div>
                    <span>{{x.SubTitle}}</span>
                    <rater class="main_star" v-model="x.Star" slot="value"  active-color="#FFCE68" :font-size="0.20" disabled></rater>
                </div>
                <div>
                    <span style="font-size:0.24rem;">建议持股周期:{{x.SuggestHoldDay}}</span>
                </div>
                <div @click="gomarket(x.Stocks[0].Code)">
                    <span><strong>{{x.Stocks[0].Name}}</strong></span><br>
                    <span :class="[Number(x.Stocks[0].Rate)>0 ? 'showred' :'showgreen']"><strong name="rates">{{x.Stocks[0].Rate}}%</strong></span>
                </div>
            </div>      
            <div>
                <div>
                    <span>{{x.UpRate}}</span>
                </div>
                <div>
                    <span style="font-size:0.24rem;">上涨概率</span>
                </div>
                <div @click="gomarket(x.Stocks[1].Code)">
                    <span><strong>{{x.Stocks[1].Name}}</strong></span><br>
                    <span :class="[Number(x.Stocks[1].Rate)>0 ? 'showred' :'showgreen']"><strong name="rates">{{x.Stocks[1].Rate}}%</strong></span>
                </div>
            </div>      
        </div>
	</div>
</template>
<script>
import { Rater } from 'vux';
import Vue from 'vue';
import _Socket from '../../plugins/heartbeat';
	export default {
        components: {
            Rater,
            _Socket
        },
	    name: 'v-cheats',
	    props:['isreload'],
	    data () {
		    return {
                datas2:'',
                Star:4.5,
                temparr:[],
                test:'',
			}
		},
        created(){
            this.reloaddata();
        },
        activated(){
            if(this.isreload==true){
                this.reloaddata();
            }
        },
        deactivated(){
            if(this.isreload==true){
                var _that=this;
                for(let i=0;i<_that.temparr.length;i++){
                    var timestamp=(new Date()).valueOf();
                    //取消订阅实时数据
                    var signdata=_that.$socketsign(_that.temparr[i]+'&0&0&'+timestamp);
                    var sendinlinedata={
                        APPID:_that.$store.state.APPID,
                        code:_that.temparr[i],
                        type:'0',
                        sub:'0',
                        timestamp:timestamp,
                        signed:signdata
                    }
                    Vue.$socket.send(JSON.stringify(sendinlinedata));
                }
            }
        },
		methods:{
            reloaddata(){
                var _that=this;
                let timestamp=(new Date()).valueOf();
                let signhotdata=this.$socketsign(timestamp);
                let hotdata={
                    appId:this.$store.state.APPID,
                    timestamp:timestamp,
                    signed:signhotdata
                }
                //显示loading
                this.$vux.loading.show({text: '正在加载'})
                this.$axios.post('GetMainPageModule', {
                    data:JSON.stringify(hotdata)
                    })
                    .then((response)=>{
                        // 隐藏loading
                        this.$vux.loading.hide()
                        if(response.data.Success=="true"){
                            this.datas2=response.data.Result.ZTMJ.Items;
                            this.datas2.forEach(function(value,index,arr){
                                _that.temparr.push(value.Stocks[0].Code);
                                _that.temparr.push(value.Stocks[1].Code);
                                value.Stocks[0].Rate='-';
                                value.Stocks[1].Rate='-';
                            })
                            //socket通讯
                            if(!Vue.$socket){
                                Vue.$socket=_Socket.createWebSocket('ws://www.shangjin666.cn:7181/');
                                Vue.$socket.onopen=function(){
                                    console.log('已连接')
                                    if(!interval){
                                        var interval=setInterval(function(){
                                            if(Vue.$socket.readyState==1)Vue.$socket.send('000000');
                                            console.log('全局：000000')
                                        },30000) 
                                    }
                                    for(let i=0;i<_that.temparr.length;i++){
                                        var timestamp=(new Date()).valueOf();
                                        //请求实时数据
                                        var signdata=_that.$socketsign(_that.temparr[i]+'&0&1&'+timestamp);
                                        var sendinlinedata={
                                            APPID:_that.$store.state.APPID,
                                            code:_that.temparr[i],
                                            type:'0',
                                            sub:'1',
                                            timestamp:timestamp,
                                            signed:signdata
                                        }
                                        Vue.$socket.send(JSON.stringify(sendinlinedata));
                                    }
                                }
                            }else{
                                 for(let i=0;i<_that.temparr.length;i++){
                                        var timestamp=(new Date()).valueOf();
                                        //请求实时数据
                                        var signdata=_that.$socketsign(_that.temparr[i]+'&0&1&'+timestamp);
                                        var sendinlinedata={
                                            APPID:_that.$store.state.APPID,
                                            code:_that.temparr[i],
                                            type:'0',
                                            sub:'1',
                                            timestamp:timestamp,
                                            signed:signdata
                                        }
                                        Vue.$socket.send(JSON.stringify(sendinlinedata));
                                    }
                            }
                            //消息接收
                            Vue.$socket.onmessage=function(event){
                                var datas=JSON.parse(event.data)
                                _that.datas2.forEach(function(value,index,arr){
                                    if(datas.code==value.Stocks[0].Code){
                                        if(value.Stocks[0].Rate!=datas.diff_rate){
                                            value.Stocks[0].Rate=datas.diff_rate
                                        }
                                    }
                                    if(datas.code==value.Stocks[1].Code){
                                        if(value.Stocks[1].Rate!=datas.diff_rate){
                                            value.Stocks[1].Rate=datas.diff_rate
                                        }
                                    }
                                    _that.test=value.Stocks[0].Rate;
                                })
                            }
                        }else{
                            this.$router.push({
                                path:'fault',
                                query:{
                                    msg:response.data.Error_msg
                                }
                            });
                        }
                    })
                    .catch((error)=>{
                        // 隐藏loading
                        this.$vux.loading.hide();
                        ;
                        console.log(error);
                    });
            },
			gomarket(val){
                this.$router.push({
                    path:'marketTrend',
                    query:{
                        code:val
                    }
                });
            }   
		},
        //过滤
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                if(value.length>4){
                    value=value.substring(0,4)+'...'
                }
                return value
            },
        },
	}
</script>
