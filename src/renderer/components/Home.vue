<style>
	.card{
		padding-left:5px;
		padding-right:5px;
	}
</style>
<template>

	<Row className="main-container">
		<Row type="flex">
			<Col span="17">
				<Col :lg="16" class="card">
					<!--/*离线预警、数据异常、电量偏差、功率因数、负荷异常*/-->

					<five-data></five-data>
				</Col>
				<!--工作提醒 -->
				<Col :lg="8" class="card">
					<work-remind></work-remind>
				</Col>

				<Col span="24" class="card mgt_15">
					<!--数据指数-->
					<data-index></data-index>
				</Col>
			</Col>

			<Col span="7" class="card">
				<!--计划进度提醒-->
				<process-plan></process-plan>
			</Col>
			<!--用电实时进度-->
			<Col span="9" class="card mgt_15">
			<power-use belong="com"></power-use>
			</Col>
			<!--用电时段分布-->
			<Col span="8" class="card mgt_15">
			<power-timeframe belong="com" :baseWidth='Width'></power-timeframe>
			</Col>
			<!--交易分步-->
			<Col span="7" class="card mgt_15">
			<trade-pi></trade-pi>
			</Col>
		</Row>
		<!--实时电量负荷-->
		<!-- <Row className="mgt_15"> -->
			<Col style="width: 100%" class="card mgt_15">
			<real-time-power-chart belong="com"></real-time-power-chart>
			</Col>
		<!-- </Row> -->
	</Row>
</template>

<script>
	import {ipcRenderer} from 'electron';
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
//                Width:0
			}
		},
		computed: {
			/**
			 * @return {number}
			 */
			Width: function () {
				let screenWidth = ipcRenderer.sendSync('width-change', 'change');
				let width = 0;
				console.log(screenWidth);
				if (screenWidth < 1920) {
					width = 350;
				} else {
					width = 460;
				}
				return width
			}
		},
        mounted() {
            ipcRenderer.send('renderer-complete')
        },
		methods: {},
		components: {
			'real-time-power-chart': RealTimePowerChart,
			'trade-pi': TradePi,
			'five-data': FiveData,
			'work-remind': WorkRemind,
			'data-index': DataIndex,
			'process-plan': ProcessPlan,
			'power-use': PowerUse,
			'power-timeframe': PowerTimeframeYM
		}
	}
</script>