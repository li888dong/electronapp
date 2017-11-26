<script>
	import ClientHeader from './ClientHeader'
	import ClientSider from './ClientSidebar'
	import CompanyPowerProgress from '@/components/Home/PowerUse'
	import JieXianTu from '@/components/Client/JieXianTu'
	import PowerTimeframe from '@/components/Home/PowerTimeframeYM'
    import RealTimePowerChart from '@/components/Home/RealTimePowerChart.vue'
    import LineChart1 from '@/components/LineChart1.vue'
    import LineChart2 from '@/components/LineChart2.vue'
    import LineChart3 from '@/components/LineChart3.vue'

    export default {
	    name:'zonglan',
		data(){
	        return{

	        }
		},
		components:{
		    'real-time-power-chart': RealTimePowerChart,
            'client-sider':ClientSider,
			'company-power-progress':CompanyPowerProgress,
			'jiexiantu':JieXianTu,
            'power-timeframe':PowerTimeframe,
			'line-chart1':LineChart1,
			'line-chart2':LineChart2,
			'line-chart3':LineChart3,
			'client-header':ClientHeader
		}
	}
</script>
<template>
		<div class="client-container">
		<Row gutter=15>
			<Col span="7">
			<jiexiantu></jiexiantu>
			</Col>
			<Col span="10">
			<company-power-progress></company-power-progress>
			</Col>
			<Col span="7">
			<power-timeframe baseWidth="323"></power-timeframe>
			</Col>
		</Row>
		<Row class="mgt_15">
			<Col span="24">
				<real-time-power-chart></real-time-power-chart>
			</Col>

		</Row>
		<Row class="mgt_15" gutter=15>
			<Col span="8">
			<line-chart1></line-chart1>
			</Col>
			<Col span="8">
			<line-chart2></line-chart2>

			</Col>

			<Col span="8">
			<line-chart3></line-chart3>

			</Col>

		</Row>

		</div>
</template>
<style scoped>


</style>