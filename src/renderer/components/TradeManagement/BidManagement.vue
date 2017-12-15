<script>
    import BidChart from '@/components/TradeManagement/BidChart'
    import PreviousBidingChart from '@/components/TradeManagement/PreviousBidingChart'

    export default {
        name: 'bidmanagement',
        data() {
            return {
                mockSelected: '添加供给侧价格',
                dcmc: '',
                gyl: '',
                bj: '',
	            model1:false,
                tabValue: '添加供给侧价格',
                show: '本月竞价模拟',
                comsupply:[],
                powerplant:[],
                supply:'',
	            count1:'',
	            count2:'',
	            chartData:[
	                {supply:200,count1:1,count2:0.8},
	                {supply:300,count1:2,count2:1.8},
	                {supply:400,count1:3,count2:2.3},
	                {supply:500,count1:4,count2:3.2},
                ],
                columns1: [
                    {
                        title: '购方名称',
                        key: 'com_name',
                    }, {
                        title: '所属区域',
                        key: 'area',
                    }, {
                        "sortable": true,
                        title: '售方名称',
                        key: 'seller'
                    }, {
                        title: '时间段',
                        key: 'month'
                    }, {
                        "sortable": true,
                        title: '成交电量',
                        key: 'deal_num'
                    }, {
                        "sortable": true,
                        title: '成交电价',
                        key: 'deal_price'
                    }, {
                        "sortable": true,
                        title: '差价',
                        key: 'price_dif'
                    }, {
                        title: '电厂报价',
                        key: 'seller_price'
                    }, {
                        title: '售电公司报价',
                        key: 'com_price'
                    }, {
                        title: '报价差价',
                        key: 'price_dif'
                    }
                ],
                data1: [],
            }
        },
	    beforeMount(){
            this.monthBidding();
            this.oldBidding();
            this.lastResolute();
        },
        methods: {
	        monthBidding(){
                this.$http.post(this.$api.MONTH_BIDDING,{com_id:this.$store.getters.com_id}).then(res => {
                    console.log("本月竞价模拟", res);
					this.comsupply = res.data.data.comsupply;
					this.powerplant = res.data.data.powerplant;
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
	        },
	        oldBidding(){
                this.$http.post(this.$api.OLD_BIDDING,{com_id:this.$store.getters.com_id}).then(res => {
                    console.log("往期竞价结果", res);
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
	        },
	        lastResolute(){
	            this.$http.post(this.$api.BIDDING_LIST,{com_id:this.$store.getters.com_id}) .then(res=>{
	                console.log('上期交易结果公示',res);
	                this.data1 = res.data.data;
	            },err => {
                    this.$api.errcallback(err);
                }) .catch(err => {
                    this.$api.errcallback(err);
                })
	        },
            switchSelected(type) {
                this.mockSelected = type
            },
            modifyData(data) {
                console.log(data);
                this.dcmc = data.name;
                this.gyl = data.gongying;
                this.bj = data.baojia
            },
            showCurrent: function (value) {
                this.show = value;
            },
            addChartData(){
                this.chartData.push({supply:this.supply,count1:this.count1,count2:this.count2});
                this.supply = 0;
                this.count1 = 0;
                this.count2 = 0;
            }
        },
        components: {
            'bid-chart': BidChart,
            'previous-biding-chart': PreviousBidingChart,
        }
    }
</script>
<template>
	<div class="main-container relative">
		<Row>
			<Row v-if="show==='往期竞价'">
				<Card class='height_392'>
					<div slot="title">
						<Radio-group v-model='show' type="button" v-on:on-change="showCurrent">
							<Radio label="往期竞价"></Radio>
							<Radio label="本月竞价模拟"></Radio>
						</Radio-group>
					</div>
					<div slot="extra" class="btn-group">
						<Button class="Button" type="primary" @click="add()">上一月</Button>
						<i-select v-model="model1" style="width:100px" placeholder='月度选择'>
							<i-option v-for="item in timeList" :value="item.value" :key='item.id'>{{ item.label }}
							</i-option>
						</i-select>
						<Button class="Button" type="primary">下一月</Button>
					</div>
					<previous-biding-chart></previous-biding-chart>
				</Card>
			</Row>
			<Row gutter=15  style="height: 100%" v-if="show==='本月竞价模拟'">
				<Col span="18">
				<Card class="height_392">
					<div slot="title">
						<Radio-group v-model='show' type="button" v-on:on-change="showCurrent">
							<Radio label="往期竞价">往期竞价</Radio>
							<Radio label="本月竞价模拟">本月竞价模拟</Radio>
						</Radio-group>
					</div>
					<div class="sub-title">
						<span>供需比 12:12</span>
						<span>推荐报价方案A：123.321</span>
						<span>推荐报价方案B：123.321</span>
						<span>推荐报价方案C：123.321</span>
					</div>
					<bid-chart :comsupply="comsupply" :powerplant="powerplant" :chartData="chartData"></bid-chart>
				</Card>
				</Col>
				<Col span="6" style="height: 100%;">
				<Card class="height_392" style="overflow-y: scroll">
					<h3 slot="title" class="title-lv2">模拟交易</h3>
					<ul >
						<li class="flex-row">
							<div class="flex-col" style="justify-content: center">
								<Input type="text" placeholder="供应量" v-model="supply"/>
							</div>
							<div class="flex-col">
								<Input type="text" placeholder="供应侧报价" v-model="count1"/>
								<Input type="text" placeholder="需求侧报价" v-model="count2"/>
							</div>
							<div class="flex-col" style="justify-content: center">
								<Button type="primary" @click="addChartData">添加</Button>
							</div>
						</li>
						<li class="flex-row">
							<div class="flex-col" style="justify-content: center">
								<span>供应量(kw.h)</span>
							</div>
							<div class="flex-col">
								<span>售电公司报价(元)</span>
								<span>电厂报价(元)</span>
							</div>

						</li>
						<template v-for="item in chartData">
							<li class="flex-row">
								<div class="flex-col" style="justify-content: center">
									<span>{{item.supply}}</span>
								</div>
								<div class="flex-col">
									<span>{{item.count1}}</span>
									<span>{{item.count2}}</span>
								</div>

							</li>
						</template>

					</ul>
				</Card>
				</Col>
			</Row>
		</Row>
		<Row class="mgt_15">
			<Card class="height relative">
				<h3 slot="title">上期交易结果公式</h3>
				<div class="result">
					<Table :columns="columns1" :data="data1"></Table>
				</div>
				<div class="page-center">
					<!--分页-->
					<div class="fenYe">
						<Page :total="50" show-total show-elevator></Page>
						<Button type="primary">确定</Button>
					</div>
				</div>
			</Card>
		</Row>
	</div>
</template>
<style scoped>
	.input-container input {
		border: 1px solid #999999;
		margin-left: 10px;
		width: 80px;
		height: 30px;
		text-align: center;
		outline: none;
		vertical-align: middle;
	}

	.input-container input:nth-child(1) {
		width: 100px;
	}

	.mock-trading ul {
		height: 30px;
		margin-top: 10px;
	}

	.mock-trading li {
		float: left;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-left: 20px;
		text-align: center;
	}
	li.flex-row{
		border-bottom: 1px solid #EEEEEE;
	}
	li.flex-row div{
		margin: 10px;
	}

	li.name {
		margin-left: 10px;
		margin-right: 30px;
		width: 100px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	li.gongying {
		width: 80px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	li.baojia {
		width: 80px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-right: 30px;
	}

	li.caozuo {
		cursor: pointer;
		color: #4FA8F9;
	}

	.height_392 {
		height: 392px;
	}

	.sub-title {
		position: absolute;
		right: 0px;
		top: 80px;
		z-index: 999;
	}

	.sub-title span {
		margin-right: 20px;
	}

	.height {
		height: 555px;
	}

	.btn-group2 {
		margin-top: -8px;
		z-index: 10;
	}

	.relative .page-center {
		text-align: center;
		position: absolute;
		bottom: 65px;
		left: 0;
		right: 0;
	}

	/* 分页的样式 */
	.page-center .fenYe {
		width: 100%;
		height: 60px;
		background-color: #fff;
		padding-top: 10px;
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

	.ivu-radio-wrapper {
		width: 120px;
		text-align: center;
	}
	.center{
		text-align: center;
	}
</style>