<style>
	.data-remind {
		position: relative;
		width: 1700px;
		height: 308px;
		overflow: hidden;
	}

	.data-remind-top, .data-remind-bottom {
		width: 1231px;
		display: inline-block;
		vertical-align: top;
	}


	.data-container {
		position: relative;
		height: 227px;
	}
	.data-container .data-container-left{
		overflow: hidden;
		margin-top: -10px;
	}


	.time-frame {
		width: 424px;
		height: 199px;
		background-color: #F6F6F6;
		position: absolute;
		top: 21px;
		left: 1250px;
	}
	.power-load-chart {
		width: 1655px;
		height: 365px;
		margin-left: 18px;
		margin-top: 10px;
		background-color: #fff;
	}

</style>
<template>
	<div class="main-router">
		<div class="data-remind">
			<div class="data-remind-top">
				<!--/*离线预警、数据异常、电量偏差、功率因数、负荷异常*/-->
				<five-data></five-data><!--
				工作提醒 --><work-remind></work-remind>
			</div>
			<div class="data-remind-bottom">
				<data-index></data-index>
			</div>
			<process-plan></process-plan>

		</div>
		<div class="data-container">
			<div class="data-container-left">
				<power-use></power-use>
				<power-timeframe baseWidth="540"></power-timeframe>
			</div>
			<div class="time-frame data-container-right">
				<trade-pi></trade-pi>
			</div>
		</div>

		<div class="power-load-chart">
			<real-time-power-chart cwidth="1655" cheight="349"></real-time-power-chart>
		</div>
	</div>

</template>

<script>

    import RealTimePowerChart from '@/components/Home/RealTimePowerChart.vue'
    import TradePi from '@/components/Home/TradePi.vue'
    import PowerTimeFrameProgress from '@/components/Home/PowerTimeFrameProgress.vue'
    import CompletionRate from '@/components/CompletionRate.vue'
    import FiveData from '@/components/Home/FiveData'
    import WorkRemind from '@/components/Home/WorkRemind'
    import DataIndex from '@/components/Home/DataIndex'
    import ProcessPlan from '@/components/Home/ProcessPlan'
    import PowerUse from '@/components/Home/PowerUse'
	import PowerTimeframeYM from '@/components/Home/PowerTimeframeYM'

    export default {
        name: 'home',
        data() {
            return {
                periodicTime: 'half',
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
            'trade-pi': TradePi,
            'power-time-frame-progress': PowerTimeFrameProgress,
            'completion-rate': CompletionRate,
            'five-data':FiveData,
            'work-remind':WorkRemind,
            'data-index':DataIndex,
            'process-plan':ProcessPlan,
            'power-use':PowerUse,
	        'power-timeframe':PowerTimeframeYM
        }
    }
</script>