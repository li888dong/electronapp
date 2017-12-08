<script>
    export default {
        name: 'database',
        data() {
            return {
                year: '2017年',
                columns6: [
                    {
                        title: '户号',
                        key: 'cus_id',
                    },
                    {
                        title: '01月',
                        key: 'month01',
                    }, {
                        title: '02月',
                        key: 'month02',
                    },
                    {
                        title: '03月',
                        key: 'month03',
                    }, {
                        title: '04月',
                        key: 'month04',
                    },
                    {
                        title: '05月',
                        key: 'month05',
                    }, {
                        title: '06月',
                        key: 'month06',
                    }, {
                        title: '07月',
                        key: 'month07',
                    }, {
                        title: '08月',
                        key: 'month08',
                    }, {
                        title: '09月',
                        key: 'month09',
                    }, {
                        title: '10月',
                        key: 'month10',
                    }, {
                        title: '11月',
                        key: 'month11',
                    }, {
                        title: '12月',
                        key: 'month12',
                    }, {
                        title: '总计',
                        key: 'total',
                    }
                ],
	            tableData:[],
                chartData: []
            }
        },
        computed: {
			yearData:function () {
                switch (this.year){
                    case '2017年':
                        return this.tableData[0];
                    case '2016年':
                        return this.tableData[1];
                    case '2015年':
                        return this.tableData[2];
                    case '2014年':
                        return this.tableData[3]
                }
            },
            chartOption2: function () {
                return {
                    tooltip: this.$store.getters.chartOption.barTooltip,
                    legend: {
                        left: -5,
                        top: 10,
                        itemWidth: 16,
                        itemHeight: 16,
                        data: ['2017', '2016', '2015', '2014'],
                    },
                    backgroundColor: '#fff',
                    grid: {
                        top: 50,
                        left: 0,
                        right: 0,
                        bottom: '6%',
                        containLabel: true
                    },
                    color: this.$store.getters.chartOption.colorList,
                    xAxis: [
                        {
                            type: 'category',

                            data: ['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月', '10月', '11月', '12月'],
                            splitLine: {show: false},
                            splitArea: {show: false},
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                        }
                    ],
                    yAxis: [
                        {
                            position: 'right',
                            type: 'value',
                            boundaryGap: 0,
                            splitArea: {show: false},
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                        }
                    ],

                    series: this.chartData

                }
            }
        },
        mounted() {

            this.historyUserPower();
        },
        methods: {
            drawChart(option = this.chartOption2) {
                // 基于准备好的dom，初始化echarts实例
                let historyChart = this.$echarts.init(document.getElementById('historyChart'));
                // 绘制图表
                historyChart.setOption(option);
            },
            yearChange(year){

            },
            historyUserPower() {
                this.$http.post(this.$api.HISTORY_ELECTRIC, {com_id: this.$store.getters.com_id}).then(res => {
                    console.log("历史用电量趋势", res.data.data);
                    let data = res.data.data;
                    for (let year in data){

                        if (data[year].length>0){
                            this.tableData.push(data[year]);
                            this.chartData.push({
                                name: year,
                                type: 'bar',
                                barMaxWidth:30,
                                data: [
                                    data[year].reduce(function (preValue,curValue,index,array) {
	                                    return preValue + curValue.month01
                                    },0),
                                    data[year].reduce(function (preValue,curValue,index,array) {
                                        return preValue + curValue.month02
                                    },0),
                                    data[year].reduce(function (preValue,curValue,index,array) {
                                        return preValue + curValue.month03
                                    },0),
                                    data[year].reduce(function (preValue,curValue,index,array) {
                                        return preValue + curValue.month04
                                    },0),
                                    data[year].reduce(function (preValue,curValue,index,array) {
                                        return preValue + curValue.month05
                                    },0),
                                    data[year].reduce(function (preValue,curValue,index,array) {
                                        return preValue + curValue.month06
                                    },0),
                                    data[year].reduce(function (preValue,curValue,index,array) {
                                        return preValue + curValue.month07
                                    },0),
                                    data[year].reduce(function (preValue,curValue,index,array) {
                                        return preValue + curValue.month08
                                    },0),
                                    data[year].reduce(function (preValue,curValue,index,array) {
                                        return preValue + curValue.month09
                                    },0),
                                    data[year].reduce(function (preValue,curValue,index,array) {
                                        return preValue + curValue.month10
                                    },0),
                                    data[year].reduce(function (preValue,curValue,index,array) {
                                        return preValue + curValue.month11
                                    },0),
                                    data[year].reduce(function (preValue,curValue,index,array) {
                                        return preValue + curValue.month12
                                    },0),
                                ]
                            })
                        }
                    }
					console.log(this.tableData)
                    this.drawChart(this.chartOption2);
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },

        },
    }
</script>
<template>
	<div class="main-container">
		<Row>
			<Col span="24">
			<Card>
				<h3 slot="title">历史用电量趋势</h3>
				<Row>

					<div class="history-chart-container" id="historyChart">
					</div>
				</Row>
			</Card>
			</Col>
		</Row>

		<Row className="mgt_15">
			<Card class="history-table-container">
				<h3 slot="title">历史用电量数据</h3>
				<div slot="extra" class="btn-group">
					<RadioGroup v-model="year" type="button" v-on:on-change="yearChange">
						<Radio label="2017年"></Radio>
						<Radio label="2016年"></Radio>
						<Radio label="2015年"></Radio>
						<Radio label="2014年"></Radio>
					</RadioGroup>
				</div>

				<Table :columns="columns6" :data="yearData" height="320px"></Table>

			</Card>

		</Row>
	</div>
</template>
<style scoped>
	.history-chart-container,
	.history-table-container {
		height: 400px;
	}

	.btn-group {
		margin-top: -8px;
	}
</style>