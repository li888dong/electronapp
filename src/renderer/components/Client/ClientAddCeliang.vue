<script>
	export default {
	    name:'addceliang',
		data(){
	        return{

	        }
		}
	}
</script>
<template>
	<div class="addceliang-container relative">
		<div class="data-panel addceliang-panel">
			<h3 class="title">配置测量点</h3>
			<div class="from-container">
				<h4 class="title">基本信息</h4>
				<div class="label-container">
					<label><span>测量点名称</span><input type="text"></label><br>
					<label><span>测量点编号</span><input type="text"></label><br>
					<label><span>变压器信息</span><input type="text"></label><br>
					<label><span>测量点类型</span><input type="text"></label><br>
					<label><span>测量点位置</span><input type="text"></label><br>
					<label><span>安装 &nbsp;&nbsp;时间</span><input type="text"></label><br>
				</div>

			</div>
		</div>
	</div>
</template>
<style scoped>
	.addceliang-container{
		top: 60px;
		left: 205px;
		overflow: hidden;
	}

	.title{
		border-left: 4px solid #36c;
		padding-left: 5px;
	}
	.addceliang-panel{

	}
	.from-container{
		width: 1407px;
		height: 600px;
		padding-left: 70px;
		padding-top: 40px;
	}
	.from-container .title{
		font-size: 12px!important;
	}
	.label-container{
		padding-left: 50px;
	}
	.label-container label{
		margin-top: 10px;
		display: inline-block;
	}
	.label-container label span{
		display: inline-block;
		vertical-align: middle;
		margin-right: 20px;
	}
</style>