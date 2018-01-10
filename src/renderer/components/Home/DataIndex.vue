<script>
	export default {
	    name:'dataindex',
		data(){
	        return{
				indexData:{
				    shijiliang:'12311.00',
					shijiTongbi:'12.21%',
					shijiHuanbi:'12.21%',
					yucePiancha:'12311.00',
                    yuceTongbi:'12.21%',
                    yuceHuanbi:'12.21%',
					shenbaoPiancha:'12311.00',
					shenbaoTongbi:'12.21%',
					shenbaoHuanbi:'12.21%',
					goudianPiancha:'12311.00',
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
			<li><span class="count">实际月用电量</span><span class="tongbi-rate">同比</span><span
					class="huanbi-rate">环比</span></li>
			<li><span class="count">预测月偏差</span><span class="tongbi-rate">同比</span><span
					class="huanbi-rate">环比</span></li>
			<li><span class="count">申报月偏差</span><span class="tongbi-rate">同比</span><span
					class="huanbi-rate">环比</span></li>
			<li><span class="count">购电月偏差</span><span class="tongbi-rate">同比</span><span
					class="huanbi-rate">环比</span></li>
		</ul>
		<ul class="tongbi">
			<li><span class="count">{{indexData.shijiliang}}</span> <span class="tongbi-rate">{{indexData.shijiTongbi}}<i
					class="trend" v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span><span class="huanbi-rate">{{indexData.shijiHuanbi}}<i
					class="trend" v-bind:class="{trendUp:!trendUp,trendDown:trendDown}"></i></span>
			</li>
			<li><span class="count">{{indexData.yucePiancha}}</span> <span class="tongbi-rate">{{indexData.yuceTongbi}}<i
					class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span><span class="huanbi-rate">{{indexData.yuceHuanbi}}<i
					class="trend" v-bind:class="{trendUp:!trendUp,trendDown:trendDown}"></i></span>
			</li>
			<li><span class="count">{{indexData.shenbaoPiancha}}</span> <span class="tongbi-rate">{{indexData.shenbaoTongbi}}<i
					class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span><span class="huanbi-rate">{{indexData.shenbaoHuanbi}}<i
					class="trend" v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>
			</li>
			<li><span class="count">{{indexData.goudianPiancha}}</span> <span class="tongbi-rate">{{indexData.goudianTongbi}}<i
					class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span><span class="huanbi-rate">{{indexData.goudianHuanbi}}<i
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

	.data-index .index-title {
		margin-left: -30px;
		margin-top: 10px;
	}
	.data-index .index-title li span{
		color: #999;
	}
	.data-index li {
		width: 271px;
		height: 30px;
		background-color: #F6F7FB;
		font-size: 14px;
		text-align: center;
		margin-left: 40px;
		padding: 5px;
		box-sizing: border-box;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-around;
		float: left;
		position: relative;
	}

	.data-index li span {
		position: absolute;
		height: 15px;
		line-height: 15px;
		color: #444;
	}

	.data-index li span.count {
		width: 111px;
		top: 8px;
		left: -5px;
	}

	.data-index li span.tongbi-rate {
		width: 80px;
		top: 8px;
		left: 106px;
	}

	.data-index li span.huanbi-rate {
		width: 80px;
		top: 8px;
		right: 0;
	}

	.data-index .index-title li span:nth-child(3) {
		border-left: 2px solid #B3B4B5;

	}

	.data-index .tongbi li {
		top:5px;
		background-color: #fff;
	}

	.data-index .tongbi {
		font-size: 14px;
		margin-left: -30px;

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