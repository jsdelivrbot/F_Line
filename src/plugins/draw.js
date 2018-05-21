//绘图以及参数设置插件
import Vue from 'vue'
import echarts from 'echarts'
//含分时的配置
//数据，id,动画，日k，5，  30 ,平均，分时   开始% 结束%
Vue.prototype.$draw = function(_data, id, anim, mday, mfiv, mthi, mvol, everdata, start, end) {
        if (!id) return;
        var myChart = echarts.init(document.getElementById(id));
        //数组处理
        function splitData(rawData) {
            var datas = [];
            var times = [];
            var vols = [];
            var macds = [];
            var difs = [];
            var deas = [];
            for (var i = 0; i < rawData.length; i++) {
                datas.push(rawData[i]);
                times.push(rawData[i].splice(0, 1)[0]);
                vols.push(rawData[i][4]);
                macds.push(rawData[i][6]);
                difs.push(rawData[i][7]);
                deas.push(rawData[i][8]);
            }
            return {
                datas: datas,
                times: times,
                vols: vols,
                macds: macds,
                difs: difs,
                deas: deas
            };
        }
        var data = splitData(_data)
            //MA计算公式
        function calculateMA(dayCount) {
            var result = [];
            for (var i = 0, len = data.times.length; i < len; i++) {
                if (i < dayCount) {
                    result.push('-');
                    continue;
                }
                var sum = 0;
                for (var j = 0; j < dayCount; j++) {
                    sum += data.datas[i - j][1];
                }
                result.push((sum / dayCount).toFixed(2));
            }
            return result;
        }
        //分时图
        function everydata(data) {
            var timedata = [];
            var voldata = [];
            var pricedata = [];
            var avgdata = [];
            data.forEach(function(value, index, arr) {
                timedata.push(value.time);
                voldata.push(value.volume);
                pricedata.push(value.nowPrice);
                avgdata.push(value.avgPrice);
            })
            return {
                time: timedata,
                vol: voldata,
                price: pricedata,
                avg: avgdata
            }
        }
        var evedata;
        if (everdata) {
            evedata = everydata(everdata);
            start=0;
            end=100;
        }
        var option = {
            backgroundColor: 'white',
            title: {
                text: '',
                left: 0
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                if(params.seriesName=="Volumn"){
                     return '时间:'+params.name + '<br>' +
                     '交易量:' + params.value 
             
                }else{
                    return '时间:'+params.name + '<br>' +
                        '开盘:' + params.value[0] + '<br>' +
                        '收盘:' + params.value[1] + '<br>' +
                        '最低:' + params.value[2] + '<br>' +
                        '最高:' + params.value[3]
                }
                    
                },
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        type: 'solid',
                        color: 'black',
                        width: 0.6
                    }
                },
                triggerOn: 'click'
            },
            animation: true,
            legend: {
                //data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30'],
                inactiveColor: '#777',
                textStyle: {
                    color: '#fff'
                }
            },
            textStyle: {
                color: 'white'
            },
            grid: [{
                    left: '0',
                    right: '0',
                    top: '0',
                    height: '80%'
                },
                {
                    left: '0',
                    right: '0',
                    top: '86%',
                    height: '10%'
                }
            ],
            dataZoom: [{
                type: 'inside',
                xAxisIndex: [0, 1],
                start: start,
                end: end,
                throttle: 0,
            }],
            xAxis: [{
                    type: 'category',
                    data: data.times,
                    scale: true,
                    splitLine: { 
                        show: true ,
                        lineStyle:{
                            color: ['#ccc'],
                            type: 'dotted',
                        }
                    },
                    splitNumber: 1,
                    axisTick: {
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#CCCCCC',
                            align:'left'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    }
                },
                {
                    type: 'category',
                    gridIndex: 1,
                    data: data.times,
                    axisLabel: { show: false },
                    splitLine: { 
                        show: true ,
                        lineStyle:{
                            color: ['#ccc'],
                            type: 'dotted',
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                }
            ],
            yAxis: [{
                    scale: true,
                    splitLine: { show: true ,
                        lineStyle:{
                            color: ['#ccc'],
                            type: 'dotted',
                        }
                    },
                    axisLine: {
                        show:false,
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                    axisTick: {
                        lineStyle: {
                            color: 'black'
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                {
                    gridIndex: 1,
                    splitNumber:1,
                    axisTick: { show: false },
                    splitLine: { 
                        show: true ,
                        lineStyle:{
                            color: ['#ccc'],
                            type: 'dotted',
                        }
                    },
                    axisLabel: { show: true },
                    axisLine: {
                        show:false,
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                }
            ],
            series: [{
                    name: '',
                    type: 'candlestick',
                    data: data.datas,
                    itemStyle: {
                        normal: {
                            color: '#ef232a',
                            color0: '#14b143',
                            borderColor: '#ef232a',
                            borderColor0: '#14b143',
                            borderWidth: '1'
                        },
                    },
                    // markArea: {
                    //   silent: true,
                    //   itemStyle:{
                    //     normal:{
                    //       color:'rgba(218,218,218,0.5)'
                    //     }
                    //   },
                    //   data: [[{
                    //       xAxis: '2017/5/8'
                    //   }, {
                    //       xAxis: '2017/5/14'
                    //   }],[{
                    //      xAxis: '2017/5/16'
                    //   },{
                    //      xAxis: '2017/5/20'
                    //   }]]
                    // },
                    animationDuration: 300,
                    animationEasing: 'linear',
                    animationDelay: function(idx) {
                        return idx * 300;
                    }
                },
                {
                    name: 'MA5',
                    type: 'line',
                    data: calculateMA(5),
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            color:'rgb(49,49,49)'
                        }
                    }
                },
                {
                    name: 'MA10',
                    type: 'line',
                    data: calculateMA(10),
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            color:'#E9A113'
                        }
                    }
                },
                {
                    name: 'MA30',
                    type: 'line',
                    data: calculateMA(30),
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            color:'green'
                        }
                    }
                },
                {
                    name: 'Volumn',
                    type: 'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    color: 'red',
                    data: data.vols,
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var colorList;
                                if (everdata) {
                                    if (evedata.price[params.dataIndex + 1] > evedata.price[params.dataIndex]) {
                                        colorList = '#ef232a';
                                    } else {
                                        colorList = '#14b143';
                                    }
                                } else {
                                    if (data.datas[params.dataIndex][1] > data.datas[params.dataIndex][0]) {
                                        colorList = '#ef232a';
                                    } else {
                                        colorList = '#14b143';
                                    }
                                }
                                return colorList;
                            },
                        }
                    },

                },
                {
                    name:'',
                    type: 'line',
                    data: '',
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1,
                            color: '#378AD6'
                        }
                    }
                },
                {
                    name:'',
                    type: 'line',
                    data: '',
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1,
                            color: '#FFBE45'
                        }
                    }
                },
            ],
            animationEasing: 'linear',
        };
        if (!mday) {
            option.series[0] = '';
        };
        if (!mfiv) {
            option.series[1] = '';
        };
        if (!mthi) {
            option.series[2] = '';
        };
        if (!mvol) {
            option.series[4] = '';
        };
        if (!everdata) {
            option.series[5] = '';
        } else {
            option.xAxis[0].data = evedata.time;
            option.xAxis[1].data = evedata.time;
            option.series[4].data = evedata.vol;
            option.series[5].data = evedata.price;
            option.series[6].data = evedata.avg;
        }
        if (!anim) {
            option.animation = false;
        }

        function getposi(params) {
            //console.log(params.batch[0].start+'+++'+params.batch[0].end)
            Vue.prototype.$start = function() {
                return params.batch[0].start
            }
            Vue.prototype.$end = function() {
                return params.batch[0].end
            }
        }
        myChart.on('dataZoom', getposi);
        myChart.setOption(option);

}
//分时线绘制
Vue.prototype.$minute = function(id, everdata) {
        if (!id) return;
        var myChart = echarts.init(document.getElementById(id));
        //数组处理
        function splitData(rawData) {
            var datas = [];
            var times = [];
            var vols = [];
            for (var i = 0; i < rawData.length; i++) {
                datas.push(rawData[i]);
                times.push(rawData[i].splice(0, 1)[0]);
                vols.push(rawData[i][4]);
            }
            return {
                datas: datas,
                times: times,
                vols: vols,
            };
        }
        //MA计算公式
        function calculateMA(dayCount) {
            var result = [];
            for (var i = 0, len = data.times.length; i < len; i++) {
                if (i < dayCount) {
                    result.push('-');
                    continue;
                }
                var sum = 0;
                for (var j = 0; j < dayCount; j++) {
                    sum += data.datas[i - j][1];
                }
                result.push((sum / dayCount).toFixed(2));
            }
            return result;
        }
        //分时图
        function everydata(data) {
            var timedata = [];
            var voldata = [];
            var pricedata = [];
            var avgdata = [];
            var len=data.length;
            data.forEach(function(value, index, arr) {
                timedata.push(value.time);
                voldata.push(value.volume);
                pricedata.push(value.nowPrice);
                avgdata.push(value.avgPrice);
            })
            for(var i=0;i<240-len;i++){
                timedata.push('')
                voldata.push('')
                pricedata.push('')
                avgdata.push('')
            }
            return {
                time: timedata,
                vol: voldata,
                price: pricedata,
                avg: avgdata
            }
        }
        var evedata = everydata(everdata);
        var option = {
            backgroundColor: 'white',
            title: {
                text: '',
                left: 0
            },
            tooltip: {
                trigger: 'axis',
                formatter: function(params) {
                    console.log(params)
                    if(params[0].seriesName=="Volumn"){
                         return '时间:'+params[0].name + '<br>' +
                        '交易量:' + params[0].value 
                    }else{
                        return '时间:'+params[0].name + '<br>' +
                                '价格:' + params[0].value + '<br>' +
                                '均价:' + params[1].value + '<br>'
                    }
                    
                },
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        type: 'solid',
                        color: 'black',
                        width: 0.6
                    }
                },
                triggerOn: 'click'
            },
            animation: false,
            legend: {
                inactiveColor: '#777',
                textStyle: {
                    color: '#fff'
                }
            },
            textStyle: {
                color: 'white'
            },
            grid: [{
                    left: '0',
                    right: '0',
                    top: '0',
                    height: '80%'
                },
                {
                    left: '0',
                    right: '0',
                    top: '86%',
                    height: '10%'
                }
            ],
            dataZoom: [{
                type: 'inside',
                disabled:true,
                xAxisIndex: [0, 1],
                start: 0,
                end: 100,
                throttle: 0,
            }],
            xAxis: [{
                    type: 'category',
                    data: evedata.time,
                    splitNumber:1,
                    scale: true,
                    splitLine: { 
                        show: true ,
                        lineStyle:{
                            color: ['#ccc'],
                            type: 'dotted',
                        }
                    },
                    axisTick: {
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                    axisLabel: {
                        show: false,
                        textStyle: {
                            color: '#CCCCCC',
                            align:'left'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    }
                },
                {
                    type: 'category',
                    gridIndex: 1,
                    data: evedata.time,
                    axisLabel: { show: false },
                    splitLine: { 
                        show: true ,
                        lineStyle:{
                            color: ['#ccc'],
                            type: 'dotted',
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                }
            ],
            yAxis: [{
                    scale: true,
                    splitLine: { show: true ,
                        lineStyle:{
                            color: ['#ccc'],
                            type: 'dotted',
                        }
                    },
                    axisLine: {
                        show:false,
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                    axisTick: {
                        show:false,
                        lineStyle: {
                            color: 'black'
                        }
                    },
                    axisLabel: {
                        show: false,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                {
                    gridIndex: 1,
                    splitNumber:1,
                    axisTick: { show: false },
                    splitLine: { 
                        show: true ,
                        lineStyle:{
                            color: ['#ccc'],
                            type: 'dotted',
                        }
                    },
                    axisLabel: { show: true },
                    axisLine: {
                        show:false,
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                }
            ],
            series: [
                {
                    name: 'Volumn',
                    type: 'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    color: 'red',
                    data: evedata.vol,
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var colorList;
                                if (everdata) {
                                    if (evedata.price[params.dataIndex + 1] > evedata.price[params.dataIndex]) {
                                        colorList = '#ef232a';
                                    } else {
                                        colorList = '#14b143';
                                    }
                                } else {
                                    if (data.datas[params.dataIndex][1] > data.datas[params.dataIndex][0]) {
                                        colorList = '#ef232a';
                                    } else {
                                        colorList = '#14b143';
                                    }
                                }
                                return colorList;
                            },
                        }
                    },

                },
                {
                    name:'价格',
                    type: 'line',
                    data: evedata.price,
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1,
                            color: '#378AD6'
                        }
                    }
                },
                {
                    name:'均价',
                    type: 'line',
                    data: evedata.avg,
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1,
                            color: '#FFBE45'
                        }
                    }
                },
            ],
        };
       
        myChart.setOption(option);

}
    //存储K线左右滑动的start与end
Vue.prototype.$start = function() {}
Vue.prototype.$end = function() {}
    //对比特效的配置
    //数据,id,  预测
Vue.prototype.$contrast = function(_data, id, linedata,anima) {
        var myChart = echarts.init(document.getElementById(id));
        //数组处理
        function splitData(rawData) {
            var datas = [];
            var times = [];
            var vols = [];
            for (var i = 0; i < rawData.length; i++) {
                datas.push(rawData[i]);
                times.push(rawData[i].splice(0, 1)[0]);
                vols.push(rawData[i][4]);
            }
            for(var j=0;j<15;j++){
                times.push('')
            }
            return {
                datas: datas,
                times: times,
                vols: vols,
            };
        }
        //后续折线图
        function follow(foldata) {
            var folresult = [];
            for (var i = 0; i < 20; i++) {
                folresult.push('-');
            }
            for (var j = 0; j < foldata.length; j++) {
                folresult.push(foldata[j]);
            }
            return folresult;
        }
        var data = splitData(_data);

        var option = {
            backgroundColor: 'white',
            label: {
                normal: {
                    color: 'black'
                }
            },
            title: {
                text: '',
                left: 0
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    if(params.seriesName=="Volumn"){
                        return '时间:'+params.name + '<br>' +
                        '交易量:' + params.value
                    }else{
                        return '时间:'+params.name + '<br>' +
                        '开盘:' + params.value[0] + '<br>' +
                        '收盘:' + params.value[1] + '<br>' +
                        '最低:' + params.value[2] + '<br>' +
                        '最高:' + params.value[3]
                    }
                    
                },
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        type: 'solid',
                        color: 'black',
                        width: 0.6
                    }
                },
                triggerOn: 'click'
            },
            animation: anima,
            legend: {
                //data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30'],
                inactiveColor: '#777',
                textStyle: {
                    color: '#fff'
                }
            },
            textStyle: {
                color: 'white'
            },
            grid: [{
                left: '0',
                right: '0',
                top: '0',
                height: '80%'
            }, {
                left: '0',
                right: '0',
                top: '80%',
                height: '10%'
            }],
            xAxis: [{
                    type: 'category',
                    data: data.times,
                    scale: true,
                    splitLine: { show: false },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                    axisLabel: {
                        show: false,
                        textStyle: {
                            color: '#CCCCCC'
                        }
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },

                },
                {
                    type: 'category',
                    gridIndex: 1,
                    data: data.times,
                    axisLabel: {
                        show: true,
                        interval:18,
                        textStyle: {
                            color: '#CCCCCC',
                            align: 'center'
                        }
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                     axisTick: {
                        show: true,
                        interval:18,
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                }
            ],
            yAxis: [{
                    scale: true,
                    splitLine: { show: false },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: 'black'
                        }
                    },
                    axisLabel: {
                        show: false,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                {
                    gridIndex: 1,
                    splitNumber: 3,
                    axisTick: { show: false },
                    splitLine: { show: false },
                    axisLabel: { show: true },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                }
            ],
            series: [{
                    name: '',
                    type: 'candlestick',
                    data: data.datas,
                    itemStyle: {
                        normal: {
                            color: '#ef232a',
                            color0: '#14b143',
                            borderColor: '#ef232a',
                            borderColor0: '#14b143',
                        },
                    },
                    animationDuration: 300,
                    animationEasing: 'linear',
                    animationDelay: function(idx) {
                        return idx * 300;
                    }
                },
                {
                    name: 'Volumn',
                    type: 'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    color: 'red',
                    data: data.vols,
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var colorList;
                                if (data.datas[params.dataIndex][1] > data.datas[params.dataIndex][0]) {
                                    colorList = '#ef232a';
                                } else {
                                    colorList = '#14b143';
                                }
                                return colorList;
                            },
                            opacity: '0.3'
                        }
                    },
                    animationDelay: function(idx) {
                        return 10000;
                    }
                },
                {
                    type: 'line',
                    data: follow(linedata),
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                },
            ],
            animationEasing: 'linear',
        };
        myChart.setOption(option);
    }
    //对比特效的配置(不含预测)
    //数据,id, 交易量
Vue.prototype.$trastcon = function(_data, id,anima) {
        var myChart = echarts.init(document.getElementById(id));
        //数组处理
        function splitData(rawData) {
            var datas = [];
            var times = [];
            var vols = [];
            for (var i = 0; i < rawData.length; i++) {
                datas.push(rawData[i]);
                times.push(rawData[i].splice(0, 1)[0]);
                vols.push(rawData[i][4]);
            }
            return {
                datas: datas,
                times: times,
                vols: vols,
            };
        }
        var data = splitData(_data);
        var option = {
            backgroundColor: 'white',
            label: {
                normal: {
                    color: 'black'
                }
            },
            title: {
                text: '',
                left: 0
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                   if(params.seriesName=="Volumn"){
                        return '时间:'+params.name + '<br>' +
                        '交易量:' + params.value
                    }else{
                        return '时间:'+params.name + '<br>' +
                        '开盘:' + params.value[0] + '<br>' +
                        '收盘:' + params.value[1] + '<br>' +
                        '最低:' + params.value[2] + '<br>' +
                        '最高:' + params.value[3]
                    }
                },
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        type: 'solid',
                        color: 'black',
                        width: 0.6
                    }
                },
                triggerOn: 'click'
            },
            animation: anima,
            legend: {
                //data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30'],
                inactiveColor: '#777',
                textStyle: {
                    color: '#fff'
                }
            },
            textStyle: {
                color: 'white'
            },
            grid: [{
                left: '0',
                right: '0',
                top: '0',
                height: '80%'
            }, {
                left: '0',
                right: '0',
                top: '80%',
                height: '10%'
            }],
            xAxis: [{
                    type: 'category',
                    data: data.times,
                    scale: true,
                    splitLine: { show: false },
                    axisTick: {
                        show: false,
                        interval:16,
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                    axisLabel: {
                        show: false,
                        textStyle: {
                            color: '#CCCCCC'
                        }
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                },
                {
                    type: 'category',
                    gridIndex: 1,
                    data: data.times,
                    axisLabel: {
                        show: true,
                        interval:18,
                        textStyle: {
                            color: '#CCCCCC',
                            align: 'center'
                        }
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                    axisTick: {
                        show: true,
                        interval:18,
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                }
            ],
            yAxis: [{
                    scale: true,
                    splitLine: { show: false },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: 'black'
                        }
                    },
                    axisLabel: {
                        show: false,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                {
                    gridIndex: 1,
                    splitNumber: 3,
                    axisTick: { show: false },
                    splitLine: { show: false },
                    axisLabel: { show: true },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                }
            ],
            series: [{
                    name: '',
                    type: 'candlestick',
                    data: data.datas,
                    itemStyle: {
                        normal: {
                            color: '#ef232a',
                            color0: '#14b143',
                            borderColor: '#ef232a',
                            borderColor0: '#14b143',
                        },
                    },
                    animationDuration: 300,
                    animationEasing: 'linear',
                    animationDelay: function(idx) {
                        return idx * 300;
                    }
                },
                {
                    name: 'Volumn',
                    type: 'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    color: 'red',
                    data: data.vols,
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var colorList;
                                if (data.datas[params.dataIndex][1] > data.datas[params.dataIndex][0]) {
                                    colorList = '#ef232a';
                                } else {
                                    colorList = '#14b143';
                                }
                                return colorList;
                            },
                            opacity: '0.5'
                        }
                    },
                    animationDelay: function(idx) {
                        return 10000;
                    }
                },
            ],
            animationEasing: 'linear',
        };
        myChart.setOption(option);
    }
    //对比无特效的配置
    //数据，id,
Vue.prototype.$static = function(_data, id) {
    if (!id) return;
    var myChart = echarts.init(document.getElementById(id));
    //数组处理
    function splitData(rawData) {
        var datas = [];
        var times = [];
        var vols = [];
        for (var i = 0; i < rawData.length; i++) {
            datas.push(rawData[i]);
            times.push(rawData[i].splice(0, 1)[0]);
            vols.push(rawData[i][4]);
        }
        return {
            datas: datas,
            times: times,
            vols: vols,
        };
    }
    var data = splitData(_data);
    var option = {
        backgroundColor: 'white',
        title: {
            text: '',
            left: 0
        },
        tooltip: {
            trigger: 'item',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    type: 'solid',
                    color: 'black',
                    width: 0.6
                }
            },
            triggerOn: 'click'
        },
        animation: false,
        legend: {
            //data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30'],
            inactiveColor: '#777',
            textStyle: {
                color: '#fff'
            }
        },
        textStyle: {
            color: 'white'
        },
        grid: [{
                left: '0',
                right: '0',
                top: '0',
                height: '80%'
            },
            {
                left: '0',
                right: '0',
                top: '80%',
                height: '15%'
            }
        ],
        dataZoom: [{
            type: 'inside',
            disabled: true
        }],
        xAxis: [{
                type: 'category',
                data: data.times,
                scale: true,
                splitLine: { show: false },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#CCCCCC'
                    }
                },
                axisLabel: {
                    show: false,
                    textStyle: {
                        color: '#CCCCCC'
                    }
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#CCCCCC'
                    }
                },
            },
            {
                type: 'category',
                gridIndex: 1,
                data: data.times,
                axisLabel: { show: false },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#CCCCCC'
                    }
                },
            }
        ],
        yAxis: [{
                scale: true,
                splitLine: { show: false },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#CCCCCC'
                    }
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: 'black'
                    }
                },
                axisLabel: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            {
                gridIndex: 1,
                splitNumber: 3,
                axisTick: { show: false },
                splitLine: { show: false },
                axisLabel: { show: true },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#CCCCCC'
                    }
                },
            }
        ],
        series: [{
                name: '',
                type: 'candlestick',
                data: data.datas,
                itemStyle: {
                    normal: {
                        color: '#ef232a',
                        color0: '#14b143',
                        borderColor: '#ef232a',
                        borderColor0: '#14b143',
                        borderWidth: '1'
                    },
                },
                markArea: {
                    silent: true,
                    itemStyle: {
                        normal: {
                            color: 'rgba(218,218,218,0.4)'
                        }
                    },
                    data: [
                        [{
                            x: '57%'
                        }, {
                            x: '100%'
                        }]
                    ]
                },
            },
            {
                name: 'Volumn',
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                color: 'red',
                data: data.vols,
                markArea: {
                    silent: true,
                    itemStyle: {
                        normal: {
                            color: 'rgba(218,218,218,0.4)'
                        }
                    },
                    data: [
                        [{
                            x: '57%'
                        }, {
                            xs: '100%'
                        }]
                    ]
                },
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList;
                            if (data.datas[params.dataIndex][1] > data.datas[params.dataIndex][0]) {
                                colorList = '#ef232a';
                            } else {
                                colorList = '#14b143';
                            }
                            return colorList;
                        },
                    }
                },

            }
        ],
    };

    myChart.setOption(option);
}

//数据，id,动画,BS状态
Vue.prototype.$game = function(_data, id, anim, state) {
        if (!id) return;
        var myChart = echarts.init(document.getElementById(id));
        //数组处理
        function splitData(rawData) {
            var datas = [];
            var times = [];
            var vols = [];
            var macds = [];
            var difs = [];
            var deas = [];
            for (var i = 0; i < rawData.length; i++) {
                datas.push(rawData[i]);
                times.push(rawData[i].splice(0, 1)[0]);
                vols.push(rawData[i][4]);
                macds.push(rawData[i][6]);
                difs.push(rawData[i][7]);
                deas.push(rawData[i][8]);
            }
            return {
                datas: datas,
                times: times,
                vols: vols,
                macds: macds,
                difs: difs,
                deas: deas
            };
        }
        var data = splitData(_data)
        var start = data.times[data.times.length - 60];
        var end = data.times[data.times.length - 1];
        var storarr = JSON.parse(sessionStorage.markarea);
        var pointarr = JSON.parse(sessionStorage.markpoint);
        switch (state) {
            case 'buy':
                var shadowbegin = data.times[data.times.length - 1];
                var shadowend = data.times[data.times.length];
                //存储阴影区域坐标
                var temparr = [{
                    xAxis: shadowbegin
                }, {
                    xAxis: shadowend
                }]
                storarr.push(temparr);
                sessionStorage.markarea = JSON.stringify(storarr);
                //存储BS标志坐标
                var arrtemp = {
                    value: 1,
                    xAxis: shadowbegin,
                    yAxis: 'min',
                    itemStyle: {
                        normal: {
                            color: 'red'
                        }
                    }
                }
                pointarr.push(arrtemp);
                sessionStorage.markpoint = JSON.stringify(pointarr);
                break;
            case 'sell':
                var shadowend = data.times[data.times.length - 2];
                storarr[storarr.length - 1][1].xAxis = shadowend;
                sessionStorage.markarea = JSON.stringify(storarr);
                //存储BS标志坐标
                var arrtemp = {
                    value: 0,
                    xAxis: shadowend,
                    yAxis: 'min',
                    itemStyle: {
                        normal: {
                            color: 'blue'
                        }
                    }
                }
                pointarr.push(arrtemp);
                sessionStorage.markpoint = JSON.stringify(pointarr);
                break;
            case 'hold':
                var shadowend = data.times[data.times.length - 1];
                storarr[storarr.length - 1][1].xAxis = shadowend;
                sessionStorage.markarea = JSON.stringify(storarr);
                break;
        }
        //MA计算公式
        function calculateMA(dayCount) {
            var result = [];
            for (var i = 0, len = data.times.length; i < len; i++) {
                if (i < dayCount) {
                    result.push('-');
                    continue;
                }
                var sum = 0;
                for (var j = 0; j < dayCount; j++) {
                    sum += data.datas[i - j][1];
                }
                result.push((sum / dayCount).toFixed(2));
            }
            return result;
        }
        var option = {
            backgroundColor: '#081928',
            title: {
                text: '',
                left: 0
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    return params.name + '<br>' +
                        '开盘:' + params.value[0] + '<br>' +
                        '收盘:' + params.value[1] + '<br>' +
                        '最低:' + params.value[2] + '<br>' +
                        '最高:' + params.value[3]
                },
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        type: 'solid',
                        color: 'white',
                        width: 0.6
                    }
                },
                triggerOn: 'click'
            },
            animation: true,
            legend: {
                data: ['日K', 'MA5','MA10', 'MA30'],
                inactiveColor: '#777',
                textStyle: {
                    color: '#fff'
                },
                left: 30
            },
            textStyle: {
                color: 'white'
            },
            grid: [{
                    left: '8%',
                    right: '0',
                    top: '0',
                    height: '80%'
                },
                {
                    left: '6%',
                    right: '0',
                    top: '86%',
                    height: '10%'
                }
            ],
            dataZoom: [{
                type: 'inside',
                xAxisIndex: [0, 1],
                startValue: start,
                endValue: end,
                throttle: 0,
            }],
            xAxis: [{
                    type: 'category',
                    data: data.times,
                    scale: true,
                    splitLine: { show: false },
                    splitNumber: 20,
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                    axisLabel: {
                        show: false,
                        textStyle: {
                            color: '#CCCCCC'
                        }
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    }
                },
                {
                    type: 'category',
                    gridIndex: 1,
                    data: data.times,
                    axisLabel: { show: false },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                    axisTick: { show: false, },
                }
            ],
            yAxis: [{
                    scale: true,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color:'#333333'
                        }
                    },
                    axisLine: { show: false, },
                    axisTick: { show: false, },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                {
                    gridIndex: 1,
                    min: 0,
                    axisLine: { show: false },
                    axisTick: { show: false },
                    splitLine: { show: false },
                    axisLabel: { show: false },
                }
            ],
            color:['white', 'yellow', 'green', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
            series: [{
                    name: '日K',
                    type: 'candlestick',
                    data: data.datas,
                    itemStyle: {
                        normal: {
                            color: '#ef232a',
                            color0: '#14b143',
                            borderColor: '#ef232a',
                            borderColor0: '#14b143',
                            borderWidth: '1'
                        },
                    },
                    markArea: {
                        silent: true,
                        itemStyle: {
                            normal: {
                                color: 'rgba(204,204,204,0.10)'
                            }
                        },
                        data: JSON.parse(sessionStorage.markarea)
                    },

                },
                {
                    name: 'MA5',
                    type: 'line',
                    data: calculateMA(5),
                    showSymbol: false,
                    smooth: true,
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            color:'#FFFFFF'
                        }
                    }
                },
                {
                    name: 'MA10',
                    type: 'line',
                    data: calculateMA(10),
                    showSymbol: false,
                    smooth: true,
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            color:'yellow'
                        }
                    }
                },
                {
                    name: 'MA30',
                    type: 'line',
                    data: calculateMA(30),
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            color:'green'
                        }
                    }
                },
                {
                    name: '交易量',
                    type: 'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    color: 'red',
                    data: data.vols,
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var colorList;
                                if (data.datas[params.dataIndex][1] > data.datas[params.dataIndex][0]) {
                                    colorList = '#ef232a';
                                } else {
                                    colorList = '#14b143';
                                }
                                return colorList;
                            },
                        }
                    },
                    markPoint: {
                        symbolSize: 30,
                        symbolOffset: [0, '-135%'],
                        label: {
                            normal: {
                                show: true,
                                formatter: function(param) {
                                    if (param.value == 1)
                                        return 'B';
                                    else
                                        return 'S';
                                },
                            }
                        },
                        data: JSON.parse(sessionStorage.markpoint)
                    },

                }
            ],
            animationEasing: 'linear',
        };
        if (!anim) {
            option.animation = false;
        }
        myChart.setOption(option);

    }
    //柱状体配置
Vue.prototype.$bar = function(_data, id) {
        if (!id) return;
        var myChart = echarts.init(document.getElementById(id));
        //数组处理
        function splitData(rawData) {
            var times = [];
            var vols = [];
            for (var i = 0; i < rawData.length; i++) {
                times.push(rawData[i].splice(0, 1)[0]);
                vols.push(rawData[i][0]);
            }
            return {
                times: times,
                vols: vols,
            };
        }
        var data = splitData(_data);
        var option = {
            backgroundColor: 'white',
            title: {
                text: '',
                left: 0
            },
            animation: true,
            textStyle: {
                color: 'white'
            },
            grid: [{
                left: '5%',
                right: '10%',
                top: '0',
                height: '80%'
            }, ],
            dataZoom: [{
                type: 'inside',
                disabled: true
            }],
            xAxis: [{
                type: 'category',
                data: data.times,
                splitNumber:1,
                axisTick: {
                    show: true,
                    interval:0,
                    lineStyle: {
                        color: '#CCCCCC'
                    }
                },
                axisLabel: {
                    show: true,
                    interval:0,
                    textStyle: {
                        color: '#CCCCCC',
                        align:'right'
                    }
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#CCCCCC'
                    }
                }
            }, ],
            yAxis: [{
                scale: true,
                position: 'right',
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#CCCCCC',
                        type: 'dashed'
                    }
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#CCCCCC'
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#CCCCCC'
                    }
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#CCCCCC'
                    }
                }
            }, ],
            series: [{
                name: '交易量',
                type: 'bar',
                data: data.vols,
                barWidth: 20,
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#CCCCCC'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList;
                            if (params.dataIndex < 5) {
                                colorList = '#1CB54A';
                            } 
                            else {
                                colorList = '#FF5E45';
                            }
                            return colorList;
                        },
                    }
                },
            }],
            animationEasing: 'linear',
        };
        myChart.setOption(option);

    }
    //大盘分析绘制曲线
Vue.prototype.$line_k = function(_data, id) {
    if (!id) return;
    var myChart = echarts.init(document.getElementById(id));
    //数组处理
    function splitData(rawData) {
        var times = [];
        var lines1 = [];
        var lines2 = [];
        for (var i = 0; i < rawData.length; i++) {
            times.push(rawData[i].splice(0, 1)[0]);
            lines1.push(rawData[i][0]);
            lines2.push(rawData[i][1]);
        }
        return {
            times: times,
            lines1: lines1,
            lines2: lines2,
        };
    }
    var data = splitData(_data);
    var name1;
    var name2;
    switch (id) {
        case 'trend':
            name1 = '涨停';
            name2 = '跌停';
            break;
        case 'react':
            name1 = '昨日涨停股今日涨幅';
            name2 = '';
            data.lines2 = '';
    }
    var option = {
        backgroundColor: 'white',
        tooltip: {
            trigger: 'axis',
            backgroundColor: ' rgba(255,255,255,0.90)',
            borderWidth: 0,
            extraCssText: 'box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50)',
            textStyle: {
                color: 'black'
            },
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    type: 'solid',
                    color: '#CCCCCC',
                    width: 1.2
                }
            },
        },
        title: {
            text: '',
            left: 0
        },
        animation: true,
        textStyle: {
            color: 'white'
        },
        grid: [{
            left: '5%',
            right: '10%',
            top: '0',
            height: '80%'
        }, ],
        dataZoom: [{
            type: 'inside',
            disabled: true
        }],
        xAxis: [{
            type: 'category',
            data: data.times,
            scale: true,
            splitLine: { show: false },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#CCCCCC'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#CCCCCC'
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#CCCCCC'
                }
            }
        }, ],
        yAxis: [{
            scale: true,
            position: 'right',
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#CCCCCC',
                    type: 'dashed'
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#CCCCCC'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#CCCCCC'
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#CCCCCC'
                }
            }
        }, ],
        series: [{
                type: 'line',
                name: name1,
                data: data.lines1,
                smooth: true,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 1,
                        color: '#FF5E45'
                    }
                }
            },
            {
                type: 'line',
                data: data.lines2,
                name: name2,
                smooth: true,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 1,
                        color: '#1CB54A'
                    }
                }
            }
        ],
        animationEasing: 'linear',
    };
    myChart.setOption(option);
}
//折线图
//params:_data1 时间  _data2 收益率  _data3 沪深300
Vue.prototype.$line = function(id,_data1,_data2,_data3){
    var colors = ['#FF5E45', '#5CB4FF', '#675bba'];
    if(!id)return;
    var myChart = echarts.init(document.getElementById(id));
    var option = {
       color: colors,

    tooltip: {
        show:false,
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
         data:['收益率', '沪深300涨幅'],
         left:'5%',
         top:'5%',
         orient: 'vertical'
    },
    grid: {
        top: 40,
        bottom: 50
    },
    xAxis: [
        {
            type: 'category',

            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                show:false,
                onZero: false,
                lineStyle: {
                    color: colors[1]
                }
            },
            splitLine:{
              show:false
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '沪深' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data:_data1
        },
        {   show:false,
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[0]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '收益率  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
             data:_data1
        }
    ],
    yAxis: [
        {
            type: 'value',
            position:'right',
            splitLine:{
              show:false
            },
             axisLine: {
                onZero: false,
                lineStyle: {
                    color: '#999'
                }
            },
            axisTick:{
              inside:true
            }
        }
    ],
    series: [
        {
            name:'收益率',
            type:'line',
            xAxisIndex: 1,
            smooth: true,
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(255,94,69,0.5)',
                    shadowBlur: 20,
                    shadowOffsetY: 20
                }
            },
            data:_data2
        },
        {
            name:'沪深300涨幅',
            type:'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(92,180,255,0.5)',
                    shadowBlur: 20,
                    shadowOffsetY:20
                }
            },
            data:_data3
        }
    ]
    };  
      myChart.setOption(option);
}
//柱状图
Vue.prototype.$columnar = function(id,time,rate){
    if(!id)return;
    var myChart = echarts.init(document.getElementById(id));
    var option = {
    tooltip : {
        show:false,
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        top: '10%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data:time,
            axisTick: {
                alignWithLabel: true
            },
            axisLine:{
                lineStyle:{
                    color:'#ccc',
                }
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: {
                formatter: '{value} %'
            },
            position:'right',
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#ccc'  
                }
            },
            splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#CCCCCC',
                        type: 'dashed'
                    }
            }
        }
    ],
    series : [
        {
            name:'收益率',
            type:'bar',
            barWidth: '60%',
            itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList=[];
                            for(var i=0;i<7;i++){
                                colorList.push('#FF5E45');
                                 if(params.data<0){
                                    colorList[params.dataIndex]='#1CB54A'
                                }
                            }
                            return colorList[params.dataIndex]
                        }
                    }
                },
            // data:[10, 52, 200, 334, 390, 330, 220]
            data:rate
        }
    ]
};

      myChart.setOption(option);

}
//图形选股K线
Vue.prototype.$graph = function(_data, id, anim, mday, mfiv, mthi, mvol, everdata, start, end) {
        if (!id) return;
        var myChart = echarts.init(document.getElementById(id));
        //数组处理
        function splitData(rawData) {
            var datas = [];
            var times = [];
            //var vols = [];
            var macds = [];
            var difs = [];
            var deas = [];
            for (var i = 0; i < rawData.length; i++) {
                datas.push(rawData[i]);
                times.push(rawData[i].splice(0, 1)[0]);
                //vols.push(rawData[i][4]);
                macds.push(rawData[i][6]);
                difs.push(rawData[i][7]);
                deas.push(rawData[i][8]);
            }
            return {
                datas: datas,
                times: times,
                //vols: vols,
                macds: macds,
                difs: difs,
                deas: deas
            };
        }
        var data = splitData(_data)
            //MA计算公式
        function calculateMA(dayCount) {
            var result = [];
            for (var i = 0, len = data.times.length; i < len; i++) {
                if (i < dayCount) {
                    result.push('-');
                    continue;
                }
                var sum = 0;
                for (var j = 0; j < dayCount; j++) {
                    sum += data.datas[i - j][1];
                }
                result.push((sum / dayCount).toFixed(2));
            }
            return result;
        }
        //分时图
        function everydata(data) {
            var timedata = [];
            var voldata = [];
            var pricedata = [];
            var avgdata = [];
            data.forEach(function(value, index, arr) {
                timedata.push(value.time);
                voldata.push(value.volume);
                pricedata.push(value.nowPrice);
                avgdata.push(value.avgPrice);
            })
            return {
                time: timedata,
                vol: voldata,
                price: pricedata,
                avg: avgdata
            }
        }
        var evedata;
        if (everdata) {
            evedata = everydata(everdata);
        }
        var option = {
            backgroundColor: 'white',
            title: {
                text: '',
                left: 0
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    return params.name + '<br>' +
                        '开盘:' + params.value[0] + '<br>' +
                        '收盘:' + params.value[1] + '<br>' +
                        '最低:' + params.value[2] + '<br>' +
                        '最高:' + params.value[3]
                },
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        type: 'solid',
                        color: 'black',
                        width: 0.6
                    }
                },
                triggerOn: 'click'
            },
            animation: true,
            legend: {
                //data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30'],
                inactiveColor: '#777',
                textStyle: {
                    color: '#fff'
                }
            },
            textStyle: {
                color: 'white'
            },
            grid: [{
                    left: '0',
                    right: '0',
                    top: '0',
                    height: '80%'
                },
                {
                    left: '0',
                    right: '0',
                    top: '86%',
                    height: '10%'
                }
            ],
            dataZoom: [{
                type: 'inside',
                xAxisIndex: [0, 1],
                start: start,
                end: end,
                throttle: 0,
            }],
            xAxis: [{
                    type: 'category',
                    data: data.times,
                    scale: true,
                    splitLine: { show: true ,
                        lineStyle:{
                            color: ['#ccc'],
                            type: 'dotted',
                        }
                    },
                    splitNumber: 20,
                    axisTick: {
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#CCCCCC'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    }
                },
                {
                    type: 'category',
                    gridIndex: 1,
                    data: data.times,
                    axisLabel: { show: false },
                    splitLine: { show: true ,
                        lineStyle:{
                            color: ['#ccc'],
                            type: 'dotted',
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                }
            ],
            yAxis: [{
                    scale: true,
                    splitLine: { show: true ,
                        lineStyle:{
                            color: ['#ccc'],
                            type: 'dotted',
                        }
                    },
                    axisLine: {
                        show:false,
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                    axisTick: {
                        lineStyle: {
                            color: 'black'
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                {
                    gridIndex: 1,
                    splitNumber: 3,
                    axisTick: { show: false },
                    splitLine: { show: true ,
                        lineStyle:{
                            color: ['#ccc'],
                            type: 'dotted',
                        }
                    },
                    axisLabel: { show: true },
                    axisLine: {
                        show:false,
                        lineStyle: {
                            color: '#CCCCCC'
                        }
                    },
                }
            ],
            series: [{
                    name: '',
                    type: 'candlestick',
                    data: data.datas,
                    itemStyle: {
                        normal: {
                            color: '#ef232a',
                            color0: '#14b143',
                            borderColor: '#ef232a',
                            borderColor0: '#14b143',
                            borderWidth: '1'
                        },
                    },
                    animationDuration: 300,
                    animationEasing: 'linear',
                    animationDelay: function(idx) {
                        return idx * 300;
                    }
                },
                {
                    name: 'MA5',
                    type: 'line',
                    data: calculateMA(5),
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            color:'rgb(49,49,49)'
                        }
                    }
                },
                {
                    name: 'MA10',
                    type: 'line',
                    data: calculateMA(10),
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            color:'#E9A113'
                        }
                    }
                },
                {
                    name: 'MA30',
                    type: 'line',
                    data: calculateMA(30),
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            color:'green'
                        }
                    }
                },
                {
                    name: 'Volumn',
                    type: 'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    color: 'red',
                    data: data.vols,
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var colorList;
                                if (everdata) {
                                    if (evedata.price[params.dataIndex + 1] > evedata.price[params.dataIndex]) {
                                        colorList = '#ef232a';
                                    } else {
                                        colorList = '#14b143';
                                    }
                                } else {
                                    if (data.datas[params.dataIndex][1] > data.datas[params.dataIndex][0]) {
                                        colorList = '#ef232a';
                                    } else {
                                        colorList = '#14b143';
                                    }
                                }
                                return colorList;
                            },
                        }
                    },

                },
                {
                    name:'',
                    type: 'line',
                    data: '',
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1,
                            color: '#378AD6'
                        }
                    }
                },
                {
                    name:'',
                    type: 'line',
                    data: '',
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1,
                            color: '#FFBE45'
                        }
                    }
                },
            ],
            animationEasing: 'linear',
        };
        if (!mday) {
            option.series[0] = '';
        };
        if (!mfiv) {
            option.series[1] = '';
        };
        if (!mthi) {
            option.series[2] = '';
        };
        if (!mvol) {
            option.series[4] = '';
        };
        if (!everdata) {
            option.series[5] = '';
        } else {
            option.xAxis[0].data = evedata.time;
            option.xAxis[1].data = evedata.time;
            option.series[4].data = evedata.vol;
            option.series[5].data = evedata.price;
            option.series[6].data = evedata.avg;
        }
        if (!anim) {
            option.animation = false;
        }

        function getposi(params) {
            //console.log(params.batch[0].start+'+++'+params.batch[0].end)
            Vue.prototype.$start = function() {
                return params.batch[0].start
            }
            Vue.prototype.$end = function() {
                return params.batch[0].end
            }
        }
        myChart.on('dataZoom', getposi);
        myChart.setOption(option);

    }
