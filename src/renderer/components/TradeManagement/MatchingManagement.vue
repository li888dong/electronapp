<script>

    export default {
	    name:'trade-matching',
		data(){
	        return{
                components:{

                },
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
						width:"180px",
		                key:'jyycdl'
	                },
	                {
	                    title:'申报电量(万KWh)',
		                sortable:true,
                        width:"150px",
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
		                key:'ppr'
	                },
	                {
	                    title:'确认人',
		                sortable:true,

		                key:'qrr'
	                },
	                {
	                    title:'状态',
		                sortable:true,
		                key:'zt'
	                },
	                {
	                    title:'操作',
		                key:'cz',
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('span', {
                                    style: {
                                        marginRight: '5px',
                                        color:'#4fa8f9 ',
                                        cursor:'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params.index)

                                            this.gotoHetong()
                                        }
                                    }
                                }, '审核'),
                                h('span', {
                                    style: {
                                        marginRight: '5px',
                                        color:'#4fa8f9 ',
                                        cursor:'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params.index)

                                            this.gotoYonghu()
                                        }
                                    }
                                }, '删除')
                            ])
                        }
	                }
                ],
                data1:[
					{
					    jyyf:'-',
                        jyycdl:'-',
                        sbdl:'-',
                        gddc:'-',
                        jyjg:'-',
                        jylx:'-',
                        ppr:'-',
                        qrr:'-',
                        zt:'-',
					}
				],
                columns2:[
					{
					    title:'月份',
						key:'month',
					},{
                     title:'01月',
						key:'Jan',
					},{
                       title:'02月',
						key:'Feb'
					},{
                        title:'03月',
                        key:'Mar'
                    },
                    {
                        title:'04月',
                        key:'Apr'
                    },
                    {
                        title:'05月',
                        key:'May'
                    },
                    {
                        title:'06月',
                        key:'Jun'
                    },
                    {
                        title:'07月',
                        key:'Jul'
                    },
                    {
                        title:'08月',
                        key:'Aug'
                    },
                    {
                        title:'09月',
                        key:'Sept'
                    },
                    {
                        title:'10月',
                        key:'Oct'
                    },
                    {
                        title:'11月',
                        key:'Nov'
                    },
                    {
                        title:'12月',
                        key:'Dec'
                    },
				],
				data2:[
					{
					    month:'预测电量',
                        Jan:'0',
                        Feb:'0',
                        Mar:'0',
                        Apr:'0',
                        May:'0',
                        Jun:'0',
                        Jul:'0',
                        Aug:'0',
                        Sept:'0',
                        Oct:'0',
                        Nov:'0',
                        Dec:'0'
					},{
                        month:'申报电量',
                        Jan:'0',
                        Feb:'0',
                        Mar:'0',
                        Apr:'0',
                        May:'0',
                        Jun:'0',
                        Jul:'0',
                        Aug:'0',
                        Sept:'0',
                        Oct:'0',
                        Nov:'0',
                        Dec:'0'
					}
				]
	        }
		},
	    methods: {
            pageListen: function (data) {
                this.msg = '当前页码：' + data
            }
        },

	}
</script>
<template>
	<div class="main-container">
		<Row gutter=20>
			<Col span="16">
				<Card class="reference">
					<h3 slot="title">用户数据参考</h3>
					<div slot="extra" class="btn-group">
						<Row gutter=5>
							<Col span="12">
							<Select  placeholder="请选择年份">
								<Option v-for="item in yearList" :value="item.value" :key="item.value">{{ item.label }}</Option>
							</Select>
							</Col>
							<Col span="12">
							<Select  placeholder="请选择月份">
								<Option v-for="item in monthList" :value="item.value" :key="item.value">{{ item.label }}</Option>
							</Select>
							</Col>
						</Row>
					</div>
					 <div class="myTable_Trade">
						 <Table :columns="columns2" :data="data2">
						 </Table>
					 </div>
				</Card>
			</Col>
			<Col span="8">
				<Card class="trade-matching">
					<h3 slot="title" class="title-lv3">交易匹配</h3>
					<div class="container">
						 <i-form :label-width="80">
							 <Form-item label="匹配电厂:">
								 <Select  placeholder="请选择电厂"  style="width:160px;">
									 <Option v-for="item in dcList" :value="item.value" :key="item.value">{{ item.label }}</Option>
								 </Select>
							 </Form-item>
							 <Form-item label="电厂信息:">
								 <span>剩余电量：<span class="font_color">123321</span>MW.h</span><br>
								 <span>价格:<span class="font_color">123元</span>/MWh</span>
							 </Form-item>
							 <Form-item label="匹配电量:">
								 <Input style="width:160px;"></Input>
							 </Form-item>
							 <Form-item>
								 <Button type="primary">完成</Button>
								 <Button type="normal">清空</Button>
							 </Form-item>
						 </i-form>
					</div>
				</Card>
			</Col>
		</Row>
		<Row class="mgt_15">
			<Col span="24">
				<Card class="user-config relative">
						<h3 slot="title">用户配置列表</h3>
						<div slot="extra" class="btn-group">
							<Button type="primary">导入</Button>
							<Button type="primary">导出</Button>
						</div>
                         <div class="tab_container">
							 <Table :columns="column1" :data="data1"></Table>
						 </div>
					<div class="page-center">
						<!--分页-->
						<div class="fenYe">
							<Page :total="50" show-total show-elevator></Page> <Button type="primary">确定</Button>
						</div>
					</div>
			</Card>
			</Col>
		</Row>
	</div>

</template>
<style scoped>
	.reference{
		height: 280px;
	}
	.user-config {
		height: 560px;
	}
	.trade-matching{
		height:280px;
	}
	.ivu-form-item{
		margin-bottom: 10px;
	}
	.font_color{
       color:#31c9d7;
		font-size:18px;
	}
	.btn-group{
		margin-top:-9px;
		z-index:10;
	}
	.relative .page-center{
		text-align: center;
		position: absolute;
		bottom:0px;
		left:0;
		right:0;
	}
	/* 分页的样式 */
	.page-center  .fenYe {
		width: 100%;
		height: 60px;
		background-color: #fff;
		padding-top: 10px;
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
</style>