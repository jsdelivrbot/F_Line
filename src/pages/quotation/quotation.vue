<template>
    <div>
        <v-quoheader></v-quoheader>
        <v-footer :curpage="'/quotation'"></v-footer>
    </div>   
</template>
<script>
    import Vue from 'vue'; 
    import vQuoheader from '../../components/quotation/quoheader.vue';
    import vFooter from '../../components/index';
    
    export default{
        components: {
            vQuoheader,
            vFooter,
        },
        activated(){
            document.title='行情';
        },
    }
</script>
<style lang="less" scoped>
body{
    overflow: hidden;
}
</style>