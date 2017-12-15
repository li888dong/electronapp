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

            }
        },
        props:['month','pieData'],
        computed:{
            powerFrameChart:function () {
                return this.$echarts.init(document.getElementById('tradeFrame'));

            },
            chartOption:function () {
                return {
//          鼠标悬浮提示
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)",
                        position: [-20, -20]
                    },
                    legend: {
                        orient: 'vertical',
                        left: '0',
                        top: '20',
                        itemWidth:16,
                        itemHeight:16,
                        data: ['市场竞价(月)', '长协(月)', '市场竞价(年)', '长协(年)']
                    },
                    series: [
                        {
                            name: '年度',
                            type: 'pie',
                            selectedMode: 'single',
                            radius: ['0px', '45%'],
                            center: ['60%', '50%'],
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
                                    value: this.pieData.year.longpact,
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
                                    value: this.pieData.year.bidding,
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
                            name: '月度',
                            type: 'pie',
                            radius: ['66%', '86%'],
                            label: {
                                normal: {
                                    show: false
                                }
                            },
                            center: ['60%', '50%'],
                            data: [
                                {
                                    value: this.pieData.month.longpact,
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
                                    value: this.pieData.month.bidding,
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
            this.drawPie();
        },
        watch:{
            pieData:function () {
                this.drawPie()
            }
        },
        methods: {
            drawPie() {
                this.powerFrameChart.clear();
                // 基于准备好的dom，初始化echarts实例
                // 绘制图表
                this.powerFrameChart.setOption(this.chartOption);
            }
        }
    }
</script>

