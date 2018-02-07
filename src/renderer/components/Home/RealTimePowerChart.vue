<style scoped>
	.chart-container {
		height: 396px;
		width: 100%;
	}

	.danwei {
		position: absolute;
		top: 55px;
		right: 3px;
		border: none !important;
		background-color: transparent !important;
	}

	.btn-group {
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
		props: ['belong'],
		data() {
			return {
				powerRealtimeType: '15',
				type: 1,
				powerdata1: {
					xData: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
					yData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
				},
				powerdata2: {
					xData: ["1日", "2日", "3日", "4日", "5日", "6日", "7日", "8日", "9日", "10日", "11日", "12日", "13日", "14日", "15日", "16日", "17日", "18日", "19日", "20日", "21日", "22日", "23日", "24日", "25日", "26日", "27日", "28日", "29日", "30日"],
					electricity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					valley_section: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					flat_section: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					peak_section: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				},
				powerdata3: {
					xData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
					declare: [0,0,0,0,0,0,0,0,0,0,0,0],
					forecast: [0,0,0,0,0,0,0,0,0,0,0,0],
					longpact: [0,0,0,0,0,0,0,0,0,0,0,0],
					bidding: [0,0,0,0,0,0,0,0,0,0,0,0],
					monitor: [0,0,0,0,0,0,0,0,0,0,0,0],
					valley_section: [0,0,0,0,0,0,0,0,0,0,0,0],
					flat_section: [0,0,0,0,0,0,0,0,0,0,0,0],
					peak_section: [0,0,0,0,0,0,0,0,0,0,0,0],
				},
				powerdate: [],
			}
		},
		watch: {
			cus_id: function () {
				this.doAjax(this.belong);
			}
		},
		computed: {
			cus_id: function () {
				return this.$store.getters.cus_id
			},
			chartOption1: function () {
				return {
					tooltip: this.$store.getters.chartOption.lineTooltip,
					legend: {
						...this.$store.getters.chartOption.legend,
						left: 17,
						top: 60,
						data: ['实时电量'],
					},
					grid: {
						...this.$store.getters.chartOption.grid,
						top: '100',
						left: '20',
						right: '20',
						bottom: '8%'
					},
					xAxis: [
						{
							...this.$store.getters.chartOption.xAxis,
							data: this.powerdata1.xData,
						}
					],
					yAxis: [
						{
							...this.$store.getters.chartOption.yAxis,
							position: 'right'
						}
					],
					//设置可拖动区间
					dataZoom: this.$store.getters.chartOption.dataZoom,
					color: this.$store.getters.chartOption.colorList,
					series: [
						{
							name: '实时电量',
							type: 'line',
							smooth: true,
							itemStyle: {normal: {areaStyle: {type: 'default', opacity: 0.08}}},
							data: this.powerdata1.yData
						}
					]
				}
			},
			chartOption2: function () {

				return {
					tooltip: this.$store.getters.chartOption.barTooltip,
					legend: {
						...this.$store.getters.chartOption.legend,
						left: 17,
						top: 60,
						data: ['实时电量', '谷段电量', '平段电量', '峰段电量',]
					},
					grid: {
						...this.$store.getters.chartOption.grid,
						top: '100',
						left: '20',
						right: '20',
						bottom: '8%'
					},
					xAxis: [
						{
							...this.$store.getters.chartOption.xAxis,
							boundaryGap: true,
							data: this.powerdata2.xData
						}
					],
					yAxis: [
						{
							...this.$store.getters.chartOption.yAxis,
							position: 'right'
						}
					],
					// 设置可拖动区间
					dataZoom: this.$store.getters.chartOption.dataZoom,
					color: this.$store.getters.chartOption.colorList,
					series: [
						{
							name: '实时电量',
							type: 'bar',
							barMaxWidth: 40,
							data: this.powerdata2.electricity,
						},
						{
							name: '谷段电量',
							type: 'bar',
							barWidth: '10%',
							barMaxWidth: 20,
							stack: '实时电量',
							data: this.powerdata2.valley_section
						},
						{
							name: '平段电量',
							type: 'bar',
							stack: '实时电量',
							data: this.powerdata2.flat_section
						},
						{
							name: '峰段电量',
							type: 'bar',
							stack: '实时电量',
							data: this.powerdata2.peak_section
						}

					]
				}
			},
			chartOption3: function () {
				return {
					tooltip: this.$store.getters.chartOption.barTooltip,
					legend: {
						...this.$store.getters.chartOption.legend,
						left: 17,
						top: 60,
						data: ['申报电量', '预测电量', '长协购电量', '竞价购电量', '实时电量', '谷段电量', '平段电量', '峰段电量',]
					},
					grid: {
						...this.$store.getters.chartOption.grid,
						top: '100',
						left: '20',
						right: '20',
						bottom: '8%'
					},
					xAxis: [
						{
							...this.$store.getters.chartOption.xAxis,
							data: this.powerdata3.xData
						}
					],
					yAxis: [
						{
							...this.$store.getters.chartOption.yAxis,
							position: 'right'
						}
					],
					//设置可拖动区间
					dataZoom: this.$store.getters.chartOption.dataZoom,
					color: this.$store.getters.chartOption.colorList,
					series: [
						{
							name: '申报电量',
							type: 'bar',
							barMaxWidth: 40,
							data: this.powerdata3.declare
						},
						{
							name: '预测电量',
							type: 'bar',
							barMaxWidth: 40,
							data: this.powerdata3.forecast
						},
						{
							name: '长协购电量',
							type: 'bar',
							barMaxWidth: 40,
							data: this.powerdata3.longpact
						}, {
							name: '竞价购电量',
							type: 'bar',
							barMaxWidth: 40,
							data: this.powerdata3.bidding
						},
						{
							name: '实时电量',
							type: 'bar',
							barMaxWidth: 40,
							data: this.powerdata3.monitor
						},
						{
							name: '谷段电量',
							type: 'bar',
							barMaxWidth: 20,
							barWidth: "3%",
							stack: '实时电量',
							data: this.powerdata3.valley_section
						},
						{
							name: '平段电量',
							type: 'bar',
							stack: '实时电量',
							data: this.powerdata3.flat_section
						},
						{
							name: '峰段电量',
							type: 'bar',
							stack: '实时电量',
							data: this.powerdata3.peak_section
						}

					]
				}
			},
			powerChart: function () {
				return this.$echarts.init(document.getElementById('powerChart'))
			}
		},
		mounted() {
			this.drawLine();
			this.doAjax(this.belong);
		},
		methods: {
			doAjax(belong) {
				this.powerChart.showLoading();
				if (belong === 'com') {
					this.$http.post(this.$api.REALTIME_POWER_CURVE, {
						com_id: this.$store.getters.com_id,
						type: this.type
					})
						.then(res => {
							this.powerChart.hideLoading();
							console.log('企业实时电量负荷曲线', res);
							if(res.data.status ==='1'){
							let data = Object.values(res.data.data);
							if (this.type === 1) {
								this.powerdata1.xData = [];
								this.powerdata1.yData = [];
								data.map(i => {
									this.powerdata1.xData.push(i.collect_time);
									this.powerdata1.yData.push(i.total);
								})
							} else if (this.type === 2) {
								this.powerdata2.xData = [];
								this.powerdata2.electricity = [];
								this.powerdata2.valley_section = [];
								this.powerdata2.flat_section = [];
								this.powerdata2.peak_section = [];
								for(let j=0;j<data.length;j++){
									if(typeof data[j].electricity == 'object'&& typeof data[j].valley_section == 'object' && typeof data[j].flat_section == 'object' && typeof data[j].peak_section == 'object'){
										data[j].electricity = 0;
										data[j].valley_section=0;
										data[j].flat_section =0;
										data[j].peak_section =0;
									}
								}
								data.map(i => {
									this.powerdata2.xData.push(i.day);
									this.powerdata2.electricity.push(i.electricity);
									this.powerdata2.valley_section.push(i.valley_section);
									this.powerdata2.flat_section.push(i.flat_section);
									this.powerdata2.peak_section.push(i.peak_section);
								})
							} else if (this.type === 3) {
									this.powerdata3.xData = [];
								    this.powerdata3.declare = [];
								    this.powerdata3.forecast = [];
								    this.powerdata3.longpact = [];
								    this.powerdata3.bidding = [];
								    this.powerdata3.monitor = [];
								    this.powerdata3.valley_section = [];
								    this.powerdata3.flat_section = [];
								    this.powerdata3.peak_section = [];
								    data.map(i => {
									   this.powerdata3.xData.push(i.month);
									   this.powerdata3.declare.push(i.declare);
									   this.powerdata3.forecast.push(i.forecast);
									   this.powerdata3.longpact.push(i.longpact);
									   this.powerdata3.bidding.push(i.bidding);
									   this.powerdata3.monitor.push(i.monitor);
									   this.powerdata3.valley_section.push(i.valley_section);
									   this.powerdata3.flat_section.push(i.flat_section);
									   this.powerdata3.peak_section.push(i.peak_section);
								   })
								   console.log(this.powerdata3);
								}	
							}
							
							this.drawLine();
						}, err => {
							this.powerChart.hideLoading();
							this.$api.errcallback(err);
							this.drawLine();
						})
						.catch(err => {
							this.powerChart.hideLoading();
							this.$api.errcallback(err)
						})
				} else if (belong === 'cus') {
					this.$http.post(this.$api.CLIENT_REALTIME_CURVE, {
						cus_id: this.cus_id,
						type: this.type
					})
						.then(res => {
							this.powerChart.hideLoading();
							console.log('用户实时电量负荷曲线', res);
							let data = Object.values(res.data.data);

							if (this.type === 1) {
								this.powerdata1.xData = [];
								this.powerdata1.yData = [];
								data.map(i => {
									this.powerdata1.xData.push(i.collect_time);
									this.powerdata1.yData.push(i.total);
								})
							} else if (this.type === 2) {
								this.powerdata2.xData = [];
								this.powerdata2.electricity = [];
								this.powerdata2.valley_section = [];
								this.powerdata2.flat_section = [];
								this.powerdata2.peak_section = [];
								data.map(i => {
									this.powerdata2.xData.push(i.day);
									this.powerdata2.electricity.push(i.electricity);
									this.powerdata2.valley_section.push(i.valley_section);
									this.powerdata2.flat_section.push(i.flat_section);
									this.powerdata2.peak_section.push(i.peak_section);
								})
							} else if (this.type === 3) {
								this.powerdata3.xData = [];
								this.powerdata3.declare = [];
								this.powerdata3.forecast = [];
								this.powerdata3.longpact = [];
								this.powerdata3.bidding = [];
								this.powerdata3.monitor = [];
								this.powerdata3.valley_section = [];
								this.powerdata3.flat_section = [];
								this.powerdata3.peak_section = [];
								data.map(i => {
									this.powerdata3.xData.push(i.month);
									this.powerdata3.declare.push(i.declare);
									this.powerdata3.forecast.push(i.forecast);
									this.powerdata3.longpact.push(i.longpact);
									this.powerdata3.bidding.push(i.bidding);
									this.powerdata3.monitor.push(i.monitor);
									this.powerdata3.valley_section.push(i.valley_section);
									this.powerdata3.flat_section.push(i.flat_section);
									this.powerdata3.peak_section.push(i.peak_section);
								})
							}
							console.log(this.powerdata3);
							this.drawLine();
						}, err => {
							this.powerChart.hideLoading();
							this.$api.errcallback(err);
							this.drawLine();
						})
						.catch(err => {
							this.powerChart.hideLoading();
							this.$api.errcallback(err)
						})
				}

			},
			powerRealtimeTypeSwitch(type) {
				if (type === '15') {
					this.type = 1;
				} else if (type === '日') {
					this.type = 2
				} else if (type === '月') {
					this.type = 3
				}
				this.doAjax(this.belong);
			},
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				this.powerChart.clear();
				if (this.powerRealtimeType === '15') {
					this.powerChart.setOption(this.chartOption1, true);
				} else if (this.powerRealtimeType === '日') {
					this.powerChart.setOption(this.chartOption2, true);
				} else {
					this.powerChart.setOption(this.chartOption3, true);
				}
				// 绘制图表

			}
		}
	}
</script>

