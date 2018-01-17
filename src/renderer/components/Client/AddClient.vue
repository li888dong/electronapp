<script>
	import bank from '../../../../static/bank.json'
	import {telphone, codeLength, officeReg} from '../../../../static/verification.js'

	export default {
		name: 'AddClient',
		data() {
			return {
				loading1: false,
				formItem: {
					id:undefined,
					name: '',
					sn: '',
					sn_sp: '',
					tyshxydm: '',
					legal_person: '',
					organization: '',
					bank: '',
					bank_card: '',
					category: '',
					grade: '',
					contact: '',
					res_s: [],
					address: '',
					zipcode: '',
					telphone: '',
					email: '',
					officephone1: '',
					officephone2: '',
					fax1: '',
					fax2: '',
					date: '',
					time: '',
					slider: [20, 50],
					textarea: '',

				},
				bankList: [
					{
						value: '中国人民银行',
						label: '中国人民银行'
					},
					{
						value: '中国建设银行',
						label: '中国建设银行'
					},
					{
						value: '中国光大银行',
						label: '中国光大银行'
					},
					{
						value: '中国招商银行',
						label: '中国招商银行'
					},
					{
						value: '中国浦发银行',
						label: '中国浦发银行'
					},
					{
						value: '中国工商银行',
						label: '中国工商银行'
					}
				],
				faxNum: false,
				phoneNum: false,
				msgHint: '',
				categoryList1: [],
				categoryList2: [],
				categoryList3: [],
				model11: '',
				model22: '',
				category1: '',
				category2: '',
				category3: '',
				hint: false,
				emptyRule: {required: true, message: '内容不能为空', trigger: 'blur'},
				msg: '',
				modal1: false
			}
		},
		methods: {
			addClient(goht) {
				//手机号正则表达式
				var tel_reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
				//邮箱的正则表达式
				var email_reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
				//固定电话的正则验证
				var officephone_reg = /^[0-9]{3,4}\-[0-9]{3,8}$/;
				if (!this.isEmpty(this.formItem) && this.category1 && tel_reg.test(this.formItem.telphone) && email_reg.test(this.formItem.email) && officephone_reg.test(this.formItem.officephone1 + "-" + this.formItem.officephone2) && officephone_reg.test(this.formItem.fax1 + "-" + this.formItem.fax2)) {
					if (this.category1) {
						this.formItem.category = this.category1
					} else if (this.category1 && this.category2) {
						this.formItem.category = this.category1 + "," + this.category2
					} else if (this.category1 && this.category2 && this.category3) {
						this.formItem.category = this.category1 + "," + this.category2 + "," + this.category3;
					}
					this.$http.post(this.$api.CLIENT_ADD, {
						id:this.formItem.id,
						com_id: this.$store.getters.com_id,
						name: this.formItem.name,
						sn: this.formItem.sn,
						tyshxydm: this.formItem.tyshxydm,
						legal_person: this.formItem.legal_person,
						organization: this.formItem.organization,
						bank: this.formItem.bank,
						bank_card: this.formItem.bank_card,
						category: this.formItem.category,
						grade: this.formItem.grade,
						contact: this.formItem.contact,
						province: this.formItem.res_s[0].name,
						city: this.formItem.res_s[1].name,
						county: this.formItem.res_s[2].name,
						address: this.formItem.address,
						zipcode: this.formItem.zipcode,
						telphone: this.formItem.telphone,
						email: this.formItem.email,
						officephone: this.formItem.officephone1 + '-' + this.formItem.officephone2,
						fax: this.formItem.fax1 + '-' + this.formItem.fax2,
					}).then(res => {
						console.log(res);
						if (res.data.status === '1') {
							if (goht) {
								this.$store.dispatch('setCusId', res.data.id);
								this.$store.dispatch('setCusName', this.formItem.name);
								this.$router.push({
									path: 'add-hetong',
									query: {cus_name: this.formItem.name, cus_id: res.data.id}
								});
							} else {
								for (let k in this.formItem) {
									this.formItem[k] = "";
								}
								this.category1 = '';
								this.category2 = '';
								this.category3 = '';
								this.$router.push({name:'client_list'});
							}
						} else {
							this.modal1 = true;
							this.msg = res.data.msg;
						}

					}, err => {
						this.$api.errcallback(err);
					}).catch(err => {
						this.$api.errcallback(err);
					})
				} else {
					this.hint = true;
				}

			},
			changeCategory1(value) {
				let grade = 1;
				this.categoryList2 = [];
				this.categoryList3 = [];
				this.changeCategory(value, grade)
			},
			changeCategory2(value) {
				let grade = 2;
				this.categoryList3 = [];
				this.changeCategory(value, grade)
			},
			changeCategory3(value) {
				let grade = 3;
				this.changeCategory(value, grade)
			},
			changeCategory(value, grade) {
				console.log(value, grade)
				if (value) {
					this.$http.post(this.$api.GET_INDLIST, {
						pid: value
					}).then(res => {
						console.log(res);
						let data = res.data.data;
						if (grade === 1) {
							this.categoryList2 = [];
							data.map(i => {
								this.categoryList2.push({
									label: i.name,
									value: i.id
								})
							})
						} else if (grade === 2) {
							this.categoryList3 = [];
							data.map(i => {
								this.categoryList3.push({
									label: i.name,
									value: i.id
								})
							})
						}

					}, err => {
						this.$api.errcallback(err);
					}).catch(err => {
						this.$api.errcallback(err);
					})
				} else {
					this.$http.post(this.$api.GET_INDLIST, {
						pid: 0
					}).then(res => {
						console.log(res);
						this.categoryList1 = [];
						let data = res.data.data;
						data.map(i => {
							this.categoryList1.push({
								label: i.name,
								value: i.id
							})
						})
					}, err => {
						this.$api.errcallback(err);
					}).catch(err => {
						this.$api.errcallback(err);
					})
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
			changeHint() {
				var _this = this;
				var timer = setTimeout(function () {
					_this.hint = false;
					if (_this.hint = false) {
						clearTimeout(timer);
					}
				}, 3000)
			},
			getBank(query) {
				let bankSet = new Set();
				this.bankList = [];
				if (query) {
					setTimeout(() => {
						for (let key in bank) {
							if (new RegExp(query).test(bank[key].bank)) {
								bankSet.add(bank[key].bank)
							}
						}
						Array.from(bankSet).map(i => {
							this.bankList.push({
								label: i,
								value: i
							})
						});
					},1)
				} else {
					setTimeout(() => {
						for (let key in bank) {
							bankSet.add(bank[key].bank)
						}
						Array.from(bankSet).map(i => {
							this.bankList.push({
								label: i,
								value: i
							})
						});
					},1)
				}
			},
			sure() {
				for (let k in this.formItem) {
					this.formItem[k] = "";
				}
				this.category1 = '';
				this.category2 = '';
				this.category3 = '';
				this.modal1 = false;
			}
		},
		computed: {
			ruleValidate: function () {
				return {
					name: [this.emptyRule],
					sn: [this.emptyRule],
					tyshxydm: [this.emptyRule,
						{validator: codeLength, trigger: 'blur'},],
					legal_person: [this.emptyRule],
					organization: [this.emptyRule],
					bank: [this.emptyRule],
					bank_card: [this.emptyRule],
					change: [this.emptyRule],
					contact: [this.emptyRule],
					telphone: [this.emptyRule,
						{ min: 11,max:11, message: '手机号码必须为11位', trigger: 'blur'},
						{validator: telphone, trigger: 'blur'},
					],
					email: [this.emptyRule,
						{type: 'email', message: '邮箱格式不对', trigger: 'blur'}],
					officephone1: [this.emptyRule],
					officephone2: [this.emptyRule, {
						validator: officeReg, trigger: 'blur'
					}],
					fax1: [this.emptyRule],
					fax2: [this.emptyRule, {
						validator: officeReg, trigger: 'blur'
					}],
					address: [this.emptyRule],
					zipcode: [this.emptyRule]
				}
			}
		},
		watch: {
			hint: function () {
				this.changeHint();
			},
			'$route':function () {
				this.getBank();
				this.changeCategory();
				console.log(this.$route.query)
				if (!!this.$route.query.userDetail){
					this.formItem.id = this.$route.query.userDetail.id;
					this.formItem.name= this.$route.query.userDetail.name;
					this.formItem.sn = this.$route.query.userDetail.sn;
					this.formItem.tyshxydm = this.$route.query.userDetail.tyshxydm;
					this.formItem.legal_person = this.$route.query.userDetail.legal_person;
					this.formItem.organization = this.$route.query.userDetail.organization;
					this.formItem.bank = this.$route.query.userDetail.bank;
					this.formItem.bank_card = this.$route.query.userDetail.bank_card;
					this.category1 = this.$route.query.userDetail.category.split(',')[0];
					this.category2 = this.$route.query.userDetail.category.split(',')[1];
					this.category3 = this.$route.query.userDetail.category.split(',')[2];
					this.formItem.grade = this.$route.query.userDetail.grade;
					this.formItem.contact = this.$route.query.userDetail.contact;
					this.formItem.res_s = [this.$route.query.userDetail.province,this.$route.query.userDetail.city,this.$route.query.userDetail.county];
					this.formItem.address = this.$route.query.userDetail.address;
					this.formItem.zipcode = this.$route.query.userDetail.zipcode;
					this.formItem.telphone = this.$route.query.userDetail.telphone;
					this.formItem.email = this.$route.query.userDetail.email;
					this.formItem.officephone1 = this.$route.query.userDetail.officephone.split('-')[0];
					this.formItem.officephone2 = this.$route.query.userDetail.officephone.split('-')[1];
					this.formItem.fax1 = this.$route.query.userDetail.fax.split('-')[0];
					this.formItem.fax2 = this.$route.query.userDetail.fax.split('-')[1];
				}else {
					for (let key in this.formItem){
						this.formItem[key] = ''
					}
				}
			}

		},
		mounted() {
			this.getBank();
			this.changeCategory();
			console.log(this.$route.query)
			if (!!this.$route.query.userDetail){
				this.formItem.id = this.$route.query.userDetail.id;
				this.formItem.name= this.$route.query.userDetail.name;
				this.formItem.sn = this.$route.query.userDetail.sn;
				this.formItem.tyshxydm = this.$route.query.userDetail.tyshxydm;
				this.formItem.legal_person = this.$route.query.userDetail.legal_person;
				this.formItem.organization = this.$route.query.userDetail.organization;
				this.formItem.bank = this.$route.query.userDetail.bank;
				this.formItem.bank_card = this.$route.query.userDetail.bank_card;
				this.category1 = this.$route.query.userDetail.category.split(',')[0];
				this.category2 = this.$route.query.userDetail.category.split(',')[1];
				this.category3 = this.$route.query.userDetail.category.split(',')[2];
				this.formItem.grade = this.$route.query.userDetail.grade;
				this.formItem.contact = this.$route.query.userDetail.contact;
				this.formItem.res_s = [this.$route.query.userDetail.province,this.$route.query.userDetail.city,this.$route.query.userDetail.county];
				this.formItem.address = this.$route.query.userDetail.address;
				this.formItem.zipcode = this.$route.query.userDetail.zipcode;
				this.formItem.telphone = this.$route.query.userDetail.telphone;
				this.formItem.email = this.$route.query.userDetail.email;
				this.formItem.officephone1 = this.$route.query.userDetail.officephone.split('-')[0];
				this.formItem.officephone2 = this.$route.query.userDetail.officephone.split('-')[1];
				this.formItem.fax1 = this.$route.query.userDetail.fax.split('-')[0];
				this.formItem.fax2 = this.$route.query.userDetail.fax.split('-')[1];
			}
		}
	}
</script>

<template>
	<div class="AddClient">
		<Card class="AddClientBox">
			<i class="iconfont icon-fanhui1 back" @click="$router.go(-1)"
			   style="position: absolute;top: 14px;left: 10px;"></i>
			<h3 slot="title" style="padding-left:40px;">{{$route.query.userDetail.name?'修改客户信息':'添加新用户'}}</h3>
			<Form :model="formItem" :label-width="120" :rules="ruleValidate">
				<h4>基本信息</h4>
				<Row>
					<Col span="12">
					<Form-item label="企业全称" prop='name' class='mgb_20'>
						<Input v-model="formItem.name" placeholder="请输入企业全称"></Input>

					</Form-item>
					</Col>
					<Col span="5">
					<Form-item label="企业简称" prop='sn' class='mgb_20'>
						<Input v-model="formItem.sn" placeholder="请输入企业简称"></Input>
					</Form-item>
					</Col>
					<Col span="20" offset='2' class="hint" style='margin-top:10px'>
					<p>需与当地政府颁发的商业许可证书或企业注册证上的企业名称完全一致，信息审核审核成功后，企业名称不可修改。</p>
					</Col>
				</Row>
				<Row>
					<Col span="12">
					<Form-item label="统一社会信用代码" prop='tyshxydm' class='mgb_20'>
						<Input v-model="formItem.tyshxydm" placeholder="请输入15位或18位的统一社会信用代码"></Input>
					</Form-item>
					</Col>
				</Row>
				<Row>
					<Col span="8">
					<Form-item label="法人代表姓名" prop='legal_person' class='mgb_20'>
						<Input v-model="formItem.legal_person" placeholder="与营业执照上一致"></Input>
					</Form-item>
					</Col>
					<Col span="8">
					<Form-item label="组织机构代码" prop='organization' class='mgb_20'>
						<Input v-model="formItem.organization" placeholder="与营业执照上一致"></Input>
					</Form-item>
					</Col>
				</Row>
				<Row>

					<Col span="8">
					<Form-item label="选择开户银行" prop='bank' class='mgb_20'>
						<Select
								v-model="formItem.bank"
								filterable
								remote
								:remote-method="getBank"
								:loading="loading1">
							<Option :value="item.value" v-for='(item, index) in bankList' :key="index">{{item.label}}
							</Option>
						</Select>
					</Form-item>
					</Col>
					<Col span="8" v-if="$route.query.userDetail.bank">
					<Form-item label="开户银行" prop='bank' class='mgb_20'>
						<Input v-model="formItem.bank" placeholder="请如实填写"></Input>
					</Form-item>
					</Col>
				</Row>
				<Row>
					<Col span="8">
					<Form-item label="开户账号" prop='bank_card' class='mgb_20'>
						<Input v-model="formItem.bank_card" placeholder="请如实填写"></Input>
					</Form-item>
					</Col>
				</Row>
				<h4>业务信息</h4>
				<Row :gutter="10">
					<Form-item label="所属行业" class='mgb_20'>
						<Col span="6">
						<Select v-model="category1" placeholder="请选择" v-on:on-change='changeCategory1'>
							<Option :value='item.label' v-for='item in categoryList1'>{{item.label}}</Option>
						</Select>
						</Col>
						<Col span="4">
						<Select v-model="category2" placeholder="请选择" v-on:on-change='changeCategory2'
						        v-if="categoryList2.length>0">
							<Option :value='item.label' v-for='item in categoryList2'>{{item.label}}</Option>
						</Select>
						</Col>
						<Col span="4">
						<Select v-model="category3" placeholder="请选择" v-on:on-change='changeCategory3'
						        v-if="categoryList3.length>0">
							<Option :value='item.label' v-for='item in categoryList3'>{{item.label}}</Option>
						</Select>
						</Col>
					</Form-item>
				</Row>
				<Row :gutter="10">
					<Form-item label="用电等级" prop='grade' class='mgb_20'>
						<Col span="6">
						<Select v-model="formItem.grade" placeholder="请选择">
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
						</Select>
						</Col>

					</Form-item>
				</Row>
				<h4>联系信息</h4>
				<Row :gutter="10">
					<Form-item label="通讯地址" class='address'>
						<Col span="8">
						<FormItem>
							<al-selector v-model="formItem.res_s" level=2 />
						</FormItem>
						</Col>
						<Col span="8">
						<FormItem prop='address'>
							<Input v-model="formItem.address" placeholder="请输入详细通讯地址"></Input>
						</FormItem>
						</Col>
						<Col span="2">
						<FormItem prop='zipcode'>
							<Input v-model="formItem.zipcode" placeholder="邮政编码" :maxlength="6"></Input>
						</FormItem>
						</Col>
					</Form-item>
				</Row>
				<Row>
					<Col span="8">
					<Form-item label="联系人" prop='contact' class='mgb_20'>
						<Input v-model="formItem.contact" placeholder="请输入联系人姓名"></Input>
					</Form-item>
					</Col>
				</Row>
				<Row>
					<Col span="8">
					<Form-item label="联系人电话" prop='telphone' class='mgb_20'>
						<Input v-model="formItem.telphone" placeholder="请输入联系人手机号码"></Input>
					</Form-item>

					</Col>
					<Col span="12" class="hint2">
					<p>该手机号用于开通系统登录账号，请确保手机号正确</p>
					</Col>
				</Row>
				<Row>
					<Col span="8">
					<Form-item label="电子邮箱" prop='email' class='mgb_20'>
						<Input v-model="formItem.email" placeholder="请输入联系人邮箱号码"></Input>
					</Form-item>
					</Col>
					<Col span="12" class="hint2">
					<p>接收账号密码和找回密码使用。</p>
					</Col>
				</Row>
				<Row>
					<Col span="8">
					<Form-item label="办公电话" class='mgb_20 mgb_15'>
						<Col span="8">
						<FormItem prop='officephone1'>
							<Input v-model="formItem.officephone1" placeholder="-" id='tel1' :maxlength="4"></Input>
						</FormItem>
						</Col>
						<Col span="1" style="text-align: center;line-height: 34px;">
						-</Col>
						<Col span="15">
						<FormItem prop='officephone2'>
							<Input v-model="formItem.officephone2" placeholder="请输入办公电话" :maxlength="8"></Input>
						</FormItem>
						</Col>
					</Form-item>
					</Col>
					<Col span="8">
					<Form-item label="传真号码" style='margin-bottom: 0px'>
						<Col span="8">
						<FormItem prop='fax1'>
							<Input v-model="formItem.fax1" placeholder="-" :maxlength="4"></Input>
						</FormItem>
						</Col>
						<Col span="1" style="text-align: center;line-height: 34px;">
						-</Col>
						<Col span="15">
						<FormItem prop='fax2'>
							<Input v-model="formItem.fax2" placeholder="请输入传真号码" :maxlength="8"></Input>
						</FormItem>
						</Col>
					</Form-item>
					</Col>
				</Row>
				<Row>
					<Col span="12" style="text-align: center;line-height: 34px;margin-top:10px">
					<Form-item style='margin-bottom: 0'>
						<Button type="primary" @click="addClient('goht')">保存并添加合同</Button>
						<Button type="primary" style="margin-left: 30px" @click='addClient()'>保存</Button>
						<Button type="ghost" style="margin-left: 30px" @click="$router.go(-1)">取消</Button>
						<div v-if='hint' style="margin-left: 60px;">
							<Alert type="warning" show-icon style='width: 200px;margin:2px auto;color: red;'>内容不能为空
							</Alert>
						</div>
					</Form-item>
					</Col>
				</Row>
			</Form>
		</Card>
		<Modal
				title="提示"
				v-model="modal1"
				class-name="vertical-center-modal"
		>
			<p>{{msg}}</p>
			<div slot="footer">
				<Button type="primary" @click="sure">确定</Button>
			</div>
		</Modal>
	</div>
</template>

<style scoped>
	/* 表单每一项的下外边距 */

	.mgb_20 {
		margin-bottom: 20px;
	}

	.mgb_15 {
		margin-bottom: 12px;
	}

	.AddClient {
		padding: 20px;
		line-height: 1;
		max-height: 914px;
		overflow: hidden;
	}

	.AddClientBox {
		background-color: #fff;
		height: 905px;
		overflow: hidden;
	}

	.AddClientBox h4 {
		font-size: 14px;
		padding-left: 6px;
		margin-bottom: 15px;
	}

	.AddClientBox form {
		margin-left: 20%;
	}

	.AddClientBox form input {
		width: 280px;
		height: 30px;
		border: 1px solid #CCCCCC;
		padding-left: 10px;
		margin-bottom: 15px;
	}

	.hint {
		color: #ccc;
		top: -12px;
		left: 12px;
		font-size: 12px;
	}

	.hint2 {
		color: #ccc;
		margin-left: 10px;
		line-height: 34px;
	}

	.jiancheng {
		display: inline;
		margin-left: 30px;
		margin-right: 22px;
		font-size: 14px;
		color: #000;
	}

	select {
		width: 200px;
		height: 30px;
		margin-right: 10px;
		margin-bottom: 15px;
		border-color: #ccc;
		padding-left: 10px;
	}

	.addClientSubmit {
		width: 100%;
		height: 38px;
		text-align: center;
		margin-top: 40px;
	}

	.addClientSubmit button {
		width: 120px;
		height: 38px;
		font-size: 14px;
		color: #fff;
		background-color: #108CEE;
		margin-left: 14px;
	}

	.addClientSubmit .saveAdd {
		width: 200px;
	}

	.addClientSubmit .save {
		width: 70px;
	}

	.addClientSubmit .cancel {
		width: 70px;
		color: #108CEE;
		border: 1px solid #108CEE;
		background-color: #fff;
	}

	.vertical-center-modal {
		display: flex;
		align-items: center;
		justify-content: center;

	}

	.vertical-center-modal .ivu-modal {
		top: 0;
	}
</style>
