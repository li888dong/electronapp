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
		},
		methods:{
			toPlanInfo() {
				this.$router.push('planInfo')
			}
		}
	}
</script>
<template>
	<panel class="process-plan">
		<h3 class="title-lv3">计划进度提醒</h3>
		<div class="btn-group" @click="toPlanInfo">
			<i class="iconfont icon-shezhi"></i>
		</div>
		<div class="deadline">
			<p class="nowDate">{{nowDate}} 星期{{week}}</p>
			<p>距离 <strong>本月竞价</strong> 还有</p>
			<span class="count-down">20</span><span>天</span>
		</div>
		<div id="rili" @click="toPlanInfo">
			<home-calendar></home-calendar>
		</div>
	</panel>
</template>
<style scoped>
	/*计划进度提醒*/
	.process-plan {
		height: 288px;
	}

	.process-plan > div {
		display: inline-block;
	}

	.process-plan .deadline {
		height: 225px;
		width: 140px;
		background-color: #5ecfb8;
		position: absolute;
		top: 45px;
		left: 40px;
		padding: 10px;
		box-sizing: border-box;
		color: white;
		vertical-align: top;
	}

	.process-plan .deadline .nowDate {
		font-size: 14px;
		font-weight: 200;
	}

	.process-plan .deadline p:nth-child(1) {
		text-align: center;
		margin-top: 0px;
	}
	.process-plan .deadline p:nth-child(2) {
		text-align: center;
		margin-top: 20px;
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
		margin: 25px 10px 0 5px;
	}

	#rili {
		height: 210px;
		overflow: hidden;
		position: absolute;
		top: 45px;
		left: 211px;
		bottom:0;
		right: 0;
		border: solid transparent;
	}
	.btn-group{
		width: 20px;
		height: 20px;
		margin-top:5px;
		cursor: pointer;
	}
	.btn-group i{
		font-weight:bold;
		font-size: 20px;
	}
</style>