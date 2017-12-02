<script>
	import HenanMap from '@/components/HenanMap'
	import MyTab from '@/components/Tool/MyTab'
    export default {
        name: 'sandTable',
        data() {
            return {
				type:"市场份额",
                dateType:'年度'
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
			<Card>
				<h3 slot="title">售电沙盘<span style="color: #ccc;padding-left: 10px;font-size: 12px;font-weight: 400;">每月度自动更新</span></h3>
				<div slot="extra" class="btn-group">
					<RadioGroup v-model="type" type="button" v-on:on-change="typeSwitch">
						<Radio label="市场份额"></Radio>
						<Radio label="考核偏差"></Radio>
					</RadioGroup>
				</div>


				<Row gutter="15">
					<Col span="8">
						<div class="btn-group" style="position: relative;z-index: 999">
							<RadioGroup v-model="dateType" type="button" v-on:on-change="typeSwitch">
								<Radio label="年度"></Radio>
								<Radio label="月度"></Radio>
							</RadioGroup>
						</div>
						<div style="width: 500px;">

							<henan-map></henan-map>
						</div>

					</Col>
					<Col span="8" offset="1">
						<div class="ranklist-container">

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
				</Row>
			</Card>
		</Row>
		<Row class="mgt_15" gutter="15">
			<Col span="8">
				<Card class="ranklist-container">
				<h3 slot="title">公司区域购电量Top10</h3>
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
			</Card>
			</Col>
			<Col span="8">
				<Card class="ranklist-container">
				<h3 slot="title">签约企业用电量Top10</h3>
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
			</Card>
			</Col>
			<Col span="8">
				<Card class="ranklist-container">
					<h3 slot="title">客户申报电量偏差Top10</h3>
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

				</Card>
			</Col>
		</Row>
	</div>

</template>
<style scoped>
	.ranklist-container li .city{
		padding:0 20px ;
	}
	.company-name{
		width: 185px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align: right;
	}
	.btn-group{
		margin-top: -8px;
	}
</style>