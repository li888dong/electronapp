<script>
    export default {
        name: 'bidchart',
        data() {
            return {
                chartOption2: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:['电厂报价', '售电公司报价'],
                        icon:'rect',
                        left:110,
                        top:0,
                        itemWidth:16,
                        itemHeight:16,
                    },
                    grid: {
                        top:'10%',
                        left: "5%",
                        right: "5%",
                        bottom: '6%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            boundaryGap : false,
                            axisLine: {onZero: false},
                            type: 'category',
                            data: ["1968/10/4", "1968/10/5", "1968/10/6", "1968/10/7", "1968/10/8", "1968/10/9", "1968/10/10", "1968/10/11", "1968/10/12", "1968/10/13", "1968/10/14", "1968/10/15", "1968/10/16", "1968/10/17", "1968/10/18", "1968/10/19", "1968/10/20", "1968/10/21", "1968/10/22", "1968/10/23", "1968/10/24", "1968/10/25", "1968/10/26", "1968/10/27", "1968/10/28", "1968/10/29", "1968/10/30", "1968/10/31", "1968/11/1", "1968/11/2", "1968/11/3", "1968/11/4", "1968/11/5", "1968/11/6", "1968/11/7", "1968/11/8", "1968/11/9", "1968/11/10", "1968/11/11", "1968/11/12", "1968/11/13", "1968/11/14", "1968/11/15", "1968/11/16", "1968/11/17", "1968/11/18", "1968/11/19", "1968/11/20", "1968/11/21"]
                        }
                    ],
                    yAxis: [
                        {
                            position:'right',
                            type: 'value',
                            boundaryGap: 0,

                            axisLabel: {
                                color:'#999'
                            },
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                        }
                    ],
//          设置可拖动区间
                    color: ['#0089f0','#f35e7a'],
                    series: [
                        {
                            name: '电厂报价',
                            type: 'line',
                            smooth:true,
                            itemStyle: {normal: {areaStyle: {type: 'default',opacity:0.3}}},
                            data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48]
                        },
                        {
                            name: '售电公司报价',
                            type: 'line',
                            smooth:true,
                            itemStyle: {normal: {areaStyle: {type: 'default',opacity:0.3}}},
                            data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48].map(i=>i*0.9)
                        },
                    ]
                },

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
		<div class="fr">
			<span>供需比 12:12</span>
			<span>推荐报价方案A：123.321</span>
			<span>推荐报价方案B：123.321</span>
			<span>推荐报价方案C：123.321</span>
		</div>
		<div id="bid-simulation-chart" style="width: 1150px;height: 263px;"></div>
	</div>
</template>
<style>
	.bid-simulation {
		background-color: #fff;
	}
	.bid-simulation .fr{
		margin-right: 40px;
		margin-top: 10px;

	}
	.bid-simulation span{
		margin-right: 20px;
	}
</style>