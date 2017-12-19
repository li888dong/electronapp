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
                tableData: [],
                limit:14,
                totalPage:0,
                currentPage:0,
                loading:false,
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
                this.$http.post(this.$api.CLIENT_MANAGE, {pid: 1,page:this.currentPage,limit:this.limit}).then(res => {
                    console.log("用户管理", res);
                    if(res.data.status){
                         this.tableData = res.data.data.data;
                         this.totalPage = res.data.data.total;
                         this.currentPage = res.data.data.current_page;
                         this.loading = false;
                    }else{
                        this.loading= false;
                    }
                }, err => {
                    this.loading= false;
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.loading= false;
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
            },
            pageChange(value){
                 this.loading = true;
                this.$http.post(this.$api.CLIENT_MANAGE, {pid: 1,page:value,limit:this.limit}).then(res => {
                    console.log("用户管理", res);
                    if(res.data.status){
                         this.tableData = res.data.data.data;
                         this.totalPage = res.data.data.total;
                         this.currentPage = res.data.data.current_page;
                         this.loading = false;
                    }else{
                        this.loading= false;
                    }
                }, err => {
                    this.loading= false;
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.loading= false;
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
	<div class="client-container relative">
		<Card>
			<h3 slot="title">用户管理</h3>
			<div class="table-container">
				<Table :columns="column1" :data="tableData" :loading ='loading'></Table>
				
			</div>
            <div class="page-center">
        <!--分页-->
        <div class="fenYe">
          <Page :total="totalPage" :current='currentPage' :page-size='limit' show-total show-elevator v-on:on-change='pageChange'></Page> <Button type="primary">确定</Button>
        </div>
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