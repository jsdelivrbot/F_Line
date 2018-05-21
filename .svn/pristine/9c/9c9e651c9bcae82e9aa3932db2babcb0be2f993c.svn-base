<template>
    <div class="ranking">
        <v-rankIndex></v-rankIndex> 
    </div>
</template>
<script >
    import vRankIndex from './rankIndex.vue';
    import { mapState } from 'vuex';
    export default {
        components: {
            vRankIndex
        },
        data () {
            return {
              index: 0,
              activeColor:'#378AD6',
              defaultColor:"#999",
            }
        },
    }
</script>
<style lang="less" scoped>
@import '../../style/base.less';
@baseColor:#378AD6;
@riseColor:#FF5E45;
@declearColor:#1CB64A;
 *{
    box-sizing: border-box;
 } 
.ranking{
    width:100%;
    height:11.32rem;
    overflow: scroll;
    background:#fff;
}   
</style>