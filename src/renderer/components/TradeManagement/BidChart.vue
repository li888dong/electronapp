<script>
    export default {
        name: 'bidchart',
	    props:['chartData'],
        data() {
            return {

            }
        },
	    watch:{
		    chartData:function () {
			    this.drawLine()
            }
	    },
	    computed:{
            chartOption2:function () {
	            let xData = [],
		            dcData = [],
	                gsData = [];
	            this.chartData.map(i=>{
	                xData.push(i.supply);
                    dcData.push(i.count1);
                    gsData.push(i.count2);
	            });
	            return {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    legend: {
                        data:['电厂报价', '售电公司报价'],
                        icon:'rect',
                        left:-5,
                        top:0,
                        itemWidth: 16,
                        itemHeight: 16,             // 图例图形宽度
                    },
                    grid: {
                        top:'40',
                        left: "0",
                        right: "16",
                        bottom: '',
                        containLabel: true
                    },
                    xAxis:  {
                        type: 'category',
                        boundaryGap: true,
	                    data:xData,
                        axisLabel: {
                            formatter: '{value}kw'
                        },
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}'
                        },
                        axisPointer: {
                            snap: true
                        },
                        position:'right',
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                    },

                    color: this.$store.getters.chartOption.colorList,
                    series: [
                        {
                            name:'电厂报价',
                            type:'line',
                            smooth: true,
                            data: dcData,
							itemStyle:{normal: {areaStyle: {type: 'default',opacity:0.08}}}
                        },
	                    {
                            name:'售电公司报价',
                            type:'line',
                            smooth: true,
                            data:gsData,
                            itemStyle:{normal: {areaStyle: {type: 'default',opacity:0.08}}}
                        },
                    ]
                }
            }
	    },
        mounted() {
            this.drawLine();
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let bidSimulationChart = this.$echarts.init(document.getElementById('bid-simulation-chart'));
                // 绘制图表
                bidSimulationChart.setOption(this.chartOption2);
            }
        }
    }
</script>
<template>
	<div class="bid-simulation relative">
		<div id="bid-simulation-chart" style="position: absolute;top:0;bottom:0;right:0;left:0;"></div>
	</div>
</template>
<style>
	.bid-simulation {
		background-color: #fff;
		width:100%;
		height:310px;
	}
</style>