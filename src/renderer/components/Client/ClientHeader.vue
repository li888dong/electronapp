<script>
	export default {
	    name:'client-header',
		data(){
	        return{

	        }
		}
	}
</script>
<template>
	<div class="client-header">
		<h1>河南众企联合售电有限公司</h1>
		<div class="btn-group fr">

			<router-link class="button" tag="button" to="/zonglan">总览</router-link>
			<router-link class="button" tag="button" to="/client-detail">详情</router-link>
			<router-link class="button" tag="button" to="/client-compare">指数</router-link>
			<router-link class="button" tag="button" to="/client-piancha">偏差</router-link>
		</div>
	</div>
</template>
<style>
	.client-header{
		width: 1447px;
		height: 60px;
		background-color: #fff;
		display: inline-block;
		margin-left: 225px;
		padding:0 20px;
		position: fixed;
		z-index: 1000;
		top: 79px;
	}
	.client-header h1{
		height: 26px;
		font-size: 24px;
		border-left: 5px solid #36c;
		font-weight:normal;
		line-height: 26px;
		padding:0 15px;
		float: left;
	}
	.client-header .btn-group{
		margin-top: 15px;
	}
	.client-header .btn-group button{
		width: 80px;
		color: #36c;
	}
</style>