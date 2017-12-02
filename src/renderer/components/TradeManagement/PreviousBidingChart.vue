<script>
    export default {
        name: 'previousbidingchart',
        data() {
            return {
                chartOption2: {
                       tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                    legend: {
                        data:['电厂报价', '售电公司报价'],
                        icon:'rect',
                        left:0,
                        top:0,
                        itemWidth: 16,             // 图例图形宽度
                    },
                    grid: {
                        top:'40',
                        left: "0",
                        right: "0",
                        bottom: '',
                        containLabel: true
                    },
                        xAxis:  {
                            show:false,
                            type: 'category',
                            boundaryGap: false,
                            data: ['0', '50', '100', '150', '200', '250', '300', '350', '400', '450', '500', '550', '600', '650', '700', '750', '800', '850', '900', '950','1000'],
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
                        color:['#4f8af9','#6ec71e','#f56e6a','#fc8b40','#818af8','#31c9d7','#f35e7a','#ab7aee','#14d68b','#edb00d'],
                        series: [
                            {
                                name:'电厂报价',
                                type:'line',
                                smooth: true,
                                data: [ 280, 280, 280, 350, 350, 350, 350, 550, 550, 550,550, 390, 390, 600, 600, 600, 600, 600, 600, 400,400],
                                markLine: {
                                    symbol:['circle','circle'],
                                    data: [ [{
                                        name: '100kw',
                                        coord:[0,0],
										itemStyle:{
                                            normal:{
                                                color:'#31c9d7',
											}
										},
                                        label:{
                                            normal:{
                                                position:'middle',
                                            }
                                        },
										lineStyle:{
                                            normal:{
                                                type:'solid',
												width:2,
											}
										}
                                    }, {
                                        coord:['150',0],
                                    }], [{
                                        name: '300kw',
                                       coord:['150',0],
                                        itemStyle:{
                                            normal:{
                                                color:'#6ec71e',
                                            }
                                        },
                                        label:{
                                            normal:{
                                                position:'middle',
                                            }
                                        },
                                        lineStyle:{
                                            normal:{
                                                type:'solid',
                                                width:2,
                                            }
                                        }
                                    }, {
                                        coord:['350',0],
                                    }], [{
                                        name: '500kw',
                                       coord:['350',0],
                                        itemStyle:{
                                            normal:{
                                                color:'#fc8b40',
                                            }
                                        },
                                        label:{
                                            normal:{
                                                position:'middle',
                                            }
                                        },
                                        lineStyle:{
                                            normal:{
                                                type:'solid',
                                                width:2,
                                            }
                                        }
                                    }, {
                                       coord:['550',0],
                                    }], [{
                                        name: '600kw',
                                       coord:['550',0],
                                        itemStyle:{
                                            normal:{
                                                color:'#818af8',
                                            }
                                        },
                                        label:{
                                            normal:{
                                                position:'middle',
                                            }
                                        },
                                        lineStyle:{
                                            normal:{
                                                type:'solid',
                                                width:2,
                                            }
                                        }
                                    }, {
                                       coord:['650',0],
                                    }] ,[{
                                        name: '900kw',
                                        coord:['650',0],
                                        itemStyle:{
                                            normal:{
                                                color:'#0089fc',
                                            }
                                        },
                                        label:{
                                            normal:{
                                                position:'middle',
                                            }
                                        },
                                        lineStyle:{
                                            normal:{
                                                type:'solid',
                                                width:2,
                                            }
                                        }
                                    }, {
                                        coord:['950',0],
                                    }],[{
                                        name: '1000kw',
                                        coord:['950',0],
                                        itemStyle:{
                                            normal:{
                                                color:'#ab7aee',
                                            }
                                        },
                                        label:{
                                            normal:{
                                                position:'middle',
                                            }
                                        },
                                        lineStyle:{
                                            normal:{
                                                type:'solid',
                                                width:2,
                                            }
                                        }
                                    }, {
                                        coord:['1000',0],
                                    }]  ],
                                }
                            }, {
                                name:'售电公司报价',
                                type:'line',
                                smooth: true,
                                data: [280, 280, 280, 350, 350, 350, 350, 550, 550, 550,550, 390, 390, 600, 600, 600, 600, 600, 600, 400,400].map(i=>i*1.5),
                                markLine: {
                                    symbol:['circle','circle'],
                                    data: [ [{
                                        name: '100kw',
                                        coord:[0,0],
                                        itemStyle:{
                                            normal:{
                                                color:'#31c9d7',
                                            }
                                        },
                                        label:{
                                            normal:{
                                                position:'middle',
                                            }
                                        },
                                        lineStyle:{
                                            normal:{
                                                type:'solid',
                                                width:2,
                                            }
                                        }
                                    }, {
                                        coord:['150',0],
                                    }], [{
                                        name: '300kw',
                                        coord:['150',0],
                                        itemStyle:{
                                            normal:{
                                                color:'#6ec71e',
                                            }
                                        },
                                        label:{
                                            normal:{
                                                position:'middle',
                                            }
                                        },
                                        lineStyle:{
                                            normal:{
                                                type:'solid',
                                                width:2,
                                            }
                                        }
                                    }, {
                                        coord:['350',0],
                                    }], [{
                                        name: '500kw',
                                        coord:['350',0],
                                        itemStyle:{
                                            normal:{
                                                color:'#fc8b40',
                                            }
                                        },
                                        label:{
                                            normal:{
                                                position:'middle',
                                            }
                                        },
                                        lineStyle:{
                                            normal:{
                                                type:'solid',
                                                width:2,
                                            }
                                        }
                                    }, {
                                        coord:['550',0],
                                    }], [{
                                        name: '600kw',
                                        coord:['550',0],
                                        itemStyle:{
                                            normal:{
                                                color:'#818af8',
                                            }
                                        },
                                        label:{
                                            normal:{
                                                position:'middle',
                                            }
                                        },
                                        lineStyle:{
                                            normal:{
                                                type:'solid',
                                                width:2,
                                            }
                                        }
                                    }, {
                                        coord:['650',0],
                                    }] ,[{
                                        name: '900kw',
                                        coord:['650',0],
                                        itemStyle:{
                                            normal:{
                                                color:'#0089fc',
                                            }
                                        },
                                        label:{
                                            normal:{
                                                position:'middle',
                                            }
                                        },
                                        lineStyle:{
                                            normal:{
                                                type:'solid',
                                                width:2,
                                            }
                                        }
                                    }, {
                                        coord:['950',0],
                                    }],[{
                                        name: '1000kw',
                                        coord:['950',0],
                                        itemStyle:{
                                            normal:{
                                                color:'#ab7aee',
                                            }
                                        },
                                        label:{
                                            normal:{
                                                position:'middle',
                                            }
                                        },
                                        lineStyle:{
                                            normal:{
                                                type:'solid',
                                                width:2,
                                            }
                                        }
                                    }, {
                                        coord:['1000',0],
                                    }]  ],
                                }
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
                let bidSimulationChart = this.$echarts.init(document.getElementById('bid-previous-chart'));
                // 绘制图表
                bidSimulationChart.setOption(option);
            }
        }
    }
</script>
<template>
	<div class="bid-simulation relative">
		<div id="bid-previous-chart" style="position: absolute;left:0;right:0;bottom:0;top:0;"></div>
	</div>
</template>
<style>
	.bid-simulation {
		width:100%;
		height:310px;
		background-color: #fff;
	}

</style>