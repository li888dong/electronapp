<style>


</style>
<template>

	<Row className="main-container">
		<Row gutter=15>
			<Col span="17">
				<Row gutter=15>
					<!--/*离线预警、数据异常、电量偏差、功率因数、负荷异常*/-->
					<Col span="16">
						<five-data></five-data>
					</Col>
					<!--工作提醒 -->
					<Col span="8">
						<work-remind></work-remind>
					</Col>
				</Row>
				<Row class="mgt_15">
					<!--数据指数-->
					<data-index></data-index>
				</Row>
			</Col>
			<Col span="7">
				<!--计划进度提醒-->
				<process-plan></process-plan>
			</Col>
		</Row>
		<Row gutter=15 className="mgt_15">
			<!--用电实时进度-->
			<Col span="9">
				<power-use></power-use>
			</Col>
			<!--用电时段分布-->
			<Col span="8">
				<power-timeframe baseWidth="500"></power-timeframe>
			</Col>
			<!--交易分步--> 
			<Col span="7">
				<trade-pi></trade-pi>
			</Col>
		</Row>
		<!--实时电量负荷-->
		<Row className="mgt_15">
			<Col span="24">
				<real-time-power-chart></real-time-power-chart>
			</Col>
		</Row>
	</Row>
</template>

<script>

    import RealTimePowerChart from '@/components/Home/RealTimePowerChart.vue'
    import TradePi from '@/components/Home/TradePi.vue'
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
            'five-data':FiveData,
            'work-remind':WorkRemind,
            'data-index':DataIndex,
            'process-plan':ProcessPlan,
            'power-use':PowerUse,
	        'power-timeframe':PowerTimeframeYM
        }
    }
</script>