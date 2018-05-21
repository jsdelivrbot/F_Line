<template>
	<div >
		<div id="information-box">
			<ul class="msg-list" v-show="Lists.length>0">
				<li v-for='(item,index) in Lists' :key="item.Id" @click="viewDetail(item.Id)">
					    <div class="unread" v-if="Lists[index].Status==1"></div>
					    <a href="javascript:;"  :class="Lists[index].Title>16 ? 'msg':'msg1'">{{item.Title}}</a>
					    <div class="detail"><img :src="arrows"></div>
				</li>
			</ul>
			<div class="no-content" v-show="Lists.length==0">
				<img :src="noContent">
				<div>没有内容哦</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
	    data(){
	      return {
	        arrows: require('../../assets/images/my/setting_icon_right@' + this.$store.state.dpr + 'x.png'),
	        noContent:require('../../assets/images/my/my_news_icon_null@'+ this.$store.state.dpr + 'x.png'),
	        Lists:[] 
	      }
	    },
	    created(){
            this.$vux.loading.show({text: '正在加载'});
	    	var _that=this;
	    	//获取消息列表
            this.$axios.post('MessageList', {
            })
            .then(response =>{
                if(response.data.Success=="true"){
                    //console.log(response)
                    _that.$vux.loading.hide();
                    _that.Lists=response.data.List;    
                }   
            })
            .catch((error)=>{
                // 隐藏loading
                this.$vux.loading.hide();
                this.$router.push({path:'/fault'});
                console.log(error);
            });
	    },
        methods:{
            // 跳转到对应id的文章详情页
             viewDetail: function(id) {
                this.$router.push({ name: 'news', params: {id:id}});
            }
        },
        activated(){
            document.title='我的消息';
        },
  }
</script>
<style lang="less" scoped>
   @import '../../style/base.less';
 *{
 	box-sizing: border-box;
 }
 #information-box{
 	width:100%;
 	height:auto;
 	margin-top:0.1rem;
 	.msg-list{
 		width:100%;
 		height:100%;
 		background:#fff;
 		li{
 			width:100%;
 			height:1.2rem;
 			box-shadow: 0 1px 0 0 rgba(153,153,153,0.50);
 			padding-left: 0.8rem;
 			padding-right: 1.2rem;
 			position: relative;
 			font-family: PingFangTC-Regular;
			font-size: 0.3rem;
			color: #000000;
			letter-spacing: 0;
			padding-top: 0.14rem;
 			.unread{
	            width:0.2rem;
	            height:0.2rem;
	            border-radius: 50%;
	            position: absolute;
	            left:0.3rem;		
	            top:50%;
	            margin-top:-0.1rem;
	            background:#378AD6;
 			}
 			.detail{
 				width:0.32rem;
 				height:0.32rem;
 				position: absolute;
 				right:0.3rem;
 				top:50%;
 				margin-top:-0.16rem;
 				img{
 					width:100%;
 					height:100%;
 				}
 			}
 			.msg {
 				width:100%;
 				height:100%;
 				display: block;
 			    color: #000;
 			    text-align: left;
 			    line-height: 0.46rem;
 			    font-family: PingFangSC-Medium;
				font-size:0.32rem;
				color: #000000;
				letter-spacing:0.02rem;
				overflow: hidden;
 			}
 			.msg1 {
 				width:100%;
 				height:100%;
 				display: block;
 			    color: #000;
 			    text-align: left;
 			    line-height: 0.9rem;
 			    font-family: PingFangSC-Medium;
				font-size:0.32rem;
				color: #000000;
				letter-spacing:0.02rem;
				overflow: hidden;
				font-weight: bold;
 			}
 		}
 	}
 	.no-content{
 		width: 100%;
 		height:auto;
        margin-top:1rem;
 		img{
 			width: 100%;
 			display: block;
 		}
 		div{
 			width: 100%;
 			height:auto;
 			font-family: PingFangSC-Regular;
			font-size:0.3rem;
			color: #CCCCCC;
			letter-spacing: 0;
			text-align: center;

 		}
 	}
 }
</style>