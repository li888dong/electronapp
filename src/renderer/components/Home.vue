<style>
	.data-remind {
		position: relative;
		width: 1700px;
		height: 195px;
		overflow: hidden;
	}

	/*离线预警、数据异常、电量偏差、功率因数、负荷异常*/
	.five-data {
		width: 823px;
		height: 180px;
		padding: 20px;
	}

	.five-data li {
		width: 140px;
		height: 140px;
		text-align: center;
		display: inline-block;
		vertical-align: top;
		background-color: #F6F7FB;
	}

	.five-data li:not(.five-first) {
		margin-left: 17px;

	}

	.five-data li:hover {
		background: #CFEAFC;
	}

	.five-data li strong {
		font-size: 36px;
		line-height: 100px;
		color: #108CEE;
	}

	/*工作提醒*/
	.work-reminder {
		width: 400px;
		height: 180px;
	}

	.work-reminder li {
		width: 370px;
		height: 40px;
		box-sizing: border-box;
		margin: 5px auto;
		line-height: 40px;
		padding-left: 23px;
		font-size: 14px;
		background-color: #F6F7FB;
	}

	.work-reminder li:hover {
		background: #CFEAFC;

	}

	.work-reminder strong, span {
		display: inline-block;
		width: 40%;
		height: 40px;
	}

	.work-reminder strong {
		font-size: 24px;
		color: #108CEE;
	}

	/*计划进度提醒*/
	.process-plan {
		width: 400px;
		height: 180px;
	}

	.process-plan > div {
		display: inline-block;
	}

	.process-plan strong {
		font-size: 40px;
		color: #36c;
	}

	#rili {
		width: 239px;
		height: 133px;
		position: relative;
		top: -127px;
		left: 1px;
	}

	.data-container {
		position: relative;
		height: 385px;
	}

	/*数据指数*/
	.data-index {
		width: 1244px;
		height: 140px;
		background-color: #fff;
	}

	.data-index span {
		display: inline;
		color: black;
		font-size: 14px;
	}

	.data-index li, .data-index h3 {
		display: inline-block;
		vertical-align: top;
	}

	.data-index .index-title li {
		width: 180px;
		height: 20px;
		background-color: #F6F7FB;
		font-size: 14px;
		text-align: center;
		margin-left: 100px;
		line-height: 20px;
		color: #666;
	}

	.data-index .tongbi li, .data-index .huanbi li {
		width: 180px;
		margin-left: 100px;
		margin-top: 21px;
		text-align: center;
	}

	.data-index .tongbi,
	.data-index .huanbi {
		color: #108CEE;
		font-size: 14px;
	}

	.data-index .tongbi {
		top: 50px;
		left: 38px;
	}

	.data-index .huanbi {
		top: 88px;
		left: 38px;
	}

	.data-index .trend {
		display: inline-block;
	}

	.trend-up {
		color: red;
	}

	.trend-down {
		color: blue;
		transform: rotate(180deg);
	}

	/*用电实时进度*/
	.power-use {
		width: 1244px;
		height: 214px;
		background-color: #fff;
	}

	.power-realTime-progress {
		width: 719px;
		height: 140px;
		display: inline-block;
		vertical-align: middle;
	}

	.power-realTime-progress small {
		color: #999999;
	}

	.power-realTime-progress .legend {
		float: right;
		margin-right: 81px;
	}

	.power-realTime-progress .legend li {
		display: inline-block;
		vertical-align: top;

	}

	.power-realTime-progress .legend .square {
		display: inline-block;
		width: 15px;
		height: 15px;
		border: 1px solid black;
		vertical-align: -4px;
	}

	.legend-red {
		background-color: red;
	}

	.legend-green {
		background-color: green;
	}

	.legend-blue {
		background-color: #108CEE;
	}

	.power-realTime-progress .progress-bar {
		width: 645px;
		height: 42px;
		border-radius: 15px;
		overflow: hidden;
		background-color: #EAF6FE;
		top: 75px;
	}

	.power-realTime-progress .progress-bar .progress-bar-frame {
		display: inline-block;
		vertical-align: top;
		width: 33%;
		height: 42px;
		border: none;
		font-size: 14px;
		color: white;
		text-align: center;
		line-height: 42px;
		border-radius: 40px;
	}

	.frame-high {
		background-color: #108CEE;

	}

	.deviation-data {
		position: relative;
		top: 148px;
	}

	.deviation-data li {
		display: inline-block;
		vertical-align: top;
		margin-left: 20px;
	}

	.deviation-data li span, .deviation-data li strong {
		width: inherit;
		font-family: '微软雅黑';
		font-weight: normal;
	}

	.deviation-data li span {
		color: #6a6a6a;
	}

	.deviation-data li strong {
		font-size: 24px;
	}

	.power-timeframe-progress {
		width: 500px;
		height: 140px;
		display: inline-block;
		vertical-align: top;

	}

	.power-timeframe-progress h3 {
		display: inline-block;
	}

	.time-frame {
		width: 407px;
		height: 373px;
		background-color: #E8ECF0;
		position: absolute;
		top: 16px;
		left: 1282px;
	}

	.time-frame .add-features {
		margin: 0 0 15px 0;
		width: 407px;
		height: 140px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-around;
		align-items: center;
	}

	.time-frame .add-features > div {
		display: inline-block;
		width: 70px;
		height: 94px;
		text-align: center;
	}

	.time-frame .add-features > div i.adduser {
		background-color: #108CEE;
	}

	.time-frame .add-features > div i.contract {
		background-color: #009900;
	}

	.time-frame .add-features > div i.terminal {
		background-color: #F38900;
	}

	.time-frame .add-features > div i {
		display: inline-block;
		vertical-align: top;
		width: 70px;
		height: 70px;
		border-radius: 35px;
	}

	.power-load-chart {
		width: 1662px;
		height: 347px;
		margin-left: 18px;
		margin-top: 15px;
		background-color: #fff;
	}

	.completion-rate {
		width: 1667px;
		height: 136px;
		background-color: #fff;
		margin-left: 20px;
	}

	.completion-rate strong {
		font-size: 24px;
		color: #999;
	}

	.completion-rate > div > div {
		width: 33%;
		height: 100px;
		line-height: 100px;
	}

</style>
<template>
	<div class="main-router">
		<div class="data-remind">
			<!--/*离线预警、数据异常、电量偏差、功率因数、负荷异常*/-->
			<div class="data-panel  five-data">
				<ul>
					<li class="five-first"><strong class="offline-warning">{{fiveData.offlineWarning}}</strong><br>离线预警
					</li>
					<li class=""><strong class="data-exception">{{fiveData.dataException}}</strong><br>数据异常</li>
					<li class=""><strong class="power-deviation">{{fiveData.powerDeviation}}</strong><br>电量偏差</li>
					<li class=""><strong class="power-factor">{{fiveData.powerFactor}}</strong><br>功率因数</li>
					<li class=""><strong class="abnormal-load">{{fiveData.abnormalLoad}}</strong><br>负荷异常</li>
				</ul>
			</div>
			<div class="data-panel  work-reminder">
				<h3 class="title">工作提醒</h3>
				<ul>
					<li><span>电量申报</span> <strong class="ft_35c">{{workReminderData.electricity}}</strong></li>
					<li><span>电费单</span> <strong class="ft_35c">{{workReminderData.electricityBill}}</strong></li>
					<li><span>电费单</span> <strong class="ft_35c">{{workReminderData.electricityBill}}</strong></li>
				</ul>
			</div>
			<div class="data-panel  process-plan">
				<h3 class="title">计划进度提醒</h3>
				<div>
					<strong>12</strong> <span>天</span>
					<p>离12月月底竞价还有</p>
				</div>
				<div id="rili">
					<home-calendar></home-calendar>
				</div>
			</div>
		</div>
		<div class="data-container">
			<div class="data-container-left">
				<div class="data-panel data-index relative">
					<h3 class="title">数据指数</h3>
					<h4 class="tongbi absolute">同比</h4>
					<h4 class="huanbi absolute">环比</h4>
					<ul class="index-title">
						<li>实际月用电量</li>
						<li>预测月偏差</li>
						<li>申报月偏差</li>
						<li>购电月偏差</li>
					</ul>
					<ul class="tongbi">
						<li><span class="count">12311.00</span> <span class="rate">12.21%</span><i
								class="trend trend-up iconfont">&#xe73f; </i></li>
						<li><span class="count">12311.00</span> <span class="rate">12.21%</span><i
								class="trend trend-up iconfont">&#xe73f;</i></li>
						<li><span class="count">12311.00</span> <span class="rate">12.21%</span><i
								class="trend trend-up iconfont">&#xe73f;</i></li>
						<li><span class="count">12311.00</span> <span class="rate">12.21%</span><i
								class="trend trend-up iconfont">&#xe73f;</i></li>
					</ul>
					<ul class="huanbi">
						<li><span class="count">12311.00</span> <span class="rate">12.21%</span><i
								class="trend trend-down iconfont">&#xe73f;</i></li>
						<li><span class="count">12311.00</span> <span class="rate">12.21%</span><i
								class="trend trend-down iconfont">&#xe73f;</i></li>
						<li><span class="count">12311.00</span> <span class="rate">12.21%</span><i
								class="trend trend-down iconfont">&#xe73f;</i></li>
						<li><span class="count">12311.00</span> <span class="rate">12.21%</span><i
								class="trend trend-down iconfont">&#xe73f;</i></li>
					</ul>
				</div>
				<div class="power-use data-panel ">
					<div class="power-realTime-progress relative">
						<h3 class="title" style="display: inline-block">用电实时进度
							<small>每十五分钟已更新</small>
						</h3>
						<ul class="legend">
							<li>已购电量 <i class="square legend-blue"></i></li>
							<li>已用电量 <i class="square legend-red"></i></li>
							<li>超出电量 <i class="square legend-green"></i></li>
						</ul>
						<div class="progress-bar absolute">
							<div class="progress-bar-frame frame-high">33%</div>
						</div>
						<div class="deviation-data">
							<ul>
								<li><span>已购:</span><strong>95,145.66</strong></li>
								<li><span>已用:</span><strong>95,145.66</strong></li>
								<li><span>超出:</span><strong>95,145.66</strong></li>
								<li><span>偏差:</span><strong>95,145.66</strong></li>
							</ul>
						</div>
					</div>
					<div class="power-timeframe-progress">
						<h3>用电实时段分布</h3>
						<div class="btn-group fr">
							<button class="button" v-bind:class="{btnSelected:powerFrameType==='month'}"
							        @click="powerFrameType='month'">月度
							</button>
							<button class="button" v-bind:class="{btnSelected:powerFrameType==='year'}"
							        @click="powerFrameType='year'">年度
							</button>
						</div>
						<power-time-frame-progress></power-time-frame-progress>
					</div>
				</div>
			</div>
			<div class="time-frame data-container-right">
				<div class="data-panel add-features flex-row">
					<div><i class="adduser"></i><br><br><br>添加用户</div>
					<div><i class="contract"></i><br><br><br>添加合同</div>
					<div><i class="terminal"></i><br><br><br>添加终端</div>
				</div>
				<power-time-frame></power-time-frame>
			</div>
		</div>
		<div class="power-load-chart">
			<real-time-power-chart></real-time-power-chart>
		</div>
		<div class="completion-rate data-panel">
			<h3 class="title">月电量预测完成率</h3>
			<div class="flex-row">
				<div class="prediction-completion-rate flex-row">
					<completion-rate></completion-rate>
					<div>共 <strong>248</strong></div>
					<div>已完成 <strong>248</strong>家</div>
					<div>未完成 <strong>248</strong>家</div>
				</div>
				<div class="prediction-completion-rate flex-row">
					<completion-rate></completion-rate>
					<div>共 <strong>248</strong></div>
					<div>已完成 <strong>248</strong>家</div>
					<div>未完成 <strong>248</strong>家</div>
				</div>
				<div class="prediction-completion-rate flex-row">
					<completion-rate></completion-rate>
					<div>共 <strong>248</strong></div>
					<div>已完成 <strong>248</strong>家</div>
					<div>未完成 <strong>248</strong>家</div>
				</div>
				<!--<div class="declare-completion-rate">-->
				<!--月客户申报完成率-->
				<!--</div>-->
				<!--<div class="audit-completion-rate">-->
				<!--月电量审核完成率-->
				<!--</div>-->
			</div>
		</div>
	</div>

</template>

<script>

    import RealTimePowerChart from '@/components/RealTimePowerChart.vue'
    import PowerTimeFrame from '@/components/PowerTimeFrame.vue'
    import PowerTimeFrameProgress from '@/components/PowerTimeFrameProgress.vue'
    import CompletionRate from '@/components/CompletionRate.vue'
    import HomeCalendar from '@/components/HomeCalendar.vue'

    export default {
        name: 'home',
        data() {
            return {
                powerFrameType: 'month',
                fiveData: {
                    offlineWarning: "00",
                    dataException: "11",
                    powerDeviation: "22",
                    powerFactor: "33",
                    abnormalLoad: "44"
                },
                workReminderData: {
                    electricity: "123",
                    electricityBill: "321"
                },
                periodicTime: 'half'
            }
        },
        computed: {
            timeData() {
                return this.$store.getters.timeData
            }
        },
        mounted() {
            this.weatherData();
//      this.reqData('half');
        },
        methods: {
            weatherData(city = '郑州') {
                this.$http.get('http://www.sojson.com/open/api/weather/json.shtml?city=%E9%83%91%E5%B7%9E').then(res => {
                    console.log(res.data.data.forecast[0].type)
                    this.weather.city = res.data.city;
                    this.weather.nowWeather = res.data.data.forecast[0].type;
                    this.weather.temperature = res.data.data.wendu;
                    this.weather.humidity = res.data.data.shidu;
                }, err => {
                    console.log(err)
                })
            }
//      ,reqData(periodicTime){
//        this.$http.get('test.json').then(response => {
//          this.periodicTime = periodicTime;
//          console.log(response.data.timeData);
//          this.$store.dispatch('SET_TIME_DATA',response.data.timeData);
//          this.drawLine();
//        }, response => {
//          // error callback
//          console.log(response)
//        })
//      }
        },
        components: {
            'real-time-power-chart': RealTimePowerChart,
            'power-time-frame': PowerTimeFrame,
            'power-time-frame-progress': PowerTimeFrameProgress,
            'completion-rate': CompletionRate,
            'home-calendar': HomeCalendar
        }
    }
</script>