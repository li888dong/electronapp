<style>
	.power-load-chart .typeSwich {
		border-bottom: solid 1px #eee;
		right: 0;
		left: 0;
		top: 10px;
		margin:0 20px;
		height: 30px;
		z-index: 999;
	}

	.power-load-chart .typeSwich li {
		margin-left: 20px;
		width: 24px;
		height: 24px;
		float: right;
		border-radius: 50%;
		background-color: #eeeeee;
		border: 1px solid #999;
		text-align: center;
		line-height: 24px;
		cursor: pointer;
		color: #828282;
	}
	.power-load-chart .typeSwich .btnSelected{

	}
	.danwei{
		border: none!important;
		background-color: #fff!important;
	}
	.danwei span{
		position: absolute;
		top: 30px;
		right: 20px;
		color: #868686;

	}
</style>
<template>
	<div class="relative">
		<ul class="absolute typeSwich btn-group">
			<li v-bind:class="{btnSelected:powerRealtimeType==='月'}" class="btn" @click="powerRealtimeTypeSwitch('月')">
				月
			</li>
			<li v-bind:class="{btnSelected:powerRealtimeType==='日'}" class="btn" @click="powerRealtimeTypeSwitch('日')">
				日
			</li>
			<li v-bind:class="{btnSelected:powerRealtimeType==='15'}" class="btn"
			    @click="powerRealtimeTypeSwitch('15')">15
			</li>
			<li class="danwei"><span>单位Mw.h</span></li>
		</ul>
		<div id="powerChart" :style="{width: '1662px', height: '383px',margin:'0 auto'}">

		</div>
	</div>

</template>

<script>

    export default {
        name: 'powerChart',
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
	                    top:42,
	                    itemWidth:14,
                        data: ['申报电量', '预测电量','长协购电量','竞价购电量', '实时电量', '谷段电量', '平段电量','峰段电量',]
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
                    dataZoom: [ {
                        type: 'slider',
	                    bottom:0,
                        startValue: '1968/10/4',
                        endValue: '1968/10/28'
                    }],
	                color:['#f35e7a','#fc8b40','#ab7aee','#31c9d7','#6ec71e','#14d86b','#818af8','#edb00d'],
                    series: [
                        {
                            name: '申报电量',
                            type: 'bar',
                            data: [184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30, 187, 130, 94, 169, 53, 161, 45, 109, 103, 162, 32, 228, 270, 226, 79, 226, 206, 65, 34, 77, 5, 85, 26, 158, 276, 284, 261, 49, 66, 175, 46, 275, 58, 12, 210, 14, 48]
                        },
                        {
                            name: '预测电量',
                            type: 'bar',
                            data: [184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30, 187, 130, 94, 169, 53, 161, 45, 109, 103, 162, 32, 228, 270, 226, 79, 226, 206, 65, 34, 77, 5, 85, 26, 158, 276, 284, 261, 49, 66, 175, 46, 275, 58, 12, 210, 14, 48]
                        },
	                    {
                            name: '长协购电量',
                            type: 'bar',
                            data: [184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30, 187, 130, 94, 169, 53, 161, 45, 109, 103, 162, 32, 228, 270, 226, 79, 226, 206, 65, 34, 77, 5, 85, 26, 158, 276, 284, 261, 49, 66, 175, 46, 275, 58, 12, 210, 14, 48]
                        }, {
                            name: '竞价购电量',
                            type: 'bar',
                            data: [184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30, 187, 130, 94, 169, 53, 161, 45, 109, 103, 162, 32, 228, 270, 226, 79, 226, 206, 65, 34, 77, 5, 85, 26, 158, 276, 284, 261, 49, 66, 175, 46, 275, 58, 12, 210, 14, 48]
                        },
                        {
                            name: '实时电量',
                            type: 'bar',
                            data: [184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30, 187, 130, 94, 169, 53, 161, 45, 109, 103, 162, 32, 228, 270, 226, 79, 226, 206, 65, 34, 77, 5, 85, 26, 158, 276, 284, 261, 49, 66, 175, 46, 275, 58, 12, 210, 14, 48].map((i) => i * 3),
                        },
	                    {
                            name: '谷段电量',
                            type: 'bar',
                            barWidth : "3%",
                            stack: '实时电量',
                            data: [184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30, 187, 130, 94, 169, 53, 161, 45, 109, 103, 162, 32, 228, 270, 226, 79, 226, 206, 65, 34, 77, 5, 85, 26, 158, 276, 284, 261, 49, 66, 175, 46, 275, 58, 12, 210, 14, 48]
                        },
                        {
                            name: '平段电量',
                            type: 'bar',
                            stack: '实时电量',
                            data: [184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30, 187, 130, 94, 169, 53, 161, 45, 109, 103, 162, 32, 228, 270, 226, 79, 226, 206, 65, 34, 77, 5, 85, 26, 158, 276, 284, 261, 49, 66, 175, 46, 275, 58, 12, 210, 14, 48]
                        },
                        {
                            name: '峰段电量',
                            type: 'bar',
                            stack: '实时电量',
                            data: [184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30, 187, 130, 94, 169, 53, 161, 45, 109, 103, 162, 32, 228, 270, 226, 79, 226, 206, 65, 34, 77, 5, 85, 26, 158, 276, 284, 261, 49, 66, 175, 46, 275, 58, 12, 210, 14, 48]
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
                let powerChart = this.$echarts.init(document.getElementById('powerChart'));
                // 绘制图表
                powerChart.setOption(option);
            }
        }
    }
</script>

