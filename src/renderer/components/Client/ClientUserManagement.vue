<script>
    import myFenye from '@/components/Tool/myFenye'

    export default {
        name: 'usermanager',
        data() {
            return {
                nowId:'',
                checkModal:false,
	            deleteModal:false,
                column1: [
                    {
                        title: '登录ID',
                        sortable: true,
                        key: 'id'
                    },
                    {
                        title: '申请时间',
                        sortable: true,

                        key: 'created_at'
                    },
                    {
                        title: '手机号码',
                        sortable: true,

                        key: 'username'
                    }, {
                        title: '绑定微信',
                        sortable: true,

                        key: 'weixin'
                    }, {
                        title: '上次登录时间',
                        sortable: true,

                        key: 'last_logintime'
                    }, {
                        title: '用户密码',
                        sortable: true,

                        key: 'password',
                    }, {
                        title: '审核状态',
                        sortable: true,
                        key: 'status',
                        render: (h, params) => {
                            if (params.row.status === 0) {
                                return h('span', {}, '未审核')
                            } else {
                                return h('span', {}, '已审核')
                            }
                        }
                    }, {
                        title: '操作',
                        key: 'cz',
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
                                                this.checkModal = true;
                                                this.nowId = params.row.id
                                            }
                                        }
                                    }, '未审核'),
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
                            } else {
                                return h('div', [
                                    h('span', {

                                        style: {
                                            marginRight: '5px',
                                            color: '#999 ',
                                        },
                                    }, '审核'),
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
                tableData: []
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
                this.$http.post(this.$api.CLIENT_MANAGE, {cus_id: this.cus_id}).then(res => {
                    console.log("用户管理", res);
                    this.tableData = res.data.data;
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            userCheck() {
                this.$http.put(this.$api.CLIENT_CHECK+this.nowId).then(res => {
                    console.log("审核用户信息", res);
	                this.userManage();
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            userDelete() {
                this.$http.delete(this.$api.CLIENT_DELECT_USER +this.nowId).then(res => {
                    console.log("删除成功", res);
                    this.userManage();
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            }

        },
        mounted() {
            this.userManage();
        }
    }
</script>
<template>
	<div class="client-container">
		<Card>
			<h3 slot="title">用户管理</h3>
			<div class="table-container">
				<Table :columns="column1" :data="tableData"></Table>
				<myFenye></myFenye>
			</div>
		</Card>
		<Modal
				v-model="checkModal"
				@on-ok="userCheck"
				@on-cancel="cancel">
			<p>确定要将该用户列为已审核？</p>
		</Modal>
		<Modal
				v-model="deleteModal"
				@on-ok="userDelete"
				@on-cancel="cancel">
			<p>确定要将该用户删除？</p>
		</Modal>
	</div>
</template>
<style scoped>
	.table-container {
		height: 780px;
	}
</style>