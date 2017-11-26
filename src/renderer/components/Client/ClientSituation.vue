<script>
	import HenanMap from '@/components/HenanMap'
	import MyTab from '@/components/Tool/MyTab'
    import Panel from "../Tool/Panel.vue";
	export default {
		name:'clientsituation',
		components:{
            Panel,
            'my-tab':MyTab,
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
	<div class="main-container">
		<Row>
			<Col span="8">
				<panel class="search-container">
					<h3 class="title-lv2">检索客户 </h3><sub style="font-size: 12px;"><span style="color: #4fa8f9">全国</span> > 河南</sub>

					<Row type="flex" align="middle" style="margin-top: 200px;">
						<i class="iconfont icon-search search-i"></i>
						<input
							class="large-search"
							type="search"
							placeholder="公司名称或关键字、企业编号、合同编号等"
							v-model="searchKey"><my-tab type="primary" style="height: 36px;width: 68px;line-height: 28px;">搜索</my-tab>
					</Row>
				</panel>
			</Col>
			<Col span="10">
				<panel class="map-container relative">
					<h3 class="title-lv2">客户分布</h3>
					<henan-map v-on:hoverCity="hoverCity" style="margin-top: 50px;"></henan-map>
				</panel>
			</Col>
			<Col span="6">
				<panel class="ranklist-container">
					<h3 class="title-lv2">客户总量排行榜</h3>
					<ul>
						<li><span class="ranking">1.&nbsp; </span><span class="city">信阳市</span><span class="rate">88.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.88+'px'}"></span></li>
						<li><span class="ranking">2.&nbsp; </span><span class="city">洛阳市</span><span class="rate">77.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.77+'px'}"></span></li>
						<li><span class="ranking">3.&nbsp; </span><span class="city">驻马店</span><span class="rate">66.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.66+'px'}"></span></li>
						<li><span class="ranking">4.&nbsp; </span><span class="city">周口市</span><span class="rate">55.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.55+'px'}"></span></li>
						<li><span class="ranking">5.&nbsp; </span><span class="city">商丘市</span><span class="rate">44.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.44+'px'}"></span></li>
						<li><span class="ranking">6.&nbsp; </span><span class="city">三门峡</span><span class="rate">33.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.33+'px'}"></span></li>
						<li><span class="ranking">7.&nbsp; </span><span class="city">新乡市</span><span class="rate">22.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.22+'px'}"></span></li>
						<li><span class="ranking">8.&nbsp; </span><span class="city">平顶山</span><span class="rate">11.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.11+'px'}"></span></li>
						<li><span class="ranking">9.&nbsp; </span><span class="city">郑州市</span><span class="rate">5.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.05+'px'}"></span></li>
						<li><span class="ranking">10.&nbsp; </span><span class="city">南阳市</span><span class="rate">1.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.01+'px'}"></span></li>
					</ul>
				</panel>
			</Col>
		</Row>
		<Row className="mgt_15">
			<panel>
				<h3 class="title-lv2">客户区域分布概况</h3>
				<div class="flex-col">
					<div class="flex-row">
						<div class="newItem">
							<p class="item-title"><span>郑州</span></p>
							<p class="count"><span>2658</span></p>
							<p class="new"><span>月新增 <span class="new-count">&nbsp; 228 &nbsp;</span> 家新用户</span></p>
						</div>
						<div class="newItem">
							<p class="item-title"><span>郑州</span></p>
							<p class="count"><span>2658</span></p>
							<p class="new"><span>月新增 <span class="new-count">&nbsp; 228 &nbsp;</span> 家新用户</span></p>
						</div>
						<div class="newItem">
							<p class="item-title"><span>郑州</span></p>
							<p class="count"><span>2658</span></p>
							<p class="new"><span>月新增 <span class="new-count">&nbsp; 228 &nbsp;</span> 家新用户</span></p>
						</div>
						<div class="newItem">
							<p class="item-title"><span>郑州</span></p>
							<p class="count"><span>2658</span></p>
							<p class="new"><span>月新增 <span class="new-count">&nbsp; 228 &nbsp;</span> 家新用户</span></p>
						</div>
						<div class="newItem">
							<p class="item-title"><span>郑州</span></p>
							<p class="count"><span>2658</span></p>
							<p class="new"><span>月新增 <span class="new-count">&nbsp; 228 &nbsp;</span> 家新用户</span></p>
						</div>
						<div class="newItem">
							<p class="item-title"><span>郑州</span></p>
							<p class="count"><span>2658</span></p>
							<p class="new"><span>月新增 <span class="new-count">&nbsp; 228 &nbsp;</span> 家新用户</span></p>
						</div>
					</div>
					<div class="flex-row">
						<div class="newItem">
							<p class="item-title"><span>郑州</span></p>
							<p class="count"><span>2658</span></p>
							<p class="new"><span>月新增 <span class="new-count">&nbsp; 228 &nbsp;</span> 家新用户</span></p>
						</div>
						<div class="newItem">
							<p class="item-title"><span>郑州</span></p>
							<p class="count"><span>2658</span></p>
							<p class="new"><span>月新增 <span class="new-count">&nbsp; 228 &nbsp;</span> 家新用户</span></p>
						</div>
						<div class="newItem">
							<p class="item-title"><span>郑州</span></p>
							<p class="count"><span>2658</span></p>
							<p class="new"><span>月新增 <span class="new-count">&nbsp; 228 &nbsp;</span> 家新用户</span></p>
						</div>
						<div class="newItem">
							<p class="item-title"><span>郑州</span></p>
							<p class="count"><span>2658</span></p>
							<p class="new"><span>月新增 <span class="new-count">&nbsp; 228 &nbsp;</span> 家新用户</span></p>
						</div>
						<div class="newItem">
							<p class="item-title"><span>郑州</span></p>
							<p class="count"><span>2658</span></p>
							<p class="new"><span>月新增 <span class="new-count">&nbsp; 228 &nbsp;</span> 家新用户</span></p>
						</div>
						<div class="newItem">
							<p class="item-title"><span>郑州</span></p>
							<p class="count"><span>2658</span></p>
							<p class="new"><span>月新增 <span class="new-count">&nbsp; 228 &nbsp;</span> 家新用户</span></p>
						</div>
					</div>
					<div class="flex-row">
						<div class="newItem">
							<p class="item-title"><span>郑州</span></p>
							<p class="count"><span>2658</span></p>
							<p class="new"><span>月新增 <span class="new-count">&nbsp; 228 &nbsp;</span> 家新用户</span></p>
						</div>
						<div class="newItem">
							<p class="item-title"><span>郑州</span></p>
							<p class="count"><span>2658</span></p>
							<p class="new"><span>月新增 <span class="new-count">&nbsp; 228 &nbsp;</span> 家新用户</span></p>
						</div>
						<div class="newItem">
							<p class="item-title"><span>郑州</span></p>
							<p class="count"><span>2658</span></p>
							<p class="new"><span>月新增 <span class="new-count">&nbsp; 228 &nbsp;</span> 家新用户</span></p>
						</div>
						<div class="newItem">
							<p class="item-title"><span>郑州</span></p>
							<p class="count"><span>2658</span></p>
							<p class="new"><span>月新增 <span class="new-count">&nbsp; 228 &nbsp;</span> 家新用户</span></p>
						</div>
						<div class="newItem">
							<p class="item-title"><span>郑州</span></p>
							<p class="count"><span>2658</span></p>
							<p class="new"><span>月新增 <span class="new-count">&nbsp; 228 &nbsp;</span> 家新用户</span></p>
						</div>
						<div class="newItem">
							<p class="item-title"><span>郑州</span></p>
							<p class="count"><span>2658</span></p>
							<p class="new"><span>月新增 <span class="new-count">&nbsp; 228 &nbsp;</span> 家新用户</span></p>
						</div>
					</div>
				</div>
			</panel>
		</Row>
	</div>
</template>
<style scoped>
	.search-container{
		height: 456px;
	}

	.large-search{
		width: 75%;
		height: 36px;
		font-size: 14px!important;
		padding: 10px 0 10px 40px;
		border: 1px solid #ccc;
		outline: none;
		vertical-align: middle;
	}
	i.search-i{
		position: relative;
		left: 36px;
		top: 2px;
		font-size: 20px!important;
		color: #999;
	}

	.map-container{
		width:100%;
		height: 456px;
		overflow: hidden;
	}

	.newItem{
		width: 245px;
		height: 115px;
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
		font-size: 42px;
		font-weight:bold;
		color: #0089F0;
		line-height: 40px;
	}
	.newItem .new{
		text-align: center;
		font-size: 14px;
	}
	.newItem .new-count{
		font-size: 24px;
		font-weight:bold;
		color: #f38900;
	}
	.flex-row{
		height: 132px;
	}
	.ranklist-container{
		height: 456px;
	}
	.ranklist-container li{
		height: 40px;
	}
</style>