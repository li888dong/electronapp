<script>
    import Pagenation from '@/components/Pagenation'

    export default {
        name: 'changxie',
        data() {
            return {
                cur: 1,
                all: 5,
                msg: '',
                chartOption: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
                        orient: 'vertical',
                        right: '0'
                    },
                    grid: {
                        left: '3%',
                        right: '8%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月',]

                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '直接访问',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: [320, 302, 301, 334, 390, 330, 320, 320, 302, 301, 334, 390]
                        },
                        {
                            name: '邮件营销',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: [120, 132, 101, 134, 90, 120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '视频广告',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: [150, 212, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '搜索引擎',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: [820, 832, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                }
            }
        },
        methods: {
            pageListen: function (data) {
                this.msg = '当前页码：' + data
            },
            drawChart() {
                let cxChart = this.$echarts.init(document.getElementById('cxchart'));
                cxChart.setOption(this.chartOption)
            }
        },
        mounted() {
            this.drawChart();
        },
	    components:{
            'pagenation':Pagenation
        }
    }
</script>
<template>
	<div>
		<div class="data-panel">
			<h3 class="title">长协统计</h3>
			<div class="btn-group fr">
				<button class="button">本年度</button>
				<button class="button btnSelected">2017年</button>
				<button class="button">2017年</button>
			</div>
			<div id="cxchart" class="chart-container" style="width: 1550px;height: 300px;">

			</div>
			<div class="table-container">
				<table width="100%">
					<thead>
					<tr>
						<th>类型</th>
						<th>一月</th>
						<th>二月</th>
						<th>三月</th>
						<th>四月</th>
						<th>五月</th>
						<th>六月</th>
						<th>七月</th>
						<th>八月</th>
						<th>九月</th>
						<th>十月</th>
						<th>十一月</th>
						<th>十二月</th>
						<th>合计</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>年度预测合计(万KW.h)</td>
					</tr>
					<tr>
						<td>长协合同合计(万KW.h)</td>
					</tr>
					<tr>
						<td>长协比例(%)</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="data-panel">
			<h3 class="title">长协统计</h3>
			<div class="btn-group fr">
				<button class="button btnSelected">长协合同</button>
			</div>
			<div class="table-container">
				<table width="100%" style="margin-top: 20px;">
					<thead>
					<tr>
						<th>合同编号</th>
						<th>电厂名称</th>
						<th>签约电量</th>
						<th>签约日期</th>
						<th>执行日期</th>
						<th>联系人</th>
						<th>联系电话</th>
						<th>联络人</th>
						<th>查看</th>

					</tr>
					</thead>
				</table>
				<div class="table-page absolute">
					<span>共44444条记录</span><span>123页</span>
					<span>第 <select name="" id="">
							<option value="1">1</option>
							<option value="1">1</option>
							<option value="1">1</option>
							<option value="1">1</option>
							<option value="1">1</option>
						</select>页</span>
				</div>
				<pagenation class="absolute" style="bottom: 20px;right: 40px; " :cur.sync="cur" :all.sync="all"
				            v-on:btn-click="pageListen"></pagenation>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.data-panel {
		width: 1656px;
	}

	.data-panel:nth-child(2) {
		height: 400px;
	}

	.data-panel .title {
		padding: 0 0 0 5px;
		border-left: solid 5px #36c;
		display: inline-block;
	}

	.data-panel th {
		height: 30px;
		background-color: #f6f6f6;
	}

	.data-panel td {
		height: 30px;
		text-align: center;
	}

	.table-page {
		font-size: 14px;
		color: #36c;
		bottom: 20px;
		right: 300px;
	}
</style>