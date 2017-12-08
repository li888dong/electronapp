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
                dcMockDatas: [
                    {
                        rank: '1',
                        name: '电厂1',
                        gongying: 300,
                        baojia: 6,
                        caozuo: '修改',
                    }
                ],
                gsMockDatas: [
                    {
                        rank: '1',
                        name: '售电公司1',
                        gongying: 300,
                        baojia: 5,
                        caozuo: '修改',
                    },
                    {
                        rank: '1',
                        name: '售电公司1',
                        gongying: 400,
                        baojia: 4,
                        caozuo: '修改',
                    },
                    {
                        rank: '1',
                        name: '售电公司1',
                        gongying: 500,
                        baojia: 3,
                        caozuo: '修改',
                    },
                    {
                        rank: '1',
                        name: '售电公司1',
                        gongying: 600,
                        baojia: 2,
                        caozuo: '修改',
                    },
                ],
                columns1: [
                    {
                        title: '购方名称',
                        key: 'gfmc',
                    }, {
                        title: '所属区域',
                        key: 'ssqy',
                    }, {
                        "sortable": true,
                        title: '售方名称',
                        key: 'sfmc'
                    }, {
                        title: '时间段',
                        key: 'sjd'
                    }, {
                        "sortable": true,
                        title: '成交电量',
                        key: 'cjdl'
                    }, {
                        "sortable": true,
                        title: '成交电价',
                        key: 'cjdj'
                    }, {
                        "sortable": true,
                        title: '差价',
                        key: 'cj'
                    }, {
                        title: '电厂报价',
                        key: 'dcbj'
                    }, {
                        title: '售电公司报价',
                        key: 'sdgsbj'
                    }, {
                        title: '报价差价',
                        key: 'bjcj'
                    }
                ],
                data1: [
                    {
                        gfmc: '孟州市电厂',
                        ssqy: '-',
                        sfmc: '-',
                        sjd: '-',
                        cjdl: '-',
                        cjdj: '-',
                        cj: '-',
                        dcbj: '-',
                        sdgsbj: '-',
                        bjcj: '-'
                    }
                ],
                timeList: [
                    {
                        value: '2017年1月',
                        label: '2017年1月'
                    },
                    {
                        value: '2017年2月',
                        label: '2017年2月'
                    },
                    {
                        value: '2017年3月',
                        label: '2017年3月'
                    },
                    {
                        value: '2017年4月',
                        label: '2017年4月'
                    },
                    {
                        value: '2017年5月',
                        label: '2017年5月'
                    },
                    {
                        value: '2017年6月',
                        label: '2017年6月'
                    }
                ],
            }
        },
	    beforeMount(){
            this.monthBidding();
            this.oldBidding();
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
                this.$http.get(this.$api.OLD_BIDDING+'?com_id='+this.$store.getters.com_id).then(res => {
                    console.log("往期竞价结果", res);
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
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
            addDcMock(){
	            this.dcMockDatas.push({
		            name:this.dcmc,
		            gongying:this.gyl,
		            baojia:this.bj
	            })
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
					<bid-chart :comsupply="gsMockDatas" :powerplant="dcMockDatas"></bid-chart>
				</Card>
				</Col>
				<Col span="6" style="height: 100%;">
				<Card class="height_392">
					<h3 slot="title" class="title-lv2">模拟交易</h3>
					<div slot="extra" class="btn-group2">
						<Radio-group v-model="tabValue" type="button" v-on:on-change="switchSelected">
							<Radio label="添加供给侧价格"></Radio>
							<Radio label="添加需求侧价格"></Radio>
						</Radio-group>
					</div>
					<div class="input-container">
						<Input v-if="mockSelected === '添加供给侧价格'" type="text" placeholder="电厂名称" v-model="dcmc"
						       style="width:120px;"/>
						<Input v-if="mockSelected === '添加供给侧价格'" type="text" placeholder="供应量" v-model="gyl"
						       style="width:75px;margin-right:4px;margin-left:4px;"/>
						<Input v-if="mockSelected === '添加需求侧价格'" type="text" placeholder="售电公司名称" v-model="dcmc"
						       style="width:120px;"/>
						<Input v-if="mockSelected === '添加需求侧价格'" type="text" placeholder="需求量" v-model="gyl"
						       style="width:75px;margin-right:4px;margin-left:4px;"/>
						<Input placeholder="报价(元/Kw时)" v-model="bj" style="width:90px;"/>
						<div v-if="mockSelected === '添加供给侧价格'" class="btn-save fr">
							<Button type="primary" @click="addDcMock">保存</Button>
						</div>
						<div v-if="mockSelected === '添加需求侧价格'" class="btn-save fr">
							<Button type="primary">保存</Button>
						</div>
					</div>
					<ul v-for="mockData in dcMockDatas" v-if="mockSelected === '添加供给侧价格'">
						<li>{{mockData.rank}}</li>
						<li class="name" :title="mockData.name">{{mockData.name}}</li>
						<li class="gongying">{{mockData.gongying}}</li>
						<li class="baojia">{{mockData.baojia}}</li>
						<li class="caozuo" @click="modifyData(mockData)">{{mockData.caozuo}}</li>
					</ul>
					<ul v-for="mockData in gsMockDatas" v-if="mockSelected === '添加需求侧价格'">
						<li>{{mockData.rank}}</li>
						<li class="name" :title="mockData.name">{{mockData.name}}</li>
						<li class="gongying">{{mockData.gongying}}</li>
						<li class="baojia">{{mockData.baojia}}</li>
						<li class="caozuo" @click="modifyData(mockData)">{{mockData.caozuo}}</li>
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

	.fenYe button {
		top: -12px;
		left: 12px;
	}

	.ivu-radio-wrapper {
		width: 120px;
		text-align: center;
	}
</style>