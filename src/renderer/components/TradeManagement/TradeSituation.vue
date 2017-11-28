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
                        right: '20',
                    },
                    grid: {
                        left: '0',
                        right: '0',
                        bottom: '0',
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
                    dataZoom: [
						{type: 'slider',
							bottom:0,
                            startValue: '一月',
                            endValue: '十二月'
						}
                    ],
                    color:['#31C9D7','#f57e6a'],
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
                            data: [350, 302, 301, 334, 390, 330, 320, 320, 302, 301, 334, 390]
                        },
                        {
                            name: '竞价',
                            type: 'bar',
                            stack: '总量',
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
			}
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
			      <panel class="height">
					  <div class="title-lv3 pd">
						  <h3 class="fl title-lv3">交易基础数据分析</h3>
						  <div class="btn-group">
							  <Select placeholder="2017年" style="width:100px;margin-right:20px;" class="selectDate"><Option value="2017年">2017年</Option></Select><Select placeholder="10月" style="width:100px;"  class="selectDate"><Option value="2017年">10月</Option></Select>
						  </div>
					  </div>
					  <div class="container">
						  <Row>
							  <Col span="6">
							    <trade-pie></trade-pie>
							  </Col>
							  <Col span="18">
								  <div class="month fr">
									  <div class="my-panel">
										  <h4>月度</h4>
										  <ul class="cx">
											  <li><span class="name">长协</span></li>
											  <li><span class="count">213424.125</span></li>
											  <li class="ml"><span class="rate">12.55%</span></li>
										  </ul>
										  <ul class="jj">
											  <li><span class="name">竞价</span></li>
											  <li><span class="count">213424.125</span></li>
											  <li class="ml"><span class="rate">12.55%</span></li>
										  </ul>
									  </div>
								  </div>
							      <div class="year fr">
								  <div class="my-panel">
									  <h4>年度</h4>
									  <ul class="cx">
										  <li><span class="name">长协</span></li>
										  <li><span class="count">213424.125</span></li>
										  <li class="ml"><span class="rate">12.55%</span></li>
									  </ul>
									  <ul class="jj">
										  <li><span class="name">竞价</span></li>
										  <li><span class="count">213424.125</span></li>
										  <li class="ml"><span class="rate">12.55%</span></li>
									  </ul>
								  </div>
							  </div>
							  </Col>
						  </Row>
					  </div>
				  </panel>
		   </Col>
			   <Col span="6">
			   <panel class="height">
			   </panel>
			   </Col>
			   <Col span="6">
			    <panel class="height">
                       <h3 class="title-lv3">距12月竞价交易还有</h3>
					   <div class="container time"><span>12</span>天</div>
				</panel>
		   </Col>
		   </Row>
		    <Row class="mgt_15" gutter='15'>
				<Col span="18">
				  <panel class="height_2">
					  <h3 class="title-lv3">每月交易概况</h3>
					  <div id="month-bar" style="width:100%;height: 270px;">
					  </div>
				  </panel>
			</Col>
				<Col span="6">
				<panel class="height_2">
					<h3 class="title-lv3">月度交易占比</h3>
					<div class="center tab-container">
						<my-tab v-on:changeSelect = "changeSelect('1')" v-bind:type="currentPDS === '1'? 'zd':'normal'" class="mgr-20">按月</my-tab>
						<my-tab v-on:changeSelect = "changeSelect('2')" v-bind:type="currentPDS === '2'? 'zd':'normal'" class="mgr-20" >自定义</my-tab>
						<my-tab v-on:changeSelect = "changeSelect('3')" v-bind:type="currentPDS === '3'? 'zd':'normal'" class="mgr-20">2017年</my-tab>
						<my-tab v-on:changeSelect = "changeSelect('4')" v-bind:type="currentPDS === '4'? 'zd':'normal'" >10月</my-tab>
					</div>
					<div class="trade-pie relative">
						<trade-pie-two></trade-pie-two>
					</div>
					<div class="month-all center">
						<p>月度总交易电量 <span>512532</span>KW.时</p>
					</div>
				</panel>
			</Col>

			</Row>
		<Row class="mgt_15">
			<panel class="height_3">
				<h3 class="title-lv3">发电集团剩余电量</h3>
				<div class="container tp_line">
					<div class="surplus-list">
						<table class="myTable fl">
							<tr>
								<td>国电河南电力有限公司济源新能源分公司（大岭风电长）</td>
								<td class="lr_m">风电</td>
								<td>100WKw</td>
								<td class="lr_b">100.00Mw时</td>
								<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>
								<td>12315.23Kw时</td>
							</tr>
							<tr>
								<td>汕头华能南澳风力发电有限公司</td>
								<td class="lr_m">燃机</td>
								<td>23WKw</td>
								<td class="lr_b">382.12Mw时</td>
								<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>
								<td>12315.23Kw时</td>
							</tr>
							<tr>
								<td>孟州市电厂</td>
								<td class="lr_m">光伏</td>
								<td>1221WKw</td>
								<td class="lr_b">32.12Mw时</td>
								<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>
								<td>12315.23Kw时</td>
							</tr>
							<tr>
								<td>中国国电集团公司荆门热电厂</td>
								<td class="lr_m">风电</td>
								<td>231WKw</td>
								<td class="lr_b">322.12Mw时</td>
								<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>
								<td>12315.23Kw时</td>
							</tr>
							<tr>
								<td>华能上海石洞第一发电有限责任公司</td>
								<td class="lr_m">风电</td>
								<td>21WKw</td>
								<td class="lr_b">322.12Mw时</td>
								<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>
								<td>12315.23Kw时</td>
							</tr>
							<tr>
								<td>内蒙古蒙电华能热电股份有限公司丰镇发电长</td>
								<td class="lr_m">风电</td>
								<td>121WKw</td>
								<td class="lr_b">222.12Mw时</td>
								<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>
								<td>12315.23Kw时</td>
							</tr>
							<tr>
								<td>华能辛店电厂</td>
								<td class="lr_m">风电</td>
								<td>324231WKw</td>
								<td class="lr_b">222.12Mw时</td>
								<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>
								<td>12315.23Kw时</td>
							</tr>
						</table>
						<table class="myTable fr">
							<tr>
								<td>国电河南电力有限公司济源新能源分公司（大岭风电长）</td>
								<td class="lr_m">风电</td>
								<td>100WKw</td>
								<td class="lr_b">100.00Mw时</td>
								<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>
								<td>12315.23Kw时</td>
							</tr>
							<tr>
								<td>汕头华能南澳风力发电有限公司</td>
								<td class="lr_m">燃机</td>
								<td>23WKw</td>
								<td class="lr_b">382.12Mw时</td>
								<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>
								<td>12315.23Kw时</td>
							</tr>
							<tr>
								<td>孟州市电厂</td>
								<td class="lr_m">光伏</td>
								<td>1221WKw</td>
								<td class="lr_b">32.12Mw时</td>
								<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>
								<td>12315.23Kw时</td>
							</tr>
							<tr>
								<td>中国国电集团公司荆门热电厂</td>
								<td class="lr_m">风电</td>
								<td>231WKw</td>
								<td class="lr_b">322.12Mw时</td>
								<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>
								<td>12315.23Kw时</td>
							</tr>
							<tr>
								<td>华能上海石洞第一发电有限责任公司</td>
								<td class="lr_m">风电</td>
								<td>21WKw</td>
								<td class="lr_b">322.12Mw时</td>
								<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>
								<td>12315.23Kw时</td>
							</tr>
							<tr>
								<td>内蒙古蒙电华能热电股份有限公司丰镇发电长</td>
								<td class="lr_m">风电</td>
								<td>121WKw</td>
								<td class="lr_b">222.12Mw时</td>
								<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>
								<td>12315.23Kw时</td>
							</tr>
							<tr>
								<td>华能辛店电厂</td>
								<td class="lr_m">风电</td>
								<td>324231WKw</td>
								<td class="lr_b">222.12Mw时</td>
								<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>
								<td>12315.23Kw时</td>
							</tr>
						</table>
					</div>
					<div class="page-center">
						<!--分页-->
						<div class="fenYe">
							<Page :total="50" show-total show-elevator></Page> <Button type="primary">确定</Button>
						</div>
					</div>
				</div>
			</panel>
		</Row>
	</Row>
</template>
<style scoped>
	.my-panel {
		width: 270px;
		height: 180px;
		background-color: #F6F7FB;
		margin-top: 5px;
	}
	.my-panel li{
		display: inline-block;
	}
	.my-panel ul{
		margin-left:15px;
		margin-right:5px;
	}
	.cx{
		border-bottom: 1px solid #cccccc;
		padding-top:20px;
	}
	.cx span{
		vertical-align: bottom;
	}
	.ml{
		margin-left:60px;
	}
	.jj{

	}
	.jj li span{
		vertical-align: top;
	}
	.my-panel h4{
		padding:10px;
		font-size:14px;
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
	.year{
		margin-right: 20px;
		height:100%;
	}
     /*清浮动*/
	.panel .pd:after{
		 content: '';
		 display: block;
		 clear: both;
	 }
	.panel .btn-group{
		margin-top:0px;
	}
	.panel .title-lv3{
		display: block;
	}
	.panel .title-lv3 h3{
		padding-left:5px;
		height:20px;
		line-height: 20px;
		border-left:5px solid #3366cc;
		padding-top:0;
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
	.panel .pd{
		padding-top:5px;
	}
	.height .time{
		text-align: center;
		line-height: 200px;
		font-size: 16px;
	}
	.height .time span{
		font-size:36px;
	}
	.center{
		text-align: center;
		padding-top:5px;
	}
	.month-all  p{
		font-size:16px;
	}
	.month-all p span{
		font-size:36px;
		color:#fea06f;
	}
	.panel .tp_line{
		border-top: 1px solid #ccc;
	}
	.container .myTable td{
		vertical-align: middle;
	}
	.container .myTable span{
		vertical-align: middle;
	}
	/*集团剩余电量*/
	.container .myTable td{
		padding-top:5px;
		font-size: 12px;
	}
	.container .myTable td:first-child{
		padding-top:0;
	}
	.container .myTable td  span{
		display: inline-block;
		height:20px;
		background-color:#14d86b ;
		vertical-align: middle;
		width:100px;
		text-align: right;
		line-height: 20px;
	}
	.container .myTable td .pro-bar{
		background-color:#fff;
		height:20px;
		line-height:20px;
		text-align: center;
		border:1px solid #14d86b;
		margin-top:-4px;
	}
	.container .myTable td em{
		display: inline-block;
		width:2px;
		height:5px;
		background-color:#14d86b ;
		vertical-align: middle;
	}
	.container .myTable .lr_m{
		padding-left:20px;
		padding-right:10px;
	}
	.container .myTable .lr_b{
		padding-left:30px;
		padding-right:20px;
	}

	.tp_line:after{
		content:'';
		display: block;
		clear: both;
	}
	/* 分页的样式 */
	.page-center  .fenYe {
		height: 60px;
		background-color: #fff;
		padding-top: 10px;
		float: right;
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
	.year{
		margin-left: 10px;
	}
	.panel #month-bar{
     padding:20px 40px 20px 0px;
	}
	.selectDate{
		color:#1c9af3;
	}
	.mgr-20{
		margin-right:20px;
	}
</style>