<script>
	import TradePi from '@/components/Home/TradePi'
	export default {
	    name:'tradesituation',
		data(){
	        return{
                chartOption2: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: ['直接访问', '邮件营销'],
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
		mounted() {
            this.drawBar(this.chartOption2);
        },
        methods: {
            drawBar(option = this.chartOption2) {
                // 基于准备好的dom，初始化echarts实例
                let monthBar = this.$echarts.init(document.getElementById('month-bar'));
                // 绘制图表
                monthBar.setOption(option);
            }
        },
		components:{
		    'trade-pi':TradePi
		}
	}
</script>
<template>
	<div>
		<div class="data-panel data-analysis">
			<h3 class="title">交易基础数据分析</h3>
			<div class="btn-group fr">
				<button class="button">2017年</button>
				<button class="button">2月</button>
			</div>
			<div id="trade-chart" style="width: 176px;height: 176px;">
				<trade-pi></trade-pi>
			</div>
			<div class="year">
				<div class="panel">
					<h4>年度</h4>
					<ul class="cx">
						<li><span class="name">长协</span></li>
						<li><span class="count">213424.125</span></li>
						<li><span class="rate">12.55%</span></li>
					</ul>
					<ul class="jj">
						<li><span class="name">长协</span></li>
						<li><span class="count">213424.125</span></li>
						<li><span class="rate">12.55%</span></li>
					</ul>
				</div>
			</div>
			<div class="month">
				<div class="panel">
					<h4>月度</h4>
					<ul class="cx">
						<li><span class="name">长协</span></li>
						<li><span class="count">213424.125</span></li>
						<li><span class="rate">12.55%</span></li>
					</ul>
					<ul class="jj">
						<li><span class="name">长协</span></li>
						<li><span class="count">213424.125</span></li>
						<li><span class="rate">12.55%</span></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="data-panel month-situation">
			<h3 class="title">每月交易概况</h3>
			<div id="month-bar" style="width: 1247px;height: 300px;">

			</div>
		</div>
		<div class="data-panel month-proportion">
			<h3 class="title">月度交易占比</h3>
		</div>
		<div class="data-panel surplus">
			<h3 class="title">发电集团剩余电量</h3>
		</div>

	</div>
</template>
<style scoped>
	.data-panel .title{
		padding-left: 5px;
		border-left: 5px solid #3366cc;
	}
	.data-analysis{
		width: 1652px;
		height: 230px;
	}
	.data-analysis>div{
		display: inline-block;
		vertical-align: middle;

	}
	.month-situation{
		width: 1247px;
		height: 330px;
	}
	.month-proportion{
		width: 380px;
		height: 330px;
	}
	.surplus{
		width: 1652px;
		height: 300px;
	}
	.panel{
		width: 290px;
		height: 173px;
		background-color: #f6f6f6;
	}
	.panel li{
		display: inline-block;
	}
	.panel li span{

	}
	.cx{
		border-bottom: 1px solid #cccccc;
	}
	.cx li{
		vertical-align: bottom;
	}
	.jj li{
		vertical-align: top;
	}
	.panel .name{
		color: #e5e5e5;
	}
	.panel .count{
		font-size: 32px;
	}
	.year{
		margin-left: 200px;
	}
</style>