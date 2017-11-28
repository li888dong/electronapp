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
						key: 'n1'
					},
					{
						title: '1月',
						key: 'n2'
					},
					{
						title: '2月',
						key: 'n3'
					},
					{
						title: '3月',
						key: 'n4'
					},
					{
						title: '4月',
						key: 'n5'
					},
					{
						title: '5月',
						key: 'n6'
					},
					{
						title: '6月',
						key: 'n7'
					},
					{
						title: '7月',
						key: 'n8'
					},
					{
						title: '8月',
						key: 'n9'
					},
					{
						title: '9月',
						key: 'n10'
					},
					{
						title: '10月',
						key: 'n11'
					},
					{
						title: '11月',
						key: 'n12'
					},
					{
						title: '12月',
						key: 'n13'
					},
					{
						title: '合计',
						key: 'n14'
					},
					{
						title: '修改人',
						key: 'n15'
					},
					{
						title: '确认人',
						key: 'n16'
					},     
					{
						title: '状态',
						key: 'n17'
					},               
					{
						title: '操作',
						key: 'change',
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
        },
		components : {
			'myFenye': myFenye,
			'mySearch': mySearch
		},
    }
</script>
<template>
	<div class="main-container">
		<panel>
			<Row>
				<h3 class="title-lv2">年度预测</h3>
			</Row>
			<div class="layout-content">
				<Row class="layout-content-top">
					<Col span='8'>
						<Button class="Button" type="primary">上一年</Button>
						<i-select :model.sync="model1" style="width:100px" placeholder='年度选择'>								
							<i-option v-for="item in timeList" :value="item.value" :key = 'item.id'>{{ item.label }}</i-option>
						</i-select>
						<Button class="Button" type="primary">下一年</Button>						
						<i-select :model.sync="model1" style="width:100px" placeholder='区域选择'>								
							<i-option v-for="item in cityList" :value="item.value" :key = 'item.id'>{{ item.label }}</i-option>
						</i-select>
					</Col>
					<Col span="6" offset='7'>
                        <mySearch></mySearch>
                    </Col>                    
                    <Col span="3" style="text-align: right;">
                        <Button type="primary">批量确认</Button>
						<Button type="primary" style="margin-left: 10px">导入</Button>
                    </Col>
				</Row>
				<Row>
					<Table border ref="selection" :columns="columns6" :data="data6"></Table>
				</Row>				
				<myFenye></myFenye>
			</div>
		</panel>
		<Modal
			title="河南众企联合售电有限公司"
			v-model="modal2"
			width = 95
			:mask-closable="false"
			class-name="vertical-center-modal">
			<table cellspacing="2" style="width:100%;">
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
							<td><input type="text"></td>
							<td><input type="text"></td>
							<td><input type="text"></td>
							<td><input type="text"></td>
							<td><input type="text"></td>
							<td><input type="text"></td>
							<td><input type="text"></td>
							<td><input type="text"></td>
							<td><input type="text"></td>
							<td><input type="text"></td>
							<td><input type="text"></td>
							<td><input type="text"></td>
							<td>355555.55</td>
						</tr>
						<tr>
							<td>户号12345</td>
							<td><input type="text"></td>
							<td><input type="text"></td>
							<td><input type="text"></td>
							<td><input type="text"></td>
							<td><input type="text"></td>
							<td><input type="text"></td>
							<td><input type="text"></td>
							<td><input type="text"></td>
							<td><input type="text"></td>
							<td><input type="text"></td>
							<td><input type="text"></td>
							<td><input type="text"></td>
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
    border-radius: 4px;
    padding: 10px;    
    height: 875px
}
.layout-content-top {
    padding-bottom: 15px;
}
.table-container th{
	height: 30px;
	background-color: #f6f6f6;
}
.table-container td{
	text-align: center;
	height: 30px;
}
</style>