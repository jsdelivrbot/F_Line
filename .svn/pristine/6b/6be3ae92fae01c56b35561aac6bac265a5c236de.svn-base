import Vue from 'vue'
//获取当前时间前n天的时间值
Vue.prototype.$time=(num)=>{
	//获取时间YYYYMMDD
    let _date=new Date(new Date().getTime() -num*86400000);
    let _month = _date.getMonth() + 1;
    let _strDate = _date.getDate();
    if (_month >= 1 && _month <= 9) {
        _month = "0" + _month;
    }
    if (_strDate >= 0 && _strDate <= 9) {
        _strDate = "0" + _strDate;
    }
    let date = _month +'.'+ _strDate;
    return date;
}