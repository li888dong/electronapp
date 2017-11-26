<script>
	export default {
	    name:"fivedata",
		data(){
	        return{
                offlineWarning: "00",
                dataException: "11",
                powerDeviation: "22",
                powerFactor: "33",
                abnormalLoad: "44"
	        }
		}
	}
</script>
<template>
	<panel>
		<Row class-name="five-data" type="flex" justify="space-between" align="middle">

			<div class="data-item lxyj"><strong class="offline-warning">{{offlineWarning}}</strong><br><span>离线预警</span></div>

			<div class="data-item sjyc"><strong class="data-exception">{{dataException}}</strong><br><span>数据异常</span></div>

			<div class="data-item dlpc"><strong class="power-deviation">{{powerDeviation}}</strong><br> <span>电量偏差</span></div>

			<div class="data-item glys"><strong class="power-factor">{{powerFactor}}</strong><br><span>功率因数</span></div>

			<div class="data-item fhyc"><strong class="abnormal-load">{{abnormalLoad}}</strong><br><span>负荷异常</span></div>

		</Row>
	</panel>
</template>
<style scoped>
	/*离线预警、数据异常、电量偏差、功率因数、负荷异常*/
	.five-data {
		height: 158px;
		vertical-align: top;
		background-color: #fff;
		padding:0 20px;
	}
	.data-item {
		width: 18%;
		height: 140px;
		text-align: center;
		display: inline-block;
		vertical-align: top;
		color: #fff;
		cursor: pointer;
	}

	.five-data div.lxyj {
		background-color: #669bd8;
	}

	.five-data div.sjyc {
		background-color: #5ecfb8;
	}

	.five-data div.dlpc {
		background-color: #fea06f;
	}

	.five-data div.glys {
		background-color: #f78181;
	}

	.five-data div.fhyc {
		background-color: #ca94ec;
	}


	/*.five-data li:hover {*/
	/*background: #CFEAFC;*/
	/*}*/

	.five-data div strong {
		font-size: 64px;
	}
	.five-data div span{
		opacity: 0.7;
		font-weight:300;
	}
</style>