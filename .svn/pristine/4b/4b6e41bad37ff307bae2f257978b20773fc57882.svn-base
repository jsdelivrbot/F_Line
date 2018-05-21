<template>
    <div >
        <div class="edit-title">
            <div>名称代码</div>
            <div>拖动</div>
        </div>
        <draggable element="ul" class="edit-body" >           
            <li v-for="(stock, index) in stock_list" >
                <div class="name" >{{stock.Name}}</div>
                <div class="code">{{stock.Code}}</div>
                <div class="delete" @click.stop="deleteit(stock.Code)"><img :src="deletes"></div>
                <div class="move" ><img :src="move"></div>
            </li>
        </draggable>
    </div>
</template>
<script>
    import draggable from 'vuedraggable'  ;
    export default{
        components: {
            draggable
        },
        data(){
          return {
            deletes: require('../../assets/images/graph/editshoose_btn_delete@' + this.$store.state.dpr + 'x.png'),
            move: require('../../assets/images/graph/editshoose_btn_move@' + this.$store.state.dpr + 'x.png'),
            stock_list:''
            }
        },
        created(){
            if(sessionStorage.userId=='undefined')sessionStorage.userId=this.$route.query.userId;
            this.update();
        },
         mounted () {
            this.$dragging.$on('dragged', ({value}) => {
                console.log(value)
            })
        },
        watch:{
            $route(){
                this.update();
            }
        },
        methods:{
            //获取自选列表
            update:function(){
                this.$axios.post('GetStockOptions', {
                    userId:JSON.parse(sessionStorage.userId)
                })
                .then((response)=>{
                     if(response.data.Success=="true"){
                        if(response.data.StockOptions.length!=0){
                           this.stock_list=response.data.StockOptions;
                        }else{
                            this.stock_list='';
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
            //删除自选
            deleteit:function(code){
                this.$axios.post('RemoveStockOption',{
                        userId:JSON.parse(sessionStorage.userId),
                        code:code     
                    })
                    .then((response)=>{
                        if(response.data.Success=="true"){
                            this.update();

                        }
                    })
                    .catch((error)=>{
                        // 隐藏loading
                        ;
                        console.log(error);
                    });
            }
        },
        activated(){
            document.title='编辑自选';
        },
    }
</script>
<style lang="less" scoped>
@import '../../style/base.less';
 *{
    box-sizing: border-box;
 }
 .edit-title{
    width:100%;
    height:0.6rem;
    background: #FFFFFF;
    position: fixed;
    top:0;
    left:0;
    border-bottom:1px solid rgba(153,153,153,0.50);
    z-index: 100;
    div:first-child{
        text-align: left;
        margin-left:0.95rem;
        font-size:0.24rem;
        color: #999999;
        letter-spacing: 0;
        line-height: 0.6rem;
        float: left;
    }
    div:last-child{
        text-align: right;
        margin-right:0.6rem;
        font-size:0.24rem;
        color: #999999;
        letter-spacing: 0;
        line-height: 0.6rem;
        float:right;

    }
 }
 .edit-body{
    width:100%;
    height:auto;
    background:#fff;
    margin-top:0.6rem;
    li{
        width:100%;
        height:1rem;
        position: relative;
        opacity: 0.8;
        margin-bottom:2px;
        padding-left:0.95rem;
        border-bottom:0.01rem solid rgba(153,153,153,0.5);
       .name{
        text-align: left;
        font-size:0.3rem;
        color: #000000;
        letter-spacing: 2px;
        padding-top:0.12rem;
       }
       .code{
        text-align: left;
        font-size: 0.2rem;
        color: #999999;
        letter-spacing: 0;
        margin-top:-0.06rem;
       }
       .delete{
        position: absolute;
        width:0.4rem;
        height:0.4rem;
        left:0.3rem;
        top:50%;
        margin-top:-0.2rem;
        img{
            width: 100%;
            height:100%;
            display: block;
        }
       }
       .move{
        width: 0.4rem;
        height:0.4rem;
        position: absolute;
        right:0.6rem;
        top:50%;
        margin-top:-0.2rem;
        img{
            width: 100%;
            height:100%;
            display: block;
        }
       }

    }
    .active{
        -webkit-box-shadow:0 0 10px rgba(153,153,153,0.50);  
        -moz-box-shadow:0 0 10px rgba(153,153,153,0.50);  
        box-shadow:0 0 10px rgba(153,153,153,0.50); 
    }
    .unactive{
         border-bottom:1px solid rgba(153,153,153,0.50);
    }
 }
</style>