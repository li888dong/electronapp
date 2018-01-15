<script>
    export default {
        name: 'database',
        data() {
            return {
                year: new Date().getFullYear()+'年',
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
                tableData: [],
                chartData: [],
                yearList:[],
                loading:false,
                legendList:[]
            }
        },
        computed: {
            yearData: function () {
                switch (this.year) {
                    case this.yearList[0]:
                        return this.tableData[0];
                    case this.yearList[1]:
                        return this.tableData[1];
                    case this.yearList[2]:
                        return this.tableData[2];
                    case this.yearList[3]:
                        return this.tableData[3]
                }
            },
            historyChart:function(){
                return this.$echarts.init(document.getElementById('historyChart'));
            },
            chartOption2: function () {
                return {
                    tooltip: this.$store.getters.chartOption.barTooltip,
                    legend: {
                        left: -5,
                        top: 10,
                        itemWidth: 16,
                        itemHeight: 16,
                        data: this.legendList,
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
                this.historyChart.clear();
                // 绘制图表
                this.historyChart.setOption(option);
                
            },
            yearChange(year) {
                 this.year = year;
            },
            historyUserPower() {
                this.loading = true;
                this.historyChart.showLoading();
                this.$http.post(this.$api.HISTORY_ELECTRIC, {cus_id: this.$store.getters.cus_id}).then(res => {
                    console.log("历史用电量趋势", res.data.data);
                    if(res.data.status === '1'){
                        this.historyChart.hideLoading();
                        let data = res.data.data;
                      for (let year in data) {
                             this.legendList.unshift(year);
                             this.yearList.unshift(year+'年');
                        // if (data[year].length > 0) {
                            this.tableData.unshift(data[year]);
                            this.chartData.unshift({
                                name: year,
                                type: 'bar',
                                barMaxWidth: 30,
                                data: [
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month01
                                    }, 0),
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month02
                                    }, 0),
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month03
                                    }, 0),
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month04
                                    }, 0),
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month05
                                    }, 0),
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month06
                                    }, 0),
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month07
                                    }, 0),
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month08
                                    }, 0),
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month09
                                    }, 0),
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month10
                                    }, 0),
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month11
                                    }, 0),
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month12
                                    }, 0),
                                ]
                            })
                        // }
                    }
                    console.log(this.tableData);
                    console.log(this.yearList);
                    this.drawChart(this.chartOption2);
                    this.loading = false;
                    }else{

                    }
                    
                }, err => {
                    this.loading = false;
                    this.historyChart.hideLoading();
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.loading = false;
                    this.historyChart.hideLoading();
                    this.$api.errcallback(err);
                })
            },

        },
    }
</script>
<template>
	<div class="client-container">
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
						<Radio  v-for='item in yearList' :label="item"></Radio>
					</RadioGroup>
				</div>
                <Row>
                 <Table :columns="columns6" :data="yearData" height="320px" :loading='loading'></Table>
                </Row>
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