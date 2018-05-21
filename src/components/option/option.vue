<template>
    <div id="option-list" @click.stop="showit=!showit">
        <img :src="selectAL" v-show="showit==true">
        <img :src="selectO" v-show="showit==false">
    </div>
</template>
<script >
export default{
    name:'v-option',
    props:['showit'],
    data(){
        return{
            selectO:require('../../assets/images/quotation/search_btn_add_nor@'+this.$store.state.dpr+'x.png'),
            selectAL:require('../../assets/images/quotation/search_btn_add_pre@'+this.$store.state.dpr+'x.png'),
            oplists:''
        }
    },
    methods:{
        
    }
}
</script>
<style lang="less" scoped>
*{
    box-sizing: border-box;
}
@riseColor:#FF5E45;
@declearColor:#1CB54A;
@baseLength:1.62rem;

.declearfont{
    color:@declearColor;
}
.risefont{
    color:@riseColor;
} 
#option-list{
    width: 50%;
    height:100%;
    position: absolute;
    right:-0.3rem;
    top:0;
    img{
        float: right;
        width: 0.44rem;
        height: 0.44rem;
        display: block;
        margin-top:0.18rem;
        margin-right:0.3rem;
    
    } 
}  
</style>