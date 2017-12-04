<script>
    import CountTo from 'vue-count-to'
	export default {
	    name:'workremind',
		data(){
	        return{
                electricity: "123",
                electricityBill: "321"
	        }
		},
		mounted(){
            this.$http.post(this.$api.WORK_REMIND,{com_id:this.$store.getters.com_id})
                .then(res => {
                    this.electricity = res.data[0].declar;
                    this.electricityBill = res.data[0].electbill
                }, err => {
                    this.$api.errcallback(err)
                })
                .catch(err=>{
                    this.$api.errcallback(err)
                })
		},
        components:{
            CountTo
        }
	}
</script>
<template>
	<Card class="work-reminder">
			<h3 slot="title">工作提醒</h3>
			<ul>
				<li><span>电量申报</span> <strong class="ft_35c"><CountTo :startVal='0' :endVal='electricity' :duration='2000'></CountTo></strong></li>
				<li><span>电费单</span> <strong class="ft_35c"><CountTo :startVal='0' :endVal='electricityBill' :duration='2000'></CountTo></strong></li>
			</ul>
	</Card>
</template>
<style scoped>
	/*工作提醒*/
	.work-reminder {
		height: 158px;
	}

	.work-reminder li {
		width: 90%;
		height: 32px;
		box-sizing: border-box;
		margin: 5px auto;
		line-height: 32px;
		padding-left: 23px;
		font-size: 18px;
		color: #108cee;
		background-color: #F6F7FB;
		cursor: pointer;
	}
	.work-reminder strong, span {
		display: inline-block;
		vertical-align: top;
		height: 37px;
	}

	.work-reminder span {
		font-size: 12px;
		color: #666;
		font-weight: 300;
		width: 50%;
	}

	.work-reminder strong span{
		font-size: 24px;
		font-weight: bold;
		color: #108CEE;
		width: 40%;
	}
</style>