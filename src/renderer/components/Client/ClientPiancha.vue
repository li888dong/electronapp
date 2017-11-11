<script>
	export default {
	    name:'piancha',
		data(){
	        return{
                chartOption1:{
                    title: {
                        text: "采集偏差",
                        textStyle:{
                            fontSize:'14'
                        },
                        left:'105',
                        top:'5'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    xAxis:{
                        type: 'category',
                        data: ["1968/10/4", "1968/10/5", "1968/10/6", "1968/10/7", "1968/10/8", "1968/10/9", "1968/10/10", "1968/10/11", "1968/10/12"],
                        nameTextStyle:{
                            fontSize:12
                        },
//	                    控制x轴隔几个显示
                        axisLabel :{
                            interval:2
                        }

                    }
                    ,
                    yAxis: [
                        {
                            position:'right',
                            type: 'value',
                            boundaryGap: 0
                        }
                    ],
                    dataZoom: [ {
                        type: 'slider',
                        bottom:-225,
                        startValue: '1968/10/4',
                        endValue: '1968/10/8'
                    }],
                    series: [
//                        { // For shadow
//                            type: 'bar',
//                            itemStyle: {
//                                normal: {color: 'rgba(0,0,0,0.05)'}
//                            },
//                            barGap:'-100%',
//                            barCategoryGap:'40%',
//                            data: [300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300],
//                            animation: false
//                        },
                        {
                            name: '今年',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#83bff6'},
                                            {offset: 0.5, color: '#188df0'},
                                            {offset: 1, color: '#188df0'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#2378f7'},
                                            {offset: 0.7, color: '#2378f7'},
                                            {offset: 1, color: '#83bff6'}
                                        ]
                                    )
                                }
                            },
                            data: [184, 160, 74, 60, 207, 158, 75, 156, 217]
                        },
                        {
                            name: '去年',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#83bff6'},
                                            {offset: 0.5, color: '#188df0'},
                                            {offset: 1, color: '#188df0'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#2378f7'},
                                            {offset: 0.7, color: '#2378f7'},
                                            {offset: 1, color: '#83bff6'}
                                        ]
                                    )
                                }
                            },
                            data: [ 276, 284, 261, 49, 66, 175, 46, 275,150]
                        }

                    ]
                },
                chartOption2:{
                    title: {
                        text: "客戶預測",
                        textStyle:{
                            fontSize:'14'
                        },
                        left:'105',
                        top:'5'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    xAxis:{
                        type: 'category',
                        data: ["1968/10/4", "1968/10/5", "1968/10/6", "1968/10/7", "1968/10/8", "1968/10/9", "1968/10/10", "1968/10/11", "1968/10/12"],
                        nameTextStyle:{
                            fontSize:12
                        },
//	                    控制x轴隔几个显示
                        axisLabel :{
                            interval:2
                        }

                    }
                    ,
                    yAxis: [
                        {
                            position:'right',
                            type: 'value',
                            boundaryGap: 0
                        }
                    ],
                    dataZoom: [ {
                        type: 'slider',
                        bottom:-225,
                        startValue: '1968/10/4',
                        endValue: '1968/10/8'
                    }],
                    series: [
//                        { // For shadow
//                            type: 'bar',
//                            itemStyle: {
//                                normal: {color: 'rgba(0,0,0,0.05)'}
//                            },
//                            barGap:'-100%',
//                            barCategoryGap:'40%',
//                            data: [300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300],
//                            animation: false
//                        },
                        {
                            name: '今年',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#83bff6'},
                                            {offset: 0.5, color: '#188df0'},
                                            {offset: 1, color: '#188df0'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#2378f7'},
                                            {offset: 0.7, color: '#2378f7'},
                                            {offset: 1, color: '#83bff6'}
                                        ]
                                    )
                                }
                            },
                            data: [184, 160, 74, 60, 207, 158, 75, 156, 217]
                        },
                        {
                            name: '去年',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#83bff6'},
                                            {offset: 0.5, color: '#188df0'},
                                            {offset: 1, color: '#188df0'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#2378f7'},
                                            {offset: 0.7, color: '#2378f7'},
                                            {offset: 1, color: '#83bff6'}
                                        ]
                                    )
                                }
                            },
                            data: [ 276, 284, 261, 49, 66, 175, 46, 275,150]
                        }

                    ]
                },
                chartOption3:{
                    title: {
                        text: "公司预测",
                        textStyle:{
                            fontSize:'14'
                        },
                        left:'105',
                        top:'5'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    xAxis:{
                        type: 'category',
                        data: ["1968/10/4", "1968/10/5", "1968/10/6", "1968/10/7", "1968/10/8", "1968/10/9", "1968/10/10", "1968/10/11", "1968/10/12"],
                        nameTextStyle:{
                            fontSize:12
                        },
//	                    控制x轴隔几个显示
                        axisLabel :{
                            interval:2
                        }

                    },
                    yAxis: [
                        {
                            position:'right',
                            type: 'value',
                            boundaryGap: 0
                        }
                    ],
                    dataZoom: [ {
                        type: 'slider',
                        bottom:-5,
                        startValue: '1968/10/4',
                        endValue: '1968/10/8'
                    }],
                    series: [
//                        { // For shadow
//                            type: 'bar',
//                            itemStyle: {
//                                normal: {color: 'rgba(0,0,0,0.05)'}
//                            },
//                            barGap:'-100%',
//                            barCategoryGap:'40%',
//                            data: [300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300],
//                            animation: false
//                        },
                        {
                            name: '今年',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#83bff6'},
                                            {offset: 0.5, color: '#188df0'},
                                            {offset: 1, color: '#188df0'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#2378f7'},
                                            {offset: 0.7, color: '#2378f7'},
                                            {offset: 1, color: '#83bff6'}
                                        ]
                                    )
                                }
                            },
                            data: [184, 160, 74, 60, 207, 158, 75, 156, 217]
                        },
                        {
                            name: '去年',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#83bff6'},
                                            {offset: 0.5, color: '#188df0'},
                                            {offset: 1, color: '#188df0'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#2378f7'},
                                            {offset: 0.7, color: '#2378f7'},
                                            {offset: 1, color: '#83bff6'}
                                        ]
                                    )
                                }
                            },
                            data: [ 276, 284, 261, 49, 66, 175, 46, 275,150],
                            //          设置可拖动区间

                        }

                    ]
                }
	        }
		},
		mounted(){
			this.drawBar()
        },
		methods:{
		    drawBar(){
                let compare1Chart = this.$echarts.init(document.getElementById('caiji'));
                let compare2Chart = this.$echarts.init(document.getElementById('kehuyuce'));
                let compare3Chart = this.$echarts.init(document.getElementById('gongsiyuce'));
                compare1Chart.setOption(this.chartOption1);
                compare2Chart.setOption(this.chartOption2);
                compare3Chart.setOption(this.chartOption3);
                compare1Chart.group = 'group1';
                compare2Chart.group = 'group2';
                compare3Chart.group = 'group3';
                this.$echarts.connect([compare1Chart,compare2Chart,compare3Chart])
            }
		}
	}
</script>
<template>
	<div>
		<div class="piancha-container">
			<div class="data-panel client-piancha relative">
				<h3 class="title fl">偏差分析</h3>
				<div class="btn-group fr">
					<button class="button btnSelected" >年度选择</button>
					<button class="button" >上一年</button>
					<button class="button btnSelected" >2017年</button>
					<button class="button" >下一年</button>

				</div>
				<div class="char-group">
					<div id="caiji">

					</div>
					<div id="kehuyuce">

					</div>
					<div id="gongsiyuce">

					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.piancha-container{
		margin-left: 225px;
		margin-top: 153px;
		background-color: #fff;
	}
	.client-piancha{
		width: 1400px;
	}
	.char-group>div{
		width: 1259px;
		height: 258px;
	}
</style>