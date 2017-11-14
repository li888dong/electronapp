<script>
	export default {
	    name:'usermanager',
		data(){
	        return{

	        }
		}
	}
</script>
<template>
	<div class="data-panel relative">
		<h3 class="title">用户管理</h3>
		<table width="100%" cellspacing="15">
			<thead>
				<tr>
					<th>登录ID</th>
					<th>申请时间</th>
					<th>手机号码</th>
					<th>绑定微信</th>
					<th>上次登录时间</th>
					<th>用户密码</th>
					<th>审核状态</th>
					<th>操作</th>
				</tr>
			</thead>
		</table>
	</div>
</template>
<style scoped>
	.data-panel{
		width: 1447px;
		height: 820px;
		top: 60px;
		left: 205px;
	}
	.data-panel th{
		height: 40px;
		background-color: #f6f6f6;

	}
</style>