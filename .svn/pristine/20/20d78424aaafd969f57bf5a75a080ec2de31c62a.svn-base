<style lang="less" scoped>
    .tabnav{
        position: fixed;
        top:0;
        width: 100%;
        height:0.8rem;
        background: #FFFFFF;
        z-index: 1000;
    }
    .nt{
        height:0.8rem;
        width: 100%;
    }
</style>
<template>
    <div >
        <div  class="tabnav">
            <tab :left="15">
              <tab-item selected @on-item-click="onItemClick('v-cheats')">策略精选</tab-item>
              <tab-item @on-item-click="onItemClick('v-analysis')">盘面分析</tab-item>
            </tab>
        </div>
        <div class="nt"></div>
        <keep-alive>
    		<component :is="nav_components" :isreload="reloadit"></component>
    	</keep-alive>
    </div>
</template>
<script>
import { Tab, TabItem } from 'vux';
import vCheats from '../../components/bigdata/limitcheats.vue';
import vAnalysis from '../../components/bigdata/tapeanalysis.vue';
export default {
    components: {
        vCheats,
        vAnalysis,
        Tab,
        TabItem,
    },
    data() {
        return{
            nav_components:'v-cheats',
            reloadit:false,
        }
    },
    created(){
        if(sessionStorage.userId=='undefined')sessionStorage.userId=this.$route.query.userId;
    },
    methods:{
        onItemClick(val){
            this.nav_components=val;
        }
    },
    activated(){
        document.title='大数据策略';
    },
    beforeRouteLeave (to, from, next) {
        if(to.path=="/main"){
            this.reloadit=true;
        }else if(to.path=="/marketTrend"){
            this.reloadit=false;
        }
        next();
    },
}
</script>