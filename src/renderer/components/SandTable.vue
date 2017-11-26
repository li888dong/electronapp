<script>
	import HenanMap from '@/components/HenanMap'
	import MyTab from '@/components/Tool/MyTab'
    export default {
        name: 'sandTable',
        data() {
            return {

            }
        },
	    components:{
            'henan-map':HenanMap,
		    'my-tab':MyTab
	    }
    }
</script>
<template>
	<div class="main-container">
		<Row>
			<panel class="header">
				<h3 class="title-lv3" style="margin-top: 10px;">售电沙盘<small style="color: #ccc;padding-left: 10px;font-weight: normal;">每月度自动更新</small></h3>
				<div class="btn-group">
					<my-tab type="primary">市场份额</my-tab><my-tab type="normal">偏差考核</my-tab>
				</div>
			</panel>
		</Row>
		<Row >
			<Col span="12">
				<panel style="	height: 400px;">
					<div class="btn-group"  style="position: relative;top: 100px;right: 100px;">
						<my-tab type="primary">年 度</my-tab><my-tab type="normal">月 度</my-tab>
						<br>
						<select style="width: 97px;height: 24px;margin-top: 20px;">
							<option value="2017">2017</option>
							<option value="2017">2016</option>
							<option value="2017">2015</option>
							<option value="2017">2014</option>
						</select>
					</div>
					<henan-map></henan-map>
				</panel>
			</Col>
			<Col span="12">
				<panel class="market-shares ranklist-container">
					<ul>
						<li><span class="ranking">No.1</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">88.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.88+'px'}"></span></li>
						<li><span class="ranking">No.2</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">77.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.77+'px'}"></span></li>
						<li><span class="ranking">No.3</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">66.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.66+'px'}"></span></li>
						<li><span class="ranking">No.4</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">55.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.55+'px'}"></span></li>
						<li><span class="ranking">No.5</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">44.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.44+'px'}"></span></li>
						<li><span class="ranking">No.6</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">33.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.33+'px'}"></span></li>
						<li><span class="ranking">No.7</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">22.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.22+'px'}"></span></li>
						<li><span class="ranking">No.8</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">11.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.11+'px'}"></span></li>
						<li><span class="ranking">No.9</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">5.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.05+'px'}"></span></li>
						<li><span class="ranking">No.10</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">1.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.01+'px'}"></span></li>
					</ul>
				</panel>
			</Col>
		</Row>
		<Row class="mgt_15">
			<panel class="list">
				<Col span="8">
					<div class="ranklist-container">
					<h3 class="title-lv3">公司区域购电量Top10</h3>
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
				</Col>
				<Col span="8">
					<div class="ranklist-container">
					<h3 class="title-lv3">签约企业用电量Top10</h3>
					<ul>
						<li><span class="ranking">No.1</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">88.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.88+'px'}"></span></li>
						<li><span class="ranking">No.2</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">77.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.77+'px'}"></span></li>
						<li><span class="ranking">No.3</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">66.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.66+'px'}"></span></li>
						<li><span class="ranking">No.4</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">55.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.55+'px'}"></span></li>
						<li><span class="ranking">No.5</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">44.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.44+'px'}"></span></li>
						<li><span class="ranking">No.6</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">33.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.33+'px'}"></span></li>
						<li><span class="ranking">No.7</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">22.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.22+'px'}"></span></li>
						<li><span class="ranking">No.8</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">11.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.11+'px'}"></span></li>
						<li><span class="ranking">No.9</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">5.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.05+'px'}"></span></li>
						<li><span class="ranking">No.10</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">1.33%</span>
							<span class="ranklist-bar" :style="{width:200*0.01+'px'}"></span></li>
					</ul>
				</div>
				</Col>
				<Col span="8">
					<div class="ranklist-container">
						<h3 class="title-lv3">客户申报电量偏差Top10</h3>
						<ul>
							<li><span class="ranking">No.1</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">88.33%</span>
								<span class="ranklist-bar" :style="{width:200*0.88+'px'}"></span></li>
							<li><span class="ranking">No.2</span><span class="company-name">河南众企联合售电有限公司1111111111111111111</span><span class="rate">77.33%</span>
								<span class="ranklist-bar" :style="{width:200*0.77+'px'}"></span></li>
							<li><span class="ranking">No.3</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">66.33%</span>
								<span class="ranklist-bar" :style="{width:200*0.66+'px'}"></span></li>
							<li><span class="ranking">No.4</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">55.33%</span>
								<span class="ranklist-bar" :style="{width:200*0.55+'px'}"></span></li>
							<li><span class="ranking">No.5</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">44.33%</span>
								<span class="ranklist-bar" :style="{width:200*0.44+'px'}"></span></li>
							<li><span class="ranking">No.6</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">33.33%</span>
								<span class="ranklist-bar" :style="{width:200*0.33+'px'}"></span></li>
							<li><span class="ranking">No.7</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">22.33%</span>
								<span class="ranklist-bar" :style="{width:200*0.22+'px'}"></span></li>
							<li><span class="ranking">No.8</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">11.33%</span>
								<span class="ranklist-bar" :style="{width:200*0.11+'px'}"></span></li>
							<li><span class="ranking">No.9</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">5.33%</span>
								<span class="ranklist-bar" :style="{width:200*0.05+'px'}"></span></li>
							<li><span class="ranking">No.10</span><span class="company-name">河南众企联合售电有限公司</span><span class="rate">1.33%</span>
								<span class="ranklist-bar" :style="{width:200*0.01+'px'}"></span></li>
						</ul>

					</div>
				</Col>
			</panel>
		</Row>
	</div>

</template>
<style scoped>

	.header{
		height: 50px;
		border-bottom: 1px solid #eeeeee;
	}

	.ranklist-container ul{
		margin: 20px 0 0 10px;
	}


	.ranklist-container li .ranking{
		width: 40px;
		text-align: right;
	}
	.ranklist-container li .city{
		padding:0 20px ;
	}
	.market-shares{
		height: 400px;
		overflow: hidden;
	}
	.rate{
		min-width: 30px;
		text-align: right;
		margin-left: 10px;
		color:  #48C3F3;
	}

	.list{
		width: 1657px;
		height: 430px;
	}

	.company-name{
		width: 185px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align: right;
	}
</style>