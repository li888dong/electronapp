<script>
    import DataIndex from '@/components/Home/DataIndex'

    export default {
        name: 'clientindex',
        data() {
            return {

                indexData: '',
                huhaoSpin: false,
                dayTongbi: {
                    spin: false,
                    year: [],
                    lastyear: []
                },
                dayCompare: {
                    spin: false,
                    today: 0,
                    yesterday: 0
                },
                monthCompare: {
                    spin: false,
                    curmonth: 0,
                    lastmonth: 0
                }
            }
        },
        mounted() {
            this.huhao();
            this.daytb();
            this.daycompare();
            this.monthcompare();
        },
        computed: {
            chartOption1: function () {
                return {
                    tooltip: this.$store.getters.chartOption.barTooltip,
                    legend: {
                        left: -5,
                        top: 0,
                        itemWidth: 16,
                        itemHeight: 16,
                        data: ['今年', '去年']
                    },
                    grid: {
                        top: '50',
                        left: 0,
                        right: 0,
                        bottom: '3%',
                        containLabel: true
                    },
                    color: this.$store.getters.chartOption.colorList,
                    xAxis: {
                        type: 'category',
                        data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                        nameTextStyle: {
                            fontSize: 12
                        },
//	                    控制x轴隔几个显示
                        axisLabel: {
                            interval: 0
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },

                    },

                    yAxis: [
                        {
                            position: 'left',
                            type: 'value',
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            boundaryGap: 0
                        }
                    ],

                    series: [
                        {
                            name: '今年',
                            type: 'bar',
                            data: this.dayTongbi.year
                        },
                        {
                            name: '去年',
                            type: 'bar',
                            data: this.dayTongbi.lastyear
                        }

                    ]
                }
            },
            chartOption2: function () {
                return {
                    tooltip: this.$store.getters.chartOption.barTooltip,
                    legend: {
                        left:-5,
                        top: 0,
                        itemWidth: 16,
                        itemHeight: 16,
                        data: ['今天', '昨天']
                    },
                    grid: {
                        top: '60',
                        left: 0,
                        right: '0',
                        bottom: '3%',
                        containLabel: true
                    },
//                    color: ['#14d86b', '#ca94ec'],
                    color: this.$store.getters.chartOption.colorList,
                    xAxis: {
                        type: 'category',
                        data: ["今天", "昨天"],
                        nameTextStyle: {
                            fontSize: 12
                        },
//	                    控制x轴隔几个显示
                        axisLabel: {
                            interval: 0
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                    },
                    yAxis: {
                        show: true,
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                    },

                    series: [
                        {
                            name: '今天',
                            type: 'bar',
                            barWidth: 30,
                            barGap: '-100%',
                            data: [
                                ['今天', this.dayCompare.today]
                            ]
                        }, {
                            name: '昨天',
                            type: 'bar',
                            barWidth: 30,
                            data: [
                                ['昨天', this.dayCompare.yesterday]
                            ]
                        }
                    ]
                }
            },
            chartOption3: function () {
                return {
                    tooltip: this.$store.getters.chartOption.barTooltip,
                    legend: {
                        left: -5,
                        top: 0,
                        itemWidth: 16,
                        itemHeight: 16,
                        data: ['本月', '上月']
                    },
                    grid: {
                        top: '60',
                        left: 0,
                        right: '0',
                        bottom: '3%',
                        containLabel: true
                    },
                    color: this.$store.getters.chartOption.colorList,
                    xAxis: {
                        type: 'category',
                        data: ["本月", "上月"],
                        nameTextStyle: {
                            fontSize: 12
                        },
//	                    控制x轴隔几个显示
                        axisLabel: {
                            interval: 0
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                    },
                    yAxis: {
                        show: true,
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                    },

                    series: [
                        {
                            name: '本月',
                            type: 'bar',
                            barWidth: 30,
                            barGap: '-100%',
                            data: [
                                ['本月', this.monthCompare.curmonth]
                            ]
                        }, {
                            name: '上月',
                            type: 'bar',
                            barWidth: 30,
                            data: [
                                ['上月', this.monthCompare.lastmonth]
                            ]
                        }
                    ]
                }

            },

            cus_id: function () {
                return this.$store.getters.cus_id
            }
        },
        watch: {
            cus_id: function () {
                this.huhao();
                this.daytb();
                this.daycompare();
                this.monthcompare();
            }
        },
        methods: {
//            户号指数
            huhao() {
                this.huhaoSpin = true;
                this.$http.post(this.$api.CLIENT_DATA_INDEX, {cus_id: this.cus_id}).then(res => {
                    this.huhaoSpin = false;
                    this.indexData = res.data.data;
                    console.log('户号指数', this.indexData);
                }, err => {
                    this.huhaoSpin = false;
                    this.indexData = '';
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.huhaoSpin = false;
                    this.$api.errcallback(err);
                })
            },
//            日电量同比
            daytb() {
                this.dayTongbi.spin = true;

                this.$http.post(this.$api.CLIENT_DAYTB, {cus_id: this.cus_id}).then(res => {
                    this.dayTongbi.spin = false;
                    console.log('日电量同比', res);
                    let data = res.data.data;
                    for (let k in data) {
                        this.dayTongbi.year.push(data[k].year);
                        this.dayTongbi.lastyear.push(data[k].lastyear);
                    }
                    console.log(this.dayTongbi);
                    this.drawBar1(this.chartOption1);
                }, err => {
                    this.dayTongbi.spin = false;
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.dayTongbi.spin = false;
                    this.$api.errcallback(err);
                })
            },
//            日对比
            daycompare() {
                this.dayCompare.spin = true;
                this.$http.post(this.$api.CLIENT_DAY_COMPARE, {cus_id: this.cus_id}).then(res => {
                    this.dayCompare.spin = false;
                    console.log('日对比', res);
                    this.dayCompare = res.data.data;
                    this.drawBar2(this.chartOption2);

                }, err => {
                    this.dayCompare.spin = false;
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
//            月对比
            monthcompare() {
                this.monthCompare.spin = true;

                this.$http.post(this.$api.CLIENT_MONTH_COMPARE, {cus_id: this.cus_id}).then(res => {
                    this.monthCompare.spin = false;
                    console.log('月对比', res);
                    this.monthCompare = res.data.data;

                    this.drawBar3(this.chartOption3);

                }, err => {
                    this.monthCompare.spin = false;
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            drawBar1(option = this.chartOption1) {
                // 基于准备好的dom，初始化echarts实例
                let compare1Chart = this.$echarts.init(document.getElementById('compare-bar-1'));
                // 绘制图表
                compare1Chart.setOption(option);
            },
            drawBar2(option = this.chartOption2) {
                // 基于准备好的dom，初始化echarts实例
                let compare2Chart = this.$echarts.init(document.getElementById('compare-bar-2'));
                // 绘制图表
                compare2Chart.setOption(option);
            }
            , drawBar3(option = this.chartOption3) {
                // 基于准备好的dom，初始化echarts实例
                let compare3Chart = this.$echarts.init(document.getElementById('compare-bar-3'));
                // 绘制图表
                compare3Chart.setOption(option);
            }
        },
        components: {
            'data-index': DataIndex
        }
    }
</script>
<template>
	<div class="client-container">
		<Row>
			<Card class="data-index">
				<h3 slot="title">户号指数</h3>
				<Row type="flex" justify="space-around" :gutter="10">
					<Col span="3">

					<Row className="data-title">
						<span class="huhao" style="color: #444444">户号</span>
					</Row>

					<Row className="data-content" v-for="item in indexData">
						<span class="huhao">{{item.user_no}}</span>
					</Row>

					</Col>
					<Col span="6">
					<Row className="data-title">
						<Col span="10">
						<span class="count">使用电量(Mw.h)</span>
						</Col>
						<Col span="7">
						<span class="tongbi-rate">同比</span>
						</Col>
						<Col span="7">
						<span class="huanbi-rate">环比</span>
						</Col>
					</Row>

					<Row className="data-content" v-for="item in indexData">
						<Col span="10">
						<span class="count">{{item[1].num}}</span>
						</Col>
						<Col span="7">
						<span class="tongbi-rate">{{item[1].chainratio}}%<i class="trend"
						                                                    v-bind:class="{trendUp:item[1].chainratio>0,trendDown:item[1].chainratio<0}"></i></span>
						</Col>
						<Col span="7">
						<span class="huanbi-rate">{{item[1].yearonyear}}%<i class="trend"
						                                                    v-bind:class="{trendUp:item[1].yearonyear>0,trendDown:item[1].yearonyear<0}"></i></span>
						</Col>
					</Row>
					</Col>
					<Col span="6">
					<Row className="data-title">
						<Col span="8">
						<span class="count">申报月偏差</span>
						</Col>
						<Col span="8">
						<span class="tongbi-rate">同比</span>
						</Col>
						<Col span="8">
						<span class="huanbi-rate">环比</span>
						</Col>
					</Row>
					<Row className="data-content" v-for="item in indexData">
						<Col span="8">
						<span class="count">{{item[2].num}}</span>
						</Col>
						<Col span="8">
						<span
								class="tongbi-rate">{{item[2].chainratio}}%<i
								class="trend "
								v-bind:class="{trendUp:item[2].chainratio>0,trendDown:item[2].chainratio<0}"></i></span>
						</Col>
						<Col span="8">
						<span
								class="huanbi-rate">{{item[2].yearonyear}}%<i
								class="trend"
								v-bind:class="{trendUp:item[2].yearonyear>0,trendDown:item[2].yearonyear<0}"></i></span>
						</Col>
					</Row>
					</Col>
					<Col span="6">
					<Row className="data-title">
						<Col span="8">
						<span class="count">购电月偏差</span>
						</Col>
						<Col span="8">
						<span class="tongbi-rate">同比</span>
						</Col>

						<Col span="8">
						<span
								class="huanbi-rate">环比</span>
						</Col>

					</Row>
					<Row className="data-content" v-for="item in indexData">
						<Col span="8">

						<span class="count">{{item[3].num}}</span>
						</Col>

						<Col span="8">
						<span
								class="tongbi-rate">{{item[3].chainratio}}%<i
								class="trend "
								v-bind:class="{trendUp:item[3].chainratio>0,trendDown:item[3].chainratio<0}"></i></span>
						</Col>

						<Col span="8">
						<span
								class="huanbi-rate">{{item[3].yearonyear}}%<i
								class="trend "
								v-bind:class="{trendUp:item[3].yearonyear>0,trendDown:item[3].yearonyear<0}"></i></span>
						</Col>


					</Row>

					</Col>
				</Row>
				<Spin size="large" fix v-if="huhaoSpin"></Spin>
			</Card>
		</Row>
		<Row className="mgt_15" :gutter="10">
			<Col span="16">
			<Card>
				<h3 slot="title">日电量同比</h3>
				<span class="danwei1">单位:Mw.h</span>
				<div id="compare-bar-1" style="width:100%;height: 465px;">

				</div>
				<Spin size="large" fix v-if="dayTongbi.spin"></Spin>
			</Card>
			</Col>
			<Col span="4">
			<Card>
				<h3 slot="title">日对比</h3>
				<span class="danwei">单位:Mw.h</span>
				<div id="compare-bar-2">

				</div>
				<Spin size="large" fix v-if="dayCompare.spin"></Spin>
			</Card>
			</Col>
			<Col span="4">
			<Card>
				<h3 slot="title">月对比</h3>
				<span class="danwei">单位:Mw.h</span>
				<div id="compare-bar-3">

				</div>
				<Spin size="large" fix v-if="monthCompare.spin"></Spin>
			</Card>
			</Col>
		</Row>
	</div>

</template>
<style scoped>

	/*数据指数*/
	.data-index {
		height: 295px;
	}

	.data-index span {
		display: inline;
		text-align: center;
		font-size: 14px;
	}

	.data-index .huhao {
		color: #0089f0;
	}

	.data-index .trend {
		display: inline-block;
		width: 15px;
		height: 15px;
		line-height: 15px;
		margin-left: 5px;
		vertical-align: middle;
	}

	.data-title {
		background-color: #f2f7fb;
	}
    .data-title span{
        white-space: nowrap;
    }
	.data-content, .data-title {
		height: 30px;
		line-height: 30px;
		text-align: center;
		margin-top: 10px;
	}

	.danwei1 {
		position: relative;
		top: 20px;
		right: 10px;
		color: #999999;
		float: right;
	}

	.danwei {
		position: relative;
		top: 20px;
		right: 10px;
		color: #999999;
		float: right;
	}

	#compare-bar-2,
	#compare-bar-3 {
		width: 100%;
		height: 465px;
	}
    @media (min-width: 1365px) and (max-width: 1919px) {
       .danwei {
        position: relative;
        top: 24px;
        right: -14px;
        color: #999999;
        float: right;
        font-size: 12px;
      }
    }
</style>
