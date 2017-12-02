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
	<Card class="process-plan">
		<h3 slot="title">计划进度提醒</h3>
		<span class="se" slot="extra" @click.prevent="toPlanInfo">
			<i class="iconfont icon-shezhi"></i>
		</span>
		<div class="deadline">
			<p class="nowDate">{{nowDate}} 星期{{week}}</p>
			<p>距离 <strong>本月竞价</strong> 还有</p>
			<span class="count-down">20</span><span>天</span>
		</div>
		<div id="rili" @click="toPlanInfo">
			<home-calendar></home-calendar>
		</div>
	</Card>
</template>
<style scoped>
	/*计划进度提醒*/
	.process-plan {
		height: 302px;
	}

	.process-plan > div {
		display: inline-block;
	}

	.process-plan .deadline {
		height: 203px;
		width: 140px;
		background-color: #5ecfb8;
		position: absolute;
		top: 67px;
		left: 16px;
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
		top: 64px;
		left: 194px;
		bottom: 0;
		right: 0;
		border: solid transparent;
	}

	.btn-group i{
		font-weight:bold;
		font-size: 20px;
	}
</style>