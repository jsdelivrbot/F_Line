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
.opresult{
    width: 100%;
    position: fixed;
    height:auto;
    z-index: 10;
    top:0.9rem;
    left:0;
    background:red;
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
        box-sizing:border-box;
        li{
            box-sizing:border-box;
            border-bottom: 1px solid #ccc;
            width:100%;
            height:0.8rem;
            padding-left:0.3rem;
            padding-right:0.3rem;
            div{
                width: 33.333%;
                height:100%;
                float: left;
            }
            div:first-child{
                font-family: PingFangSC-Regular;
                font-size:0.3rem;
                color: #000000;
                letter-spacing:0.02rem;
                text-align: left;
                line-height: 0.8rem;
            }
            div:nth-child(2){
                font-family: PingFangSC-Regular;
                font-size:0.3rem;
                color: #000000;
                letter-spacing: 0;
                text-align: center;
                line-height: 0.8rem;
            }
            div:last-child{
                position: relative;
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
        box-shadow: 0 1px 0 0 #CCCCCC;
        margin-top:0.2rem;
        width:100%;
    }

}
.list{
    width:100%;
    height:90%;
    position:absolute;
    top:1rem;
    z-index:0;
    overflow: scroll;
    .listBox{
        width: 100%;
        height:auto;
    }
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
        box-sizing:border-box;
        li{
            box-sizing:border-box;
            border-bottom: 1px solid #ccc;
            width:100%;
            height:0.8rem;
            padding-left:0.3rem;
            padding-right:0.3rem;
            div{
                width: 33.333%;
                height:100%;
                float: left;
            }
            div:first-child{
                font-family: PingFangSC-Regular;
                font-size:0.3rem;
                color: #000000;
                letter-spacing:0.02rem;
                text-align: left;
                line-height: 0.8rem;
            }
            div:nth-child(2){
                font-family: PingFangSC-Regular;
                font-size:0.3rem;
                color: #000000;
                letter-spacing: 0;
                text-align: center;
                line-height: 0.8rem;
            }
            div:last-child{
                position: relative;
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
        box-shadow: 0 1px 0 0 #CCCCCC;
        width:100%;
    }
}
.header_select{
    width:96%;
    background: #FFFFFF;
    margin:0 auto;
    box-shadow: 0 0.1rem 0.24rem 0 #849EB7;
    p{
        font-family: PingFangSC-Regular;
        font-size: 0.3rem;
        color: #999999;
        letter-spacing: 2px;
        padding:0.1rem 0 0 0.2rem;
    }
    p:nth-child(1){
        padding-top:0.2rem;
    }
    p:last-child{
        padding-bottom:0.2rem;
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
            <img :src="search_img">
            <input type="text" v-model="searchvalue" placeholder="请输入股票代码/简拼" @focus="focus" @blur="blur">
        </div>
        <!-- 搜索列表 -->
        <div class='opresult' :class="[inputon?'accdisblock':'accdisnone']">
            <ul class='list_content clearfix'>
                <li v-for="(y,index) in oplists"  @click="toIndividual(y.Code,y.Name)">
                    <div>{{y.Name}}</div>
                    <div>{{y.Code}}</div>
                    <div><v-option :showit="y.add" @click.native.stop.prevenet="addoption(y,index,oplists)"></v-option></div>
                </li>
            </ul>
        </div>
        <!-- 诊股记录 -->
        <div class='list' v-if="show">
            <div class="listBox">
                <ul class='list_content clearfix'>
                    <li v-for="(x,index) in searchrecord" @click="toIndividual(x.Code)">
                        <div>{{x.Name}}</div>
                        <div>{{x.Code}}</div>
                        <div><v-option :showit="x.add" @click.native.stop.prevenet="addoption(x,index,searchrecord)"></v-option></div>
                    </li>
                </ul>
                <div class='list_item' @click.stop="clearall" v-show="searchrecord.length>0">
                    清除搜索记录
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import vOption from '../../components/option/option.vue';
    export default {
        components:{
            vOption
        },
        data(){
            return{   
                search_img:require('../../assets/index/home_icon_search@'+this.$store.state.dpr+'x.png'),
                selectO:require('../../assets/images/quotation/search_btn_add_nor@'+this.$store.state.dpr+'x.png'),
                selectAL:require('../../assets/images/quotation/search_btn_add_pre@'+this.$store.state.dpr+'x.png'),
                searchvalue:'',
                oplists:'',//搜索列表
                inputon:false,
                searchrecord:'',//搜索记录
                showsearch:'',
                temp:[],
                show:true,
                arr:[],//搜索
                arr1:[]//自选
            }
        },
        created(){
            this.oplists='';
            if(sessionStorage.userId=='undefined')sessionStorage.userId=this.$route.query.userId;
            var newarr='';
            //如果搜索记录不存在，则初始化
            if(!localStorage.searchrecord){
                localStorage.searchrecord=JSON.stringify(newarr);
            }
            this.searchrecord=JSON.parse(localStorage.searchrecord);
             //获取自选列表
            this.$axios.post('GetStockOptions', {
                    userId:JSON.parse(sessionStorage.userId)
                })
                 .then((response)=>{
                    if(response.data.Success=="true"){
                        this.$vux.loading.hide();
                        if(response.data.StockOptions.length!=0){
                           this.arr=response.data.StockOptions;
                        }else{
                            this.arr='';
                        }
                        for(var i=0;i<this.arr.length;i++){
                            this.arr[i].add=true;
                        }
                        for(var i=0;i<this.searchrecord.length;i++){
                            if(this.searchrecord[i].add==undefined){
                                this.searchrecord[i].add=false;
                            }
                        }
                        for(var i=0;i<this.arr.length;i++){
                            for(var j=0;j<this.searchrecord.length;j++){ 
                                if(this.arr[i].Code==this.searchrecord[j].Code){
                                    this.searchrecord[j].add=true;
                                 }    
                            }
                        } 

                    }
                })
                 .catch((error)=>{
                    // 隐藏loading
                    this.$vux.loading.hide();
                    ;
                    console.log(error);
                });

        },
        activated(){ 
             document.title='搜索';         
            //获取自选列表
            this.$axios.post('GetStockOptions', {
                    userId:JSON.parse(sessionStorage.userId)
                })
                 .then((response)=>{
                    if(response.data.Success=="true"){
                        this.$vux.loading.hide();
                        if(response.data.StockOptions.length!=0){
                           this.arr=response.data.StockOptions;
                            for(var i=0;i<this.arr.length;i++){
                                this.arr[i].add=true;
                            }
                            for(var i=0;i<this.searchrecord.length;i++){
                                this.searchrecord[i].add=false;
                            }
                            for(var i=0;i<this.arr.length;i++){
                                for(var j=0;j<this.searchrecord.length;j++){ 
                                    if(this.arr[i].Code==this.searchrecord[j].Code){
                                        this.searchrecord[j].add=true;
                                     }    
                                }
                            }
                            localStorage.searchrecord=JSON.stringify(this.searchrecord); 
                        }else{
                            this.arr='';
                             for(var i=0;i<this.searchrecord.length;i++){
                                this.searchrecord[i].add=false;
                            }

                        }
                       

                    }
                })
                .catch((error)=>{
                    // 隐藏loading
                    this.$vux.loading.hide();
                    console.log(error);
                });
        },
        watch:{
            searchvalue(val){
                if(!val){
                        this.oplists='';
                        this.show=true;
                }else{ 
                    this.show=false;
                //搜索股票
                this.$axios.get('SearchStock/'+val)
                .then((response)=>{
                    if(response.data.Success=="true"){
                        this.$vux.loading.hide();
                        if(val.length==6&&response.data.Result.length==1){
                            var temp1 = JSON.parse(localStorage.searchrecord);
                            var temp2={
                                    Name:response.data.Result[0].Name,
                                    Code:response.data.Result[0].Code,
                                    add:true
                                }
                            if(temp1==""){ 
                                temp1=[];
                                temp1.push(temp2);
                            }else{
                                var putstate=true;
                                temp1.forEach(function(value,index,arr){
                                if(value.Code==temp2.Code)putstate=false;
                                })
                                if(putstate)temp1.push(temp2);
                            } 
                            //遍历验证是否含有此项
                            localStorage.searchrecord=JSON.stringify(temp1);
                            this.searchrecord=JSON.parse(localStorage.searchrecord);
                             if(!this.$route.query.status){
                               this.$router.push({
                                    path:'/clinicreport',
                                    query:{
                                        code:temp2.Code
                                    }
                                }) 
                            }else if(this.$route.query.status==1){
                                this.$router.push({
                                    path:'/markettrend',
                                    query:{
                                        code:temp2.Code
                                    }
                                })
                            }
                        }
                        this.oplists=response.data.Result;//搜索列表 ;
                        for(var i=0;i<this.oplists.length;i++){
                            this.oplists[i].add=false;
                        } 
                        for(var i=0;i<this.arr.length;i++){
                            for(var j=0;j<this.oplists.length;j++){ 
                                if(this.arr[i].Code==this.oplists[j].Code){
                                    this.oplists[j].add=true;
                                 }    
                            }

                        } 
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
            $route(){
                //获取自选列表
                this.$axios.post('GetStockOptions', {
                        userId:JSON.parse(sessionStorage.userId)
                    })
                     .then((response)=>{
                        if(response.data.Success=="true"){
                            this.$vux.loading.hide();
                            if(response.data.StockOptions.length!=0){
                               this.arr=response.data.StockOptions;
                                for(var i=0;i<this.arr.length;i++){
                                    this.arr[i].add=true;
                                }
                                for(var i=0;i<this.searchrecord.length;i++){
                                        this.searchrecord[i].add=false;
                                }
                                for(var i=0;i<this.arr.length;i++){
                                    for(var j=0;j<this.searchrecord.length;j++){ 
                                        if(this.arr[i].Code==this.searchrecord[j].Code){
                                            this.searchrecord[j].add=true;
                                         }    
                                    }
                                }
                            }else{
                                this.arr='';
                                for(var i=0;i<this.searchrecord.length;i++){
                                    this.searchrecord[i].add=false;
                                }
                            }
                           
                            localStorage.searchrecord=JSON.stringify(this.searchrecord); 


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
        methods: {
            focus(){
                this.inputon=true;
            },
            addoption:function(item,index,type){
                //在搜索部分操作自选
                if(type==this.oplists){
                     //添加自选
                    if(!item.add){
                        item.add=!item.add;
                        this.$axios.post('AddStockOption',{
                            userId:JSON.parse(sessionStorage.userId),
                            code:item.Code     
                        })
                        .then((response)=>{
                            if(response.data.Success=="true"){
                                type[index].add=true;
                                this.searchrecord=JSON.parse(localStorage.searchrecord);
                                //初始化
                                for(var i=0;i<this.searchrecord.length;i++){
                                    this.searchrecord[i].add=false;
                                }
                                //更新搜索记录自选状态
                                for(var i=0;i<this.oplists.length;i++){
                                    for(var j=0;j<this.searchrecord.length;j++){ 
                                        if(this.oplists[i].Code==this.searchrecord[j].Code){
                                            this.searchrecord[j].add=true;
                                         }    
                                    }
                                }
                                localStorage.searchrecord=JSON.stringify(this.searchrecord);
                                //更新自选列表
                                this.$axios.post('GetStockOptions', {
                                    userId:JSON.parse(sessionStorage.userId)
                                })
                                 .then((response)=>{
                                    if(response.data.Success=="true"){
                                        this.$vux.loading.hide();
                                        if(response.data.StockOptions.length!=0){
                                           this.arr=response.data.StockOptions;
                                        }else{
                                            this.arr='';
                                        }
                                        for(var i=0;i<this.arr.length;i++){
                                            this.arr[i].add=true;
                                        }

                                    }
                                })
                                 .catch((error)=>{
                                    // 隐藏loading
                                    this.$vux.loading.hide();
                                    ;
                                    console.log(error);
                                });
                            }
                        })
                        .catch((error)=>{
                            // 隐藏loading
                            this.$vux.loading.hide();
                            ;
                            console.log(error);
                        });
                    //删除自选
                    }else if(item.add){
                        item.add=!item.add;
                        this.$axios.post('RemoveStockOption',{
                            userId:JSON.parse(sessionStorage.userId),
                            code:item.Code     
                        })
                        .then((response)=>{
                            if(response.data.Success=="true"){
                                type[index].add=false;
                                this.searchrecord=JSON.parse(localStorage.searchrecord);
                                for(var i=0;i<this.searchrecord.length;i++){
                                    this.searchrecord[i].add=false;
                                }
                                for(var j=0;j<this.searchrecord.length;j++){ 
                                    if(type[index].Code==this.searchrecord[j].Code){
                                        this.searchrecord[j].add=false;
                                     }    
                                }
                                localStorage.searchrecord=JSON.stringify(this.searchrecord); 
                            }
                        })
                        .catch((error)=>{
                            // 隐藏loading
                            this.$vux.loading.hide();
                            ;
                            console.log(error);
                        });
                    } 
                  //操作记录列表  
                }else if(type==this.searchrecord){
                      //添加自选
                    if(!item.add){
                        item.add=!item.add;
                        this.$axios.post('AddStockOption',{
                            userId:JSON.parse(sessionStorage.userId),
                            code:item.Code     
                        })
                        .then((response)=>{
                            if(response.data.Success=="true"){
                                type[index].add=true;
                                localStorage.searchrecord=JSON.stringify(this.searchrecord);
                                //更新自选列表
                                this.$axios.post('GetStockOptions', {
                                    userId:JSON.parse(sessionStorage.userId)
                                })
                                 .then((response)=>{
                                    if(response.data.Success=="true"){
                                        this.$vux.loading.hide();
                                        if(response.data.StockOptions.length!=0){
                                           this.arr=response.data.StockOptions;
                                        }else{
                                            this.arr='';
                                        }
                                        for(var i=0;i<this.arr.length;i++){
                                            this.arr[i].add=true;
                                        }
                                        for(var i=0;i<this.oplists.length;i++){
                                            this.oplists[i].add=false;
                                        }
                                        //更新搜索列表自选状态
                                        for(var i=0;i<this.arr.length;i++){
                                            for(var j=0;j<this.oplists.length;j++){ 
                                                if(this.arr[i].Code==this.oplists[j].Code){
                                                    this.oplists[j].add=true;
                                                 }    
                                            }
                                        } 

                                    }
                                })
                                 .catch((error)=>{
                                    // 隐藏loading
                                    this.$vux.loading.hide();
                                    ;
                                    console.log(error);
                                });
                            }
                        })
                        .catch((error)=>{
                            // 隐藏loading
                            this.$vux.loading.hide();
                            ;
                            console.log(error);
                        });
                    //删除自选
                    }else if(item.add){
                        item.add=!item.add;
                        this.$axios.post('RemoveStockOption',{
                            userId:JSON.parse(sessionStorage.userId),
                            code:item.Code     
                        })
                        .then((response)=>{
                            if(response.data.Success=="true"){
                                type[index].add=false;
                                localStorage.searchrecord=JSON.stringify(this.searchrecord);
                                //更新自选列表
                                this.$axios.post('GetStockOptions', {
                                    userId:JSON.parse(sessionStorage.userId)
                                })
                                 .then((response)=>{
                                    if(response.data.Success=="true"){
                                        this.$vux.loading.hide();
                                        if(response.data.StockOptions.length!=0){
                                           this.arr=response.data.StockOptions;
                                        }else{
                                            this.arr='';
                                        }
                                        for(var i=0;i<this.arr.length;i++){
                                            this.arr[i].add=true;
                                        }
                                        for(var i=0;i<this.oplists.length;i++){
                                            this.oplists[i].add=false;
                                        }
                                        //更新搜索列表自选状态
                                        for(var i=0;i<this.arr.length;i++){
                                            for(var j=0;j<this.oplists.length;j++){ 
                                                if(this.arr[i].Code==this.oplists[j].Code){
                                                    this.oplists[j].add=true;
                                                 }    
                                            }
                                        } 

                                    }
                                })
                                 .catch((error)=>{
                                    // 隐藏loading
                                    this.$vux.loading.hide();
                                    ;
                                    console.log(error);
                                });
                            }
                        })
                        .catch((error)=>{
                            // 隐藏loading
                            this.$vux.loading.hide();
                            ;
                            console.log(error);
                        });
                    } 

                }
            },
            //清除搜索记录
            clearall(){
                var temp=[];
                localStorage.searchrecord=JSON.stringify(temp);
                this.searchrecord=JSON.parse(localStorage.searchrecord);
            },
            //跳到个股
            toIndividual:function(code,name){
                var temp1 = JSON.parse(localStorage.searchrecord);
                var temp2={
                        Name:name,
                        Code:code,
                        add:true
                    }
                if(temp1==""){ 
                    temp1=[];
                    temp1.push(temp2);
                }else{
                    var putstate=true;
                    temp1.forEach(function(value,index,arr){
                    if(value.Code==temp2.Code)putstate=false;
                    })
                    if(putstate)temp1.push(temp2);
                } 
                //遍历验证是否含有此项
                localStorage.searchrecord=JSON.stringify(temp1);
                this.searchrecord=JSON.parse(localStorage.searchrecord);
                if(!this.$route.query.status){
                   this.$router.push({
                        path:'/clinicreport',
                        query:{
                            code:code
                        }
                    }) 
                }else if(this.$route.query.status==1){
                    this.$router.push({
                        path:'/markettrend',
                        query:{
                            code:code
                        }
                    })
                }
                
            }
        },
    }
</script>