import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import plate from './modules/plate'//行情（板块）
import hushen from './modules/hushen'//行情（沪深
import platedetail from './modules/platedetail'//行情（板块详情）
import index from './modules/index'//行情（涨幅榜等）
Vue.use(Vuex)
const state={
	APPID:'wlkx1s5foth387gg6ad780',
	//设备分辨率比率
	dpr:window.devicePixelRatio<=2?2:3,
	//日k
	dayk:[],
	//周k
	weekk:[],
	//月k
	monthk:[],
	//游戏前60根数据
	gbdata:[],
	//游戏后20根数据
	gadata:[],
	alertstate:false,
	graphid:1,//图形选股ID
	inpagecom:'',//页面组件控制
	timeout:0,//定时器个数控制
	incliniccom:0,//在诊股组件内
	flag:true
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
	modules:{
		plate,
		hushen,
		platedetail,
		index
	}
})