<script>
	import HenanMap from '@/components/HenanMap'
    export default {
        name: 'sandTable',
        data() {
            return {

            }
        },
	    components:{
            'henan-map':HenanMap
	    }
    }
</script>
<template>
	<div class="main-container relative">
		<div class="map-container data-panel">
			<div class="header">
				<h3>售电沙盘<small>每月度自动更新</small></h3>
			</div>
			<div class="map">
				<henan-map></henan-map>
			</div>
			<div class="market-shares">
				<div class="btn-group" style="margin-left: 300px;">
					<button class="button btnSelected">市场份额</button><button class="button ">偏差考核</button>
				</div>
				<div class="list-container" style="margin-left: 109px;">
					<ul>
						<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">1.</span><span class="rate">55%</span><span class="bar"></span></li>
						<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">2.</span><span class="rate">55%</span><span class="bar"></span></li>
						<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">3.</span><span class="rate">55%</span><span class="bar"></span></li>
						<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">4.</span><span class="rate">55%</span><span class="bar"></span></li>
						<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">5.</span><span class="rate">55%</span><span class="bar"></span></li>
						<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">6.</span><span class="rate">55%</span><span class="bar"></span></li>
						<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">7.</span><span class="rate">55%</span><span class="bar"></span></li>
						<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">8.</span><span class="rate">55%</span><span class="bar"></span></li>
						<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">9.</span><span class="rate">55%</span><span class="bar"></span></li>
						<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">10.</span><span class="rate">55%</span><span class="bar"></span></li>
					</ul>
				</div>

			</div>
		</div>
		<div class="data-panel list">
			<div class="list-container">
				<h3 class="title">公司区域购电量Top10</h3>
				<ul>
					<li>1.<span class="area">南阳市</span><span class="rate">55%</span><span class="bar"></span></li>
					<li>2.<span class="area">信阳市</span><span class="rate">55%</span><span class="bar"></span></li>
					<li>3.<span class="area">洛阳市</span><span class="rate">55%</span><span class="bar"></span></li>
					<li>4.<span class="area">驻马店</span><span class="rate">55%</span><span class="bar"></span></li>
					<li>5.<span class="area">周口市</span><span class="rate">55%</span><span class="bar"></span></li>
					<li>6.<span class="area">商丘市</span><span class="rate">55%</span><span class="bar"></span></li>
					<li>7.<span class="area">三门峡</span><span class="rate">55%</span><span class="bar"></span></li>
					<li>8.<span class="area">新乡市</span><span class="rate">55%</span><span class="bar"></span></li>
					<li>9.<span class="area">平顶山</span><span class="rate">55%</span><span class="bar"></span></li>
					<li>10.<span class="area">郑州市</span><span class="rate">55%</span><span class="bar"></span></li>
				</ul>
			</div>
			<div class="list-container">
				<h3 class="title">签约企业用电量Top10</h3>
				<ul>
					<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">1.</span><span class="rate">55%</span><span class="bar"></span></li>
					<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">2.</span><span class="rate">55%</span><span class="bar"></span></li>
					<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">3.</span><span class="rate">55%</span><span class="bar"></span></li>
					<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">4.</span><span class="rate">55%</span><span class="bar"></span></li>
					<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">5.</span><span class="rate">55%</span><span class="bar"></span></li>
					<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">6.</span><span class="rate">55%</span><span class="bar"></span></li>
					<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">7.</span><span class="rate">55%</span><span class="bar"></span></li>
					<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">8.</span><span class="rate">55%</span><span class="bar"></span></li>
					<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">9.</span><span class="rate">55%</span><span class="bar"></span></li>
					<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">10.</span><span class="rate">55%</span><span class="bar"></span></li>
				</ul>
			</div>
			<div class="list-container">
				<h3 class="title">客户申报电量偏差Top10</h3>
				<ul>
					<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">1.</span><span class="rate">55%</span><span class="bar"></span></li>
					<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">2.</span><span class="rate">55%</span><span class="bar"></span></li>
					<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">3.</span><span class="rate">55%</span><span class="bar"></span></li>
					<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">4.</span><span class="rate">55%</span><span class="bar"></span></li>
					<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">5.</span><span class="rate">55%</span><span class="bar"></span></li>
					<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">6.</span><span class="rate">55%</span><span class="bar"></span></li>
					<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">7.</span><span class="rate">55%</span><span class="bar"></span></li>
					<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">8.</span><span class="rate">55%</span><span class="bar"></span></li>
					<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">9.</span><span class="rate">55%</span><span class="bar"></span></li>
					<li><span class="company-name">河南众企联合售电有限公司</span><span class="rank">10.</span><span class="rate">55%</span><span class="bar"></span></li>
				</ul>
			</div>
		</div>
	</div>

</template>
<style scoped>
	.main-container{
		padding-left:0;
	}
	.map-container{
		height: 440px;

	}
	.list-container{
		display: inline-block;
		vertical-align: middle;
	}
	.map{
		display: inline-block;
	}
	.market-shares{
		display: inline-block;

		float: right;
		width: 700px;
		height: 480px;
	}
	.list-container ul{
		display: inline-block;
	}
	.list-container li{
		height: 30px;
		line-height: 40px;
		margin-top: 5px;
	}
	.list-container span{
		display: inline-block;
		vertical-align: top;
	}
	.market-shares .company-name{
		width: 240px;

	}
	.company-name{
		width:200px;
		text-align: right;
		margin-right: 5px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow : ellipsis
	}
	.rate{
		margin-left: 10px;
		color:  #48C3F3;
	}
	.bar{
		width: 200px;
		height: 10px;
		background-color: #48C3F3;
		margin-top: 15px;
	}
	.list{
		width: 1640px;
		height: 430px;
	}
	.list-container .title{
		display: block;
		margin-left: 100px;
	}
	.rank{
		width: 20px;
	}
	.list-container:not(:nth-child(1)){
		margin-left: 180px;
	}
</style>