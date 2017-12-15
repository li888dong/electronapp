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
                spinShow:false,
	            reqType:'',
                currentCity:'all',
	            currentPage:1,
	            totalPage:5,
	            pageLimit:14,
                cityList: {
                    zz: {
                        name: '郑州',
                        count: '11'
                    },
                    kf: {
                        name: '开封',
                        count: '22'
                    },
                    ly: {
                        name: '洛阳',
                        count: '33'
                    },
                    ny: {
                        name: '南阳',
                        count: '44'
                    },
                    lh: {
                        name: '漯河',
                        count: '55'
                    },
                    xc: {
                        name: '许昌',
                        count: '11'
                    },
                    smx: {
                        name: '三门峡',
                        count: '22'
                    },
                    pds: {
                        name: '平顶山',
                        count: '33'
                    },
                    zk: {
                        name: '周口',
                        count: '44'
                    },
                    zmd: {
                        name: '驻马店',
                        count: '55'
                    },
                    xx: {
                        name: '新乡',
                        count: '6'
                    },
                    hb: {
                        name: '鹤壁',
                        count: '11'
                    },
                    jz: {
                        name: '焦作',
                        count: '22'
                    },
                    py: {
                        name: '濮阳',
                        count: '33'
                    },
                    ay: {
                        name: '安阳',
                        count: '44'
                    },
                    sq: {
                        name: '商丘',
                        count: '55'
                    },
                    xy: {
                        name: '信阳',
                        count: '66'
                    },
                    jy: {
                        name: '济源',
                        count: '11'
                    }
                },
                cusList:{
                    tableData: [],
                    pageData:{
                        total:100,
                        current:2
                    }
                },
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
                                            this.gotoClientPage('client-zonglan',params);
                                        }
                                    }
                                }, params.row.name)
                            ])
                        }
                    },
                    {
                        sortable: true,
                        title: '实际用电量',
                        key: 'actual_used'
                    },
                    {
                        sortable: true,
                        title: '申报电量',
                        key: 'declare'
                    },
                    {
                        sortable: true,
                        title: '申报偏差',
                        key: 'dec_dev'
                    },
                    {
                        sortable: true,
                        title: '购电量',
                        key: 'purchase'
                    },
                    {
                        sortable: true,
                        title: '购电偏差',
                        key: 'pur_dev'
                    },
                    {
                        sortable: true,
                        title: '预测电量',
                        key: 'forecast'
                    },
                    {
                        sortable: true,
                        title: '预测偏差',
                        key: 'fore_dev'
                    },
                    {
                        sortable: true,
                        title: '最低功率因数',
                        key: 'power_factor'
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
                                        this.gotoClientPage('client-zonglan',params)
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
                                        this.gotoClientPage('client-compare',params);
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
                                            this.gotoClientPage('hetong',params)
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
                                            this.gotoClientPage('user-manager',params)
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
            this.clientList();
	    },
	    computed:{
		    searchKey(){
		        return this.$store.getters.searchKey
		    }
	    },
	    watch:{

	    },
        methods:{
            setcusList(res){
                this.$store.dispatch('setcusList',res)
            },
	        gotoClientPage(page,params){
                this.$store.dispatch('setCusId',params.row.id);
                this.$store.dispatch('setCusName',params.row.name);
                this.$router.push(page);
	        },
            gotoAddUser(){
                this.$router.push('/AddClient');
            },
            changeSelect(city){
                this.spinShow = true;
                this.currentCity = city;
                this.reqType = 2;
                if (this.currentCity ==='all'){
	                this.clientList();
	            }else {
                    this.$http.post(this.$api.CLIENT_LIST,{
                        com_id:this.$store.getters.com_id,
                        type:this.reqType,
                        area:this.currentCity,
                        page:this.currentPage,
                        limit:this.pageLimit
                    }).then(res=>{
                        this.spinShow = false;
                        console.log('客户列表区域选择',res);
                        let data = res.data[0].data;
                        this.totalPage = res.data[0].total;
                        this.currentPage = res.data[0].currentPage;
                        this.cusList.tableData = data;
                        this.setcusList(data);
                    },err=>{
                        this.spinShow = false;

                        this.$api.errcallback(err);
                    }).catch(err=>{
                        this.spinShow = false;
                        this.$api.errcallback(err);
                    })
	            }


            },
            clientList(){
	            this.spinShow = true;
	            this.reqType = 0;
                this.$http.post(this.$api.CLIENT_LIST,{
                    com_id:this.$store.getters.com_id,
                    type:this.reqType,
	                page:this.currentPage,
	                limit:this.pageLimit
                }).then(res=>{
                    this.spinShow =false;
                    console.log('客户列表默认',res);
                    let data = res.data[0].data;
                    this.totalPage = res.data[0].total;
                    this.currentPage = res.data[0].currentPage;
                    this.cusList.tableData = data;
                    this.setcusList(data);
                },err=>{
                    this.spinShow =false;
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.spinShow =false;

                    this.$api.errcallback(err);
                })
            },
	        comSearch(){
                this.spinShow = true;
                this.reqType = 1;
                this.$http.post(this.$api.CLIENT_LIST,{
                    com_id:this.$store.getters.com_id,
                    type:this.reqType,
                    keyword:this.$store.getters.searchKey,
                    page:this.currentPage,
                    limit:this.pageLimit
                }).then(res=>{
                    this.spinShow =false;
                    console.log('客户列表搜索',res);
                    let data = res.data[0].data;
                    this.totalPage = res.data[0].total;
                    this.currentPage = res.data[0].currentPage;
                    this.cusList.tableData = data;
                    this.setcusList(data);
                },err=>{
                    this.spinShow =false;
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.spinShow =false;
                    this.$api.errcallback(err);
                })
	        },
	        pageChange(page){
                this.spinShow = true;
                this.$http.post(this.$api.CLIENT_LIST,{
                    com_id:this.$store.getters.com_id,
                    type:this.reqType,
                    area:this.currentCity,
                    keyword:this.$store.getters.searchKey,
                    page:page,
                    limit:this.pageLimit
                }).then(res=>{
                    this.spinShow =false;
                    console.log('客户列表分页',res);
                    let data = res.data[0].data;
                    this.totalPage = res.data[0].total;
                    this.currentPage = res.data[0].currentPage;
                    this.cusList.tableData = data;
                    this.setcusList(data);
                },err=>{
                    this.spinShow =false;
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.spinShow =false;
                    this.$api.errcallback(err);
                });
	            console.log(page)
	        }
        },

    }
</script>
<template>
	<Row class="main-container">
		<Card>
			<div style="height: 862px;">
				<div class="header">
					<Row>
						<Col span="1">
						<h3 class="title-lv2">客户列表</h3>

						</Col>
						<Col span="23">
						<div class="tab-container">

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
						<Spin size="large" fix v-if="spinShow"></Spin>
					</Row>

					<div class="page-container">
						<Page
							:total="totalPage"
							:current="currentPage"
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