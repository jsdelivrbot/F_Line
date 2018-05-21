<style lang="less" scoped>
	.com_not{
		position: relative;
	}
</style>
<template>
	<div>
		<div class="com_not" ref="comnot">
			<scroller ref="stopscroller" :on-infinite="infinite">
				<v-list v-for="(x,index) in datas" @click.native="godetail(x.Code)" :name='x.name' :code='x.Code' :price='x.nowPrice' :diff="x.diff_money" :index="index" :key="x.id">
				</v-list>
			</scroller>	
		</div>
	</div>
</template>
<script>
	import vList from '../list.vue';
	import Vue from 'vue';
	export default {
		components: {
			vList
		},
	    name: 'v-uplist',
	    data () {
		    return {
		     	datas:'',
		     	//索引
		     	upindex:1,
		     	//間隔
		     	upnum:20,
		     	//位置
		     	position:'',
			}
		},
		created(){
			//显示loading
			this.$vux.loading.show({text: '正在加载'})
	        this.$axios.post('GetRanking', {
		      type:'0',// this.$route.query.id
		      startIndex:this.upindex,
		      endIndex:this.upindex+this.upnum,
		      field:'diff_money',
		      order:'DESC'
		  	})
		  	.then((response)=>{
		  		// 隐藏loading
				this.$vux.loading.hide()
		    	if(response.data.Success=="true"){
		    		this.datas=response.data.List
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
				;
		    	console.log(error);
		  	});
		 },
		 mounted(){
		 	this.$refs.comnot.style.height=document.documentElement.clientHeight+'px';
		 },
		 activated(){
 			if(this.position){
				 setTimeout(()=>{
			        this.$refs.stopscroller.scrollTo(0, this.position, false)
			    })
 			}
		 },
		 deactivated(){
		 	//获取滚动位置
	 		this.position=this.$refs.stopscroller.getPosition().top;
		 	//停止滚动加载
		 	this.$refs.stopscroller.finishInfinite(true);
		 },
		 methods:{
		 	test(){
	 			console.log(12456879)
		 	},
		 	godetail(val){
		 		//进入个股行情
	 			// this.$router.push({
	 			// 	path:'rescontent',
	 			// 	query:{
	 			// 		id:val,
	 			// 		type:'info'
	 			// 	}
	 			// })
		 	},
		 	infinite (done) {
		 		//记录位置
		        setTimeout(() => {
		        	this.upindex=this.upindex+this.upnum+1;
            		this.$axios.post('GetRanking', {
			      		type:'0',// this.$route.query.id
			      		startIndex:this.upindex,
			      		endIndex:this.upindex+this.upnum,
			      		field:'diff_money',
	      				order:'DESC'
			  		})
			  		.then((response)=>{
			    		if(response.data.Success=="true"){
			    			//判断是否有数据
				    		if(response.data.List.length){
				    			response.data.List.forEach((value,index,arr)=>{
					    			this.datas.push(value)
					    		})
			         			//没有更多数据done(true)
			         			done();
				    		}else{
			         			//没有更多数据done(true)
			         			done(true);
				    		}
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
						;
				    	console.log(error);
				  	});
		        })
	        }
		 }
	}
</script>