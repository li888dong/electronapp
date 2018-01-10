<script>
	export default {
	    name:'clientsidebar',
		data(){
	        return{

	        }
		}
	}
</script>
<template>
	<div class="client-sidebar">
		<div class="search relative">
			<i class="iconfont icon-search absolute"></i>
			<input type="search" placeholder="客户编号或客户名称">
		</div>
		<div class="company-list">
			<ul>
				<li>河南众企联合售电有限公司</li>
				<li>河南众企联合售电有限公司</li>
				<li class="selected">河南众企联合售电有限公司</li>
				<li>河南众企联合售电有限公司</li>
				<li>河南众企联合售电有限公司</li>
				<li>河南众企联合售电有限公司</li>
			</ul>
		</div>
	</div>
</template>
<style scoped>
	.client-sidebar{
		width: 205px;
		height: 940px;

		background-color: #fff;
		display: inline-block;
		vertical-align: top;
		position: fixed;
		left: 220px;
		top: 82px;
	}
	.search{
		width: 205px;
		height: 60px;
		border-bottom: solid 1px #ccc;
		line-height: 60px;
	}
	.search i{
		top: 1px;
		left: 18px;
		color: #ccc;
	}
	.search input{
		width: 185px;
		height: 30px;
		border: solid 1px #ccc;
		box-sizing: border-box;
		outline: none;
		margin-left: 15px;
		padding-left: 20px;
	}
	.company-list{
		width: 205px;

	}
	.company-list li.selected{
		background-color: #108CEE;
		color: white;
	}
	.company-list li{
		width: 205px;
		height: 28px;
		text-align: center;
		overflow: hidden;
		line-height: 28px;
		word-wrap: break-word;
		white-space: nowrap;
		border-bottom: solid 1px #eee;
	}
</style>