/*
* 首页开始
* */

// 预警信息区域
//TODO:缺少负荷异常数据
export const WARNING_INFO = '/api/index/warninginfo';

// 工作提醒
export const WORK_REMIND = 'api/index/workremind';

// 计划进度提醒
//TODO:暂无计划进度提醒数据

export const PLAN_REMIND = '/api/index/schedulereminds';

// 计划进度设置
// TODO：计划进度设置待定
export const ADD_SCHEDULE = 'api/index/add_schedule';


// 数据指数
// TODO：访问出错
export const DATA_INDEX = 'api/index/dataindex';

//用电实时进度
// TODO：访问出错
export const USED_SCHEDULE = 'api/index/usedschedule';

// 用电时段分布
// TODO：访问出错
export const POWER_FRAME = 'api/index/timefenbu';

// 交易分布
// TODO：暂无数据
export const BID_FRAME = 'api/index/bidfenbu';

// 实时电量负荷
// TODO：暂无数据
export const REALTIME_POWER_CURVE = 'api/index/loadcurve';
/*
* 首页结束
* */



/*
* 客户中心开始
* */
// 检索客户
export const CLIENT_SEARCH = '/api/customers/index';
//客户总量区域Top10
export const CLIENT_TOP10 = '/api/customers/top10';
//客户分布区域
export const CLIENT_DIS = '/api/customers/regions_dist';

//客户列表
export const CLIENT_LIST = '/api/customers/index';

// 客户总览
//客户总览接线图
export const CLIENT_HOOKUP = '/api/customers/wiringdiagram';

// 用电实时进度
export const CLIENT_USED= '/api/customers/used';
//用电时段分布
export const CLIENT_TIMEFRAME = '/api/customers/timedist';
//用电时段分布
export const CLIENT_REALTIME_CURVE = '/api/customers/monitoring';
// 总览下方三条曲线
export const CLIENT_CURVE_3 = '/api/customers/curve';

//客户详情
//用户基本信息
export const CLIENT_BASIC_INFO = '/api/customers/get_cusinfo';

//新增客户
export const CLIENT_ADD ='/api/customers/add';
/*
* 客户中心结束
* */



export const errcallback = function (err) {
    console.error("请求出错"+err)
}
