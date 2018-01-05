<script>
    export default {
        name: 'client-detail',
        data() {
            return {
                userDetail: {},
                agreementDetail: {
                    htbm: '',
                    hhgs: '',
                    mydl: '',
                    htms: ''
                },
                deleteTerminalModal: false,
                deleteTerminalName: '',
                deleteTerminalId: '',
                billModal: false,
                value1: 2,
                picList:[],
                columns: [
                    {
                        title: '申报月份',
                        key: 'month',
                         width: 150,
                    },
                    {
                        title: '申报电量(MW.h)',
                        width: 150,
                        key: 'sbdl'
                    },
                    {
                        title: '采集电量(MW.h)',
                        width: 150,

                        key: 'monitor'
                    },
                    {
                        title: '偏差(%)',
                        key: 'declare_dev',
                         width: 150,
                    },

                    {
                        title: '电费单电量(MW.h)',
                        width: 150,

                        key: 'actual_used'
                    },
                    {
                        title: '申报人',
                        width: 80,
                        key: 'confirmor'
                    },
                    {
                        title: '审核',
                        key: 'status',
                         width: 150,
                        render: (h, params) => {
                            let status = '未审核';
                            if (params.row.status === '0') {
                                status = '已审核'
                            }
                            return h('span'
                                , status)
                        }
                    }
                ],
                columns2: [
                    {
                        title: '用电月',
                        width: 100,
                        key: 'month'
                    },
                    {
                        title: '用电量(MW.h)',
                        width: 120,
                        key: 'used_num'
                    },
                    {
                        title: '金额',
                        key: 'price',
                         width: 80,
                    },
                    {
                        title: '操作',
                        key: 'action',
                        align: 'center',
                         width: 120,
                        render: (h, params) => {
                            if (params.row.status === 0) {
                                return h('div', [
                                    h('span', {

                                        style: {
                                            marginRight: '5px',
                                            color: '#4fa8f9 ',
                                            cursor: 'pointer'
                                        },
                                        on: {
                                            click: () => {
                                                console.log(params.index)
                                                this.billModal = true
                                            }
                                        }
                                    }, '查看'),
                                    h('span', {
                                        style: {
                                            marginRight: '5px',
                                            color: '#4fa8f9 ',
                                            cursor: 'pointer'
                                        },
                                        on: {
                                            click: () => {
                                                console.log(params.index)

                                                this.gotoHetong()
                                            }
                                        }
                                    }, '确认'),
                                ])
                            } else {
                                return h('div', [
                                    h('span', {

                                        style: {
                                            marginRight: '5px',
                                            color: '#4fa8f9 ',
                                            cursor: 'pointer'
                                        },
                                        on: {
                                            click: () => {
                                                console.log(params.index)
                                                this.billModal = true;
                                                this.picList = params.row.picdata;
                                            }
                                        }
                                    }, '查看'),
                                    h('span', {
                                        style: {
                                            marginRight: '5px',
                                            color: '#999 ',
                                            cursor: 'pointer'
                                        }
                                    }, '已确认'),
                                ])

                            }
                        }
                    }

                ],
                columns3: [
                    {
                        sortable: true,
                        title: '测量点名称',
                        key: 'mea_name'
                    },
                    {
                        title: '逻辑地址',
                        key: 'clientid'
                    },
                    {
                        sortable: true,
                        title: '状态',
                        key: 'is_install',
                        render: (h, params) => {
                            if (params.row.zt === 0) {
                                return h('span', {
                                    style: {}
                                }, "未安装")
                            } else {
                                return h('span', {
                                    style: {}
                                }, "已安装")
                            }
                        }
                    },
                    {
                        title: '所属户号',
                        key: 'user_no'
                    },
                    {
                        title: '通讯地址',
                        key: 'mailing_address'
                    },
                    {
                        title: '端口',
                        key: 'port',
                        width: 90,
                    },
                    {
                        title: '采集成功率（%）',
                        width: 150,
                        key: 'success_rate'
                    },
                    {
                        title: '上报比例（%）',
                        key: 'report_rate'
                    },
                    {
                        title: '采集记录',
                        key: 'sbbl',
                        render: (h, params) => {
                            return h('span', {
                                    on: {
                                        click: () => {
                                            this.gotoCaiji(params.index,params.row.clientid)
                                        }
                                    },
                                    attrs: {
                                        class: 'iconfont icon-zhuzhuangtutubiao'
                                    },
                                    style: {
                                        color: '#0089f0',
                                        cursor: 'pointer'
                                    }
                                }
                                , '')
                        }
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
                                        color: '#4fa8f9 ',
                                        cursor: 'pointer'
                                    },
                                    on: {
                                        click: () => {

                                            this.gotoTerminalData(params.row.clientid, params.row.id,params.index);
                                        }
                                    }
                                }, '详情'),
                                h('span', {
                                    style: {
                                        marginRight: '5px',
                                        color: '#4fa8f9 ',
                                        cursor: 'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            this.deleteTerminalName = params.row.clientid;
                                            this.deleteTerminalId = params.row.id;
                                            this.deleteTerminalModal = true
                                        }
                                    }
                                }, '删除'),
                            ])
                        }
                    }
                ],
                applyData: [],
                billData: [],
                terminalListData: []
            }
        },
        computed: {
            cus_id: function () {
                return this.$store.getters.cus_id
            },
            cus_name: function () {
                return this.$store.getters.cus_name
            }
        },
        watch: {
            cus_id: function () {
                this.clientBasicInfor();
                this.clinentContractInfor();
                this.clientElecBill();
                this.clientDeclareRecord();
                this.clientTerminalList();
            }
        },
        methods: {
            gotoTerminalData(clientId, id,index) {
                this.$store.dispatch('setClientId', clientId),
                    this.$router.push({path: 'client-terminal', query: {clientIndex: id,index:index}})
            },
            gotoCaiji(index,clientid) {
                this.$router.push({path:'caiji-detail',query:{index:index}});
                this.$store.dispatch('setClientId',clientid);

            },
            //用户基本信息
            clientBasicInfor() {
                this.$http.post(this.$api.CLIENT_BASIC_INFO, {cus_id: this.cus_id}).then(res => {
                    console.log('用户基本信息', res);
                    if(res.data.status==='1'){
                        this.userDetail = res.data.data
                    } 
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            //合同基本情况
            clinentContractInfor() {
                this.$http.post(this.$api.CLIENT_CONTRACT_INFO, {cus_id: this.cus_id}).then(res => {
                    console.log("合同基本情况", res);
                    if (res.data.status === '1') {
                        var data = res.data.data;
                        this.agreementDetail = {
                            htbm: data.con_no,
                            hhgs: data.user_nums,
                            mydl: data.ly_used,
                            htms: data.way
                        }
                    }
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            //用户电费单
            clientElecBill() {
                this.$http.post(this.$api.CLIENT_ELE_BILL, {cus_id: this.cus_id}).then(res => {
                    console.log('用户电费单', res);
                    if (res.data.status === '1') {
                        let data = res.data[0];
                        console.log(111,data);
                        for(let k in data){
                            this.billData.push(data[k]);
                        }
                    }else{
                        this.billData=[];
                    }
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            //用户申报记录
            clientDeclareRecord() {
                this.$http.post(this.$api.CLIENT_DECLARE_RECORD, {cus_id: this.cus_id}).then(res => {
                    console.log('用户申报记录', res);
                    if(res.data.status==='1'){
                        this.applyData = res.data[0].data
                    } 
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            //用户终端列表
            clientTerminalList() {
                this.$http.post(this.$api.CLIENT_TERMINAL_LIST, {cus_id: this.cus_id}).then(res => {
                    console.log('用户终端列表', res);
                    if(res.data.status==='1'){
                         this.terminalListData = res.data[0].data;
                    } 
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            deleteTerminal() {
                this.$http.delete(this.$api.CLIENT_TERMINAL_DELETE + this.deleteTerminalId).then(res => {
                    console.log('删除终端', res);
                    if(res.data.status==='1'){
                        this.clientTerminalList();
                    }    
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            }
        },
        mounted() {
            this.clientBasicInfor();
            this.clinentContractInfor();
            this.clientElecBill();
            this.clientDeclareRecord();
            this.clientTerminalList();
        }
    }
</script>
<template>
	<div class="client-container">
		<Row gutter="15">
			<Col span="16">
			<Card class="user-detail">
				<h3 slot="title">用户基本信息</h3>
				<!--<span slot="extra" class="detail-btn" @click="$router.push('AddClient')">详情</span>-->
				<Row>
					<table cellspacing="5" width="100%" style="margin-left: 20px;">
						<tbody>

						<tr>
							<td><span>客户编码 :</span> {{userDetail.category}}</td>
							<td><span>所属行业 :</span> {{userDetail.category}}</td>
							<td><span>售电起止时间 :</span> {{userDetail.deadline}}</td>
						</tr>
						<tr>
							<td><span>客户地址 :</span> {{userDetail.address}}</td>
							<td><span>联系人 :</span> {{userDetail.contact}}</td>
							<td><span>联系电话 :</span> {{userDetail.telphone}}</td>
						</tr>
						</tbody>
					</table>
				</Row>
			</Card>
			</Col>
			<Col span="8">
			<Card class="agreement-detail">
				<h3 slot="title">合同基本情况</h3>
				<span slot="extra" class="detail-btn"
				      @click="$router.push({path:'/hetong',query:{cus_name:cus_name,cus_id:cus_id}})">详情</span>

				<Row>
					<table cellspacing="5" width="100%" style="margin-left: 20px;">
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
			</Card>
			</Col>
		</Row>
		<Row gutter="15" className="mgt_15">
			<Col span="16">
			<Card class="user-apply">
				<h3 slot="title">用户申报记录</h3>
				<Table :columns="columns" :data="applyData" height="250"></Table>
			</Card>
			</Col>
			<Col span="8">
			<Card class="user-bill">
				<h3 slot="title">用户电费单</h3>
				<Table :columns="columns2" :show-header="true" :data="billData" height="250"></Table>
			</Card>
			</Col>
		</Row>
		<Row className="mgt_15">
			<Card class="user-clientlist">

				<h3 slot="title">用户终端列表</h3>
				<div slot="extra" class="btn-group">

					<Button type="primary" @click="$router.push('add-celiang')">+ 配置终端</Button>
				</div>

				<Row>
					<Col span="24">
					<div>

						<Table :columns="columns3" :data="terminalListData" height='280'></Table>
					</div>
					</Col>
				</Row>
			</Card>
		</Row>

		<Modal
				v-model="deleteTerminalModal"
				title="确认删除？"
				@on-ok="deleteTerminal">
			<p>要删除的终端测量点名称:</p>
			<p>{{deleteTerminalName}}</p>
		</Modal>
		<Modal
				width="1200"
				v-model="billModal"
                @on-cancel="billModal=false">
				<Carousel  v-model="value1" loop style='width: 1170px'>
					<CarouselItem v-for='item in picList' style='width: 1170px'>
						<div class="demo-carousel" style='width: 1170px'>
							<img :src="'http://www.cx8o92.cn/'+item" alt="">
						</div>
					</CarouselItem>
				</Carousel>
		</Modal>
	</div>
</template>
<style scoped>
	.detail-btn {
		color: #0089F0;
		cursor: pointer;
	}

	.user-detail table td span,
	.agreement-detail table td span:not(.danwei1) {
		color: #999999;
	}

	.btn-group {
		margin-top: -9px;
	}
    .ivu-carousel{
        height: 600px;
        margin-top: 20px;
    }
    .ivu-carousel-list{
        width: 1170px;
        height: 600px;
    }
	.demo-carousel {
		width: 1170px;
		height: 600px;
	}
    .demo-carousel img{
         display: inline-block;
         width: 100%;
         height: 100%;
    }
</style>