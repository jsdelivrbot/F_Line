<template>
	<div class="setting">
        <group class="setting-box">
        	<cell title="意见反馈" is-link  @click.native="toNext(0)" class="line1"></cell>
        	<cell title="关于我们" is-link  @click.native="toNext(2)" class="line1"></cell>
  		</group>
	</div>
</template>
<script>
import { Cell,Group} from 'vux'
export default {
    components: {
        Cell,
        Group
    },
    methods:{
        toNext:function(index){
            if(index==0){
                this.$router.push({path:'/opinion'})
            }else if(index==2){
                this.$router.push({path:'/aboutus'})
            }
        }
    },
    activated(){
        document.title='设置';
    },
}
</script>
<style lang="less" scoped>
 @import '../../style/base.less';
 *{
 	box-sizing: border-box;
 }
 .setting{
    width:100%;
    height:auto;
    margin-top:0.1rem;
    .setting-box{
        width:100%; 
        height:auto;
        .weui-cell:before {
            border-top:none
        }
        .line1{
            width:100%;
            height:1rem;
            padding: 0 0.3rem !important;
            background:#fff;
            font-size:0.3rem;
            color: #000000;
            letter-spacing: 2px;
            font-family: PingFangSC-Regular;
            border-bottom:1px solid rgba(153,153,153,0.50);
        }
    }
    .exit{
      width:100%;
      height:1rem;
      margin-top:0.2rem;
      background: #FFFFFF;
      box-shadow: 0 1px 0 0 rgba(153,153,153,0.50);
      font-size:0.3rem;
      color: #000000;
      letter-spacing:0.02rem;
      text-align: center;
      line-height: 1rem;
    }
 }

</style>