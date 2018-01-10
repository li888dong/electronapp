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
	<div class="data-panel five-data">
		<ul>
			<li class="lxyj five-first"><strong class="offline-warning">{{offlineWarning}}</strong><br>离线预警
			</li>
			<li class="sjyc"><strong class="data-exception">{{dataException}}</strong><br>数据异常</li>
			<li class="dlpc"><strong class="power-deviation">{{powerDeviation}}</strong><br>电量偏差
			</li>
			<li class="glys"><strong class="power-factor">{{powerFactor}}</strong><br>功率因数</li>
			<li class="fhyc"><strong class="abnormal-load">{{abnormalLoad}}</strong><br>负荷异常</li>
		</ul>
	</div>
</template>
<style scoped>
	/*离线预警、数据异常、电量偏差、功率因数、负荷异常*/
	.five-data {
		width: 823px;
		height: 160px;
		vertical-align: top;
	}

	.five-data li {
		width: 140px;
		height: 140px;
		text-align: center;
		display: inline-block;
		vertical-align: top;
		color: #fff;
		cursor: pointer;
	}

	.five-data li.lxyj {
		background-color: #669bd8;
	}

	.five-data li.sjyc {
		background-color: #5ecfb8;
	}

	.five-data li.dlpc {
		background-color: #fea06f;
	}

	.five-data li.glys {
		background-color: #f78181;
	}

	.five-data li.fhyc {
		background-color: #ca94ec;
	}

	.five-data li:not(.five-first) {
		margin-left: 17px;

	}

	/*.five-data li:hover {*/
	/*background: #CFEAFC;*/
	/*}*/

	.five-data li strong {
		font-size: 64px;
		line-height: 100px;
	}
</style>