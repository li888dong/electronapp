<script>
    export default {
        name: 'changxie',
        data() {
            return {
                year:new Date().getFullYear(),
                currentPage:1,
                totalPage:0,
                pageLimit:3,
                columns6:[
                    {
                        title:'类型',
	                    width:200,
                        key:'name',
                    },
                    {
                        title:'01月',
                        key:'month01',
                    },{
                        title:'02月',
                        key:'month02',
                    },
                    {
                        title:'03月',
                        key:'month03',
                    },{
                        title:'04月',
                        key:'month04',
                    },
                    {
                        title:'05月',
                        key:'month05',
                    },{
                        title:'06月',
                        key:'month06',
                    },{
                        title:'07月',
                        key:'month07',
                    },{
                        title:'08月',
                        key:'month08',
                    },{
                        title:'09月',
                        key:'month09',
                    },{
                        title:'10月',
                        key:'month10',
                    },{
                        title:'11月',
                        key:'month11',
                    },{
                        title:'12月',
                        key:'month12',
                    },{
                        title:'总计',
                        key:'total',
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
                        month01:'0',
                        month02:'0',
                        month03:'0',
                        month04:'0',
                        month05:'0',
                        month06:'0',
                        month07:'0',
                        month08:'0',
                        month09:'0',
                        month10:'0',
                        month11:'0',
                        month12:'0',
                        total:'0',
                    },
                    {
                        name:'长协合同总计（wkw）',
                        month01:'0',
                        month02:'0',
                        month03:'0',
                        month04:'0',
                        month05:'0',
                        month06:'0',
                        month07:'0',
                        month08:'0',
                        month09:'0',
                        month10:'0',
                        month11:'0',
                        month12:'0',
                        total:'0',
                    },
                    {
                        name:'长协比例（%）',
                        month01:'0',
                        month02:'0',
                        month03:'0',
                        month04:'0',
                        month05:'0',
                        month06:'0',
                        month07:'0',
                        month08:'0',
                        month09:'0',
                        month10:'0',
                        month11:'0',
                        month12:'0',
                        total:'0',
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
	            },
                loading:false,
                loading2:false
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
                this.loading2 = true;
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
                    this.loading2=false;
                },err=>{
                    this.loading2=false;
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.loading2=false;
                    this.$api.errcallback(err);
                })
	        },
	        doAjax(){
                this.loading=true;
                this.cxChart.showLoading();
                this.$http.post(this.$api.CX_CHART,{com_id:this.$store.getters.com_id,year:this.year}).then(res=>{
                    console.log("长协统计图表",res);
                     this.cxChart.hideLoading();
                    let data = res.data.data;
                    let listData = res.data.monthstotal;
                    // console.log(listData.annual_forecast.list);
                    var arr1 =[];
                    var arr2 =[];
                    var arr3=[];
                    var arr4=[];
                    var arr5=[];
                    var obj ={};
                    var total =0;
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
                    arr3 =[listData.annual_forecast.list,listData.longpact.list,listData.lp_ratio];
                    for(let k in arr3[0]){
                        arr5.push(k);
                    }
                    console.log(2,arr5);
                    arr3[0].name='年度预测合计（wkw）';
                    arr3[1].name='长协合同总计（wkw）';
                    arr4 = arr3[2];
                    for(let i =0;i<arr4.length;i++){
                        arr4[i] = Number(arr4[i]);
                        total += arr4[i];
                    }
                    for(var i=0;i<arr5.length-1;i++){
                        for(var j=0;j<arr4.length;j++){
                            obj[arr5[i]] = arr4[j];
                        }
                    }
                    obj.name='长协比例（%）';
                    obj.total=total;
                    arr3[2] = obj;
                    // console.log(obj);
                    console.log(arr3,1);
                    this.data5=arr3;
                    this.loading=false;

                },err=>{
                    this.loading=false;
                    this.cxChart.hideLoading();
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.loading=false;
                    this.cxChart.hideLoading();
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

			<Table :columns="columns6" :data="data5"  height="180" :loading='loading'></Table>
		</Row>
		<Row class="mgt_15">
			<Card class="relative">
					<h3 slot="title">签约统计</h3>
					<div slot="extra" class="btn-group">
						<Button type="primary"  @click.native="$router.push('ContractManagement')">长协合同</Button>
					</div>
					<div style="height: 230px;">
						<Table :columns="column2" :data="qyTable" :loading='loading2'></Table>
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