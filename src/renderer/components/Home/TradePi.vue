<style>
	.powerTimeFrame {
		height: 202px;
	}
	.title{
		display: inline-block;
		height: 20px;
		line-height: 20px;
		font-size: 16px;
		color: #1c2438;
		font-weight: 700;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
<template>
	<Card class="powerTimeFrame">
		<h3 class="title">交易分布</h3>
		<div id="powerTimeFrame" style="position: absolute;left: 0;top: 0;bottom: 0;right: 0;">
		</div>
	</Card>

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
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: '240',
                        top: '60',
                        itemWidth:16,
                        itemHeight:16,
                        data: ['市场竞价(月)', '长协(月)', '市场竞价(年)', '长协(年)']
                    },
                    series: [
                        {
                            name: '交易来源',
                            type: 'pie',
                            selectedMode: 'single',
                            radius: ['0', '45px'],
                            center: ['135', '105'],
                            itemStyle: {
                                normal: {
                                    offset:5
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
                            radius: ['65px', '80px'],
                            label: {
                                normal: {
                                    show: false
                                }
                            },
                            center: ['135', '105'],
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
            this.$http.post(this.$api.BID_FRAME,{com_id:this.$store.getters.com_id,type:'内圈'})
                .then(res => {
                    console.log('交易分布',res)
                }, err => {
                    this.$api.errcallback(err)
                })
                .catch(err=>{
                    this.$api.errcallback(err)
                })
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

