/*
* 首页开始
* */

// 预警信息区域
//TODO:缺少负荷异常数据
export const WARNING_INFO = '/api/index/warninginfo';

// 工作提醒
export const WORK_REMIND = 'api/index/workremind';

// 计划进度提醒
export const PLAN_REMIND = '/api/index/schedulereminds';

// 计划进度设置
export const ADD_SCHEDULE = 'api/index/add_schedule';


// 数据指数
// TODO：待定
export const DATA_INDEX = 'api/index/dataindex';

//用电实时进度
export const USED_SCHEDULE = 'api/index/usedschedule';

// 用电时段分布
// TODO：访问出错
export const POWER_FRAME = 'api/index/timefenbu';

// 交易分布
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
//用户管理
export const CLIENT_MANAGE='/api/comusers/list';
//用户管理审核
export const CLIENT_CHECK='/api/comusers/';
//用户管理删除
export const CLIENT_DELECT_USER = '/api/comusers/';

// 客户总览
//客户总览接线图 无数据
export const CLIENT_HOOKUP = '/api/customers/wiringdiagram';

// 用电实时进度
export const CLIENT_USED= '/api/customers/used';
//用电时段分布
export const CLIENT_TIMEFRAME = '/api/customers/timedist';
//用电时段分布
export const CLIENT_REALTIME_CURVE = '/api/customers/monitoring';
// 总览下方三条曲线 缺数据
export const CLIENT_CURVE_3 = '/api/customers/curve';

//客户详情
//用户基本信息
export const CLIENT_BASIC_INFO = '/api/customers/get_cusinfo';
//合同基本情况
//访问出错
export const CLIENT_CONTRACT_INFO = '/api/customers/get_coninfo';
//用户电费单列表
export const CLIENT_ELE_BILL = '/api/comusers/ebilllist';
//添加用户电费单（暂未使用）
export const CLIENT_ADD_ELEBILL='/api/comusers/add_electric_bill';
//审核用户电费单（暂未使用）
export const CLIENT_CHECK_ELEBILL='/api/comusers/setstatus';
//上传用户电费单（暂未使用）
export const CLIENT_UPLODDING_ELEBILL = '/api/file/uploadimg';
//用户申报记录
export const CLIENT_DECLARE_RECORD = '/api/comusers/declarelog';
//用户终端列表
export const CLIENT_TERMINAL_LIST='/api/devices/list';
//删除终端
export const CLIENT_TERMINAL_DELETE = 'api/devices/';
//用户终端详情
export const CLIENT_TERMINAL_DETAIL = '/api/devices/';
//终端详情在线监控
export const CLIENT_TERMINAL_ONLINE='/api/devices/onlineTime';
//在线监控设备日志
//暂无数据
export const CLIENT_EQUIPMENT_LOG = '/api/devices/log';
//在线监控设备异常提醒
//暂无数据
export const CLIENT_EQUIPMENT_REMIND = '/api/devices/errorRemind';
//终端详情采集监控
export const CLIENT_COLLECT_DATA='/api/devices/datachart';
//终端采集记录
export const CLIENT_TERMINAL_RECORD = '/api/devices/get_epinfo';
//配置终端
//请求出错
export const CLIENT_ADD_TERMINAL ='/api/devices';
//添加变压器
export const CLIENT_ADD_TRANSFORMER = '/api/devices/add_transformer';

//新增客户
export const CLIENT_ADD ='/api/customers/add';
//添加行业（暂未使用）
export const CLIENT_BUSINESS = '/api/customers/add_industry';
//添加银行（暂未使用）
export const CLIENT_ADD_BANK = '/api/customers/add_bank';


// 客户指数
// 户号指数无数据
export const CLIENT_DATA_INDEX = '/api/customers/dataindex';
//日电量同比
export const CLIENT_DAYTB = '/api/customers/daytb';
//日对比
export const CLIENT_DAY_COMPARE = '/api/customers/contrast';
//月对比
export const CLIENT_MONTH_COMPARE = '/api/customers/incontrast';

// 偏差分析
// 图表
export const CLIENT_PIANCHA_CHART = '/api/devanalysis/chart';
// 表格
export const CLIENT_PIANCHA_TABLE = '/api/devanalysis/index';


/*
* 客户中心结束
* */



export const errcallback = function (err) {
    console.error("请求出错"+err)
}
