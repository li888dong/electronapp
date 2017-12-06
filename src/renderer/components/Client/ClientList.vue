<script>
	import MyTab from '@/components/Tool/MyTab'
    import mySearch from '@/components/Tool/mySearch'
    import Panel from "../Tool/Panel.vue";
    export default {
        name:'clientlist',
        components:{
            Panel,
            'my-tab':MyTab,
	        'my-search':mySearch
        },
        data(){
            return{
	            showAllCity:false,
                columns4: [
                    {
                        sortable: true,
                        title: '客户名称',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('span', {

                                    style: {
                                        color:'#4fa8f9 ',
                                        cursor:'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            this.gotoZonglan();
                                            this.$store.dispatch('setCusId',params.row.id);
                                        }
                                    }
                                }, params.row.name)
                            ])
                        }
                    },
                    {
                        sortable: true,
                        title: '实际用电量',
                        key: 'shiji'
                    },
                    {
                        sortable: true,
                        title: '申报电量',
                        key: 'shenbao'
                    },
                    {
                        sortable: true,
                        title: '申报偏差',
                        key: 'shenbaopiancha'
                    },
                    {
                        sortable: true,
                        title: '购电量',
                        key: 'goudianliang'
                    },
                    {
                        sortable: true,
                        title: '购电偏差',
                        key: 'goudianpiancha'
                    },
                    {
                        sortable: true,
                        title: '预测电量',
                        key: 'yucedianliang'
                    },
                    {
                        sortable: true,
                        title: '预测偏差',
                        key: 'yucepiancha'
                    },
                    {
                        sortable: true,
                        title: '最低功率因数',
                        key: 'gonglv'
                    },
                    {
                        title: '总览',
                        key: 'zonglan',
                        width:60,
                        render:(h,params)=>{
                            return h('span', {
                                attrs:{
                                    class:'iconfont icon-zhuzhuangtutubiao'
                                },
                                style: {
                                    marginRight: '5px',
                                    cursor:'pointer'
                                },
                                on: {
                                    click: () => {
                                        this.gotoZonglan()
                                    }
                                }
                            }, '')

                        }
                    },
                    {
                        title: '指数',
                        width:60,
                        key: 'zhishu',
                        render:(h,params)=>{
                            return h('span', {
                                attrs:{
                                    class:'iconfont icon-zhishufenxiyanpan'
                                },
                                style: {
                                    marginRight: '5px',
                                    cursor:'pointer',
                                },
                                on: {
                                    click: () => {
                                        console.log(params.index)

                                        this.gotoZhishu()
                                    }
                                }
                            }, '')

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
                                            console.log(params.index)

                                            this.gotoHetong()
                                        }
                                    }
                                }, '合同'),
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
                                }, '用户')
                            ])
                        }
                    }
                ],
            }
        },
	    mounted(){
			this.reqData();
            this.clientList();
	    },
	    computed:{
            cityList() {
                return this.$store.getters.cityList
            },
		    cusList(){
                return this.$store.getters.cusList
		    },
		    currentCity(){
                return this.$store.getters.currentCity
		    },
		    searchKey(){
		        return this.$store.getters.searchKey
		    }
	    },
	    watch:{

	    },
        methods:{
			reqData(){
			    this.setCityList();
			},
			gotoZonglan(){
			    this.$router.push('/client-zonglan');
			},
			gotoZhishu(){
			    this.$router.push('/client-compare');
			},
			gotoDetail(){
			    this.$router.push('/client-detail');
			},
			gotoHetong(){
			    this.$router.push('/hetong');
			},
			gotoYonghu(){
			    this.$router.push('/user-manager');
			},
            gotoAddUser(){
                this.$router.push('/AddClient');
            },
	        pageChange(page){
                this.$store.dispatch('setTablePage',page);
	        },
            changeSelect(city){
                this.$store.dispatch('setCurrentCity',city);

                if (this.currentCity ==='all'){
	                this.clientList();
	            }else {
                    this.$http.post(this.$api.CLIENT_LIST,{
                        com_id:this.$store.getters.com_id,
                        type:2,
                        area:this.currentCity
                    }).then(res=>{
                        console.log('客户列表区域选择',res);
                        this.setcusList(res.data[0]);
                    },err=>{
                        this.$api.errcallback(err);
                    }).catch(err=>{
                        this.$api.errcallback(err);
                    })
	            }


            },
	        setcusList(res){
                this.$store.dispatch('setcusList',res)
	        },
	        setCityList(){
                this.$store.dispatch('setCityList','zz')
	        },
            clientList(){
                this.$http.post(this.$api.CLIENT_LIST,{
                    com_id:this.$store.getters.com_id
                }).then(res=>{
                    console.log('客户列表默认',res);
                    this.setcusList(res.data[0]);

                },err=>{
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.$api.errcallback(err);
                })
            },
	        comSearch(){
                this.$http.post(this.$api.CLIENT_LIST,{
                    com_id:this.$store.getters.com_id,
                    type:1,
                    keyword:this.$store.getters.searchKey
                }).then(res=>{
                    console.log('客户列表搜索',res);
                    this.setcusList(res.data[0]);
                },err=>{
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.$api.errcallback(err);
                })
	        }
        },

    }
</script>
<template>
	<Row class="main-container">
		<Card>
			<div class="flex-col" style="height: 862px;">
				<div class="header">
					<Row>
						<Col span="1">
						<h3 class="title-lv2">客户列表</h3>

						</Col>
						<Col span="23">
						<div class="tab-container" :class="showAllCity?'h_100':'h_40'">

							<my-tab v-on:changeSelect="changeSelect('all')" v-bind:type="currentCity === 'all'?'disabled':'normal'">全部 <span>(12332)</span></my-tab>
							<template v-for="(city,key) in cityList">
								<my-tab
										v-on:changeSelect="changeSelect(city.name)"
										v-bind:type="currentCity === city.name?'disabled':'normal'"
								>{{city.name}} <span>({{city.count}})</span></my-tab>
							</template>
						</div>
						</Col>


					</Row>
				</div>
				<div class="table-container">
					<Row className="mgt_15">
						<Col span="24">
							<Row>
								<Col span="5" >
								<my-search style="text-align: left" placeholder="客户编号或客户名称" v-on:doSearch="comSearch"></my-search>
								</Col>

								<Button type="primary" @click="gotoAddUser" style="margin-left: 10px;">+新增用户</Button>

								<Button type="primary" class="refresh" style="margin-left: 1147px;" @click="clientList">

									<i class="iconfont icon-shuaxin"></i>
								</Button>
							</Row>
						</Col>
					</Row>
					<Row className="mgt_15">

						<Table :columns="columns4" :data="cusList.tableData"></Table>
					</Row>

					<div class="page-container">
						<Page
							:total="cusList.pageData.total"
							:current="cusList.pageData.current"
							show-total
							show-elevator
							v-on:on-change="pageChange"
						></Page>
					</div>
				</div>
			</div>
		</Card>
	</Row>
</template>
<style scoped>

	.header{
		border-bottom: 1px solid #eeeeee;
		padding-bottom: 10px;
	}
	.tab-container{
		display: inline-block;
		vertical-align: middle;
		margin-top: -15px;

		overflow: hidden;
	}

	.tab-container>span{
		margin:10px 0 10px 9px;
	}
	.table-container{
		flex: 1;
	}
	.h_40{
		height: 40px;
	}
	.h_100{
		height: 100px;
	}
	.title-lv2{
		display: inline-block;
		height: 20px;
		line-height: 20px;
		font-size: 16px;
		color: #1c2438;
		font-weight: 700;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>