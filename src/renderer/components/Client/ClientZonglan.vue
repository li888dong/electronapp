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
	<div class="main-container">
		<div class="zonglan-container">
			<jiexiantu></jiexiantu><!-- b
		--><company-power-progress></company-power-progress>
			<div style="display: inline-block;margin-left: 20px;">

				<power-timeframe baseWidth="383"></power-timeframe>
			</div>
			<div class="chart-container power-load-chart">
				<real-time-power-chart cwidth="1447" cheight="349"></real-time-power-chart>
			</div>
			<div class="flex-row" style="justify-content: flex-start">
				<line-chart1></line-chart1>
				<line-chart2></line-chart2>
				<line-chart3></line-chart3>
			</div>

		</div>

	</div>
</template>
<style scoped>
	.zonglan-header{
		width: 1447px;
		height: 60px;
		background-color: #fff;
		display: inline-block;
		margin-left: 225px;
		padding:0 20px;
	}
	.zonglan-header h1{
		height: 26px;
		font-size: 24px;
		border-left: 5px solid #36c;
		font-weight:normal;
		line-height: 26px;
		padding:0 15px;
		float: left;
	}
	.zonglan-header .btn-group{
		margin-top: 15px;
	}
	.zonglan-header .btn-group button{
		width: 80px;
		color: #36c;
	}
	.main-container{
		margin-top: 81px;
		padding-left: 0;
	}
	.zonglan-container{
		width: 1488px;
		height: 880px;
		overflow: hidden;
		box-sizing: border-box;
		float: right;
		margin-top: 40px;
		margin-right: -12px;
	}
	.chart-container{
		margin-left: 20px;
		margin-top: 15px;
		background-color: #fff;
	}
	.power-load-chart{
		width: 1447px;
	}
</style>