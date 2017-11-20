<script>
	import HomeCalendar from '@/components/Home/HomeCalendar'
	export default {
	    name:'processplan',
		data(){
	        return{
				nowDate: new Date().Format('yyyy-MM-dd'),
		        week:new Date().getWeek(new Date().getDay())
	        }
		},
		components:{
            'home-calendar':HomeCalendar
		}
	}
</script>
<template>
	<div class="data-panel process-plan absolute">
		<h3 class="title">计划进度提醒</h3>
		<div class="deadline">
			<p class="nowDate">{{nowDate}} 星期{{week}}</p>
			<p>距离 <strong>本月竞价</strong> 还有</p>
			<span class="count-down">20</span><span>天</span>
		</div>
		<div id="rili">
			<home-calendar></home-calendar>
		</div>
	</div>
</template>
<style scoped>
	/*计划进度提醒*/
	.process-plan {
		width: 424px;
		height: 282px;
		padding: 10px;
		right: 5px;
		top: -177px;
	}

	.process-plan > div {
		display: inline-block;
	}

	.process-plan .deadline {
		height: 210px;
		width: 140px;
		background-color: #5ecfb8;
		margin-top: 20px;
		padding: 10px;
		box-sizing: border-box;
		color: white;
		vertical-align: top;
	}

	.process-plan .deadline .nowDate {
		font-size: 14px;
		font-weight: 200;
	}

	.process-plan .deadline p {
		text-align: center;
		margin-top: 10px;
	}

	.process-plan strong {
		font-size: 14px;
		font-weight: normal;
	}

	.process-plan span {
		display: inline-block;
		vertical-align: bottom;
	}

	.process-plan .count-down {
		font-size: 64px;
		color: #fea06f;
		width: 85px;
		height: 76px;
		text-align: center;
		line-height: 80px;
		box-sizing: border-box;
		background-color: #fff;
		border-radius: 5px;
		font-weight: bold;
		margin-right: 10px;
		margin-left: 5px;
		margin-top: 20px;
	}

	#rili {
		width: 236px;
		height: 210px;
		overflow: hidden;
		position: relative;
		top: 20px;
		left: 0px;
		border: solid transparent;
	}

</style>