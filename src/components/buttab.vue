<style lang="less" scoped>
	.but_wrap{
		display: flex;
		width:2.1rem;
		margin:0 auto;
		box-sizing:border-box;
		button{
			width:100%;
			height:0.4rem;
			border:1px solid #FF5F45;
			font-family: PingFangSC-Regular;
			background:#FFFFFF;
			font-size: 0.24rem;
			color: #FF5F45;
			letter-spacing: 2.4px;
			box-sizing:border-box;
		}
		button:first-child{
			border-radius:0.08rem;
		}
		// button:last-child{
		// 	border-radius:0 0.08rem 0.08rem 0;
		// }
		// .active{
		// 	background: #FF5F45;
		// 	color:#FFFFFF;
		// }
		// .inactive{
		// 	background: #FFFFFF;
		// 	color:#FF5F45;
		// }
	}
	
</style>
<template>
	<div>
		<div class="but_wrap">
			<button @click="butclick('fir')" :class="[butbg?'active':'inactive']">{{lefttext}}</button>
			<!--button @click="butclick('sec')" :class="[butbg?'inactive':'active']">{{righttext}}</button-->
		</div>
	</div>
</template>
<script>
	export default {
	    name: 'v-buttab',
	    props:['lefttext','righttext'],
	    data () {
		    return {
		    	butbg:true
			}
		},
		methods:{
			butclick(index){
				switch(index){
					case 'fir':
					this.butbg=true;
					this.$emit('on-click','fir');
					break;
					case 'sec':
					this.butbg=false;
					this.$emit('on-click','sec');
					break
				}
			}
		}
	}
</script>
