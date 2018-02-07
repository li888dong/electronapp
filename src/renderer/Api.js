import Vue from 'vue'

const vue = new Vue();
/*
* 首页开始
* */
// token
export const GET_TOKEN = '/oauth/token';
// 登录
export const LOGIN = '/api/users/login';
// 预警信息区域
export const WARNING_INFO = '/api/index/warninginfo';

// 工作提醒
export const WORK_REMIND = 'api/index/workremind';

// 计划进度提醒
export const PLAN_REMIND = '/api/index/schedulereminds';

// 计划进度设置
export const ADD_SCHEDULE = 'api/index/add_schedule';


// 数据指数
export const DATA_INDEX = 'api/index/dataindex';

//用电实时进度
export const USED_SCHEDULE = 'api/index/usedschedule';

// 用电时段分布
export const POWER_FRAME = 'api/index/timefenbu';

// 交易分布
export const BID_FRAME = 'api/index/bidfenbu';

// 实时电量负荷
export const REALTIME_POWER_CURVE = 'api/index/loadcurve';
/*
* 首页结束
* */

/*
* 告警中心开始
* */
// 告警趋势
export const REPORT_TREND = 'api/report/trend';
// 告警分布
export const REPORT_SPREAD = 'api/report/spread';
// 告警事件
export const REPORT_INDEX = 'api/report/index';
// 修改告警事件处理意见  处理状态
export const REPORT_UPDATE = 'api/report/update';
/*
* 告警中心开始
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
//客户删除
export const CLIENT_DELECT = '/api/customers/';
//用户管理
export const CLIENT_MANAGE = '/api/userscus/index';
//用户管理审核
export const CLIENT_CHECK = '/api/userscus/setstatus';
//用户管理删除
export const CLIENT_DELECT_USER = '/api/userscus/';
//添加用户
export const CLIENT_ADD_USER = '/api/userscus';
//用户合同管理变更为 --> 用户户号信息
export const CLIENT_CONTRACT_AGREEMENT = '/api/contract/unlist';
//客户收藏列表
export const CLIENT_COLLECT_LIST = '/api/myfavorite/index'
//添加各户收藏
export const CLIENT_ADD_COLLECT = '/api/myfavorite'
//取消收藏
export const CLIENT_CANCEL_COLLECT = '/api/myfavorite/'
// 客户总览
//客户总览接线图 无数据
export const CLIENT_HOOKUP = '/api/customers/wiringdiagram';

// 用电实时进度
export const CLIENT_USED = '/api/customers/used';
//用电时段分布
export const CLIENT_TIMEFRAME = '/api/customers/timedist';
//用电时段分布
export const CLIENT_REALTIME_CURVE = '/api/customers/monitoring';
// 总览下方三条曲线 缺数据
export const CLIENT_CURVE_3 = '/api/customers/curve';
export const CLIENT_CURVE_MODAL = '/api/customers/usernoCurve';
//客户详情
//用户基本信息
export const CLIENT_BASIC_INFO = '/api/customers/get_cusinfo';
//合同基本情况
//访问出错
export const CLIENT_CONTRACT_INFO = '/api/customers/get_coninfo';
//用户电费单列表
export const CLIENT_ELE_BILL = '/api/users/ebilllist';
//添加用户电费单（暂未使用）
export const CLIENT_ADD_ELEBILL = '/api/users/add_electric_bill';
//审核用户电费单（暂未使用）
export const CLIENT_CHECK_ELEBILL = '/api/users/setstatus';
//上传用户电费单（暂未使用）
export const CLIENT_UPLODDING_ELEBILL = '/api/file/uploadimg';
//用户申报记录
export const CLIENT_DECLARE_RECORD = '/api/users/declarelog';
//用户终端列表
export const CLIENT_TERMINAL_LIST = '/api/devices/list';
//删除终端
export const CLIENT_TERMINAL_DELETE = 'api/devices/';
//用户终端详情
export const CLIENT_TERMINAL_DETAIL = '/api/devices/';
//终端详情在线监控
export const CLIENT_TERMINAL_ONLINE = '/api/devices/onlineTime';
//在线监控设备日志
//暂无数据
export const CLIENT_EQUIPMENT_LOG = '/api/devices/log';
//在线监控设备异常提醒
//暂无数据
export const CLIENT_EQUIPMENT_REMIND = '/api/devices/errorRemind';
//终端详情采集监控
export const CLIENT_COLLECT_DATA = '/api/devices/datachart';
//终端采集记录
export const CLIENT_TERMINAL_RECORD = '/api/devices/get_epinfo';
//终端倍率
export const CLIENT_TERMINAL_RATIO = '/api/devices/getratio';
//修改终端倍率
export const CLIENT_TERMINAL_EDITRATIO = '/api/devices/editratio';
//配置终端
//请求出错
export const CLIENT_ADD_TERMINAL = '/api/devices';
// 获取变压器
export const CLIENT_GET_TRANSFORMER = '/api/devices/tflist';
//添加变压器
export const CLIENT_ADD_TRANSFORMER = '/api/devices/add_transformer';
//添加生产厂家
export const CLIENT_ADD_FAcTORY = '/api/devices/add_epfactory';
//获取生产厂家
export const CLIENT_FACTORY = '/api/devices/epflist';

//接线方式
export const TERMINAL_WIRING_WAY = '/api/devices/getwiring';
//新增客户
export const CLIENT_ADD = '/api/customers/add';
// 获取行业信息
export const GET_INDLIST = 'api/contract/indlist';
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

//数据矩阵
export const  CLIENT_MATRIX = '/api/customers/matrix';
/*
* 交易管理
* */
// 交易概况
// 每月交易概况
export const TRADE_MONTH = '/api/bidding/monthOverview';
// 每月交易分析
export const TRADE_ANALYSIS = '/api/bidding/analysis';
// 交易占比
export const TRADE_OF = '/api/bidding/tradingOf';
//发电集团剩余电量
export const POWER_PLANT_ELECTRIC = '/api/bidding/batterypercent'
//竞价管理

//往期竞价模拟
export const MONTH_BIDDING = '/api/bidding/simulation';

//添加模拟竞价交易
export const ADD_MOCK_BIDDING = '/api/ppsupply';
//本月竞价模拟
export const MONTH_BIDDING_NOW = '/api/ppsupply/index';
//修改竞价模拟
export const MONTH_BIDDING_UPDATE = '/api/ppsupply/update';
//参与竞价的电厂详情
export const MONTH_BIDDING_DETAIL = '/api/ppsupply/';
//删除竞价电厂
export const MONTH_BIDDING_DELETE = '/api/ppsupply/';

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
//客户负责人
export const USER_LEADER = '/api/customers/cusUsers';
//联系人职务
export const CONTACS_DUTY ='/api/customers/duties';
//获取批次
export const GAIN_LOT = '/api/customers/dealQual';
//删除户号
export const USER_NUM_DEL = '/api/contract/del_usernums';
//售电合同详情（修改）
export const  SALE_CONTRACT_DETAIL = '/api/contract/getConinfo';
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
//添加用户户号开始
//添加营销户号-用电类型
export const POWER_CLASSES ='/api/contract/electroType';
//添加营销户号-用电单位类型
export const POWER_UNIT_CLASSES='/api/contract/electroUnit';
//添加营销户号-产业集聚地
export const INDUSTRY_AREA = '/api/contract/indParks';
//添加用户户号
export const USER_NUM_ADD = '/api/contract/add_usernums';
//修改户号->户号详情
export const USERNOS_DETAIL = '/api/contract/usernoInfo';
//添加户号结束
//消息中心开始
export const MESSAGE_LIST = '/api/news/list';
//消息中心结束
//设备管理开始
//设备概况
//设备运行概况
export const EQUIPMENT_RUN_STATUS = '/api/devices/operstate';
//设备安装概况
export const EQUIPMENT_INSTALL = '/api/devices/overview';
//设备安装申请
export const EQUIPMENT_APPLY = '/api/devices/installapply';

//资产信息
//资产信息列表
export const EQUIPMENT_LIST = '/api/devices/asset';
//设备详情
export const EQUIPMENT_INFO = '/api/devices/assetinfo';
//设备统计日志
export const EQUIPMENT_INFO_LIST = '/api/devices/counterLog';
//设备异常记录
export const EQUIPMENT_ABNORMAL_RECORD = '/api/devices/deviceerror';
//设备管理结束
//售电沙盘开始
//市场份额偏差考核
export const POWER_MARKET = '/api/salesand/index';
//公司区域签约电量排行Top10
export const POWER_CITY_RANK = '/api/salesand/purchase';
//签约企业用电用电量Top10
export const POWER_COMPANY_RANK = '/api/salesand/singused';
//客户申报电量偏差Top10
export const CLIENT_PIANCHA_RANK = '/api/salesand/powerdev';
//售电沙盘结束
//行业指数开始
//行业指数电量排行
export const TRADE_RANK = '/api/industry/rankings'
//行业指数行业占比
export const TRADE_RATIO = '/api/industry/proportion'
//行业指数竞价趋势
export const TRADE_BIDDING = '/api/industry/tendency'
//行业指数结束
export const errcallback = function (err) {
	vue.$Modal.error({
		content: '请求出错'
	});
	console.error("请求出错" + err)
}
