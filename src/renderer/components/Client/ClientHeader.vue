<script>
	export default {
	    name:'client-header',
		data(){
	        return{

	        }
		},

		methods:{
		    changePage(page){
		        this.$router.push(page)
		    }
		}
	}
</script>
<template>
	<div class="client-header">
		<i class="iconfont icon-fanhui1 back" @click="$router.go(-1)"></i><h1>河南众企联合售电有限公司</h1>
		<div class="span-group fr">

			<span :class="{selected:$route.name==='client-zonglan'}" @click="changePage('client-zonglan')"><i class="iconfont icon-zonglan-hui"></i> 总览</span>
			<span :class="{selected:$route.name==='client-detail'}" @click="changePage('client-detail')"><i class="iconfont icon-chakan"></i> 详情</span>
			<span :class="{selected:$route.name==='client-piancha'}" @click="changePage('client-piancha')"><i class="iconfont icon-zhuzhuangtutubiao"></i> 偏差</span>
			<span :class="{selected:$route.name==='client-compare'}" @click="changePage('client-compare')"><i class="iconfont icon-zhibiaoyuce"></i> 指数</span>
		</div>
	</div>
</template>
<style scoped>
	.client-header{
		width: 1467px;
		height: 60px;
		display: inline-block;
		margin-left: 25px;
		padding:0 20px;
		position: fixed;
		z-index: 1000;
		top: 100px;
	}
	.client-header .back{
		position: absolute;
		top: 18px;
		left: 0px;
		z-index: 9;
		cursor: pointer;
	}
	.client-header h1{
		height: 26px;
		font-size: 24px;
		font-weight:normal;
		line-height: 26px;
		padding:0 15px;
		margin-left:30px;
		float: left;
	}

	.client-header span{
		display: inline-block;
		width: 60px;
		margin-right: 40px;
		height: 42px;
		line-height: 42px;
		text-align: center;
		color: #444444;
		cursor: pointer;
	}
	.span-group{
		font-size: 16px;
		margin-top: 10px;
	}
	.client-header span.selected{
		color: #4fa8f9;
	}
</style>