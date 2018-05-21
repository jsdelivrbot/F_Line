import Vue from 'vue'
import axios from 'axios'
const state = {
    riseLists: [],
    declearLists:[],
    turnoverLists: [],
    volumeLists:[]

}
const mutations = {
  getLists (state, payload) {
    switch (payload.tag) {
      case 'riseLists':
        state.riseLists = payload.res
        break
      case 'declearLists':
        state.declearLists = payload.res
        break
      case 'turnoverLists':
        state.turnoverLists = payload.res
        break
      case 'volumeLists':
        state.volumeLists = payload.res
        break
      default:
        state.riseLists = payload.res
    }
  }
}

const actions = {
    getLists ({ commit }) {
        //涨幅榜
        axios.post('GetRanking', {
                    type:"0",
                    startIndex:1,
                    endIndex:10,
                    field:"diff_rate",
                    order:"DESC"
                }).then(res =>{
                    commit({
                        type:'getLists',
                        tag:'riseLists',
                        res:res.data.List
                    })
                })
        //跌幅榜
        axios.post('GetRanking', {
                    type:"1",
                    startIndex:1,
                    endIndex:10,
                    field:"diff_rate",
                    order:"ASC"
                }).then(res =>{
                    commit({
                        type:'getLists',
                        tag:'declearLists',
                        res:res.data.List
                    })
                })
        //换手率榜
        axios.post('GetRanking', {
                    type:"3",
                    startIndex:1,
                    endIndex:10,
                    field:"turnover",
                    order:"DESC"
                }).then(res =>{
                    commit({
                        type:'getLists',
                        tag:'turnoverLists',
                        res:res.data.List
                    })
                })
        //成交率榜
        axios.post('GetRanking', {
                    type:"5",
                    startIndex:1,
                    endIndex:10,
                    field:"tradeAmount",
                    order:"DESC"
                }).then(res =>{
                    commit({
                        type:'getLists',
                        tag:'volumeLists',
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
