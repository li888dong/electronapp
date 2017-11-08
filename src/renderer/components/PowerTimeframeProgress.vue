<style>

</style>
<template>
	<div>
		<div id="powerTimeFrameProgress" :style="{width: '507px', height: '130px'}">

		</div>
	</div>

</template>

<script>
    export default {
        name: 'powertimeframeprogress',
        data() {
            return {
                chartOption2: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        top: '1%',
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        show: false,
                        type: 'value',
                        boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        axisLabel: {
                            inside: false,
                            textStyle: {
                                fontSize: 16,
                                color: '#333'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        data: ['谷段', '平段', '峰段']
                    },
                    series: [
                        { // For shadow
                            type: 'bar',
                            itemStyle: {
                                normal: {color: 'rgba(0,0,0,0.05)'}
                            },
                            barGap:'-100%',
                            data: [{
                              name:'月',
	                          value:100,
	                          label:{
                                  normal:{
                                      show:true,
	                                  position:'insideRight',
                                      formatter: '{c}mw.h',
	                                  color:"#999"
                                  }
	                          }
                            },{
                                name:'月',
                                value:100,
                                label:{
                                    normal:{
                                        show:true,
                                        position:'insideRight',
                                        formatter: '{c}mw.h',
                                        color:"#999"
                                    }
                                }
                            },{
                                name:'月',
                                value:100,
                                label:{
                                    normal:{
                                        show:true,
                                        position:'insideRight',
                                        formatter: '{c}mw.h',
                                        color:"#999"
                                    }
                                }
                            }],
                            animation: false
                        },
                        {
                            name: '月度',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 1, 0,
                                        [
                                            {offset: 0, color: '#83bff6'},
                                            {offset: 0.5, color: '#188df0'},
                                            {offset: 1, color: '#188df0'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 1, 0,
                                        [
                                            {offset: 0, color: '#2378f7'},
                                            {offset: 0.7, color: '#2378f7'},
                                            {offset: 1, color: '#83bff6'}
                                        ]
                                    )
                                }
                            },
	                        label:{
                                normal:{
                                    show:true,
                                    position:'insideLeft',
	                                color:'#fff',
                                    formatter: '{c}%'
                                }
	                        },
                            data: [30, 50, 20]
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
                let powerTimeFrameProgressChart = this.$echarts.init(document.getElementById('powerTimeFrameProgress'));
                // 绘制图表
                powerTimeFrameProgressChart.setOption(option);
            }
        }
    }
</script>

