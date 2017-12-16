<script>
    import inputs from '@/components/ContractManagement/inputs'
    import MyUpload from '../Tool/upLoad.vue'


    export default {
        name: 'ContractManagement',
        data() {
            const telphone = (rule,val,callback)=>{
             console.log(val);
             if(!/^1[3|4|5|8][0-9]\d{4,8}$/.test(val)){
                return callback(new Error("输入的手机号格式不对"));
             }else{
               callback();
             }
        };
            return {
                value: "",
                dcList: [{
                    label:'1',
                    value:'1'
                }],
                powerId: '',
                model3: '',
                formItem: {
                    lpcon_no: '',
                    lpcon_year: '',
                    powerplant: '',
                    signed_num: '',
                    signed_status: '',
                    signed_day: '',
                    signed_price: '',
                    exec_date: '',
                    business: '',
                    tel: '',
                    address: '',
                    htscdz: '',
                    d_id: '',
                    remarks: '',
                },
                file: '',
                month: {
                    month01: '',
                    month02: '',
                    month03: '',
                    month04: '',
                    month05: '',
                    month06: '',
                    month07: '',
                    month08: '',
                    month09: '',
                    month10: '',
                    month11: '',
                    month12: ''
                },
                allMonth: 0,
                equality: false,
                ruleVa: {
                    lpcon_no: [
                        {required: true, message: '这个选项不能为空', trigger: 'blur'}
                    ],
                    lpcon_year: [
                        {required: true, message: '这个选项不能为空', trigger: 'blur'}
                    ],
                    powerplant: [
                        {required: true, message: '这个选项不能为空', trigger: 'blur'}
                    ],
                    signed_num: [
                        {required: true, message: '这个选项不能为空', trigger: 'blur'}
                    ],
                    signed_status: [
                        {required: true, message: '这个选项不能为空', trigger: 'blur'}
                    ],
                    signed_day: [
                        {required: true, message: '这个选项不能为空', trigger: 'blur'}
                    ],
                    signed_price: [
                        {required: true, message: '这个选项不能为空', trigger: 'blur'}
                    ],
                    exec_date: [
                        {required: true, message: '这个选项不能为空', trigger: 'blur'}
                    ],
                    business: [
                        {required: true, message: '这个选项不能为空', trigger: 'blur'}
                    ],
                    tel: [
                        {required: true, message: '这个选项不能为空', trigger: 'blur'},
                        {type:'string',min:11,message:'手机号必须为11位',trigger:'blur'},
                        { validator: telphone, trigger: 'blur' },
                    ],
                    remarks: [
                        {required: true, message: '这个选项不能为空', trigger: 'blur'}
                    ],
                },
                hint: false,
                bol: false,
                isGo: true,
            }
        },
        components: {
            "inputs": inputs,
            'my-upload': MyUpload
        },
        methods: {
            //文件上传
            uploadComplete(result) {
                console.log(result);
                this.formItem.htscdz = result.fileid;
                this.upLoadPowerCompact();
                this.bol = false;
            },
            selectSuccess(file) {
                this.file = file;
            },
            changeStatus() {
                if(this.file && !this.isEmpty(this.formItem) && !this.isEmpty(this.month)){
                     this.bol = true;
                     this.isGo = false
                }else{
                    this.hint = true;
                }
            },
            powerPlant() {
                this.$http.get(this.$api.CHANGXIE_ADD_PLANT).then(res => {
                    console.log("电厂列表", res);
                    var data = res.data;
                    console.log(data);
                    if (data.status) {
                        var list = data[0];
                        var arr =[];
                        for (var i = 0; i < list.length; i++) {
                            var obj = {
                                label: list[i].pp_name,
                                value: list[i].id
                            };
                            
                            arr.push(obj);
                        }
                    }
                    this.dcList = arr;
                     console.log(this.dcList);

                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            powerAddress(value) {
                if (value.value != '' && value.label != "") {
                    console.log(value);
                    this.powerId = value.value;
                    this.formItem.powerplant = value.label;
                    console.log(this.powerId, this.formItem.powerplant);
                    this.$http.get(this.$api.POWER_PLANT_ADDRESS + this.powerId).then(res => {
                        console.log('电厂地址', res);
                        if (res.data.status) {
                            this.formItem.address = res.data[0].address;
                        }
                    }, err => {
                        this.$api.errcallback(err);
                    }).catch(err => {
                        this.$api.errcallback(err);
                    })
                }
            },
            upLoadPowerCompact() {
                 if(this.$route.query.id){
                    this.formItem["id"] = this.$route.query.id;
                    this.formItem['com_id'] = this.com_id;
                    console.log(this.formItem);
                      var tel_reg = /^1[3|4|5|8][0-9]\d{4,8}$/; 
                if (!this.isEmpty(this.formItem) && tel_reg.test(this.formItem.tel)) {
                    this.formItem.signed_num = parseInt(this.formItem.signed_num);
                    if (!this.isEmpty(this.month)) {
                        this.$http.post(this.$api.ALLOT_POWER, this.month).then(res => {
                            console.log("电量分配", res);
                            if (res.data.status) {
                                this.formItem.d_id = res.data.id;
                                this.$http.post(this.$api.CHANGXIE_ADD_COMPACT, this.formItem).then(res => {
                                    console.log('修改长协合同', res);
                                    if (res.data.status && !this.isGo) {
                                        this.$router.push('/ChangxieContract');
                                    } else {
                                        this.success();
                                        for (let k in this.formItem) {
                                            this.formItem[k] = '';
                                        }
                                        this.file = '';
                                        this.formItem.signed_day = '';
                                        this.formItem.exec_date='';
                                        for (let k in this.month) {
                                            this.month[k] = '';
                                        }
                                    }
                                }, err => {
                                    this.$api.errcallback(err);
                                }).catch(err => {
                                    this.$api.errcallback(err);
                                })
                            }
                        }, err => {
                            this.$api.errcallback(err);
                            this.fail();
                        }).catch(err => {
                            this.$api.errcallback(err);
                        })
                    }
                } else {
                    this.hint = true;
                }


                 }else{
                    console.log(this.formItem);
                var tel_reg = /^1[3|4|5|8][0-9]\d{4,8}$/; 
                if (!this.isEmpty(this.formItem) && tel_reg.test(this.formItem.tel)) {
                    this.formItem.signed_num = parseInt(this.formItem.signed_num);
                    this.formItem['com_id'] = this.com_id;
                    if (!this.isEmpty(this.month)) {
                        this.$http.post(this.$api.ALLOT_POWER, this.month).then(res => {
                            console.log("电量分配", res);
                            if (res.data.status) {
                                this.formItem.d_id = res.data.id;
                                this.$http.post(this.$api.CHANGXIE_ADD_COMPACT, this.formItem).then(res => {
                                    console.log('添加长协合同', res);
                                    if (res.data.status && !this.isGo) {
                                        this.$router.push('/ChangxieContract');
                                    } else {
                                        this.success();
                                        for (let k in this.formItem) {
                                            this.formItem[k] = '';
                                        }
                                        this.file = '';
                                        this.formItem.signed_day = '';
                                        this.formItem.exec_date='';
                                        for (let k in this.month) {
                                            this.month[k] = '';
                                        }
                                    }
                                }, err => {
                                    this.$api.errcallback(err);
                                }).catch(err => {
                                    this.$api.errcallback(err);
                                })
                            }
                        }, err => {
                            this.$api.errcallback(err);
                            this.fail();
                        }).catch(err => {
                            this.$api.errcallback(err);
                        })
                    }
                } else {
                    this.hint = true;
                }

                 }
                
            },
            isEmpty(obj) {
                for (let key in obj) {
                    if (obj[key] !== "") {
                        return false
                    }
                }
                return true
            },
            execDate(value) {
                this.formItem.exec_date = value;
                console.log(this.formItem.exec_date);
            },
            singnedDay(value) {
                this.formItem.signed_day = value;
            },
            hintChange() {
                var _this = this;
                var timer = setTimeout(function () {
                    _this.hint = false;
                    if (_this.hint = false) {
                        clearTimeout(timer);
                    }
                }, 3000)
            },
            signStatus(value) {
                this.formItem.signed_status = value;
            },
            changeEmpty() {
                this.bol = true;
                this.isGo = false;
            },
            // cancel() {
            //     for (let k in this.formItem) {
            //         this.formItem[k] = '';
            //     }
            //     this.file = '';
            //     for (let k in this.month) {
            //         this.month[k] = '';
            //     }
            // },
            success() {
                this.$Message.success('添加成功');
            },
            fail(){
                this.$Message.success("添加失败");
            }
        },
        watch: {
            hint: function () {
                this.hintChange();
            },
            com_id:function(){
                this.upLoadPowerCompact();
            },
            dcList:function(){
               return this.dcList
            }
        },
        computed: {
            isEquality: function () {
                for (var k in this.month) {
                    if (this.month[k] === '') {
                        return false;
                    }
                }

                return true;
            },
            com_id:function(){
                return this.$store.getters.com_id;
            },
        },
        mounted() {
            this.powerPlant();
            if(this.$route.query.id){
                    this.formItem.lpcon_no = this.$route.query.lpcon_no;
                    this.formItem.lpcon_year=this.$route.query.lpcon_year;
                    this.formItem.signed_num = this.$route.query.signed_num;
                    if(this.$route.query.signed_status == "签约"){
                        this.formItem.signed_status = "1";
                    }else{
                         this.formItem.signed_status = "0";
                    }
                    this.formItem.signed_day = this.$route.query.signed_day;
                    this.formItem.signed_price = this.$route.query.signed_price;
                    this.formItem.exec_date = this.$route.query.exec_date;
                    this.formItem.business = this.$route.query.business;
                    this.formItem.tel = this.$route.query.tel;
                    var arr = this.$route.query.list;
                    console.log(arr[0]);
                    this.month.month01 = arr[0].month01;
                    this.month.month02 = arr[0].month02;
                    this.month.month03 = arr[0].month03;
                    this.month.month04 = arr[0].month04;
                    this.month.month05 = arr[0].month05;
                    this.month.month06 = arr[0].month06;
                    this.month.month07 = arr[0].month07;
                    this.month.month08 = arr[0].month08;
                    this.month.month08 = arr[0].month08;
                    this.month.month09 = arr[0].month09;
                    this.month.month10 = arr[0].month10;
                    this.month.month11 = arr[0].month11;
                    this.month.month12 = arr[0].month12;
                    
            }else{
                 for(let k in this.formItem){
                    this.formItem[k] = '';
                 };
                 for(let k in this.month){
                     this.month[k] = '';
                 }
            }
            console.log(this.$route.query);
            this.$Message.config({
                top: 200,
                duration: 3
            });
        }
    }
</script>

<template>
	<Row class="main-container">
		<Card>
			<i class="iconfont icon-fanhui1 back" @click="$router.go(-1)"
			   style="position: absolute;top: 10px;left: 10px;"></i>
			<h3 slot="title" style="padding-left: 40px;">添加长协合同</h3>
			<Row class="ContractBox">
				<div class="ContractBox-main">
					<Form ref="formItem" :model="formItem" :rules='ruleVa' :label-width="110">
						<p>基本信息</p>
						<Row>
							<Col span="8">
							<Form-item label="合同编号" prop='htNum'>
								<Input v-model="formItem.lpcon_no" placeholder="请输入合同编号"></Input>
							</Form-item>
							</Col>
							<Col span="8">
							<Form-item label="合同年度" prop='lpcon_year'>
								<Input v-model="formItem.lpcon_year" placeholder="请输入合同年度"></Input>
							</Form-item>
							</Col>
						</Row>
						<Row>
							<Col span="8">
							<Form-item label="签约电厂" prop='powerplant'>
								<Select  placeholder="请选择签约电厂"
								        v-on:on-change='powerAddress' label-in-value :value='formItem.powerplant'>
									<Option v-for='item in dcList' :value="item.value" :key='item.value'>
										{{item.label}}
									</Option>
								</Select>
							</Form-item>
							</Col>
							<Col span="8">
							<Form-item label="签约电量" prop='signed_num'>
								<Input v-model="formItem.signed_num" placeholder="请输入签约电量"></Input> <i
									class="wkw">万KVA</i>
							</Form-item>
							</Col>

						</Row>
						<Row>
							<Col span="8">
							<Form-item label="合同状态" prop='signed_status'>
								<Select v-model='formItem.signed_status' placeholder='请输入合同状态'
								        v-on:on-change='signStatus'>
									<Option value='1'>已签</Option>
									<Option value='0'>未签</Option>
								</Select>
							</Form-item>
							</Col>
							<Col span="8">
							<Form-item label="签约日期" prop='signed_day'>
								<DatePicker type="date" placeholder="请输入签约日期" style='width: 100%;'
								            v-on:on-change='singnedDay' :value='formItem.signed_day'></DatePicker>
							</Form-item>
							</Col>
						</Row>
						<Row>
							<Col span="8">
							<Form-item label="签约价格" prop='signed_price'>
								<Input v-model="formItem.signed_price" placeholder="请输入签约价格"></Input>
							</Form-item>
							</Col>
							<Col span="8">
							<Form-item label="执行日期" prop='exec_date'>
								<DatePicker type="date" placeholder="请输入执行日期" style='width: 100%;'
								            v-on:on-change='execDate' :value='formItem.exec_date'></DatePicker>
							</Form-item>
							</Col>
						</Row>
						<p>联系信息</p>
						<Row>
							<Col span="8">
							<Form-item label="业务代表" prop='business'>
								<Input v-model="formItem.business" placeholder="请输入业务代表"></Input>
							</Form-item>
							</Col>
							<Col span="8">
							<Form-item label="联系电话" prop='tel'>
								<Input v-model="formItem.tel" placeholder="请输入联系电话"></Input>
							</Form-item>
							</Col>
						</Row>
						<Row :gutter="10">
							<Form-item label="电厂地址" class='dcdz'>
								<Col span="8">
								<Input disabled v-model="formItem.address" placeholder="-"></Input>
								</Col>
							</Form-item>
						</Row>
						<Row>
							<Col span="8">
							<Form-item label="合同备注" prop='remarks'>
								<Input v-model="formItem.remarks" placeholder="请输入合同备注"></Input>
							</Form-item>
							</Col>
						</Row>
						<p>电子合同备查</p>
						<FormItem label='合同上传' class='myTab'>
							<my-upload @complete="uploadComplete" :url='$api.UPLOAD_COMPACT' :beginUpload='bol'
							           @selectComplete='selectSuccess'>
								<Input placeholder='请选择文件' class='file' v-model='file'></Input>
								<a>选择文件</a>
							</my-upload>
							<br>
							<i class="typeTip">仅支持PDF格式</i><br/>
						</FormItem>
						<p>合同电量分配</p>
						<Row class="month">
							<div>一月</div>
							<div>二月</div>
							<div>三月</div>
							<div>四月</div>
							<div>五月</div>
							<div>六月</div>
							<div>七月</div>
							<div>八月</div>
							<div>九月</div>
							<div>十月</div>
							<div>十一月</div>
							<div>十二月</div>
							<div>总计</div>
						</Row>
						<Row class="monthData">
							<Input class='input' number v-model='month.month01' placeholder='-'></Input>
							<Input class='input' number v-model='month.month02' placeholder='-'></Input>
							<Input class='input' number v-model='month.month03' placeholder='-'></Input>
							<Input class='input' number v-model='month.month04' placeholder='-'></Input>
							<Input class='input' number v-model='month.month05' placeholder='-'></Input>
							<Input class='input' number v-model='month.month06' placeholder='-'></Input>
							<Input class='input' number v-model='month.month07' placeholder='-'></Input>
							<Input class='input' number v-model='month.month08' placeholder='-'></Input>
							<Input class='input' number v-model='month.month09' placeholder='-'></Input>
							<Input class='input' number v-model='month.month10' placeholder='-'></Input>
							<Input class='input' number v-model='month.month11' placeholder='-'></Input>
							<Input class='input' number v-model='month.month12' placeholder='-'></Input>
							<Input class='input' number disabled
							       :value='allMonth=month.month01+month.month02+month.month03+month.month04+month.month05+month.month06+month.month07+month.month08+month.month09+month.month10+month.month11+month.month12'
							       placeholder='-' v-model='allMonth' v-on:on-change='isEquality'></Input>
						</Row>
						<i class="tiShi" v-if='allMonth != formItem.signed_num && isEquality'>十二个月购电量分配合计与签约电量不一致！</i>
						<div class="save">
							<Button type="primary" @click='changeEmpty'>保存并继续添加</Button>
							<Button type="primary" @click='changeStatus'>保存</Button>
							<Button type="ghost" @click="$router.go(-1)">取消</Button>
						</div>
						<div v-if='hint'>
							<Alert type="warning" show-icon style='width: 200px;margin:5px auto;color: red'>内容不能为空
							</Alert>
						</div>
					</Form>
				</div>
			</Row>
		</Card>

	</Row>
</template>

<style scoped>

	/* 下载模块样式 */
	.changXie-upload-box {
		width: 570px;
		height: 34px;
		margin-top: 10px;
		margin-left: 110px;
	}

	.changXie-upload {
		width: 480px;
		height: 34px;
		display: inline-block;
		border: 1px solid #dddee1;
	}

	.ivu-upload {
		vertical-align: top;
		margin-left: 6px;
	}

	/* 表单每一项的下外边距 */

	.ivu-form-item {
		margin-bottom: 20px;
	}

	.layout-breadcrumb {
		padding: 10px 15px 0;
	}

	.ContractBox {
		height: 905px;
		overflow: hidden;
		background: #fff;
		border-radius: 4px;
		line-height: 1;
	}

	.layout-copy {
		text-align: center;
		padding: 10px 0 20px;
		color: #9ea7b4;
	}

	.ContractBox-main h3 {
		height: 30px;
		font-size: 14px;
		border-bottom: 1px solid #E5E5E5;
	}

	.ContractBox-main form {
		padding-left: 18%;
		position: relative;
		padding-right: 17%;
	}

	.ContractBox-main form p {
		font-size: 14px;
		font-weight: 700;
		padding-left: 5px;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.myInput {
		margin-top: 10px;
		margin-left: 110px;
	}

	.beizhu {
		margin-top: 40px;
	}

	.beizhu input {
		width: 700px;
		margin-top: 10px;
		margin-left: 110px;
		height: 34px;
		border: 1px solid #E5E5E5;
	}

	.adress {
		position: relative;
	}

	.beizhu {
		position: relative;
	}

	.adress input {
		height: 34px;
		margin-left: 10px;
		vertical-align: top;
		border: 1px solid #E5E5E5;
		width: 480px;
	}

	.beizhu span, .adress span {
		position: absolute;
		top: 20px;
		left: 40px;
		font-size: 14px;
		color: #000;
	}

	.mySelect {
		margin-left: 4px;
	}

	.TName {
		position: relative;
		display: inline-block;
		width: 34%;
	}

	.TName span {
		position: absolute;
		top: 20px;
		left: 40px;
		font-size: 14px;
		color: #000;
	}

	.wkw {
		position: absolute;
		right: -46px;
		top: 0px;
		font-style: normal;
		font-size: 12px;
		color: #ccc;
	}

	.typeTip {
		position: absolute;
		font-style: normal;
		bottom: 8px;
		color: #ccc;
	}

	.up input {
		margin-left: 110px;
		margin-top: 16px;
	}

	.powerFenpei {
		margin-top: 10px;
	}

	.tiShi {
		color: #E19D0C;
		margin-left: 10px;
	}

	.save {
		text-align: center;
		margin-top: 25px;
	}

	.save button {
		margin-right: 30px;
	}

	.month div {
		display: inline-block;
		width: 60px;
		height: 32px;
		background-color: #f6f7fb;
		line-height: 32px;
		text-align: center;
		margin-left: 10px;
	}

	.monthData .input {
		width: 60px;
		text-align: center;
		margin-top: 10px;
		margin-left: 10px;
	}
</style>


