<script>
	export default {
	    name:'fastboot',
	    data(){
	        return{

	        }
	    },
		methods:{
            hideSelf(){
	            this.$emit('hideSelf')
	        }
		}
	}
</script>
<template>
	<div class="fast-boot" @click.self="hideSelf">
		<div class="item-container">
			<div class="box" style="background-color: #ab7aee;">
				<span class="title absolute">星期天 17</span>
			</div>
			<div class="box" style="background-color: #0089f0;">
				<router-link to="/home">
					<i class="iconfont icon-bianyaqiyunhangpingjia"></i>
					<span class="title absolute">工作计划</span>
				</router-link>
			</div>
			<br>
			<div class="box" style="background-color: #5ecfb8;" >
				<router-link to="/AddClient">
					<i class="iconfont icon-tianjiakehu"></i>
					<span class="title absolute">添加客户</span>
				</router-link>
			</div>
			<div class="box" style="background-color: #14d86b;">
				<router-link to="/add-hetong">
					<i class="iconfont icon-contract-add-o"></i>
					<span class="title absolute">添加客户合同</span>
				</router-link>
			</div>
			<div class="box" style="background-color: #6ec71e;">
				 <router-link to="/AddContractManagement">
					 <i class="iconfont icon-tianjiaxiaoshoudan"></i>
					 <span class="title absolute">添加电厂合同</span>
				 </router-link>
			</div>
			<div class="box" style="background-color: #edb00d;">
				<router-link to="/add-celiang">
					<i class="iconfont icon-diannao"></i>
					<span class="title absolute">添加终端</span>
				</router-link>
			</div>
			<div class="box" style="background-color: #fc8b40;width: 205px">
				<i class="iconfont icon-ruku"></i>
				<span class="title absolute">申请终端入库</span>

			</div>
			<div class="box" style="background-color: #f57e6a;">
				<router-link to="/annual-forecast">
					<i class="iconfont icon-wenjianxiazai"></i>
					<span class="title absolute">导入年度预测</span>
				</router-link>
			</div>
			<div class="box" style="background-color: #f35e7a;">
				<router-link to="/import-data">
					<i class="iconfont icon-daoru"></i>
					<span class="title absolute">导入月度预测</span>
				</router-link>
			</div>
			<div class="box" style="background-color: #ab7aee;">
				<router-link to="/UserForecast">
					<i class="iconfont icon-shenhe"></i>
					<span class="title absolute">用户预测审核</span>
				</router-link>
			</div>
		</div>
	</div>
</template>
<style scoped>
	a{
		color:#fff;
	}
	.fast-boot{
		position: absolute;
		top: 79px;
		width: 100%;
		height: 900px;
		overflow: hidden;
		z-index: 1000;
	}
	.fast-boot::after{
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ffffff;
		opacity: 0.6;
	}
	.item-container{
		width: 380px;
		height: 490px;
		padding-left: 20px;
		background-color: #fff;
		position: absolute;
		z-index: 999;
		opacity: 1;
		box-shadow:2px 2px 24px #aaaaaa;
	}
	.box{
		width: 100px;
		height: 100px;
		margin: 5px 1px;
		display: inline-block;
		color: white;
		position: relative;
		cursor: pointer;
		vertical-align: middle;
		text-align: center;
	}
	.box .title{
		bottom: 5px;
		left: 5px;
	}
	.box i{
		display: inline-block;
		margin-top: 20px;
		font-size: 32px;
	}
</style>