import Vue from 'vue';
//k线图数据格式化
Vue.prototype.$formatdata = function(data) {
        var datas = [];
        for (let i = 0; i < data.length; i++) {
            datas[i] = new Array();
            datas[i].push(data[i].Date, data[i].OpenPrice, data[i].ClosePrice, data[i].MinPrice, data[i].MaxPrice, data[i].TradeNum)
        }
        return datas
    }
    //游戏数据格式化
Vue.prototype.$formatgame = function(data) {
        var datas = [];
        for (let i = 0; i < data.length; i++) {
            datas[i] = new Array();
            datas[i].push(data[i].Date, data[i].OpenPrice, data[i].ClosePrice, data[i].MinPrice, data[i].MaxPrice, data[i].TradeNum, data[i].Diff_money, data[i].Diff_Rate)
        }
        return datas
    }
    //实时详情k线图数据格式化
Vue.prototype.$formatcli = function(data) {
        var datas = [];
        for (let i = 0; i < data.length; i++) {
            datas[i] = new Array();
            datas[i].push(data[i].date, data[i].openPrice, data[i].closePrice, data[i].todayMin, data[i].todayMax, data[i].tradeNum)
        }
        return datas
    }
    //前二十根数据(预测)
Vue.prototype.$formatk = function(data) {
        var datas = [];
        for (let i = 0; i < data.length; i++) {
            datas[i] = new Array();
            if (i < 20) {
                datas[i].push(data[i].Date, data[i].OpenPrice, data[i].ClosePrice, data[i].MinPrice, data[i].MaxPrice, data[i].TradeNum)
            } else {
                datas[i].push('')
            }

        }
        return datas
    }
    //前二十根数据(预测)
Vue.prototype.$formatv = function(data) {
        var datas = [];
        for (let i = 0; i < data.length; i++) {
            datas[i] = new Array();
            if (i < 35) {
                datas[i].push(data[i].Date, data[i].OpenPrice, data[i].ClosePrice, data[i].MinPrice, data[i].MaxPrice, data[i].TradeNum)
            } 
        }
        return datas
    }
    //将秒格式化
Vue.prototype.$sectomin=function(seconds){
    return [
        parseInt(seconds / 60 % 60),
        parseInt(seconds % 60)
    ]
        .join(":")
        .replace(/\b(\d)\b/g, "0$1");
} 