<style lang="less" scoped>
.reswrap{
    width: 100%;
    border-radius:0.2rem;
    overflow:hidden;
    &>div:nth-child(1),&>div:nth-child(2){
        height:2.4rem;
        width:100%;
        display: flex;
        background: #FFFFFF;
        &>div{
            flex:1;
            width:100%;
            height:100%;
            text-align: center;
            overflow: hidden;
            p{
                font-family: PingFangSC-Medium;
                font-size: 0.3rem;
                color: #000000;
                letter-spacing: 0;
                padding-top: 0.2rem;
                padding-bottom: 0.2rem;
            }
            table{
                width:100%;
                tr:nth-child(1){
                    font-family: PingFangSC-Medium;
                    font-size: 0.36rem;
                    color: #FF5F45;
                    letter-spacing: 0;
                }
                tr:nth-child(2){
                    font-family: PingFangSC-Regular;
                    font-size: 0.24rem;
                    color: #999999;
                    letter-spacing: 0;
                }
            }
        }
    }
}
.showred{
    color:red;
}
.showgreen{
    color:green;
}
.nodata{
    width:100%;
    text-align: center;
    img{
        width:4rem;
        margin:0 auto;
        padding-top:1rem;
    }
    p{
        font-family: PingFangSC-Regular;
        font-size: 0.3rem;
        color: #999999;
        letter-spacing: 2px;
    }
}
.ptip{
    padding:0.3rem;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #999999;
    letter-spacing: 0;
}
</style>
<template>
    <div>
        <div class="reswrap" v-if="datas" >
            <div>
                <div style="border-bottom:1px solid #CCCCCC;border-right:1px solid #CCCCCC;">
                    <p>明日</p>
                    <table>
                        <tr>
                            <td :class="[Number(datas.DayUpRate)>=0?'showred':'showgreen']">{{datas.DayUpRate|nodown}}%</td>
                            <td :class="[Number(datas.DayUp)>=0?'showred':'showgreen']">{{datas.DayUp|nodown}}%</td>
                        </tr>
                        <tr>
                            <td v-if="Number(datas.DayUpRate)>=0">上涨概率</td>
                            <td v-else>下跌概率</td>
                            <td v-if="Number(datas.DayUp)>=0">涨幅</td>
                            <td v-else>跌幅</td>
                        </tr>
                    </table>
                </div>
                <div>
                    <p>下周</p>
                    <table>
                        <tr>
                            <td :class="[Number(datas.WeekUpRate)>=0?'showred':'showgreen']">{{datas.WeekUpRate|nodown}}%</td>
                            <td :class="[Number(datas.WeekUp)>=0?'showred':'showgreen']">{{datas.WeekUp|nodown}}%</td>
                        </tr>
                        <tr>
                            <td v-if="Number(datas.WeekUpRate)>=0">上涨概率</td>
                            <td v-else>下跌概率</td>
                            <td v-if="Number(datas.WeekUp)>=0">涨幅</td>
                            <td v-else>跌幅</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div>
                <div>
                    <p>月线</p>
                    <table>
                        <tr>
                            <td :class="[Number(datas.MonthUpRate)>=0?'showred':'showgreen']">{{datas.MonthUpRate|nodown}}%</td>
                            <td :class="[Number(datas.MonthUp)>=0?'showred':'showgreen']">{{datas.MonthUp|nodown}}%</td>
                        </tr>
                        <tr>
                            <td v-if="Number(datas.MonthUpRate)>=0">上涨概率</td>
                            <td v-else>下跌概率</td>
                            <td v-if="Number(datas.MonthUp)>=0">涨幅</td>
                            <td v-else>跌幅</td>
                        </tr>
                    </table>
                </div>
                <div style="border-top:1px solid #CCCCCC;border-left:1px solid #CCCCCC;">
                    <p>季线</p>
                    <table>
                        <tr>
                            <td :class="[Number(datas.QuarterUpRate)>=0?'showred':'showgreen']">{{datas.QuarterUpRate|nodown}}%</td>
                            <td :class="[Number(datas.QuarterUp)>=0?'showred':'showgreen']">{{datas.QuarterUp|nodown}}%</td>
                        </tr>
                        <tr>
                            <td v-if="Number(datas.QuarterUpRate)>=0">上涨概率</td>
                            <td v-else>下跌概率</td>
                            <td v-if="Number(datas.QuarterUp)>=0">涨幅</td>
                            <td v-else>跌幅</td>
                        </tr>
                    </table>
                </div>
            </div>
            <p class="ptip">数据基于历史，仅为大数据预测，不构成投资建议。</p><br><br><br><br><br>
        </div>
        <div class="nodata" v-else>
            <img :src="nodata">
            <p>暂无预测结果</p><br>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'v-forecast',
        data () {
            return {
                datas:'',
                nodata:require('../../assets/clinic/imgchoose_icon_noimg@'+this.$store.state.dpr+'x.png'),
            }
        },
        //过滤
        filters: {
            nodown: function (value) {
                if (!value) return ''
                var temp=value;
                temp=Math.abs(temp);
                return temp
            },
        },
        activated(){
            this.$axios.post('GetStockOptionZGResult', {
                    code:this.$route.query.code
                })
            .then((response)=>{
                if(response.data.Success=="true"){
                    if(response.data.Result!=null)this.datas=response.data.Result;
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
                ;
                console.log(error);
            });
        },
         
    }
</script>