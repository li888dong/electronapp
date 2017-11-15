<script>
	import ClientHeader from './ClientHeader'
	import ClientSider from './ClientSidebar'
	import CompanyPowerProgress from '@/components/Home/PowerUse'
	import JieXianTu from '@/components/JieXianTu'
	import PowerTimeframe from '@/components/PowerTimeframeProgress'
    import RealTimePowerChart from '@/components/RealTimePowerChart.vue'
    import LineChart from '@/components/LineChart.vue'

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
			'line-chart':LineChart,
			'client-header':ClientHeader
		}
	}
</script>
<template>
	<div class="main-container">
		<client-header></client-header>
		<!-- b
		--><div class="zonglan-container">

			<company-power-progress></company-power-progress>
			<jiexiantu></jiexiantu>
			<power-timeframe></power-timeframe>
			<div class="chart-container">
				<real-time-power-chart></real-time-power-chart>
			</div>
			<line-chart></line-chart>
		</div>
		<client-sider></client-sider>

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
		margin-top: 60px;
		margin-right: -12px;
	}
	.chart-container{
		margin-left: 20px;
		margin-top: 15px;
		background-color: #fff;
	}
	ul.typeSwich{
		border-bottom: solid 1px #eee;
		right: 0;
		left: 0;
		top: 10px;
		margin:0 20px;
		height: 30px;
		z-index: 999;
	}
	ul.typeSwich li {
		margin-left: 20px;
		width: 24px;
		height: 24px;
		float: right;
		border-radius: 50%;
		background-color: #eeeeee;
		border: 1px solid #999;
		text-align: center;
		line-height: 24px;
		cursor: pointer;
		color: #828282;
	}
	ul.typeSwich .btnSelected{

	}
	.danwei{
		border: none!important;
		background-color: #fff!important;
	}
	.danwei span{
		position: absolute;
		top: 30px;
		right: 20px;
		color: #868686;

	}
</style>