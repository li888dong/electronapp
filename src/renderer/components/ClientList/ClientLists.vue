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
                delId: '',
                uid: '',
                delModal: false,
                button1: '全部客户',
                spinShow: false,
                reqType: '',
                currentCity: 'all',
                currentPage: 1,
                totalPage: 0,
                pageLimit: 18,
                // cityList: {
                //     zz: {
                //         name: '郑州',
                //         count: '11'
                //     },
                //     kf: {
                //         name: '开封',
                //         count: '22'
                //     },
                //     ly: {
                //         name: '洛阳',
                //         count: '33'
                //     },
                //     ny: {
                //         name: '南阳',
                //         count: '44'
                //     },
                //     lh: {
                //         name: '漯河',
                //         count: '55'
                //     },
                //     xc: {
                //         name: '许昌',
                //         count: '11'
                //     },
                //     smx: {
                //         name: '三门峡',
                //         count: '22'
                //     },
                //     pds: {
                //         name: '平顶山',
                //         count: '33'
                //     },
                //     zk: {
                //         name: '周口',
                //         count: '44'
                //     },
                //     zmd: {
                //         name: '驻马店',
                //         count: '55'
                //     },
                //     xx: {
                //         name: '新乡',
                //         count: '6'
                //     },
                //     hb: {
                //         name: '鹤壁',
                //         count: '11'
                //     },
                //     jz: {
                //         name: '焦作',
                //         count: '22'
                //     },
                //     py: {
                //         name: '濮阳',
                //         count: '33'
                //     },
                //     ay: {
                //         name: '安阳',
                //         count: '44'
                //     },
                //     sq: {
                //         name: '商丘',
                //         count: '55'
                //     },
                //     xy: {
                //         name: '信阳',
                //         count: '66'
                //     },
                //     jy: {
                //         name: '济源',
                //         count: '11'
                //     }
                // },
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
                                            this.goClientInfo('client-detail', params);
                                        }
                                    }
                                }, params.row.name)
                            ])
                        }
                    },
                    {
                        title: '区域',
                        key: 'city',
                        // filters: [
                        //     {
                        //         label: '郑州',
                        //         value: '郑州'
                        //     },
                        //     {
                        //         label: '许昌',
                        //         value: '许昌'
                        //     },
                        //     {
                        //         label: '焦作',
                        //         value: '焦作'
                        //     }
                        // ],
                        // filterMethod (value, row) {
                        //     return row.address.indexOf(value) > -1;
                        // }
                    },
                    {
                        title: '是否准入',
                        key: 'is_admittance',
                        filters: [
                            {
                                label: '已准入',
                                value: '已准入'
                            },
                            {
                                label: '未准入',
                                value: '未准入'
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if(value == '已准入'){
                                return row.is_admittance == '已准入'
                            }
                            if(value == '未准入'){
                                return row.is_admittance == '未准入'
                            }
                        }
                    },
                    {
                        title: '绑定状态',
                        key: 'bdstatus',
                        filters: [
                            {
                                label: '未绑定',
                                value: '未绑定'
                            },
                            {
                                label: '已绑定',
                                value: '已绑定'
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if(value == '未绑定'){
                                return row.bdstatus == '未绑定'
                            }
                            if(value == '已绑定'){
                                return row.bdstatus == '已绑定'
                            }
                        }
                    },
                    {
                        title: '合同状态',
                        key: 'contract',
                        filters: [
                            {
                                label: '已签订',
                                value: '已签订'
                            },
                            {
                                label: '未签订',
                                value: '未签订'
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if(value == '已签订'){
                                return row.contract != '未签订'
                            }
                            if(value == '未签订'){
                                return row.contract == '未签订'
                            }
                        }
                    },
                    {
                        title: '交易资格状态',
                        key: 'qualification',
                        filters: [
                            {
                                label: '未获取',
                                value: '未获取'
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if(value == '未获取'){
                                if(row.qualification){
                                    return row.qualification
                                }else{
                                    console.log('没有符合条件的')
                                }
                                
                            }
                        }
                    },
                    {
                        title: '户号',
                        key: 'usernos',
                        render:(h,params)=>{
                            if(params.row.usernos && params.row.usernos !=0){
                                 return h('span',{},params.row.usernos)
                            }else{
                                 return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '终端',
                        key: 'devices',
                        render:(h,params)=>{
                            if(params.row.devices && params.row.devices !=0){
                                 return h('span',{},params.row.devices)
                            }else{
                                 return h('span',{},'-')
                            }
                        }
                    },
                    {
                        sortable: true,
                        title: '负责人',
                        key: 'fullname'
                    },
                    {
                        sortable: true,
                        title: '信息完整度',
                        key: 'integrity',
                        render: (h,params) => {
                            return h('div',params.row.integrity + '%')
                        }
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 160,
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
                                            console.log('合同', params)
                                            this.$store.dispatch('setCusId', params.row.id);
                                            this.$store.dispatch('setCusName', params.row.name);
                                            if(params.row.contract == '未签订'){
                                                this.$router.push({path:'/add-hetong',query:{cus_name:params.row.name,active:'添加'}});
                                            }else{
                                                
                                                this.$router.push({path:'/client-detail',query:{target:'contract'}});
                                            }
                                            
                                        }
                                    }                                    
                                }, '合同'),
                                h('span', {
                                    style: {
                                        marginRight: '5px',
                                        color: '#4fa8f9 ',
                                        cursor: 'pointer'                                       
                                    },                                    
                                    on: {
                                        click: () => {
                                            console.log('用户', params)
                                            this.goClientInfo('user-manager', params)
                                        }
                                    }                                    
                                }, '用户'),
                                h('span', {
                                    style: {
                                        marginRight: '5px',
                                        color: '#4fa8f9 ',
                                        cursor: 'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            this.gotoClientPage('AddClient', params)
                                        }
                                    }
                                }, '修改'),
                                h('span', {
                                    style: {
                                        marginRight: '5px',
                                        color: '#4fa8f9 ',
                                        cursor: 'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            this.delModal = true;
                                            this.delId = params.row.id;
                                            // this.gotoClientPage('agreement', params)
                                        }
                                    }
                                }, '删除')
                                // h('Icon', {
                                //     style: {
                                //         marginLeft: '-4px',
                                //         color: '#4fa8f9 ',
                                //         cursor: 'pointer'
                                //     },
                                //     props: {
                                //         type: 'arrow-down-b'
                                //     }
                                // }),
                            ])
                        }
                    }
                ],
                keyword:'',
                dimList:[],
                companyshow:false,
            }
        },
        created () {
            this.uid = localStorage.getItem('uid');
            console.log(this)
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
            //删除客户
            delClient() {
                this.$http.delete(this.$api.CLIENT_DELECT+ this.delId).then(res => {
                    console.log("客户删除", res);
                    if(res.data.status == 1){
                        console.log("客户删除成功", res);
                        this.$Message.success('客户删除成功');
                        this.isAll()
                    }else{
                        console.log("客户删除失败", res);
                        this.$Message.error('客户删除失败');
                    }
                    // this.userShenBao();
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            setcusList(res) {
                this.$store.dispatch('setcusList', res)
            },
            //跳转客户信息操作页
            goClientInfo(page, params){
                this.$store.dispatch('setCusId', params.row.id);
                this.$store.dispatch('setCusName', params.row.name);
                this.$router.push({
	                name:page,
                    query:{userDetail:{active:'修改'}}
                });
            },
            gotoClientPage(page, params) {
                // console.log(page,params,222222222222222222222222)
                this.$router.push({path:'/AddClient',query:{userDetail:{active:'修改',id: params.row.id}}});
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
                        if(res.data.status == 1){
                            // res.data[0]
                            console.log('客户列表成功获取数据', res.data[0].data);
                            res.data[0].data.map(function(i){
                                // console.log(i.is_admittance)
                                if(i.is_admittance == 0){
                                    i.is_admittance = '未准入'
                                }else{
                                    i.is_admittance = '已准入'
                                }
                                if(i.bdstatus == 0){
                                    i.bdstatus = '未绑定'
                                }else{
                                    i.bdstatus = '已绑定'
                                }
                                if(i.contract == 0){
                                    i.contract = '未签订'
                                }else{
                                    console.log('已签订')
                                }
                            })

                            console.log('转换完成客户列表成功获取数据', res.data[0].data);
                        }
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
                this.button1 = '全部客户';
                this.reqType = 1;
                this.currentCity ='all';
                this.$http.post(this.$api.CLIENT_LIST, {
                    com_id: this.$store.getters.com_id,
                    type: this.reqType,
                    page: this.currentPage,
                    limit: this.pageLimit
                }).then(res => {
                    this.spinShow = false;
                    console.log('客户列表默认', res);
                    
                    // console.log('客户列表成功获取数据', res.data);
                    if(res.data.status == 1){
                        // res.data[0]
                        console.log('客户列表成功获取数据', res.data[0].data);
                        res.data[0].data.map(function(i){
                            // console.log(i.is_admittance)
                            if(i.is_admittance == 0){
                                i.is_admittance = '未准入'
                            }else{
                                i.is_admittance = '已准入'
                            }
                            if(i.bdstatus == 0){
                                i.bdstatus = '未绑定'
                            }else{
                                i.bdstatus = '已绑定'
                            }
                            if(i.contract == 0){
                                i.contract = '未签订'
                            }else{
                                console.log('已签订')
                            }
                        })

                        console.log('转换完成客户列表成功获取数据', res.data[0].data);
                    }
                    let data = res.data[0].data;
                    this.totalPage = res.data[0].total;
                    this.currentPage = res.data[0].current_page;
                    this.cusList.tableData = data;
                    this.setcusList(data);
                }, err => {
                    this.spinShow = false;
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.spinShow = false;
                    this.$api.errcallback(err);
                })
            },
            comSearch() {
                this.$store.dispatch('setCompanbol',false);
                this.spinShow = true;
                this.reqType = 1;
                if(this.button1 == '全部客户'){
                    this.$http.post(this.$api.CLIENT_LIST, {
                        com_id: this.$store.getters.com_id,
                        type: this.reqType,
                        keyword: this.$store.getters.searchKey,
                        page: this.currentPage,
                        limit: this.pageLimit,
                    }).then(res => {
                        this.spinShow = false;
                        console.log('客户列表搜索', res);
                        if(res.data.status == 1){
                            // res.data[0]
                            console.log('客户列表成功获取数据', res.data[0].data);
                            res.data[0].data.map(function(i){
                                // console.log(i.is_admittance)
                                if(i.is_admittance == 0){
                                    i.is_admittance = '未准入'
                                }else{
                                    i.is_admittance = '已准入'
                                }
                                if(i.bdstatus == 0){
                                    i.bdstatus = '未绑定'
                                }else{
                                    i.bdstatus = '已绑定'
                                }
                                if(i.contract == 0){
                                    i.contract = '未签订'
                                }else{
                                    console.log('已签订')
                                }
                            })

                            console.log('转换完成客户列表成功获取数据', res.data[0].data);
                        }
                        let data = res.data[0].data;
                        this.totalPage = res.data[0].total;
                        this.currentPage = res.data[0].current_page;
                        this.cusList.tableData = data;
                        this.setcusList(data);
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
                    this.$http.post(this.$api.CLIENT_LIST, {
                        com_id: this.$store.getters.com_id,
                        type: this.reqType,
                        keyword: this.$store.getters.searchKey,
                        page: this.currentPage,
                        limit: this.pageLimit,
                        uid: this.uid
                    }).then(res => {
                        this.spinShow = false;
                        console.log('客户列表搜索', res);
                        if(res.data.status == 1){
                            // res.data[0]
                            console.log('客户列表成功获取数据', res.data[0].data);
                            res.data[0].data.map(function(i){
                                // console.log(i.is_admittance)
                                if(i.is_admittance == 0){
                                    i.is_admittance = '未准入'
                                }else{
                                    i.is_admittance = '已准入'
                                }
                                if(i.bdstatus == 0){
                                    i.bdstatus = '未绑定'
                                }else{
                                    i.bdstatus = '已绑定'
                                }
                                if(i.contract == 0){
                                    i.contract = '未签订'
                                }else{
                                    console.log('已签订')
                                }
                            })

                            console.log('转换完成客户列表成功获取数据', res.data[0].data);
                        }
                        let data = res.data[0].data;
                        this.totalPage = res.data[0].total;
                        this.currentPage = res.data[0].current_page;
                        this.cusList.tableData = data;
                        this.setcusList(data);
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
                this.$store.dispatch('setCompanbol',true);
				this.companyshow = true;
				if (this.timer) {
					clearTimeout(this.timer);
				}
				if (this.$store.getters.searchKey.length < 1) {
					return
				}
                if(this.button1 == '全部客户'){
                    this.timer = setTimeout(() => this.$http.post(this.$api.CLIENT_LIST,{
                        com_id:this.$store.getters.com_id,
                        type:1,
                        keyword:this.$store.getters.searchKey,
                    }).then(res=>{
                        console.log('模糊搜索',res);
                        if(res.data.status == 1){
                            // res.data[0]
                            console.log('客户列表成功获取数据', res.data[0].data);
                            res.data[0].data.map(function(i){
                                // console.log(i.is_admittance)
                                if(i.is_admittance == 0){
                                    i.is_admittance = '未准入'
                                }else{
                                    i.is_admittance = '已准入'
                                }
                                if(i.bdstatus == 0){
                                    i.bdstatus = '未绑定'
                                }else{
                                    i.bdstatus = '已绑定'
                                }
                                if(i.contract == 0){
                                    i.contract = '未签订'
                                }else{
                                    console.log('已签订')
                                }
                            })

                            console.log('转换完成客户列表成功获取数据', res.data[0].data);
                        }
                        this.dimList = res.data[0].data;
                        this.companyshow = false;
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
                    this.timer = setTimeout(() => this.$http.post(this.$api.CLIENT_LIST,{
                        com_id:this.$store.getters.com_id,
                        type:1,
                        keyword:this.$store.getters.searchKey,
                        uid: this.uid
                    }).then(res=>{
                        console.log('模糊搜索',res);
                        if(res.data.status == 1){
                            // res.data[0]
                            console.log('客户列表成功获取数据', res.data[0].data);
                            res.data[0].data.map(function(i){
                                // console.log(i.is_admittance)
                                if(i.is_admittance == 0){
                                    i.is_admittance = '未准入'
                                }else{
                                    i.is_admittance = '已准入'
                                }
                                if(i.bdstatus == 0){
                                    i.bdstatus = '未绑定'
                                }else{
                                    i.bdstatus = '已绑定'
                                }
                                if(i.contract == 0){
                                    i.contract = '未签订'
                                }else{
                                    console.log('已签订')
                                }
                            })

                            console.log('转换完成客户列表成功获取数据', res.data[0].data);
                        }
                        this.dimList = res.data[0].data;
                        this.companyshow = false;
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
                if(this.button1 == '全部客户'){
                    this.$http.post(this.$api.CLIENT_LIST, {
                        com_id: this.$store.getters.com_id,
                        type: this.reqType,
                        area: this.currentCity,
                        keyword: this.$store.getters.searchKey,
                        page: page,
                        limit: this.pageLimit
                    }).then(res => {
                        this.spinShow = false;
                        console.log('客户列表分页', res);
                        if(res.data.status == 1){
                            // res.data[0]
                            console.log('客户列表成功获取数据', res.data[0].data);
                            res.data[0].data.map(function(i){
                                // console.log(i.is_admittance)
                                if(i.is_admittance == 0){
                                    i.is_admittance = '未准入'
                                }else{
                                    i.is_admittance = '已准入'
                                }
                                if(i.bdstatus == 0){
                                    i.bdstatus = '未绑定'
                                }else{
                                    i.bdstatus = '已绑定'
                                }
                                if(i.contract == 0){
                                    i.contract = '未签订'
                                }else{
                                    console.log('已签订')
                                }
                            })

                            console.log('转换完成客户列表成功获取数据', res.data[0].data);
                        }
                        let data = res.data[0].data;
                        this.totalPage = res.data[0].total;
                        this.currentPage = res.data[0].current_page;
                        this.cusList.tableData = data;
                        this.setcusList(data);
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
                    this.$http.post(this.$api.CLIENT_LIST, {
                        com_id: this.$store.getters.com_id,
                        type: this.reqType,
                        area: this.currentCity,
                        keyword: this.$store.getters.searchKey,
                        page: page,
                        limit: this.pageLimit,
                        uid: uid
                    }).then(res => {
                        this.spinShow = false;
                        console.log('客户列表分页', res);
                        if(res.data.status == 1){
                            // res.data[0]
                            console.log('客户列表成功获取数据', res.data[0].data);
                            res.data[0].data.map(function(i){
                                // console.log(i.is_admittance)
                                if(i.is_admittance == 0){
                                    i.is_admittance = '未准入'
                                }else{
                                    i.is_admittance = '已准入'
                                }
                                if(i.bdstatus == 0){
                                    i.bdstatus = '未绑定'
                                }else{
                                    i.bdstatus = '已绑定'
                                }
                                if(i.contract == 0){
                                    i.contract = '未签订'
                                }else{
                                    console.log('已签订')
                                }
                            })

                            console.log('转换完成客户列表成功获取数据', res.data[0].data);
                        }
                        let data = res.data[0].data;
                        this.totalPage = res.data[0].total;
                        this.currentPage = res.data[0].current_page;
                        this.cusList.tableData = data;
                        this.setcusList(data);
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
                
                console.log(page)
            },
            //获取个人客户
            getMyClient(){
                this.spinShow = true;
                this.reqType = 1;
                this.currentCity ='all';
                this.$http.post(this.$api.CLIENT_LIST, {
                    com_id: this.$store.getters.com_id,
                    type: this.reqType,
                    page: this.currentPage,
                    limit: this.pageLimit,
                    uid: this.uid
                }).then(res => {
                    this.spinShow = false;
                    console.log('个人客户列表默认', res);
                    
                    // console.log('客户列表成功获取数据', res.data);
                    if(res.data.status == 1){
                        // res.data[0]
                        console.log('客户列表成功获取数据', res.data[0].data);
                        res.data[0].data.map(function(i){
                            // console.log(i.is_admittance)
                            if(i.is_admittance == 0){
                                i.is_admittance = '未准入'
                            }else{
                                i.is_admittance = '已准入'
                            }
                            if(i.bdstatus == 0){
                                i.bdstatus = '未绑定'
                            }else{
                                i.bdstatus = '已绑定'
                            }
                            if(i.contract == 0){
                                i.contract = '未签订'
                            }else{
                                console.log('已签订')
                            }
                        })

                        console.log('转换完成客户列表成功获取数据', res.data[0].data);
                    }
                    let data = res.data[0].data;
                    this.totalPage = res.data[0].total;
                    this.currentPage = res.data[0].current_page;
                    this.cusList.tableData = data;
                    this.setcusList(data);
                }, err => {
                    this.spinShow = false;
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.spinShow = false;
                    this.$api.errcallback(err);
                })
            }, 
            //获取对应的客户列表
            isAll(){
                if(this.button1 == '全部客户'){
                    this.clientList()
                    // console.log('获取全部客户',this)
                }else{
                    // console.log('获取个人客户')
                    this.getMyClient()
                }
            },
        },

    }
</script>
<template>
	<Row class="main-container">
		<Card>

            <h3 slot="title">客户列表</h3>
				<!-- <div class="header">
					<Row>
						<Col span="1">
						<h3 class="title-lv2">客户列表</h3>
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
						</Col> 
					</Row>
				</div> -->
				<div class="layout-content relative">
					<Row className="">
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
                                <RadioGroup v-model="button1" type="button" @on-change='isAll' class='mgl_10'>
                                    <Radio label="全部客户"></Radio>
                                    <Radio label="我的客户"></Radio>
                                 </RadioGroup>
							<Button type="primary" class="refresh absolute" style="right: 0;">
								<i class="fas fa-cogs"></i>
							</Button>
                            <Button type="primary" class="refresh absolute" style="right: 42px;" @click="isAll">
								<i class="fas fa-sync"></i>
							</Button>
                            <Button type="primary" @click="gotoAddUser" style="right: 84px" class='add_User absolute'>+新增客户</Button>
					</Row>
					<Row className="mgt_15">
						<Table size="small" :columns="columns4" :data="cusList.tableData" no-data-text='-' no-filtered-data-text='暂无结果数据'></Table>
						<Spin size="large" fix v-if="spinShow"></Spin>
					</Row>
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
        <Modal
				v-model="delModal"
				title="删除提醒"
                class-name="vertical-center-modal"
				@on-ok="delClient">
			<p>确认删除该条记录？</p>
		</Modal>
	</Row>
</template>
<style scoped>
    .layout-content{
        height: 841px;
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
        .add_User{
             margin-left:80px !important;
             margin-top:1px;
        }
        .mgl_10{
            margin-left:15px;
        }
    }
</style>