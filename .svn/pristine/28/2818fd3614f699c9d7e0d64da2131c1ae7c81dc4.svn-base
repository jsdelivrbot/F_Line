<template>
    <div class="opinion">
        <div class="boxTwo">
            <p>{{StockCode}}</p>
            <p>“{{text}}”</p>
            <div class="readNum">阅读 <span>{{ReadNum}}</span></div>
        </div>
        <div class="boxOne">
            <group>
                <x-textarea :max="400"    v-model="content" style="padding:0.2rem 0.3rem;height:100%" placeholder="分享您的见解"></x-textarea>
            </group>
        </div> 
        <div class="boxThree">
            <x-button type="primary" slot="button" style="width:100%;height:100%"
                    @click.native="onSubmit">提交
            </x-button>  
        </div>
        <div class="boxFour">
             <div class="headline">
                <span></span>
                <span></span>
                我的留言
            </div>
            <div class="messageList">
                <ul>
                    <li class="info_list" v-for="list in lists">
                        <div class="line1">
                            <div class="avator"><img :src="'http://www.shangjin666.cn:9988'+list.Portrait"></div>
                            <div class="name">{{list.Nickname}}</div>
                        </div>
                        <div class="line2">
                            <p>{{list.Text}}</p>
                            <div class="detail"><div>{{list.AddTime}}</div><div @click="deletes(list.Id)">删除</div></div>
                        </div> 
                    </li>   
                </ul>
            </div>
        </div>
        <div class="Success" v-show="marsk"><img :src="feedback" @click="success"></div> 
    </div>
</template>
<script >
    import { XTextarea, Group, XInput,XButton,Toast } from 'vux'
    export default {
        data(){
            return {
                content:'',
                feedback: require('../../assets/images/graph/hint_message_sure@' + this.$store.state.dpr + 'x.png'),
                marsk:false,
                StockCode:'',//股票代码
                text:'',//点评
                ReadNum:'',//阅读量
                id:'',
                lists:'',//我的留言列表
                baseURL:'http://www.shangjin666.cn:9988'
            }
        },
        components: {
            XTextarea,
            Group,
            XInput,
            XButton,
            Toast
        },
        created(){
            if(sessionStorage.userId=='undefined')sessionStorage.userId=this.$route.query.userId;
        },
        methods: {
            //提交留言
            onSubmit(){
                if (!this.content) {
                        this.$vux.toast.show({
                         text: '请填写内容',
                         width:'2.5rem',
                         type:'text'
                        })
                    return false
                }
                this.$vux.loading.show({text: '正在加载'});
                this.$axios.post('PostComment', {
                    userId: JSON.parse(sessionStorage.userId),
                    text: this.content,
                    seId: this.id
                  })
                .then(result => {
                    if(result.data.Success=="true"){
                        this.marsk=true;
                        this.$vux.loading.hide();
                        this.content='';
                    }
                 
                })
                .catch(error => {
                    this.$vux.loading.hide();
                    this.$router.push({path:'/fault'});
                    console.log(error);
                })

            },
            //获取我的留言
            getMessage(){
                this.$axios.post('GetComment',{
                    userId:JSON.parse(sessionStorage.userId),
                    seId:this.id
                })
                .then((response)=>{
                    if(response.data.Success=="true"){
                        this.lists=response.data.List;
                    }
                })
            },
            //留言提交成功
            success(){
                this.marsk=false;
                console.log(this.id)
                this.getMessage();
            },
            deletes(id){
                this.$axios.post('DeleteComment',{
                    id:id
                })
                .then((response)=>{
                    if(response.data.Success=="true"){
                        this.getMessage();
                    }
                })
            }
        },
        activated(){
            document.title='留言';
            this.$axios.post('GetEvaluation',{
                code:this.$route.query.code,
                userId:JSON.parse(sessionStorage.userId),
                nowPage:1
           })
            .then((response)=>{
                if(response.data.Success=="true"){
                   this.StockCode=response.data.Data.StockCode;
                   this.text=response.data.Data.Text;
                   this.ReadNum=response.data.Data.ReadNum;
                   this.id=response.data.Data.Id;
                   this.getMessage();
                }
            })
            .catch((error)=>{
                console.log(error)
            })
      },
    }
</script>
<style lang="less" scoped>
@import '../../style/base.less';
 *{
      box-sizing: border-box;
 }
 :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #ccc; 
    opacity:1;
    font-size: 0.28rem; 
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #ccc;
    opacity:1;
    font-size: 0.28rem; 
}

input:-ms-input-placeholder{
    color: #ccc;opacity:1;
}

input::-webkit-input-placeholder{
    color: #ccc;opacity:1;
}　
 .opinion{
      width:100%;
      height:auto;
      overflow: hidden;
      margin:0 auto;
      border-radius: 0.06rem;
      font-family: PingFangSC-Regular;
      font-size:0.3rem;
      color: #CCCCCC;
      letter-spacing:0.02rem;
    .boxOne{
          width:100%;
          height:3rem;
          background:#fff;
          //border-radius:0.06rem;
          box-shadow: 0 0.04rem 0.1rem 0 #CCCCCC;
      }
    .boxTwo{
        width:6.9rem;
        height:auto;
        margin:0.2rem auto;
        background: #FFFFFF;
        box-shadow: 0 0.04rem 0.2rem 0 #CCCCCC;
        padding: 0.2rem 0.3rem;
        p:first-child{
            width: 100%;
            height: 0.48rem;
            text-align: left;
            line-height: 0.48rem;
            font-family: PingFangSC-Regular;
            font-size:0.34rem;
            color: #333333;
            letter-spacing: 0;
        }
        p:nth-of-type(2){
            font-family: PingFangSC-Regular;
            font-size:0.34rem;
            color: #333333;
            letter-spacing: 0;
            text-align: left;
            margin-top:0.1rem;
        }
        .readNum{
            width: 100%;
            height:0.38rem;
            margin-top:0.3rem;
            font-family: PingFangSC-Regular;
            font-size:0.26rem;
            color: #999999;
            letter-spacing: 0;
            text-align: right;
            line-height: 0.38rem;
            span{
                font-family: PingFangSC-Regular;
                font-size:0.26rem;
                color: #999999;
                letter-spacing: 0;
                text-align: right;
                line-height: 0.38rem;
            }

        }

      }
    .boxThree{
        width:6.9rem;
        height:0.8rem;
        margin:0.3rem auto;
        border-radius: 0.06rem;
        background:#fff;
        img{
          width:100%;
          display: block;
        }
    }
    .boxFour{
        width: 100%;
        height:auto;
        background:#fff;
        .messageList{
            width: 100%;
            height:auto;
            background:#fff;
            margin-top:0.2rem;
            padding-left:0.3rem;
            padding-right: 0.3rem;
        }
        .headline{
            padding-top:0.2rem;
            width: 100%;
            height:0.9rem;
            text-align: center;
            line-height: 0.7rem;
            font-family: PingFangSC-Regular;
            font-size:0.34rem;
            color: #999999;
            letter-spacing: 2.27px;
            position: relative;
            span{
                position: absolute;
                width: 0.8rem;
                height:0.02rem;
                background:#ccc;
                top:60%;
                //margin-top:0.01rem;
            }
            span:first-child{
                left: 2rem;
            }
            span:last-child{
                right: 2rem;
            }
        }
         .info_list{
        width:100%;
        min-height:2.15rem;
        background: #FFFFFF;
        position: relative;
        margin-bottom:0.3rem;
        .line1{
            display: flex;
            height:0.7rem;
            margin-top:0.2rem;
            div:first-child{
                width: 0.7rem;
                height:0.7rem;
                background:pink;
                border-radius: 50%;
                img{
                    display: block;
                    width: 100%;
                }
            }
            div:last-child{
                margin-left: 0.2rem;
                text-align: left;
                font-family: PingFangSC-Regular;
                font-size:0.34rem;
                color: #999999;
                letter-spacing: 0;

            }
        }
        .line2{
            height:auto;
            padding-left: 0.9rem;
            padding-right: 0.3rem;
            p:first-child{
                font-family: PingFangSC-Regular;
                font-size:0.34rem;
                color: #000000;
                letter-spacing: 0;
            }
            &>div{
                width: 100%;
                height:auto;
                margin-top:0.1rem;
                display: flex;
                div:first-child{
                    font-family: PingFangSC-Regular;
                    font-size:0.26rem;
                    color: #CCCCCC;
                    letter-spacing: 0;
                }
                div:last-child{
                    font-family: PingFangSC-Regular;
                    font-size:0.26rem;
                    color: #378AD6;
                    letter-spacing: 0;
                    margin-left:0.2rem;
                }
            }
        }
        .response{
            margin-left:0.9rem;
            height:auto;
            margin-top:0.2rem;
            border-top:1px solid #ccc;
            .resTitle{
                width: 100%;
                height:0.48rem;
                padding-left: 0.16rem;
                font-family: PingFangSC-Regular;
                font-size:0.34rem;
                color: #999999;
                letter-spacing: 0;
                position: relative;
                margin-top:0.2rem;
                span{
                    width: 0.06rem;
                    height:0.3rem;
                    left:0;
                    top:50%;
                    margin-top:-0.15rem;
                    position: absolute;
                    background: #378AD6;
                    
                }
            }
            .resText{
                height:auto;
                //padding-left: 0.9rem;
                padding-right: 0.3rem;
                p:first-child{
                    font-family: PingFangSC-Regular;
                    font-size:0.34rem;
                    color: #000000;
                    letter-spacing: 0;
                }
                p:nth-child(2){
                    font-family: PingFangSC-Regular;
                    font-size:0.26rem;
                    color: #CCCCCC;
                    letter-spacing: 0;
                    margin-top:0.1rem;
                }
            }

        }
}
    }
 }
 .Success{
  width:100%;
  height:13.34rem;
  position:absolute;
  left:0;
  top:0;
  z-index: 10;
  background: rgba(0,0,0,0.50);
  img{
    width:5.8rem;
    height:3.34rem;
    display: block;
    margin:0 auto;
    position: relative;
    top:40%;
  }

 }
</style>
