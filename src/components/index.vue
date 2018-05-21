<template>
	<div>
		<tabbar class="main_footer">
	      <tabbar-item @click.native="pagecontrol('/main')" :selected="seclected=='/main'" :link="link1">
	        <img slot="icon" :src='index'>
	        <img slot="icon-active" :src='indexact'>
	        <span slot="label">首页</span>
	      </tabbar-item>
	      <tabbar-item @click.native="pagecontrol('/quotation')" :selected="seclected=='/quotation'"  :link="link2">
	        <img slot="icon" :src='market'>
	        <img slot="icon-active" :src='marketact'>
	        <span slot="label">行情</span>
	      </tabbar-item>
	      <tabbar-item @click.native="pagecontrol('/GraphStocks')" :selected="seclected=='/GraphStocks'" :link="link3">
	        <img slot="icon" :src='choose'>
	        <img slot="icon-active" :src='chooseact'>
	        <span slot="label">形态选股</span>
	      </tabbar-item>
	      <tabbar-item @click.native="pagecontrol('/optional')" :selected="seclected=='/optional'" :link="link4">
	        <img slot="icon" :src='selfc'>
	        <img slot="icon-active" :src='selfcact'>
	        <span slot="label">自选</span>
	      </tabbar-item>
	      <tabbar-item @click.native="pagecontrol('/my')" :selected="seclected=='/my'"  :link="link5">
	        <img slot="icon" :src='mine'>
	        <img slot="icon-active" :src='mineact'>
	        <span slot="label">我的</span>
	      </tabbar-item>
	    </tabbar>
        <div v-transfer-dom>
          <popup v-model="showpopup">
            <div class="popup">
                <img src="../assets/qrcode.jpg">
                <p>长按图片关注公众号<br>体验更多功能</p>
            </div>
          </popup>
        </div>
	</div>
</template>
<script>
import { TransferDomDirective as TransferDom,Tabbar, TabbarItem,Popup} from 'vux';
export default {
    name: 'v-footer',
    data(){
    	return{
			index:require('../assets/index/tab_btn_home_nor@'+this.$store.state.dpr+'x.png'),
			indexact:require('../assets/index/tab_btn_home_pre@'+this.$store.state.dpr+'x.png'),
			market:require('../assets/index/tab_btn_price_nor@'+this.$store.state.dpr+'x.png'),
			marketact:require('../assets/index/tab_btn_price_pre@'+this.$store.state.dpr+'x.png'),
			choose:require('../assets/index/tab_btn_choose_nor@'+this.$store.state.dpr+'x.png'),
			chooseact:require('../assets/index/tab_btn_choose_pre@'+this.$store.state.dpr+'x.png'),
			selfc:require('../assets/index/tab_btn_optional_nor@'+this.$store.state.dpr+'x.png'),
			selfcact:require('../assets/index/tab_btn_optional_pre@'+this.$store.state.dpr+'x.png'),
			mine:require('../assets/index/tab_btn_my_nor@'+this.$store.state.dpr+'x.png'),
			mineact:require('../assets/index/tab_btn_my_pre@'+this.$store.state.dpr+'x.png'),
            seclected:'',
            showpopup:false,
            link1:'/main',
            link2:'/quotation',
            link3:'/GraphStocks',
            link4:'/optional',
            link5:'/my',
    	}
    },
    props:['curpage'],
    directives: {
        TransferDom
      },
    components: {
    	Tabbar,
        TabbarItem,
        Popup
    },
    created(){
        if(sessionStorage.userId=='undefined'){
            this.link3='';
            this.link4='';
            this.link5='';
        }
    },
    activated(){
        switch(this.curpage){
            case "/main" :
                this.seclected='/main';
                break;
            case "/quotation" :
                this.seclected='/quotation';
                break;
            case "/GraphStocks" :
                this.seclected='/GraphStocks';
                break;
            case "/optional" :
                this.seclected='/optional';
                break;
            case "/my" :
                this.seclected='/my';
                break;
        }
    },
    methods:{
        pagecontrol(val){
            //进入页面控制
            switch(val){
                case "/main" :
                    this.seclected='/main';
                    break;
                case "/quotation" :
                    this.seclected='/quotation';
                    break;
                case "/GraphStocks" :
                    //游客模式限制
                    if(sessionStorage.userId=='undefined'){
                        //弹出公众号
                        this.showpopup=true;
                    }
                    this.seclected='/GraphStocks';
                    break;
                case "/optional" :
                    //游客模式限制
                    if(sessionStorage.userId=='undefined'){
                        //弹出公众号
                        this.showpopup=true;
                    }
                    this.seclected='/optional';
                    break;
                case "/my" :
                    //游客模式限制
                    if(sessionStorage.userId=='undefined'){
                        //弹出公众号
                        this.showpopup=true;
                    }
                    this.seclected='/my';
                    break;
            }
        }
    }
}
</script>
<style  lang="less" scoped>
.main_footer{
	position: fixed!important;
	bottom: 0;
	background: #FFFFFF!important;
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