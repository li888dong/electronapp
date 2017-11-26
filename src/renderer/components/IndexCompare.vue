<script>
    export default {
        name: 'indexCompare',
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
                chartOption2: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },

                    backgroundColor:'#fff',
                    grid: {
                        top:'40',
                        left: "5%",
                        right:'5%',
                        bottom: '6%',
                        containLabel: true
                    },
                    color:['#48C3F3'],
                    xAxis: [
                        {
                            type:'category',
                            boundaryGap : false,
                            data: ['01月', '02月', '03月','04月','05月', '06月','07月','08月', '09月', '10月','11月','12月'],
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
                            position:'right',
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
                    dataZoom:{
                        bottom:-5,
                        start:0,
                        end:90
                    },
                    series: [
                        {
                            name: '河南众企联合售电',
                            type: 'line',
                            smooth:true,
                            itemStyle: {normal: {areaStyle: {type: 'default'}}},
                            data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48]
                        }
                    ]
                },
                chartOption1: {

                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        top:'10',
                        left: '40',
                        right: '5%',
                        bottom: '0',
                        containLabel: true
                    },
                    backgroundColor: '#fff',
                    calculable: true,
                    xAxis: [
                        {
                            type: 'category',
                            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                        }
                    ],
                    yAxis: [
                        {
                            position:'right',
                            type: 'value'
                        }
                    ],
                    color: ['#48C3F3'],
                    series: [

                        {
                            name: '行业销量',
                            type: 'bar',
	                        barWidth:30,
                            data: [1320, 1132, 601, 234, 120, 90, 20]
                        }
                    ]
                },

            }
        },
        mounted() {
            this.drawChart();
        },
        methods: {
            drawChart() {
                // 基于准备好的dom，初始化echarts实例
                let trendChart = this.$echarts.init(document.getElementById('trendChart'));
                // 绘制图表
                trendChart.setOption(this.chartOption2);
                // 基于准备好的dom，初始化echarts实例
                let rateChart = this.$echarts.init(document.getElementById('rateChart'));
                // 绘制图表
                rateChart.setOption(this.chartOption1);
            }
        }
    }
</script>
<template>
	<div class="main-container">
		<Row>
			<panel class="data-index" style="height: 200px;">
				<Row>
					<h3 class="title-lv3">售电量指数概况
						<small style="color: #999999"> 每月月初会发布上个月度河南区域售电行业整体指数数据</small>
					</h3>
				</Row>
				<Row type="flex" justify="space-around" gutter="20">
					<Col span="3">

						<Row className="data-content">
							<Button type="primary" size="large"><i class="iconfont icon-dingwei"></i>河南区域</Button>
						</Row>

						<Row className="data-content">
							<span>2017</span>
						</Row>

						<Row className="data-content">
							<span>2016</span>
						</Row>

					</Col>

					<Col span="4">
						<Row className="data-title">
							<Col span="12">
							<span class="count">长协</span>
							</Col>
							<Col span="12">
							<span class="tongbi-rate">参与竞价</span>
							</Col>

						</Row>
						<Row className="data-content">
							<Col span="12">
							<span class="count">{{indexData.shijiliang}}</span>
							</Col>
							<Col span="12">
							<span class="tongbi-rate">{{indexData.shijiTongbi}}<i class="trend"
							                                                      v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
							</Col>

						</Row>
						<Row className="data-content">
							<Col span="12">
							<span class="count">{{indexData.shijiliang}}</span>
							</Col>
							<Col span="12">
							<span class="tongbi-rate">{{indexData.shijiTongbi}}<i class="trend"
							                                                      v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
							</Col>

						</Row>
					</Col>
					<Col span="4">
					<Row className="data-title">

						<Col span="12">
						<span class="tongbi-rate">长协同比</span>
						</Col>
						<Col span="12">
						<span class="huanbi-rate">长协环比</span>
						</Col>
					</Row>
					<Row className="data-content">
						<Col span="12">
						<span
								class="tongbi-rate">{{indexData.shenbaoTongbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
						</Col>
						<Col span="12">
						<span
								class="huanbi-rate">{{indexData.shenbaoHuanbi}}<i
								class="trend" v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
						</Col>
					</Row>
					<Row className="data-content">

						<Col span="12">
						<span
								class="tongbi-rate">{{indexData.shenbaoTongbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>

						</Col>
						<Col span="12">
						<span
								class="huanbi-rate">{{indexData.shenbaoHuanbi}}<i
								class="trend" v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
						</Col>
					</Row>
					</Col>
					<Col span="4">
					<Row className="data-title">

						<Col span="12">
						<span class="tongbi-rate">竞价同比</span>
						</Col>

						<Col span="12">
						<span
								class="huanbi-rate">竞价环比</span>
						</Col>

					</Row>
					<Row className="data-content">


						<Col span="12">
						<span
								class="tongbi-rate">{{indexData.goudianTongbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
						</Col>

						<Col span="12">
						<span
								class="huanbi-rate">{{indexData.goudianHuanbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
						</Col>


					</Row>
					<Row className="data-content">

						<Col span="12">
						<span
								class="tongbi-rate">{{indexData.goudianTongbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
						</Col>
						<Col span="12">
						<span
								class="huanbi-rate">{{indexData.goudianHuanbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
						</Col>

					</Row>
					</Col>
					<Col span="2">
						<Row className="data-title">

							<Col span="24">
							<span class="tongbi-rate">购电偏差</span>
							</Col>


						</Row>
						<Row className="data-content">



							<Col span="24">
							<span
									class="huanbi-rate">{{indexData.goudianHuanbi}}<i
									class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
							</Col>


						</Row>
						<Row className="data-content">


						<Col span="24">
						<span
								class="huanbi-rate">{{indexData.goudianHuanbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
						</Col>

					</Row>
					</Col>
					<Col span="4">
						<Row className="data-title">

							<Col span="12">
							<span class="tongbi-rate">偏差同比</span>
							</Col>

							<Col span="12">
							<span
									class="huanbi-rate">偏差环比</span>
							</Col>

						</Row>
						<Row className="data-content">


							<Col span="12">
							<span
									class="tongbi-rate">{{indexData.goudianTongbi}}<i
									class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
							</Col>

							<Col span="12">
							<span
									class="huanbi-rate">{{indexData.goudianHuanbi}}<i
									class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
							</Col>


						</Row>
						<Row className="data-content">

							<Col span="12">
							<span
									class="tongbi-rate">{{indexData.goudianTongbi}}<i
									class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
							</Col>
							<Col span="12">
							<span
									class="huanbi-rate">{{indexData.goudianHuanbi}}<i
									class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
							</Col>

						</Row>
					</Col>
				</Row>
			</panel>
		</Row>
		<Row className="mgt_15" gutter=20>
			<Col span="18">
				<Row>
					<panel>
						<Row>
							<h3 class="title-lv3">售电量指数趋势</h3>
						</Row>
						<Row>
							<Col span="2" offset="1">
							<Button size="large" type="primary"><i class="iconfont icon-tubiaobingzhuangtu"></i>整体趋势</Button>
							</Col>
							<Col span="2" offset="1">
							<Button size="large" type="normal"><i class="iconfont icon-diannaopcxianshiqi"></i>长协趋势</Button>
							</Col>
							<Col span="2" offset="1">
							<Button size="large" type="normal"><i class="iconfont icon-shouji"></i>竞价趋势</Button>
							</Col>
							<Col span="4" offset="10">
								<span class="circle selected">90天</span>
								<span class="circle">半年</span>
								<span class="circle">全部</span>
							</Col>
						</Row>
						<Row style="height: 240px">
							<div id="trendChart" style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;">

							</div>
						</Row>
					</panel>
				</Row>
				<Row className="mgt_15">
					<panel>
						<Row>
							<h3 class="title-lv3">售电量行业占比 </h3>
						</Row>
						<Row>
							<Col span="2" offset="1">
								<Button size="large" type="primary"><i class="iconfont icon-dingwei"></i>行业占比</Button>
							</Col>
						</Row>
						<Row>
							<Col span="24">
								<div id="rateChart" style="height: 300px;">

								</div>
							</Col>
						</Row>
					</panel>
				</Row>
			</Col>
			<Col span="6">
			<panel class="ranklist-container">
				<h3 class="title-lv3">区域参与电量排行</h3>
				<ul>
					<li><span class="ranking">1.&nbsp; </span><span class="city">信阳市</span><span class="rate">88.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.88+'px'}"></span></li>
					<li><span class="ranking">2.&nbsp; </span><span class="city">洛阳市</span><span class="rate">77.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.77+'px'}"></span></li>
					<li><span class="ranking">3.&nbsp; </span><span class="city">驻马店</span><span class="rate">66.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.66+'px'}"></span></li>
					<li><span class="ranking">4.&nbsp; </span><span class="city">周口市</span><span class="rate">55.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.55+'px'}"></span></li>
					<li><span class="ranking">5.&nbsp; </span><span class="city">商丘市</span><span class="rate">44.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.44+'px'}"></span></li>
					<li><span class="ranking">6.&nbsp; </span><span class="city">三门峡</span><span class="rate">33.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.33+'px'}"></span></li>
					<li><span class="ranking">7.&nbsp; </span><span class="city">新乡市</span><span class="rate">22.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.22+'px'}"></span></li>
					<li><span class="ranking">8.&nbsp; </span><span class="city">平顶山</span><span class="rate">11.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.11+'px'}"></span></li>
					<li><span class="ranking">9.&nbsp; </span><span class="city">郑州市</span><span class="rate">5.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.05+'px'}"></span></li>
					<li><span class="ranking">10.&nbsp; </span><span class="city">南阳市</span><span class="rate">1.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.01+'px'}"></span></li>
				</ul>
			</panel>
			</Col>
		</Row>
	</div>
</template>
<style scoped>
	.situation-container{
		text-align: center;
		margin-top: 20px;
	}
	.ranklist-container{
		height:680px;
	}
	.ranklist-container li {
		height: 60px;
	}
	.data-content, .data-title {
		height: 30px;
		line-height: 30px;
		text-align: center;
		margin-top: 10px;
	}
	.circle.selected{
		background-color: #0089F0;
		color: #ffffff;
	}
	.circle{
		display: inline-block;
		width: 34px;
		height: 34px;
		border-radius: 34px;
		line-height: 34px;
		border: 1px solid #cccccc;
		text-align: center;
		background-color: #eeeeee;
		margin-left: 10px;
		cursor: pointer;
	}
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
		color: #31c9d7;
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
		background-color: #F6F7FB;
	}
</style>