<script>
    import MyTab from '@/components/Tool/MyTab'
    import mySearch from '@/components/Tool/mySearch'
    import Panel from "../Tool/Panel.vue";

    export default {
        name: 'clientlist',
        components: {
            Panel,
            'my-tab': MyTab,
            'my-search': mySearch
        },
        data() {
            return {
                button1: '全部客户',
                spinShow: false,
                reqType: '',
                currentCity: 'all',
                currentPage: 1,
                totalPage: 0,
                pageLimit: 18,
                month:new Date().Format('yyyy-MM'),
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
                cusList: {
                    tableData: [],
                    pageData: {
                        total: 100,
                        current: 2
                    }
                },
                columns4: [
                    {
                        sortable: true,
                        title: '客户名称',
                        key: 'name',
                        width: '260',
                        render: (h, params) => {
                            return h('div', [
                                h('span', {

                                    style: {
                                        color: '#4fa8f9 ',
                                        cursor: 'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            this.gotoClientPage('client-detail', params);
                                        }
                                    }
                                }, params.row.name)
                            ])
                        }
                    },
                    {
                        title: '监控&分析',
                        key: 'jiankong',
                        render: (h, params) => {
                            return h('div', [
                                h('span', {
                                    attrs: {
                                        class: 'fa fa-chart-pie',
                                        title: '总览'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        cursor: 'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            this.gotoClientPage('client-zonglan', params)
                                        }
                                    }
                                }, ''),
                                h('span', {
                                    attrs: {
                                        class: 'fas fa-chart-line',
                                        title: '指数'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        cursor: 'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            this.gotoClientPage('client-compare', params)
                                        }
                                    }
                                }, ''),
                                h('span', {
                                    attrs: {
                                        class: 'fas fa-chart-bar',
                                        title: '偏差'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        cursor: 'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            this.gotoClientPage('client-piancha', params)
                                        }
                                    }
                                }, ''),
                            ])

                        }
                    },
                    {
                        title: '已购电量(预测)',
                        key: 'pur_total',
                        render:(h,params)=>{
                            if(params.row.pur_total&&params.row.pur_total != 0){
                               return h('span',{},params.row.pur_total);
                            }else{
                               return  h('span',{},'-');
                            }
                        }
                    },
                    {
                        title: '使用电量(电费单)',
                        key: 'actual_used',
                        render:(h,params)=>{
                            if(params.row.actual_used&&params.row.actual_used != 0){
                               return h('span',{},params.row.actual_used);
                            }else{
                               return  h('span',{},'-');
                            }
                        }
                    },
                    {
                        title: '监控电量',
                        key: 'monitor',
                        render:(h,params)=>{
                            if(params.row.monitor&&params.row.monitor != 0){
                               return h('span',{},params.row.monitor);
                            }else{
                               return  h('span',{},'-');
                            }
                        }
                    },
                    {
                        title: '申报电量',
                        key: 'decl_total',
                        render:(h,params)=>{
                            if(params.row.decl_total&&params.row.decl_total != 0){
                               return h('span',{},params.row.decl_total);
                            }else{
                               return h('span',{},'-');
                            }
                        }
                    },
                   
                ],
                keyword:'',
                dimList:[],
                companyshow:false,
            }
        },
        mounted() {
            this.clientList();
        },
        computed: {
            searchKey() {
                return this.$store.getters.searchKey
            },
            companbol:function(){
               return this.$store.getters.companbol
            }
        },
        watch: {},
        methods: {
            //月份选择
            mouthSUB(){
                let years = this.month.substr(0, 4)      
                let mouths = this.month.substr(5, 2)
                // console.log('月份减少', years,mouths )
                mouths = mouths - 1
                if(mouths <= 0 ){
                    mouths = 12
                    years = years - 1
                }else {
                    console.log('正常')
                }
                this.month = years + '-' + (mouths < 10 ? '0' + mouths : mouths);
                this.clientList()
            },
            mouthAdd(){
                // console.log('月份增加',this.month)
                let years = this.month.substr(0, 4)      
                let mouths = this.month.substr(5, 2)
                mouths = mouths - 0 + 1
                if(mouths >= 12 ){
                    mouths = 1
                    years = years - 0  + 1
                }else {
                    console.log('正常')
                }
                this.month = years + '-' + (mouths < 10 ? '0' + mouths : mouths);
                this.clientList()
            },
            setcusList(res) {
                this.$store.dispatch('setcusList', res)
            },
            gotoClientPage(page, params) {
                this.$store.dispatch('setCusId', params.row.id);
                this.$store.dispatch('setCusName', params.row.name);
                this.$router.push({
	                name:page
                });
            },
            gotoAddUser() {
                this.$router.push({path:'/AddClient',query:{userDetail:{active:'新增'}}});
            },
            changeSelect(city) {
                this.spinShow = true;
                this.currentPage = 1;
                this.currentCity = city;
                this.reqType = 2;
                if (this.currentCity === 'all') {
                    this.clientList();
                } else {
                    this.$http.post(this.$api.CLIENT_LIST, {
                        com_id: this.$store.getters.com_id,
                        type: this.reqType,
                        area: this.currentCity,
                        page: this.currentPage,
                        limit: this.pageLimit
                    }).then(res => {
                        this.spinShow = false;
                        console.log('客户列表区域选择', res);
                        let data = res.data[0].data;
                        this.totalPage = res.data[0].total;
                        this.currentPage = res.data[0].current_page;
                        this.cusList.tableData = data;
                        this.setcusList(data);
                    }, err => {
                        this.spinShow = false;
                        this.cusList.tableData = [];
                        this.$api.errcallback(err);
                    }).catch(err => {
                        this.spinShow = false;
                        this.cusList.tableData = [];
                        this.$api.errcallback(err);
                    })
                }


            },
            clientList() {
                this.spinShow = true;
                // this.currentCity ='all';
                this.$http.post(this.$api.CLIENT_MATRIX, {
                    com_id: this.$store.getters.com_id,
                    page: this.currentPage,
                    month:this.month,
                    limit: this.pageLimit
                }).then(res => {
                    this.spinShow = false;
                    console.log('数据矩阵默认列表', res);
                    if(res.data.status === '1'){
                         let data = res.data.data;
                         this.totalPage = data.total;
                         this.currentPage = data.current_page;
                         this.cusList.tableData = data.data;
                         this.setcusList(data.data);
                    }else{
                        this.cusList.tableData = [];
                    }
                }, err => {
                    this.spinShow = false;
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.spinShow = false;

                    this.$api.errcallback(err);
                })
            },
            comSearch() {
                if(this.button1 === '全部客户'){
                    this.$store.dispatch('setCompanbol',false);
                    this.spinShow = true;
                    this.$http.post(this.$api.CLIENT_MATRIX, {
                    com_id: this.$store.getters.com_id,
                    keyword: this.$store.getters.searchKey,
                    month:this.month,
                }).then(res => {
                    this.spinShow = false;
                    console.log('客户列表搜索', res);
                    if(res.data.status === '1'){
                         let data = res.data.data;
                         this.totalPage = data.total;
                         this.currentPage = data.current_page;
                         this.cusList.tableData = data.data;
                        this.setcusList(data.data);
                    }
                   
                }, err => {
                    this.cusList.tableData = [];
                    this.spinShow = false;
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.cusList.tableData = [];
                    this.spinShow = false;
                    this.$api.errcallback(err);
                })
                }else{
                    this.$store.dispatch('setCompanbol',false);
                    this.spinShow = true;
                    this.$http.post(this.$api.CLIENT_MATRIX, {
                        com_id: this.$store.getters.com_id,
                        keyword: this.$store.getters.searchKey,
                        month:this.month,
                        uid:this.$store.getters.uid
                }).then(res => {
                    this.spinShow = false;
                    console.log('客户列表搜索', res);
                    if(res.data.status === '1'){
                         let data = res.data.data;
                         this.totalPage = data.total;
                         this.currentPage = data.current_page;
                         this.cusList.tableData = data.data;
                        this.setcusList(data.data);
                    }
                   
                }, err => {
                    this.cusList.tableData = [];
                    this.spinShow = false;
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.cusList.tableData = [];
                    this.spinShow = false;
                    this.$api.errcallback(err);
                })
                }
                
            },
            dimSearchs(){
                if(this.button1 === '全部客户'){
                      this.$store.dispatch('setCompanbol',true);
				      this.companyshow = true;
				    if (this.timer) {
					     clearTimeout(this.timer);
				    }
				    if (this.$store.getters.searchKey.length < 1) {
					     return
				    }
                     this.timer = setTimeout(() => this.$http.post(this.$api.CLIENT_MATRIX,{
                        com_id:this.$store.getters.com_id,
                        keyword:this.$store.getters.searchKey,
                        month:this.month,
                     }).then(res=>{
                           console.log('模糊搜索',res);
                        if(res.data.status ==='1'){
                              this.dimList = res.data.data.data;
                              this.companyshow = false;
                          }
                    },err=>{
                        this.dimSearch = [];
                        this.companyshow = false;
                        this.$api.errcallback(err);
                     }).catch(err=>{
                        this.dimSearch = [];
                        this.companyshow = false;
                        this.$api.errcallback(err);
                     }),500)
                }else{
                     this.$store.dispatch('setCompanbol',true);
				      this.companyshow = true;
				    if (this.timer) {
					     clearTimeout(this.timer);
				    }
				    if (this.$store.getters.searchKey.length < 1) {
					     return
				    }
                     this.timer = setTimeout(() => this.$http.post(this.$api.CLIENT_MATRIX,{
                        com_id:this.$store.getters.com_id,
                        keyword:this.$store.getters.searchKey,
                        month:this.month,
                        uid:this.$store.getters.uid
                     }).then(res=>{
                           console.log('模糊搜索',res);
                        if(res.data.status ==='1'){
                              this.dimList = res.data.data.data;
                              this.companyshow = false;
                          }
                    },err=>{
                        this.dimSearch = [];
                        this.companyshow = false;
                        this.$api.errcallback(err);
                     }).catch(err=>{
                        this.dimSearch = [];
                        this.companyshow = false;
                        this.$api.errcallback(err);
                     }),500)

                }
              
            },
            chooseclient(item){
                let arr =[];
                arr.push(item);
                this.cusList.tableData = arr;
                this.$store.dispatch('setCompanbol',false);
                this.currentPage = 1;
                this.totalPage = 1;
            },
            pageChange(page) {
                this.spinShow = true;
                this.$http.post(this.$api.CLIENT_MATRIX, {
                    com_id: this.$store.getters.com_id,
                    month:this.month,
                    keyword: this.$store.getters.searchKey,
                    page: page,
                    limit: this.pageLimit
                }).then(res => {
                    this.spinShow = false;
                    console.log('数据矩阵分页', res);
                    if(res.data.status==='1'){
                          let data = res.data.data;
                          this.totalPage =data.total;
                          this.currentPage = data.current_page;
                          this.cusList.tableData = data.data;
                          this.setcusList(data.data);
                    }else{

                    }
                   
                }, err => {
                    this.cusList.tableData = [];
                    this.spinShow = false;
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.cusList.tableData = [];
                    this.spinShow = false;
                    this.$api.errcallback(err);
                });
                console.log(page)
            },
            changetype(){
                if(this.button1 === '全部客户'){
                    this.clientList();
                }else{
                     this.spinShow = true;
                // this.currentCity ='all';
                this.$http.post(this.$api.CLIENT_MATRIX, {
                    com_id: this.$store.getters.com_id,
                    page: this.currentPage,
                    month:this.month,
                    limit: this.pageLimit,
                    uid:this.$store.getters.uid,
                }).then(res => {
                    this.spinShow = false;
                    console.log('数据矩阵默认列表', res);
                    if(res.data.status === '1'){
                         let data = res.data.data;
                         this.totalPage = data.total;
                         this.currentPage = data.current_page;
                         this.cusList.tableData = data.data;
                         this.setcusList(data.data);
                    }else{
                        this.cusList.tableData = [];
                    }
                }, err => {
                    this.spinShow = false;
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.spinShow = false;

                    this.$api.errcallback(err);
                })
                }
            }
        },

    }
</script>
<template>
	<Row class="main-container">
		<Card>
			<div style="height: 886px;">
				<div class="header">
					<Row>
						<Col span="1">
						    <h3 class="title-lv2">数据矩阵</h3>
						</Col>                        
						<!-- TODO 各地区客户个数待添加-->
						<!-- <Col span="23">                        
                            <div class="tab-container">
                                <my-tab v-on:changeSelect="changeSelect('all')"
                                        v-bind:type="currentCity === 'all'?'disabled':'normal'">全部
                                </my-tab>
                                <template v-for="(city,key) in cityList">
                                    <my-tab
                                            v-on:changeSelect="changeSelect(city.name)"
                                            v-bind:type="currentCity === city.name?'disabled':'normal'"
                                    >{{city.name}}
                                    </my-tab>
                                </template>
                            </div>
						</Col> -->
					</Row>
				</div>
				<div class="table-container relative">
					<Row className="mgt_15">
						<Col span="24">
						<Row>
							<Col :lg="{span:5}" :md="{span:6}" class='relative'>
							    <my-search style="text-align: left" placeholder="客户编号或客户名称"
                                       v-on:doSearch="comSearch" v-on:dimSearch='dimSearchs'></my-search>
                                    <!-- <div class="searchBox flex-row" v-on:keyup.enter="doSearch">
                                        <i class="iconfont icon-search" ></i>
                                        <Input v-model="keyword" placeholder="客户编号或客户名称" v-on:on-keyup='dimSearch' v-on:on-keyup.enter='dimList'>  
                                        </Input>
                                        <Button type="primary" @click="comSearch">搜索</Button>                                        
                                        </div> -->
                                <div class="absolute list" v-if='companbol'>
                                    <ul>
                                        <li v-for='item in dimList' @click="chooseclient(item)">{{item.name}}</li>
                                    </ul>
                                    <Spin size="small" fix v-if="companyshow"></Spin>
                                 </div>                                 
							</Col>
							<RadioGroup v-model="button1" type="button" class="mgl_15" v-on:on-change='changetype'>
                                <Radio label="全部客户"></Radio>
                                <Radio label="我的客户"></Radio>
                            </RadioGroup>
							<Button type="primary" class="refresh absolute" style="right: 0;" @click="clientList">
								<i class="fas fa-cogs"></i>
							</Button>
                            <Button type="primary" class="refresh absolute" style="right: 42px;" @click="clientList">
								<i class="fas fa-sync"></i>
							</Button>
                            <div class="absolute" style="right: 84px;top: 0">
                                <ButtonGroup>
                                    <Button icon="ios-skipbackward" @click="mouthSUB()"></Button>
                                    <Button>{{month}}</Button>
                                    <Button icon="ios-skipforward" @click="mouthAdd()"></Button>
                                </ButtonGroup>
                            </div>
						</Row>
						</Col>
					</Row>
					<Row className="mgt_15">
						<Table size="small" :columns="columns4" :data="cusList.tableData"></Table>
						<Spin size="large" fix v-if="spinShow"></Spin>
					</Row>
				</div>
			</div>
		</Card>
		<div class="page-container">
			<Page
					:total="totalPage"
					:current="currentPage"
					:page-size="pageLimit"
					show-total
					show-elevator
					v-on:on-change="pageChange"
			></Page>
		</div>
	</Row>
</template>
<style scoped>

	.header {
		border-bottom: 1px solid #eeeeee;
		padding-bottom: 10px;
	}

	.tab-container {
		display: inline-block;
		vertical-align: middle;
		margin-top: -15px;

		overflow: hidden;
	}

	.tab-container > span {
		margin: 10px 0 10px 9px;
	}

	.table-container {

	}
    .searchBox {
    width: 340px;
    margin-right: 0;
    position: relative;
}

.searchBox i {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 6px;
    left: 10px;
    z-index: 11;
}

	.title-lv2 {
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
    .list{
        top:32px;
        left:0;
        width:285px;
        border: 1px solid #ccc;
        background-color: #fff;
        min-height: 25px;
        max-height:200px;
        overflow: scroll;
        z-index: 22;
    }
    .list li{
        white-space: nowrap;
        font-size: 12px;
        padding:0 10px;
        height:25px;
        line-height: 25px;
        cursor: pointer;
    }
    .list li:hover{
        background-color: #E0EBF7;
		color: #108CEE;
    }
    .list::-webkit-scrollbar {
		width: 0;
		/*滚动条宽度（右侧滚动条）*/
		height: 7px;
		/*滚动条高度（底部滚动条）*/
		background-color: #eeeeee;
		z-index: 999;
	}

	.list::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
		border-radius: 10px;
		background-color: #F5F5F5;
		z-index: 999;
	}

	.list::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .2);
		background-color: #ccc;
		z-index: 999;
	}
    @media (min-width: 1365px) and (max-width: 1919px) {
        .tab-container{
             margin-left:15px;
        }
        .add_User{
             margin-left:80px !important;
             margin-top:1px;
        }
        .mgl_15{
            margin-left:15px;
        }
    }
</style>