<script>
	export default {
	    name:'dataindex',
		data(){
	        return{
				indexData:{
				    shijiliang:'12311.00',
					shijiTongbi:'12.21%',
					shijiHuanbi:'12.21%',
					yucePiancha:'11.00',
                    yuceTongbi:'12.21%',
                    yuceHuanbi:'12.21%',
					shenbaoPiancha:'11.00',
					shenbaoTongbi:'12.21%',
					shenbaoHuanbi:'12.21%',
					goudianPiancha:'11.00',
					goudianTongbi:'12.21%',
					goudianHuanbi:'12.21%',
				},
		        trendUp:true,
		        trendDown:true
	        }
		}
	}
</script>
<template>

	<panel class="data-index relative">
		<Row>
			<h3 class="title-lv3">数据指数</h3>

		</Row>
		<Row>

		<Col span="9">
			<Row className="data-title">
				<Col span="6">
					<span>实际月用电量</span>
				</Col>

				<Col span="6">
					<span>同比</span>
				</Col>

				<Col span="6">
					<span>环比</span>
				</Col>

				<Col span="6">
					<span>偏差</span>
				</Col>
			</Row>
			<Row className="data-content">
				<Col span="6">
				<span >{{indexData.shijiliang}}</span>
				</Col>

				<Col span="6">
				<span>{{indexData.shijiTongbi}}<i class="trend" v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>

				</Col>

				<Col span="6">
				<span>{{indexData.shijiTongbi}}<i class="trend" v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>

				</Col>

				<Col span="6">
				<span>{{indexData.shijiHuanbi}}<i class="trend" v-bind:class="{trendUp:!trendUp,trendDown:trendDown}"></i></span>

				</Col>

			</Row>
		</Col>

		<Col span="5">
			<Row className="data-title">
				<Col span="12">
					<span >预测月偏差</span>|
				</Col>
				<Col span="12">
					<span >环比</span>
				</Col>
			</Row>
			<Row className="data-content">
				<Col span="12">
				<span>{{indexData.yucePiancha}}%</span>

				</Col>
				<Col span="12">
				<span>{{indexData.yuceHuanbi}}<i class="trend" v-bind:class="{trendUp:!trendUp,trendDown:trendDown}"></i></span>

				</Col>
			</Row>
		</Col>
		<Col span="5">
			<Row className="data-title">
				<Col span="12">
				<span>申报月偏差</span>
				</Col>
				<Col span="12">
				<span >环比</span>
				</Col>
			</Row>
			<Row className="data-content">
				<Col span="12">
				<span>{{indexData.shenbaoPiancha}}%</span>

				</Col>
				<Col span="12">
				<span>{{indexData.shenbaoHuanbi}}<i class="trend" v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>

				</Col>
			</Row>
		</Col>
		<Col span="5">
			<Row className="data-title">
				<Col span="12">
				<span>上月监测偏差</span>
				</Col>
				<Col span="12">
				<span >环比</span>
				</Col>
			</Row>
			<Row className="data-content">
				<Col span="12">
				<span>{{indexData.goudianPiancha}}%</span>
				</Col>
				<Col span="12">
				<span>{{indexData.goudianHuanbi}}<i class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>

				</Col>
			</Row>
		</Col>
		</Row>

	</panel>

</template>
<style scoped>
	/*数据指数*/
	.data-index {
		height: 115px;
		background-color: #fff;
	}

	.data-title{
		background-color: #F6F7FB;
	}
	.data-content,.data-title{
		height: 30px;
		line-height: 30px;
		text-align: center;
	}
	
	.data-index h3{
		margin-bottom: 10px;
	}


	.trend {
		display: inline-block;
		width: 15px;
		height: 15px;
		line-height: 15px;
		margin-left: 5px;
		vertical-align: middle;
	}

	.trendUp {

		background: url('../../assets/icons.png') no-repeat -385px -85px;
	}

	.trendDown {
		background: url('../../assets/icons.png') no-repeat -385px -103px;
	}

</style>