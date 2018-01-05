<script>
    export default {
        name: 'agreementmanage',
        data() {
            return {
                single: false,
                modal1: false,
                column1: [
                    {
                        title: '营销用户编号',
                        key: 'user_no',
                        align: 'center'
                    },

                    {
                        title: '用户电压等级',
                        key: 'vol_level',
                        align: 'center'
                    },
                    {
                        title: '报装容量',
                        key: 'packing_capacity',
                        align: 'center'
                    },
                    {
                        title: '用户类型',
                        key: 'unit_type',
                        align: 'center',
                        width:160,
                    },
                    {
                        title: '用户单元类型',
                        key: 'category',
                        align: 'center',
                        width:160,
                    },
                    {
                        title: '用户地址',
                        key: 'address',
                        width: '320',
                        align: 'center'
                    }
                ],
                agreementList: [{
                    cus_name: this.$store.getters.cus_name,
                    con_no: '暂无数据',
                    way: '暂无数据',
                    ly_used: '0',
                    ly_maxload: '0',
                    bndyjdl: '0',
                    bndyjzdfh: '0',
                    usernos: []
                }
                ],
                pageTotal: 0,
                limit: 16,
                currentPage: 1,
                loading: true
            }
        },
        methods: {
            showModal() {
                this.modal1 = true
            },
            userAgreement() {
                this.$http.post(this.$api.POWER_SALE_LIST, {
                    cus_id: this.cus_id,
                    page: this.currentPage,
                    limit: this.limit
                }).then(res => {
                    console.log("合同管理", res);
                    if (res.data.status === '1') {
                        if (res.data.data.data.length > 0) {
                            this.agreementList = res.data.data.data;
                            this.pageTotal = res.data.data.total;
                            this.loading = false;
                        } else {
                            this.loading = false;
                        }

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
            pageChange(value) {
                this.$http.post(this.$api.CLIENT_CONTRACT_AGREEMENT, {
                    cus_id: this.cus_id,
                    page: value,
                    limit: this.limit
                }).then(res => {
                    console.log('合同管理分页', res);
                    if (res.data.status==='1') {
                        this.agreementList = res.data.data.data;
                        this.pageTotal = res.data.data.total;
                        this.currentPage = res.data.data.current_page;
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
            ok(index) {
                console.log(index);
                this.$http.post(this.$api.POWER_SALE_DEL, {id: this.agreementList[index].id}).then(res => {
                    console.log('售电合同删除ok', res);
                    if (res.data.status === '1') {
                        this.agreementList.splice(index, 1);
                    }
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            cancel() {
                this.$Message.info('点击了取消');
            },
            toAddHetong() {
                this.$router.push({path: '/add-hetong', query: {cus_name: this.cus_name}})
            }
        },
        computed: {
            cus_id: function () {
                return this.$store.getters.cus_id
            },
            cus_name: function () {
                return this.$store.getters.cus_name;
            }
        },
        watch: {
            cus_id: function () {
                this.userAgreement();
            },
            cus_name: function () {

            }
        },
        components: {},
        mounted() {
            this.userAgreement();
        }
    }
</script>
<template>
	<div class="client-container relative">
		<Card class="ht-container">
			<h3 slot="title">合同管理</h3>
			<div class="btn-group" slot="extra">
				<Button type="primary" style="top: -8px;" @click='toAddHetong()'>
					<Icon type="plus"></Icon>
					添加合同
				</Button>
			</div>
			<div class="ht-list relative" v-for='(item,index) in agreementList'>
				<ul class="hetongNav">
					<li>{{item.cus_name}}</li>
					<li>合同编号：{{item.con_no}}</li>
					<li>合同方式：{{item.way}}</li>
					<li>上年用电量：{{item.ly_used}} MWh</li>
					<li>上年最大负荷：{{item.ly_maxload}} MWh</li>
					<li>本年度预计电量：{{item.bndyjdl}} MWh</li>
					<li>本年度预计最大负荷：{{item.bndyjzdfh}} MWh</li>
					<li class="change">
						<router-link
								:to="{path:'/add-hetong',query:{id:item.id,cus_name:item.cus_name,con_no:item.con_no,way:item.way,way_param:item.way_param,deadline:item.deadline,ly_used:item.ly_used,ly_maxload:item.ly_maxload,bndyjdl:item.bndyjdl,bndyjzdfh:item.bndyjzdfh,usernos:item.usernos,user_nums:item.user_nums}}"
								tag="span" style="cursor: pointer; ">修改
						</router-link>
						<span>
                                <!-- 气泡提示模板 -->
                                <Poptip
		                                placement="left-end"
		                                confirm
		                                title="您确认删除这条内容吗？"
		                                @on-ok="ok(index)"
		                                @on-cancel="cancel">
                                    <span>删除</span>
                                </Poptip>
                            </span>
					</li>
				</ul>
				<div class="htData">
					<div class="saleSee">
						<i class="iconfont icon-jishiben01"></i>
					</div>
					<Table border size='small' :columns="column1" :data="item.usernos" style='margin-left: 10%'></Table>
				</div>
				<Spin fix v-if='loading'></Spin>
			</div>
			<div class="page-center">
				<!--分页-->
				<div class="fenYe">
					<Page :total="pageTotal" :page-size='limit' :current='currentPage' show-total show-elevator
					      v-on:on-change='pageChange'></Page>
					<Button type="primary">确定</Button>
				</div>
			</div>
		</Card>
	</div>
</template>
<style scoped>

	.ht-container {
		height: 856px;
	}

	.ht-list {
		/*border:1px solid #ccc;*/

	}

	.ht-content {

	}

	.saleSee {
		width: 50px;
		height: 50px;
		padding-top: 50px;
		position: absolute;
		top: 50%;
		left: 3%;
		margin-top: -25px;
	}

	.saleSee i {
		position: absolute;
		top: 7px;
		left: 13px;
		font-size: 30px;
		color: #ccc;
	}

	.relative .page-center {
		text-align: center;
		position: absolute;
		bottom: 0px;
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

	.ivu-table-wrapper {
		height: 100%;
		border-top: none;
	}

	.htData {
		position: relative;
		border: 1px solid #e9eaec;
	}

	.hetongNav {
		height: 50px;
		background-color: #f8f8f9;
		padding-left: 15px;
		position: relative;
		/*margin-bottom: 15px;*/
		font-size: 14px;
		font-weight: 400;
		border: 1px solid #eeeeee;
		border-bottom: none;
	}

	.hetongNav li {
		float: left;
		line-height: 50px;
		padding-right: 30px;
	}

	.hetongNav .change {
		position: absolute;
		right: 30px;
		top: 0;
		color: #108CEE;
		cursor: pointer;
	}
    @media (max-width: 1366px) {
    .hetongNav .change {
        position: absolute;
        right: 5px;
        top: 0;
        color: #108CEE;
        cursor: pointer;
    }
    .hetongNav li {
        float: left;
        line-height: 50px;
        padding-right: 12px;
    }
    .hetongNav{
        font-size: 12px;
    }
    }
</style>