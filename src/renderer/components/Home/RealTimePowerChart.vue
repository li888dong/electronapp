<style scoped>
	.chart-container{
		height: 377px;
	}
	.danwei{
		position: absolute;
		top: 55px;
		right: 3px;
		border: none!important;
		background-color: transparent!important;
	}

	.btn-group{
		z-index: 10;
		margin-top: -8px;
	}
</style>
<template>
	<Card class="chart-container">

		<h3 slot="title">实时电量负荷</h3>

		<div class="btn-group relative" slot="extra">
			<RadioGroup v-model="powerRealtimeType" type="button" v-on:on-change="powerRealtimeTypeSwitch">
				<Radio label="15"></Radio>
				<Radio label="日"></Radio>
				<Radio label="月"></Radio>
			</RadioGroup>
			<span class="danwei">单位Mw.h</span>
		</div>

		<div id="powerChart" style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;">

		</div>
	</Card>

</template>

<script>

    export default {
        name: 'powerChart',
        data() {
            return {
                powerRealtimeType: '15',
                powerdata: [],
                powerdate: [],
            }
        },
	    computed:{
            chartOption1:function () {
	            return {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'line',        // 默认为直线，可选为：'line' | 'shadow'
	                        lineStyle:{
                                color:'#4f8af9'
	                        }
                        }
                    },
                    legend: {
                        left:17,
                        top:60,
                        itemWidth:16,
                        itemHeight:16,

                        data: ['实时电量']
                    },
                    grid: {
                        top:'100',
                        left: '20',
                        right: '20',
                        bottom: '8%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap : false,
                            data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
                        }
                    ],
                    yAxis: [
                        {
                            position:'right',
                            type: 'value',
                            boundaryGap: 0
                        }
                    ],
                        //设置可拖动区间
                    dataZoom: [ {
                        bottom:'5%',
                        start: '60',
                        end: '100',
                        fillerColor:'rgba(79,138,249,0.3)',
                        handleStyle:{
                            color:'#4f8af9'
                        }
                    }],
                    color:['#4f8af9','#6ec71e','#f56e6a','#fc8b40','#818af8','#31c9d7','#f35e7a','#ab7aee','#14d68b','#edb00d'],
                    series:[
                        {
                            name: '实时电量',
                            type: 'line',
                            smooth:true,
                            itemStyle: {normal: {areaStyle: {type: 'default',opacity:0.08}}},
                            data: [184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30, 187, 130, 94, 169, 53, 161, 45, 109,]
                        }
                    ]
                }
            },
            chartOption2:function () {
                let dayList = [],
	                dayData = [];
                for (let i = 1;i<30;i++){
                    dayList.push(i+'日');
                    dayData.push(Math.random().toFixed(2)*1000)
                }
	            return {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        left:17,
                        top:60,
                        itemWidth:16,
                        itemHeight:16,

                        data: ['实时电量', '谷段电量', '平段电量','峰段电量',]
                    },
                    grid: {
                        top:'100',
                        left: '20',
                        right: '20',
                        bottom: '8%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
	                        data:dayList
                        }
                    ],
                    yAxis: [
                        {
                            position:'right',
                            type: 'value',
                            boundaryGap: 0
                        }
                    ],
                    // 设置可拖动区间
                    dataZoom: [ {
                        type: 'slider',
                        bottom:0,
                        start:0,
	                    end:50
                    }],
                    color:['#4f8af9','#6ec71e','#f56e6a','#fc8b40','#818af8','#31c9d7','#f35e7a','#ab7aee','#14d68b','#edb00d'],
                    series:[
                        {
                            name: '实时电量',
                            type: 'bar',
                            data: dayData.map((i) => i * 3),
                        },
                        {
                            name: '谷段电量',
                            type: 'bar',
	                        barWidth:'10%',
                            stack: '实时电量',
	                        data: dayData
                        },
                        {
                            name: '平段电量',
                            type: 'bar',
                            stack: '实时电量',
	                        data:dayData
                        },
                        {
                            name: '峰段电量',
                            type: 'bar',
                            stack: '实时电量',
	                        data:dayData
                        }

                    ]
                }
            },
            chartOption3:function () {
	            return {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        left:17,
                        top:60,
                        itemWidth:16,
                        itemHeight:16,

                        data: ['申报电量', '预测电量','长协购电量','竞价购电量', '实时电量', '谷段电量', '平段电量','峰段电量',]
                    },
                    grid: {
                        top:'100',
                        left: '20',
                        right: '20',
                        bottom: '8%',
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
                    //设置可拖动区间
                    dataZoom: [ {
                        type: 'slider',
                        bottom:0,
                        startValue: '1968/10/4',
                        endValue: '1968/10/28'
                    }],
                    color:['#4f8af9','#6ec71e','#f56e6a','#fc8b40','#818af8','#31c9d7','#f35e7a','#ab7aee','#14d68b','#edb00d'],
                    series:[
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
            this.drawLine();
        },
        methods: {
            powerRealtimeTypeSwitch(type) {
                this.powerRealtimeType = type;
                this.drawLine();
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
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let powerChart = this.$echarts.init(document.getElementById('powerChart'));
                if (this.powerRealtimeType === '15'){
                    powerChart.setOption(this.chartOption1,true);
                }else if (this.powerRealtimeType === '日'){
                    powerChart.setOption(this.chartOption2,true);
                }else {
                    powerChart.setOption(this.chartOption3,true);
                }
                // 绘制图表

            }
        }
    }
</script>

