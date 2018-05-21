<template>
    <div class="opinion">
        <div class="boxOne">
            <group>
                <x-textarea :max="400"  @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"  placeholder="您的意见对未来K线的成长非常重要" height='220' v-model="content"></x-textarea>
            </group>
        </div> 
        <div class="boxTwo">
            <x-input placeholder="填写您的联系方式(手机号/QQ/邮箱)" v-model="contact" style="width:6.9rem;height:0.8rem;font-size:0.3rem;background:#fff;letter-spacing:0.02rem"></x-input>
        </div>
        <div class="boxThree">
            <x-button type="primary" slot="button" style="width:100%;height:100%"
                    @click.native="onSubmit">提交
            </x-button>  
        </div>
        <div class="Success" v-show="marsk"><img :src="feedback" @click="change"></div> 
    </div>
</template>
<script >
    import { XTextarea, Group, XInput,XButton,Toast } from 'vux'
    export default {
        data(){
            return {
                contact:'',
                content:'',
                feedback: require('../../assets/images/my/feedback_hint@' + this.$store.state.dpr + 'x.png'),
                marsk:false
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
            this.contact="",
            this.content=""
        },
        methods: {
            onEvent (event) {
                console.log('on', event);
            },
            onSubmit(){
                if (!this.content) {
                        this.$vux.toast.show({
                         text: '请填写内容',
                         width:'2.5rem',
                         type:'text'
                        })
                    return false
                }
                if (!this.contact) {
                        this.$vux.toast.show({
                            text: '请填写联系方式',
                            width:'2.5rem',
                            type:'text'
                        })
                return false
              }
                this.$vux.loading.show({text: '正在加载'});
                this.$axios.post('SaveOpinion', {
                    uid: 1,
                    text: this.content,
                    contact: this.contact
                  })
                .then(result => {
                    if(result.data.Success=="true"){
                        var _that=this;
                        this.marsk=true;
                        this.$vux.loading.hide();
                        this.contact='';
                        this.content='';
                    }
                 
                })
                .catch(error => {
                    this.$vux.loading.hide();
                    this.$router.push({path:'/fault'});
                    console.log(error);
                })

            },
            change(){
                this.marsk=false;
                this.$router.push({path:'my'})
            }
        },
        activated(){
            document.title='意见反馈';
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
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #ccc;
    opacity:1;
}

input:-ms-input-placeholder{
    color: #ccc;opacity:1;
}

input::-webkit-input-placeholder{
    color: #ccc;opacity:1;
}　
 .opinion{
      width:6.9rem;
      height:auto;
      overflow: hidden;
      margin:0 auto;
      border-radius: 0.06rem;
      font-family: PingFangSC-Regular;
      font-size:0.3rem;
      color: #CCCCCC;
      letter-spacing:0.02rem;
      .boxOne{
          width:6.9rem;
          height:5.3rem;
          background:#fff;
          border-radius:0.06rem;
          .weui-cell textarea{
            color:red;
          }
      }
      .boxTwo{
          width:6.9rem;
          height:0.8rem;
          margin-top:0.2rem;
          border-radius: 0.06rem;
          overflow: hidden;
          input{
              width:100%;
              height:100%;
              padding:0;
              text-align:left;
              line-height: 0.8rem;
              padding-left:0.2rem;
              font-family: PingFangSC-Regular;
              font-size:0.3rem;
              color: #CCCCCC;
              letter-spacing:0.02rem;
              border:none;

          }
      }
      .boxThree{
        width:6.9rem;
        height:0.8rem;
        margin:0.8rem auto;
        border-radius: 0.06rem;
        background:#fff;
        img{
          width:100%;
          display: block;
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
