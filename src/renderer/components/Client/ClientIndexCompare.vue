<script>
	import DataIndex from '@/components/Home/DataIndex'
	export default {
	    name:'clientindex',
		data(){
	        return{
                indexData:{
                    shijiliang:'12311.00',
                    shijiTongbi:'12.21%',
                    shijiHuanbi:'12.21%',
                    yucePiancha:'12311.00',
                    yuceTongbi:'12.21%',
                    yuceHuanbi:'12.21%',
                    shenbaoPiancha:'12311.00',
                    shenbaoTongbi:'12.21%',
                    shenbaoHuanbi:'12.21%',
                    goudianPiancha:'12311.00',
                    goudianTongbi:'12.21%',
                    goudianHuanbi:'12.21%',
                },
                trendUp:true,
                trendDown:true,
		        chartOption1:{
                    title: {
                        text: "日电量同比",
                        textStyle:{
                            fontSize:'14'
                        },
                        left:'55',
                        bottom:'5'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    xAxis:{
                        type: 'category',
                        data: ["1968/10/4", "1968/10/5", "1968/10/6", "1968/10/7", "1968/10/8", "1968/10/9", "1968/10/10", "1968/10/11", "1968/10/12", "1968/10/13", "1968/10/14", "1968/10/15","1968/10/4", "1968/10/5", "1968/10/6", "1968/10/7", "1968/10/8", "1968/10/9", "1968/10/10", "1968/10/11", "1968/10/12", "1968/10/13", "1968/10/14", "1968/10/15"],
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
                            data: [184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30,184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30]
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
                            data: [ 276, 284, 261, 49, 66, 175, 46, 275, 58, 12, 210, 14, 276, 284, 261, 49, 66, 175, 46, 275, 58, 12, 210, 14]
                        }

                    ]
                },
		        chartOption2:{
                    title: {
                        text: "日电量同比",
                        textStyle:{
                            fontSize:'14'
                        },
                        left:'55',
                        bottom:'5'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    xAxis:{
                        type: 'category',
                        data: ["1968/10"],
                        nameTextStyle:{
                            fontSize:12
                        },
//	                    控制x轴隔几个显示
                        axisLabel :{
                            interval:1
                        }

                    }
                    ,
                    yAxis: {
                        show:false
                    },
                    series: [

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
                            data: [184]
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
                            data: [ 276]
                        }

                    ]
                },
		        chartOption3:{
                    title: {
                        text: "月电量同比",
                        textStyle:{
                            fontSize:'14'
                        },
                        left:'55',
                        bottom:'5'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    xAxis:{
                        type: 'category',
                        data: ["1968/10"],
                        nameTextStyle:{
                            fontSize:12
                        },
//	                    控制x轴隔几个显示
                        axisLabel :{
                            interval:1
                        }

                    }
                    ,
                    yAxis: {
                        show:false
                    },
                    series: [

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
                            data: [184]
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
                            data: [ 276]
                        }

                    ]
                },
	        }
		},
        mounted() {
            this.drawBar1(this.chartOption1);
            this.drawBar2(this.chartOption2);
            this.drawBar3(this.chartOption3);
        },
        methods: {
            drawBar1(option = this.chartOption1) {
                // 基于准备好的dom，初始化echarts实例
                let compare1Chart = this.$echarts.init(document.getElementById('compare-bar-1'));
                // 绘制图表
                compare1Chart.setOption(option);
            },
	        drawBar2(option = this.chartOption2) {
                // 基于准备好的dom，初始化echarts实例
                let compare2Chart = this.$echarts.init(document.getElementById('compare-bar-2'));
                // 绘制图表
                compare2Chart.setOption(option);
            }
            ,drawBar3(option = this.chartOption3) {
                // 基于准备好的dom，初始化echarts实例
                let compare3Chart = this.$echarts.init(document.getElementById('compare-bar-3'));
                // 绘制图表
                compare3Chart.setOption(option);
            }
        },
		components:{
			'data-index':DataIndex
		}
	}
</script>
<template>
	<div>

		<div class="index-container">
			<div class="data-panel data-index relative">
				<h3 class="title">户号指数</h3>

				<ul class="index-title fr">
					<li><span class="count">实际月用电量</span><span class="tongbi-rate">同比</span><span
							class="huanbi-rate">环比</span></li>
					<li><span class="count">预测月偏差</span><span class="tongbi-rate">同比</span><span
							class="huanbi-rate">环比</span></li>
					<li><span class="count">申报月偏差</span><span class="tongbi-rate">同比</span><span
							class="huanbi-rate">环比</span></li>
					<li><span class="count">购电月偏差</span><span class="tongbi-rate">同比</span><span
							class="huanbi-rate">环比</span></li>
				</ul>
				<div class="tongbi-container">

					<span class="fl huhao">0000000000</span>
					<ul class="tongbi fr">
						<li><span class="count">{{indexData.shijiliang}}</span> <span class="tongbi-rate">{{indexData.shijiTongbi}}<i
								class="trend" v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span><span class="huanbi-rate">{{indexData.shijiHuanbi}}<i
								class="trend" v-bind:class="{trendUp:!trendUp,trendDown:trendDown}"></i></span>
						</li>
						<li><span class="count">{{indexData.yucePiancha}}</span> <span class="tongbi-rate">{{indexData.yuceTongbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span><span class="huanbi-rate">{{indexData.yuceHuanbi}}<i
								class="trend" v-bind:class="{trendUp:!trendUp,trendDown:trendDown}"></i></span>
						</li>
						<li><span class="count">{{indexData.shenbaoPiancha}}</span> <span class="tongbi-rate">{{indexData.shenbaoTongbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span><span class="huanbi-rate">{{indexData.shenbaoHuanbi}}<i
								class="trend" v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
						</li>
						<li><span class="count">{{indexData.goudianPiancha}}</span> <span class="tongbi-rate">{{indexData.goudianTongbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span><span class="huanbi-rate">{{indexData.goudianHuanbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
						</li>

					</ul>
				</div>
				<div class="tongbi-container">

					<span class="fl huhao">0000000000</span>
					<ul class="tongbi fr">
						<li><span class="count">{{indexData.shijiliang}}</span> <span class="tongbi-rate">{{indexData.shijiTongbi}}<i
								class="trend" v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span><span class="huanbi-rate">{{indexData.shijiHuanbi}}<i
								class="trend" v-bind:class="{trendUp:!trendUp,trendDown:trendDown}"></i></span>
						</li>
						<li><span class="count">{{indexData.yucePiancha}}</span> <span class="tongbi-rate">{{indexData.yuceTongbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span><span class="huanbi-rate">{{indexData.yuceHuanbi}}<i
								class="trend" v-bind:class="{trendUp:!trendUp,trendDown:trendDown}"></i></span>
						</li>
						<li><span class="count">{{indexData.shenbaoPiancha}}</span> <span class="tongbi-rate">{{indexData.shenbaoTongbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span><span class="huanbi-rate">{{indexData.shenbaoHuanbi}}<i
								class="trend" v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
						</li>
						<li><span class="count">{{indexData.goudianPiancha}}</span> <span class="tongbi-rate">{{indexData.goudianTongbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span><span class="huanbi-rate">{{indexData.goudianHuanbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
						</li>

					</ul>
				</div>
			</div>
		</div>
		<div class="chart-container">
			<div id="compare-bar-1" class="data-panel data-index fl" style="width: 924px;height: 300px;">

			</div>
			<div id="compare-bar-2" class="data-panel data-index fr" style="width: 202px;height: 300px;">

			</div>
			<div id="compare-bar-3" class="data-panel data-index fr" style="width: 202px;height: 300px;">

			</div>
		</div>
	</div>
</template>
<style scoped>
	.index-container{
		margin-left: 205px;
		margin-top: 139px;
	}
	.chart-container{
		margin-top: 15px;
		margin-left: 225px;
		width: 1447px;
		height: 300px;
		background-color: #fff;
	}
	/*数据指数*/
	.data-index {
		width: 1447px;
		background-color: #fff;
		padding: 10px;
	}

	.data-index span {
		display: inline;
		font-size: 14px;
	}
	.huhao{
		margin-top: 10px;
	}
	.tongbi-container{
		margin-top: 25px;
		width: 1447px;
		height: 30px;
		overflow: hidden;
	}
	.data-index li, .data-index h3 {
		display: inline-block;
		vertical-align: top;
	}
	.data-index .huhao {
		margin-left: 30px;
	}
	.data-index .index-title {
		margin-right: 7px;
		margin-top: 10px;
	}
	.data-index .index-title li span{
		color: #999;
	}
	.data-index li {
		width: 271px;
		height: 30px;
		background-color: #F6F7FB;
		font-size: 14px;
		text-align: center;
		margin-left: 40px;
		padding: 5px;
		box-sizing: border-box;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-around;
		float: left;
		position: relative;
	}

	.data-index li span {
		position: absolute;
		height: 15px;
		line-height: 15px;
		color: #444;
	}

	.data-index li span.count {
		width: 111px;
		top: 8px;
		left: -5px;
	}

	.data-index li span.tongbi-rate {
		width: 80px;
		top: 8px;
		left: 106px;
	}

	.data-index li span.huanbi-rate {
		width: 80px;
		top: 8px;
		right: 0;
	}

	.data-index .index-title li span:nth-child(3) {
		border-left: 2px solid #B3B4B5;

	}

	.data-index .tongbi li {
		top:5px;
		background-color: #fff;
	}

	.data-index .tongbi {
		font-size: 14px;
		margin-right: 20px;

	}

	.data-index .trend {
		display: inline-block;
		width: 15px;
		height: 15px;
		line-height: 15px;
		margin-left: 5px;
		vertical-align: middle;
	}

	.trendUp {

		background: url('../../assets/icons.png') no-repeat -385px -85px;
	}

	.trendDown {
		background: url('../../assets/icons.png') no-repeat -385px -103px;
	}
</style>
