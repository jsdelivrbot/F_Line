<template>
	<div>
        <div class="has" v-if="graphResults.length>0">
            <div class="result-head">
                <div class="tip">近期可能走出{{this.type}}形态的股票</div> 
            </div>
            <div class="zhanwei"></div>
            <div>
                <ul class="result-body">
                    <li class="detail-list" v-for='(item,index) in graphResults' :id="'a'+index">
                        <div class="detail-name"> 
                            <div class="left">{{item.Name}} ({{item.Code}})</div>
                            <div class="right" @click.prevent="toIndividual(item.Code)"><img :src="check"></div>
                        </div>
                        <div class="detail-Kline">
                            <div id="charts"><div :id="item.idname"></div></div>
                            <div class="marsk"></div>
                        </div> 
                    </li>
                </ul> 
            </div> 
        </div>
        <div class="nodata" v-if="!flag">
            <img :src="nodata">
        </div>
	</div>
</template>
<script>
    import Vue from 'vue';
    export default{
        data(){
          return {
            addself: require('../../assets/images/graph/imgshoose_btn_add@' + this.$store.state.dpr + 'x.png'),
            addedself: require('../../assets/images/graph/imgshoose_btn_added@' + this.$store.state.dpr + 'x.png'),
            check:require('../../assets/images/graph/imgshoose_btn_comment@'+ this.$store.state.dpr + 'x.png'),
            nodata:require('../../assets/images/graph/imgchoose_icon_noimg@'+this.$store.state.dpr+'x.png'),
            graphResults:[],
            ok:false,
            sign:true,
            temp:'',
            flag:true,
            type:'',
            idName:['main1','main2','main3','main4','main5','main6']
          }
        },
        created(){
             if(sessionStorage.userId=='undefined')sessionStorage.userId=this.$route.query.userId;
        },
        mounted() {
            this.$vux.loading.show({text: '正在加载'}); 
             if(!this.$route.params.type){
                    console.log(localStorage.graph)
                    this.type=JSON.parse(localStorage.graph).type;
            }else{
                    var temp={};
                    temp={
                        type:this.$route.params.type,
                        id:this.$route.params.id
                    }
                    localStorage.graph=JSON.stringify(temp);
                    this.type=temp.type;
            }
            var _that=this;
            //获取图形选股首页结果
            this.$axios.post('XG', {
                patternId:this.$route.params.id,
                userId:JSON.parse(sessionStorage.userId)
            })
            .then(response =>{
                if(response.data.Success=="true"){
                    setTimeout(this.$vux.loading.hide(),3000);
                    _that.graphResults=response.data.Result;
                            _that.graphResults.forEach(function(value,index,arr){
                                value.idname=_that.idName[index];
                             
                        })        
                }   
            })
            .catch((error)=>{
                // 隐藏loading
                this.$vux.loading.hide();
                console.log(error);
            });
        },
        methods: {
             //整理K数据格式 (time0 open1 close2 min3 max4 vol5 tag6 macd7 dif8 dea9)  
            getKdata:function(kData){
              var source = [[]];
              for (var i = 0; i<kData.length; i++) {
                  var data = [];
                  for(var key in kData[i]) {
                      data.push( kData[i][key]);
                  }
                let   time0=this.sliceData(4,5,data),
                      open1=this.sliceData(0,1,data),
                      close2=this.sliceData(1,2,data),
                      min3=this.sliceData(3,4,data),
                      max4=this.sliceData(2,3,data),
                      vol5=this.sliceData(5,5,data);
                let tag6=0,macd7=0,dif8=0,dea9=0;
                      data=[time0, open1, close2, min3, max4,vol5, tag6, macd7, dif8, dea9];
                      source.push(data);
              }
              source.splice(0,1);
              return source; 
            },
          //组装数据
            sliceData:function(start,end,obj){
              if (start==end){
                  return Number(obj.slice(start)[0]);
              }
              else{
                  if (start==1) {
                      return obj.slice(start,end)[0];
                  }else{
                      return Number(obj.slice(start,end)[0]);
                }
              }     
            },
            getData(){
                let id = this.$route.params.id;
                var _that=this;
                //获取图形选股首页结果
                this.$axios.post('XG', {
                    patternId:this.$route.params.id,
                    userId:JSON.parse(sessionStorage.userId)
                })
                .then(response =>{
                    if(response.data.Success=="true"){
                            this.graphResults=response.data.Result;
                            if(this.graphResults.length>0){
                                this.flag=true;
                            }else{
                                this.flag=false;
                            }
                            //console.log('1111++++',this.graphResults)
                             this.graphResults.forEach(function(value,index,arr){
                                value.idname=_that.idName[index];
                            })    
                             //console.log('2222++++',this.graphResults)
                            var kdata=[];
                            setTimeout(()=>{
                                for(var i=0;i<this.graphResults.length;i++){
                                    kdata[i]=this.getKdata(this.graphResults[i].Ks);
                                    this.$graph(kdata[i],this.idName[i],false,true,false,false,true,'',0,100);
                                }
                            },300)

                    }   
                })
                .catch((error)=>{
                    // 隐藏loading
                    this.$vux.loading.hide();
                    console.log(error);
                });
            },
            //添加自选
            addit (state,code,index) {
                if(state=='false'){
                    state='true';
                    this.graphResults[index].IsAdded='true';
                    this.$vux.loading.show({text: '正在加载'});
                    this.$axios.post('AddStockOption',{
                            userId:JSON.parse(sessionStorage.userId),
                            code:code    
                    })
                    .then((response)=>{
                        if(response.data.Success=="true"){
                            this.$vux.loading.hide(); 
                        }
                    })
                     .catch((error)=>{
                        // 隐藏loading
                        this.$vux.loading.hide();
                        ;
                        console.log(error);
                    });
                }
              
            },
            //查看个股点评
            toIndividual:function(code){
                 this.$router.push({
                    path:'/comment',
                    query:{
                        code:code
                    }
                })
            }

        },
        activated(){
            document.title='选股结果';
            //this.$vux.loading.show({text: '正在加载'});
            if(!this.$route.params.type){
                this.type=JSON.parse(localStorage.graph).type;
            }else{
                var temp={};
                temp={
                    type:this.$route.params.type,
                    id:this.$route.params.id
                }
                localStorage.graph=JSON.stringify(temp);
                this.type=temp.type;
            }
            setTimeout(()=>{
                if(this.$store.state.flag){
                     this.getData();
                     //this.$vux.loading.hide();
                }
               
            },200)
        },
        beforeRouteLeave (to, from, next) {

            if(to.path=="/GraphStocks"){
                //this.$destroy(true);
                this.flag=true;
                this.$store.dispatch('CHANGEFLAG', { state:true});
                this.graphResults=[];
            }
            if(to.path=='/comment'){
                this.$store.dispatch('CHANGEFLAG', { state:false});
            }
            next();
        },
        // beforeRouteEnter(to,from,next){
        //    if(from.path=='/comment'){
        //    }
        //    next();
        // }
  }
</script>
<style lang="less" scoped>
@import '../../style/base.less';
    *{
        box-sizing: border-box;
    }
    .has{
        width: 100%;
        height:auto;
    }
    .result-head{
        width:100%;
        height:auto;
        background:#fff;
        position: fixed;
        top: 0;
        left:0;
        padding-left: 0.2rem;
        z-index: 1000;
        .tip{
            width: 100%;
            height:0.62rem;
            font-family: PingFangSC-Regular;
            font-size: 0.3rem;
            color: #000;
            letter-spacing: 2px;
       }
       .result-list{
        width:100%;
        height:auto;
        li{
            width:2.3rem;
            height:0.8rem;
            float:left;
            margin-right:0.1rem;
            margin-bottom:0.1rem;
            background: #FFFFFF;
            box-shadow: 0.04rem 0.04rem 0.1rem 0 rgba(204,204,204,0.50);
            border-radius:0.06rem;
            a{
                display: block;
                width: 100%;
                height:100%;
                .stock-name{
                    text-align: center;
                    line-height: 0.5rem;
                    font-size: 0.3rem;
                    color:  #FF5F45;
                    letter-spacing: 2px;
                    font-family: PingFangSC-Medium;
                }
                .stock-code{
                    text-align: center;
                    line-height: 0.4rem;
                    font-size:0.2rem;
                    color:  #FF5F45;
                    letter-spacing: 1.33px;
                    display: block;
                    margin-top:-0.14rem;
                } 
            }
        }
        li:first-child{
            background:rgba(204,204,204,0.5);
        }
        li:first-child .stock-name,li:first-child .stock-code{
            color:#666;
        }
       }
    }
    .zhanwei{
        width:100%;
        height:0.82rem;
        background:#f8f8f8;
    }
    .result-body{
        width:100%;
        height:auto;
        background:#f8f8f8;
        li{
            width:100%;
            height:5.76rem;
            //margin-top:0.2rem;
            background:#fff;
            a{
                width: 100%;
                height:100%;
                display: block;
            }
            .detail-name{
                width:100%;
                height:1rem;
                text-align: left;
                line-height: 1rem;
                font-size: 0.3rem;
                color: #000;
                background:#fff;
                padding-left: 0.2rem;
                padding-right: 0.2rem;
                position: relative;
                .left{
                    float: left;
                    font-family: PingFangSC-Medium;
                    font-size:0.36rem;
                    color: #000000;
                    letter-spacing: 0;
                    line-height:1rem;
                }
                .center{
                    position: absolute;
                    width: 1.2rem;
                    height:0.6rem;
                    top:50%;
                    margin-top:-0.3rem;
                    right:1.6rem;
                    img{
                        width: 100%;
                        display: block;
                    }
                }
                .right{
                    position: absolute;
                    width: 1.2rem;
                    height:0.6rem;
                    right: 0.2rem;
                    top:50%;
                    margin-top:-0.3rem;
                    img{
                        display: block;
                        width: 100%;
                    }
                }
            }
            .detail-Kline{
                width:7.1rem;
                height:4rem;
                border: 1px solid #CCCCCC;
                margin-left: 0.2rem;
                margin-right: 0.2rem;
                box-sizing:content-box;
                position: relative;
                .marsk{
                    position: absolute;
                    width: 100%;
                    height:100%;
                    background:transparent;
                    z-index: 20;
                    top:0;
                    left: 0;
                }
                .add-self{
                    width:1.2rem;
                    height:0.6rem;
                    position: absolute;
                    right:0.2rem;
                    top:0.2rem;
                    z-index: 10;
                    img{
                        width: 100%;
                        display: block;
                    }
                }
                #charts{
                    width:100%;
                    height:100%;
                    div{
                        width:100%;
                        height:100%;
                    }
                }
                
            }
            .detail-index{
                width:100%;
                height:0.6rem;
                background:#fff;
                padding-left: 0.2rem;
                padding-right: 0.2rem;
                .index{
                    width:33.333%;
                    height:100%;
                    font-family: PingFangSC-Regular;
                    font-size:0.3rem;
                    color: #999999;
                    letter-spacing: 0;
                    line-height:0.6rem;
                    text-align: center;
                    float: left;
                }
                .index:first-child{
                        text-align: left;
                        color: #FF5E45;
                }
                .index:last-child{
                    text-align: right;
                    position: relative;
                    img{
                        width: 1.2rem;
                        heihgt:0.6rem;
                        position: absolute;
                        right: 0;
                        top:0;
                        display: block;
                    }
                }
            }
        }
       }
.nodata{
    width: 4.17rem;
    height:2.78rem;
    margin:0 auto;
    margin-top:0.4rem;
    img{
        width: 100%;
        display: block;
    }
}
</style>