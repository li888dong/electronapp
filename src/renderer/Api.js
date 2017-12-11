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
//接线方式
export const TERMINAL_WIRING_WAY = '/api/devices/getwiring';
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


/*
* 交易管理
* */
// 交易概况
// 每月交易概况
export const TRADE_MONTH = '/api/bidding/monthOverview';
// 每月交易概况
export const TRADE_ANALYSIS = '/api/bidding/analysis';
//竞价管理

//本月竞价模拟
export const MONTH_BIDDING = '/api/bidding/simulation';

//添加模拟竞价交易
export const ADD_MOCK_BIDDING = '/api/bidding/addbidprice';

//往期竞价结果
export const OLD_BIDDING = '/api/bidding/oldsimulation';

//上期交易结果公示
export const BIDDING_LIST = '/api/bidding/bidlist';

//长协统计
//图表
export const CX_CHART = '/api/contract/lpstat';
//表格
export const CX_QY = '/api/contract/lpstatlist';

/*
* 交易管理结束
* */
//电量数据库开始
//历史用电趋势
export const HISTORY_ELECTRIC = '/api/stat/historicalPower';


//电量数据库结束

/*
预测分析开始
*
* */
// 用户申报月度
export const USER_DECLARE = '/api/predictive/userdeclare';
// 用户申报详情记录
export const DECLARE_DETAIL = '/api/predictive/declareinfo';
// 用户申报确认
export const DECLARE_CONFIRM = '/api/predictive/confirm';
// 用户申报删除
export const DECLARE_DELETE = '/api/predictive/del';
// 年度预测
export const YEAR_FORECAST = '/api/predictive/yearfore';
// 年度预测确认
export const YEAR_CONFIRM = '/api/predictive/aconfirm';
// 年度预测修改
export const YEAR_MODIFY = '/api/predictive/afedit';
// 年度预测导入
export const YEAR_IMPORT = '/api/excel/import';
// 月度预测
export const MONTH_FORECAST = '/api/predictive/monthfore';
// 月度预测确认
export const MONTH_CONFIRM = '/api/predictive/mconfirm';
// 月度预测修改
export const MONTH_MODIFY = '/api/predictive/medit';
// 月度预测导入
export const MONTH_IMPORT = '/api/excel/monthimport';
/*
预测分析结束
*/



//售电合同开始
export const POWER_ADD_COMPACT = '/api/contract/store';
//合同上传
export const UPLOAD_COMPACT = '/api/file/upload';
//用户户号添加
export const USER_NUM_ADD = '/api/contract/add_usernums';
//售电合同结束
//添加长协合同开始
//电厂下拉列表
export const CHANGXIE_ADD_PLANT = '/api/powerplant';
//添加电厂地址
export const POWER_PLANT_ADDRESS = '/api/powerplant/';
//添加长协合同
export const CHANGXIE_ADD_COMPACT = '/api/contract/add_lpcontract';
//合同电量分配
export const ALLOT_POWER = '/api/contract/lcdistri';
//添加长协合同结束
//合同管理
//长协合同
export const CHANGXIE_LIST = '/api/contract/lplist';
//长协合同删除
export const CHANGXIE_LIST_DEL = '/api/contract/lpdel';
//售电合同
export const POWER_SALE_LIST = '/api/contract/list';
//售电合同删除
export const POWER_SALE_DEL = '/api/contract/del';
//合同管理结束

export const errcallback = function (err) {
    console.error("请求出错"+err)
}
