import Vue from 'vue'
import axios from 'axios'
const state = {
    Id:0,
    riseIndex: [],
    declearIndex:[],
    turnoverIndex: [],
    volumeIndex:[],
    indexLists:['最新','涨幅','涨跌','换手率','振幅','市盈(动)','市净率','流通市值','总市值','金额','总手','现手'] 

}
const mutations = {
  getIndex (state, payload) {
    switch (payload.tag) {
      case 'riseIndex':
        state.riseIndex = payload.res
        break
      case 'declearIndex':
        state.declearIndex = payload.res
        break
      case 'turnoverIndex':
        state.turnoverIndex = payload.res
        break
      case 'volumeIndex':
        state.volumeIndex = payload.res
        break
      default:
        state.riseIndex = payload.res
    }
  }
}

const actions = {
    getIndex ({ commit }) {
        //涨幅榜
        axios.post('GetRanking', {
                    type:"0",
                    startIndex:1,
                    endIndex:3240
                }).then(res =>{
                    commit({
                        type:'getIndex',
                        tag:'riseIndex',
                        res:res.data.List
                    })
                })

        //跌幅榜
        axios.post('GetRanking', {
                    type:"1",
                    startIndex:1,
                    endIndex:100
                }).then(res =>{
                    commit({
                        type:'getIndex',
                        tag:'declearIndex',
                        res:res.data.List
                    })
                })

        //换手率榜
        axios.post('GetRanking', {
                type:"3",
                startIndex:1,
                endIndex:100
        }).then(res =>{
                commit({
                    type:'getIndex',
                    tag:'turnoverIndex',
                    res:res.data.List
                })
        })

         //成交率榜
        axios.post('GetRanking', {
                    type:"5",
                    startIndex:1,
                    endIndex:100
                }).then(res =>{
                    commit({
                        type:'getIndex',
                        tag:'volumeIndex',
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
