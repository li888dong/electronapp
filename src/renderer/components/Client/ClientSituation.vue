<script>
	import HenanMap from '@/components/HenanMap'
	export default {
		name:'clientsituation',
		components:{
		    'henan-map':HenanMap
		},
		methods:{
		    hoverCity(params){
		        console.log(params.name)
		    }
		}
	}
</script>
<template>
	<div>
		<div class="main-container">
			<div class="main-container-panel">
				<div class="input-container">
					<h3 class="title">检索客户 </h3>
					<div class="btn-group">
						<i class="iconfont icon-search"></i><input type="search" placeholder="公司名称或关键字、企业编号、合同编号等"><button class="button btnSelected">搜索</button>
					</div>
				</div>
				<div class="map-container">
					<h3 class="title">客户分布</h3>
					<henan-map v-on:hoverCity="hoverCity"></henan-map>
				</div>
				<div class="ranklist-container">
					<h3 class="title">客户总量排行榜</h3>
					<ul>
						<li><span class="ranking">1.</span><span class="city">信阳市</span><span class="ranklist-bar"></span></li>
						<li><span class="ranking">1.</span><span class="city">洛阳市</span><span class="ranklist-bar"></span></li>
						<li><span class="ranking">1.</span><span class="city">驻马店</span><span class="ranklist-bar"></span></li>
						<li><span class="ranking">1.</span><span class="city">周口市</span><span class="ranklist-bar"></span></li>
						<li><span class="ranking">1.</span><span class="city">商丘市</span><span class="ranklist-bar"></span></li>
						<li><span class="ranking">1.</span><span class="city">三门峡</span><span class="ranklist-bar"></span></li>
						<li><span class="ranking">1.</span><span class="city">新乡市</span><span class="ranklist-bar"></span></li>
						<li><span class="ranking">1.</span><span class="city">平顶山</span><span class="ranklist-bar"></span></li>
						<li><span class="ranking">1.</span><span class="city">郑州市</span><span class="ranklist-bar"></span></li>
						<li><span class="ranking">1.</span><span class="city">南阳市</span><span class="ranklist-bar"></span></li>
					</ul>
				</div>
			</div>
			<div class="main-container-panel table-container">
				<h3 class="title">客户区域分布概况</h3>
				<table cellspacing="15">
					<tbody>
					<tr>
						<td>123123</td>
						<td>123123</td>
						<td>123123</td>
						<td>123123</td>
						<td>123123</td>
						<td>123123</td>
					</tr>
					<tr>
						<td>123123</td>
						<td>123123</td>
						<td>123123</td>
						<td>123123</td>
						<td>123123</td>
						<td>123123</td>
					</tr>
					<tr>
						<td>123123</td>
						<td>123123</td>
						<td>123123</td>
						<td>123123</td>
						<td>123123</td>
						<td>123123</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>

	</div>
</template>
<style scoped>
	.main-container-panel{
		margin-top: 15px;

	}
	.main-container-panel>div{
		display: inline-block;
		vertical-align: top;
		height: 500px;
		background-color: #fff;
	}
	.input-container{
		width: 550px;
	}
	.input-container .btn-group{
		position: relative;
		top: 195px;
		left: 50px;
	}
	.input-container input{
		width: 400px;
		height: 50px;
		font-size: 16px;
		padding: 10px 20px;
	}
	.input-container i{
		position: relative;
		left: 20px;
	}
	.input-container button{
		height: 50px;
		vertical-align: top;
		width: 80px;
	}
	.map-container{
		width: 800px;
	}
	.ranklist-container{
		width: 300px;
	}
	.ranklist-container li{
		width: 200px;
		height: 40px;
		text-align: center;
		line-height: 40px;
	}
	.ranklist-container li span{
		display: inline-block;
		vertical-align: middle;
	}
	.ranklist-container li .ranking{
		width: 10px;
	}
	.ranklist-container li .city{
		padding:0 20px ;
	}
	.ranklist-container li .ranklist-bar{
		width: 60px;
		height: 5px;
		background-color: #36c;
	}
	.table-container{
		height: 300px;
	}
	table{
		margin:0 auto;
	}
	table td{
		width: 256px;
		height: 75px;
		background-color: #F6F7FB;
	}
</style>