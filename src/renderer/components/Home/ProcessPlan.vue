<script>
	import HomeCalendar from '@/components/Home/HomeCalendar'
	export default {
	    name:'processplan',
		data(){
	        return{
				nowDate: new Date().Format('yyyy-MM-dd'),
		        week:new Date().getWeek(new Date().getDay()),
		        planDate:{
                    bid_day: "",
                    fore_cycle_start: "",
                    fore_cycle_end: "",
                    decl_cycle_start: "",
                    decl_cycle_end: "",
                    cf_cycle_start: "",
                    cf_cycle_end: "",
                    biddays: 0
		        },
		        planStatus:1
	        }
		},
        mounted(){
            this.$http.post(this.$api.PLAN_REMIND,{com_id:this.$store.getters.com_id})
                .then(res => {
                    console.log('计划进度',res);
                    if(res.data.status === '1'){
                    	this.planDate.bid_day = res.data[0].bid_day;
                        this.planDate.fore_cycle_start = res.data[0].fore_cycle.split('\/')[0];
                        this.planDate.fore_cycle_end = res.data[0].fore_cycle.split('\/')[1];
                        this.planDate.decl_cycle_start = res.data[0].decl_cycle.split('\/')[0];
                        this.planDate.decl_cycle_end = res.data[0].decl_cycle.split('\/')[1];
                        this.planDate.cf_cycle_start = res.data[0].cf_cycle.split('\/')[0];
                        this.planDate.cf_cycle_end = res.data[0].cf_cycle.split('\/')[1];
                        this.planDate.biddays = res.data[0].biddays;
                        this.planStatus = res.data.status
                    }

                }, err => {
                    this.$api.errcallback(err)
                })
                .catch(err=>{
                    this.$api.errcallback(err)
                })
		},
		components:{
            'home-calendar':HomeCalendar
		},
		methods:{
			toPlanInfo() {
				this.$router.push('/planInfo')
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
			<span class="count-down">{{planDate.biddays}}</span><span>天</span>
		</div>
		<div id="rili" @click="toPlanInfo">
			<home-calendar :planDate="planDate" ></home-calendar>
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
		height: 243px;
		overflow: hidden;
		position: absolute;
		top: 46px;
		left: 194px;
		bottom: 0;
		right: 0;
		border: solid transparent;
	}

	.btn-group i{
		font-weight:bold;
		font-size: 20px;
	}
	@media (min-width: 1365px) and (max-width: 1919px) {
		#rili{
			left: 140px;
		}
		.process-plan .count-down{
			margin: 20px 0px 0 10px;
		}
		.process-plan .deadline{
			width: 140px;
			margin-left: -12px;
		}
		.process-plan .deadline .nowDate {
		font-size: 14px;
		font-weight: 200;
		text-align: center;
	}
	}
</style>