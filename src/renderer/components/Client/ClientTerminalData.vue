<script>
	export default {
		name: 'terminalData',
		data() {
			return {
				currentPDS: 0,
				currentChartType: 1,
				timeType: '今天',
				todayTime: '0',
				cldDetail: {},
				clientIndex: '',
				monitoringShow: 2,
				eTotal: 0,
				origratio: 0,
				chartwidth:0,
				ratio: {
					pt: 0,
					pt_ratio1: 0,
					pt_ratio2: 0,
					ct: 0,
					ct_ratio1: 0,
					ct_ratio2: 0,
				},
				timeList: [
					{
						label: '15分钟',
						value: '今天'
					},
					{
						label: '1天',
						value: '1天'
					},
					{
						label: '1月',
						value: '1月'
					},
				],
				logColumns: [
					{
						title: '掉线时间',
						sortable: true,
						key: 'off_time'
					},
					{
						title: '上线时间',
						sortable: true,
						key: 'on_time'
					},
					{
						title: '在线时长',
						sortable: true,
						key: 'total',
						render: (h, params) => {
							let text = this.formatDuring(params.row.total * 1000);

							return h('span', text)
						}
					},

				],
				columns2: [
					{
						title: '日期时间',
						sortable: true,
						key: 'off_time'
					},
					{
						title: '事件',
						sortable: true,
						width: '80',
						key: 'name'
					},
					{
						title: '处理结果',
						sortable: true,
						key: 'status',
						render: (h, params) => {
							let text;
							if (params.row.status === 0) {
								text = '掉线已自动登录'
							} else if (params.row.status === 1) {
								text = '掉线未自动登录'
							}
							return h('span', text)
						}
					},
				],
				logData: [],
				tableData2: [],
				dianliangData: {
					xData: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
					yData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
				},
				dianliuData: {
					xData: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
					curaData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
					curbData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
					curcData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
				},
				dianyaData: {
					xData: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
					aData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
					bData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
					cData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
				},
				yougongData: {
					xData: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
					aData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
					bData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
					cData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
				},
				wugongData: {
					xData: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
					aData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
					bData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
					cData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
				},
				shizaiData: {
					xData: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
					yData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				},
				yinshuData: {
					xData: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
					aData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
					bData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
					cData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
				},
				fuheData: {
					xData: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
					aData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
					bData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
					cData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
				},
				onlineData: {
					xData: ["10/4", "10/5", "10/6", "10/7", "10/8", "10/9", "10/10", "10/11", "10/12", "10/13", "10/14", "10/15", "10/4", "10/5", "10/6", "10/7", "10/8", "10/9", "10/10", "10/11", "10/12", "10/13", "10/14", "10/15"],
					yData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
				},
				zuidaDate: {
					xData: ['2017-11-13', '2017-11-14', '2017-11-15', '2017-11-16', '2017-11-17', '2017-11-18', '2017-11-19', '2017-11-20', '2017-11-21', '2017-11-22', '2017-11-23', '2017-11-24', '2017-11-25', '2017-11-26', '2017-11-27', '2017-11-28', '2017-11-29', '2017-11-30'],
					yData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				},
				terminalList: [],
				clientid: '',
				loading1: false,
				loading2: false,
			}
		},
		computed: {
			time: function () {
				if (this.timeType === '今天') {
					return 1
				} else if (this.timeType === '昨天') {
					return 2
				} else if (this.timeType === '近7天') {
					return 3
				} else if (this.timeType === '1天') {
					return 4
				} else if (this.timeType === '1月') {
					return 5
				} else if (this.timeType === '时间区间') {
					return 6
				}
			},
			cus_id: function () {
				return this.$store.getters.cus_id
			},
			dianliangChart: function () {
				return this.$echarts.init(document.getElementById('dianliang-chart'));
			},
			dianliuChart: function () {
				return this.$echarts.init(document.getElementById('dianliu-chart'));
			},
			dianyaChart: function () {
				return this.$echarts.init(document.getElementById('dianya-chart'));
			},
			yougongChart: function () {
				return this.$echarts.init(document.getElementById('yougong-chart'));
			},
			wugongChart: function () {
				return this.$echarts.init(document.getElementById('wugong-chart'));
			},
			shizaiChart: function () {
				return this.$echarts.init(document.getElementById('shizai-chart'));
			},
			yinshuChart: function () {
				return this.$echarts.init(document.getElementById('yinshu-chart'));
			},
			fuheChart: function () {
				return this.$echarts.init(document.getElementById('fuhe-chart'));
			},
			onlineChart: function () {
				return this.$echarts.init(document.getElementById('chart-jiankong'));
			},
			zuidaChart: function () {
				return this.$echarts.init(document.getElementById('chart-main3'));
			},
			dianliangOption: function () {
				return {
					tooltip: this.$store.getters.chartOption.barTooltip,
					legend: {
						data: ['采集电量'],
						icon: 'rect',
						left: 5,
						top: 20,
						itemWidth: 16,
						itemHeight: 16,
					},
					color: this.$store.getters.chartOption.colorList,
					xAxis: {
						...this.$store.getters.chartOption.colorList,
						data: this.dianliangData.xData,
					}
					,
					yAxis: [
						{
							position: 'left',
							type: 'value',
							axisLine: {
								show: false
							},
							axisTick: {
								show: false
							},
						}
					],
					dataZoom: this.$store.getters.chartOption.dataZoom,
					grid: {
						top: '80',
						left: '0',
						right: '20',
						bottom: '1%',
						containLabel: true
					},
					series: [
						{
							name: '采集电量',
							type: 'bar',
							barWidth: 30,
							data: this.dianliangData.yData
						}
					]
				}

			},
			dianliuOption: function () {
				return {
					tooltip: this.$store.getters.chartOption.lineTooltip,
					legend: {
						data: ['A相', 'B相', 'C相',],
						left: 5,
						top: 20,
						itemWidth: 16,
						itemHeight: 16,
					},
					grid: {
						top: '80',
						left: '0',
						right: '20',
						bottom: '1%',
						containLabel: true
					},
					color: this.$store.getters.chartOption.colorList,
					xAxis: {
						...this.$store.getters.chartOption.xAxis,
						data: this.dianliuData.xData
					},
					yAxis: [
						{
							position: 'left',
							type: 'value',
							axisLine: {
								show: false
							},
							axisTick: {
								show: false
							},
						}
					],
					dataZoom: this.$store.getters.chartOption.dataZoom,
					series: [
						{
							name: 'A相',
							type: 'line',
							smooth: true,
							itemStyle: this.$store.getters.chartOption.lineItemStyle,
							data: this.dianliuData.curaData

						},
						{
							name: 'B相',
							type: 'line',
							smooth: true,
							itemStyle: this.$store.getters.chartOption.lineItemStyle,
							data: this.dianliuData.curbData

						},
						{
							name: 'C相',
							type: 'line',
							smooth: true,
							itemStyle: this.$store.getters.chartOption.lineItemStyle,
							data: this.dianliuData.curcData

						},

					]
				}
			},
			dianyaOption: function () {
				return {
					tooltip: this.$store.getters.chartOption.lineTooltip,
					legend: {
						data: ['A相', 'B相', 'C相',],
						left: 5,
						top: 20,
						itemWidth: 16,
						itemHeight: 16,
					},
					grid: {
						top: '80',
						left: '0',
						right: '20',
						bottom: '1%',
						containLabel: true
					},
					color: this.$store.getters.chartOption.colorList,
					xAxis: {
						...this.$store.getters.chartOption.xAxis,
						data: this.dianyaData.xData
					},
					yAxis: [
						{
							position: 'left',
							type: 'value',
							axisLine: {
								show: false
							},
							axisTick: {
								show: false
							},
						}
					],
					dataZoom: this.$store.getters.chartOption.dataZoom,
					series: [
						{
							name: 'A相',
							type: 'line',
							smooth: true,
							itemStyle: this.$store.getters.chartOption.lineItemStyle,
							data: this.dianyaData.aData

						},
						{
							name: 'B相',
							type: 'line',
							smooth: true,
							itemStyle: this.$store.getters.chartOption.lineItemStyle,
							data: this.dianyaData.bData

						},
						{
							name: 'C相',
							type: 'line',
							smooth: true,
							itemStyle: this.$store.getters.chartOption.lineItemStyle,
							data: this.dianyaData.cData
						},

					]
				}
			},
			yougongOption: function () {
				return {
					tooltip: this.$store.getters.chartOption.lineTooltip,
					grid: {
						top: '80',
						left: '0',
						right: '20',
						bottom: '1%',
						containLabel: true
					},
					legend: {
						data: ['A相', 'B相', 'C相',],
						left: 5,
						top: 20,
						itemWidth: 16,
						itemHeight: 16,
					},
					color: this.$store.getters.chartOption.colorList,
					xAxis: {
						...this.$store.getters.chartOption.xAxis,
						data: this.yougongData.xData
					},
					yAxis: [
						{
							position: 'left',
							type: 'value',
							axisLine: {
								show: false
							},
							axisTick: {
								show: false
							},
						}
					],
					dataZoom: this.$store.getters.chartOption.dataZoom,
					series: [
						{
							name: 'A相',
							type: 'line',
							smooth: true,
							itemStyle: this.$store.getters.chartOption.lineItemStyle,
							data: this.yougongData.aData

						},
						{
							name: 'B相',
							type: 'line',
							smooth: true,
							itemStyle: this.$store.getters.chartOption.lineItemStyle,
							data: this.yougongData.bData

						},
						{
							name: 'C相',
							type: 'line',
							smooth: true,
							itemStyle: this.$store.getters.chartOption.lineItemStyle,
							data: this.yougongData.cData

						},
					]
				}
			},
			wugongOption: function () {
				return {
					tooltip: this.$store.getters.chartOption.lineTooltip,
					grid: {
						top: '80',
						left: '0',
						right: '20',
						bottom: '1%',
						containLabel: true
					},
					legend: {
						data: ['A相', 'B相', 'C相',],
						left: 5,
						top: 20,
						itemWidth: 16,
						itemHeight: 16,
					},
					color: this.$store.getters.chartOption.colorList,
					xAxis: {
						...this.$store.getters.chartOption.xAxis,
						data: this.wugongData.xData
					},
					yAxis: [
						{
							position: 'left',
							type: 'value',
							axisLine: {
								show: false
							},
							axisTick: {
								show: false
							},
						}
					],
					dataZoom: this.$store.getters.chartOption.dataZoom,
					series: [
						{
							name: 'A相',
							type: 'line',
							smooth: true,
							itemStyle: this.$store.getters.chartOption.lineItemStyle,
							data: this.wugongData.aData

						},
						{
							name: 'B相',
							type: 'line',
							smooth: true,
							itemStyle: this.$store.getters.chartOption.lineItemStyle,
							data: this.wugongData.bData

						},
						{
							name: 'C相',
							type: 'line',
							smooth: true,
							itemStyle: this.$store.getters.chartOption.lineItemStyle,
							data: this.wugongData.cData

						},
					]
				}
			},
			shizaiOption: function () {
				return {
					tooltip: this.$store.getters.chartOption.lineTooltip,
					grid: {
						top: '80',
						left: '0',
						right: '20',
						bottom: '1%',
						containLabel: true
					},
					legend: {
						data: ['视在功率'],
						left: 5,
						top: 20,
						itemWidth: 16,
						itemHeight: 16,
					},
					color: this.$store.getters.chartOption.colorList,
					xAxis: {
						...this.$store.getters.chartOption.xAxis,
						data: this.shizaiData.xData
					},
					yAxis: [
						{
							position: 'left',
							type: 'value',
							axisLine: {
								show: false
							},
							axisTick: {
								show: false
							},
						}
					],
					dataZoom: this.$store.getters.chartOption.dataZoom,
					series: [
						{
							name: '视在功率',
							type: 'line',
							smooth: true,
							itemStyle: this.$store.getters.chartOption.lineItemStyle,
							data: this.shizaiData.yData

						}
					]
				}
			},
			yinshuOption: function () {
				return {
					tooltip: this.$store.getters.chartOption.lineTooltip,
					grid: {
						top: '80',
						left: '0',
						right: '20',
						bottom: '1%',
						containLabel: true
					},
					legend: {
						data: ['A相', 'B相', 'C相',],
						left: 5,
						top: 20,
						itemWidth: 16,
						itemHeight: 16,
					},
					color: this.$store.getters.chartOption.colorList,
					xAxis: {
						...this.$store.getters.chartOption.xAxis,
						data: this.yinshuData.xData
					},
					yAxis: [
						{
							position: 'left',
							type: 'value',
							axisLine: {
								show: false
							},
							axisTick: {
								show: false
							},
						}
					],
					dataZoom: this.$store.getters.chartOption.dataZoom,
					series: [
						{
							name: 'A相',
							type: 'line',
							smooth: true,
							itemStyle: this.$store.getters.chartOption.lineItemStyle,
							data: this.yinshuData.aData

						},
						{
							name: 'B相',
							type: 'line',
							smooth: true,
							itemStyle: this.$store.getters.chartOption.lineItemStyle,
							data: this.yinshuData.bData

						},
						{
							name: 'C相',
							type: 'line',
							smooth: true,
							itemStyle: this.$store.getters.chartOption.lineItemStyle,
							data: this.yinshuData.cData

						},
					]
				}
			},
			fuheOption: function () {
				return {
					tooltip: this.$store.getters.chartOption.lineTooltip,
					grid: {
						top: '80',
						left: '0',
						right: '20',
						bottom: '1%',
						containLabel: true
					},
					color: this.$store.getters.chartOption.colorList,
					xAxis: {
						...this.$store.getters.chartOption.xAxis,
						data: this.fuheData.xData
					},
					yAxis: [
						{
							position: 'left',
							type: 'value',
							axisLine: {
								show: false
							},
							axisTick: {
								show: false
							},
						}
					],
					dataZoom: this.$store.getters.chartOption.dataZoom,
					series: [
						{
							name: '功率因数',
							type: 'line',
							smooth: true,
							itemStyle: this.$store.getters.chartOption.lineItemStyle,
							data: this.fuheData.yData

						}
					]
				}
			},
			onlineOption: function () {
				return {
					tooltip: this.$store.getters.chartOption.barTooltip,
					grid: {
						top: '20',
						left: '10',
						right: 5,
						bottom: 0,
						containLabel: true
					},
					xAxis: {
						...this.$store.getters.chartOption.barTooltip,
						data: this.onlineData.xData,
					}
					,
					color: this.$store.getters.chartOption.colorList,
					yAxis: [
						{
							position: 'left',
							type: 'value',
							boundaryGap: 0,
							max: 24,
							interval: 6,
							minInterval: 1,
							axisLine: {
								show: false
							},
							axisTick: {
								show: false
							},
						}
					],
					dataZoom: this.$store.getters.chartOption.dataZoom,
					series: [
						{
							name: '在线时长',
							type: 'bar',
							barMaxWidth: 40,
							data: this.onlineData.yData
						}

					]
				}
			},
			zuidaOption: function () {
				return {
					tooltip: this.$store.getters.chartOption.barTooltip,
					legend: {
						data: ['最大需量'],
						left: 5,
						top: 20,
						itemWidth: 16,
						itemHeight: 16,
					},
					grid: {
						top: '80',
						left: '0',
						right: '20',
						bottom: '1%',
						containLabel: true
					},
					xAxis: {
						...this.$store.getters.chartOption.barTooltip,
						data: this.zuidaDate.xData,
					}
					,
					color: this.$store.getters.chartOption.colorList,
					yAxis: [
						{
							position: 'left',
							type: 'value',
							axisLine: {
								show: false
							},
							axisTick: {
								show: false
							},
						}
					],
					dataZoom: this.$store.getters.chartOption.dataZoom,
					series: [
						{
							name: '最大需量',
							type: 'line',
							smooth: true,
							itemStyle: this.$store.getters.chartOption.lineItemStyle,
							data: this.zuidaDate.yData
						}

					]
				}
			}
		},
		mounted() {
			this.clientid = this.$store.getters.clientid;
			this.clientIndex = this.$route.query.clientIndex || this.terminalList[0].id;
			this.currentPDS = this.$route.query.index || 0;
			this.clientTerminalList();
			var width = document.getElementsByClassName('terminal-chart')[0];
			this.chartwidth= width.clientWidth - 32;
		},
		watch: {
			cus_id: function () {
				this.clientTerminalList()
			},
			clientid: function () {
				console.log('clientid 改变', this.clientid)

			}
		},
		methods: {
			drawDianliang() {
				this.dianliangChart.clear();
				// 绘制图表
				this.dianliangChart.setOption(this.dianliangOption);
				this.dianliangChart.hideLoading();
			},
			drawDianliu() {
				this.dianliuChart.clear();
				// 绘制图表
				this.dianliuChart.setOption(this.dianliuOption);
				this.dianliuChart.hideLoading();
			},
			drawDianya() {
				this.dianyaChart.clear();
				// 绘制图表
				this.dianyaChart.setOption(this.dianyaOption);
				this.dianyaChart.hideLoading();
			},
			drawYougong() {
				this.yougongChart.clear();
				// 绘制图表
				this.yougongChart.setOption(this.yougongOption);
				this.yougongChart.hideLoading();
			},
			drawWugong() {
				this.wugongChart.clear();
				// 绘制图表
				this.wugongChart.setOption(this.wugongOption);
				this.wugongChart.hideLoading();
			},
			drawShizai() {
				this.shizaiChart.clear();
				// 绘制图表
				this.shizaiChart.setOption(this.shizaiOption);
				this.shizaiChart.hideLoading();
			},
			drawYinshu() {
				this.yinshuChart.clear();
				// 绘制图表
				this.yinshuChart.setOption(this.yinshuOption);
				this.yinshuChart.hideLoading();
			},
			drawFuhe() {
				this.fuheChart.clear();
				// 绘制图表
				this.fuheChart.setOption(this.fuheOption);
				this.fuheChart.hideLoading();
			},
			drawOnline() {
				this.onlineChart.clear();
				this.onlineChart.setOption(this.onlineOption);
				this.onlineChart.hideLoading();
			},
			drawZuida() {
				this.zuidaChart.clear();
				this.zuidaChart.setOption(this.zuidaOption);
				this.zuidaChart.hideLoading();
			},
			changeSelect(pds, clientIndex, clientid) {
				this.currentPDS = pds;
				this.clientIndex = clientIndex;
				this.clientid = clientid;
				this.getTerminalDetail();
				this.onLineJiankng();
				this.equipmentAbnomal();
				this.equipmentLog();
				this.collectJiankongData();
				this.getRatio();
			},
			//用户终端列表
			clientTerminalList() {
				this.$http.post(this.$api.CLIENT_TERMINAL_LIST, {cus_id: this.$store.getters.cus_id}).then(res => {
					console.log('用户终端列表', res.data[0]);
					this.terminalList = res.data[0].data;
					this.getTerminalDetail();
					this.onLineJiankng();
					this.equipmentAbnomal();
					this.equipmentLog();
					this.collectJiankongData('init');
					this.getRatio();
				}, err => {
					this.$api.errcallback(err);
				}).catch(err => {
					this.$api.errcallback(err);
				})
			},
//	        获取倍率
			getRatio() {
				this.$http.post(this.$api.CLIENT_TERMINAL_RATIO, {clientid: this.clientid}).then(res => {
					let data = res.data.data;
					let pt_ratio = data.pt_ratio.split('/');
					let ct_ratio = data.ct_ratio.split('/');
					this.ratio.pt = data.pt;
					this.ratio.pt_ratio1 = pt_ratio[0];
					this.ratio.pt_ratio2 = pt_ratio[1];
					this.ratio.ct = data.ct;
					this.ratio.ct_ratio1 = ct_ratio[0];
					this.ratio.ct_ratio2 = ct_ratio[1];
					console.log('倍率', data);
					console.log(this.ratio)
				}, err => {
					this.$api.errcallback(err);
				}).catch(err => {
					this.$api.errcallback(err);
				})
			},
			//	        修正ct倍率
			setCTRatio() {
				this.$http.post(this.$api.CLIENT_TERMINAL_EDITRATIO, {
					clientid: this.clientid,
					type: 'ct',
					ct: this.ratio.ct_ratio1 / this.ratio.ct_ratio2,
					ct_ratio1: this.ratio.ct_ratio1,
					ct_ratio2: this.ratio.ct_ratio2,
				}).then(res => {
					console.log('修正ct倍率', res);
					this.getRatio();
				}, err => {
					this.$api.errcallback(err);
				}).catch(err => {
					this.$api.errcallback(err);
				})
			},
			//	        修正pt倍率
			setPTRatio() {
				this.$http.post(this.$api.CLIENT_TERMINAL_EDITRATIO, {
					clientid: this.clientid,
					type: 'pt',
					pt: this.ratio.pt_ratio1 / this.ratio.pt_ratio2,
					pt_ratio1: this.ratio.pt_ratio1,
					pt_ratio2: this.ratio.pt_ratio2,
				}).then(res => {
					console.log('修正ct倍率', res);
					this.getRatio();
				}, err => {
					this.$api.errcallback(err);
				}).catch(err => {
					this.$api.errcallback(err);
				})
			},
			getTerminalDetail() {
				this.$http.get(this.$api.CLIENT_TERMINAL_DETAIL + this.clientIndex).then(res => {
					let data = res.data.data;
					console.log('终端详情', res);
					if (data.status === 0) {
						data.status = "未启用";

					} else if (data.status === 1) {
						data.status = "已启用";
					}
					if (data.maxdemand == null) {
						data.maxdemand = 0;
					}
					if (data.electricity == null) {
						data.electricity = 0;
					}
					if (data.power_factor == null) {
						data.power_factor = 0;
					}
					data.pur_date = data.pur_date.split(' ')[0];
					data.install_date = data.install_date.split(' ')[0];
					this.cldDetail = data;
					console.log(this.cldDetail)
				}, err => {
					this.$api.errcallback(err);
				}).catch(err => {
					this.$api.errcallback(err);
				})
			},
			onLineJiankng() {
				this.onlineChart.showLoading();
				this.$http.post(this.$api.CLIENT_TERMINAL_ONLINE, {clientid: this.clientid}).then(res => {
					console.log("在线监控", res);
					let data = res.data.data;
					this.onlineData.xData = Object.keys(data);
					this.onlineData.yData = Object.values(data).map(i => parseInt((i / 3600)));
					this.todayTime = this.formatDuring(Object.values(data).pop() * 1000);
					this.drawOnline()
				}, err => {
					this.drawOnline();
					this.$api.errcallback(err);
				}).catch(err => {
					this.drawOnline();
					this.$api.errcallback(err);
				})
			},
			equipmentAbnomal() {
				this.loading1 = true;
				this.$http.post(this.$api.CLIENT_EQUIPMENT_REMIND).then(res => {
					console.log("设备异常提醒", res);
					if (res.data.status === '1') {
						this.tableData2 = res.data.data;
						this.loading1 = false;
					} else {
						this.loading1 = false;
					}

				}, err => {
					this.loading1 = false;
					this.$api.errcallback(err);
				}).catch(err => {
					this.loading1 = false;
					this.$api.errcallback(err);
				})
			},
			equipmentLog() {
				this.loading2 = true;
				this.$http.post(this.$api.CLIENT_EQUIPMENT_LOG, {clientid: this.clientid}).then(res => {
					console.log("设备日志", res);
					if (res.data.status === '1') {
						let data = res.data.data;
						this.logData = data;
						this.loading2 = false;
					} else {
						this.loading2 = false;
					}

				}, err => {
					this.loading2 = false;
					this.$api.errcallback(err);
				}).catch(err => {
					this.loading2 = false;
					this.$api.errcallback(err);
				})
			},
			collectJiankongData(dataType) {
				let start = '',
					end = '';
				if (Array.isArray(dataType)) {
					this.timeType = '时间区间';
					start = dataType[0];
					end = dataType[1];
				}
				this.dianliangChart.showLoading();
				this.dianliuChart.showLoading();
				this.dianyaChart.showLoading();
				this.wugongChart.showLoading();
				this.yougongChart.showLoading();
				this.shizaiChart.showLoading();
				this.yinshuChart.showLoading();
				this.zuidaChart.showLoading();
				this.$http.post(this.$api.CLIENT_COLLECT_DATA, {
					type: this.currentChartType,
					time: this.time,
					clientid: this.clientid,
					start: start,
					end: end
				}).then(res => {
					let data = Object.values(res.data.data);
					this.eTotal = res.data.total;
					this.origratio = res.data.origratio;
					if (this.currentChartType === 1) {
						this.dianliangData.xData = [];
						this.dianliangData.yData = [];
						data.map(i => {
							this.dianliangData.xData.push(i.collect_time);
							this.dianliangData.yData.push(i.electricity);
						});
						console.log("采集监控  电量", res);
						this.drawDianliang();
					} else if (this.currentChartType === 2) {
						this.dianliuData.xData = [];
						this.dianliuData.curaData = [];
						this.dianliuData.curbData = [];
						this.dianliuData.curcData = [];
						data.map(i => {
							this.dianliuData.xData.push(i.updated_at);
							this.dianliuData.curaData.push(i.cur_a);
							this.dianliuData.curbData.push(i.cur_b);
							this.dianliuData.curcData.push(i.cur_c);
						});
						console.log("采集监控  电流", res);
						console.log(this.dianliuData);
						this.drawDianliu();
					} else if (this.currentChartType === 3) {
						this.dianyaData.xData = [];
						this.dianyaData.aData = [];
						this.dianyaData.bData = [];
						this.dianyaData.cData = [];
						data.map(i => {
							this.dianyaData.xData.push(i.updated_at);
							this.dianyaData.aData.push(i.vol_a);
							this.dianyaData.bData.push(i.vol_b);
							this.dianyaData.cData.push(i.vol_c);
						});
						console.log("采集监控  电压", res);
						this.drawDianya();
					} else if (this.currentChartType === 4) {
						this.wugongData.xData = [];
						this.wugongData.aData = [];
						this.wugongData.bData = [];
						this.wugongData.cData = [];
						data.map(i => {
							this.wugongData.xData.push(i.updated_at);
							this.wugongData.aData.push(i.rpa);
							this.wugongData.bData.push(i.rpb);
							this.wugongData.cData.push(i.rpc);
						});
						console.log("采集监控  无功功率", res);
						this.drawWugong();
					} else if (this.currentChartType === 5) {
						this.shizaiData.xData = [];
						this.shizaiData.yData = [];
						data.map(i => {
							this.shizaiData.xData.push(i.updated_at);
							this.shizaiData.yData.push(i.inspect_power);
						});
						console.log("采集监控  视在功率", res);
						this.drawShizai();
					} else if (this.currentChartType === 6) {
						this.yinshuData.xData = [];
						this.yinshuData.aData = [];
						this.yinshuData.bData = [];
						this.yinshuData.cData = [];
						data.map(i => {
							this.yinshuData.xData.push(i.updated_at);
							this.yinshuData.aData.push(i.pfa);
							this.yinshuData.bData.push(i.pfb);
							this.yinshuData.cData.push(i.pfc);
						});
						console.log("采集监控  功率因数", res);
						this.drawYinshu();
					} else if (this.currentChartType === 7) {
						this.yougongData.xData = [];
						this.yougongData.aData = [];
						this.yougongData.bData = [];
						this.yougongData.cData = [];
						data.map(i => {
							this.yougongData.xData.push(i.updated_at);
							this.yougongData.aData.push(i.apa);
							this.yougongData.bData.push(i.apb);
							this.yougongData.cData.push(i.apc);
						});
						console.log("采集监控  负荷", res);
						this.drawYougong();
					} else if (this.currentChartType === 8) {
						var dataNum = res.data.data;
						this.zuidaDate.xData = Object.keys(dataNum);
						this.zuidaDate.yData = Object.values(dataNum);
						console.log("采集监控 最大需量", res);
						console.log(1, this.zuidaDate);
						this.drawZuida();
					}
				}, err => {
					if (this.currentChartType === 1) {
						this.dianliangData.xData = ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'];
						this.dianliangData.yData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
						this.drawDianliang();
					} else if (this.monitoringShow === 3) {
						this.dianliuData.xData = ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'];
						this.dianliuData.curaData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
						this.dianliuData.curbData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
						this.dianliuData.curcData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
						this.drawDianliu();
					}
					this.$api.errcallback(err);
				}).catch(err => {
					this.$api.errcallback(err);
				})
			},
			setTimeType(type) {
				this.timeType = type;
				this.collectJiankongData()
			},
			formatDuring(mss) {
				let days = parseInt(mss / (1000 * 60 * 60 * 24));
				let hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				let minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
				let seconds = (mss % (1000 * 60)) / 1000;
				return days + " 天 " + hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒 ";
			}
		}
	}
</script>
<template>
	<div class="client-container">
		<Card>
			<h3 slot="title">终端详情</h3>
			<div slot="extra" class="btn-group" style="margin-top: -8px;">
				<Button type="primary" style="height: 28px;line-height: 16px" @click="$router.push('caiji-detail')">
					数据采集记录
				</Button>
				<Button type="primary" style="height: 28px;line-height: 16px" @click="$router.push('add-celiang')">
					+配置测量点
				</Button>
			</div>

			<Row>
				<div class="pds-container">
					<Row>
						<div class="tab-container">
							<template v-for="(item,index) in terminalList">
								<my-tab v-on:changeSelect="changeSelect(index,item.id,item.clientid)"
								        v-bind:type="currentPDS === index?'disabled':'normal'">{{item.mea_name}}
								</my-tab>
							</template>

						</div>
					</Row>
					<Row>
						<div class="cld-detail">
							<Row>
								<Col span="10">
								<div class="left">

									<h4 class="title">测量点：{{cldDetail.mea_address}} <span
											style="color: #999999;font-weight: 400;">资产编号:{{cldDetail.serial_no}}</span>
									</h4>
									<ul>
										<li style="background-color: #0089f0;">
											<strong>{{cldDetail.electricity}}</strong><br><span>实际电量</span></li>
										<li style="background-color: #f57e6a;">
											<strong>{{cldDetail.power_factor}}</strong><br><span>功率因数</span></li>
										<li style="background-color: #ab7aee;">
											<strong>{{cldDetail.maxdemand}}</strong><br><span>当前最大需量</span>
										</li>
										<li style="background-color: #6ec71e;">
											<strong>{{cldDetail.status}}</strong><br><span>当前状态</span></li>
									</ul>
								</div>
								</Col>
								<Col span="14">
								<div class="right">
									<table  cellspacing="12">
										<tbody>
										<tr>
											<td><span>终端号 : </span> {{cldDetail.clientid}}</td>
											<td><span>生产厂家 : </span> {{cldDetail.factory}}</td>
											<td><span>出厂编号 : </span> {{cldDetail.serial_no}}</td>
											<td><span>设备类型 : </span> {{cldDetail.type}}</td>

										</tr>
										<tr>
											<td><span>采购日期 : </span> {{cldDetail.pur_date}}</td>
											<td><span>通信地址 : </span> {{cldDetail.mailing_address}}</td>
											<td><span>远程端口 : </span> {{cldDetail.port}}</td>
											<td><span> 上线日期 :</span> {{cldDetail.install_date}}</td>


										</tr>
										<tr>
											<td><span>所属户号 : </span> {{cldDetail.user_no}}</td>
											<td><span>供电单位 : </span> {{cldDetail.powerplant}}</td>
											<td><span>所属变压器容量 : </span> {{cldDetail.capacity}}KW</td>
											<td><span>状态 : </span> {{cldDetail.status}}</td>

										</tr>
										</tbody>
									</table>
								</div>
								</Col>

							</Row>
						</div>
					</Row>
				</div>
			</Row>

		</Card>
		<Card class="terminal-chart">
			<h3 slot="title">数据图表</h3>
			<div slot="extra">
				<Row>
					<div style="display: inline-block;margin-right: 100px;">
						<div class="power-item" :class="{selected:currentChartType===1}"
						     @click="monitoringShow = 2;currentChartType=1;collectJiankongData()">电量
						</div>
						<div class="power-item" :class="{selected:currentChartType===2}"
						     @click="monitoringShow = 3;currentChartType=2;collectJiankongData()">电流
						</div>
						<div class="power-item" :class="{selected:currentChartType===3}"
						     @click="monitoringShow = 3;currentChartType=3;collectJiankongData()">电压
						</div>
						<div class="power-item" :class="{selected:currentChartType===4}"
						     @click="monitoringShow = 3;currentChartType=4;collectJiankongData()">无功功率
						</div>
						<div class="power-item" :class="{selected:currentChartType===5}"
						     @click="monitoringShow = 3;currentChartType=5;collectJiankongData()">视在功率
						</div>
						<div class="power-item" :class="{selected:currentChartType===6}"
						     @click="monitoringShow = 3;currentChartType=6;collectJiankongData()">功率因数
						</div>
						<div class="power-item" :class="{selected:currentChartType===7}"
						     @click="monitoringShow = 3;currentChartType=7;collectJiankongData()">负荷
						</div>
						<div class="power-item" :class="{selected:currentChartType===8}"
						     @click="monitoringShow = 4;currentChartType=8;collectJiankongData()">最大需量
						</div>
					</div>
					<div style="text-align: center;display: inline-block">
						<!-- <div class="power-item" :class="{selected:currentChartType===10}"
						     @click="monitoringShow = 3;currentChartType=10">采集监控
						</div> -->
						<div class="power-item" :class="{selected:currentChartType===11}"
						     @click="monitoringShow = 1;currentChartType=11">在线监控
						</div>
					</div>
				</Row>
			</div>
			<Row className="terminal-chart-content">
				<div v-show="currentChartType===11" class="relative" style="height: 500px">
					<p style="margin: -10px 0 10px 10px;clear: both">今日在线时长 :<span
							style="color: #0089f0;font-size: 16px;"> {{todayTime}}</span></p>
					<div class="chart-main" id="chart-jiankong">

					</div>
					<div class="unusual-commind fr">
						<span style="font-size: 14px;display: inline-block;margin-bottom: 5px;">设备异常提醒</span>
						<Table :columns="columns2" :data="tableData2" :loading='loading1'></Table>
					</div>
					<div class="shebei-log absolute" style="left: 5px;top: 255px;">
						<span style="font-size: 14px;display: inline-block;margin-bottom: 5px;">设备日志</span>

						<div class="ivu-table-wrapper" style="height: 220px">
							<div class="ivu-table ivu-table-with-fixed-top">
								<div class="ivu-table-header">

								</div>
								<div class="ivu-table-body" style="height: 220px;">
									<table width="100%" cellspacing="0" cellpadding="0">
										<thead>
										<tr>
											<th>
												<div class="ivu-table-cell"><span>掉线时间</span></div>
											</th>
											<th>
												<div class="ivu-table-cell"><span>上线时间</span></div>
											</th>
											<th>
												<div class="ivu-table-cell"><span>在线时长</span></div>
											</th>
										</tr>
										</thead>
										<tbody>
										<tr v-for="item in logData">
											<td>
												<div class="ivu-table-cell"><span>{{item.off_time}}</span></div>
											</td>
											<td>
												<div class="ivu-table-cell"><span>{{item.on_time}}</span></div>
											</td>
											<td>
												<div class="ivu-table-cell"><span>{{item.total}}</span></div>
											</td>
										</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div v-show="currentChartType===1" class="relative">
					<div class="totalCount">
						<span>当前月度总电量 ：<span style="font-size: 16px;color: #0089f0">{{eTotal}}</span>Kw.h
						</span>
						<span style="margin-left: 20px;">当前倍率:<span
								style="font-size: 16px;color: #0089f0">{{origratio}}</span></span>

						<Button class="refresh" type="primary"
						        style="float: right;margin-right: -15px;position: relative;z-index: 100"
						        @click="collectJiankongData">
							<i class="iconfont icon-shuaxin"></i>
						</Button>
					</div>
					<div class="select-time">
						<ul style="position: relative;left: 220px">
							<li>
								<RadioGroup v-model="timeType" type="button" v-on:on-change="collectJiankongData">
									<Radio label="今天"></Radio>
									<Radio label="昨天"></Radio>
									<Radio label="近7天"></Radio>
								</RadioGroup>
							</li>
							<li>
								<DatePicker
										type="daterange"
										placement="bottom-end"
										placeholder="选择时间区间"
										v-on:on-change="collectJiankongData"></DatePicker>
							</li>
							<li>
								<Select style="width: 120px" placeholder="请选择时间粒度" v-on:on-change="setTimeType">
									<Option v-for="item in timeList" :value="item.value" :key="item.value"
									        style="width: 80px">{{ item.label }}
									</Option>
								</Select>
							</li>
						</ul>
					</div>
					<div class="chart-main" id="dianliang-chart" style="width:100%;height: 430px;"></div>
				</div>
				<div v-show="currentChartType===2" class="relative">
					<span style="margin-left: 10px;">当前CT系数:<span
							style="font-size: 16px;color: #0089f0">{{ratio.ct}}</span></span>
					<span style="margin: 0 10px;">当前CT比</span>
					<Input style="width: 80px" size="small" v-model="ratio.ct_ratio1"/> :
					<Input style="width: 80px" size="small" v-model="ratio.ct_ratio2"/>
					<Button type="primary" @click="setCTRatio">修正</Button>
					<Button class="refresh fr" type="primary" @click="collectJiankongData">
						<i class="iconfont icon-shuaxin"></i>
					</Button>
					<div class="chart-main" id="dianliu-chart" :style="{width:chartwidth+'px'}" style="height:430px"></div>
				</div>
				<div v-show="currentChartType===3" class="relative">
					<span style="margin-left: 10px;">当前PT系数:<span
							style="font-size: 16px;color: #0089f0">{{ratio.pt}}</span></span>
					<span style="margin: 0 10px;">当前PT比</span>
					<Input style="width: 80px" size="small" v-model="ratio.pt_ratio1"/> :
					<Input style="width: 80px" size="small" v-model="ratio.pt_ratio2"/>

					<Button type="primary" @click="setPTRatio">修正</Button>
					<Button class="refresh fr" type="primary" @click="collectJiankongData">
						<i class="iconfont icon-shuaxin"></i>
					</Button>
					<div class="chart-main" id="dianya-chart" :style="{width:chartwidth+'px'}" style="height:430px"></div>
				</div>
				<div v-show="currentChartType===4" class="relative">
					<Button class="refresh fr" type="primary" @click="collectJiankongData">
						<i class="iconfont icon-shuaxin"></i>
					</Button>
					<div class="chart-main" id="wugong-chart" :style="{width:chartwidth+'px'}" style="height:430px"></div>
				</div>
				<div v-show="currentChartType===5" class="relative">
					<Button class="refresh fr" type="primary" @click="collectJiankongData">
						<i class="iconfont icon-shuaxin"></i>
					</Button>
						<div class="chart-main" id="shizai-chart" :style="{width:chartwidth+'px'}" style="height:430px"></div>
					
				</div>
				<div v-show="currentChartType===6" class="relative">
					<Button class="refresh fr" type="primary" @click="collectJiankongData">
						<i class="iconfont icon-shuaxin"></i>
					</Button>
					<div class="chart-main" id="yinshu-chart" :style="{width:chartwidth+'px'}" style="height:430px"></div>
				</div>
				<div v-show="currentChartType===7" class="relative">
					<Button class="refresh fr" type="primary" @click="collectJiankongData">
						<i class="iconfont icon-shuaxin"></i>
					</Button>
					<div class="chart-main" id="yougong-chart" :style="{width:chartwidth+'px'}" style="height:430px"></div>
				</div>
				<div v-show="monitoringShow===4" class="relative">
					<Button class="refresh fr" type="primary" @click="collectJiankongData">
						<i class="iconfont icon-shuaxin"></i>
					</Button>
					<div class="chart-main" id="chart-main3" :style="{width:chartwidth+'px'}" style="height:430px"></div>
				</div>
			</Row>
		</Card>
	</div>
</template>
<style scoped>
	.pds-container {
		height: 200px;
	}
	.refresh{
     position: absolute;
	 top:0px;
	 right:0px;
	 z-index:99;
	}
	.pds-container li {
		display: inline-block;
		vertical-align: middle;
	}

	.tab-container {
		margin-left: 20px;
		margin-bottom: 20px;
	}

	.tab-container span {
		margin-right: 5px;
	}

	.cld-detail {
		height: 120px;
	}

	.cld-detail .left {
		margin-top: 20px;
		margin-left: 20px;
	}

	.cld-detail .right {
		margin-top: 40px;
		margin-left: -130px;

	}
	.cld-detail table{
		width:100%;
	}

	.cld-detail ul {
		margin-top: 10px;
	}

	.cld-detail li {
		width: 87px;
		height: 87px;
		text-align: center;
		margin-right: 10px;
		box-sizing: border-box;
		color: #ffffff;
	}

	.cld-detail li strong, span {
		display: inline-block;
	}

	.cld-detail li strong {
		font-size: 18px;
		margin-top: 16px;
	}

	.cld-detail li span {
		margin-top: 16px;
	}

	.terminal-chart {
		height: 564px;
		overflow: hidden;
		background-color: #fff;
		margin-top: 15px;
		width:100%;
	}

	.select-time {
		padding: 0 0 15px 600px;
		border-bottom: 1px solid #eee
	}

	.terminal-chart li {
		display: inline-block;
		margin-right: 20px;
	}

	.power-item {
		display: inline-block;
		margin-left: 10px;
		margin-right: 0;
		height: 31px;
		text-align: center;
		line-height: 30px;
		width: 60px;
		cursor: pointer;
		color: #0089f0;
		position: relative;
		top: 2px;
		border: 1px solid transparent;
	}

	.power-item.selected {
		color: #666666;
		border: 1px solid #eee;
		border-bottom-color: transparent;
		background-color: #fff;
	}

	.terminal-chart th, .terminal-chart td {
		text-align: left;
	}

	.right td > span {
		color: #999999 !important;
	}

	.terminal-chart th {
		background-color: #f6f6f6;
		height: 40px;
	}

	.totalCount {
		position: absolute;
		width: 1405px;
		top: 0;
		left: 9px;
	}

	#chart-jiankong {
		width: 1000px;
		height: 189px;
		float: left;
	}

	.unusual-commind {
		width: 400px;
		height: 477px;
		padding-right: 20px;
		margin-top: -15px;
	}

	.unusual-commind .ivu-table-wrapper {
		height: 460px;
	}

	.shebei-log {
		width: 990px;
	}

	@media (min-width: 1365px) and (max-width: 1919px) {
		.cld-detail .right {
			margin-top:45px;
			margin-left: -80px;
		}
        .cld-detail table{
		    width:50%;
	     }
		.tab-container {
			margin-left: 0;
		}

		.cld-detail .left {
			margin-left: 0;
		}

		.right td {
			white-space: nowrap;
		}

		.select-time {
			padding: 0 0 15px 345px;
		}

		#chart-jiankong {
			width: 770px;
			height: 189px;
			float: left;
		}

		.unusual-commind {
			width: 300px;
			height: 485px;
			padding-right: 0px;
			margin-top: -15px;
		}

		.unusual-commind .ivu-table-wrapper {
			height: 455px;
		}

		.shebei-log {
			width: 770px;
		}
		.cld-detail li {
			margin-right:5px;
		}
	}
</style>