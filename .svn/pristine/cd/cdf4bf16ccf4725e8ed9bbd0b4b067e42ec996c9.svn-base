<style lang="less" scoped>
.wrap{
    width:100%;
    height:100%;
    text-align:center;
    vertical-align:middle;
    line-height:100%;
    img{
        width:4rem;
        margin-top:40%;
    }
    p{
        font-family: PingFangSC-Regular;
        font-size: 0.3rem;
        color: #999999;
        letter-spacing: 0;
    }
}
</style>
<template>
    <div>
        <div class="wrap">
            <img :src="falutimg">
            <p>{{fauttext}}</p>
        </div>
    </div>
</template>
<script>
    export default {
	    data(){
            return{
                title:'出现异常',
                falutimg:require('../assets/fault/icon_nocontent@'+this.$store.state.dpr+'x.png'),
                fauttext:'网络出现异常'
            }
        },
        created(){
            if(this.$route.query.msg){
                this.fauttext=this.$route.query.msg;
            }
        },
        activated(){
            document.title=this.title;
        },
    }
</script>