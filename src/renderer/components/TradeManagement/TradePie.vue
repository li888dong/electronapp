<style>
    .tradeFrame {
        box-sizing: border-box;
        background-color: #fff;
        height: 170px;
    }
</style>
<template>
    <div class="tradeFrame relative">
        <div id="tradeFrame" style="position: absolute;left:0px;top:0px;bottom: 0;right: 0;">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'powertimeframe',
        data() {
            return {
                chartOption2: {
//          鼠标悬浮提示
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)",
                        position: [-20, -20]
                    },
                    legend: {
                        itemWidth:16,
                        itemHeight:16,
                    },
                    series: [
                        {
                            name: '交易来源',
                            type: 'pie',
                            selectedMode: 'single',
                            radius: ['0px', '45%'],
                            center: ['50%', '50%'],
                            itemStyle: {
                                normal: {
                                    offset:5,
                                },
                                emphasis: {}
                            },
                            label: {
                                normal: {
                                    show: false
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
                            radius: ['66%', '86%'],
                            label: {
                                normal: {
                                    show: false
                                }
                            },
                            center: ['50%', '50%'],
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
                let powerFrameChart = this.$echarts.init(document.getElementById('tradeFrame'));
                // 绘制图表
                powerFrameChart.setOption(option);
            }
        }
    }
</script>

