<style lang="less" scoped>
.com_not{
		position: relative;
	}
</style>
<template>
	<div v-title="'热点布局'">
		<div class="com_not" ref="comnot">
			<scroller  :on-infinite="infinite">
				<v-panel v-for="x in datas" @click.native="godetail(x.Id)" :imgsrc="'info'" :time='x.TimeBefore.replace("公告日期：","")' :text='x.Title' :infoactive="true" :key="x.id">
				</v-panel>
			</scroller>	
		</div>
	</div>
</template>
<script>
	import vPanel from '../../components/panel.vue';
	import Vue from 'vue';
	export default {
		components: {
			vPanel
		},
	    name: 'v-info',
	    data () {
		    return {
		     	showtext:'',
		     	showtime:'',
		     	datas:''
			}
		},
		mounted(){
			this.$refs.comnot.style.height=document.documentElement.clientHeight+'px';
		 	//获取公告
	    	Vue.$infoindex=1;
	    	//间隔数
	    	Vue.$infonum=5;
			//显示loading
			this.$vux.loading.show({text: '正在加载'})
	        this.$axios.post('GetNewsList', {
		      code:'000697',// this.$route.query.id
		      startIndex:Vue.$infoindex,
		      endIndex:Vue.$infoindex+Vue.$infonum
		  	})
		  	.then((response)=>{
		  		// 隐藏loading
				this.$vux.loading.hide()
		    	if(response.data.Success=="true"){
		    		this.datas=response.data.Newses
		    	}
		    	this.datas=response.data.Newses
		    	console.log(this.datas)
		  	})
		  	.catch((error)=>{
		  		// 隐藏loading
				this.$vux.loading.hide()
		    	console.log('error'+error);
		  	});
	        this.top = Vue.$infoindex;
	        this.bottom = Vue.$infoindex+Vue.$infonum;
		 },
		 methods:{
		 	godetail(val){
	 			this.$router.push({
	 				path:'rescontent',
	 				query:{
	 					id:val,
	 					type:'info'
	 				}
	 			})
		 	},
		 	infinite (done) {
		        setTimeout(() => {
		        	Vue.$infoindex=Vue.$infoindex+Vue.$infonum+1;
		            var start = this.bottom + 1
            		this.$axios.post('GetNewsList', {
			      		code:'000697',// this.$route.query.id
			      		startIndex:Vue.$infoindex,
			      		endIndex:Vue.$infoindex+Vue.$infonum
			  		})
			  		.then((response)=>{
			    		// if(response.data.Success=="true"){
			    		// 	this.datas.push(response.data.Newses[i]);
			    		// }
			    		//this.datas.push(response.data.Newses[i]);
			    		//判断是否有数据
			    		if(response.data.Newses.length){
			    			response.data.Newses.forEach((value,index,arr)=>{
				    			this.datas.push(value)
				    		})
				    		this.bottom = this.bottom + Vue.$infonum+1
		         			//没有更多数据done(true)
		         			done();
			    		}else{
			    			this.bottom = this.bottom + Vue.$infonum+1
		         			//没有更多数据done(true)
		         			done(true);
			    		}
			    		
			  		})
			  		.catch((error)=>{
				    	console.log('error'+error);
			  		});
		        }, 1500)
	        }
		 }
	}
</script>