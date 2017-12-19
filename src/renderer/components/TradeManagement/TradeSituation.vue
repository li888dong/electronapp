<script>
    import TradePie from '@/components/TradeManagement/TradePie'
    import TradePieTwo from '@/components/TradeManagement/TradePieTwo'

    export default {
        name: 'tradesituation',
        data() {
            return {
                currentPDS: '1',
                all: 100,
                residue: 13.6,
                totalWidth: 0,
                month: '',
                pieData: {
                    month: {
                        "bidding": 0,
                        "longpact": 0,
                        "bid_ratio": 0,
                        "lp_ratio": 0
                    },
                    year: {
                        "bidding": 0,
                        "longpact": 0,
                        "bid_ratio": 0,
                        "lp_ratio": 0
                    }
                },
                chartCX: [0, 0, 0, 0, 0, 0],
                chartJJ: [0, 0, 0, 0, 0, 0]

            }
        },
        computed: {
            monthBar: function () {
                return this.$echarts.init(document.getElementById('month-bar'));
            },
            barOption: function () {
                return {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: ['长协', '竞价'],
                        orient: 'horizontal',
                        left: 0,
                        right: '0',
                        itemWidth: 16,
                    },
                    grid: {
                        left: 0,
                        right: '20',
                        bottom: '8%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月',],
                    },
                    yAxis: this.$store.getters.chartOption.yAxis,
                    color: this.$store.getters.chartOption.colorList,
                    series: [
                        {
                            name: '长协',
                            type: 'bar',
                            stack: '总量',
                            barWidth: 20,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'insideRight'
                                }
                            },
                            data: this.chartCX
                        },
                        {
                            name: '竞价',
                            type: 'bar',
                            stack: '总量',
                            barWidth: 20,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'insideRight'
                                }
                            },
                            data: this.chartJJ
                        },
                    ]
                }
            }
        },
        mounted() {
            this.drawBar();
            this.reqMonth();
            this.reqAnalysis();
        },
        watch: {
            month: function () {
                this.reqMonth();
                this.reqAnalysis();
            }
        },
        methods: {
            drawBar() {
                // 基于准备好的dom，初始化echarts实例
                this.monthBar.clear();
                // 绘制图表
                this.monthBar.setOption(this.barOption);
            },
            monthSelect(month) {
                this.month = month;
            },

            reqAnalysis() {
                this.$http.post(this.$api.TRADE_ANALYSIS, {
                    com_id: this.$store.getters.com_id,
                    month: this.month
                }).then(res => {
                    console.log("交易分析饼图", res);
                    this.pieData = res.data.data;
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            reqMonth() {
                this.$http.post(this.$api.TRADE_MONTH, {com_id: this.$store.getters.com_id}).then(res => {
                    console.log("每月交易概况图表", res);
                    let data = res.data.data;
                    this.chartCX = [];

                    this.chartCX.push(data.lpdata.month01);
                    this.chartCX.push(data.lpdata.month02);
                    this.chartCX.push(data.lpdata.month03);
                    this.chartCX.push(data.lpdata.month04);
                    this.chartCX.push(data.lpdata.month05);
                    this.chartCX.push(data.lpdata.month06);
                    this.chartCX.push(data.lpdata.month07);
                    this.chartCX.push(data.lpdata.month08);
                    this.chartCX.push(data.lpdata.month09);
                    this.chartCX.push(data.lpdata.month10);
                    this.chartCX.push(data.lpdata.month11);
                    this.chartCX.push(data.lpdata.month12);

                    this.chartJJ = Object.values(data.biddata);
                    this.drawBar();
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            }
        },
        components: {
            'trade-pie': TradePie,
            'trade-pie-two': TradePieTwo
        }
    }
</script>
<template>
	<div class="main-container">

           <Row gutter=15 style='margin-right: 0;margin-left:0'>
			   <Col span="18" style="padding-left: 0px;padding-right: 0px;">
			      <Card class="height">
						  <h3 slot="title">交易基础数据分析</h3>
						  <div class="btn-group relative" slot="extra">
							  <DatePicker type="month" placeholder="请选择月份" @on-change="monthSelect"></DatePicker>
						  </div>
					  <!-- </div> -->
					  <div style="margin-top: 30px;">
						  <Row type="flex" justify="space-around" align="center">
							  <Col span="6">
							    <trade-pie :month="month" :pieData="pieData"></trade-pie>
							  </Col>
							  <Col span="6">
								  <Card class="month my-panel">
									  <h4 slot="title">月度</h4>
										  <ul class="cx relative">
											  <li><span class="name">长协</span></li>
											  <li><span class="count">{{pieData.month.longpact}}</span></li>
											  <li class="ml absolute rate_main"><span class="rate">{{pieData.month.lp_ratio}}%</span></li>
										  </ul>
										  <ul class="jj relative">
											  <li><span class="name">竞价</span></li>
											  <li><span class="count">{{pieData.month.bidding}}</span></li>
											  <li class="ml absolute rate_main2"><span class="rate">{{pieData.month.bid_ratio}}%</span></li>
										  </ul>
								  </Card>
							  </Col>
							  <Col span="6">
								  <Card class="year my-panel">
									  <h4 slot="title">年度</h4>
									  <ul class="cx relative">
										  <li><span class="name">长协</span></li>
										  <li><span class="count">{{pieData.year.longpact}}</span></li>
										  <li class="ml absolute rate_main"><span class="rate">{{pieData.year.lp_ratio}}%</span></li>
									  </ul>
									  <ul class="jj relative">
										  <li><span class="name">竞价</span></li>
										  <li><span class="count">{{pieData.year.bidding}}</span></li>
										  <li class="ml absolute rate_main2"><span class="rate">{{pieData.year.bid_ratio}}%</span></li>
									  </ul>
								  </Card>
							  </Col>
						  </Row>
					  </div>
				  </Card>
		        </Col>
	           <Col span="6" style="padding-left: 0px;padding-right: 0px;">
	           <Card>
		           <h3 slot="title">月度交易占比</h3>
		           <div class="trade-pie relative">
			           <trade-pie-two></trade-pie-two>
		           </div>

	           </Card>
	           </Col>
			   <!--<Col span="6">-->
			   <!--<Card class="height">-->
			   <!--</Card>-->
			   <!--</Col>-->
			   <!--<Col span="6">-->
			    <!--<Card class="height">-->
                       <!--<h3 slot="title">距12月竞价交易还有</h3>-->
					   <!--<div class="container time"><span>12</span>天</div>-->
				<!--</Card>-->
		   <!-- </Col> -->
		   </Row>
	    <Row class="mgt_15" gutter='15' style='margin-right: 0;margin-left:0'>
			<Col span="24" style="padding-left: 0px;padding-right: 0px;">
				  <Card class="height_2">
					  <h3 slot="title">每月交易概况</h3>
					  <div id="month-bar" style="width:100%;height: 525px;">
					  </div>
				  </Card>
			</Col>
	    </Row>
		<!--<Row class="mgt_15">-->
			<!--<Card class="height_3 relative">-->
			<!--<h3 slot="title" class="title-lv3">发电集团剩余电量</h3>-->
			<!--<div slot="extra">-->
			<!--<Select placeholder="选择发电集团" style='width:150px;' class='chooseBtn'>-->
			<!--<Option value='1'>-->
			<!--1-->
			<!--</Option>-->
			<!--</Select>-->
			<!--</div>-->
			<!--<Row gutter='15'>-->
			<!--<Col span="12">-->
			<!--<table class="mytable" cellspacing="0">-->
			<!--<tr>-->
			<!--<th>公司名称</th>-->
			<!--<th>用电方式</th>-->
			<!--<th>电量</th>-->
			<!--<th>每小时消耗电量</th>-->
			<!--<th>剩余电量</th>-->
			<!--<th>消耗电量</th>-->
			<!--</tr>-->
			<!--<tr>-->
			<!--<td>国电河南电力有限公司济源新能源分公司（大岭风电长）</td>-->
			<!--<td>风电</td>-->
			<!--<td>100WKw</td>-->
			<!--<td>100.00Mw时</td>-->
			<!--<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>-->
			<!--<td>12315.23Kw时</td>-->
			<!--</tr>-->
			<!--<tr>-->
			<!--<td>汕头华能南澳风力发电有限公司</td>-->
			<!--<td>燃机</td>-->
			<!--<td>23WKw</td>-->
			<!--<td>382.12Mw时</td>-->
			<!--<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>-->
			<!--<td>12315.23Kw时</td>-->
			<!--</tr>-->
			<!--<tr>-->
			<!--<td>孟州市电厂</td>-->
			<!--<td>光伏</td>-->
			<!--<td>1221WKw</td>-->
			<!--<td>32.12Mw时</td>-->
			<!--<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>-->
			<!--<td>12315.23Kw时</td>-->
			<!--</tr>-->
			<!--<tr>-->
			<!--<td>中国国电集团公司荆门热电厂</td>-->
			<!--<td>风电</td>-->
			<!--<td>231WKw</td>-->
			<!--<td>322.12Mw时</td>-->
			<!--<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>-->
			<!--<td>12315.23Kw时</td>-->
			<!--</tr>-->
			<!--</table>-->
			<!--</Col>-->
			<!--<Col span="12">-->
			<!--<table class="mytable" cellspacing="0">-->
			<!--<tr>-->
			<!--<th>公司名称</th>-->
			<!--<th>用电方式</th>-->
			<!--<th>电量</th>-->
			<!--<th>每小时消耗电量</th>-->
			<!--<th>剩余电量</th>-->
			<!--<th>消耗电量</th>-->
			<!--</tr>-->
			<!--<tr>-->
			<!--<td>国电河南电力有限公司济源新能源分公司（大岭风电长）</td>-->
			<!--<td>风电</td>-->
			<!--<td>100WKw</td>-->
			<!--<td>100.00Mw时</td>-->
			<!--<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>-->
			<!--<td>12315.23Kw时</td>-->
			<!--</tr>-->
			<!--<tr>-->
			<!--<td>汕头华能南澳风力发电有限公司</td>-->
			<!--<td>燃机</td>-->
			<!--<td>23WKw</td>-->
			<!--<td>382.12Mw时</td>-->
			<!--<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>-->
			<!--<td>12315.23Kw时</td>-->
			<!--</tr>-->
			<!--<tr>-->
			<!--<td>孟州市电厂</td>-->
			<!--<td>光伏</td>-->
			<!--<td>1221WKw</td>-->
			<!--<td>32.12Mw时</td>-->
			<!--<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>-->
			<!--<td>12315.23Kw时</td>-->
			<!--</tr>-->
			<!--<tr>-->
			<!--<td>中国国电集团公司荆门热电厂</td>-->
			<!--<td>风电</td>-->
			<!--<td>231WKw</td>-->
			<!--<td>322.12Mw时</td>-->
			<!--<td><span><span class="pro-bar"  v-if="residue !==0" v-bind:style="{width: (all-residue) + 'px'}">13.60%</span></span><em></em></td>-->
			<!--<td>12315.23Kw时</td>-->
			<!--</tr>-->
			<!--</table>-->
			<!--</Col>-->
			<!--</Row>-->
			<!--<div class="page-center">-->
			<!--&lt;!&ndash;分页&ndash;&gt;-->
			<!--<div class="fenYe">-->
			<!--<Page :total="50" show-total show-elevator></Page> <Button type="primary">确定</Button>-->
			<!--</div>-->
			<!--</div>-->
			<!--</div>-->
			<!--</Card>-->
			<!--</Row>-->
		<!--</Row>-->
	</div>
</template>
<style scoped>
	table, th, tr, td {
		margin: 0;
		padding: 0;
	}

	.my-panel {
		/*width: 270px;*/
		height: 170px;
		background-color: #F6F7FB;
	}

	.my-panel li {
		display: inline-block;
	}

	.cx {
		border-bottom: 1px solid #cccccc;
		padding-top: 12px;
	}

	.cx span {
		vertical-align: bottom;
	}

	.jj li span {
		vertical-align: top;
	}

	.my-panel .name {
		color: #666666;
		font-size: 12px;
	}

	.my-panel .count {
		font-size: 20px;
		font-weight: bold;
		color: #C6D0D4;
		margin-left: 40px;
	}

	.height {
		height: 311px;
	}

	.height_2 {
		height: 640px;
	}

	.height_3 {
		height: 300px;
	}

	.height .time {
		text-align: center;
		line-height: 176px;
		font-size: 16px;
	}

	.height .time span {
		font-size: 36px;
	}

	.panel .tp_line {
		border-top: 1px solid #ccc;
	}

	.mytable {
		width: 100%;
	}

	.mytable th:first-child {
		border-left: 1px solid #e9eaec;
	}

	.mytable th:last-child {
		border-right: 1px solid #e9eaec;
	}

	.mytable td:first-child {
		border-left: 1px solid #e9eaec;
		text-align: left;
		padding-left: 5px;
	}

	.mytable td:last-child {
		border-right: 1px solid #e9eaec;
	}

	.mytable th {
		height: 30px;
		text-align: center;
		border-top: 1px solid #e9eaec;
		background-color: #f8f8f9;
	}

	.mytable td {
		vertical-align: middle;
		height: 30px;
		line-height: 30px;
		text-align: center;
		padding-left: 14px;
		padding-right: 14px;
	}

	.mytablespan {
		vertical-align: middle;
	}

	/*集团剩余电量*/
	.mytable td {
		font-size: 12px;
		border-bottom: 1px solid #eeeeee;
	}

	.mytable td:first-child {
		padding-top: 0;
	}

	.mytable td span {
		display: inline-block;
		height: 20px;
		background-color: #6ec71e;
		vertical-align: middle;
		width: 100px;
		text-align: right;
		line-height: 20px;
	}

	.mytable td .pro-bar {
		background-color: #fff;
		height: 20px;
		line-height: 20px;
		text-align: center;
		border: 1px solid #6ec71e;
		margin-top: -2px;
	}

	.mytable td em {
		display: inline-block;
		width: 2px;
		height: 5px;
		background-color: #6ec71e;
		vertical-align: middle;
	}

	/* 分页的样式 */
	.relative .page-center {
		text-align: center;
		position: absolute;
		bottom: 10px;
		left: 0;
		right: 0;
	}

	/* 分页的样式 */
	.page-center .fenYe {
		width: 100%;
		height: 40px;
		background-color: #fff;
		text-align: center;
	}

	.fenYe table {
		border: 0;
	}

	.fenYe ul {
		display: inline-block;
	}

	.fenYe button {
		top: -12px;
		left: 12px;
	}

	.mgr-20 {
		margin-right: 100px;
	}

	.rate_main {
		right: 0;
		bottom: 0;
	}

	.rate_main2 {
		top: 0;
		right: 0;
	}

	.btn-group {
		z-index: 10;
		margin-top: -8px;
	}

	.clear::after {
		content: '';
		display: block;
		clear: both;
	}

	.chooseBtn {
		margin-top: -8px;
		z-index: 10;
	}
	/*.ive-row{
		margin-left:0;
		margin-right: 0;
	}*/
</style>