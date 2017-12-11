<script>
    import myFenye from '@/components/Tool/myFenye'
    import mySearch from '@/components/Tool/mySearch'
    import {POWER_FRAME} from "../../Api";

    export default {
        name: 'annualforecast',
        data() {
            return {
                modalShow: false,
                selectList: [],
	            modifyList:[],
                selectYear: new Date().getFullYear(),
                selectArea: '',
                statusList: [
                    {
                        value: 0,
                        label: '未确认'
                    },
                    {
                        value: 1,
                        label: '已确认'
                    },
                    {
                        value: 2,
                        label: '已购电'
                    },
                ],
	            modifyComName:'',
	            modifyIndex:'0',
                columns6: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '企业名称',
                        width: 200,
                        key: 'com_name',
                        align: 'left'
                    },
                    {
                        title: '1月',
                        key: 'month01',
                        align: 'center'
                    },
                    {
                        title: '2月',
                        key: 'month02',
                        align: 'center'
                    },
                    {
                        title: '3月',
                        key: 'month03',
                        align: 'center'
                    },
                    {
                        title: '4月',
                        key: 'month04',
                        align: 'center'
                    },
                    {
                        title: '5月',
                        key: 'month05',
                        align: 'center'
                    },
                    {
                        title: '6月',
                        key: 'month06',
                        align: 'center'
                    },
                    {
                        title: '7月',
                        key: 'month07',
                        align: 'center'
                    },
                    {
                        title: '8月',
                        key: 'month08',
                        align: 'center'
                    },
                    {
                        title: '9月',
                        key: 'month09',
                        align: 'center'
                    },
                    {
                        title: '10月',
                        key: 'month10',
                        align: 'center'
                    },
                    {
                        title: '11月',
                        key: 'month11',
                        align: 'center'
                    },
                    {
                        title: '12月',
                        key: 'month12',
                        align: 'center'
                    },
                    {
                        title: '合计',
                        key: 'total',
                        align: 'center'
                    },
                    {
                        title: '修改人',
                        key: 'modifiedby',
                        align: 'center'
                    },
                    {
                        title: '确认人',
                        key: 'confirmor',
                        align: 'center'
                    },
                    {
                        title: '状态',
                        key: 'n17',
                        aligin:'left',
                        render: (h, params) => {
                            let status0 = params.row.status ==='0';
                            let status1 = params.row.status ==='1';
                            let status2 = params.row.status ==='2';
                            return h('select', {
	                            on:{
                                    change:(e)=>{
                                        this.setTableData1(params.index,e.target.value);
//                                        params.row.status = e.target.value;

                                    }
	                            }
                            },[
                                h('option', {
                                    attrs:{
                                        selected:status0,
                                        value:0
                                    }
                                }, '未确认'),
                                h('option', {

                                    attrs:{
                                        selected:status1,
                                        value:1
                                    }
                                }, '已确认'),
                                h('option', {
                                    attrs:{
                                        selected:status2,
                                        value:2
                                    }
                                }, '已购电'),
                            ])
                        }
                    },
                    {
                        title: '操作',
                        key: 'change',
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('span', {
                                    style: {
                                        marginRight: '5px',
                                        color: '#36c ',
                                        cursor: 'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            this.modifyComName = params.row.com_name;
                                            this.modifyIndex = params.index;
                                            this.tableData2 = params.row.list;
                                            this.modifyModal = true;
                                        }
                                    }
                                }, '修改')
                            ])
                        }
                    }
                ],
                tableData1: [],
                tableData2: [],
                modifyModal: false
            }
        },
        mounted() {
            this.yearData()
        },
        methods: {
            yearData() {
                this.$http.post(this.$api.YEAR_FORECAST, {
                    com_id: this.$store.getters.com_id,
                    year: this.selectYear,
                    area: this.selectArea,
                    keyword: this.$store.getters.searchKey
                }).then(res => {
                    console.log("年度预测", res);
                    this.tableData1 = res.data.data;

                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            yearSelect(year) {
                this.selectYear = year;
                console.log(this.selectYear);
                this.yearData()
            },
            areaSelect(area) {
                this.selectArea = area[1].name.replace(/市/, '');
                console.log(this.selectArea);

                this.yearData()
            },
            selectItem(items){
                console.log(items);
                this.selectList = items
            },
	        allComfirm(){
                let postArr = [];
                let _this = this;
                this.selectList.map(function (i) {
	                postArr.push({
		                cus_id:i.cus_id,
		                year:_this.selectYear,
		                type:i.status
	                })

                });
                console.log(postArr);
                this.$http.post(this.$api.YEAR_CONFIRM, {data:postArr}).then(res => {
                    console.log("年度预测确认", res);
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
	        },
            modifyData(){
                let postArr = [];
                let _this = this;
                this.tableData2.map(function (i) {
                    postArr.push({
                        id:i.id,
	                    data: {
                            month01:i.month01,
                            month02:i.month02,
	                        month03:i.month03,
	                        month04:i.month04,
	                        month05:i.month05,
	                        month06:i.month06,
	                        month07:i.month07,
	                        month08:i.month08,
	                        month09:i.month09,
	                        month10:i.month10,
	                        month11:i.month11,
	                        month12:i.month12
	                    }

                    })
                });
                console.log(postArr);
                this.$http.post(this.$api.YEAR_MODIFY, {data:postArr}).then(res => {
                    console.log("年度预测修改", res);
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            setTableData1(index,value){
				this.tableData1[index].status = value;
            },
            toDaoru() {
                this.$router.push({path:"/import-data",query:{type:'year'}})
            }
        },
        components: {
            'myFenye': myFenye,
            'mySearch': mySearch
        },
    }
</script>
<template>
	<div class="main-container">
		<Card>
			<h3 slot="title">年度预测</h3>
			<div class="layout-content">
				<div class="layout-content-top">
					<Row gutter="10">
						<Col span="2">
						<DatePicker type="year" placeholder="请选择年份" @on-change="yearSelect"></DatePicker>

						</Col>
						<Col span="4">
						<al-selector level=1  @on-change="areaSelect"/>

						</Col>
						<Col span="5">

						<mySearch placeholder="请输入公司名称或关键字" swidth="340" v-on:doSearch="yearData"></mySearch>
						</Col>
						<Col span="4" offset="9" style="display: flex;justify-content: flex-end">
						<Button class="fl" type="primary" @click="allComfirm">批量确认</Button>
						<Button class="fl" type="primary" style="margin-left: 10px" @click="toDaoru()">导入</Button>
						</Col>
					</Row>
				</div>
				<Row>
					<Table border @on-selection-change="selectItem" :columns="columns6" :data="tableData1"></Table>
				</Row>
				<myFenye></myFenye>
			</div>
		</Card>
		<Modal
				:title="modifyComName"
				v-model="modifyModal"
				width='54'
				:mask-closable="false"
				class-name="vertical-center-modal"
				@on-ok="modifyData">
			<table>
				<thead>
				<tr>
					<th>2017年月份</th>
					<th>01月</th>
					<th>02月</th>
					<th>03月</th>
					<th>04月</th>
					<th>05月</th>
					<th>06月</th>
					<th>07月</th>
					<th>08月</th>
					<th>09月</th>
					<th>10月</th>
					<th>11月</th>
					<th>12月</th>
					<th>合计</th>
				</tr>
				</thead>
				<tbody>
				<tr v-for="item in tableData2">
					<td>户号{{item.id}}</td>
					<td><input placeholder='-' type="text" v-model="item.month01"></td>
					<td><input placeholder='-' type="text" v-model="item.month02"></td>
					<td><input placeholder='-' type="text" v-model="item.month03"></td>
					<td><input placeholder='-' type="text" v-model="item.month04"></td>
					<td><input placeholder='-' type="text" v-model="item.month05"></td>
					<td><input placeholder='-' type="text" v-model="item.month06"></td>
					<td><input placeholder='-' type="text" v-model="item.month07"></td>
					<td><input placeholder='-' type="text" v-model="item.month08"></td>
					<td><input placeholder='-' type="text" v-model="item.month09"></td>
					<td><input placeholder='-' type="text" v-model="item.month10"></td>
					<td><input placeholder='-' type="text" v-model="item.month11"></td>
					<td><input placeholder='-' type="text" v-model="item.month12"></td>
					<td>{{item.total}}</td>
				</tr>
				<tr>
					<td>合计</td>
					<td>{{tableData1[modifyIndex].month01}}</td>
					<td>{{tableData1[modifyIndex].month02}}</td>
					<td>{{tableData1[modifyIndex].month03}}</td>
					<td>{{tableData1[modifyIndex].month04}}</td>
					<td>{{tableData1[modifyIndex].month05}}</td>
					<td>{{tableData1[modifyIndex].month06}}</td>
					<td>{{tableData1[modifyIndex].month07}}</td>
					<td>{{tableData1[modifyIndex].month08}}</td>
					<td>{{tableData1[modifyIndex].month09}}</td>
					<td>{{tableData1[modifyIndex].month10}}</td>
					<td>{{tableData1[modifyIndex].month11}}</td>
					<td>{{tableData1[modifyIndex].month12}}</td>
					<td>{{tableData1[modifyIndex].total}}</td>
				</tr>
				<tr>
					<td>系统预测</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
				</tr>
				<tr>
					<td>偏差值</td>
					<td>{{tableData1[modifyIndex].month01}}</td>
					<td>{{tableData1[modifyIndex].month02}}</td>
					<td>{{tableData1[modifyIndex].month03}}</td>
					<td>{{tableData1[modifyIndex].month04}}</td>
					<td>{{tableData1[modifyIndex].month05}}</td>
					<td>{{tableData1[modifyIndex].month06}}</td>
					<td>{{tableData1[modifyIndex].month07}}</td>
					<td>{{tableData1[modifyIndex].month08}}</td>
					<td>{{tableData1[modifyIndex].month09}}</td>
					<td>{{tableData1[modifyIndex].month10}}</td>
					<td>{{tableData1[modifyIndex].month11}}</td>
					<td>{{tableData1[modifyIndex].month12}}</td>
					<td>{{tableData1[modifyIndex].total}}</td>
				</tr>
				</tbody>
			</table>
		</Modal>
	</div>
</template>
<style scoped>
	.layout-content {
		background: #fff;
		height: 810px;
	}

	.layout-content-top {
		padding-bottom: 15px;
	}

	.table-container th {
		height: 30px;
		background-color: #f6f6f6;
	}

	.table-container td {
		text-align: center;
		height: 30px;
	}

	.vertical-center-modal table {
		text-align: center;
		border: 1px solid #ccc;
		border-collapse: collapse;
	}

	.vertical-center-modal th {
		background-color: #f8f8f9;
	}

	.vertical-center-modal td, .vertical-center-modal th {
		border: 1px solid #ccc;
		width: 70px;
		height: 30px;
	}

	.vertical-center-modal input {
		width: 70px;
		height: 30px;
		border: 1px solid #edb00d;
		text-align: center;
	}
</style>