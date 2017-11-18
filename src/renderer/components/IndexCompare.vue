<script>
    export default {
        name: 'indexCompare',
        data() {
            return {
                chartOption2: {

                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: [{
                            name: '实际用电量',
                            icon: 'rect'
                        }]
                    },
                    backgroundColor: '#fff',
                    calculable: true,
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    dataZoom: {},
                    color: ['#48C3F3'],
                    series: [

                        {
                            name: '实际用电量',
                            type: 'line',
                            smooth: true,

                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: 'default',
                                        color: '#EBF7FC'
                                    }
                                }
                            },
                            data: [1320, 1132, 601, 234, 120, 90, 20]
                        }
                    ]
                },
                chartOption1: {

                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: [{
                            name: '行业销量',
                            icon: 'rect'
                        }]
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
                            type: 'value'
                        }
                    ],
                    color: ['#48C3F3'],
                    series: [

                        {
                            name: '行业销量',
                            type: 'bar',
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
	<div class="main-container relative">
		<div class="index-container">
			<h3 class="title">售电量指数概况
				<small> 每月月初会发布上个月度河南区域售电行业整体指数数据</small>
			</h3>
			<div class="index-panel">
				<table width="100%">
					<thead>
					<tr>
						<th><span class="tab-btn">河南区域</span></th>
						<th><span>长协销售电量|参与竞价电量</span></th>
						<th><span>长协同比|长协环比</span></th>
						<th><span>竞价同比|竞价环比</span></th>
						<th><span>竞价偏差</span></th>
						<th><span>偏差同比|偏差环比</span></th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>2017年10月</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>2017年10月</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					</tbody>
				</table>

			</div>
		</div>
		<div class="index-container">
			<h3 class="title">售电量指数趋势</h3>
			<div class="index-panel chart-panel">
				<span class="tab-btn">整体趋势</span>
				<span class="tab-btn">长协趋势</span>
				<span class="tab-btn">竞价趋势</span>
				<div class="btn-group fr">
					<button class="button btnSelected">90天</button>
					<button class="button">半年</button>
					<button class="button">全部</button>
				</div>
				<div id="trendChart" style="height: 240px">

				</div>
			</div>
		</div>
		<div class="index-container">
			<h3 class="title">售电量行业占比 </h3>
			<div class="index-panel chart-panel">
				<span class="tab-btn">行业占比</span>

				<div id="rateChart" style="height: 200px">

				</div>

			</div>
		</div>
		<div class="area-rank absolute list-container">
			<h3 class="title" style="display: block">区域参与电量排行 </h3>
			<ul>
				<li><span class="rank">1.</span><span class="area">南阳市</span><span class="bar"></span></li>
				<li><span class="rank">2.</span><span class="area">信阳市</span><span class="bar"></span></li>
				<li><span class="rank">3.</span><span class="area">洛阳市</span><span class="bar"></span></li>
				<li><span class="rank">4.</span><span class="area">驻马店</span><span class="bar"></span></li>
				<li><span class="rank">5.</span><span class="area">周口市</span><span class="bar"></span></li>
				<li><span class="rank">6.</span><span class="area">商丘市</span><span class="bar"></span></li>
				<li><span class="rank">7.</span><span class="area">三门峡</span><span class="bar"></span></li>
				<li><span class="rank">8.</span><span class="area">新乡市</span><span class="bar"></span></li>
				<li><span class="rank">9.</span><span class="area">平顶山市</span><span class="bar"></span></li>
				<li><span class="rank">10.</span><span class="area">郑州市</span><span class="bar"></span></li>
			</ul>
		</div>
	</div>
</template>
<style scoped>
	.index-container {
		margin-top: 30px;
	}

	.index-panel {
		width: 1664px;
		min-height: 200px;
		background-color: #fff;
		box-sizing: border-box;
		padding: 10px 20px;
	}

	.index-container .title {
		font-size: 16px;
	}

	.tab-btn {
		display: inline-block;
		vertical-align: middle;
		color: #fff;
		text-align: center;
		line-height: 43px;
		width: 133px;
		height: 43px;
		background-color: #36c !important;
		border-radius: 5px;
		font-size: 16px;
		cursor: pointer;
	}

	.index-panel th, .index-panel td {
		height: 60px;
	}

	.index-panel th span:not(.tab-btn) {
		background-color: #eee;
		padding: 5px 10px;
	}

	.index-panel td {
		text-align: center;

	}

	.index-panel tr > td:nth-child(1), .index-panel tr > th:nth-child(1) {
		color: #36c;
		font-size: 14px;
		text-align: left;
	}

	.btn-group {
		position: relative;
		right: 150px;
		z-index: 999;
	}

	.index-panel button {
		min-width: 36px;
		height: 36px;
		border-radius: 50%;

	}

	.chart-panel {
		width: 1253px;
	}

	.area-rank {
		width: 400px;
		height: 573px;
		right: 20px;
		bottom: 0;
		box-sizing: border-box;
		padding: 20px;
		background-color: #fff;
	}

	.list-container ul {
		display: inline-block;
		margin-left: 20px;
	}

	.list-container li {
		height: 30px;
		line-height: 40px;
		margin-top: 5px;
	}

	.list-container span {
		display: inline-block;
		vertical-align: top;
	}

	.area {
		min-width: 60px;
	}

	.rank {
		width: 20px;
	}

	.bar {
		width: 200px;
		height: 10px;
		background-color: #48C3F3;
		margin-top: 15px;
	}
</style>