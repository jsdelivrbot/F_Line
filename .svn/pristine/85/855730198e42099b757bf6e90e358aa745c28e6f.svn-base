import Vue from 'vue'
import axios from 'axios'
const state = {
    industry:[] ,
    concept:[]              
}
const mutations = {
  twoPlate (state, payload) {
    switch (payload.tag) {
      case 'industry':
        state.industry = payload.res
        break
      case 'concept':
        state.concept = payload.res
      // default:
      //   state.industry = payload.res
    }
  }
}

const actions = {
    twoPlate ({ commit }) {
        //行业板块
        axios.post('GetStockBlockList', {
                    type:"0",
                    nowPage:1,
                    pageSize:6,
                    field:"diff_money",
                    order:"DESC"


                }).then(res =>{
                    console.log(res)
                    commit({
                        type:'twoPlate',
                        tag:'industry',
                        res:res.data.List
                    })
                })
        //概念板块
        axios.post('GetStockBlockList', {
                    type:"1",
                    nowPage:1,
                    pageSize:6,
                    field:"diff_money",
                    order:"DESC"
                }).then(res =>{
                    commit({
                        type:'twoPlate',
                        tag:'concept',
                        res:res.data.List
                    })
        })

  }
}
export default {
    state,
    mutations,
    actions
}
