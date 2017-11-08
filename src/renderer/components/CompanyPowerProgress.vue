<script>
	export default {
	    name:'companypowerprogress',
		data(){
			return{

			}
		}
	}
</script>
<template>
	<div class="relative data-panel">
		<h3 class="title" style="display: inline-block">公司电量实时进度
			<small>单位：mW.h</small>
		</h3>
		<div class="btn-group fr">
			<button class="button btnSelected">年度</button>
			<button class="button">月度</button>
		</div>

		<div class="progress-bar absolute">
			<div class="progress-bar-frame frame-high absolute" style="width: 44%;z-index: 3">44%</div>
			<!--减去6%-->
			<div class="progress-bar-frame frame-normal absolute" style="width: 33%;right: 27%;z-index: 2">33%</div>
			<div class="progress-bar-frame frame-low absolute" style="width: 33%;right: 0;z-index: 1">33%</div>
		</div>
		<ul class="legend absolute">
			<li>已购电量 <i class="square legend-blue"></i></li>
			<li>已用电量 <i class="square legend-red"></i></li>
			<li>超出电量 <i class="square legend-green"></i></li>
		</ul>
		<span class="tips absolute">注:每15分钟更新一次</span>
		<div class="deviation-data">
			<ul>
				<li><span>已购:</span><strong>95,145.66</strong></li>
				<li><span>已用:</span><strong>95,145.66</strong></li>
				<li><span>超出:</span><strong>95,145.66</strong></li>
				<li><span>偏差:</span><strong>95,145.66</strong></li>
			</ul>
		</div>
	</div>
</template>
<style scoped>
	.data-panel{
		width: 730px;
		height: 235px;
	}
	.progress-bar {
		width: 645px;
		height: 42px;
		border-radius: 15px;
		overflow: hidden;
		background-color: #EAF6FE;
		top: 75px;
	}

	.progress-bar .progress-bar-frame {
		display: inline-block;
		vertical-align: top;
		height: 42px;
		border: none;
		font-size: 14px;
		color: white;
		text-align: center;
		line-height: 42px;

	}
	.frame-high {
		background-color: #108CEE;
		border-radius: 40px;
	}
	.frame-normal {
		background-color: green;
		border-top-right-radius: 40px;
		border-bottom-right-radius: 40px;
	}
	.frame-low {
		background-color: red;
		border-top-right-radius: 40px;
		border-bottom-right-radius: 40px;
	}
	.legend{
		top: 135px;
		left: 25px;
	}
	.tips{
		top: 135px;
		left: 545px;
		color: #999999;
	}
	.btn-group{
		margin-right: 53px;
	}
	.deviation-data {
		position: relative;
		top: 148px;
	}
	.deviation-data ul{
		width: 100%;
		height: 32px;
	}
	.deviation-data li {
		float: left;
		width: 148px;
		height: 32px;
		overflow: hidden;
		margin-left: 20px;
	}
	.deviation-data li:nth-child(4){
		margin-top: -12px;
	}

	.deviation-data li span, .deviation-data li strong {
		width: inherit;
		font-weight: normal;
		vertical-align: middle;
	}

	.deviation-data li span {
		color: #6a6a6a;
	}

	.deviation-data li strong {
		font-size: 24px;
	}
</style>