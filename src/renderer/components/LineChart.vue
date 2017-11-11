<style scoped>
	.relative{
		background-color: #fff;
		margin:15px 0 0 20px
	}
</style>
<template>
	<div class="relative">
		<div id="lineChart" :style="{width: '562px', height: '183px',margin:'15px 0 0 20px'}">

		</div>
	</div>

</template>

<script>

    export default {
        name: 'lineChart',
        data() {
            return {
                powerRealtimeType: '15',
                powerdata: [],
                powerdate: [],
                chartOption1: {
                    title: {
                        text: "实时电量负荷",
	                    textStyle:{
                            fontSize:'14'
                        },
	                    left:'5',
	                    top:'5'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        left:20,
	                    top:22,
	                    itemWidth:14,
                        data: ['申报电量', '预测电量','长协购电量']
                    },
                    grid: {
                        top:'20%',
                        left: '20',
                        right: '3%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ["1968/10/4", "1968/10/5", "1968/10/6", "1968/10/7", "1968/10/8", "1968/10/9", "1968/10/10", "1968/10/11", "1968/10/12", "1968/10/13", "1968/10/14", "1968/10/15", "1968/10/16", "1968/10/17", "1968/10/18", "1968/10/19", "1968/10/20", "1968/10/21", "1968/10/22", "1968/10/23", "1968/10/24", "1968/10/25", "1968/10/26", "1968/10/27", "1968/10/28", "1968/10/29", "1968/10/30", "1968/10/31", "1968/11/1", "1968/11/2", "1968/11/3", "1968/11/4", "1968/11/5", "1968/11/6", "1968/11/7", "1968/11/8", "1968/11/9", "1968/11/10", "1968/11/11", "1968/11/12", "1968/11/13", "1968/11/14", "1968/11/15", "1968/11/16", "1968/11/17", "1968/11/18", "1968/11/19", "1968/11/20", "1968/11/21"]
                        }
                    ],
                    yAxis: [
                        {
                            position:'right',
                            type: 'value',
                            boundaryGap: 0
                        }
                    ],
//          设置可拖动区间
	                color:['#f35e7a','#fc8b40','#ab7aee'],
                    series: [
                        {
                            name: '申报电量',
                            type: 'line',
                            smooth:true,
                            itemStyle: {normal: {areaStyle: {type: 'default'}}},
                            data: [184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30, 187, 130, 94, 169, 53, 161, 45, 109, 103, 162, 32, 228, 270, 226, 79, 226, 206, 65, 34, 77, 5, 85, 26, 158, 276, 284, 261, 49, 66, 175, 46, 275, 58, 12, 210, 14, 48]
                        },
                        {
                            name: '预测电量',
                            type: 'line',
                            smooth:true,
                            itemStyle: {normal: {areaStyle: {type: 'default'}}},
                            data: [184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30, 187, 130, 94, 169, 53, 161, 45, 109, 103, 162, 32, 228, 270, 226, 79, 226, 206, 65, 34, 77, 5, 85, 26, 158, 276, 284, 261, 49, 66, 175, 46, 275, 58, 12, 210, 14, 48].map((i) => i * 3)
                        },
	                    {
                            name: '长协购电量',
                            type: 'line',
                            smooth:true,
                            itemStyle: {normal: {areaStyle: {type: 'default'}}},
                            data: [184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30, 187, 130, 94, 169, 53, 161, 45, 109, 103, 162, 32, 228, 270, 226, 79, 226, 206, 65, 34, 77, 5, 85, 26, 158, 276, 284, 261, 49, 66, 175, 46, 275, 58, 12, 210, 14, 48].map((i) => i * 2)
                        }

                    ]
                }
            }
        },
        mounted() {
            this.initData();
            this.drawLine(this.chartOption1);
        },
        methods: {
            powerRealtimeTypeSwitch(type) {
                this.powerRealtimeType = type
            },
            initData() {
                var base = +new Date(1968, 9, 3);
                var oneDay = 24 * 3600 * 1000;
                var date = [];
                var data = [];
                for (var i = 1; i < 50; i++) {
                    var now = new Date(base += oneDay);
                    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
                    data.push(Math.round((Math.random() * 300)));
                }
                this.powerdate = date;
                this.powerdata = data;
            },
            drawLine(option = this.chartOption1) {
                // 基于准备好的dom，初始化echarts实例
                let powerChart = this.$echarts.init(document.getElementById('lineChart'));
                // 绘制图表
                powerChart.setOption(option);
            }
        }
    }
</script>

