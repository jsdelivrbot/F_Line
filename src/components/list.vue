<style lang="less" scoped>
.wrap{
	height:1rem;
	width:100%;
	box-shadow: 0 1px 0 0 rgba(153,153,153,0.50);
	text-align: center;
	position: relative;
	p{
		font-family: PingFangSC-Regular;
		font-size: 0.3rem;
		color: #000000;
		letter-spacing: 2px;
		line-height: 1rem;
		display: inline-block;
	}
	&>p:nth-child(1){
		position: absolute;
		left:0.2rem;
		top:-0.15rem;
	}
	&>p:nth-child(2){
		position: absolute;
	}
	&>p:nth-child(3){
		position: absolute;
		right:0.2rem;
	}
	&>p:nth-child(4){
		position: absolute;
		left:0.2rem;
		top:0.3rem;
		font-family: PingFangSC-Regular;
		font-size: 0.2rem;
		color: #999999;
		letter-spacing: 0;
	}
	.textred{
		color:#FF5E45;
	}
	.textgreen{
		color:#1CB54A;
	}
}
.white{
	background: #FFFFFF;
}
.gray{
	background: #F8F8F8;
}
</style>
<template>
	<div>
		<div class="wrap" :class="[(index%2==0)?'white':'gray']">
			<p>{{name}}</p>
			<p :class="[diff>=0?'textred':'textgreen']">{{price}}</p>
			<p :class="[diff>=0?'textred':'textgreen']">{{diff}}%</p>
			<p>{{code}}</p>
		</div>
	</div>
</template>
<script>
	export default {
	    name: 'v-list',
	    props:['name','code','price','diff','index'],
	    data () {
		    return {
			}
		},
		mounted(){
		}
	}
</script>
