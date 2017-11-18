<script>
	import HenanMap from '@/components/HenanMap'
	export default {
		name:'clientsituation',
		components:{
		    'henan-map':HenanMap
		},
		data(){
		  return{
		      searchKey:''
		  }
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
					<h3 class="title" style="margin-right: 5px;">检索客户 </h3><span><span style="color: #4fa8f9">全国</span> > 河南</span>
					<div class="btn-group">
						<i class="iconfont icon-search"></i><input type="search" placeholder="公司名称或关键字、企业编号、合同编号等" v-model="searchKey"><button class="button btnSelected" style="font-size: 16px;">搜索</button>
					</div>
				</div>
				<div class="map-container">
					<h3 class="title">客户分布</h3>
					<henan-map v-on:hoverCity="hoverCity"></henan-map>
				</div>
				<div class="ranklist-container">
					<h3 class="title">客户总量排行榜</h3>
					<ul>
						<li><span class="ranking">No.1</span><span class="city">信阳市</span><span class="rate">88.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.88+'px'}"></span></li>
						<li><span class="ranking">No.2</span><span class="city">洛阳市</span><span class="rate">77.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.77+'px'}"></span></li>
						<li><span class="ranking">No.3</span><span class="city">驻马店</span><span class="rate">66.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.66+'px'}"></span></li>
						<li><span class="ranking">No.4</span><span class="city">周口市</span><span class="rate">55.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.55+'px'}"></span></li>
						<li><span class="ranking">No.5</span><span class="city">商丘市</span><span class="rate">44.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.44+'px'}"></span></li>
						<li><span class="ranking">No.6</span><span class="city">三门峡</span><span class="rate">33.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.33+'px'}"></span></li>
						<li><span class="ranking">No.7</span><span class="city">新乡市</span><span class="rate">22.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.22+'px'}"></span></li>
						<li><span class="ranking">No.8</span><span class="city">平顶山</span><span class="rate">11.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.11+'px'}"></span></li>
						<li><span class="ranking">No.9</span><span class="city">郑州市</span><span class="rate">5.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.05+'px'}"></span></li>
						<li><span class="ranking">No.10</span><span class="city">南阳市</span><span class="rate">1.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.01+'px'}"></span></li>
					</ul>
				</div>
			</div>
			<div class="main-container-panel table-container">
				<h3 class="title">客户区域分布概况</h3>
				<div class="flex-col">
					<div class="flex-row">
						<div class="newItem">
							<p class="item-title"><span>郑州</span></p>
							<p class="count"><span>2658</span></p>
							<p class="new"><span>月新增 <span class="new-count">228家</span> 新用户</span></p>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>
<style scoped>
	.main-container-panel{
		margin-top: 20px;
		padding-top: 15px;
		width: 1655px;
		height: 437px;
		box-sizing: border-box;
	}
	.main-container-panel>div{
		display: inline-block;
		vertical-align: top;
		height: 437px;
		background-color: #fff;
	}
	.input-container{
		width: 545px;
	}
	.input-container .btn-group{
		position: relative;
		top: 168px;
		left: 30px;
	}
	.input-container input{
		width: 400px;
		height: 48px;
		font-size: 16px;
		padding: 10px 40px;
		border: 1px solid #ccc;
		outline: none;
	}
	.input-container i{
		position: relative;
		left: 36px;
		top: 2px;
		font-size: 20px!important;
		color: #999;
	}
	.input-container button{
		height: 48px;
		vertical-align: top;
		width: 80px;
	}
	.map-container{
		width: 700px;
	}
	.ranklist-container{
		width: 400px;
	}
	.ranklist-container ul{
		margin-top: 20px;
	}
	.ranklist-container li{
		height: 32px;
		line-height: 32px;
	}
	.ranklist-container li span{
		display: inline-block;
		vertical-align: middle;
	}
	span.rate{
		min-width: 50px;
	}
	.ranklist-container li .ranking{
		width: 40px;
		text-align: right;
	}
	.ranklist-container li .city{
		padding:0 20px ;
	}
	.ranklist-container li .ranklist-bar{
		height: 10px;
		margin-left: 10px;
		background-color: #31C9D7;
	}
	.table-container{
		height: 457px;
	}
	.newItem{
		width: 245px;
		height: 122px;
		background-color:#F6F7FB;
	}
	.newItem p{
		padding: 0;
	}
	.newItem .item-title{
		padding: 10px 0 0 10px;
		font-size: 14px;
	}
	.newItem .count{
		text-align: center;
		font-size: 48px;
		font-weight:bold;
		color: #0089F0;
	}
	.newItem .new{
		text-align: center;
		font-size: 14px;
	}
</style>