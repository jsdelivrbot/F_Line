<style lang="less" scoped>
.search_wrap{
    height:0.88rem;
    width:100%;
    background:#378AD6 100%;
    position:relative;
    &>input{
        position:absolute;
        height:0.6rem;
        width:96%;
        left:2%;
        top:0.14rem;
        background: #FFFFFF;
        border-radius: 0.06rem;
        border:none;
        overflow:hidden;
        text-align:center;
    }
    input::-webkit-input-placeholder {
        font-family: PingFangSC-Regular;
        font-size: 0.24rem;
        color: #999999;
        letter-spacing: 0;
    }
    &>img{
        width:0.32rem;
        height:0.32rem;
        position:absolute;
        top:0.3rem;
        left:0.5rem;
        z-index:100;
    }
}
.list{
    width:100%;
    position:absolute;
    top:0.8rem;
    z-index:-1;
    .list_title{
        font-family: PingFangSC-Regular;
        font-size: 0.24rem;
        color: #999999;
        letter-spacing: 2px;
        line-height: 0.6rem;
        height:0.6rem;
        padding-left:0.2rem;
    }
    .list_content{
        width:100%;
        background:#FFFFFF;
        padding:0.15rem;
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
                font-style:normal;
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
    width:96%;
    background: #FFFFFF;
    margin:0 auto;
    box-shadow: 0 0.1rem 0.24rem 0 #849EB7;
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
</style>
<template>
    <div>
        <div class='search_wrap'>
            <!-- <img :src="search_img"> -->
            <input type="text" v-model="searchvalue" placeholder="🔍  输入股票名称/代码/首字母" @focus="focus" @blur="blur">
        </div>
        <div class="header_select" :class="[inputon?'accdisblock':'accdisnone']">
                <span @click="search(y)" v-for="y in selectdatas">
                    <p>{{y.Name}}</p><p>{{y.Code}}</p>
                </span>
			</div>
        <div class='list' v-if="clinicdata.length!=0">
            <div class='list_title'>
               诊股记录
            </div>
            <div class='list_content clearfix'>
                <span v-for="x in clinicdata" @click="search(x)">
                    {{x.Name}}<br><em>{{x.Code}}</em>
                </span>
            </div>
            <div class='list_item' @click="clearrecord">
                清除搜索记录
            </div>
        </div>
    </div>
</template>
<script>
    export default {
	    data(){
	    	return{   
                // search_img:require('../../assets/index/home_icon_search@'+this.$store.state.dpr+'x.png'),
                searchvalue:'',
                selectdatas:'',
                inputon:false,
                clinicdata:''
            }
        },
        created(){
            var _that=this;
            //获取userId
            if(sessionStorage.userId=='undefined')sessionStorage.userId=this.$route.query.userId;
            let temparr = [];
            //如果诊股记录不存在，则初始化
            if(!localStorage.clinicrecord){
                localStorage.clinicrecord=JSON.stringify(temparr);
            }
            this.clinicdata=JSON.parse(localStorage.clinicrecord);
        },
        mounted(){
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
			}
            }
        },
        methods: {
            //搜索
            search(value){
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