<style>

</style>
<template>
	<div>
		<div id="completionRate" :style="{width: '100px', height: '100px'}">

		</div>
	</div>

</template>

<script>
    export default {
        name: 'powertimeframe',
        data() {
            return {
                chartOption2: {
                    series: [
                        {
                            name: '完成率',
                            type: 'pie',
                            selectedMode: 'single',
                            label: {
                                normal: {
                                    position: 'inner'
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [
                                {value: 335, name: '已完成'},
                                {value: 679, name: '未完成'},
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
                let completionRateChart = this.$echarts.init(document.getElementById('completionRate'));
                // 绘制图表
                completionRateChart.setOption(option);
            }
        }
    }
</script>

