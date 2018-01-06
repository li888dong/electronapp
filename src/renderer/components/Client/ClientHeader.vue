<script>
    export default {
        name: 'client-header',
        data() {
            return {}
        },
        computed: {
            cus_name: function () {
                return this.$store.getters.cus_name
            }
        },
        methods: {
            changePage(page) {
                this.$router.push(page)
            }
        }
    }
</script>
<template>
<div class="client-box">
	<div class="client-header">
		<i class="iconfont icon-fanhui1 back" @click="$router.go(-1)"></i>
		<h1>{{cus_name}}</h1>
		<div class="span-group fr">
			<span :class="{selected:$route.name==='client-zonglan'}" @click="changePage('client-zonglan')"><i
					class="iconfont icon-zonglan-hui"></i> 总览</span>
			<span :class="{selected:$route.name==='client-detail'}" @click="changePage('client-detail')"><i
					class="iconfont icon-chakan"></i> 详情</span>
			<span :class="{selected:$route.name==='client-piancha'}" @click="changePage('client-piancha')"><i
					class="iconfont icon-zhuzhuangtutubiao"></i> 偏差</span>
			<span :class="{selected:$route.name==='client-compare'}" @click="changePage('client-compare')"><i
					class="iconfont icon-zhibiaoyuce"></i> 指数</span>
		</div>
	</div>
	</div>
</template>
<style scoped>
    .client-box{
    	width: 100%;
    	height: 60px;
    	position: fixed;
		z-index: 1000;
		top: 105px;
		margin-left: 10px;
		
    }
	.client-header {
		width: 78%;
		height: 60px;
		display: inline-block;
		margin-left:25px;
		padding: 0 20px;
	}

	.client-header .back {
		position: absolute;
		top: 18px;
		left: 15px;
		z-index: 9;
		cursor: pointer;
	}

	.client-header h1 {
		height: 26px;
		font-size: 24px;
		line-height: 26px;
		padding: 0 15px;
		margin-left: 30px;
		float: left;
	}

	.client-header span {
		display: inline-block;
		width: 60px;
		margin-right: 40px;
		height: 42px;
		line-height: 42px;
		text-align: center;
		color: #444444;
		cursor: pointer;
	}

	.span-group {
		font-size: 16px;
		margin-top: 10px;
	}

	.client-header span.selected {
		color: #4fa8f9;
	}
	@media (max-width: 1366px) {
		.client-box{
			background-color: #f0f0f0;
		}
		.client-header{
			width:87.5%;
		}
	}
</style>