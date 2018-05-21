//增加数据状态常量(尾部)
const ADD_DATA = 'ADD_DATA';
//增加数据状态常量(头部)
const UNS_DATA = 'UNS_DATA';
//清空数据
const DEL_DATA = 'DEL_DATA';
//弹窗框控制
const CON_ALERT = 'CON_ALERT';
//页面控制
const CON_PAGE = 'CON_PAGE';
//页面控制
const CON_TIMEOUT = 'CON_TIMEOUT';
const CHANGE_FLAG = 'CHANGE_FLAG';

export default {
    //增加数据
    [ADD_DATA](state, payload) {
        //日k、周k、月k、游戏处理
        switch (payload.newdata.type) {
            case 'dayk':
                state.dayk.unshift(payload.newdata.data);
                break;
            case 'weekk':
                state.weekk.unshift(payload.newdata.data);
                break;
            case 'monthk':
                state.monthk.unshift(payload.newdata.data);
                break;
                //前60根数据
            case 'gameb':
                state.gbdata.push(payload.newdata.data);
                // console.log(payload.newdata.data)
                break;
                //后20根数据
            case 'gamea':
                state.gadata.push(payload.newdata.data);
                break;
            case 'deldayk':
                state.dayk=[];
                break;
            case 'delweekk':
                state.weekk=[];
                break;
            case 'delmonthk':
                state.monthk=[];
                break;
        }
    },
    [UNS_DATA](state, payload) {
        //日k、周k、月k、游戏处理
        switch (payload.newdata.type) {
            case 'dayk':
                state.dayk.unshift(payload.newdata.data);
                break;
            case 'weekk':
                state.weekk.unshift(payload.newdata.data);
                break;
            case 'monthk':
                state.month.unshift(payload.newdata.data);
                break;
        }
    },
    //清空数据
    [DEL_DATA](state, payload) {
        state.gbdata = [];
        state.gadata = [];
    },
    //诊股结果弹窗状态
    [CON_ALERT](state, payload) {
        state.alertstate = payload.newdata.state;
    },
    //页面组件状态控制
    [CON_PAGE](state, payload) {
        state.inpagecom = payload.newdata.comp;
    },
    //定时器控制
    [CON_TIMEOUT](state, payload) {
        switch (payload.newdata.type) {
            case 'plus':
                state.timeout++;
                break;
            case 'minus':
                state.timeout--;
                break;
        }
    },
    [CHANGE_FLAG](state,payload) {
        state.flag=payload.newdata.state;
    }
}