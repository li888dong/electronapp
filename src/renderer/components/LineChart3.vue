<style scoped>
	.relative{
		background-color: #fff;
	}
</style>
<template>
	<panel class="relative">
		<span style="font-size: 14px;font-weight: bold;position: absolute;top: 5px;left: 15px;width: 100px;">有功功率</span>
		<div @click="modal3 = true;drawModal1()" style="position: absolute;z-index: 999;font-size: 14px;cursor: pointer;right: 10px;top: 5px;color: #31c9d7">
			<Icon type="qr-scanner"></Icon> &nbsp;全屏
		</div>
		<Modal v-model="modal3"
		       title="有功功率"
		       width="1500">
			<div id="lineModalChart3" :style="{width: '1449px', height: '543px',margin:'15px 0 0 20px'}">

			</div>
			<div slot="footer">

			</div>
		</Modal>
		<div id="lineChart3" :style="{width: '449px', height: '253px'}">

		</div>
	</panel>

</template>

<script>

    export default {
        name: 'lineChart',
        data() {
            return {
                modal3:false,
                powerRealtimeType: '15',
                powerdata: [],
                powerdate: [],
                chartOption1: {
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
                    },
                    grid: {
                        top:'40',
                        left: 15,
                        right: 0,
                        bottom: '6%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            boundaryGap : false,
                            axisLine: {onZero: false},
                            type: 'category',
                            data: ["1968/10/4", "1968/10/5", "1968/10/6", "1968/10/7", "1968/10/8", "1968/10/9", "1968/10/10", "1968/10/11", "1968/10/12", "1968/10/13", "1968/10/14", "1968/10/15", "1968/10/16", "1968/10/17", "1968/10/18", "1968/10/19", "1968/10/20", "1968/10/21", "1968/10/22", "1968/10/23", "1968/10/24", "1968/10/25", "1968/10/26", "1968/10/27", "1968/10/28", "1968/10/29", "1968/10/30", "1968/10/31", "1968/11/1", "1968/11/2", "1968/11/3", "1968/11/4", "1968/11/5", "1968/11/6", "1968/11/7", "1968/11/8", "1968/11/9", "1968/11/10", "1968/11/11", "1968/11/12", "1968/11/13", "1968/11/14", "1968/11/15", "1968/11/16", "1968/11/17", "1968/11/18", "1968/11/19", "1968/11/20", "1968/11/21"]
                        }
                    ],
                    yAxis: [
                        {
                            position:'right',
                            type: 'value',
                            boundaryGap: 0,

                            axisLabel: {
                                color:'#999'
                            },
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                        }
                    ],
//          设置可拖动区间
                    color:['#48C3F3'],
                    dataZoom:{
                        bottom:-3,
                        start:0,
                        end:10
                    },
                    series: [
                        {
                            name: '申报电量',
                            type: 'line',
                            smooth:true,
                            itemStyle: {normal: {areaStyle: {type: 'default'}}},
                            data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48]
                        }
                    ]
                },
                chartOption2: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:['河南众企联合售电','111111111','22222222222','asdasdasda','dasfsdgdafasd'],
                        left:20,
                        top:2,
                        itemWidth:14,
                    },
                    grid: {
                        top:'40',
                        left: 0,
                        right: 0,
                        bottom: '6%',
                        containLabel: true
                    },
                    color:['#0089f0','#31c9d7','#f35e7a','#6ec71e','#f57e6a','#818af8'],
                    xAxis: [
                        {
                            type:'category',
                            boundaryGap : false,
                            data: ['2017年01月', '02月', '03月','04月','05月', '06月','07月','08月', '09月', '10月','11月','12月'],
                            splitLine: {show: false},
                            splitArea: {show: false},
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                        }
                    ],
                    yAxis: [
                        {
                            position:'left',
                            type: 'value',
                            boundaryGap: 0,
                            splitArea: {show: false},
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                        }
                    ],
                    dataZoom:{
                        bottom:-5,
                        start:0,
                        end:90
                    },
                    series: [
                        {
                            name: '河南众企联合售电',
                            type: 'line',
                            smooth:true,
                            data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48]
                        },
                        {
                            name: '111111111',
                            type: 'line',
                            smooth:true,
                            data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48].map(i=>i*0.8)
                        },
                        {
                            name: '22222222222',
                            type: 'line',
                            smooth:true,
                            data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48].map(i=>i*0.9)
                        },
                        {
                            name: 'asdasdasda',
                            type: 'line',
                            smooth:true,
                            data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48].map(i=>i*1.1)
                        },
                        {
                            name: 'dasfsdgdafasd',
                            type: 'line',
                            smooth:true,
                            data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48].map(i=>i*1.5)
                        },
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
                let powerChart = this.$echarts.init(document.getElementById('lineChart3'));
                // 绘制图表
                powerChart.setOption(option);
            }, drawModal1(option = this.chartOption2){
                console.log(1)
                // 基于准备好的dom，初始化echarts实例
                let powerChart = this.$echarts.init(document.getElementById('lineModalChart3'));
                // 绘制图表
                powerChart.setOption(option);
            }
        }
    }
</script>

