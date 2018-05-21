<style lang="less" scoped>
.main_header{
	position: fixed;
	width: 100%;
	height:3.2rem;
    z-index: 2000;
}
.search_wrap{
    height:100%;
    width:100%;
    position:relative;
    text-align: center;
    &>input{
        width:86%;
		left: 7%;
		top:1.2rem;
		height: 0.88rem;
		position: absolute;
		font-family: PingFangSC-Light;
		font-size: 0.3rem;
		color: #999999;
		letter-spacing: 2px;
		text-align: center;
		outline: none;
		background: #FFFFFF;
		box-shadow: 0 0.1rem 0.3rem 0 #3076B1;
		border-radius: 0.06rem;
		border:none;
    }
    .p1{
		font-family: PingFangSC-Medium;
		font-size: 0.36rem;
		color: #FFFFFF;
		letter-spacing: 0.02rem;
		position: relative;
		top:0.35rem;
	}
	.p2{
		font-family: PingFangSC-Regular;
		font-size: 0.3rem;
		color: #FFFFFF;
		letter-spacing: 0;
		position: relative;
		top:1.9rem;
	}
    input::-webkit-input-placeholder {
        font-family: PingFangSC-Regular;
		font-size: 0.3rem;
		color: #999999;
		letter-spacing: 0;
    }
    &>img{
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        z-index:-1;
    }
}
.list{
    width:100%;
    z-index:-1;
    background: #FFFFFF;
    margin-top: 0.2rem;
    .list_title{
        width: 100%;
		height: 0.8rem;
		position: relative;
		img{
			height: 0.4rem;
			width: 0.4rem;
			position: absolute;
			top:0.15rem;
			left:0.2rem;
		}
		p{
			font-family: PingFangSC-Regular;
			font-size: 0.3rem;
			color: #999999;
			letter-spacing: 0.02rem;
			line-height: 0.3rem;
			position: absolute;
			top:0.22rem;
			left:0.7rem;
		}
    }
    .list_content{
        width:100%;
        background:#FFFFFF;
        padding:0.15rem;
        padding-top: 0;
        box-sizing:border-box;
        span{
            box-sizing:border-box;
            float:left;
            border: 1px solid #CCCCCC;
            border-radius: 0.06rem; 
            display:inline-block;
            width:2.3rem;
            height:0.8rem;
            text-align:center;
            margin:0.05rem;
            font-size:0.3rem;
            color:#378AD6;
            font-family:PingFangSC-Regular;
            letter-spacing: 0.02rem;
            em{
            	font-size:0.2rem;
            	position: relative;
            	top:-0.15rem;
            }
        }
    }
    .list_item{
        text-align:center;
        font-family: PingFangSC-Regular;
        font-size: 0.3rem;
        color: #999999;
        letter-spacing: 0;
        line-height:0.8rem;
        background: #FFFFFF;
        border-top:1px solid #CCCCCC;
        width:100%;
    }
}
.header_select{
    width:84%;
    background: #FFFFFF;
    margin:0 auto;
    box-shadow: 0 0.1rem 0.24rem 0 #849EB7;
    position: absolute;
    top:2.1rem;
    left:8%;
    background: #FFFFFF;
    &>span{
		display: block;
		width:100%;
		height:0.7rem;
		position: relative;
		&>p{
			font-family: PingFangSC-Regular;
			font-size: 0.3rem;
			color: #999999;
			letter-spacing: 2px;
			line-height:0.7rem;
			position: absolute;
		}
		&>p:nth-child(1){
			left:0.5rem;
		}
		&>p:nth-child(2){
			right:0.5rem;
		}
	}
}
.accdisnone{
    display: none;
}
.accdisblock{
    display: block;
}
.clearfix:after {
    content: "";
    display: block;
    clear: both;
    height: 0;
}
.nt{
	height:3.2rem;
}
em{
	font-style: normal;
	font-weight: normal;
}
</style>
<template>
    <div>
	    <div class="main_header">
	    	<div class='search_wrap'>
	            <p class="p1">AI测股</p>
	            <input type="text" v-model="searchvalue" placeholder="🔍  输入股票名称/代码/首字母" @focus="focus" @blur="blur">
	            <p class="p2">[ 大数据  人工智能预测股票未来 ]</p>
	            <img :src="header_bg">
	        </div>
	        <div class="header_select" :class="[inputon?'accdisblock':'accdisnone']">
		        <span @click="search(y)" v-for="y in selectdatas">
					<p>{{y.Name}}</p><p>{{y.Code}}</p>
				</span>
			</div>
	    </div>
	    <div class="nt"></div>
	    <div class='list' v-if="datas.length!=0">
            <div class='list_title'>
               <img :src="hot_timg">
				<p>热门诊股</p>
            </div>
            <div class='list_content clearfix'>
                <span v-for="y in datas" @click="search(y)">
                    {{y.StockName}}<br><em>{{y.StockCode}}</em>
                </span>
            </div>
        </div>
        <div class='list' v-if="clinicdata.length!=0">
            <div class='list_title'>
               <img :src="record_timg">
				<p>诊股记录</p>
            </div>
            <div class='list_content clearfix'>
                <span v-for="x in clinicdata" @click="search(x)">
                    {{x.Name}}<br><em>{{x.Code}}</em>
                </span>
            </div>
            <div class='list_item' @click="clearrecord">
                清除诊股记录
            </div>
        </div>
    </div>
</template>
<script>
    export default {
	    data(){
	    	return{   
                searchvalue:'',
                selectdatas:'',
                inputon:false,
                clinicdata:'',
                header_bg:require('../assets/clinic/news_topbg@'+this.$store.state.dpr+'x.png'),
    			hot_timg:require('../assets/index/diagnose_icon_hot@'+this.$store.state.dpr+'x.png'),
    			record_timg:require('../assets/index/diagnose_icon_record@'+this.$store.state.dpr+'x.png'),
                datas:'',
            }
        },
        created(){
        	//获取userId
    		if(sessionStorage.userId=='undefined')sessionStorage.userId=this.$route.query.userId;
            var _that=this;
            let temparr = [];
            //如果诊股记录不存在，则初始化
            if(!localStorage.clinicrecord){
                localStorage.clinicrecord=JSON.stringify(temparr);
            }
            this.clinicdata=JSON.parse(localStorage.clinicrecord);
            this.$axios.post('GetHotChoose')
                .then((response)=>{
                    if(response.data.Success=="true"){
                        this.datas=response.data.Data
                    }
                })
                .catch((error)=>{
                    console.log(error);
                });
        },
        activated(){
			document.title='AI测股';
	    },
        watch:{
            searchvalue(val){
                if(!val){
				this.selectdatas='';
			}else{
				this.$axios.get('SearchStock/'+val)
			  	.then((response)=>{
			    	if(response.data.Success=="true"){
			    		this.selectdatas=response.data.Result
			    		if(val.length==6&&response.data.Result.length==1){
                            var temp1 = JSON.parse(localStorage.clinicrecord);
                            var temp2={
                                Name:response.data.Result[0].Name,
                                Code:response.data.Result[0].Code
                            }
                            //遍历验证是否含有此项
                            var putstate=true;
                            temp1.forEach(function(value,index,arr){
                                if(value.Code==temp2.Code)putstate=false;
                            })
                            if(putstate)temp1.push(temp2);
                            localStorage.clinicrecord=JSON.stringify(temp1);
                            this.clinicdata=JSON.parse(localStorage.clinicrecord);
			    			this.$router.push({
					    		path:'clinicreport',
					    		query:{
					    			code:val
					    		}
					    	});
			    		}
                    }
                })
                .catch((error)=>{
                    console.log(error);
                });
			}
            }
        },
        methods: {
            //搜索
            search(value){
                value.Name=value.Name||value.StockName;
                value.Code=value.Code||value.StockCode;
                //创建临时对象
                var temp1 = JSON.parse(localStorage.clinicrecord);
                var temp2={
                   Name:value.Name,
                   Code:value.Code
                }
                var putstate=true;
                //遍历验证是否含有此项
                temp1.forEach(function(value,index,arr){
                    if(value.Code==temp2.Code)putstate=false;
                })
                if(putstate)temp1.push(temp2);
                localStorage.clinicrecord=JSON.stringify(temp1);
                this.clinicdata=JSON.parse(localStorage.clinicrecord);
                this.$router.push({
                    path:'clinicreport',
                    query:{
                        code:value.Code
                    }
                });
            },
            focus(){
			    this.inputon=true;
            },
            blur(){
                var _that=this;
                setTimeout(function(){
                    _that.inputon=false;
                })
            },
            clearrecord(){
                var temp=[];
                localStorage.clinicrecord=JSON.stringify(temp);
                this.clinicdata=JSON.parse(localStorage.clinicrecord);
            }
        }
    }
</script>