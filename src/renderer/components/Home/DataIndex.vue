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
	<div class="data-panel data-index relative">
		<h3 class="title">数据指数</h3>
		<ul class="index-title">
			<li><span class="shiji-count">实际月用电量</span><span>同比</span>|<span class="huanbi-rate">环比</span>|<span>偏差</span></li>
			<li><span class="count">预测月偏差</span><span
					class="huanbi-rate">环比</span></li>
			<li><span class="count">申报月偏差</span><span
					class="huanbi-rate">环比</span></li>
			<li><span class="count">上月监测偏差</span><span
					class="huanbi-rate">环比</span></li>
		</ul>
		<ul class="tongbi">
			<li>
				<span class="count">{{indexData.shijiliang}}</span>
				<span class="tongbi-rate">{{indexData.shijiTongbi}}<i class="trend" v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
				<span class="tongbi-rate">{{indexData.shijiTongbi}}<i class="trend" v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
				<span class="huanbi-rate">{{indexData.shijiHuanbi}}<i class="trend" v-bind:class="{trendUp:!trendUp,trendDown:trendDown}"></i></span>
			</li>
			<li><span class="count">{{indexData.yucePiancha}}%</span> <span class="huanbi-rate">{{indexData.yuceHuanbi}}<i
					class="trend" v-bind:class="{trendUp:!trendUp,trendDown:trendDown}"></i></span>
			</li>
			<li><span class="count">{{indexData.shenbaoPiancha}}%</span> <span class="huanbi-rate">{{indexData.shenbaoHuanbi}}<i
					class="trend" v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
			</li>
			<li><span class="count">{{indexData.goudianPiancha}}%</span> <span class="huanbi-rate">{{indexData.goudianHuanbi}}<i
					class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
			</li>

		</ul>
	</div>
</template>
<style scoped>
	/*数据指数*/
	.data-index {
		width: 1244px;
		height: 108px;
		background-color: #fff;
		padding: 10px;
	}

	.data-index span {
		display: inline;
		font-size: 14px;
	}

	.data-index li, .data-index h3 {
		display: inline-block;
		vertical-align: top;
	}

	.data-index .index-title,
	.data-index .tongbi{
		margin-top: 10px;
		display: flex;
		flex-flow: row nowrap;
		justify-content:space-around;
	}
	.data-index .index-title li{
		background-color: #eee;
		line-height: 30px;

	}
	.data-index .index-title li span,
	.data-index .tongbi li span{
		margin-top:8px;
		min-width: 100px;
		color: #999;
		text-align: center;
	}
	.data-index .tongbi li:nth-child(1) span{
		margin-left: 10px;
	}
	span.count{
		min-width: 100px;
	}
	.data-index li:nth-child(1),
	.data-index .tongbi li:nth-child(1){
		width: 420px;
		height: 30px;
		display: flex;
		flex-flow: row nowrap;
		justify-content:space-around;
		float: left;
	}
	.data-index li:not(:nth-child(1)),
	.data-index .tongbi li:not(:nth-child(1)) {
		width: 240px;
		height: 30px;
		display: flex;
		flex-flow: row nowrap;
		justify-content:space-around;
		float: left;
	}

	.data-index li span{
		height: 15px;
		line-height: 15px;
		color: #444;
	}
	.data-index li span.shiji-count{
		width: 200px;
	}


	.data-index .trend {
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