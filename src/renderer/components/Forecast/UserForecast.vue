<script>
    import myFenye from '@/components/Tool/myFenye'
    import mySearch from '@/components/Tool/mySearch'

    export default {
        name: 'UserForecast',
        data() {
            return {
                spinShow: false,
                currentPage: 1,
                limit: 16,
                totalPage: 0,
                detailModal: false,
                delModal: false,
                confirmModal: false,
                delId: '',
                detailModalName: '',
                confirmIdList: [],
                selectMonth: new Date().Format('yyyy-MM'),
                selectArea: '',
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '企业名称',
                        key: 'name',
                        width: 260,
                        align: 'left'
                    },
                    {
                        title: '上月申报电量(万KW-h)',
                        key: 'sysb',
                        width: 180,
                        align: 'center',
                        render:(h,params)=>{
                            if(params.row.sysb && params.row.sysb != 0){
                                return h('span',{},params.row.sysb)
                            }else{
                                return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '上月用电量(万KW-h)',
                        key: 'syydl',
                        width: 150,
                        align: 'center',
                        render:(h,params)=>{
                            if(params.row.syydl && params.row.syydl != 0){
                                return h('span',{},params.row.syydl)
                            }else{
                                return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '预测电量(万kW-h)',
                        key: 'ycdl',
                        width: 150,
                        align: 'center',
                        render:(h,params)=>{
                            if(params.row.ycdl && params.row.ycdl != 0){
                                return h('span',{},params.row.ycdl)
                            }else{
                                return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '申报电量(万kW-h)',
                        key: 'sbdl',
                        width: 150,
                        align: 'center',
                        render:(h,params)=>{
                            if(params.row.sbdl && params.row.sbdl != 0){
                                return h('span',{},params.row.sbdl)
                            }else{
                                return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '购电量(万kW-h)',
                        key: 'gdl',
                        align: 'center',
                        width: 150,
                        render:(h,params)=>{
                            if(params.row.gdl && params.row.gdl != 0){
                                return h('span',{},params.row.gdl)
                            }else{
                                return h('span',{},'-')
                            }
                        }
                    }, {
                        title: '申报时间',
                        key: 'created_at',
                        align: 'center',
                        width: 170,
                        render:(h,params)=>{
                            if(params.row.created_at){
                                return h('span',{},params.row.created_at)
                            }else{
                                return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '申报状态',
                        key: 'dstatus',
                        align: 'center',
                        width: 100,
                        render: (h, params) => {
                            let text = '未申报';
                            if (params.row.dstatus === '0') {
                                text = '未申报'
                            } else if (params.row.dstatus === '1') {
                                text = '已申报'
                            }
                            return h('div', [
                                h('span', {
                                    style: {
                                        marginRight: '5px',
                                        cursor: 'default'
                                    },
                                    on: {
                                        click: () => {
                                        }
                                    }
                                }, text)
                            ])
                        }
                    },
                    {
                        title: '审核状态',
                        key: 'status',
                        align: 'center',
                        width: 100,
                        render: (h, params) => {
                            let text = '未审核';
                            if (params.row.status === 0) {
                                text = '未审核'
                            } else if (params.row.status === 1) {
                                text = '已审核'
                            }
                            return h('div', [
                                h('span', {
                                    style: {
                                        marginRight: '5px',
                                        cursor: 'default'
                                    },
                                    on: {
                                        click: () => {
                                        }
                                    }
                                }, text)
                            ])
                        }
                    },
                    {
                        title: '操作',
                        key: 'n11',
                        align: 'center',
                        width: 100,
                        render: (h, params) => {
                            return h('div', [
                                h('span', {
                                    style: {
                                        marginRight: '5px',
                                        color: '#36c ',
                                        cursor: 'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            this.detailModal = true;
                                            this.detailModalName = params.row.name;
                                            this.renderM(params.row.id)
                                        }
                                    }
                                }, '查看'),
                                h('span', {
                                    style: {
                                        marginRight: '5px',
                                        color: '#36c ',
                                        cursor: 'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            this.delId = params.row.id;
                                            this.delModal = true;
                                        }
                                    }
                                }, '删除')
                            ])
                        }
                    }
                ],
                columns5: [
                    {
                        title: '申报时间',
                        width: 160,
                        key: 'updated_at',
                        render:(h,params)=>{
                            if(params.row.updated_at){
                                return h('span',{},params.row.updated_at)
                            }else{
                                return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '申报人',
                        key: 'confirmor',
                        render:(h,params)=>{
                            if(params.row.confirmor){
                                return h('span',{},params.row.confirmor)
                            }else{
                                return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '申报电量合计',
                        width: 110,
                        key: 'sbdl',
                        render:(h,params)=>{
                            if(params.row.sbdl && params.row.sbdl !=0){
                                return h('span',{},params.row.sbdl)
                            }else{
                                return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '详情',
                        width: 160,
                        key: 'sbdlinfo',
                        render:(h,params)=>{
                            if(params.row.sbdlinfo){
                                return h('span',{},params.row.sbdlinfo)
                            }else{
                                return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '备注',
                        key: 'remarks',
                        render:(h,params)=>{
                            if(params.row.remarks){
                                return h('span',{},params.row.remarks)
                            }else{
                                return h('span',{},'-')
                            }
                        }
                    }
                ],
                tableData1: [],
                tableData2: [],
                loading: false,
                declareList:[],
                markbol:false
            }
        },
        computed:{
            companbol:function(){
               return this.$store.getters.companbol
            }
        },
        methods: {
            renderM(index) {
                this.loading = true;
                this.$http.post(this.$api.DECLARE_DETAIL, {
                    id: index
                }).then(res => {
                    console.log("用户申报详情", res);
                    if (res.data.status === '1') {
                        let data;
                        data = res.data.citys;

                        for(let i of data){
                            i.sbdlinfo = JSON.stringify(i.sbdlinfo).replace(/[\{\}]/g,'').replace(/user_no/g, " 户号：").replace(/elec/g, " - ").replace(/"|\[|\]|\,/g, '').replace(/:/g, '')
                        }
                        console.log(data,2222222222222222)
                        this.tableData2 = data
                    } else {
                        this.tableData2 = [];
                    }
                    this.loading = false;
                }, err => {
                    this.tableData2 = [];
                    this.loading = false;
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.tableData2 = [];
                    this.loading = false;
                    this.$api.errcallback(err);
                })
            },
            confirmShenbao() {
                this.$http.post(this.$api.DECLARE_CONFIRM, {
                    id: this.confirmIdList
                }).then(res => {
                    console.log("用户申报确认", res);
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            deleteShenbao() {
                this.$http.post(this.$api.DECLARE_DELETE, {
                    id: this.delId
                }).then(res => {
                    console.log("用户申报删除", res);
                    this.userShenBao();
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            userShenBao() {
                this.spinShow = true;
                this.$http.post(this.$api.USER_DECLARE, {
                    com_id: this.$store.getters.com_id,
                    time: this.selectMonth,
                    page: this.currentPage,
                    limit: this.limit,
                    area: this.selectArea,
                    keyword: this.$store.getters.searchKey
                }).then(res => {
                    console.log("用户申报", res);
                    if (res.data.status === '1') {
                        var data = res.data.data.data;
                        var obj = {};
                        var arr = [];
                        for (let i = 0; i < data.length; i++) {
                            if (data[i].declarepower instanceof Object) {
                                obj = {
                                    cus_id: data[i].id,
                                    name: data[i].name,
                                    sysb: data[i].sysb,
                                    ycdl: data[i].ycdl,
                                    syydl: data[i].syydl,
                                    gdl: data[i].gdl,
                                    created_at: data[i].declarepower.created_at,
                                    sbdl: data[i].declarepower.sbdl,
                                    dstatus: data[i].declarepower.dstatus,
                                    status: data[i].declarepower.status,
                                    confirmor: data[i].declarepower.confirmor,
                                    id: data[i].declarepower.id
                                }
                                arr.push(obj);
                            }else{
                                obj = {
                                    cus_id: data[i].id,
                                    name: data[i].name,
                                    sysb: data[i].sysb,
                                    ycdl: data[i].ycdl,
                                    syydl: data[i].syydl,
                                    gdl: data[i].gdl,
                                    created_at: data[i].declarepower.created_at,
                                    sbdl: data[i].declarepower.sbdl,
                                    dstatus: data[i].declarepower.dstatus,
                                    status: data[i].declarepower.status,
                                    confirmor: data[i].declarepower.confirmor,
                                    id: data[i].declarepower.id
                                }
                                arr.push(obj);
                            }

                        }
                        this.tableData1 = arr;
                        this.totalPage = arr.length;
                        this.currentPage = res.data.data.current_page;
                        console.log(this.tableData1);
                    }
                    this.spinShow = false;
                }, err => {
                    this.spinShow = false;
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            monthSelect(month) {
                this.selectMonth = month;
                console.log(this.selectMonth);
                this.userShenBao()
            },
            areaSelect(area) {
                this.selectArea = area[1].name.replace(/市/, '');
                console.log(this.selectArea);

                this.userShenBao()
            },
            pageChange(page) {
                this.currentPage = page;
                this.userShenBao();
            },
            userDim(){
                this.markbol = true;
                this.$store.dispatch('setCompanbol',true);
				if (this.timer) {
					clearTimeout(this.timer);
				}
				if (this.$store.getters.searchKey.length < 1) {
					return
				}
                this.timer = setTimeout(() => this.$http.post(this.$api.USER_DECLARE,{
                    com_id: this.$store.getters.com_id,
                    time: this.selectMonth,
                    area: this.selectArea,
                    keyword: this.$store.getters.searchKey
                }).then(res=>{
                      console.log("用户模糊搜索",res);
                      if (res.data.status === '1') {
                        var data = res.data.data.data;
                        var obj = {};
                        var arr = [];
                        for (let i = 0; i < data.length; i++) {
                            if (data[i].declarepower instanceof Object) {
                                obj = {
                                    cus_id: data[i].id,
                                    name: data[i].name,
                                    sysb: data[i].sysb,
                                    ycdl: data[i].ycdl,
                                    syydl: data[i].syydl,
                                    gdl: data[i].gdl,
                                    created_at: data[i].declarepower.created_at,
                                    sbdl: data[i].declarepower.sbdl,
                                    dstatus: data[i].declarepower.dstatus,
                                    status: data[i].declarepower.status,
                                    confirmor: data[i].declarepower.confirmor,
                                    id: data[i].declarepower.id
                                }
                                arr.push(obj);
                            }

                        }
                        this.declareList = arr;
                    }
                    this.markbol = false;
                },err=>{
                    this.markbol = false;
                    this.declareList=[];
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.markbol = false;
                    this.declareList =[];
                    this.$api.errcallback(err);
                }), 1000)
            },
            chooseuser(item){
                let arr =[];
                arr.push(item);
                this.tableData1 = arr;
                this.$store.dispatch('setCompanbol',false);
                this.currentPage = 1;
                this.totalPage = 1;
            }
        },
        mounted() {
            this.userShenBao();
        },
        components: {
            'myFenye': myFenye,
            'mySearch': mySearch
        },
    }
</script>

<template>
	<div class="main-container">
		<Card>
			<h3 slot="title">用户申报</h3>
			<div class="layout-content">
				<Row class="layout-content-top">
					<Row gutter="10">
						<Col span="2">
						<DatePicker type="month" placeholder="请选择月份" @on-change="monthSelect"></DatePicker>
						</Col>
						<Col span="4">
						<al-selector level=1   @on-change="areaSelect"/>
						</Col>
						<Col span="6" class="relative">

                        <mySearch placeholder="请输入公司名称或关键字" swidth="340" v-on:doSearch="userShenBao" v-on:dimSearch='userDim'></mySearch>
                        <div class="absolute userlist" v-if='companbol'>
                            <ul>
                                <li v-for='item in declareList' @click='chooseuser(item)'>{{item.name}}</li>
                            </ul>
                            <Spin size="small" fix v-if="markbol"></Spin>
                        </div>
						</Col>

					</Row>
				</Row>
				<Row class="layout-content-main">
					<Table ref="selection" :columns="columns4" :data="tableData1" size="small"></Table>
					<Spin size="large" fix v-if="spinShow"></Spin>
				</Row>
				<div class="page-container">
					<Page
							:total="totalPage"
							:current="currentPage"
							show-total
							show-elevator
							:page-size='limit'
							v-on:on-change="pageChange"
					></Page>
				</div>
			</div>
		</Card>
		<Modal
				:title="detailModalName+'电量申报详情'"
				v-model="detailModal"
				width='666'
				:mask-closable="false"
				class-name="vertical-center-modal">
			申报记录 :
			<Table ref="selection" :columns="columns5" :data="tableData2" :loading='loading' height='400' size="small"></Table>
		</Modal>
		<Modal
				v-model="delModal"
				title="删除提醒"
                class-name="vertical-center-modal"
				@on-ok="deleteShenbao">
			<p>确认删除该条记录？</p>
		</Modal>
	</div>
</template>

<style scoped>
	.layout-content {
		overflow: hidden;
		background: #fff;
		height: 841px;
	}

	.layout-content-top {
		margin-bottom: 15px;
	}
    .layout-content-main table{
        width: 100%;
    }
    .userlist{
        top:32px;
        left:5px;
        width:282px;
        border: 1px solid #ccc;
        background-color: #fff;
        min-height: 25px;
        max-height:200px;
        overflow: scroll;
        z-index: 22;
    }
    .userlist li{
        white-space: nowrap;
        font-size: 12px;
        padding:0 10px;
        height:25px;
        line-height: 25px;
        cursor: pointer;
    }
    .userlist li:hover{
        background-color: #E0EBF7;
		color: #108CEE;
    }
    .userlist::-webkit-scrollbar {
		width: 0;
		/*滚动条宽度（右侧滚动条）*/
		height: 7px;
		/*滚动条高度（底部滚动条）*/
		background-color: #eeeeee;
		z-index: 999;
	}

	.userlist::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
		border-radius: 10px;
		background-color: #F5F5F5;
		z-index: 999;
	}

	.userlist::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .2);
		background-color: #ccc;
		z-index: 999;
	}
</style>
