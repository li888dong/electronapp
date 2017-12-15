<script>
	export default {
	    name:'piancha',
		data(){
	        return{
	            year:'2017',
                spinChart:false,
		        chartData:{},
                columns4: [
                    {
                        title: '类别',
                        key: 'category'
                    },
                    {
                        title: '1月',
                        key: 'month01'
                    },
                    {
                        title: '2月',
                        key: 'month02'
                    },
                    {
                        title: '3月',
                        key: 'month03'
                    },
                    {
                        title: '4月',
                        key: 'month04'
                    },
                    {
                        title: '5月',
                        key: 'month05'
                    },
                    {
                        title: '6月',
                        key: 'month06'
                    },
                    {
                        title: '7月',
                        key: 'month07'
                    },
                    {
                        title: '8月',
                        key: 'month08'
                    },
                    {
                        title: '9月',
                        key: 'month09'
                    },
                    {
                        title: '10月',
                        key: 'month10'
                    },
                    {
                        title: '11月',
                        key: 'month11'
                    },
                    {
                        title: '12月',
                        key: 'month12'
                    },
                    {
                        title: '合计',
                        key: 'all'
                    }
                ],
		        data1:[],
		        tableData:[
		            {category:'采集电量'},
			        {category:'申报电量'},
			        {category:'申报偏差'},
			        {category:'预测电量'},
			        {category:'预测偏差'},
			        {category:'监测电量'},
			        {category:'监测偏差'}
			        ],
		        tableData1:[]
	        }
		},

		computed:{
		    cus_id:function () {
			    return this.$store.getters.cus_id
            },
		    option:function () {
		        let monthList = [],
			        caijiList = [],
			        cyuceList = [],
			        gyuceList = [];
		        for (let k in this.chartData){
		            monthList.push(k);
		            for (let i = 0;i<this.chartData[k].dev.length;i++){
                        caijiList.push(this.chartData[k].dev[i].declare_dev);
						cyuceList.push(this.chartData[k].dev[i].fore_dev);
                        gyuceList.push(this.chartData[k].dev[i].monitor_dev);
                    }

		        }
			    return{
                    legend: {
                        data: ['采集偏差', '客户预测偏差', '公司预测偏差'],
                        align: 'left',
                        top:20,
                        left: 0,
                        itemWidth:16,
                        itemHeight:16,
                    },
                    color:this.$store.getters.chartOption.colorList,
                    tooltip: this.$store.getters.chartOption.barTooltip,
                    xAxis: {
                        type:'category',
                        data: ['01月', '02月', '03月','04月','05月', '06月','07月','08月', '09月', '10月','11月','12月'],
                        axisLine: {onZero: true},
                        splitLine: {show: false},
                        splitArea: {show: false}
                    },
                    yAxis: {
                        splitArea: {show: false},
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                    },
                    grid: {
                        right:10,
                        left: 30,
                        top:80,
                        bottom:20
                    },
                    series: [
                        {
                            name: '采集偏差',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                },
                                emphasis: {
                                    barBorderWidth: 1,
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 0,
                                    shadowColor: 'rgba(0,0,0,0.5)'
                                }
                            },
                            data: caijiList
                        },
                        {
                            name: '客户预测偏差',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                },
                                emphasis: {
                                    barBorderWidth: 1,
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 0,
                                    shadowColor: 'rgba(0,0,0,0.5)'
                                }
                            },
                            data: cyuceList
                        },
                        {
                            name: '公司预测偏差',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                },
                                emphasis: {
                                    barBorderWidth: 1,
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 0,
                                    shadowColor: 'rgba(0,0,0,0.5)'
                                }
                            },
                            data: gyuceList
                        }
                    ]
                }
            }
		},
		mounted(){
		    this.reqChart();
		    this.reqTable();
        },
		watch:{
		    cus_id:function () {
                this.reqChart();
                this.reqTable();
            }
		},
		methods:{
		    reqChart(){
                this.spinChart = true;
                this.$http.post(this.$api.CLIENT_PIANCHA_CHART,{cus_id:this.cus_id}).then(res=> {
                    this.spinChart = false;
                    console.log('偏差图表',res.data.citys);
                    this.chartData = res.data.citys;
                    this.drawBar()

                },err=>{

                })
		    },
			reqTable(){
                this.$http.post(this.$api.CLIENT_PIANCHA_TABLE,{cus_id:this.cus_id}).then(res=> {
                    console.log('偏差表格',res);

                    let data = res.data.citys;

                    for (let k in data){

                        for (let i = 0;i<data[k].length;i++){
//	                        申报电量
							this.tableData[0][k.replace('2017-','month')]=data[k][i].declare;
//                          申报偏差
							this.tableData[1][k.replace('2017-','month')]=data[k][i].declare_dev;
//							监测电量
							this.tableData[2][k.replace('2017-','month')]=data[k][i].monitor;
//							监测偏差
							this.tableData[3][k.replace('2017-','month')]=data[k][i].monitor_dev;
//							预测电量
							this.tableData[4][k.replace('2017-','month')]=data[k][i].forecast;
//							预测偏差
							this.tableData[5][k.replace('2017-','month')]=data[k][i].fore_dev;
//							采集电量
							this.tableData[6][k.replace('2017-','month')]=data[k][i].actual_used;
                        }

                    }
	                this.tableData1 = this.tableData;
                })
			},
		    drawBar(){
                let compare1Chart = this.$echarts.init(document.getElementById('caiji'));
                compare1Chart.setOption(this.option);
            }
		}
	}
</script>
<template>
	<div>

		<div class="client-container">
			<Row>
				<Card class="client-piancha relative">
					<h3 slot="title">偏差分析</h3>
					<div slot="extra" class="btn-group">
						<DatePicker type="year" placeholder="请选择年份" style="width: 180px"></DatePicker>
						<Button type="primary" class="refresh">
							<i class="iconfont icon-shuaxin"></i>
						</Button>
					</div>
					<Row className="char-group">
						<div id="caiji">

						</div>
					</Row>
					<Spin size="large" fix v-if="spinChart"></Spin>
				</Card>

			</Row>
			<Row className="mgt_15">
				<Card>

					<Table :columns="columns4" :data="tableData1" height="370"></Table>
				</Card>
			</Row>
		</div>
	</div>
</template>
<style scoped>
	.btn-group{
		margin-top: -9px;
	}
	.char-group>div{
		height: 358px;
	}

	.refresh{
		display: inline-block;
		vertical-align: middle;
		margin-left: 5px;
		cursor: pointer
	}
</style>