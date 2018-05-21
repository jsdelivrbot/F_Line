<template>
    <div id="quoBox" ref="quo">
         <div v-transfer-dom>
            <popup v-model="showpopup">
                <div class="popup">
                    <img src="../../assets/qrcode.jpg">
                    <p>长按图片关注公众号<br>体验更多功能</p>
                </div>
            </popup>
        </div>
        <div class="search" @click.prevent="searchOption"><img :src="bg"></div>
        <div class="header">
            <tab :left="4" >
                <tab-item :selected="selected!=1" @on-item-click="onItemClick('plate1')">沪深</tab-item>
                <tab-item  @on-item-click="onItemClick('plate2')" >板块</tab-item>
                <tab-item :selected="selected==1" @on-item-click="onItemClick('plate3')">诊股排名</tab-item>
            </tab>
        </div>
        <keep-alive>
            <component :is="quo_components"></component>
        </keep-alive>
    </div>
</template>
<script>
    import {Popup,TransferDomDirective as TransferDom ,Loading ,Tab, TabItem} from 'vux';
    import vHushen from './hushen.vue';
    import vPlate from './plate.vue';
    import vRanking from './ranking.vue';
    export default {
        name:'v-quoheader',
        directives: {
            TransferDom
        },
        components: {
            Tab,
            TabItem,
            vRanking,
            vPlate,
            vHushen,
            Popup,
            
        },
        
        data () {
            return {
              selected:"2",
              quo_components:'v-hushen',
              bg: require('../../assets/images/quotation/price_btn_searchbar@' + this.$store.state.dpr + 'x.png'),
              showpopup:false
            }
        },
        methods: {
            onItemClick (index) {
                switch (index){
                    case 'plate1':
                        this.quo_components='v-hushen';
                    break;
                    case 'plate2':
                        this.quo_components='v-plate';
                    break;
                    case 'plate3':
                        this.quo_components='v-ranking';
                    break;
                }
            },
            searchOption:function(){
                if(sessionStorage.userId=='undefined'){
                    this.showpopup=true;
                }else{
                    this.$router.push({
                        path:'/search',
                        query:{
                            status:1
                        }
                    }) 
                }
                
            },
        },
        created(){
            if(this.$route.query.home==1){
                this.selected=1;
                this.quo_components='v-ranking';
            }
        },
        mounted(){
            this.$refs.quo.style.height=document.documentElement.clientHeight+'px';
            if(this.$route.query.home==1){
                this.selected=1;
                this.quo_components='v-ranking';
            }
        },
        activated(){
            if(this.$route.query.home==1){
                this.selected=1;
                this.quo_components='v-ranking';
            }
        },
    }
</script>
<style lang="less" scoped>
   *{
        box-sizing: border-box;
    }
    body{
        overflow: hidden;
        width: 100%;
    }
#quoBox{
    width:100%;
    height:100%;
    position: relative;
    .search{
        width:100%;
        height:0.9rem;
        background:#3f8ed5;
        position: relative;
        img{
            width:6.9rem;
            height:0.6rem;
            position: absolute;
            left:50%;
            margin-left:-3.45rem;
            top:50%;
            margin-top:-0.3rem;
        }
    }
    .header{
        width:100%;
        height:0.8rem;
        margin-bottom: 0.1rem;
        .vux-tab{
            width:100%;
            height:100%;
        }
    }
}
.active-6-1 {
    color: rgb(252, 55, 140) !important;
    border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
    color: #04be02 !important;
    border-color: #04be02 !important;
}
.active-6-3 {
    color: rgb(55, 174, 252) !important;
    border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
    background-color: #fff;
    height: 100px;
}
 .line1{
        width: 1rem;
        height:0.06rem;
        background:rgb(55, 138, 214);
        position: absolute;
        top:1.7rem;
        left:10%;
    }
    .line2{
        width: 1.2rem;
        height:0.06rem;
        background:rgb(55, 138, 214);
        position: absolute;
        top:1.7rem;
        left:42.5%; 
    }
    .line3{
        width: 1.4rem;
        height:0.06rem;
        background:rgb(55, 138, 214);
        position: absolute;
        top:1.7rem;
        left:73.7%;  
    }
    .popup{
    text-align: center;
    img{
        padding-top:1rem;
    }
    p{
        font-family: PingFangSC-Regular;
        font-size: 0.36rem;
        color: black;
        letter-spacing: 2px;
        padding-bottom:0.2rem;
    }
}
</style>