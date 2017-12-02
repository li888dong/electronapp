<script>
    import DataIndex from '@/components/Home/DataIndex'

    export default {
        name: 'clientindex',
        data() {
            return {
                indexData: {
                    shijiliang: '12311.00',
                    shijiTongbi: '12.21%',
                    shijiHuanbi: '12.21%',
                    shenbaoPiancha: '12311.00',
                    shenbaoTongbi: '12.21%',
                    shenbaoHuanbi: '12.21%',
                    goudianPiancha: '12311.00',
                    goudianTongbi: '12.21%',
                    goudianHuanbi: '12.21%',
                },
                trendUp: true,
                trendDown: true,
                chartOption1: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        left: -5,
                        top: 0,
                        itemWidth:16,
                        itemHeight:16,
                        data: ['今年', '去年']
                    },
                    grid: {
                        top: '50',
                        left: 0,
                        right: 0,
                        bottom: '3%',
                        containLabel: true
                    },
                    color:['#4f8af9','#6ec71e','#f56e6a','#fc8b40','#818af8','#31c9d7','#f35e7a','#ab7aee','#14d68b','#edb00d'],
                    xAxis: {
                        type: 'category',
                        data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
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
                            data: [184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30, 184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30]
                        },
                        {
                            name: '去年',
                            type: 'bar',
                            data: [276, 284, 261, 49, 66, 175, 46, 275, 58, 12, 210, 14, 276, 284, 261, 49, 66, 175, 46, 275, 58, 12, 210, 14]
                        }

                    ]
                },
                chartOption2: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        left: -5,
                        top: 0,
                        itemWidth:16,
                        itemHeight:16,
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
                    color:['#4f8af9','#6ec71e','#f56e6a','#fc8b40','#818af8','#31c9d7','#f35e7a','#ab7aee','#14d68b','#edb00d'],
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
                                ['今天', '183']
                            ]
                        }, {
                            name: '昨天',
                            type: 'bar',
                            barWidth: 30,
                            data: [
                                ['昨天', '168']
                            ]
                        }
                    ]
                },
                chartOption3: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        left: -5,
                        top: 0,
                        itemWidth:16,
                        itemHeight:16,
                        data: ['本月', '上月']
                    },
                    grid: {
                        top: '60',
                        left: 0,
                        right: '0',
                        bottom: '3%',
                        containLabel: true
                    },
                    color:['#4f8af9','#6ec71e','#f56e6a','#fc8b40','#818af8','#31c9d7','#f35e7a','#ab7aee','#14d68b','#edb00d'],
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
                                ['本月', '183']
                            ]
                        }, {
                            name: '上月',
                            type: 'bar',
                            barWidth: 30,
                            data: [
                                ['上月', '168']
                            ]
                        }
                    ]
                },
            }
        },
        mounted() {
            this.drawBar1(this.chartOption1);
            this.drawBar2(this.chartOption2);
            this.drawBar3(this.chartOption3);
        },
        methods: {
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
				<Row type="flex" justify="space-around" gutter="20">
					<Col span="3">

						<Row className="data-title">
							<span class="huhao" style="color: #444444">户号</span>
						</Row>

						<Row className="data-content">
							<span class="huhao">0000000000</span>
						</Row>

						<Row className="data-content">
							<span class="huhao">0000000000</span>
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

						<Row className="data-content">
							<Col span="10">
								<span class="count">{{indexData.shijiliang}}</span>
							</Col>
							<Col span="7">
								<span class="tongbi-rate">{{indexData.shijiTongbi}}<i class="trend"
							                                                      v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
							</Col>
							<Col span="7">
								<span class="huanbi-rate">{{indexData.shijiHuanbi}}<i class="trend"
							                                                      v-bind:class="{trendUp:!trendUp,trendDown:trendDown}"></i></span>
							</Col>
						</Row>
						<Row className="data-content">
							<Col span="10">
								<span class="count">{{indexData.shijiliang}}</span>
							</Col>
							<Col span="7">
								<span class="tongbi-rate">{{indexData.shijiTongbi}}<i class="trend"
							                                                      v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
							</Col>
							<Col span="7">
								<span class="huanbi-rate">{{indexData.shijiHuanbi}}<i class="trend"
							                                                      v-bind:class="{trendUp:!trendUp,trendDown:trendDown}"></i></span>
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
						<Row className="data-content">
							<Col span="8">
							<span class="count">{{indexData.shenbaoPiancha}}</span>
							</Col>
							<Col span="8">
							<span
								class="tongbi-rate">{{indexData.shenbaoTongbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
							</Col>
							<Col span="8">
							<span
								class="huanbi-rate">{{indexData.shenbaoHuanbi}}<i
								class="trend" v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
							</Col>
						</Row>
						<Row className="data-content">
							<Col span="8">
								<span class="count">{{indexData.shenbaoPiancha}}</span>
							</Col>
							<Col span="8">
								<span
								class="tongbi-rate">{{indexData.shenbaoTongbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>

							</Col>
							<Col span="8">
								<span
								class="huanbi-rate">{{indexData.shenbaoHuanbi}}<i
								class="trend" v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
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
						<Row className="data-content">
							<Col span="8">

								<span class="count">{{indexData.goudianPiancha}}</span>
							</Col>

							<Col span="8">
							<span
								class="tongbi-rate">{{indexData.goudianTongbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
							</Col>

							<Col span="8">
							<span
								class="huanbi-rate">{{indexData.goudianHuanbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
							</Col>


						</Row>
						<Row className="data-content">
							<Col span="8">
								<span class="count">{{indexData.goudianPiancha}}</span>
							</Col>
							<Col span="8">
								<span
								class="tongbi-rate">{{indexData.goudianTongbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
							</Col>
							<Col span="8">
								<span
								class="huanbi-rate">{{indexData.goudianHuanbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
							</Col>

						</Row>
					</Col>
				</Row>
			</Card>
		</Row>
		<Row className="mgt_15" gutter="20">
			<Col span="16">
				<Card>
					<h3 slot="title">日电量同比</h3>
					<span class="danwei1">单位:Mw.h</span>
					<div id="compare-bar-1" style="width: 924px;height: 465px;">

					</div>
				</Card>
			</Col>
			<Col span="4">
				<Card>
					<h3 slot="title">日对比</h3>
					<span class="danwei">单位:Mw.h</span>
					<div id="compare-bar-2">

					</div>
				</Card>
			</Col>
			<Col span="4">
				<Card>
					<h3 slot="title">月对比</h3>
					<span class="danwei">单位:Mw.h</span>
					<div id="compare-bar-3">

					</div>
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
		color:#0089f0;
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

	.data-content, .data-title {
		height: 30px;
		line-height: 30px;
		text-align: center;
		margin-top: 10px;
	}
	.danwei1{
		position: relative;
		top: 20px;
		right: 10px;
		color: #999999;
		float: right;
	}
	.danwei{
		position: relative;
		top: 20px;
		right: 10px;
		color: #999999;
		float: right;
	}
	#compare-bar-2,
	#compare-bar-3 {
		width: 178px;
		height: 465px;
	}
</style>
