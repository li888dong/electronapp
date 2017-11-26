<script>
	export default {
	    name:'workremind',
		data(){
	        return{
                electricity: "123",
                electricityBill: "321"
	        }
		}
	}
</script>
<template>
	<panel class="work-reminder">
		<h3 class="title-lv3">工作提醒</h3>
		<ul>
			<li><span>电量申报</span> <strong class="ft_35c">{{electricity}}</strong></li>
			<li><span>电费单</span> <strong class="ft_35c">{{electricityBill}}</strong></li>
			<li><span>电费单</span> <strong class="ft_35c">{{electricityBill}}</strong></li>
		</ul>
	</panel>
</template>
<style scoped>
	/*工作提醒*/
	.work-reminder {
		width: 100%;
		height: 157px;
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

	.work-reminder strong {
		font-size: 24px;
		color: #108CEE;
		width: 40%;
	}
</style>