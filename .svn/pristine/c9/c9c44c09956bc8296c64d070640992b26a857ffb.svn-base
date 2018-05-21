import Vue from 'vue'
import axios from 'axios'
const state = {
    Id:0,
    industryBlocks:[],
    conceptBlocks:[],
    lists:['涨幅','涨速','领涨股','涨家数','跌家数','5日涨幅','10日涨幅','20日涨幅','最新','换手','金额','总手数']              
}
const mutations = {
  getPlate (state, payload) {
    switch (payload.tag) {
      case 'industryBlocks':
        state.industryBlocks = payload.res
        break
      case 'conceptBlocks':
        state.conceptBlocks = payload.res
        break
      default:
        state.industryBlocks = payload.res
    }
  }
}

const actions = {
  getPlate({ commit }) {
    //行业板块
    axios.post('GetStockBlockList', {
                    type:"0"
                }).then(res =>{
                    commit({
                        type:'getPlate',
                        tag:'industryBlocks',
                        res:res.data.List
                    })
                })
    //概念板块
    axios.post('GetStockBlockList', {
                    type:"1"
                }).then(res =>{
                    commit({
                        type:'getPlate',
                        tag:'conceptBlocks',
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
