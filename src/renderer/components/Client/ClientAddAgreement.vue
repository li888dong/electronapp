<script>
    import MyUpload from '../Tool/upLoad.vue'

    export default {
        components: {'my-upload': MyUpload},
        name: 'addAgreement',
        data() {
            const lengthNum = (rule, val, callback) => {
                if (val.length > 10 || val.length < 10) {
                    return callback(new Error("营销户号必须为10位!"));
                } else {
                    callback();
                }
            };
            return {
                cus_id: '',
                htfs: '',
                file: '',
                bol: false,
                defaultArea: false,
                addList: {
                    user_name: '',
                    con_no: '',
                    way: '',
                    ly_used: '',
                    ly_maxload: '',
                    bndyjdl: '',
                    bndyjzdfh: '',
                    htscdz: '',
                    deadline: '',
                    htid: '',
                },
                index: '',
                id: '',
                hint2: false,
                hint: false,
                isKong: false,
                htscdz: '',
                way_param: '',
                way_param1: '',
                way_param2: '',
                way_param3: '',
                way_param4: '',
                way_param5: '',
                way_param6: '',
                way_param7: '',
                way_param8: '',
                way_param9: '',
                way_param10: '',
                htfsList: [
                    {
                        value: '分成模式',
                        label: '分成模式',
                    }, {
                        value: '保底模式',
                        label: '保底模式',
                    }, {
                        value: '分成保底',
                        label: '分成保底',
                    }, {
                        value: '分成叠加',
                        label: '分成叠加',
                    }, {
                        value: '固定服务',
                        label: '固定服务',
                    }
                ],
                modal1: false,
                modal2: false,
                modal3: false,
                tip: '',
                user_nums: [],
                user_num: '',
                columns1: [
                    {
                        title: '营销用户编号',
                        key: 'user_id',
                        align: 'center',
                        width: '150'

                    }, {
                        title: '用户电压等级',
                        key: 'user_grade',
                        align: 'center',
                        width: '120'
                    },
                    {
                        title: '报装容量',
                        key: 'bzrl',
                        align: 'center',
                        width: '90'
                    }, {
                        title: '用电类别',
                        key: 'ydlb',
                        width: '150',
                        align: 'center'
                    }, {
                        title: '用电单位类型',
                        key: 'yddwlb',
                        width: '150',
                        align: 'center'
                    }, {
                        title: '用电地址',
                        align: 'center',
                        key: 'yddz'
                    }, {
                        title: '操作',
                        key: 'zc',
                        align: 'center',
                        render: (h, params) => {
                            console.log(params.row);
                            return h('div', [
                                h('span', {
                                    style: {
                                        color: '#3EC7F5',
                                        cursor: 'pointer',
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.modal3 = true;
                                            this.id = params.row.id;
                                            this.addTableList.user_id = params.row.user_id;
                                            this.addTableList.user_grade = params.row.user_grade;
                                            this.addTableList.bzrl = params.row.bzrl;
                                            this.addTableList.ydlb = params.row.ydlb;
                                            this.addTableList.yddwlb = params.row.yddwlb;
                                            var arr = params.row.yddz.split(" ");
                                            console.log(arr);
                                            this.addTableList.yddz = [arr[0], arr[1], arr[2]];
                                            this.addTableList.stree = arr[3];
                                        }
                                    }
                                }, '修改'),
                                h('span', {
                                    style: {
                                        color: '#3EC7F5',
                                        cursor: 'pointer',
                                    },
                                    on: {
                                        click: () => {
                                            this.deleteUserNum(params.row.id, params.index);
                                        }
                                    }
                                }, '删除')
                            ])
                        }
                    }
                ],
                data1: [],
                addTableList: {
                    user_id: '',
                    user_grade: '',
                    bzrl: '',
                    ydlb: '',
                    yddwlb: '',
                    yddz: [],
                    stree: '',
                },
                addValidate: {
                    user_name: [
                        {required: true, message: '内容不能为空', trigger: 'blur'}
                    ],
                    con_no: [
                        {required: true, message: '内容不能为空', trigger: 'blur'}
                    ],
                    ly_used: [
                        {required: true, message: '内容不能为空', trigger: 'blur'}
                    ],
                    ly_maxload: [
                        {required: true, message: '内容不能为空', trigger: 'blur'}
                    ],
                    bndyjdl: [
                        {required: true, message: '内容不能为空', trigger: 'blur'}
                    ],
                    bndyjzdfh: [
                        {required: true, message: '内容不能为空', trigger: 'blur'}
                    ]

                },
                defaultAddress: 'true',
                address1: '',
                address2: '',
                address3: '',
                way: '',
                modalValidator: {
                    user_id: [{required: true, message: '内容不能为空', trigger: 'blur'}, {
                        validator: lengthNum,
                        trigger: 'blur'
                    }],
                    user_grade: [{required: true, message: '内容不能为空', trigger: 'change'}],
                    bzrl: [{required: true, message: '内容不能为空', trigger: 'blur'}],
                    ydlb: [{required: true, message: '内容不能为空', trigger: 'change'}],
                    yddwlb: [{required: true, message: '内容不能为空', trigger: 'change'}],
                    stree: [{required: true, message: '内容不能为空', trigger: 'blur'}]
                }
            }
        },
        methods: {
            //文件上传
            uploadComplete(result) {
                console.log(result);
                this.addList.htid = result.fileid;
                this.addCompact();
                this.bol = false;
            },
            selectSuccess(file) {
                this.file = file;
            },
            addCompact() {
                if (this.$route.query.id) {
                    if (!this.isEmpty(this.addList)) {
                        if (this.way_param) {
                            if (this.user_nums.length > 0) {
                                this.addList.ly_used = parseFloat(this.addList.ly_used);
                                this.addList.ly_maxload = parseFloat(this.addList.ly_maxload);
                                this.addList.bndyjdl = parseFloat(this.addList.bndyjdl);
                                this.addList.bndyjzdfh = parseFloat(this.addList.bndyjzdfh);
                                this.$http.post(this.$api.POWER_ADD_COMPACT, {
                                    id: this.$route.query.id,
                                    cus_name: this.addList.user_name,
                                    con_no: this.addList.con_no,
                                    way: this.addList.way,
                                    way_param: this.way_param,
                                    ly_used: this.addList.ly_used,
                                    ly_maxload: this.addList.ly_maxload,
                                    bndyjdl: this.addList.bndyjdl,
                                    bndyjzdfh: this.addList.bndyjzdfh,
                                    htscdz: this.addList.htid,
                                    user_nums: this.user_nums.join(','),
                                    deadline: this.addList.deadline[0] + '/' + this.addList.deadline[1]

                                }).then(res => {
                                    console.log('修改成功', res);
                                    if (res.data.status==='1') {
                                        for (let key in this.addList) {
                                            this.addList[key] = '';
                                        }
                                        this.file = '';
                                        for (let key in this.data1) {
                                            this.data1 = ''
                                        }
                                        this.$router.push('/saleContract');
                                    }
                                }, err => {
                                    this.$api.errcallback(err);
                                }).catch(err => {
                                    this.$api.errcallback(err);
                                })
                            }
                        }
                    } else {
                        this.hint2 = true;
                    }
                } else {
                    if (!this.isEmpty(this.addList)) {
                        if (this.way_param) {
                            if (this.user_nums.length > 0) {
                                this.addList.ly_used = parseFloat(this.addList.ly_used);
                                this.addList.ly_maxload = parseFloat(this.addList.ly_maxload);
                                this.addList.bndyjdl = parseFloat(this.addList.bndyjdl);
                                this.addList.bndyjzdfh = parseFloat(this.addList.bndyjzdfh);
                                this.$http.post(this.$api.POWER_ADD_COMPACT, {
                                    cus_name: this.addList.user_name,
                                    con_no: this.addList.con_no,
                                    way: this.addList.way,
                                    way_param: this.way_param,
                                    ly_used: this.addList.ly_used,
                                    ly_maxload: this.addList.ly_maxload,
                                    bndyjdl: this.addList.bndyjdl,
                                    bndyjzdfh: this.addList.bndyjzdfh,
                                    htscdz: this.addList.htid,
                                    user_nums: this.user_nums.join(','),
                                    deadline: this.addList.deadline[0] + '/' + this.addList.deadline[1]

                                }).then(res => {
                                    console.log('添加合同', res);
                                    let msg = res.data.msg;
                                    if (msg === "添加成功!") {
                                        for (let key in this.addList) {
                                            this.addList[key] = '';
                                        }
                                        this.file = '';
                                        for (let key in this.data1) {
                                            this.data1 = ''
                                        }
                                        this.$router.push('/hetong');
                                    } else if (msg === '客户名称不存在!') {
                                        this.modal2 = true;
                                    }
                                }, err => {
                                    this.$api.errcallback(err);
                                }).catch(err => {
                                    this.$api.errcallback(err);
                                })
                            }
                        }
                    } else {
                        this.hint2 = true;
                    }
                }
            },
            changeStatus() {
                if (this.file && !this.isEmpty(this.addList) && this.way_param) {
                    this.bol = true;
                } else {
                    this.hint2 = true;
                }
            },
            saveBtn() {
                let i;
                console.log(this.addList.way);
                let div = document.getElementsByClassName('htfs-container');

                if (this.addList.way === '分成模式') {
                    if (this.way_param1 && this.way_param2) {
                        this.way_param = this.way_param1 + ":" + this.way_param2;
                        console.log(this.way_param);
                        for (i = 0; i < div.length; i++) {
                            div[i].style.display = 'none';
                        }
                        this.way = "分成模式";
                    } else {
                        this.isKong = true;
                    }
                } else if (this.addList.way === '保底模式') {
                    if (this.way_param3) {
                        this.way_param = this.way_param3;
                        for (i = 0; i < div.length; i++) {
                            div[i].style.display = 'none';
                        }
                        this.way = "保底模式";
                    }
                } else if (this.addList.way === '分成保底') {
                    if (this.way_param4 && this.way_param5 && this.way_param6) {
                        this.way_param = this.way_param4 + "," + this.way_param5 + ":" + this.way_param6;
                        for (i = 0; i < div.length; i++) {
                            div[i].style.display = 'none';
                        }
                        this.way = "分成保底";
                    }
                } else if (this.addList.way === '分成叠加') {
                    if (this.way_param7 && this.way_param8 && this.way_param9) {
                        this.way_param = this.way_param7 + ":" + this.way_param8 + "," + this.way_param9;
                        for (i = 0; i < div.length; i++) {
                            div[i].style.display = 'none';
                        }
                        this.way = "分成叠加";
                    }
                } else if (this.addList.way === '固定服务') {
                    if (this.way_param10 !== '') {
                        this.way_param = this.way_param10;
                        for (i = 0; i < div.length; i++) {
                            div[i].style.display = 'none';
                        }
                        this.way = "固定服务";
                    }
                }
            },
            saveData() {
                if (!this.isEmpty(this.addTableList)) {
                    let arr = this.addTableList.yddz;
                    let address = arr.join(' ') + ' ' + this.addTableList.stree;
                    let data1 = {
                        id: '',
                        user_id: this.addTableList.user_id,
                        user_grade: this.addTableList.user_grade,
                        bzrl: this.addTableList.bzrl,
                        ydlb: this.addTableList.ydlb,
                        yddwlb: this.addTableList.yddwlb,
                        yddz: address
                    };
                    this.$http.post(this.$api.USER_NUM_ADD, {
                        cus_id: this.cus_id,
                        user_no: data1.user_id,
                        vol_level: data1.user_grade,
                        packing_capacity: data1.bzrl,
                        category: data1.ydlb,
                        unit_type: data1.yddwlb,
                        address: data1.yddz
                    }).then(res => {
                        console.log('用户户号添加', res);
                        if (res.data.status==='1') {
                            console.log(res.data.id);
                            data1["id"] = res.data.id;
                            this.data1.push(data1);
                            this.user_nums.push(res.data.id);
                        }
                        this.addTableList.yddz = [];
                        this.addTableList.user_id = '';
                        this.addTableList.user_grade = '';
                        this.addTableList.bzrl = '';
                        this.addTableList.ydlb = '';
                        this.addTableList.yddwlb = '';
                        this.addTableList.stree = '';

                        this.modal1 = false;
                    }, err => {
                        this.$api.errcallback(err);
                    }).catch(err => {
                        this.$api.errcallback(err);
                    })
                } else if (this.isEmpty(this.addTableList)) {
                    this.hint = true;
                }


            },
            isEmpty(obj) {
                for (let key in obj) {
                    if (obj[key]) {
                        return false
                    }
                }
                return true
            },
            timeout() {
                let _this = this;
                let timer = setTimeout(function () {
                    _this.hint = false;
                    if (_this.hint = false) {
                        clearTimeout(timer);
                    }
                }, 3000);
            },
            valueChange() {
                let _this = this;
                let timer2 = setTimeout(function () {
                    _this.isKong = false;
                    if (_this.isKong = false) {
                        clearTimeout(timer2);
                    }
                }, 3000);
            },
            disappear() {
                let _this = this;
                let timer3 = setTimeout(function () {
                    _this.hint2 = false;
                    if (_this.hint2 = false) {
                        clearTimeout(timer3);
                    }
                }, 3000);
            },
            cancel() {
                this.modal2 = false;
            },
            isDefaultAddress(value) {
                if (value === true) {
                    this.$http.post(this.$api.CLIENT_BASIC_INFO, {cus_id: this.cus_id}).then(res => {
                        console.log('用户基本信息', res);
                        if(res.data.status==='1'){
                              this.address1 = res.data.data.province;
                        this.address2 = res.data.data.city;
                        this.address3 = res.data.data.county;
                        this.defaultAddress = 'true';
                        this.addTableList.yddz = [this.address1, this.address2, this.address3];
                        console.log(this.addTableList.yddz);
                        this.addTableList.stree = res.data.data.address;
                        }
                      
                    }, err => {
                        this.$api.errcallback(err);
                    }).catch(err => {
                        this.$api.errcallback(err);
                    })
                } else {
                    this.addTableList.stree = '';
                }
            },
            saveUpdate() {
                let arr = this.addTableList.yddz;
                let address = arr.join(' ') + ' ' + this.addTableList.stree;
                let data1 = {
                    id: this.id,
                    user_id: this.addTableList.user_id,
                    user_grade: this.addTableList.user_grade,
                    bzrl: this.addTableList.bzrl,
                    ydlb: this.addTableList.ydlb,
                    yddwlb: this.addTableList.yddwlb,
                    yddz: address
                };
                this.$http.post(this.$api.USER_NUM_ADD, {
                    id: this.id, cus_id: this.cus_id,
                    user_no: this.addTableList.user_id,
                    vol_level: this.addTableList.user_grade,
                    packing_capacity: this.addTableList.bzrl,
                    category: this.addTableList.ydlb,
                    unit_type: this.addTableList.yddwlb,
                    address: address
                }).then(res => {
                    console.log("修改", res);
                    if (res.data.status==='1') {
                        this.data1.splice(this.index, 1, data1);
                    }
                    this.addTableList.yddz = [];
                    this.addTableList.user_id = '';
                    this.addTableList.user_grade = '';
                    this.addTableList.bzrl = '';
                    this.addTableList.ydlb = '';
                    this.addTableList.yddwlb = '';
                    this.addTableList.stree = '';
                    this.modal3 = false;
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            deleteUserNum(id, index) {
                this.$http.post(this.$api.USER_NUM_DEL, {id: id}).then(res => {
                    console.log("删除", res);
                    if (res.data.status==='1') {
                        this.data1.splice(index, 1);
                    }
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            timeArea(value) {
                this.addList.deadline = value;
                console.log(value);
            },
            updateCompact() {
                if (this.$route.query.id) {
                    console.log(this.$route.query);
                    this.addList.cus_name = this.$route.query.cus_name;
                    var div = document.getElementById('name');
                    var input = div.getElementsByClassName('ivu-input')[0];
                    input.readOnly = true;
                    this.addList.con_no = this.$route.query.con_no;
                    this.addList.way = this.$route.query.way;
                    this.addList.ly_used = this.$route.query.ly_used;
                    this.addList.ly_maxload = this.$route.query.ly_maxload;
                    this.addList.bndyjdl = this.$route.query.bndyjdl;
                    this.addList.bndyjzdfh = this.$route.query.bndyjzdfh;
                    var arr4 = this.$route.query.deadline.split('/');
                    this.addList.deadline = [arr4[0], arr4[1]];
                    var arr = [];
                    var arr2 = [];
                    switch (this.addList.way) {
                        case "分成模式" :
                            arr = this.$route.query.way_param.split(':');
                            this.way_param1 = arr[0];
                            this.way_param2 = arr[1];
                            break;
                        case "保底模式":
                            this.way_param3 = this.$route.query.way_param;
                            break;
                        case "分成保底":
                            arr = this.$route.query.way_param.split(',');
                            arr2 = arr[1].split(":");
                            this.way_param4 = arr[0];
                            this.way_param5 = arr2[0];
                            this.way_param6 = arr2[1];
                            break;
                        case "分成叠加":
                            arr = this.$route.query.way_param.split(',');
                            arr2 = arr[0].split(":");
                            this.way_param7 = arr2[0];
                            this.way_param8 = arr2[1];
                            this.way_param9 = arr[1];
                            break;
                        case "固定服务":
                            this.way_param10 = this.$route.query.way_param;
                            break;
                        default:
                            break;
                    }
                    for (let i = 0; i < this.$route.query.usernos.length; i++) {
                        var obj = {
                            id: this.$route.query.usernos[i].id,
                            user_id: this.$route.query.usernos[i].user_no,
                            user_grade: this.$route.query.usernos[i].vol_level,
                            bzrl: this.$route.query.usernos[i].packing_capacity,
                            ydlb: this.$route.query.usernos[i].category,
                            yddwlb: this.$route.query.usernos[i].unit_type,
                            yddz: this.$route.query.usernos[i].address
                        };
                        this.data1.push(obj);
                        var arr3 = this.$route.query.user_nums.split(',');
                        for (let i = 0; i < arr3.length; i++) {
                            this.user_nums.push(arr3[i]);
                        }
                    }
                }
            },
            addressChange(value) {
                this.addTableList.yddz = value;
                console.log(value);
            }
        },
        watch: {
            hint: function () {
                this.timeout();
            },
            isKong: function () {
                this.valueChange();
            },
            hint2: function () {
                this.disappear();
            }
        },
        mounted() {
            if (this.$route.query.cus_name) {
                this.addList.user_name = this.$route.query.cus_name;
                var div = document.getElementById('name');
                var input = div.getElementsByClassName('ivu-input')[0];
                input.readOnly = true;
                // console.log(this.$route.query.cus_id)
            } else {
                this.addList.user_name = '';
            }
            this.cus_id = this.$route.query.cus_id || this.$store.getters.cus_id;
            this.updateCompact();
        }
    }
</script>
<template>
	<div class="main-container relative">
		<Card class="main-container-panel">
			<i class="iconfont icon-fanhui1 back" @click="$router.go(-1)"></i>
			<h3 slot="title" style="padding-left:40px">添加售电合同</h3>
			<Form class="form-container" :label-width='130' ref='addList' :model='addList' :rules='addValidate'>
				<h3 class="title">基本信息</h3>
				<FormItem label='客户名称' prop="user_name">
					<Input v-model='addList.user_name' id='name'></Input>
				</FormItem>
				<FormItem label='合同编号' prop="con_no">
					<Input v-model='addList.con_no'></Input>
				</FormItem>
				<FormItem label='合同方式' prop='way' class='mgb_0'>

					<Select v-model="addList.way" style="width:200px;" placeholder="合同模式">
						<Option v-for="item in htfsList" :value="item.value" :key="item.value">{{item.label}} </Option>
					</Select>

					<div class="htfs-container" v-show="addList.way === '分成模式'">
						<span>分成比例:</span>
						<Input class="width-90" placeholder="售电公司占比" v-model='way_param1'></Input> ：
						<Input class="width-90" placeholder="用户占比" v-model='way_param2'></Input>
					</div>
					<div class="htfs-container" v-show="addList.way === '保底模式'">
						<span>保底价格:</span>
						<Input class="width-90" placeholder="输入保底价格" v-model='way_param3'></Input>
					</div>
					<div class="htfs-container" v-show="addList.way === '分成保底'">
						<span>保底价格:</span>
						<Input class="width-90 mgr-10" placeholder="输入保底价格" v-model='way_param4'></Input>
						<span>分成比例:</span>
						<Input class="width-90" placeholder="售电公司占比" v-model='way_param5'></Input> ：
						<Input class="width-90" placeholder="用户占比" v-model='way_param6'></Input>
					</div>
					<div class="htfs-container" v-show="addList.way === '分成叠加'">
						<span>分成比例:</span>
						<Input class="width-90" placeholder="售电公司占比" v-model='way_param7'></Input> ：
						<Input class="width-90 mgr-10" placeholder="用户占比" v-model='way_param8'></Input>
						<span>叠加价格:</span>
						<Input placeholder="叠加价格" class="width-90" v-model='way_param9'></Input>
					</div>
					<div class="htfs-container" v-show="addList.way === '固定服务'">
						<span>服务费率:</span>
						<Input class="width-90" placeholder="输入服务费率" v-model='way_param10'></Input><span>/kw.h</span>
					</div>
					<div class="btn-save">
						<Button :type="way===''?'primary':'default'" @click='saveBtn()'>保存</Button>
						<span v-if='isKong' style="font-size: 12px;color:red;margin-left:5px;">内容不能为空</span>
					</div>
					<div style="height: 24px;line-height: 24px;color: #ccc;">
						<span v-if='way == "分成模式"'>分成比例：{{way_param1}} : {{way_param2}}</span>
						<span v-if='way == "保底模式"'>保底价格：{{way_param3}} </span>
						<span v-if='way == "分成保底"'>保底价格：{{way_param4}},分成比例：{{way_param5}} : {{way_param6}} </span>
						<span v-if='way == "分成叠加"'>分成比例：{{way_param7}} : {{way_param8}},叠加价格:{{way_param9}} </span>
						<span v-if='way == "固定服务"'>服务费率:{{way_param10}}</span>
					</div>
				</FormItem>
				<FormItem label='合同起止日期'>
					<DatePicker
							type="daterange"
							placement="bottom-end"
							placeholder="请选择合同起止日期"
							size='large' class='add_hetong' v-on:on-change="timeArea"
							:value='addList.deadline'></DatePicker>
				</FormItem>
				<FormItem label='上年度用电量' prop='ly_used'>
					<Input v-model='addList.ly_used'></Input>
					<span>MW.h</span>
				</FormItem>
				<FormItem label='上年度最大负荷量' prop='ly_maxload'>
					<Input v-model='addList.ly_maxload'></Input>
					<span>MW.h</span>
				</FormItem>
				<FormItem label='本年度预计电量' prop='bndyjdl'>
					<Input v-model='addList.bndyjdl'></Input>
					<span>MW.h</span>
				</FormItem>
				<FormItem label='本年度预计最大负荷' prop='bndyjzdfh'>
					<Input v-model='addList.bndyjzdfh'></Input>
					<span>MW.h</span>
				</FormItem>
				<FormItem label='合同上传' class='myTab'>
					<my-upload @complete="uploadComplete" :url='$api.UPLOAD_COMPACT' @selectComplete='selectSuccess'
					           :beginUpload='bol'>
						<Input placeholder='请选择文件' class='file' v-model='file'></Input>
						<a>选择文件</a>
					</my-upload>
					<br>
					<i class="typeTip">仅支持PDF格式</i><span>{{tip}}</span><br/>
				</FormItem>
				<FormItem label='用户户号' class='myTab'>
					<Table :columns='columns1' :data='data1' width='1000' height='150'></Table>
					<div style="width:1000px;text-align: right;">
						<Button type="primary" style='margin-top:10px;' @click='modal1=true'>添加</Button>
					</div>

				</FormItem>
				<FormItem>
					<div class="btn-group">
						<Button type="primary" class="mgr-20" @click='changeStatus()'>保存</Button>
						<Button type="default" @click="$router.go(-1)">取消</Button>
					</div>
					<div v-if='hint2'>
						<Alert type="warning" show-icon
						       style='width: 200px;margin:5px auto;color: red;margin-left:450px'>内容不能为空
						</Alert>
					</div>
				</FormItem>
			</Form>

			<!--遮罩层-->
			<Modal v-model="modal1" :styles="{top:'280px'}" class="addAgreement-modal" width="850px;">
				<h3 slot="header" class="title">添加营销用户编号</h3>
				<Form class="add-msg" :model='addTableList' :label-width='100' :rules='modalValidator'>
					<FormItem label='营销用户编号:' prop='user_id'><Input class="width-200" placeholder="用户户号"
					                                                v-model='addTableList.user_id'></Input></FormItem>
					<FormItem label='用户电压等级:' prop='user_grade'><Select class="width-200"
					                                                    v-model='addTableList.user_grade'>
						<Option value="0.4kV">0.4kV</Option>
						<Option value="6.3kV">6.3kV</Option>
						<Option value="10kV">10kV</Option>
						<Option value="20kV">20kV</Option>
						<Option value="35kV">35kV</Option>
						<Option value="66kV">66kV</Option>
						<Option value="110kV">110kV</Option>
						<Option value="220kV">220kV</Option>
						<Option value="330kV">330kV</Option>
						<Option value="500kV">500kV</Option>
						<Option value="750kV">750kV</Option>
						<Option value="1000kV">1000kV</Option>
					</Select></FormItem>
					<FormItem label='报装容量:' prop='bzrl'><Input class="width-200"
					                                           v-model='addTableList.bzrl'></Input><span>KVA</span>
					</FormItem>
					<FormItem label='用电类别:' prop='ydlb'><Select class="width-200" v-model='addTableList.ydlb'>
						<Option value="居民生活用电">居民生活用电</Option>
						<Option value="大工业中小化肥">大工业中小化肥</Option>
						<Option value="大工业其它优待">大工业其它优待</Option>
						<Option value="乡村居民生活用电">乡村居民生活用电</Option>
						<Option value="城镇居民生活用电">城镇居民生活用电</Option>
						<Option value="中小学教学用电">中小学教学用电</Option>
						<Option value="农业生产用电">农业生产用电</Option>
						<Option value="农业排灌">农业排灌</Option>
						<Option value="贫困县农业排灌用电">贫困县农业排灌用电</Option>
						<Option value="一般工商业">一般工商业</Option>
						<Option value="非工业">非工业</Option>
						<Option value="普通工业中小化肥">普通工业中小化肥</Option>
						<Option value="商业用电">商业用电</Option>
						<Option value="趸售">趸售</Option>
						<Option value="趸售大工业">趸售大工业</Option>
						<Option value="趸售普工、非普工业">趸售普工、非普工业</Option>
						<Option value="趸售非居民">趸售非居民</Option>
						<Option value="趸售居民生活用电">趸售居民生活用电</Option>
						<Option value="趸售农业生产用电">趸售农业生产用电</Option>
						<Option value="趸售商业用电">趸售商业用电</Option>
						<Option value="其它用电">其它用电</Option>
						<Option value="大用户直购电">大用户直购电</Option>
						<Option value="考核">考核</Option>
						<Option value="大工业用电">大工业用电</Option>
						<Option value="抽水蓄能">抽水蓄能</Option>
						<Option value="售邻省">售邻省</Option>
						<Option value="其他">其他</Option>
					</Select></FormItem>
					<FormItem label='用电单元类型:' prop='yddwlb'><Select class="width-200" v-model='addTableList.yddwlb'>
						<Option value="农、林、牧、渔业">农、林、牧、渔业</Option>
						<Option value="工业">工业</Option>
					</Select></FormItem>
					<FormItem label='用户地址:' class='user_address'>
						<Row>
							<Col span='13'>
							<FormItem prop='yddz'>
								<al-selector level=2  class='address' data-type='name' v-model='addTableList.yddz'
								             v-if="!defaultArea"/>
								<p v-else>{{addTableList.yddz.join('-')}}-{{addTableList.stree}}</p>
							</FormItem>
							</Col>
							<Col span='8' style='margin-left: 15px' v-if="!defaultArea">
							<FormItem prop='stree'>
								<Input placeholder="街道等详细地址" style='width:250px;vertical-align: top;'
								       v-model='addTableList.stree' v-if="!defaultArea"></Input>
							</FormItem>
							</Col>
						</Row>
					</FormItem>
					<FormItem label=''>
						<Checkbox label='企业默认地址' v-on:on-change="isDefaultAddress" v-model="defaultArea">
							<span>企业默认地址</span>
						</Checkbox>
					</FormItem>
				</Form>
				<div slot="footer" class="add-btn-group">
					<Button type="primary" @click="saveData">保存</Button>
					<Button type="default" @click="modal1=false">取消</Button>
					<div v-if='hint'>
						<Alert type="warning" show-icon style='width: 200px;margin:5px auto;color: red;'>内容不能为空</Alert>
					</div>
				</div>
			</Modal>
			<!-- 修改 -->
			<Modal v-model="modal3" :styles="{top:'280px'}" class="addAgreement-modal" width="850px;">
				<h3 slot="header" class="title">添加营销用户编号</h3>
				<Form class="add-msg" :model='addTableList' :label-width='100' :rules='modalValidator'>
					<FormItem label='营销用户编号:' prop='user_id'><Input class="width-200" placeholder="用户户号"
					                                                v-model='addTableList.user_id'></Input></FormItem>
					<FormItem label='用户电压等级:' prop='user_grade'><Select class="width-200"
					                                                    v-model='addTableList.user_grade'>
						<Option value="0.4kV">0.4kV</Option>
						<Option value="6.3kV">6.3kV</Option>
						<Option value="10kV">10kV</Option>
						<Option value="20kV">20kV</Option>
						<Option value="35kV">35kV</Option>
						<Option value="66kV">66kV</Option>
						<Option value="110kV">110kV</Option>
						<Option value="220kV">220kV</Option>
						<Option value="330kV">330kV</Option>
						<Option value="500kV">500kV</Option>
						<Option value="750kV">750kV</Option>
						<Option value="1000kV">1000kV</Option>
					</Select></FormItem>
					<FormItem label='报装容量:' prop='bzrl'><Input class="width-200"
					                                           v-model='addTableList.bzrl'></Input><span>KVA</span>
					</FormItem>
					<FormItem label='用电类别:' prop='ydlb'><Select class="width-200" v-model='addTableList.ydlb'>
						<Option value="居民生活用电">居民生活用电</Option>
						<Option value="大工业中小化肥">大工业中小化肥</Option>
						<Option value="大工业其它优待">大工业其它优待</Option>
						<Option value="乡村居民生活用电">乡村居民生活用电</Option>
						<Option value="城镇居民生活用电">城镇居民生活用电</Option>
						<Option value="中小学教学用电">中小学教学用电</Option>
						<Option value="农业生产用电">农业生产用电</Option>
						<Option value="农业排灌">农业排灌</Option>
						<Option value="贫困县农业排灌用电">贫困县农业排灌用电</Option>
						<Option value="一般工商业">一般工商业</Option>
						<Option value="非工业">非工业</Option>
						<Option value="普通工业中小化肥">普通工业中小化肥</Option>
						<Option value="商业用电">商业用电</Option>
						<Option value="趸售">趸售</Option>
						<Option value="趸售大工业">趸售大工业</Option>
						<Option value="趸售普工、非普工业">趸售普工、非普工业</Option>
						<Option value="趸售非居民">趸售非居民</Option>
						<Option value="趸售居民生活用电">趸售居民生活用电</Option>
						<Option value="趸售农业生产用电">趸售农业生产用电</Option>
						<Option value="趸售商业用电">趸售商业用电</Option>
						<Option value="其它用电">其它用电</Option>
						<Option value="大用户直购电">大用户直购电</Option>
						<Option value="考核">考核</Option>
						<Option value="大工业用电">大工业用电</Option>
						<Option value="抽水蓄能">抽水蓄能</Option>
						<Option value="售邻省">售邻省</Option>
						<Option value="其他">其他</Option>
					</Select></FormItem>
					<FormItem label='用电单元类型:' prop='yddwlb'><Select class="width-200" v-model='addTableList.yddwlb'>
						<Option value="农、林、牧、渔业">农、林、牧、渔业</Option>
						<Option value="工业">工业</Option>
					</Select></FormItem>
					<FormItem label='用户地址:' class='user_address'>
						<Row>
							<Col span='13'>
							<FormItem prop='yddz'>
								<al-selector level=2     class='address' data-type='name' v-model='addTableList.yddz'
								             v-if="!defaultArea"/>
								<p v-else>{{addTableList.yddz.join('-')}}-{{addTableList.stree}}</p>
							</FormItem>
							</Col>
							<Col span='8' style='margin-left: 15px' v-if="!defaultArea">
							<FormItem prop='stree'>
								<Input placeholder="街道等详细地址" style='width:250px;vertical-align: top;'
								       v-model='addTableList.stree' v-if="!defaultArea"></Input>
							</FormItem>
							</Col>
						</Row>
					</FormItem>
					<FormItem label=''>
						<Checkbox label='企业默认地址' v-on:on-change="isDefaultAddress">
							<span>企业默认地址</span>
						</Checkbox>
					</FormItem>
				</Form>
				<div slot="footer" class="add-btn-group">
					<Button type="primary" @click="saveUpdate">保存</Button>
					<Button type="default" @click="modal3=false">取消</Button>
					<div v-if='hint'>
						<Alert type="warning" show-icon style='width: 200px;margin:5px auto;color: red;'>内容不能为空</Alert>
					</div>
				</div>
			</Modal>
			<!-- 错误提示蒙版 -->
			<Modal v-model="modal2" width="360" class-name="vertical-center-modal">
				<p slot="header" style="color:#f60;text-align:center">
					<Icon type="information-circled"></Icon>
					<span>警告</span>
				</p>
				<div style="text-align:center">
					<p style="color: red">客户名称不存在</p>
				</div>
				<div slot="footer" style='text-align: center;'>
					<Button type="primary" @click='cancel'>确认</Button>
				</div>
			</Modal>
		</Card>
	</div>
</template>
<style scoped>
	/* 返回键样式 */
	.back {
		position: absolute;
		top: 10px;
		left: 10px;
		z-index: 9;
		cursor: pointer;
		/* color: #108CEE; */
	}

	.title {
		display: block;
	}

	.main-container {
		height: 900px;
	}

	.main-container-panel {
		height: 900px;
	}

	.form-container {
		margin-left: 12%;
		margin-top: 20px;
	}

	.form-container label {
		display: inline-block;
	}

	.form-container label .width-120 {
		display: inline-block;
		width: 120px;
		text-align: right;
		margin-right: 15px;
	}

	.form-container label select {
		width: 150px;
		border-radius: 0;
		height: 34px;
		border: 1px solid #eeeeee;
	}

	.htfs-container {
		display: inline-block;
	}

	.htfs-container span {
		display: inline !important;
	}

	.ivu-input {
		width: 200px;
	}

	.ivu-input-wrapper {
		width: 200px;
	}

	.btn-save {
		float: none;
		margin-top: 0;
		margin-left: 10px;
		display: inline-block;
	}

	.width-90 {
		width: 90px;
	}

	.mr-l {
		display: inline-block;
		margin-right: 15px;
		margin-left: 15px;
	}

	.btn-group {
		width: 100%;
		float: none;
		text-align: center;
		margin-left: -100px;
	}

	.mgr-20 {
		margin-right: 20px;
	}

	.mgr-10 {
		margin-right: 10px;
	}

	.ivu-modal-header {
		height: 60px;
		line-height: 60px;
		padding: 0;
	}

	.ivu-modal-content .ivu-modal-header .title {
		text-align: center;
	}

	.width-200 {
		width: 200px;
	}

	.width-80 {
		width: 80px;
	}

	.width-100 {
		width: 100px;
	}

	.ivu-modal-footer .add-btn-group {
		text-align: center;
	}

	label {
		position: relative;
	}

	.biaoFrom td {
		height: 34px;
	}

	.typeTip {
		font-style: normal;
		color: #ccc;
		text-align: left;
	}

	.myTab {
		margin-bottom: 2px;
	}

	.address {
		width: 400px;
		display: inline-block;
	}

	.mgb_0 {
		margin-bottom: 0;
	}

	.user_address {
		margin-bottom: 0px;
	}
</style>