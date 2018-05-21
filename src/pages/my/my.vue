<template>
    <div>
        <div class="header">
            <div class="avator"><img :src="photo"></div>
            <div class="name">
                <div>{{nickName}}</div>
            </div>
        </div>
        <div class="body">
            <ul class="selection">
                <li class="li">
                    <div class="select-icon"><img :src="select1" class="pic1"></div>
                    <div class="select-name">
                        <router-link :to="{ path: '/myInformation'}" class="router">我的消息</router-link>
                    </div>
                </li>
                <li class="li">
                    <div class="select-icon"><img :src="select2" class="pic1"></div>
                    <router-link :to="{ path: '/phone-bind'}" class="select-name">手机绑定 
                        <div class="bind-state">{{status}}</div>
                    </router-link>
                </li>
                <li class="list3">
                    <div class="li1">
                        <div class="select-icon"><img :src="select4" class="pic1"></div>
                        <div class="select-name">K线闯关</div>
                    </div>
                    <div class="li2">
                        <span class="track-msg">总收益</span>
                        <span class="track-num">{{parseFloat(Income).toFixed(2)}}万</span>
                    </div>
                    <div class="li2">
                        <span class="track-msg">训练营成功率</span>
                        <span class="track-num">{{Rate}}</span>
                    </div>
                </li>
                <li class="li">
                    <div class="select-icon"><img :src="select5" class="pic1"></div>
                    <div class="select-name">
                    	  <router-link :to="{ path: '/setting'}" class="router">设置</router-link>
                    </div>
                </li>
            </ul>
        </div>
      <v-footer :curpage="'/my'"></v-footer>
  </div>
</template>
<script>
import vFooter from '../../components/index';
  export default{
    data(){
        return {
            Rate:'',
            Income:'',
            status:'',
            photo:'',
            nickName:'',
            select1: require('../../assets/images/my/my_icon_mynews@' + this.$store.state.dpr + 'x.png'),
            select2: require('../../assets/images/my/my_icon_binding@' + this.$store.state.dpr + 'x.png'),
            select3: require('../../assets/images/my/my_icon_track@' + this.$store.state.dpr + 'x.png'),
            select4: require('../../assets/images/my/my_icon_Kline@' + this.$store.state.dpr + 'x.png'),
            select5: require('../../assets/images/my/my_icon_setting@' + this.$store.state.dpr + 'x.png')
        }
    },
    components: {
      vFooter
    },
    activated(){
        if(sessionStorage.userId=='undefined')sessionStorage.userId=this.$route.query.userId;
        //获取K线擂台数据
        this.$axios.post('GetArena',{
            uid:JSON.parse(sessionStorage.userId)
          })
        .then((response)=>{
            if(response.data.Success=="true"){
              if(response.data.Rate==null){
                this.Rate='0.00%';
              }else{
                this.Rate=response.data.Rate;
              }
              this.Income=response.data.Income;
              console.log(this.Rate)
              

            }
        })
         .catch((error)=>{
                    // 隐藏loading
                    this.$vux.loading.hide();
                    ;
                    console.log(error);
                });
         //获取头像昵称
         this.$axios.post('GetUserInfo',{
            userId:JSON.parse(sessionStorage.userId)
         })
        .then((response)=>{
            if(response.data.Success=="true"){
                this.photo=localStorage.picIP +response.data.result.Portrait;
                this.nickName=response.data.result.UserName;
                if(response.data.result.Mobile==''){
                  this.status='未绑定'
                }else{
                  this.status='已绑定'
                }
            }
         })
        .catch((error)=>{
                    // 隐藏loading
                    this.$vux.loading.hide();
                    ;
                    console.log(error);
         });
          document.title='我的';
        
    },
  }
</script>
<style lang="less" scoped>
  @import '../../style/base.less';

  body {
    background: #f8f8f8;
  }

  * {
    box-sizing: border-box;
  }
  a{
    color:#000;
    display: block;
  }
  .header {
    width: 100%;
    height: 3.2rem;
    background: #fff;
    position: relative;
    margin-bottom: 0.1rem;
  }

  .header .avator {
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    left: 50%;
    margin-left: -0.6rem;
    top: 0.5rem;
    border-radius: 50%;
    background: #378AD6;
    background-image: url('../../assets/images/my/my_avatar_nor.png');
    background-repeat: no-repeat;
    background-position: 0 0;
  }
  .avator img{
    width: 100%;
    display: block;
  }

  .header .name {
    position: absolute;
    width: 100%;
    bottom: 0.4rem;
  }

  .header .name div {
    font-family: PingFangSC-Medium;
    font-size: 0.36rem;
    color: #999;
    letter-spacing: 2px;
    margin: 0 auto;
    display: table;
  }

  .body {
    width: 100%;
    height: auto;
  }

  .selection {
    width: 100%;
    height: auto;

    .li {
      width: 100%;
      height: 1rem;
      background: #fff;
      margin-bottom: 0.1rem;
    }

    .list3 {
      width: 100%;
      height: auto;
      background: #fff;
      margin-bottom: 0.1rem;
      overflow: hidden;
      display: block;

      .li1 {
        width: 100%;
        height: 0.74rem;
        .select-name {
          line-height: 0.74rem;
        }

      }
      .li2 {
        width: 7.5rem;
        height: 0.6rem;
        padding-left: 1rem;
        padding-right: 0.3rem;

        .track-msg {
          text-align: left;
          line-height: 0.6rem;
          font-family: PingFangSC-Regular;
          font-size: 0.24rem;
          color: #999999;
          letter-spacing: 2px;
          float: left;
        }

        .track-num {
          text-align: right;
          line-height: 0.6rem;
          font-family: PingFangSC-Regular;
          font-size: 0.24rem;
          color: #999999;
          letter-spacing: 2px;
          float: right;
        }

      }

    }
  }

  .select-icon {
    width: 1rem;
    height: 100%;
    float: left;
    overflow: hidden;
    position: relative;
  }

  .select-name {
    width: 6.5rem;
    height: 100%;
    text-align: left;
    font-family: PingFangSC-Regular;
    font-size: 0.3rem;
    color: #000;
    letter-spacing: 2px;
    font-weight: bold;
    line-height: 1rem;
    float: left;
    position: relative;

    .bind-state {
      position: absolute;
      right: 0.3rem;
      top: 0;
      font-family: PingFangSC-Regular;
      font-size: 0.24rem;
      color: #999999;
      letter-spacing: 2px;
    }

  }

  .pic1 {
    width: 0.44rem;
    height: 0.44rem;
    position: absolute;
    left: 50%;
    margin-left: -0.22rem;
    top: 50%;
    margin-top: -0.22rem;

  }
</style>
