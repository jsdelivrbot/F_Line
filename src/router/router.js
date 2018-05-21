// require.ensure 是 Webpack 的特殊语法，用来设置 组件到底路径
/**
 * 1.定义路由，每个路由应该映射一个组件
 * path : 浏览器的显示的路径
 * name ： 路由的名字
 * component : 路由的组件路径
 */
export default [
    {
        //主页
        path: '/main',
        component: r => require.ensure([], () => r(require('../pages/main')), 'main')
    },
    //我的
    // {
    //     path: '/my',
    //     component: r => require.ensure([], () => r(require('../pages/my/my')), 'my')
    // },
    //我的自选
    // {
    //     path: '/optional',
    //     component: r => require.ensure([], () => r(require('../pages/optional/optional')), 'optional')
    // },
    //图形选股
    // {
    //     path: '/GraphStocks',
    //     component: r => require.ensure([], () => r(require('../pages/graphStock/GraphStocks')), 'GraphStocks')
    // },
    //选股详情
    {
        path: '/comment',
        component: r => require.ensure([], () => r(require('../pages/graphStock/comment')), 'comment')
    },
    //行情（主页）
    // {
    //     path: '/quotation',
    //     component: r => require.ensure([], () => r(require('../pages/quotation/quotation')), 'quotation')
    // },
    // {
    //     path: '/quoindex/:id',
    //     name:"quoindex",
    //     component: r => require.ensure([], () => r(require('../pages/quotation/quoindex')), 'quoindex')
    // },
    // {
    //     path: '/index/:id',
    //     name:'index',
    //     component: r => require.ensure([], () => r(require('../pages/quotation/index')), 'index')
    // },
    //诊股报告（详情）
    {
        path: '/clinicreport',
        component: r => require.ensure([], () => r(require('../pages/clinicShares/clinicreport')), 'clinicreport')
    },
    //行情（行情查询后）
    // {
    //     path: '/markettrend',
    //     component: r => require.ensure([], () => r(require('../pages/marketTrend/markettrend')), 'markettrend')
    // },
    //研报,公告,资讯内容
    // {
    //     path: '/rescontent',
    //     component: r => require.ensure([], () => r(require('../pages/clinicShares/rescontent')), 'rescontent')
    // },
    //诊股报告（对比）
    // {
    //     path: '/cliniccontrast',
    //     component: r => require.ensure([], () => r(require('../pages/clinicShares/cliniccontrast')), 'cliniccontrast')
    // },
    //继续诊股
    {
        path: '/cliniccontinue',
        component: r => require.ensure([], () => r(require('../pages/clinicShares/cliniccontinue')), 'cliniccontinue')
    },
    //K线擂台
    {
        path: '/klinearena',
        component: r => require.ensure([], () => r(require('../pages/kGame/klinearena')), 'klinearena')
    },
    //图形选股结果
    // {
    //     path: '/GraphResult/:id',
    //     name: 'GraphResult',
    //     component: r => require.ensure([], () => r(require('../pages/graphStock/GraphResult')), 'GraphResult')
    // },
    //写留言
    {
        path: '/write',
        component: r => require.ensure([], () => r(require('../pages/graphStock/writeMessage')), 'writeMessage')
    },
     //未点评页面
    {
        path: '/noComment',
        component: r => require.ensure([], () => r(require('../pages/graphStock/noComment')), 'noComment')
    },
    //我的消息
    // {
    //     path: '/myInformation',
    //     component: r => require.ensure([], () => r(require('../pages/my/myInformation')), 'myInformation')
    // },
    //设置
    // {
    //     path: '/setting',
    //     component: r => require.ensure([], () => r(require('../pages/my/setting')), 'setting')
    // },
    //手机绑定
    // {
    //     path: '/phone-bind',
    //     component: r => require.ensure([], () => r(require('../pages/my/phone-bind')), 'phone-bind')
    // },
    // //登录
    // {
    //     path: '/login',
    //     component: r => require.ensure([], () => r(require('../pages/my/login')), 'login')
    // },
    //编辑自选
    // {
    //     path: '/editOptional',
    //     component: r => require.ensure([], () => r(require('../pages/optional/editOptional')), 'editOptional')
    // },
    //  {
    //     path: '/search',
    //     component: r => require.ensure([], () => r(require('../pages/optional/search')), 'search')
    // },
    // {
    //     path: '/quomore',
    //     component: r => require.ensure([], () => r(require('../pages/quotation/quomore')), 'quomore')
    // },
    // {
    //     path: '/aboutus',
    //     component: r => require.ensure([], () => r(require('../pages/my/aboutus')), 'aboutus')
    // },
    // {
    //     path: '/opinion',
    //     component: r => require.ensure([], () => r(require('../pages/my/opinion')), 'opinion')
    // },
    // {
    //     path: '/news/:id',
    //     name:'news',
    //     component: r => require.ensure([], () => r(require('../pages/my/news')), 'news')
    // },
    //测试
    // {
    //     path: '/pullpush',
    //     component: r => require.ensure([], () => r(require('../components/pullpush')), 'pullpush')
    // },
    //投顾直播列表
    // {
    //     path: '/livelist',
    //     component: r => require.ensure([], () => r(require('../pages/live/livelist')), 'livelist')
    // },
    //大数据策略
    // {
    //     path: '/bigdata',
    //     component: r => require.ensure([], () => r(require('../pages/bigData/bigdata')), 'bigdata')
    // },
    //错误页面
    {
        path: '/fault',
        component: r => require.ensure([], () => r(require('../pages/fault')), 'fault') 
    },
    //热点布局
    // {
    //     path: '/hotlayout',
    //     component: r => require.ensure([], () => r(require('../pages/messageList/hotlayout')), 'hotlayout')
    // },
    //消息
    // {
    //     path: '/message',
    //     component: r => require.ensure([], () => r(require('../pages/messageList/message')), 'message')
    // },
    //新手帮助
    {
        path: '/help',
        component: r => require.ensure([], () => r(require('../pages/help/help')), 'help')
    },
    //客服
    {
        path: '/server',
        component: r => require.ensure([], () => r(require('../pages/help/server')), 'server')
    },
    //福利
    {
        path: '/welfare',
        component: r => require.ensure([], () => r(require('../pages/help/welfare')), 'welfare')
    },
    //产品说明
    // {
    //     path: '/products',
    //     component: r => require.ensure([], () => r(require('../pages/my/products')), 'products')
    // },
    //免责声明
    // {
    //     path: '/statement',
    //     component: r => require.ensure([], () => r(require('../pages/my/statement')), 'statement')
    // },
    //webview
    {
        path: '/subnav',
        component: r => require.ensure([], () => r(require('../pages/webView/subnav')), 'subnav')
    },
     //视频直播
    // {
    //     path: '/videolive',
    //     component: r => require.ensure([], () => r(require('../pages/live/videolive')), 'videolive')
    // },
    //读
    {
        path: '/read',
        component: r => require.ensure([], () => r(require('../pages/live/read')), 'read')
    },
    //读内容页
    {
        path: '/readcontent',
        component: r => require.ensure([], () => r(require('../pages/live/readcontent')), 'readcontent')
    },
     //听
    {
        path: '/listen',
        component: r => require.ensure([], () => r(require('../pages/live/listen')), 'listen')
    },
     //看
    {
        path: '/see',
        component: r => require.ensure([], () => r(require('../pages/live/see')), 'see')
    },
    //抓牛股
    {
        path: '/catchcow',
        component: r => require.ensure([], () => r(require('../pages/graphStock/catchcow')), 'catchcow')
    },
     //抓牛股
    {
        path: '/pray',
        component: r => require.ensure([], () => r(require('../pages/pray/pray')), 'pray')
    },
     //测试
    {
        path: '/test',
        component: r => require.ensure([], () => r(require('../pages/clinicShares/test')), 'test')
    },
]
