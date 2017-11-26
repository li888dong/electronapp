<script>
    import Pagenation from '@/components/Pagenation'
    import ISelect from "../../../../node_modules/iview/src/components/select/select.vue";

    export default {
	    name:'trade-matching',
		data(){
	        return{
               yearList:[
	               {
	                   label:'2017年',
		               value:'2017'
	               },
	               {
	                   label:'2016年',
		               value:'2016'
	               },
	               {
	                   label:'2016年',
		               value:'2016'
	               },
	               {
	                   label:'2016年',
		               value:'2016'
	               },
               ],
		        monthList:[
			        {
			            label:'01月',
				        value:'1'
			        },
			        {
			            label:'02月',
				        value:'2'
			        },
			        {
			            label:'03月',
				        value:'3'
			        },
			        {
			            label:'04月',
				        value:'4'
			        },
			        {
			            label:'05月',
				        value:'5'
			        },
			        {
			            label:'06月',
				        value:'6'
			        },
			        {
			            label:'07月',
				        value:'7'
			        },
			        {
			            label:'08月',
				        value:'8'
			        },
			        {
			            label:'09月',
				        value:'9'
			        },
			        {
			            label:'10月',
				        value:'10'
			        },
			        {
			            label:'11月',
				        value:'11'
			        },
			        {
			            label:'12月',
				        value:'12'
			        },
		        ],
		        dcList:[
			        {
			            label:'平顶山姚孟电厂',
			            value:'dc1'
			        },
			        {
			            label:'平顶山姚孟电厂2',
			            value:'dc2'
			        },
			        {
			            label:'平顶山姚孟电厂3',
			            value:'dc3'
			        },
		        ],
                column1:[
	                {
	                    title:'交易月份',
		                sortable:true,
		                key:'jyyf'
	                },
	                {
	                    title:'交易预测电量(万KWh)',
		                sortable:true,
		                key:'jyycdl'
	                },
	                {
	                    title:'申报电量(万KWh)',
		                sortable:true,
		                key:'sbdl'
	                },
	                {
	                    title:'购电电厂',
		                sortable:true,
		                key:'gddc'
	                },
	                {
	                    title:'交易价格',
		                sortable:true,
                        width:'110',
                        key:'jyjg'
	                },
	                {
	                    title:'交易类型',
		                sortable:true,
		                key:'jylx'
	                },
	                {
	                    title:'匹配人',
		                sortable:true,
		                width:'90',
		                key:'ppr'
	                },
	                {
	                    title:'确认人',
		                sortable:true,
                        width:'90',
		                key:'qrr'
	                },
	                {
	                    title:'状态',
		                sortable:true,
                        width:'90',
		                key:'zt'
	                },
	                {
	                    title:'操作',
		                key:'cz'
	                }
                ]
	        }
		},
	    methods: {
            pageListen: function (data) {
                this.msg = '当前页码：' + data
            }
        },
	    components:{
            ISelect,
            'pagenation':Pagenation
	    }
	}
</script>
<template>
	<div class="client-container">
		<Row gutter=20>
			<Col span="16">
				<panel class="reference">
					<h3 class="title-lv3">用户数据参考</h3>
					<div class="btn-group">
						<Row gutter=5>
							<Col span="12">
							<Select  size="small" placeholder="请选择年份">
								<Option v-for="item in yearList" :value="item.value" :key="item.value">{{ item.label }}</Option>
							</Select>
							</Col>
							<Col span="12">
							<Select  size="small" placeholder="请选择月份">
								<Option v-for="item in monthList" :value="item.value" :key="item.value">{{ item.label }}</Option>
							</Select>
							</Col>
						</Row>
					</div>
					<table width="100%" cellspacing="0">
						<thead>
						<tr>
							<th>月份</th>
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
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>预测电量</td>
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
							<td>申报电量</td>
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
						</tbody>
					</table>
				</panel>
			</Col>
			<Col span="8">
				<panel class="trade-matching">
					<h3 class="title-lv3">交易匹配</h3>
					<Row>
						<Col span="5">
							<span>匹配电厂:</span>
						</Col>
						<Col span="10">
							<Select  size="small" placeholder="请选择电厂">
								<Option v-for="item in dcList" :value="item.value" :key="item.value">{{ item.label }}</Option>
							</Select>
						</Col>
					</Row>
					<Row>
						<Col span="5">
						<span>电厂信息:</span>
						</Col>
						<Col span="10">
							<Row><span>剩余电量:123321MW.h</span></Row>
							<Row><span>价格:123元/MWh</span></Row>
						</Col>
					</Row>
					<Row>
						<Col span="5">
							<span class="matching-title">匹配电量:</span>
						</Col>
						<Col span="10">
							<Input v-model="value" size="small"></Input>
						</Col>
					</Row>
					<Row>
						<Col offset="5">
							<Button type="primary">完成</Button>
							<Button type="normal">清空</Button>
						</Col>
					</Row>

				</panel>
			</Col>
		</Row>
		<Row class="mgt_15">
			<Col span="24">

				<panel class="user-config">
					<Row>
						<h3 class="title-lv3">用户配置列表</h3>
						<div class="btn-group">
							<Button type="primary">导入</Button>
							<Button type="primary">导出</Button>
						</div>
					</Row>
					<Row style="margin-top: 10px;">
						<Table :columns="column1"></Table>
					</Row>
					<div class="page-container">

						<Page :total="100" show-elevator show-total></Page>
					</div>


			</panel>
			</Col>
		</Row>
	</div>

</template>
<style scoped>
	.matching-container{
		top: 75px;
		left: 225px;
		overflow: hidden;
	}
	.matching-container h3{
		display: inline-block;
	}
	.reference{
		height: 230px;
	}
	.reference table{
		margin-top: 50px;
	}
	.reference th{
		height: 30px;
		background-color: #4FA8F9;
		color: #ffffff;
	}
	.reference td{
		text-align: center;
	}
	.reference td:not(:nth-child(1)){
		border: 1px solid #999999;
		border-radius: 3px;
	}

	.trade-matching>div{
		margin-top: 10px;
	}
	.user-config {
		height: 600px;
	}

	th{
		height: 30px;
		background-color: #f6f6f6;
	}
	td{
		text-align: center;
	}
	.trade-matching{
		height:230px;
	}
</style>