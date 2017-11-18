<script>
    export default {
        name: 'previousbidingchart',
        data() {
            return {
                chartOption2: {
                    title:{
                        text:'往期竞价结果',
	                    subtext:'2017年7月份'
                    },
                    color: ['#5793f3',  '#40BD21'],
                    tooltip: {
                        trigger: 'none',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    legend: {
                        data:['电厂报价', '售电公司报价'],
                        icon:'rect',
                        left:110,
                        top:30,
                        itemWidth: 20,             // 图例图形宽度
                        itemHeight: 14,            // 图例图形高度
                    },
                    grid: {
                        top: 70,
                        bottom: 50
                    },
                    xAxis: [
                        {
                            type: 'category',

                            data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            position:'right'
                        }
                    ],
                    series: [
                        {
                            name:'电厂报价',
                            type:'line',
                            smooth: true,
                            areaStyle: {normal: {}},
                            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                        },
                        {
                            name:'售电公司报价',
                            type:'line',
                            smooth: true,
                            areaStyle: {normal: {}},
                            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
                        }
                    ]
                }

            }
        },
        mounted() {
            this.drawLine(this.chartOption2);
        },
        methods: {
            drawLine(option = this.chartOption2) {
                // 基于准备好的dom，初始化echarts实例
                let bidSimulationChart = this.$echarts.init(document.getElementById('bid-previous-chart'));
                // 绘制图表
                bidSimulationChart.setOption(option);
            }
        }
    }
</script>
<template>
	<div class="bid-simulation relative">
		<div class="btn-group absolute right_10 top_10">
			<button class="button">上一月</button>
			<button class="button btnSelected">2017年6月</button>
			<button class="button">下一月</button>
		</div>
		<div id="bid-previous-chart" style="width: 1242px;height: 293px;"></div>
	</div>
</template>
<style>
	.bid-simulation {
		width: 1242px;
		height: 293px;
		background-color: #fff;
		margin-bottom: 15px;
	}
	.bid-simulation button{
		background-color: #EAF6FE;

	}

</style>