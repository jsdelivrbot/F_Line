//全局属性
var ws;//websocket实例
var lockReconnect = false;//避免重复连接
var wsUrl;

function createWebSocket(url) {
    wsUrl=url;
    try {
        ws = new WebSocket(url);
        initEventHandle();	
    } catch (e) {
        reconnect(url);
    }
    return ws    
}
function initEventHandle() {
    ws.onclose = function () {
        reconnect(wsUrl);
    };
    ws.onerror = function () {
        reconnect(wsUrl);
    };
}
function reconnect(url) {
    if(lockReconnect) return;
    lockReconnect = true;
    //没连接上会一直重连，设置延迟避免请求过多
    setTimeout(function () {
        createWebSocket(url);
        lockReconnect = false;
    }, 2000);
}
// //心跳检测
// var heartCheck = {
//     timeout: 5000,
//     timeoutObj: null,
//     reset: function(){
//         clearTimeout(this.timeoutObj);
//         return this;
//     },
//     start: function(){
//         var self = this;
//         this.timeoutObj = setTimeout(function(){
//             //这里发送一个心跳，后端收到后，返回一个心跳消息，
//             //onmessage拿到返回的心跳就说明连接正常
//             ws.send('000000');
//             console.log('13246')
//             // self.serverTimeoutObj = setTimeout(function(){//如果超过一定时间还没重置，说明后端主动断开了
//             //     ws.close();//如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
//             // }, self.timeout)
//         }, this.timeout)
//     }
// }


export default{
	createWebSocket,
    reconnect
}