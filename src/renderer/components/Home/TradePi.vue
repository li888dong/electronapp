<style>
	.powerTimeFrame {
		margin: 0 0 0 0;
		padding:  5px 5px;
		box-sizing: border-box;
		background-color: #fff;
		height: 202px;
		width: 399px;
	}
</style>
<template>
	<div class="data-pannel powerTimeFrame">
		<div id="powerTimeFrame" :style="{width: '399px', height: '202px'}">

		</div>
	</div>

</template>

<script>
    export default {
        name: 'powertimeframe',
        data() {
            return {
                chartOption2: {
                    title: {
                        text: '交易分布',
                        textStyle: {
                            fontSize:14,
	                        fontWeight:'bolder'

                        }
                    },
//          鼠标悬浮提示
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
	                    right:'40',
	                    top:'30',
                        itemWidth:14,
                        data: ['市场竞价(月)', '长协(月)', '市场竞价(年)', '长协(年)']
                    },
                    series: [
                        {
                            name: '交易来源',
                            type: 'pie',
                            selectedMode: 'single',
                            radius: ['0', '45px'],
                            center:['115','105'],
//              itemStyle:{
//                normal:{
//                    color:['#ab7aee','#31c9d7']
//                },
//                emphasis:{
//                    color:['#ab7aee','#31c9d7']
//                }
//              },
//              color:['#ab7aee','#31c9d7'],

                            label: {
                                normal: {
                                    show:false
                                }
                            },

                            data: [
                                {
                                    value: 335,
                                    name: '长协(年)',
                                    itemStyle: {
                                        normal: {
                                            color: '#ab7aee'
                                        },
                                        emphasis: {
                                            color: '#8757c9'
                                        }
                                    }
                                },
                                {
                                    value: 679,
                                    name: '市场竞价(年)',
                                    itemStyle: {
                                        normal: {
                                            color: '#31c9d7'
                                        },
                                        emphasis: {
                                            color: '#15aebd'
                                        }
                                    }
                                },
                            ],
                        },
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['65px', '80px'],
                            label: {
                                normal: {
                                    show:false
                                }
                            },
                            center:['115','105'],
                            data: [
                                {
                                    value: 335,
                                    name: '长协(月)',
                                    itemStyle: {
                                        normal: {
                                            color: '#edb00d'
                                        },
                                        emphasis: {
                                            color: '#d69d02'
                                        }
                                    }
                                },
                                {
                                    value: 310,
                                    name: '市场竞价(月)',
                                    itemStyle: {
                                        normal: {
                                            color: '#4fa8f9'
                                        },
                                        emphasis: {
                                            color: '#3077b9'
                                        }
                                    }
                                },
                            ]
//                itemStyle:{
//                  normal:{
//                      color:['#edb00d','#4fa8f9']
//                  },
//                    emphasis:{
//                        color:['#d69d02','#3077b9']
//                    }
//                }
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
                let powerFrameChart = this.$echarts.init(document.getElementById('powerTimeFrame'));
                // 绘制图表
                powerFrameChart.setOption(option);
            }
        }
    }
</script>

