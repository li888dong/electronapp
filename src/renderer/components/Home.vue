<style>
	.data-remind {
		position: relative;
		width: 1700px;
		height: 308px;
		overflow: hidden;
	}

	.data-remind-top, .data-remind-bottom {
		width: 1264px;
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
		width: 407px;
		height: 202px;
		background-color: #F6F6F6;
		position: absolute;
		top: 16px;
		left: 1282px;
	}

	/*.time-frame .add-features {*/
		/*margin: 0 0 15px 0;*/
		/*width: 407px;*/
		/*height: 140px;*/
		/*display: flex;*/
		/*flex-flow: row nowrap;*/
		/*justify-content: space-around;*/
		/*align-items: center;*/
	/*}*/

	/*.time-frame .add-features > div {*/
		/*display: inline-block;*/
		/*width: 70px;*/
		/*height: 94px;*/
		/*text-align: center;*/
	/*}*/

	/*.time-frame .add-features > div i.adduser {*/
		/*background-color: #108CEE;*/
	/*}*/

	/*.time-frame .add-features > div i.contract {*/
		/*background-color: #009900;*/
	/*}*/

	/*.time-frame .add-features > div i.terminal {*/
		/*background-color: #F38900;*/
	/*}*/

	/*.time-frame .add-features > div i {*/
		/*display: inline-block;*/
		/*vertical-align: top;*/
		/*width: 70px;*/
		/*height: 70px;*/
		/*border-radius: 35px;*/
	/*}*/

	.power-load-chart {
		width: 1662px;
		height: 387px;
		margin-left: 18px;
		margin-top: 6px;
		background-color: #fff;
	}

	/*.completion-rate {*/
		/*width: 1667px;*/
		/*height: 136px;*/
		/*background-color: #fff;*/
		/*margin-left: 20px;*/
	/*}*/

	/*.completion-rate strong {*/
		/*font-size: 24px;*/
		/*color: #999;*/
	/*}*/

	/*.completion-rate > div > div {*/
		/*width: 33%;*/
		/*height: 100px;*/
		/*line-height: 100px;*/
	/*}*/

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
				<power-timeframe></power-timeframe>
			</div>
			<div class="time-frame data-container-right">
				<!--<div class="data-panel add-features flex-row">-->
				<!--<div><i class="adduser"></i><br><br><br>添加用户</div>-->
				<!--<div><i class="contract"></i><br><br><br>添加合同</div>-->
				<!--<div><i class="terminal"></i><br><br><br>添加终端</div>-->
				<!--</div>-->
				<trade-pi></trade-pi>
			</div>
		</div>

		<div class="power-load-chart">
			<real-time-power-chart></real-time-power-chart>
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