<style lang="less" scoped>
.mes_wrap{
    width:100%;
    background:#FFFFFF;
    margin-top:0.2rem;
    &>div:nth-child(1){
        height:0.8rem;
        overflow:hidden;
        transition:0.5s;
        padding:0.2rem 0.2rem 0 0.2rem;
        section{
            font-family: PingFangSC-Regular;
            font-size: 0.3rem;
            color: #000000;
            letter-spacing: 2px;
            line-height:0.4rem;
        }
    }
    &>div:nth-child(2){
        height:0.7rem;
        width:100%;
        position:relative;
        &>span:nth-child(1){
            font-family: PingFangSC-Regular;
            font-size: 0.3rem;
            color: #999999;
            letter-spacing: 2px;
            line-height: 0.7rem;
            position:absolute;
            left:0.2rem;
        }
        &>span:nth-child(2){
            font-family: PingFangSC-Regular;
            font-size: 0.3rem;
            color: #378AD6;
            letter-spacing: 2px;
            line-height: 0.7rem;
            position:absolute;
            right:0.2rem;
        }
        &>span:nth-child(3){
            font-family: PingFangSC-Regular;
            font-size: 0.3rem;
            color: #378AD6;
            letter-spacing: 2px;
            line-height: 0.7rem;
            position:absolute;
            right:0.2rem;
        }
        .triangle-up{
            width: 0;
            height: 0;
            border-left: 0.14rem solid transparent;
            border-right: 0.14rem solid transparent;
            border-bottom: 0.16rem solid #378AD6;
            position:absolute;
            top:0.25rem;
            left:-0.4rem;
        }
        .triangle-down{
            width: 0;
            height: 0;
            border-left: 0.14rem solid transparent;
            border-right: 0.14rem solid transparent;
            border-top: 0.16rem solid #378AD6;
            position:absolute;
            top:0.25rem;
            left:-0.4rem;
        }
        .hideit{
            display:none;
        }
        .tabhide{
            display:none;
        }
    }
}
</style>
<template>
    <div>
        <div class="mes_wrap" ref="section">
            <div>
                <section v-html="text">
                </section>
            </div>
            <div>
                <span>
                    {{name}}&nbsp;{{time}}
                </span>
                <span :class="{'hideit':hideit,'tabhide':!tabhide}" @click="updown('收起')">
                    <div class="triangle-up"></div>收起
                </span>
                <span :class="{'hideit':hideit,'tabhide':tabhide}" @click="updown('展开')">
                    <div class="triangle-down"></div>展开
                </span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'v-mes',
        props:['text','name','time'],
        data(){
            return{
                hideit:true,
                tabhide:false,
                changeheight:false,
                acolor:false,
            }
        },
        mounted(){
            //判断文本是否溢出  控制显示  展开/收起
            if(this.$refs.section.children[0].children[0].clientHeight>this.$refs.section.children[0].clientHeight){
                this.hideit=false;
            }else{
                this.hideit=true;
            }
        },
        methods:{
            updown(val){
                this.tabhide=!this.tabhide;
                switch(val){
                    case '收起':
                        this.$refs.section.children[0].style.height='0.8rem';
                        break;
                    case '展开':
                        this.$refs.section.children[0].style.height=this.$refs.section.children[0].children[0].clientHeight+'px';
                        break;
                }
            }
        }
    }
</script>