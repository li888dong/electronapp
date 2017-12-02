<script>
	import myFenye from '@/components/Tool/myFenye'
	import mySearch from '@/components/Tool/mySearch'

    export default {
        name: 'annualforecast',
        data() {
            return {
				modalShow:false,
                cur: 1,
                all: 5,
				msg: '',
				columns6: [
					{
						title: '企业名称',
						width: 200,
						key: 'n1',
                    	align: 'center'
					},
					{
						title: '1月',
						key: 'n2',
                    	align: 'center'
					},
					{
						title: '2月',
						key: 'n3',
                    	align: 'center'
					},
					{
						title: '3月',
						key: 'n4',
                    	align: 'center'
					},
					{
						title: '4月',
						key: 'n5',
                    	align: 'center'
					},
					{
						title: '5月',
						key: 'n6',
                    	align: 'center'
					},
					{
						title: '6月',
						key: 'n7',
                    	align: 'center'
					},
					{
						title: '7月',
						key: 'n8',
                    	align: 'center'
					},
					{
						title: '8月',
						key: 'n9',
                    	align: 'center'
					},
					{
						title: '9月',
						key: 'n10',
                    	align: 'center'
					},
					{
						title: '10月',
						key: 'n11',
                    	align: 'center'
					},
					{
						title: '11月',
						key: 'n12',
                    	align: 'center'
					},
					{
						title: '12月',
						key: 'n13',
                    	align: 'center'
					},
					{
						title: '合计',
						key: 'n14',
                    	align: 'center'
					},
					{
						title: '修改人',
						key: 'n15',
                    	align: 'center'
					},
					{
						title: '确认人',
						key: 'n16',
                    	align: 'center'
					},     
					{
						title: '状态',
						key: 'n17',
                    	align: 'center'
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
										color:'#36c ',
										cursor:'pointer'
									},
									on: {
										click: () => {
											this.renderM(params)
										}
									}
								}, '修改')								
							])
						}
					}
				],
				data6: [
					{
						n1: '河南众企联合售电有限公司',
						n2: '0',
						n3: '0',
						n4: '0',
						n5: '0',
						n6: '0',
						n7: '0',
						n8: '0',
						n9: '0',
						n10: '0',
						n11: '0',
						n12: '0',
						n13: '0',
						n14: '0',
						n15: '王朝辉',
						n16: '王朝辉',
						n17: '已确认',
					},
					{                
						n1: '河南滴滴有限公司',
						n2: '0',
						n3: '0',
						n4: '0',
						n5: '0',
						n6: '0',
						n7: '0',
						n8: '0',
						n9: '0',
						n10: '0',
						n11: '0',
						n12: '0',
						n13: '0',
						n14: '0',
						n15: '王朝辉',
						n16: '王朝辉',
						n17: '已确认',
					},
				],				
				cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model1: '',
				modal2: false,
				timeList: [
					{
                        value: 'beijing',
                        label: '2011'
                    },
                    {
                        value: 'shanghai',
                        label: '2012'
                    },
                    {
                        value: 'shenzhen',
                        label: '2013'
                    },
                    {
                        value: 'hangzhou',
                        label: '2014'
                    },
                    {
                        value: 'nanjing',
                        label: '2015'
                    },
                    {
                        value: 'chongqing',
                        label: '2016'
                    }
				]
            }
        },
	    methods:{
            pageListen: function (data) {
                this.msg = '当前页码：' + data
            },
			renderM(index) {
				this.modal2= true
				console.log(index)
			},
			toDaoru() {
				this.$router.push("/import-data")
			}
        },
		components : {
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
					<div class="fl">
						<Button class="Button" type="primary">上一年</Button>
						<Select :model.sync="model1" style="width:100px;" placeholder='年度选择'>								
							<Option v-for="item in timeList" :value="item.value" :key = 'item.id'>{{ item.label }}</Option>
						</Select>
						<Button class="Button" type="primary">下一年</Button>						
						<Select :model.sync="model1" style="width:100px;margin-left: 30px" placeholder='区域选择'>								
							<Option v-for="item in cityList" :value="item.value" :key = 'item.id'>{{ item.label }}</Option>
						</Select>
					</div>
					<div class="fr">
                        <mySearch class="fl" style="margin-right: 30px;" placeholder="请输入公司名称或关键字" swidth="340"></mySearch>
						<Button class="fl" type="primary">批量确认</Button>
						<Button  class="fl" type="primary" style="margin-left: 10px" @click="toDaoru()">导入</Button>
                    </div>
				</div>
				<Row>
					<Table border ref="selection" :columns="columns6" :data="data6"></Table>
				</Row>				
				<myFenye></myFenye>
			</div>
		</Card>
		<Modal
			title="河南众企联合售电有限公司"
			v-model="modal2"
			width = 54
			:mask-closable="false"
			class-name="vertical-center-modal">
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
					<tr>
						<td>户号12345</td>
						<td><input placeholder='-' type="text"></td>
						<td><input placeholder='-' type="text"></td>
						<td><input placeholder='-' type="text"></td>
						<td><input placeholder='-' type="text"></td>
						<td><input placeholder='-' type="text"></td>
						<td><input placeholder='-' type="text"></td>
						<td><input placeholder='-' type="text"></td>
						<td><input placeholder='-' type="text"></td>
						<td><input placeholder='-' type="text"></td>
						<td><input placeholder='-' type="text"></td>
						<td><input placeholder='-' type="text"></td>
						<td><input placeholder='-' type="text"></td>
						<td>355555.55</td>
					</tr>
					<tr>
						<td>户号12345</td>
						<td><input placeholder='-' type="text"></td>
						<td><input placeholder='-' type="text"></td>
						<td><input placeholder='-' type="text"></td>
						<td><input placeholder='-' type="text"></td>
						<td><input placeholder='-' type="text"></td>
						<td><input placeholder='-' type="text"></td>
						<td><input placeholder='-' type="text"></td>
						<td><input placeholder='-' type="text"></td>
						<td><input placeholder='-' type="text"></td>
						<td><input placeholder='-' type="text"></td>
						<td><input placeholder='-' type="text"></td>
						<td><input placeholder='-' type="text"></td>
						<td>355555.55</td>
					</tr>
					<tr>
						<td>合计</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355555.55</td>
					</tr>
					<tr>
						<td>系统预测</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355555.55</td>
					</tr>
					<tr>
						<td>偏差值</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355.55</td>
						<td>355555.55</td>
					</tr>
				</tbody>
			</table>
		</Modal>	
	</div>
</template>
<style scoped>
.layout-content{
    overflow: hidden;
    background: #fff;
    height: 810px;
}
.layout-content-top {
    padding-bottom: 15px;
	overflow: hidden; 
}
.table-container th{
	height: 30px;
	background-color: #f6f6f6;
}
.table-container td{
	text-align: center;
	height: 30px;
}
.vertical-center-modal table {
	text-align: center;
	border: 1px solid #ccc;
	border-collapse:collapse;
}
.vertical-center-modal th{
	background-color: #f8f8f9;
}
.vertical-center-modal td,.vertical-center-modal th{
	border: 1px solid #ccc;
	width: 70px;
	height: 30px;
}
.vertical-center-modal input{
	width: 70px;
	height: 30px;
	border: 1px solid #edb00d;
	text-align: center;
}
</style>