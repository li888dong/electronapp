<script>
	export default {
	    name:'client-detail',
		data(){
	        return{
				userDetail:{
				    khbm:'00000-000ZZ',
					sshy:'二级    电力、热力的生产和供应业',
					qzsh:'2018.12.12~2015.12.12',
					khdz:'郑州市中原区大学园18#  450000',
					lxr:'丁军鹏',
					lxdh:'15890191652'
				},
		        agreementDetail:{
				    htbm:'00000-000ZZ',
			        hhgs:'2个',
			        mydl:'10000',
			        htms:'服务费模式'
		        },
                columns: [
                    {
                        title: '申报月份',
                        key: 'month'
                    },
                    {
                        title: '申报电量(MW.h)',
	                    width:150,
                        key: 'sbdl'
                    },
                    {
                        title: '采集电量(MW.h)',
                        width:150,

                        key: 'cjdl'
                    },
                    {
                        title: '偏差(%)',
                        key: 'pc'
                    },

                    {
                        title: '电费单电量(MW.h)',
                        width:150,

                        key: 'dfddl'
                    },
	                {
                        title: '申报人',
		                width:80,
                        key: 'sbr'
                    },
                    {
                        title: '审核',
                        key: 'sh'
                    }
                ],
		        columns2: [
                    {
                        title: '用电月',
                        width:100,
                        key: 'ydy'
                    },
                    {
                        title: '用电量(MW.h)',
                        width:120,
                        key: 'ydl'
                    },
                    {
                        title: '金额',
                        key: 'je'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        align: 'center',
                        render: (h, params) => {
                            console.log(params)
	                        if (params.row.status === 0){
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
                                            this.gotoDetail()
                                        }
                                    }
                                }, '查看'),
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
                                }, '确认'),
                            ])
                            }else {
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
                                                this.gotoDetail()
                                            }
                                        }
                                    }, '查看'),
                                    h('span', {
                                        style: {
                                            marginRight: '5px',
                                            color:'#999 ',
                                            cursor:'pointer'
                                        }
                                    }, '已确认'),
                                ])

                            }
                        }
                    }

                ],
		        columns3:[
                    {
                        sortable: true,
                        title: '测量点名称',
                        key: 'cldmc'
                    },
                    {
                        title: '安装位置',
                        key: 'azwz'
                    },
                    {
                        sortable: true,
                        title: '状态',
                        key: 'zt'
                    },
                    {
                        title: '所属户号',
                        key: 'sshh'
                    },
                    {
                        title: '通讯地址',
                        key: 'txdz'
                    },
                    {
                        title: '端口',
                        key: 'dk'
                    },
                    {
                        title: '采集成功率（%）',
                        width:150,
                        key: 'cjcgl'
                    },
                    {
                        title: '上报比例（%）',
                        key: 'sbbl'
                    },
                    {
                        title: '采集记录',
                        key: 'sbbl'
                    },
                    {
                        title: '操作',
                        key: 'action',
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
                                            this.gotoTerminalData()
                                        }
                                    }
                                }, '详情'),
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
                                }, '编辑'),,
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
                                }, '删除'),
                            ])
                        }
                    }
		        ],
		        data1:[
			        {
			            'month':'01月',
				        'sbdl':'12132132.00',
				        'cjdl':'52185651.00' ,
				        'pc':'3%',

				        'dfddl':'312313.111',
				        'sbr':'某某某',
				        'sh':'通过'
			        },{
			            'month':'02月',
				        'sbdl':'12132132.00',
				        'cjdl':'52185651.00' ,
				        'pc':'3%',

				        'dfddl':'312313.111',
				        'sbr':'某某某',
				        'sh':'通过'
			        },{
			            'month':'03月',
				        'sbdl':'12132132.00',
				        'cjdl':'52185651.00' ,
				        'pc':'3%',

				        'dfddl':'312313.111',
				        'sbr':'某某某',
				        'sh':'通过'
			        },{
			            'month':'04月',
				        'sbdl':'12132132.00',
				        'cjdl':'52185651.00' ,
				        'pc':'3%',

				        'dfddl':'312313.111',
				        'sbr':'某某某',
				        'sh':'通过'
			        },{
			            'month':'05月',
				        'sbdl':'12132132.00',
				        'cjdl':'52185651.00' ,
				        'pc':'3%',

				        'dfddl':'312313.111',
				        'sbr':'某某某',
				        'sh':'通过'
			        },{
			            'month':'06月',
				        'sbdl':'12132132.00',
				        'cjdl':'52185651.00' ,
				        'pc':'3%',

				        'dfddl':'312313.111',
				        'sbr':'某某某',
				        'sh':'通过'
			        },{
			            'month':'07月',
				        'sbdl':'12132132.00',
				        'cjdl':'52185651.00' ,
				        'pc':'3%',

				        'dfddl':'312313.111',
				        'sbr':'某某某',
				        'sh':'通过'
			        },
		        ],
		        data2:[
			        {
			            'ydy':'2017年01月',
				        'ydl':'12132132.00',
				        'je':'52185.00' ,
				        'status':0
			        }, {
			            'ydy':'2017年02月',
				        'ydl':'12132132.00',
				        'je':'52185.00' ,
				        'status':1
			        }, {
			            'ydy':'2017年03月',
				        'ydl':'12132132.00',
				        'je':'52185.00' ,
				        'status':0
			        }, {
			            'ydy':'2017年04月',
				        'ydl':'12132132.00',
				        'je':'52185.00' ,
				        'status':0
			        }, {
			            'ydy':'2017年05月',
				        'ydl':'12132132.00',
				        'je':'52185.00' ,
				        'status':0
			        }, {
			            'ydy':'2017年06月',
				        'ydl':'12132132.00',
				        'je':'52185.00' ,
				        'status':0
			        },
		        ],
		        data3:[
			        {
			            'cldmc':'测量点名称测量点名称',
			            'azwz':'安装位置安装位置',
			            'zt':'未安装',
			            'sshh':'123456789',
			            'txdz':'asdas3613asd',
			            'dk':'8080',
			            'cjcgl':'100%',
			            'sbbl':'80%',
			            'cjjl':'000',
			        }
		        ]
	        }
		},
		methods:{
            gotoTerminalData(){
                this.$router.push('client-terminal')
            }
		}
	}
</script>
<template>
	<div class="client-container">
		<Row gutter="15">
			<Col span="16">
				<panel class="user-detail">
					<Row>

						<h3 class="title-lv3">用户基本信息</h3>
						<div class="btn-group">
							<span @click="$router.push('AddClient')">详情</span>
						</div>
					</Row>
					<Row>
						<table cellspacing="5" width="100%" style="margin-left: 20px;">
							<tbody>

							<tr>
								<td><span>客户编码 :</span> {{userDetail.khbm}}</td>
								<td><span>所属行业 :</span> {{userDetail.sshy}}</td>
								<td><span>售电起止时间 :</span> {{userDetail.qzsh}}</td>
							</tr>
							<tr>
								<td><span>客户地址 :</span> {{userDetail.khdz}}</td>
								<td><span>联系人 :</span> {{userDetail.lxr}}</td>
								<td><span>联系电话 :</span> {{userDetail.lxdh}}</td>
							</tr>
							</tbody>
						</table>
					</Row>
				</panel>
			</Col>
			<Col span="8">
				<panel class="agreement-detail">
					<Row>

						<h3 class="title-lv3">合同基本情况</h3>
						<div class="btn-group">
							<span  @click="$router.push('add-hetong')">详情</span>
						</div>
					</Row>
					<Row>
						<table  cellspacing="5" width="100%" style="margin-left: 20px;">
							<tr>
								<td><span>合同编码 :</span> {{agreementDetail.htbm}}</td>
								<td><span>户号个数 :</span> {{agreementDetail.hhgs}}</td>
							</tr>
							<tr>
								<td><span>年用电量 :</span> {{agreementDetail.mydl}} <span class="danwei1">Kw.时</span></td>
								<td><span>合同模式 :</span> {{agreementDetail.htms}}</td>
							</tr>
						</table>
					</Row>
				</panel>
			</Col>
		</Row>
		<Row gutter="15" className="mgt_15">
			<Col span="16">
				<panel class="user-apply">
					<h3 class="title-lv3">用户申报记录</h3>
					<Table :columns="columns" :data="data1" height="250"></Table>
				</panel>
			</Col>
			<Col span="8">
				<panel class="user-bill">
					<h3 class="title-lv3">用户电费单</h3>
					<Table :columns="columns2" :show-header="true" :data="data2" height="250"></Table>
				</panel>
			</Col>
		</Row>
		<Row className="mgt_15">
			<panel class="user-clientlist">
				<Row>
					<h3 class="title-lv3">用户终端列表</h3>
					<div class="btn-group">

						<Button type="success" @click="$router.push('add-celiang')">+ 配置终端</Button>
					</div>
				</Row>
				<Row>
					<Col span="24" class="mgt_15">
						<div style="height: 404px;">

							<Table :columns="columns3" :data="data3"></Table>
						</div>
					</Col>
				</Row>
			</panel>
		</Row>


	</div>
</template>
<style scoped>

	.user-detail table td span,
	.agreement-detail table td span:not(.danwei1){
		color: #999999;
	}



	.user-apply th{
		text-align: center;
		height: 40px;
		background-color: #F6F7FB;
	}
	.user-apply td{
		text-align: center;
	}

	.user-bill td{
		border-top: 1px solid #333333;
		height: 36px;
	}

	.user-clientlist th{
		text-align: center;
		height: 40px;
		background-color: #F6F7FB;
	}
	.user-clientlist td{
		text-align: center;
	}
	.btn-group span{
		color: #0089F0;
		cursor: pointer;
	}
</style>