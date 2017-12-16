<script>
    export default {
        name: 'changxie',
        data() {
            return {
                year:new Date().getFullYear(),
                currentPage:1,
                totalPage:5,
                pageLimit:3,
                columns6:[
                    {
                        title:'类型',
	                    width:200,
                        key:'name',
                    },
                    {
                        title:'01月',
                        key:'Jan',
                    },{
                        title:'02月',
                        key:'Feb',
                    },
                    {
                        title:'03月',
                        key:'Mar',
                    },{
                        title:'04月',
                        key:'Apr',
                    },
                    {
                        title:'05月',
                        key:'May',
                    },{
                        title:'06月',
                        key:'Jun',
                    },{
                        title:'07月',
                        key:'July',
                    },{
                        title:'08月',
                        key:'Aug',
                    },{
                        title:'09月',
                        key:'Sept',
                    },{
                        title:'10月',
                        key:'Oct',
                    },{
                        title:'11月',
                        key:'Nov',
                    },{
                        title:'12月',
                        key:'Dec',
                    },{
                        title:'总计',
                        key:'all',
                    }
                ],
	            column2:[
	                {
	                    title:'合同编号',
		                key:'lpcon_no'
	                },
	                {
	                    title:'电厂名称',
		                key:'powerplant'
	                },
	                {
	                    title:'签约电量',
		                key:'signed_num'
	                },
	                {
	                    title:'签约日期',
		                key:'signed_day'
	                },
	                {
	                    title:'执行日期',
		                key:'exec_date'
	                },
	                {
	                    title:'联系人',
		                key:'business'
	                },
	                {
	                    title:'联系电话',
		                key:'tel'
	                },
	                {
	                    title:'查看',
                        align:'center',
		                key:'ck',
                         render: (h, params) => {
                            return h('div', [
                                h('span', {
                                     attrs:{
                                    class:'iconfont icon-zhuzhuangtutubiao'
                                    },
                                    style: {
                                        marginRight: '10px',
                                        cursor:'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params.index)
                                            this.gotoZonglan()
                                        }
                                    }
                                }, ''),
                                h('span', {
                                    attrs:{
                                    class:'iconfont icon-zhishufenxiyanpan'
                                     },
                                    style: {
                                        marginRight: '0px',
                                        cursor:'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params.index);
                                            this.gotoZhishu()
                                        }
                                    }
                                }, '')
                            ])
                        }
	                }
	            ],
                data5:[
                    {
                        name:'年度预测合计（wkw）',
                        Jan:'111',
                        Feb:'111',
                        Mar:'111',
                        Apr:'111',
                        May:'111',
                        Jun:'111',
                        July:'1',
                        Aug:'1',
                        Sept:'1',
                        Oct:'1',
                        Nov:'1',
                        Dec:'1',
                        all:'1',
                    },
                    {
                        name:'长协合同总计（wkw）',
                        Jan:'111',
                        Feb:'111',
                        Mar:'111',
                        Apr:'111',
                        May:'111',
                        Jun:'111',
                        July:'1',
                        Aug:'1',
                        Sept:'1',
                        Oct:'1',
                        Nov:'1',
                        Dec:'1',
                        all:'1',
                    },
                    {
                        name:'长协比例（%）',
                        Jan:'111',
                        Feb:'111',
                        Mar:'111',
                        Apr:'111',
                        May:'111',
                        Jun:'111',
                        July:'1',
                        Aug:'1',
                        Sept:'1',
                        Oct:'1',
                        Nov:'1',
                        Dec:'1',
                        all:'1',
                    },
                ],
                qyTable:[],
                timeList: [
                    {
                        value: 'beijing',
                        label: '2011'
                    },
                    {
                        value: 'shanghai',
                        label: '2012'
                    },
                    {
                        value: 'shenzhen',
                        label: '2013'
                    },
                    {
                        value: 'hangzhou',
                        label: '2014'
                    },
                    {
                        value: 'nanjing',
                        label: '2015'
                    },
                    {
                        value: 'chongqing',
                        label: '2016'
                    }
                ],

	            chartData:{
                    xData:['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
		            yData:[{name: '电厂名称1',
                            type: 'bar',
                            stack: '总量',
                            barWidth:40,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data:['0','0','0','0','0','0','0','0','0','0','0','0']
                        },{name: '电厂名称2',
                            type: 'bar',
                            stack: '总量',
                            barWidth:40,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data:['0','0','0','0','0','0','0','0','0','0','0','0']
                        },],
		            dcList:['电厂名称1','电厂名称2']
	            }
            }
        },
	    computed:{
            cxChart:function () {
	            return this.$echarts.init(document.getElementById('cxchart'))
            },
            chartOption:function(){
                return {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: this.chartData.dcList,
                        left:'0',
                        right:'0',
                        itemWidth:16,
                    },
                    color:this.$store.getters.chartOption.colorList,
                    grid: {
                        top:'40',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: this.chartData.xData

                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: this.chartData.yData
                }

            }
	    },
        methods: {
            pageListen: function (data) {
                this.msg = '当前页码：' + data
            },
            yearSelect(year){
                this.year = year
            },
            drawChart() {
                this.cxChart.setOption(this.chartOption)
            },
            gotoZonglan(){
                this.$router.push('/client-zonglan');
            },
            gotoZhishu(){
                this.$router.push('/client-compare');
            },
	        qianyueList(page){
                this.$http.post(this.$api.CX_QY,{
                    com_id:this.$store.getters.com_id,
	                year:this.year,
                    page:page,
                    limit:this.pageLimit
                }).then(res=>{
                    console.log("长协签约表格",res);
                    this.qyTable = res.data.data.data;
                    this.totalPage = res.data.data.total;
                    this.currentPage = res.data.data.currentPage;
                },err=>{
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.$api.errcallback(err);
                })
	        },
	        doAjax(){
                this.$http.post(this.$api.CX_CHART,{com_id:this.$store.getters.com_id,year:this.year}).then(res=>{
                    console.log("长协统计图表",res);
                    let data = res.data.data;
                    var arr1 =[];
                    var arr2 =[];
                    data.map(i=>{
                        arr1.push(i.powerplant);
                        arr2.push({
                            name: i.powerplant,
                            type: 'bar',
                            stack: '总量',
                            barWidth:40,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: Object.values(i.info[0])
                        });
                    });
                    this.chartData.dcList = arr1;
                    this.chartData.yData = arr2;
                    console.log(this.chartData);
                    this.drawChart();

                },err=>{
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.$api.errcallback(err);
                })
	        }
        },
        mounted() {
            this.doAjax();
            this.qianyueList(1);
            this.drawChart();
        },
	    components:{

        }
    }
</script>
<template>
	<div class="main-container">
		<Row>
			<Card>
				<h3 slot="title">长协统计</h3>
				<div slot="extra" class="btn-group">
					<DatePicker type="year" placeholder="请选择年份" @on-change="yearSelect"></DatePicker>
				</div>
				<div class="chart-container">
					<div id="cxchart" style="width:100%;height: 100%;">
					</div>
				</div>
			</Card>
		</Row>
		<Row className="mgt_15">

			<Table :columns="columns6" :data="data5"  height="180"></Table>
		</Row>
		<Row class="mgt_15">
			<Card class="relative">
					<h3 slot="title">签约统计</h3>
					<div slot="extra" class="btn-group">
						<Button type="primary"  @click.native="$router.push('ContractManagement')">长协合同</Button>
					</div>
					<div style="height: 230px;">
						<Table :columns="column2" :data="qyTable"></Table>
					</div>
				<div class="page-container">
					<Page
							:total="totalPage"
							:current="currentPage"
							:page-size="3"
							show-total
							show-elevator
							v-on:on-change="qianyueList"
					></Page>
				</div>
			</Card>
		</Row>
	</div>
</template>
<style scoped>
	.data-panel {
		width: 100%;
		margin: 0;
		padding: 0;
	}

	.fr{
		clear: both;
	}
	.chart-container{
		height: 300px;
	}
	.btn-group{
		margin-top:-9px;
		z-index:10;
	}
	.relative .page-center{
		text-align: center;
		position: absolute;
		bottom: 0;
		left:0;
		right:0;
	}
	/* 分页的样式 */
	.page-center  .fenYe {
		width: 100%;
		height: 60px;
		background-color: #fff;
		padding-top: 10px;
		text-align: center;
	}
	.fenYe table{
		border: 0;
	}
	.fenYe ul {
		display: inline-block;
	}
	.fenYe button{
		top: -12px;
		left: 12px;
	}
</style>