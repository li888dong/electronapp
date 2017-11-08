<script>
    export default {
        name: 'annualforecast',
        data() {
            return {}
        }
    }
</script>
<template>
	<div class="main-container">
		<span class="title">预测分析/年度分析</span>
		<div class="main-container-panel">
			<div class="header">
				<span>年度预测</span>
			</div>
			<div class="tab">
				<div class="btn-group">
					<button class="button">下一年</button>
					<button class="button btnSelected">2017年</button>
					<button class="button">下一年</button>
					<button class="button">年度选择 <i class="iconfont">&#xe613;</i></button>
					<button class="button">区域选择 <i class="iconfont">&#xe613;</i></button>
				</div>
			</div>
		</div>
	</div>

</template>
<style>
	.tab .btn-group{
		padding: 10px 16px;
	}
	.tab button{
		background-color: #EAF6FE;
	}
	.tab button i{
		color: black;
		font-size: 12px;
	}
</style>