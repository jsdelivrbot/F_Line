export default {
    //增添新数据(尾部)
    ADDDATA({ commit, state }, newdata) {
        commit('ADD_DATA', { newdata })
    },
    //增添新数据(头部) 日K/周K/月K
    UNSDATA({ commit, state }, newdata) {
        commit('UNS_DATA', { newdata })
    },
    //数据清空
    DELDATA({ commit, state }, newdata) {
        commit('DEL_DATA', { newdata })
    },
    //弹窗框架控制
    CONALERT({ commit, state }, newdata) {
        commit('CON_ALERT', { newdata })
    },
    //页面控制
    CONPAGE({ commit, state }, newdata) {
        commit('CON_PAGE', { newdata })
    },
    //定时器个数控制
    CONTIMEOUT({ commit, state }, newdata) {
        commit('CON_TIMEOUT', { newdata })
    },
    CHANGEFLAG({ commit, state }, newdata) {
        commit('CHANGE_FLAG', { newdata })
    },
}