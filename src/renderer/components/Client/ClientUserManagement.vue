<script>
    import myFenye from '@/components/Tool/myFenye'

    export default {
        name: 'usermanager',
        data() {
            const telphone = (rule, val, callback) => {
                console.log(val);
                if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(val)) {
                    return callback(new Error("请输入正确的手机号！"));
                } else {
                    callback();
                }
            };
            return {
                nowId: '',
                checkModal: false,
                deleteModal: false,
                status: 0,
                column1: [
                    {
                        title: '手机号码',
                        sortable: true,
                        key: 'mobile'
                    }, {
                        title: '绑定微信',
                        sortable: true,
                        key: 'weixin'
                    }, {
                        title: '上次登录时间',
                        sortable: true,
                        key: 'last_logintime'
                    }, {
                        title: '审核状态',
                        sortable: true,
                        key: 'status',
                        render: (h, params) => {
                            if (params.row.status === '0') {
                                return h('span', {}, '已激活')
                            } else {
                                return h('span', {}, '未激活')
                            }
                        }
                    }, {
                        title: '操作',
                        key: 'cz',
                        render: (h, params) => {
                            if (params.row.status === '0') {
                                return h('div', [
                                    h('span', {

                                        style: {
                                            marginRight: '5px',
                                            color: '#999 ',
                                            cursor: 'pointer'
                                        },
                                        on: {
                                            click: () => {
                                                this.checkModal = true;
                                                this.nowId = params.row.id;
                                                this.status = 1;
                                            }
                                        }
                                    }, '禁用'),
                                    h('span', {
                                        style: {
                                            marginRight: '5px',
                                            color: '#4fa8f9 ',
                                            cursor: 'pointer'
                                        },
                                        on: {
                                            click: () => {
                                                this.deleteModal = true;
                                                this.nowId = params.row.id;
                                            }
                                        }
                                    }, '删除'),
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
                                                this.unModal = true;
                                                this.nowId = params.row.id;
                                                this.status = 0;
                                            }
                                        }
                                    }, '激活'),
                                    h('span', {
                                        style: {
                                            marginRight: '5px',
                                            color: '#4fa8f9 ',
                                            cursor: 'pointer'
                                        },
                                        on: {
                                            click: () => {
                                                this.deleteModal = true;
                                                this.nowId = params.row.id

                                            }
                                        }
                                    }, '删除'),
                                ])

                            }
                        }
                    },
                ],
                tableData: [],
                limit: 14,
                totalPage: 0,
                currentPage: 1,
                loading: false,
                addModal: false,
                unModal: false,
                formItem: {
                    fullname: '',
                    mobile: ''
                },
                ruleValidate: {
                    fullname: [{required: true, message: '内容不能为空', trigger: 'blur'}],
                    mobile: [{required: true, message: '内容不能为空', trigger: 'blur'}, {
                        type: 'string',
                        min: 11,
                        message: '手机号必须为11位！',
                        trigger: 'blur'
                    },
                        {validator: telphone, trigger: 'blur'}]
                }
            }
        },
        computed: {
            cus_id: function () {
                return this.$store.getters.cus_id
            }
        },
        watch: {
            cus_id: function () {
                this.userManage();
            }
        },
        components: {
            'myFenye': myFenye,
        },
        methods: {
            userManage() {
                this.loading = true;
                this.$http.post(this.$api.CLIENT_MANAGE, {
                    cus_id: this.$store.getters.cus_id,
                    page: this.currentPage,
                    limit: this.limit
                }).then(res => {
                    console.log("用户管理", res);
                    if (res.data.status === '1') {
                        this.tableData = res.data.data.data;
                        this.totalPage = res.data.data.total;
                        this.currentPage = res.data.data.current_page;
                        this.loading = false;
                    } else {
                        this.tableData = [];
                        this.totalPage = 0,
                            this.currentPage = 1,
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
            userCheck() {
                this.$http.post(this.$api.CLIENT_CHECK, {id: this.nowId, status: this.status}).then(res => {
                    console.log("审核用户信息", res);
                    this.userManage();
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            userDelete() {
                this.$http.delete(this.$api.CLIENT_DELECT_USER + this.nowId).then(res => {
                    console.log("删除成功", res);
                    this.userManage();
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            pageChange(value) {
                this.loading = true;
                this.$http.post(this.$api.CLIENT_MANAGE, {pid: 1, page: value, limit: this.limit}).then(res => {
                    console.log("用户管理", res);
                    if (res.data.status === '1') {
                        this.tableData = res.data.data.data;
                        this.totalPage = res.data.data.total;
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
            userAdd() {
                //手机号正则表达式
                var tel_reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
                if(!this.isEmpty(this.formItem) && tel_reg.test(this.formItem.mobile)){
                    this.$http.post(this.$api.CLIENT_ADD_USER, {
                    cus_id: this.$store.getters.cus_id,
                    fullname: this.formItem.fullname,
                    mobile: this.formItem.mobile
                }).then(res => {
                    console.log('添加新用户', res);
                    if(res.data.status === '1'){
                         this.userManage();
                         for(let k in this.formItem){
                             this.formItem[k] = '';
                         }
                         this.addModal = false;
                    }
                   
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
                }  
            },
            cancel(){
               for(let k in this.formItem){
                             this.formItem[k] = '';
                         }
                         this.addModal = false;
            },
             isEmpty(obj) {
                for (let key in obj) {
                    if (obj[key] !== "") {
                        return false
                    }
                }
                return true
            },
        },
        mounted() {
            this.userManage();
        }
    }
</script>
<template>
	<div class="client-container relative">
		<Card>
			<h3 slot="title">用户管理</h3>
			<div slot='extra' class="btn_group">
				<Button type="primary" @click='addModal=true'>新增用户</Button>
			</div>
			<div class="table-container">
				<Table :columns="column1" :data="tableData" :loading='loading'></Table>
			</div>
			<div class="page-center">
				<!--分页-->
				<div class="fenYe">
					<Page :total="totalPage" :current='currentPage' :page-size='limit' show-total show-elevator
					      v-on:on-change='pageChange'></Page><!--  <Button type="primary">确定</Button> -->
				</div>
			</div>
		</Card>
		<Modal
				v-model="unModal"
				@on-ok="userCheck"
				@on-cancel="unModal=false">
			<p>确定要将该用户激活？</p>
		</Modal>
		<Modal
				v-model="checkModal"
				@on-ok="userCheck"
				@on-cancel="checkModal=false">
			<p>确定要将该用户禁用？</p>
		</Modal>
		<Modal
				v-model="deleteModal"
				@on-ok="userDelete"
				@on-cancel="deleteModal=false">
			<p>确定要将该用户删除？</p>
		</Modal>
		<Modal
				v-model="addModal"
				class-name="vertical-center-modal"
				width='400'>
			<h3 slot='header'>新增用户</h3>
			<Form :model="formItem" :label-width="80" :rules="ruleValidate" ref="formItem">
				<FormItem label='姓名：' prop='fullname'>
					<Input class='width_200' v-model='formItem.fullname' placeholder='请输入姓名'></Input>
				</FormItem>
				<FormItem label='手机号：' prop='mobile'>
					<Input class='width_200' v-model='formItem.mobile' placeholder='请输入手机号'></Input>
				</FormItem>
			</Form>
             <div slot="footer">
             <Button type="default" @click='cancel'>取消</Button>
            <Button type="primary" @click='userAdd'>确定</Button>
        </div>
		</Modal>

	</div>
</template>
<style scoped>
	.table-container {
		height: 780px;
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

	/*.fenYe button{
	  top: -12px;
	  left: 12px;
	}*/
	.width_200 {
		width: 200px;
	}

	.btn_group {
		margin-top: -8px;
		z-index: 999;
	}
</style>