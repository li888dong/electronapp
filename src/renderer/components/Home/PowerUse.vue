<script>
	export default {
	    name:'poweruse',
		data(){
	        return{
				yigou:95145.66,
		        yiyong:95000.00,
		        chaochu:0,
		        piancha:0
	        }
		}
	}
</script>
<template>
	<div class="power-use data-panel ">
		<div class="power-realTime-progress relative">
			<h3 class="title" style="display: inline-block">用电实时进度
				<small>单位：<span style="color: #4FA8F9;display:inline;vertical-align:bottom">Mw.h</span> (每十五分钟已更新)</small>
			</h3>
			<ul class="legend">
				<li> <i class="square legend-yigou"></i>已购电量</li>
				<li> <i class="square legend-yiyong"></i>已用电量</li>
				<li> <i class="square legend-chaochu"></i>超出电量</li>
			</ul>
			<div class="progress-bar absolute">
				<div class="progress-bar-frame frame-high">33%</div>
				<div class="progress-bar-frame frame-normal"></div>
				<div class="progress-bar-frame frame-low">33%</div>
			</div>
			<div class="deviation-data">
				<ul>
					<li><span>已购:</span><strong>{{yigou}}</strong></li>
					<li><span>已用:</span><strong>{{yiyong}}</strong></li>
					<li><span>超出:</span><strong>{{chaochu}}</strong></li>
					<li><span>偏差:</span><strong>{{piancha}}</strong></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<style scoped>
	/*用电实时进度*/
	.power-use {
		width: 640px;
		height: 202px;
		background-color: #fff;
	}
	.power-use .title{
		margin-left: -10px;
	}
	.power-realTime-progress {
		width: 600px;
		height: 140px;
		display: inline-block;
		vertical-align: middle;
	}

	.power-realTime-progress small {
		color: #999999;
		font-weight:normal;
	}

	.power-realTime-progress .legend {
		position: absolute;
		top: 40px;
		right: -80px;
	}

	.power-realTime-progress .legend li {
		display: inline-block;
		vertical-align: top;
		margin-left: 20px;
	}

	.power-realTime-progress .legend .square {
		display: inline-block;
		width: 15px;
		height: 15px;
		margin-right: 5px;
		vertical-align: -4px;
		border: none;
	}

	.legend-yigou {
		background-color: #EEEEEE;
	}

	.legend-yiyong {
		background-color: #4FA8F9;
	}

	.legend-chaochu {
		background-color: #F35E7A;
	}

	.power-realTime-progress .progress-bar {
		width: 600px;
		height: 48px;
		border-radius: 48px;
		overflow: hidden;
		background-color: #EEEEEE;
		top: 80px;
	}

	.power-realTime-progress .progress-bar .progress-bar-frame {
		display: inline-block;
		vertical-align: top;
		height: 46px;
		font-size: 14px;
		color: white;
		text-align: center;
		line-height: 46px;
		position: absolute;
		box-sizing: border-box;
	}

	.frame-high {
		width: 33%;
		background-color: #108CEE;
		border-radius: 46px;
		border:1px solid transparent;
		top: 0;
		left: 0;
		z-index: 3;
	}
	.frame-normal {
		width: 90%;
		background-color: #eeeeee;
		border-top-right-radius: 46px;
		border-bottom-right-radius: 46px;
		top: 0;
		left: 0;
		z-index: 2;
	}
	.frame-low {
		width: 150px;
		background-color: #FBCED7;
		border-top-right-radius: 46px;
		border-bottom-right-radius: 46px;
		border:2px dotted #F35E7A;
		top: 0;
		right: 0;
		z-index: 1;
	}

	.deviation-data {
		position: relative;
		top: 161px;
		width: 600px;
		height: 30px;
	}
	.deviation-data ul {
		padding: 0;
		margin-left: -10px;
		width: 600px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-around;
	}
	.deviation-data li {
		margin-top: -15px;
		width: 100px;
		height: 43px;
		position: relative;
	}

	.deviation-data li span, .deviation-data li strong {
		width: inherit;
		font-weight: normal;
	}

	.deviation-data li span {
		color: #6a6a6a;
	}

	.deviation-data li strong {
		font-size: 24px;
		color: #178FEF;
		position: absolute;
		top: -11px;
		left: 34px;
		font-weight: bold;
	}

</style>