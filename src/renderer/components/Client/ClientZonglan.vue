<script>
	import ClientHeader from './ClientHeader'
	import ClientSider from './ClientSidebar'
	import CompanyPowerProgress from '@/components/Home/PowerUse'
	import JieXianTu from '@/components/Client/JieXianTu'
	import PowerTimeframe from '@/components/Home/PowerTimeframeYM'
    import RealTimePowerChart from '@/components/Home/RealTimePowerChart.vue'
    import FuheChart from './FuheChart.vue'
    import Gonglv from './GonglvChart.vue'
    import Yougong from './YougongChart.vue'

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
			'fuhe-chart':FuheChart,
			'gonglv-chart':Gonglv,
			'yougong-chart':Yougong,
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
			<fuhe-chart></fuhe-chart>
			</Col>
			<Col span="8">
			<gonglv-chart></gonglv-chart>

			</Col>

			<Col span="8">
			<yougong-chart></yougong-chart>

			</Col>

		</Row>

		</div>
</template>
<style scoped>


</style>