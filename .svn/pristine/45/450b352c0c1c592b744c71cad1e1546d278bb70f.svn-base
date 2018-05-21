<style lang="less" scoped>
    .info_list{
        width:100%;
        min-height:2.15rem;
        background: #FFFFFF;
        position: relative;
        margin-bottom:0.3rem;
        .line1{
            display: flex;
            height:0.7rem;
            margin-top:0.2rem;
            div:first-child{
                width: 0.7rem;
                height:0.7rem;
                background:pink;
                border-radius: 50%;
                img{
                    display: block;
                    width: 100%;
                }
            }
            div:last-child{
                margin-left: 0.2rem;
                text-align: left;
                font-family: PingFangSC-Regular;
                font-size:0.34rem;
                color: #999999;
                letter-spacing: 0;

            }
        }
        .line2{
            height:auto;
            padding-left: 0.9rem;
            padding-right: 0.3rem;
            p:first-child{
                font-family: PingFangSC-Regular;
                font-size:0.34rem;
                color: #000000;
                letter-spacing: 0;
            }
            p:nth-child(2){
                font-family: PingFangSC-Regular;
                font-size:0.26rem;
                color: #CCCCCC;
                letter-spacing: 0;
                margin-top:0.1rem;
            }
        }
        .response{
            margin-left:0.9rem;
            height:auto;
            margin-top:0.2rem;
            border-top:1px solid #ccc;
            .resTitle{
                width: 100%;
                height:0.48rem;
                padding-left: 0.16rem;
                font-family: PingFangSC-Regular;
                font-size:0.34rem;
                color: #999999;
                letter-spacing: 0;
                position: relative;
                margin-top:0.2rem;
                span{
                    width: 0.06rem;
                    height:0.3rem;
                    left:0;
                    top:50%;
                    margin-top:-0.15rem;
                    position: absolute;
                    background: #378AD6;
                    
                }
            }
            .resText{
                height:auto;
                //padding-left: 0.9rem;
                padding-right: 0.3rem;
                p:first-child{
                    font-family: PingFangSC-Regular;
                    font-size:0.34rem;
                    color: #000000;
                    letter-spacing: 0;
                }
                p:nth-child(2){
                    font-family: PingFangSC-Regular;
                    font-size:0.26rem;
                    color: #CCCCCC;
                    letter-spacing: 0;
                    margin-top:0.1rem;
                }
            }

        }
}
</style>
<template>
    <div>
        <div class="info_list">
            <div class="line1">
                <div class="avator"><img :src="avator"></div>
                <div class="name">{{name}}</div>
            </div>
            <div class="line2">
                <p>{{text}}</p>
                <p>{{time}}</p>
            </div>
            <div class="response" v-show="child!=''">
                <div class="resTitle"><span></span>分析师回复</div>
                <div class="resText">
                    <p>{{retext}}</p>
                    <p>{{retime}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'v-message',
        props:['text','time','avator','name','child','retext','retime'],
        data () {
            return {
                // img:'',
            }
        },
        mounted(){
           
        }
    }
</script>
