<script>
	import BidChart from '@/components/BidChart'
	import PreviousBidingChart from '@/components/PreviousBidingChart'
	export default {
	    name:'bidmanagement',
		data(){
	        return{

	        }
		},
		components:{
		    'bid-chart':BidChart,
            'previous-biding-chart':PreviousBidingChart
		}
	}
</script>
<template>
	<div class="main-container">
		交易概况
		<bid-chart></bid-chart>
		<previous-biding-chart></previous-biding-chart>
		<div class="previous-biding-resolute data-panel">
			<h3 class="title">上期交易结果公式</h3>
			<div class="btn-group fr"><button class="button btnSelected">导入数据</button></div>
			<table>
				<thead>
					<tr>
						<th>购方名称</th>
						<th>所属区域</th>
						<th>售方名称</th>
						<th>时间段</th>
						<th>成交电量</th>
						<th>成交电价</th>
						<th>价差</th>
						<th>电厂报价</th>
						<th>售电公司报价</th>
						<th>报价价差</th>
					</tr>
				</thead>
			</table>
		</div>
	</div>
</template>
<style>
	.previous-biding-resolute{
		width: 1667px;
		height: 329px;
		margin: 0!important;
	}
	.previous-biding-resolute table{
		width: 80%;
	}
	.previous-biding-resolute th{
		width: 80px;
		height: 40px;
		background-color: #F6F7FB;
	}
</style>