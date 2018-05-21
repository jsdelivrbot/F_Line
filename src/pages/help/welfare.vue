<style lang="less" scoped>
	.welfare{
	   text-align: center; 
	   padding-top:40%;
	}
	.icon{
	    font-size:3rem;
	}
	p{
	    font-family: PingFangSC-Regular;
	    font-size: 0.4rem;
	    color: #999999;
	    letter-spacing: 2px;
	    padding-top: 0.4rem;
	}
</style>
<template>
	<div class="welfare" v-title="'领福利'">
		<icon type="waiting" is-msg class="icon"></icon>
        <p>此页面正在开发中...</p>
	</div>
</template>
<script>
	import {  Icon } from 'vux'
	export default {
	    components: {
	        Icon
	    },
	    activated(){
	        document.title='';
	    },
	}
</script>