<script>
    import CountTo from 'vue-count-to'
	export default {
	    name:"fivedata",
		data(){
	        return{
                offlineWarning: "999",
                dataException: "11",
                powerDeviation: "22",
                powerFactor: "33",
                abnormalLoad: "4"
	        }
		},
		components:{
		    CountTo
		}
	}
</script>
<template>
	<Row class-name="five-data">
		<Card>
			<Row type="flex" justify="space-between" align="middle">

				<Col span="4" class="data-item lxyj"><strong class="offline-warning"><CountTo :startVal='0' :endVal='offlineWarning' :duration='2000'></CountTo></strong><span>离线预警</span></Col>

				<Col span="4" class="data-item sjyc"><strong class="data-exception"><CountTo :startVal='0' :endVal='dataException' :duration='2000'></CountTo></strong><span>数据异常</span></Col>

				<Col span="4" class="data-item dlpc"><strong class="power-deviation"><CountTo :startVal='0' :endVal='powerDeviation' :duration='2000'></CountTo></strong><br> <span>电量偏差</span></Col>

				<Col span="4" class="data-item glys"><strong class="power-factor"><CountTo :startVal='0' :endVal='powerFactor' :duration='2000'></CountTo></strong><br><span>功率因数</span></Col>

				<Col span="4" class="data-item fhyc"><strong class="abnormal-load"><CountTo :startVal='0' :endVal='abnormalLoad' :duration='2000'></CountTo></strong><br><span>负荷异常</span></Col>
			</Row>
		</Card>

	</Row>
</template>
<style scoped>
	/*离线预警、数据异常、电量偏差、功率因数、负荷异常*/

	.five-data{
		height: 158px;
	}
	.data-item {
		height: 125px;
		text-align: center;
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

	.five-data div strong span{
		font-size: 64px;
		display: inline-block;
		text-align: center;
		width: 100%;
	}
	.five-data div>span{
		opacity: 0.7;
		font-weight:300;
	}
</style>