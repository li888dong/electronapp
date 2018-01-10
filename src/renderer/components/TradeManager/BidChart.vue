<script>
    export default {
        name: 'bidchart',
        data() {
            return {
                chartOption2: {
                    title:{
                        text:'本月竞价模拟'
                    },
                    color: ['#5793f3', '#d14a61', '#675bba'],
                    tooltip: {
                        trigger: 'none',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    legend: {
                        data:['电厂报价', '售电公司报价'],
	                    left:10,
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
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine: {
                                onZero: false,
                                lineStyle: {
                                    color: '#5793f3'
                                }
                            },
                            axisPointer: {
                                label: {
                                    formatter: function (params) {
                                        return '降水量  ' + params.value
                                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                    }
                                }
                            },
                            data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
                        },
                        {
                            type: 'category',
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine: {
                                onZero: false,
                                lineStyle: {
                                    color: '#d14a61'
                                }
                            },
                            axisPointer: {
                                label: {
                                    formatter: function (params) {
                                        return '降水量  ' + params.value
                                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                    }
                                }
                            },
                            data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name:'电厂报价',
                            type:'line',
                            xAxisIndex: 1,
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
                let bidSimulationChart = this.$echarts.init(document.getElementById('bid-simulation-chart'));
                // 绘制图表
                bidSimulationChart.setOption(option);
            }
        }
    }
</script>
<template>
	<div class="bid-simulation relative">
		<div class="btn-group absolute right_10 top_10"><button class="button btnSelected">导入数据</button></div>
		<div id="bid-simulation-chart" style="width: 1242px;height: 293px;"></div>
	</div>
</template>
<style>
	.bid-simulation {
		background-color: #fff;
	}
</style>