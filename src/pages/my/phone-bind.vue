<style lang="less" >
    .icon_img{
        width: 0.36rem;
        position: relative;
        top:0.05rem;
        left: -0.1rem;
    }
    .vux-no-group-title{
        margin-top:0.1rem!important;
    }
    .weui-cells{
        border:none;
    }
    .sub_mit{
        width: 92%!important;
    }
</style>
<template>
    <div>
        <group>
            <x-input  name="mobile" placeholder="请输入手机号码" v-model="phnumber" @on-change="change" required ref="valid1" keyboard="number" is-type="china-mobile">
                <img slot="label" class="icon_img" :src="phone">
            </x-input>
            <x-input  placeholder="请输入验证码" :min="4" :max="4" class="weui-vcode" required ref="valid2" @on-change="change" keyboard="number" v-model="codenumber">
                <img slot="label" class="icon_img" :src="verification">
                <x-button :showLoading="code_loading" :disabled="code_abled" @click.native="getcode" slot="right" type="primary" mini>{{sendcode}}</x-button>
            </x-input>
        </group><br>
         <x-button type="primary" :showLoading="false" :disabled="bind_abled" class="sub_mit" @click.native="processButton">立即绑定</x-button>
    </div>
</template>

<script>
    import { XInput, Group, XButton, Cell ,Toast} from 'vux';
    export default{
        components: {
            XInput,
            XButton,
            Group,
            Cell,
            Toast
        },
        data(){
          return {
            phone: require('../../assets/images/my/binding_icon_phone@' + this.$store.state.dpr + 'x.png'),
            verification: require('../../assets/images/my/binding_icon_code@' + this.$store.state.dpr + 'x.png'),
            bind_abled:true,
            code_abled:true,
            phnumber:'',
            codenumber:'',
            code_loading:false,
            sendcode:"发送验证码"
          }
        },
        methods:{
            //登录
            processButton () {
                // 显示
                this.$vux.loading.show({text: 'Loading'})
                let timestamp=(new Date()).valueOf()+'';
                let signdata=this.$socketsign(sessionStorage.userId+'&'+this.phnumber+'&'+this.codenumber+'&'+timestamp);
                this.$axios.post('SavePhone', {
                        APPID:this.$store.state.APPID,
                        timestamp:timestamp,
                        signed:signdata,
                        uid:sessionStorage.userId,
                        phone:this.phnumber,
                        code:this.codenumber
                    })
                    .then((response)=>{
                        var _that=this;
                        // 隐藏
                        this.$vux.loading.hide();
                        if(response.data.Success=="true"){

                            // 显示绑定成功
                            this.$vux.toast.show({
                                text: '绑定成功',
                                type:'success',
                                width:'2.5rem',
                                time:2000,
                                isShowMask:true,
                                onHide () {
                                    _that.$router.push('/my');
                                    _that.$store.state.states=true;
                                }    
                            })
                            //保存用户信息
                            //localStorage.userinfo=JSON.stringify(response.data.result);
                        }else{
                            // 显示绑定失败
                            this.$vux.toast.show({
                                text: response.data.Error_msg,
                                time:2000,
                                type:'warn',
                                width:'2.5rem',
                                isShowMask:true,
                            })
                        }
                    })
                    .catch((error)=>{
                        // 隐藏loading
                        this.$vux.loading.hide();
                        ;
                        console.log(error);
                    });
                
            },
            change(val){
                if(this.$refs.valid1.valid&&this.$refs.valid2.valid){
                    this.bind_abled=false;
                }else{
                    this.bind_abled=true;
                }
                if(this.$refs.valid1.valid){
                    this.code_abled=false;
                }else{
                    this.code_abled=true;
                }
            },
            //获取验证码
            getcode(){
                if(this.$refs.valid1.valid){
                    //置灰按钮，防止多次获取验证码
                    this.code_abled=true;
                    this.code_loading=true;
                    let timestamp=(new Date()).valueOf()+'';
                    let signdata=this.$socketsign(this.phnumber+'&'+timestamp);
                    this.$axios.post('GetMessageCode', {
                            APPID:this.$store.state.APPID,
                            timestamp:timestamp,
                            signed:signdata,
                            mobile:this.phnumber
                        })
                        .then((response)=>{
                            console.log(response)
                            if(response.data.Success=="true"){
                                //设置计时开始
                                let clockcount=60;
                                function clear(){
                                    clearInterval(inter)
                                }
                                var inter=setInterval(()=>{
                                    if(clockcount>0){
                                        this.sendcode='重新发送（'+clockcount+'s）';
                                        clockcount--;
                                    }else{
                                        this.code_abled=false;
                                        this.code_loading=false;
                                        this.sendcode="发送验证码";
                                        clockcount=5;
                                        clear();
                                    }
                                },1000)
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
                }
                
            }
        },
        activated(){
            document.title='手机绑定';
        },
  }
</script>