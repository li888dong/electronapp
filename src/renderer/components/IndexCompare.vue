<script>
    export default {
        name: 'indexCompare',
        data() {
            return {
                dateType:'90天',
                indexData: {
                    shijiliang: '12311.00',
                    shijiTongbi: '12.21%',
                    shijiHuanbi: '12.21%',
                    shenbaoPiancha: '12311.00',
                    shenbaoTongbi: '12.21%',
                    shenbaoHuanbi: '12.21%',
                    goudianPiancha: '12311.00',
                    goudianTongbi: '12.21%',
                    goudianHuanbi: '12.21%',
                },

            }
        },
	    computed:{
            chartOption2:function () {
	            return{
                    tooltip:this.$store.getters.chartOption.lineTooltip,
                    legend: {
                        left:-5,
                        top:0,
                        itemWidth:16,
                        itemHeight:16,
                        data: ['整体趋势','竞价趋势','长协趋势']
                    },
                    grid: {
                        top:40,
                        left: 0,
                        right:20,
                        bottom: '6%',
                        containLabel: true
                    },
                    color:this.$store.getters.chartOption.colorList,
                    xAxis: [
                        {
                            type:'category',
                            boundaryGap : false,
                            data: ['01月', '02月', '03月','04月','05月', '06月','07月','08月', '09月', '10月','11月','12月'],
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
                    dataZoom:this.$store.getters.chartOption.dataZoom,
                    series: [
                        {
                            name: '整体趋势',
                            type: 'line',
                            smooth:true,
                            itemStyle: {normal: {areaStyle: {type: 'default'}}},
                            data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48].map(i=>i*Math.random().toFixed(2))
                        },
                        {
                            name: '竞价趋势',
                            type: 'line',
                            smooth:true,
                            itemStyle: {normal: {areaStyle: {type: 'default'}}},
                            data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48].map(i=>i*Math.random().toFixed(2))
                        },
                        {
                            name: '长协趋势',
                            type: 'line',
                            smooth:true,
                            itemStyle: {normal: {areaStyle: {type: 'default'}}},
                            data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48].map(i=>i*Math.random().toFixed(2))
                        },
                    ]
                }
            },
            chartOption1:function () {
                let hangye=['城镇居民','乡村居民','农林牧渔','工业','建筑业','交通运输、仓储和邮政业','信息传输、计算机服务和软件业','商业、住宿和餐饮业','金融、房地产、商务及居民服务业','公共事业及管理组织','关口','趸售'],
	                hangyeData=[];
                for (let i=0;i<12;i++){
                    hangyeData.push(1000*Math.random().toFixed(2));
                }

	            return {
                    tooltip: this.$store.getters.chartOption.barTooltip,
                    grid: {
                        top:20,
                        left: 0,
                        right: 30,
                        bottom: 80,
                        containLabel: true
                    },
                    backgroundColor: '#fff',
                    calculable: true,
                    xAxis: [
                        {
                            boundaryGap : true,
                            type: 'category',
                            axisLabel: {
                                interval: 0,
                                rotate:20
                            },
                            data:hangye
                        }
                    ],
                    yAxis: [
                        {
                            position:'left',
                            type: 'value'
                        }
                    ],
                    color:this.$store.getters.chartOption.colorList,
                    series: [

                        {
                            name: '行业销量',
                            type: 'bar',
	                        barWidth:'30',
                            data: hangyeData
                        }
                    ]
                }
            }

        },
        mounted() {

            this.drawChart();
        },
        methods: {
            dateTypeSwitch(type){
                console.log(type)
            },
            drawChart() {
                // 基于准备好的dom，初始化echarts实例
                let trendChart = this.$echarts.init(document.getElementById('trendChart'));
                // 绘制图表
                trendChart.setOption(this.chartOption2);
                // 基于准备好的dom，初始化echarts实例
                let rateChart = this.$echarts.init(document.getElementById('rateChart'));
                // 绘制图表

                rateChart.setOption(this.chartOption1,true);
            }
        }
    }
</script>
<template>
	<div class="main-container">
		<Row>
			<Card class="data-index" style="height: 200px;">
					<h3 slot="title">售电量指数概况
						<span style="color: #999999;font-size: 12px;padding-left: 5px;"> 每月月初会发布上个月度河南区域售电行业整体指数数据</span>
					</h3>
				<Row type="flex" justify="space-around" gutter="20">
					<Col span="3">

						<Row className="data-title">
							<span>河南区域</span>
						</Row>

						<Row className="data-content">
							<span>2017年11月</span>
						</Row>

						<Row className="data-content">
							<span>2017年10月</span>
						</Row>

					</Col>

					<Col span="4">
						<Row className="data-title">
							<Col span="12">
							<span class="count">长协</span>
							</Col>
							<Col span="12">
							<span class="tongbi-rate">参与竞价</span>
							</Col>

						</Row>
						<Row className="data-content">
							<Col span="12">
							<span class="count">{{indexData.shijiliang}}</span>
							</Col>
							<Col span="12">
							<span class="tongbi-rate">{{indexData.shijiTongbi}}<i class="trend"
							                                                      v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
							</Col>

						</Row>
						<Row className="data-content">
							<Col span="12">
							<span class="count">{{indexData.shijiliang}}</span>
							</Col>
							<Col span="12">
							<span class="tongbi-rate">{{indexData.shijiTongbi}}<i class="trend"
							                                                      v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
							</Col>

						</Row>
					</Col>
					<Col span="4">
					<Row className="data-title">

						<Col span="12">
						<span class="tongbi-rate">长协同比</span>
						</Col>
						<Col span="12">
						<span class="huanbi-rate">长协环比</span>
						</Col>
					</Row>
					<Row className="data-content">
						<Col span="12">
						<span
								class="tongbi-rate">{{indexData.shenbaoTongbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
						</Col>
						<Col span="12">
						<span
								class="huanbi-rate">{{indexData.shenbaoHuanbi}}<i
								class="trend" v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
						</Col>
					</Row>
					<Row className="data-content">

						<Col span="12">
						<span
								class="tongbi-rate">{{indexData.shenbaoTongbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>

						</Col>
						<Col span="12">
						<span
								class="huanbi-rate">{{indexData.shenbaoHuanbi}}<i
								class="trend" v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
						</Col>
					</Row>
					</Col>
					<Col span="4">
					<Row className="data-title">

						<Col span="12">
						<span class="tongbi-rate">竞价同比</span>
						</Col>

						<Col span="12">
						<span
								class="huanbi-rate">竞价环比</span>
						</Col>

					</Row>
					<Row className="data-content">


						<Col span="12">
						<span
								class="tongbi-rate">{{indexData.goudianTongbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
						</Col>

						<Col span="12">
						<span
								class="huanbi-rate">{{indexData.goudianHuanbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
						</Col>


					</Row>
					<Row className="data-content">

						<Col span="12">
						<span
								class="tongbi-rate">{{indexData.goudianTongbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
						</Col>
						<Col span="12">
						<span
								class="huanbi-rate">{{indexData.goudianHuanbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
						</Col>

					</Row>
					</Col>
					<Col span="2">
						<Row className="data-title">

							<Col span="24">
							<span class="tongbi-rate">购电偏差</span>
							</Col>


						</Row>
						<Row className="data-content">



							<Col span="24">
							<span
									class="huanbi-rate">{{indexData.goudianHuanbi}}<i
									class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
							</Col>


						</Row>
						<Row className="data-content">


						<Col span="24">
						<span
								class="huanbi-rate">{{indexData.goudianHuanbi}}<i
								class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
						</Col>

					</Row>
					</Col>
					<Col span="4">
						<Row className="data-title">

							<Col span="12">
							<span class="tongbi-rate">偏差同比</span>
							</Col>

							<Col span="12">
							<span
									class="huanbi-rate">偏差环比</span>
							</Col>

						</Row>
						<Row className="data-content">


							<Col span="12">
							<span
									class="tongbi-rate">{{indexData.goudianTongbi}}<i
									class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
							</Col>

							<Col span="12">
							<span
									class="huanbi-rate">{{indexData.goudianHuanbi}}<i
									class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
							</Col>


						</Row>
						<Row className="data-content">

							<Col span="12">
							<span
									class="tongbi-rate">{{indexData.goudianTongbi}}<i
									class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
							</Col>
							<Col span="12">
							<span
									class="huanbi-rate">{{indexData.goudianHuanbi}}<i
									class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
							</Col>

						</Row>
					</Col>
				</Row>
			</Card>
		</Row>
		<Row className="mgt_15" gutter=20>
			<Col span="18">
				<Row>
					<Card>

						<h3 slot="title">售电量指数趋势</h3>
						<div slot="extra" class="btn-group">

							<RadioGroup v-model="dateType" type="button" v-on:on-change="dateTypeSwitch">
								<Radio label="90天"></Radio>
								<Radio label="半年"></Radio>
								<Radio label="全部"></Radio>
							</RadioGroup>
						</div>

						<Row style="height: 240px">
							<div id="trendChart" style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;">

							</div>
						</Row>
					</Card>
				</Row>
				<Row className="mgt_15">
					<Card>
						<h3 slot="title">售电量行业占比 </h3>
						<div id="rateChart" style="height: 360px;margin: 0;">

						</div>

					</Card>
				</Row>
			</Col>
			<Col span="6">
			<Card class="ranklist-container">
				<h3 slot="title">区域参与电量排行</h3>
				<ul>
					<li><span class="ranking">1.&nbsp; </span><span class="city">信阳市</span><span class="rate">88.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.88+'px'}"></span></li>
					<li><span class="ranking">2.&nbsp; </span><span class="city">洛阳市</span><span class="rate">77.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.77+'px'}"></span></li>
					<li><span class="ranking">3.&nbsp; </span><span class="city">驻马店</span><span class="rate">66.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.66+'px'}"></span></li>
					<li><span class="ranking">4.&nbsp; </span><span class="city">周口市</span><span class="rate">55.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.55+'px'}"></span></li>
					<li><span class="ranking">5.&nbsp; </span><span class="city">商丘市</span><span class="rate">44.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.44+'px'}"></span></li>
					<li><span class="ranking">6.&nbsp; </span><span class="city">三门峡</span><span class="rate">33.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.33+'px'}"></span></li>
					<li><span class="ranking">7.&nbsp; </span><span class="city">新乡市</span><span class="rate">22.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.22+'px'}"></span></li>
					<li><span class="ranking">8.&nbsp; </span><span class="city">平顶山</span><span class="rate">11.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.11+'px'}"></span></li>
					<li><span class="ranking">9.&nbsp; </span><span class="city">郑州市</span><span class="rate">5.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.05+'px'}"></span></li>
					<li><span class="ranking">10.&nbsp; </span><span class="city">南阳市</span><span class="rate">1.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.01+'px'}"></span></li>
					<li><span class="ranking">3.&nbsp; </span><span class="city">驻马店</span><span class="rate">66.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.66+'px'}"></span></li>
					<li><span class="ranking">4.&nbsp; </span><span class="city">周口市</span><span class="rate">55.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.55+'px'}"></span></li>
					<li><span class="ranking">5.&nbsp; </span><span class="city">商丘市</span><span class="rate">44.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.44+'px'}"></span></li>
					<li><span class="ranking">6.&nbsp; </span><span class="city">三门峡</span><span class="rate">33.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.33+'px'}"></span></li>
					<li><span class="ranking">7.&nbsp; </span><span class="city">新乡市</span><span class="rate">22.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.22+'px'}"></span></li>
					<li><span class="ranking">8.&nbsp; </span><span class="city">平顶山</span><span class="rate">11.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.11+'px'}"></span></li>
					<li><span class="ranking">9.&nbsp; </span><span class="city">郑州市</span><span class="rate">5.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.05+'px'}"></span></li>
					<li><span class="ranking">10.&nbsp; </span><span class="city">南阳市</span><span class="rate">1.33%</span>
						<span class="ranklist-bar" :style="{width:200*0.01+'px'}"></span></li>
				</ul>
			</Card>
			</Col>
		</Row>
	</div>
</template>
<style scoped>
	.ranklist-container{
		height:680px;
	}
	.ranklist-container li {
		height:34px;
	}
	.data-content, .data-title {
		height: 30px;
		line-height: 30px;
		text-align: center;
		margin-top: 10px;
	}

	/*数据指数*/
	.data-index {
		height: 295px;
	}

	.data-index span {
		display: inline;
		text-align: center;
		font-size: 14px;
	}

	.data-index .huhao {
		color: #31c9d7;
	}

	.data-index .trend {
		display: inline-block;
		width: 15px;
		height: 15px;
		line-height: 15px;
		margin-left: 5px;
		vertical-align: middle;
	}

	.data-title {
		background-color: #f2f7fb;
	}
	.btn-group{
		margin-top: -8px;
	}
</style>