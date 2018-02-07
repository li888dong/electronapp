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
                hangyeList:[],
                hangyeDate:[],
                dateList:['01月', '02月', '03月','04月','05月', '06月','07月','08月', '09月', '10月','11月','12月'],
                numDate:[0,0,0,0,0,0,0,0,0,0,0,0],
                companyList:[],
                monthYear:new Date().Format('yyyy-MM'),
                total:0

            }
        },
	    computed:{
	    	trendChart:function(){
               return this.$echarts.init(document.getElementById('trendChart'));
	    	},
	    	rateChart:function(){
               return this.$echarts.init(document.getElementById('rateChart'));
	    	},
            chartOption2:function () {
	            return{
                    tooltip:this.$store.getters.chartOption.lineTooltip,
                    legend: {
                        left:-5,
                        top:0,
                        itemWidth:16,
                        itemHeight:16,
                        data: ['竞价趋势']
                    },
                    grid: {
                        top:40,
                        left: 0,
                        right:40,
                        bottom: '6%',
                        containLabel: true
                    },
                    color:this.$store.getters.chartOption.colorList,
                    xAxis: [
                        {
                            type:'category',
                            boundaryGap : false,
                            data: this.dateList,
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
                            name: '竞价趋势',
                            type: 'line',
                            smooth:true,
                            itemStyle: {normal: {areaStyle: {type: 'default'}}},
                            data:this.numDate
                        },
                       
                    ]
                }
            },
            chartOption1:function () {
	            return {
                    tooltip: this.$store.getters.chartOption.barTooltip,
                    grid: {
                        top:20,
                        left: 0,
                        right: 20,
                        bottom: 0,
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
                            data:this.hangyeList
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
                            data: this.hangyeDate
                        }
                    ]
                }
            }

        },
        mounted() {
        	this.tradeOccupy();

            this.tradeTrend();
            this.tradeCompany();
        },
        methods: {
            dateTypeSwitch(type){
                console.log(type)
            },
            drawChart() {
                // 基于准备好的dom，初始化echarts实例
                // 绘制图表
                this.trendChart.setOption(this.chartOption2);
            },
            drawRate(){
            	// 基于准备好的dom，初始化echarts实例
                // 绘制图表
                 this.rateChart.setOption(this.chartOption1);
            },
            tradeOccupy(){
            	this.rateChart.showLoading();
            	 this.$http.post(this.$api.TRADE_RATIO).then(res=>{
            	 	 console.log('行业占比',res);
            	 	 this.rateChart.hideLoading();
            	 	 if(res.data.status === '1'){
                          let data= res.data.data;
                          for(let i=0;i<data.length;i++){
                          	this.hangyeList.push(data[i].industry);
                          	 this.hangyeDate.push(data[i].total);
                          }
                          this.drawRate();
            	 	 }
            	 },err=>{
            	 	 this.rateChart.hideLoading();
            	 	 this.$api.errcallback(err);
            	 }).catch(err=>{
            	 	 this.rateChart.hideLoading();
            	 	 this.$api.errcallback(err);
            	 })
            },
            tradeTrend(){
            	this.trendChart.showLoading();
            	this.$http.post(this.$api.TRADE_BIDDING,{com_id:this.$store.getters.com_id}).then(res=>{
            		console.log('行业指数 竞价趋势',res);
            		this.trendChart.hideLoading();
            		if(res.data.status === '1'){
                       let data = res.data.data;
                       this.dateList = Object.keys(data);
                       this.numDate = Object.values(data);
                       this.drawChart();
            		}
            	},err=>{
            		this.trendChart.hideLoading();
            		this.$api.errcallback(err);
            	}).catch(err=>{
            		 this.trendChart.hideLoading();
            		 this.$api.errcallback(err);
            	})
            },
            tradeCompany(){
            	this.$http.post(this.$api.TRADE_RANK,{month:this.monthYear}).then(res=>{
            		console.log('行业指数 行业排行',res);
            		if(res.data.status ==='1'){
            			let data = res.data.data;
            			this.companyList = data;
            			for(let k in data){
            				this.total += data[k]
            			}
            		}
            	},err=>{
            		 this.$api.errcallback(err);
            	}).catch(err=>{
            		 this.$api.errcallback(err);
            	})
            }

        }
    }
</script>
<template>
	<div class="main-container">
		<!-- <Row>
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
		</Row> -->
		<Row className="mgt_15" gutter=20>
			<Col :lg ="{span:18}" :md='{span:17}'>
				<Row>
					<Card>

						<h3 slot="title">售电量指数趋势</h3>
						<Row style="height:383px ">
							<div id="trendChart" style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;">

							</div>
						</Row>
					</Card>
				</Row>
				<Row className="mgt_15">
					<Card>
						<h3 slot="title">售电量行业占比 </h3>
						<div style="height: 383px;margin:0;width:100%">
						  <div id="rateChart" style="width:100%;height: 100%">

						</div>
						</div>
						

					</Card>
				</Row>
			</Col>
			<Col :lg ="{span:6}" :md='{span:7}'>
			<Card class="ranklist-container">
				<h3 slot="title">区域参与电量排行</h3>
				<ul>
					<li v-for='(value,key,index) in companyList'><span class="ranking">{{index+1}}.&nbsp; </span><span class="city">{{key}}</span><span class="rate"></span>
						<span class="ranklist-bar" :style="{width:200*(value/total)+'px'}"></span></li>
				</ul>
			</Card>
			</Col>
		</Row>
	</div>
</template>
<style scoped>
	.ranklist-container{
		height:934px;
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