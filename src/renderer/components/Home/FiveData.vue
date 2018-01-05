<script>
    import CountTo from 'vue-count-to'
	export default {
	    name:"fivedata",
		data(){
	        return{
	            fiveData:{
                    abnormal:0,
                    deviation:0,
                    powerfactor:0,
                    offline:0,
                    activepower:0
	            }
	        }
		},
		mounted(){
			this.doAjax()
		},
		methods:{
			doAjax(){
                this.$http.post(this.$api.WARNING_INFO,{com_id:this.$store.getters.com_id})
	                .then(res => {
	                	console.log('数据异常提醒',res);
	                	if(res.data.status === '1'){
	                		this.fiveData = res.data[0];
	                	}
						console.log('*****',this.fiveData)
	                }, err => {
	                    this.$api.errcallback(err)
	                })
	                .catch(err=>{
                        this.$api.errcallback(err)
	                })
			}
		},
		components:{
		    CountTo
		}
	}
</script>
<template>
	<Row className="five-data">
		<Card>
			<Row type="flex" justify="space-between" align="middle">

				<Col span="4" class="data-item lxyj"><strong class="offline-warning"><CountTo :startVal='0' :endVal='fiveData.offline||0' :duration='2000'></CountTo></strong><span class="data-title">离线预警</span></Col>

				<Col span="4" class="data-item sjyc"><strong class="data-exception"><CountTo :startVal='0' :endVal='fiveData.abnormal' :duration='2000'></CountTo></strong><span class="data-title">数据异常</span></Col>

				<Col span="4" class="data-item dlpc"><strong class="power-deviation"><CountTo :startVal='0' :endVal='fiveData.activepower' :duration='2000'></CountTo></strong> <span class="data-title">电量偏差</span></Col>

				<Col span="4" class="data-item glys"><strong class="power-factor"><CountTo :startVal='0' :endVal='fiveData.powerfactor' :duration='2000'></CountTo></strong><span class="data-title">功率因数</span></Col>

				<Col span="4" class="data-item fhyc"><strong class="abnormal-load"><CountTo :startVal='0' :endVal='fiveData.deviation' :duration='2000'></CountTo></strong><span class="data-title">负荷异常</span></Col>
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
		position: relative;
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
		font-size: 36px;
		text-align: center;
		left: 0;
		right: 0;
		position: absolute;
		top: 20%;
	}
	.data-title{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 10%;
		opacity: 0.7;
		font-weight:300;
	}
</style>