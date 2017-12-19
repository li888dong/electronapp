<script>
	export default {
	    name:'client-detail',
		data(){
	        return{
				userDetail:{},
		        agreementDetail:{
				    htbm:'',
			        hhgs:'',
			        mydl:'',
			        htms:''
		        },
		        deleteTerminalModal:false,
		        deleteTerminalName:'',
		        deleteTerminalId:'',
		        billModal:false,
		        carousel:2,
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

                        key: 'monitor'
                    },
                    {
                        title: '偏差(%)',
                        key: 'declare_dev'
                    },

                    {
                        title: '电费单电量(MW.h)',
                        width:150,

                        key: 'actual_used'
                    },
	                {
                        title: '申报人',
		                width:80,
                        key: 'confirmor'
                    },
                    {
                        title: '审核',
                        key: 'status',
                        render:(h,params)=>{
							let status = '未审核';
                            if (params.row.status ==='0'){
                                status = '已审核'
                            }
                            return h('span'
	                            ,status)
                        }
                    }
                ],
		        columns2: [
                    {
                        title: '用电月',
                        width:100,
                        key: 'month'
                    },
                    {
                        title: '用电量(MW.h)',
                        width:120,
                        key: 'used_num'
                    },
                    {
                        title: '金额',
                        key: 'price'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        align: 'center',
                        render: (h, params) => {
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
                                            this.billModal = true
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
                                                this.billModal = true
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
                        render:(h,params)=>{
                            if(params.row.zt===0){
                                return h('span',{
                                    style:{

                                    }
                                },"未安装")
                            }else{
                               return h('span',{
                                    style:{

                                    }
                                },"已安装")
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
                        key: 'port'
                    },
                    {
                        title: '采集成功率（%）',
                        width:150,
                        key: 'success_rate'
                    },
                    {
                        title: '上报比例（%）',
                        key: 'report_rate'
                    },
                    {
                        title: '采集记录',
                        key: 'sbbl',
                        render:(h,params)=>{
                            return h('span',{
                                    on:{
                                        click:()=>{
                                            this.gotoCaiji()
                                        }
                                    },
                                    attrs:{
                                        class:'iconfont icon-zhuzhuangtutubiao'
                                    },
	                                style:{
                                        color:'#0089f0',
		                                cursor:'pointer'
	                                }
	                            }
                                ,'')
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
                                        color:'#4fa8f9 ',
                                        cursor:'pointer'
                                    },
                                    on: {
                                        click: () => {

                                            this.gotoTerminalData(params.row.clientid,params.row.id);
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
		        applyData:[],
		        billData:[],
		        terminalListData:[]
	        }
		},
        computed:{
            cus_id:function () {
                return this.$store.getters.cus_id
            },
            cus_name:function(){
               return this.$store.getters.cus_name
            }
        },
        watch:{
            cus_id:function () {
                this.clientBasicInfor();
                this.clinentContractInfor();
                this.clientElecBill();
                this.clientDeclareRecord();
                this.clientTerminalList();
            }
        },
		methods:{
            gotoTerminalData(clientId,index){
                this.$router.push({path:'client-terminal',query:{clientId:clientId,clientIndex:index}})
            },
            gotoCaiji(){
                this.$router.push('caiji-detail')
            },
            //用户基本信息
            clientBasicInfor(){
            	this.$http.post(this.$api.CLIENT_BASIC_INFO,{cus_id:this.cus_id}).then(res=>{
            		console.log('用户基本信息',res);
            		this.userDetail = res.data.data
            	},err=>{
            	this.$api.errcallback(err);
            	}).catch(err=>{
            		this.$api.errcallback(err);
            	})
            },
            //合同基本情况
            clinentContractInfor(){
            	this.$http.post(this.$api.CLIENT_CONTRACT_INFO,{cus_id:this.cus_id}).then(res=>{
            		console.log("合同基本情况",res);
                    var data = res.data.data;
                     this.agreementDetail = {
                          htbm:data.con_no,
                          hhgs:data.user_nums,
                          mydl:data.ly_used,
                          htms:data.way
                     }

            	},err=>{
            		this.$api.errcallback(err);
            	}).catch(err=>{
            		this.$api.errcallback(err);
            	})
            },
            //用户电费单
            clientElecBill(){
            	this.$http.post(this.$api.CLIENT_ELE_BILL,{cus_id:this.cus_id}).then(res=>{
            	     console.log('用户电费单',res);
            	     let data = res.data[0].data;
            	     this.billData = data
            	},err=>{
            		this.$api.errcallback(err);
            	}).catch(err=>{
            		this.$api.errcallback(err);
            	})
            },
            //用户申报记录
            clientDeclareRecord(){
            	this.$http.post(this.$api.CLIENT_DECLARE_RECORD,{cus_id:this.cus_id}).then(res=>{
            		console.log('用户申报记录',res);
            		this.applyData = res.data[0].data
            	},err=>{
            		this.$api.errcallback(err);
            	}).catch(err=>{
            		this.$api.errcallback(err);
            	})
            },
            //用户终端列表
            clientTerminalList(){
            	this.$http.post(this.$api.CLIENT_TERMINAL_LIST,{cus_id:this.cus_id}).then(res=>{
                    console.log('用户终端列表',res);
                    this.terminalListData = res.data[0].data;
            	},err=>{
            		this.$api.errcallback(err);
            	}).catch(err=>{
            		this.$api.errcallback(err);
            	})
            },
			deleteTerminal(){
                this.$http.delete(this.$api.CLIENT_TERMINAL_DELETE+this.deleteTerminalId).then(res=>{
					console.log('删除终端',res);
					this.clientTerminalList();
                },err=>{
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.$api.errcallback(err);
                })
			}
		},
		mounted(){
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
								<td><span>所属行业 :</span> {{userDetail.industry}}</td>
								<td><span>售电起止时间 :</span> {{userDetail.exec_time}}</td>
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
					<span slot="extra" class="detail-btn"  @click="$router.push({path:'/hetong',query:{cus_name:cus_name,cus_id:cus_id}})">详情</span>

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
				v-model="billModal">
			<div>
				<Carousel v-model="carousel" loop>
					<CarouselItem>
						<div class="demo-carousel">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio expedita labore molestias mollitia nam officiis vero! Accusamus consectetur deserunt dolorum enim et fugit illo nam repudiandae, saepe unde ut voluptate?</div>
					</CarouselItem>
					<CarouselItem>
						<div class="demo-carousel">2</div>
					</CarouselItem>
					<CarouselItem>
						<div class="demo-carousel">3</div>
					</CarouselItem>
					<CarouselItem>
						<div class="demo-carousel">4</div>
					</CarouselItem>
				</Carousel>
			</div>
		</Modal>
	</div>
</template>
<style scoped>
	.detail-btn{
		color: #0089F0;
		cursor: pointer;
	}
	.user-detail table td span,
	.agreement-detail table td span:not(.danwei1){
		color: #999999;
	}


	.btn-group{
		margin-top: -9px;
	}
	.demo-carousel{
		width: 1000px;
		height: 600px;
		background-color: red;
	}
</style>