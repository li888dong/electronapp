<script>
    import BidChart from '@/components/TradeManagement/BidChart'
    import PreviousBidingChart from '@/components/TradeManagement/PreviousBidingChart'

    export default {
        name: 'bidmanagement',
        data() {
            return {
                month:'2017-12',
                mockSelected: '修改供给侧价格',
	            xqInput:{
		            maxcount:'',
		            highprice:'',
		            lowprice:''
	            },
	            gyInput:{
                    name:'',
                    count:'',
                    price:'',
		            index:''
	            },
                model1: false,
                tabValue: '修改供给侧价格',
                show: '本月竞价模拟',
                comsupply: [],
                powerplant: [],
                dcMockDatas: [
                    {
                        name: '电厂1',
                        gongying: 200,
                        baojia: 250,
                        caozuo: '修改',
                    },
                    {
                        name: '电厂2',
                        gongying: 300,
                        baojia: 300,
                        caozuo: '修改',
                    },
                    {
                        name: '电厂3',
                        gongying: 400,
                        baojia: 200,
                        caozuo: '修改',
                    },
                    {
                        name: '电厂4',
                        gongying: 300,
                        baojia: 311,
                        caozuo: '修改',
                    },
                    {
                        name: '电厂5',
                        gongying: 600,
                        baojia: 211,
                        caozuo: '修改',
                    },
                ],
                gsMockDatas: [
                    {
                        name: '最高报价',
                        gongying: 0,
                        baojia: 387.5
                    },
                    {
                        name: '最低报价',
                        gongying: 1400,
                        baojia: 320.0
                    },

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
                        key: 'com_price',
                    }, {
                        title: '报价差价',
                        key: 'price_dif'
                    }
                ],
                data1: [],
                limit: 5,
                totalPage: 0,
                currentPage: 1,
                loading: false,
            }
        },
        mounted() {
            this.monthBidding();
            this.oldBidding();
            this.lastResolute();
        },
        methods: {
            monthBidding() {
                this.$http.post(this.$api.MONTH_BIDDING, {com_id: this.$store.getters.com_id}).then(res => {
                    console.log("本月竞价模拟", res);
                    this.comsupply = res.data.data.comsupply;
                    this.powerplant = res.data.data.powerplant;
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            oldBidding() {
                this.loading = true;
                this.$http.post(this.$api.BIDDING_LIST, {
                    com_id: this.$store.getters.com_id,
                    limit: this.limit,
                    page: this.currentPage
                }).then(res => {
                    console.log("往期竞价结果", res);
                    if (res.data.status) {
                        let data = res.data.data;
                        this.totalPage = data.total;
                        this.currentPage = data.current_page;
                        this.data1 = data.data;
                        this.loading = false;
                    } else {
                        this.loading = false;
                    }

                }, err => {
                    this.loading = false;
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.loading = false;
                    this.$api.errcallback(err);
                })
            },
            switchSelected(type) {
                this.mockSelected = type
            },
            modifyGy(data,index) {
                console.log(data,index);
                this.gyInput = {name:data.name,count:data.gongying,price:data.baojia,index:index}
            },
	        updateGy(){
				this.dcMockDatas.splice(this.gyInput.index,1,{
				    name:this.gyInput.name,
					gongying:this.gyInput.count/1,
					baojia:this.gyInput.price,
					caozuo:'操作'
				});
				console.log(this.dcMockDatas)
	        },
	        updateXq(){
	            this.gsMockDatas.splice(1,1,{
                    name: '最低报价',
                    gongying: this.xqInput.maxcount||1400,
                    baojia: this.xqInput.lowprice||320.0
                });
	            this.gsMockDatas.splice(0,1,{
                    name: '最高报价',
                    gongying: 0,
                    baojia: this.xqInput.highprice||387.5
                });
	        },
            showCurrent: function (value) {
                this.show = value;
            },
            pageChange(value) {
                this.loading = true;
                this.$http.post(this.$api.BIDDING_LIST, {
                    com_id: this.$store.getters.com_id,
                    limit: this.limit,
                    page: value
                }).then(res => {
                    console.log("往期竞价结果", res);
                    if (res.data.status) {
                        let data = res.data.data;
                        console.log(data);
                        this.totalPage = data.total;
                        this.currentPage = data.current_page;
                        this.data1 = data.data;
                        this.loading = false;
                    } else {
                        this.loading = false;
                    }
                }, err => {
                    this.loading = false;
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.loading = false;
                    this.$api.errcallback(err);
                })
            },
            monthSelect(month){
	            this.month = month
            },
            // daoru(){
            // 	this.$router.push('/import-data');
            // }
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
						<DatePicker type="month" placeholder="请选择月份" @on-change="monthSelect"></DatePicker>
					</div>
					<previous-biding-chart :comsupply="this.comsupply" :powerplant="this.powerplant"></previous-biding-chart>
				</Card>
			</Row>
			<Row gutter=15   style="height: 100%" v-if="show==='本月竞价模拟'">
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
					<bid-chart :comsupply="gsMockDatas" :powerplant="dcMockDatas"></bid-chart>
				</Card>
				</Col>
				<Col span="6" style="height: 100%;">
				<Card class="height_392">
					<h3 slot="title" class="title-lv2">模拟交易</h3>
					<div slot="extra" class="btn-group2">
						<Radio-group v-model="tabValue" type="button" v-on:on-change="switchSelected">
							<Radio label="修改供给侧价格"></Radio>
							<Radio label="修改需求侧价格"></Radio>
						</Radio-group>
					</div>
					<div class="input-container"  v-if="mockSelected === '修改供给侧价格'">
						<Input type="text" placeholder="电厂名称" v-model="gyInput.name"
						       style="width:120px;"/>
						<Input type="text" placeholder="供应量" v-model="gyInput.count"
						       style="width:75px;margin-right:4px;margin-left:4px;"/>
						<Input placeholder="报价(元/Kw时)" number v-model="gyInput.price" style="width:90px;"/>
						<div class="btn-save fr">
							<Button type="primary" @click="updateGy">保存</Button>
						</div>
						<ul v-for="(mockData,index) in dcMockDatas">
							<li>{{mockData.rank}}</li>
							<li class="name" :title="mockData.name">{{mockData.name}}</li>
							<li class="gongying">{{mockData.gongying}}</li>
							<li class="baojia">{{mockData.baojia}}</li>
							<li class="caozuo" @click="modifyGy(mockData,index)">{{mockData.caozuo}}</li>
						</ul>
					</div>
					<div class="input-container"  v-if="mockSelected === '修改需求侧价格'">
						<div class="xq-box">
							<span>最大需求量：</span>
							<Input type="text" placeholder="需求量" v-model="xqInput.maxcount" style="width:50%"/>KW时
						</div>

						<div class="xq-box">
							<span>最高报价：</span>
							<Input placeholder="最高报价(元/Kw时)" v-model="xqInput.highprice" style="width:50%;"/>元/Kw时
						</div>

						<div class="xq-box">
							<span>最低报价：</span>
							<Input placeholder="最低报价(元/Kw时)" v-model="xqInput.lowprice" style="width:50%;"/>元/Kw时
						</div>
						<div class="btn-save fr">
							<Button type="primary" @click="updateXq">保存</Button>
						</div>
					</div>


				</Card>
				</Col>
			</Row>
		</Row>
		<Row class="mgt_15">
			<Card class="height relative">
				<h3 slot="title">上期交易结果公布</h3>
				<!-- <div slot='extra' class="btn-group3">
				  <Button type="primary" @click='daoru'>导入</Button>
				</div> -->
				<div class="result">
					<Table :columns="columns1" :data="data1" :loading='loading'></Table>
				</div>
				<div class="page-center">
					<!--分页-->
					<div class="fenYe">
						<Page :total="totalPage" :page-size='limit' :current='currentPage' show-total show-elevator
						      v-on:on-change='pageChange'></Page>
						<!-- <Button type="primary">确定</Button> -->
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
	.xq-box{
		margin: 10px;
	}
	.xq-box>span{
		display: inline-block;
		width: 24%;
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

	ul {
		overflow: hidden;
		font-size: 12px;
	}

	ul li {
		float: left;
		margin-top: 20px;

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

	/*.fenYe button {
		top: -12px;
		left: 12px;
	}*/

	.ivu-radio-wrapper {
		width: 120px;
		text-align: center;
	}
	/*.btn-group3{
		margin-top: -8px;
	}*/
</style>