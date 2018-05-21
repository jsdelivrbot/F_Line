<style lang="less" scoped>
	.con_wrap{
		padding:0.15rem;
		background: white;
		height: 100%;
	}
</style>
<template>
	<div class="con_wrap">
		<div>
			<div class="rc_cont" v-html="datas.Text"></div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				datas:'',
			}
		},
		activated(){
			//显示loading
			this.$vux.loading.show({text: '正在加载'})
	        this.$axios({
			    method:"GET",
			    url:localStorage.core2+'MornReports/'+this.$route.query.id,
			})
		  	.then((response)=>{
		  		// 隐藏loading
				this.$vux.loading.hide()
		    	if(response.data.Success=="true"){
		    		this.datas=response.data.Data;
		    		setTimeout(()=>{
		    			let arr=document.querySelectorAll('img');
		    			arr.forEach((value,index,arr)=>{
		    				var tempsrc=value.getAttribute('width');
		    				if(!tempsrc)value.setAttribute('width','100%')
		    				
		    			})
		    		})
		    	}else{
		    		this.$router.push({
			    		path:'fault',
			    		query:{
			    			msg:response.data.Error_msg
			    		} 
			    	});
		    	}
		  	})
		  	.catch((error)=>{
		  		// 隐藏loading
				this.$vux.loading.hide();
		    	console.log(error);
		  	});
	    },
	}
</script>