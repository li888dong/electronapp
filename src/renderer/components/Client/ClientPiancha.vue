<script>
	export default {
	    name:'piancha',
		data(){
	        return{
	            year:'2017',
	            yearList:[
                    {
                        value: '2017',
                    },
                    {
                        value: '2016',
                    },
                    {
                        value: '2015',
                    },
                    {
                        value: '2014',
                    },
                    {
                        value: '2013',
                    },
                    {
                        value: '2012',
                    }
	            ],
                option : {
                    legend: {
                        data: ['采集偏差', '客户预测偏差', '公司预测偏差'],
                        align: 'left',
                        left: 10,
                        itemWidth:16,
                        itemHeight:16,
                    },
	                color:['#0089f0','#31c9d7','#f35e7a'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    xAxis: {
                        type:'category',
                        data: ['01月', '02月', '03月','04月','05月', '06月','07月','08月', '09月', '10月','11月','12月'],
                        axisLine: {onZero: true},
                        splitLine: {show: false},
                        splitArea: {show: false}
                    },
                    yAxis: {
                        inverse: true,
                        splitArea: {show: false},
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                    },
	                dataZoom:{
                        bottom:0
	                },
                    grid: {
                        left: 40,
	                    top:40,
	                    bottom:60
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
                            data: [1,2,-1,-2,3,4,-5,-3,5,4,3,6]
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
                            data: [1,2,-1,-2,3,4,-5,-3,5,4,3,6].map((i)=>i*2)
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
                            data: [1,2,-1,-2,3,4,-5,-3,5,4,3,6].map((i)=>i*0.5)
                        }
                    ]
                },
                columns4: [
                    {
                        title: '类别',
	                    width:200,
                        key: 'category'
                    },
                    {
                        title: '1月',
                        key: 'January'
                    },
                    {
                        title: '2月',
                        key: 'February'
                    },
                    {
                        title: '3月',
                        key: 'March'
                    },
                    {
                        title: '4月',
                        key: 'April'
                    },
                    {
                        title: '5月',
                        key: 'May'
                    },
                    {
                        title: '6月',
                        key: 'June'
                    },
                    {
                        title: '7月',
                        key: 'July'
                    },
                    {
                        title: '8月',
                        key: 'August'
                    },
                    {
                        title: '9月',
                        key: 'September'
                    },
                    {
                        title: '10月',
                        key: 'October'
                    },
                    {
                        title: '11月',
                        key: 'November'
                    },
                    {
                        title: '12月',
                        key: 'December'
                    }
                ],
                data1: [
                    {
                        category: 'John Brown',
                        January: 1000000,
                        February: 100000,
                        March: 100000,
                        April:100000,
                        May:100000,
                        June:1000000,
                        July:100000,
                        August:10000,
                        September:1000000,
                        October:1000000,
                        November:1000000,
                        December:1000000,
                    },
                    {
                        category: 'John Brown',
                        January: 1000000,
                        February: 100000,
                        March: 100000,
                        April:100000,
                        May:100000,
                        June:1000000,
                        July:100000,
                        August:10000,
                        September:1000000,
                        October:1000000,
                        November:1000000,
                        December:1000000,
                    },
                    {
                        category: 'John Brown',
                        January: 1000000,
                        February: 100000,
                        March: 100000,
                        April:100000,
                        May:100000,
                        June:1000000,
                        July:100000,
                        August:10000,
                        September:1000000,
                        October:1000000,
                        November:1000000,
                        December:1000000,
                    },
                    {
                        category: 'John Brown',
                        January: 1000000,
                        February: 100000,
                        March: 100000,
                        April:100000,
                        May:100000,
                        June:1000000,
                        July:100000,
                        August:10000,
                        September:1000000,
                        October:1000000,
                        November:1000000,
                        December:1000000,
                    },
                    {
                        category: 'John Brown',
                        January: 1000000,
                        February: 100000,
                        March: 100000,
                        April:100000,
                        May:100000,
                        June:1000000,
                        July:100000,
                        August:10000,
                        September:1000000,
                        October:1000000,
                        November:1000000,
                        December:1000000,
                    },
                ]
	        }
		},
		mounted(){
			this.drawBar()
        },
		methods:{
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
				<panel class="client-piancha relative">
					<div class="header">

						<h3 class="title-lv3">偏差分析</h3>
						<div class="btn-group">
							<Select v-model="year" style="width:180px;">
								<Option v-for="item in yearList" :value="item.value" :key="item.value">{{ item.value }}</Option>
							</Select>
							<div class="refresh">
								<i class="iconfont icon-shuaxin"></i>
							</div>
						</div>
					</div>
					<div class="char-group">
						<div id="caiji">

						</div>
					</div>
				</panel>

			</Row>
			<Row className="mgt_15">
				<Table :columns="columns4" :data="data1" height="407"></Table>
			</Row>
		</div>
	</div>
</template>
<style scoped>

	.client-piancha{
		width: 1432px;
		margin: 0;
	}
	.client-piancha .header{
		height: 55px;
		border-bottom: 1px solid #eeeeee;
	}

	.char-group{
		margin-top: 20px;
	}
	.char-group>div{
		width: 1580px;
		height: 358px;
	}
	.table-container{
		margin-top: 30px;
		width: 1440px;
		height:381px;
	}
	.refresh{
		display: inline-block;
		vertical-align: middle;
		margin:0 20px;
		cursor: pointer
	}
</style>