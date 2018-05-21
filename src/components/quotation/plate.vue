<template>
<div class="plate-box">
   <v-plateItem title="行业板块" :items="industry" @click.native="switchTwo(0)"></v-plateItem>
   <v-plateItem title="概念板块" :items="concept" @click.native="switchTwo(1)"></v-plateItem>
</div>
</template>
<script>
    import { mapState } from 'vuex'
    import vPlateItem from './plateItem.vue'
    export default{
        name:'v-plate',
        components:{
         vPlateItem
        },
        data(){
            return{
                
            }
        },
        computed: {
            ...mapState({
              industry: state => state.plate.industry,
              concept: state => state.plate.concept
            })
        },
        methods: {
            twoPlate: function () {
              this.$store.dispatch('twoPlate')
            },
            switchTwo:function(index){
                this.$store.state.platedetail.Id=index;
            }
        },
        created () {
            this.twoPlate()
        }
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
 .plate-box{
    width:100%;
    height:auto;
 }

</style>