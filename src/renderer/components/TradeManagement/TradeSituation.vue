<script>
	import TradePie from '@/components/TradeManagement/TradePie'
    import TradePieTwo from '@/components/TradeManagement/TradePieTwo'
	export default {
	    name:'tradesituation',
		data(){
	        return{
                currentPDS:'1',
				all:100,
				residue:13.6,
				totalWidth:0,
                chartOption2: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: ['长协', '竞价'],
                        orient: 'horizontal',
						left:'20',
                        right: '0',
						itemWidth:16,
                    },
                    grid: {
                        left: '-20',
                        right: '20',
                        bottom: '10',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月',],
                    },
                    yAxis: {
                        type: 'value',
						show:false,
                    },
                    color:['#4f8af9','#6ec71e','#f56e6a','#fc8b40','#818af8','#31c9d7','#f35e7a','#ab7aee','#14d68b','#edb00d'],
                    series: [
                        {
                            name: '长协',
                            type: 'bar',
                            stack: '总量',
							barWidth:20,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'insideRight'
                                }
                            },
                            data: [600, 302, 301, 334, 390, 330, 320, 320, 302, 301, 334, 390]
                        },
                        {
                            name: '竞价',
                            type: 'bar',
                            stack: '总量',
                            barWidth:20,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'insideRight'
                                }
                            },
                            data: [120, 132, 101, 134, 90, 120, 132, 101, 134, 90, 230, 210]
                        },
                    ]
                },
                yearList:[
                    {
                        value:'2010年',
                        label:'2010年',
                    },{
                        value:'2011年',
                        label:'2011年',
                    },{
                        value:'2012年',
                        label:'2012年',
                    },{
                        value:'2013年',
                        label:'2013年',
                    },{
                        value:'2014年',
                        label:'2014年',
                    },{
                        value:'2015年',
                        label:'2015年',
                    },{
                        value:'2016年',
                        label:'2016年',
                    },{
                        value:'2017年',
                        label:'2017年',
                    }
                ],
                monthList:[
                    {
                        value:'1月',
                        label:'1月',
                    },{
                        value:'2月',
                        label:'2月',
                    },{
                        value:'3月',
                        label:'3月',
                    },{
                        value:'3月',
                        label:'3月',
                    },{
                        value:'4月',
                        label:'4月',
                    },{
                        value:'5月',
                        label:'5月',
                    },{
                        value:'6月',
                        label:'6月',
                    },{
                        value:'7月',
                        label:'7月',
                    },{
                        value:'8月',
                        label:'8月',
                    },{
                        value:'9月',
                        label:'9月',
                    },{
                        value:'10月',
                        label:'10月',
                    },{
                        value:'11月',
                        label:'11月',
                    },{
                        value:'12月',
                        label:'12月',
                    }

                ]
	        }
		},
		mounted() {
            this.drawBar(this.chartOption2);
        },
        methods: {
            drawBar(option = this.chartOption2) {
                // 基于准备好的dom，初始化echarts实例
                let monthBar = this.$echarts.init(document.getElementById('month-bar'));
                // 绘制图表
                monthBar.setOption(option);
            },
			changeSelect(psd){
                this.currentPDS = psd;
			},
        },
		components:{
		    'trade-pie':TradePie,
            'trade-pie-two':TradePieTwo
		}
	}
</script>
<template>
	<Row class="main-container">
           <Row gutter=15>
			   <Col span="12">
			      <Card class="height">
						  <h3 slot="title">交易基础数据分析</h3>
						  <div class="btn-group relative" slot="extra">
							  <Select placeholder="2017年" style="width:100px;margin-right:5px;" class="selectDate"><Option v-for="item in yearList" :value="item.value" :key="item.value">{{ item.label }}</Option></Select><Select placeholder="10月" style="width:80px;"  class="selectDate"><Option v-for="item in monthList" :value="item.value" :key="item.value">{{ item.label }}</Option></Select>
						  </div>
					  </div>
					  <div class="container">
						  <Row type="flex" justify="space-around" align="center">
							  <Col span="6">
							    <trade-pie></trade-pie>
							  </Col>
							  <Col span="9">
								  <Card class="month my-panel">
									  <h4 slot="title">月度</h4>
										  <ul class="cx relative">
											  <li><span class="name">长协</span></li>
											  <li><span class="count">213424.125</span></li>
											  <li class="ml absolute rate_main"><span class="rate">12.55%</span></li>
										  </ul>
										  <ul class="jj relative">
											  <li><span class="name">竞价</span></li>
											  <li><span class="count">213424.125</span></li>
											  <li class="ml absolute rate_main2"><span class="rate">12.55%</span></li>
										  </ul>
								  </Card>
							  </Col>
							  <Col span="9">
								  <Card class="year my-panel">
									  <h4 slot="title">年度</h4>
									  <ul class="cx relative">
										  <li><span class="name">长协</span></li>
										  <li><span class="count">213424.125</span></li>
										  <li class="ml absolute rate_main"><span class="rate">12.55%</span></li>
									  </ul>
									  <ul class="jj relative">
										  <li><span class="name">竞价</span></li>
										  <li><span class="count">213424.125</span></li>
										  <li class="ml absolute rate_main2"><span class="rate">12.55%</span></li>
									  </ul>
								  </Card>
							  </Col>
						  </Row>
					  </div>
				  </Card>
		   </Col>
			   <Col span="6">
			   <Card class="height">
			   </Card>
			   </Col>
			   <Col span="6">
			    <Card class="height">
                       <h3 slot="title">距12月竞价交易还有</h3>
					   <div class="container time"><span>12</span>天</div>
				</Card>
		   </Col>
		   </Row>
		    <Row class="mgt_15" gutter='15'>
				<Col span="18">
				  <Card class="height_2">
					  <h3 slot="title">每月交易概况</h3>
					  <div id="month-bar" style="width:100%;height: 225px;">
					  </div>
				  </Card>
			</Col>
				<Col span="6">
				<Card class="height_2">
					<h3 slot="title">月度交易占比</h3>
					<div class="trade-pie relative">
						<trade-pie-two></trade-pie-two>
					</div>
					<div class="month-all center">
						<p>月度总交易电量 <span>512532</span>KW.时</p>
					</div>
				</Card>
			</Col>

			</Row>
		<Row class="mgt_15">
			<Card class="height_3 relative">
				<h3 slot="title" class="title-lv3">发电集团剩余电量</h3>
				<Row gutter="15">
					<Col span="12">
					<table class="mytable" cellspacing="0">
						<tr>
							<th>公司名称</th>
							<th>用电方式</th>
							<th>电量</th>
							<th>每小时消耗电量</th>
							<th>剩余电量</th>
							<th>消耗电量</th>
						</tr>
						<tr>
							<td>国电河南电力有限公司济源新能源分公司（大岭风电长）</td>
							<td>风电</td>
							<td>100WKw</td>
							<td>100.00Mw时</td>
							<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>
							<td>12315.23Kw时</td>
						</tr>
						<tr>
							<td>汕头华能南澳风力发电有限公司</td>
							<td>燃机</td>
							<td>23WKw</td>
							<td>382.12Mw时</td>
							<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>
							<td>12315.23Kw时</td>
						</tr>
						<tr>
							<td>孟州市电厂</td>
							<td>光伏</td>
							<td>1221WKw</td>
							<td>32.12Mw时</td>
							<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>
							<td>12315.23Kw时</td>
						</tr>
						<tr>
							<td>中国国电集团公司荆门热电厂</td>
							<td>风电</td>
							<td>231WKw</td>
							<td>322.12Mw时</td>
							<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>
							<td>12315.23Kw时</td>
						</tr>
					</table>
					</Col>
					<Col span="12">
					<table class="mytable" cellspacing="0">
						<tr>
							<th>公司名称</th>
							<th>用电方式</th>
							<th>电量</th>
							<th>每小时消耗电量</th>
							<th>剩余电量</th>
							<th>消耗电量</th>
						</tr>
						<tr>
							<td>国电河南电力有限公司济源新能源分公司（大岭风电长）</td>
							<td>风电</td>
							<td>100WKw</td>
							<td>100.00Mw时</td>
							<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>
							<td>12315.23Kw时</td>
						</tr>
						<tr>
							<td>汕头华能南澳风力发电有限公司</td>
							<td>燃机</td>
							<td>23WKw</td>
							<td>382.12Mw时</td>
							<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>
							<td>12315.23Kw时</td>
						</tr>
						<tr>
							<td>孟州市电厂</td>
							<td>光伏</td>
							<td>1221WKw</td>
							<td>32.12Mw时</td>
							<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>
							<td>12315.23Kw时</td>
						</tr>
						<tr>
							<td>中国国电集团公司荆门热电厂</td>
							<td>风电</td>
							<td>231WKw</td>
							<td>322.12Mw时</td>
							<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>
							<td>12315.23Kw时</td>
						</tr>
					</table>
					</Col>
				</Row>
				<div class="page-center">
					<!--分页-->
					<div class="fenYe">
						<Page :total="50" show-total show-elevator></Page> <Button type="primary">确定</Button>
					</div>
				</div>
			</Card>
		</Row>
	</Row>
</template>
<style scoped>
table,th,tr,td{
	margin:0;
	padding:0;
}
	.my-panel {
		/*width: 270px;*/
		height: 170px;
		background-color: #F6F7FB;
	}
	.my-panel li{
		display: inline-block;
	}
	.cx{
		border-bottom: 1px solid #cccccc;
		padding-top:12px;
	}
	.cx span{
		vertical-align: bottom;
	}

	.jj li span{
		vertical-align: top;
	}
	.my-panel .name{
		color: #666666;
		font-size:12px;
	}
	.my-panel .count{
		font-size: 20px;
		font-weight: bold;
		color: #C6D0D4;
	}
	.height{
		height:250px;
	}
	.height_2{
		height:300px;
	}
	.height_3{
		height:300px;
	}
	.height .time{
		text-align: center;
		line-height: 176px;
		font-size: 16px;
	}
	.height .time span{
		font-size:36px;
	}
	.center{
		text-align: center;
	}
	.month-all  p{
		font-size:12px;
	}
	.month-all p span{
		font-size:22px;
		color:#fea06f;
	}
	.panel .tp_line{
		border-top: 1px solid #ccc;
	}
	.mytable{
		width:100%;
	}
	.mytable th:first-child{
		border-left:1px solid #e9eaec;
	}
	.mytable th:last-child{
		 border-right:1px solid #e9eaec;
	}
	.mytable td:first-child{
		border-left:1px solid #e9eaec;
		text-align: left;
		padding-left: 5px;
	}
	.mytable td:last-child{
		border-right:1px solid #e9eaec;
	}
	.mytable th{
		 height:30px;
		 text-align: center;
		border-top:1px solid #e9eaec;
		background-color: #f8f8f9;
	}
	.mytable td{
		vertical-align: middle;
		height:30px;
		line-height: 30px;
		text-align: center;
		padding-left:14px;
		padding-right:14px;
	}
	.mytablespan{
		vertical-align: middle;
	}
	/*集团剩余电量*/
	.mytable td{
		font-size: 12px;
		border-bottom: 1px solid #eeeeee;
	}
	.mytable td:first-child{
		padding-top:0;
	}
	.mytable td  span{
		display: inline-block;
		height:20px;
		background-color:#6ec71e ;
		vertical-align: middle;
		width:100px;
		text-align: right;
		line-height: 20px;
	}
	.mytable td .pro-bar{
		background-color:#fff;
		height:20px;
		line-height:20px;
		text-align: center;
		border:1px solid #6ec71e;
		margin-top:-2px;
	}
	.mytable td em{
		display: inline-block;
		width:2px;
		height:5px;
		background-color:#6ec71e ;
		vertical-align: middle;
	}
	/* 分页的样式 */
	.relative .page-center{
		text-align: center;
		position: absolute;
		bottom:10px;
		left:0;
		right:0;
	}
	/* 分页的样式 */
	.page-center  .fenYe {
		width: 100%;
		height: 40px;
		background-color: #fff;
		text-align: center;
	}
	.fenYe table{
		border: 0;
	}
	.fenYe ul {
		display: inline-block;
	}
	.fenYe button{
		top: -12px;
		left: 12px;
	}
	.mgr-20{
		margin-right:100px;
	}
	.rate_main{
		right:0;
		bottom:0;
	}
	.rate_main2{
		top:0;
		right:0;
	}
	.btn-group{
		z-index: 10;
		margin-top: -8px;
	}
	.clear::after{
		content:'';
		display: block;
		clear: both;
	}
</style>