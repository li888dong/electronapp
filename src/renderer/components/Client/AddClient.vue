<script>
	import bank from '../../../../static/bank.json'
	import {telphone, codeLength, officeReg,email} from '../../../../static/verification.js'

	export default {
		name: 'AddClient',
		data() {
			return {
				loading1: false,
				formItem: {
					id:undefined,
					name: '',
					sn: '',
					uid: '',
					tyshxydm:'',
					legal_person: '',
					is_admittance: '',
					idcard:'',
					major_product:'',
					status:'',
					reg_assets:'',
					qualification:'',
					reg_time:'',
					username:'',
					password:'',
					fullname:'',
					category: '',
					duty_id: '',
					address: '',
					zipcode: '',
					mobile: '',
					email: '',
					phone: '',
					fax: '',	
					c_address:'',
					put_date:'',

				},
				arr:[],
				res_s: [],
				res_ss:[],
				categoryList1: [],
				categoryList2: [],
				categoryList3: [],
				category1: '',
				category2: '',
				category3: '',
				hint: false,
				emptyRule: {required: true, message: '内容不能为空', trigger: 'blur'},
				changeRule:{required: true, message: '内容不能为空', trigger: 'change'},
				changeRule2:{required: true,type:'number', message: '内容不能为空', trigger: 'change'},
				msg: '',
				modal1: false,
				categoryindex:1,
				list1:[],
				list2:[],
				list3:[]
			}
		},
		methods: {
			addClient() {
				//手机号正则表达式
				var tel_reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
				//邮箱的正则表达式
				var email_reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
				//固定电话的正则验证
				var officephone_reg = /^[0-9]{3,4}\-[0-9]{3,8}$/;
				console.log(this.formItem);
				console.log(this.category1);
				if (this.formItem.name &&this.formItem.sn) {
					if (this.categoryindex ===1) {
						this.formItem.category = this.category1
					} else if (this.categoryindex === 2) {
						this.formItem.category = this.category2
					} else if (this.categoryindex === 3) {
						this.formItem.category = this.category3;
					}
					this.formItem['com_id'] = this.$store.getters.com_id;
					this.formItem['province'] = this.res_s[0],
					this.formItem['city'] = this.res_s[1],
					this.formItem['county'] = this.res_s[2],
					this.formItem['c_province'] = this.res_ss[0],
					this.formItem['c_city'] = this.res_ss[1],
					this.formItem['c_county'] = this.res_ss[2],
					this.$http.post(this.$api.CLIENT_ADD,this.formItem).then(res => {
						console.log(res);
						if (res.data.status === '1') {
							    this.$router.push({name:'client_lists'})
								for (let k in this.formItem) {
									this.formItem[k] = "";
								}
								this.category1 = '';
								this.category2 = '';
								this.category3 = '';
								
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
				this.categoryindex = 1;
				let grade = 1;
				this.categoryList2 = [];
				this.categoryList3 = [];
				this.changeCategory(value, grade);
				console.log(value,grade);
			},
			changeCategory2(value) {
				this.categoryindex = 2;
				let grade = 2;
				this.categoryList3 = [];
				this.changeCategory(value, grade);
				console.log(value,grade);
			},
			changeCategory3(value) {
				this.categoryindex = 3;
				console.log(value);
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
						if(this.$route.query.userDetail.active == '修改'){
							this.$http.post(this.$api.CLIENT_BASIC_INFO,{cus_id:this.$route.query.userDetail.id}).then(res=>{
									if(res.data.status ==='1'){
										let data = res.data.data;
										this.formItem.category = data.category;
										console.log(this.formItem.category);
										var name = this.formItem.category.split(',')[1];
										for(let i=0;i< this.categoryList2.length;i++){
											if(name == this.categoryList2[i].label ){
                                                this.category2 = this.categoryList2[i].value;
											}
										}
									}
								},err=>{
									this.$api.errcallback(err);
								}).catch(err=>{
									this.$api.errcallback(err);
								})
						}
						} else if (grade === 2) {
							this.categoryList3 = [];
							data.map(i => {
								this.categoryList3.push({
									label: i.name,
									value: i.id
								})
							})
								if(this.$route.query.userDetail.active == '修改'){
							this.$http.post(this.$api.CLIENT_BASIC_INFO,{cus_id:this.$route.query.userDetail.id}).then(res=>{
									if(res.data.status ==='1'){
										let data = res.data.data;
										this.formItem.category = data.category;
										console.log(this.formItem.category);
										var name = this.formItem.category.split(',')[2];
										for(let i=0;i< this.categoryList3.length;i++){
											if(name == this.categoryList3[i].label ){
                                                this.category3 = this.categoryList3[i].value;
											}
										}
									}
								},err=>{
									this.$api.errcallback(err);
								}).catch(err=>{
									this.$api.errcallback(err);
								})
						}
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
						console.log(res,"111");
						this.categoryList1 = [];
						let data = res.data.data;
						data.map(i => {
							this.categoryList1.push({
								label: i.name,
								value: i.id
							})
						})
						if(this.$route.query.userDetail.active == '修改'){
							this.$http.post(this.$api.CLIENT_BASIC_INFO,{cus_id:this.$route.query.userDetail.id}).then(res=>{
									if(res.data.status ==='1'){
										let data = res.data.data;
										this.formItem.category = data.category;
										console.log(this.formItem.category);
										var name = this.formItem.category.split(',')[0];
										for(let i=0;i< this.categoryList1.length;i++){
											if(name == this.categoryList1[i].label ){
                                                this.category1 = this.categoryList1[i].value;
											}
										}
									}
								},err=>{
									this.$api.errcallback(err);
								}).catch(err=>{
									this.$api.errcallback(err);
								})
						}
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
			},
			clientLeader(){
                this.$http.post(this.$api.USER_LEADER,{com_id: this.$store.getters.com_id}).then(res=>{
					console.log('客户负责人',res);
					if(res.data.status==='1'){
						var arr = res.data.data;
						var arr2 =[];
						var obj ={};
						for(let i= 0;i<arr.length;i++){
							obj ={
								 value:arr[i].id,
								 label:arr[i].fullname
							}
							arr2.push(obj);
						}
						this.list1 = arr2;
						if(!this.$route.query.userDetail.id){
							 this.formItem.uid = Number(this.$store.getters.uid);
							 console.log('ffvff');
						}
					}
				},err=>{
					this.$api.errcallback(err);
				}).catch(err=>{
					this.$api.errcallback(err);
				})
			},
			clientDuty(){
				this.$http.post(this.$api.CONTACS_DUTY).then(res=>{
					console.log('联系人职务',res);
					if(res.data.status==='1'){
                        var arr = res.data.data;
						var arr2 =[];
						var obj ={};
						for(let i= 0;i<arr.length;i++){
							obj ={
								 value:arr[i].id,
								 label:arr[i].name
							}
							arr2.push(obj);
						}
						this.list2 = arr2;
					}
				},err=>{
					 this.$api.errcallback(err);
				}).catch(err=>{
					this.$api.errcallback(err);
				})
			},
			clientLot(){
				this.$http.post(this.$api.GAIN_LOT).then(res=>{
					console.log('交易获取批次',res);
                    if(res.data.status==='1'){
                        var arr = res.data.data;
						var arr2 =[];
						var obj ={};
						for(let i= 0;i<arr.length;i++){
							obj ={
								 value:arr[i].id,
								 label:arr[i].name
							}
							arr2.push(obj);
						}
						this.list3 = arr2;
					}
				},err=>{
					this.$api.errcallback(err);
				}).catch(err=>{
					this.$api.errcallback(err);
				})
			},
			clientdetail(){
				this.$http.post(this.$api.CLIENT_BASIC_INFO,{cus_id:this.$route.query.userDetail.id}).then(res=>{
					console.log('客户详情',res);
					if(res.data.status ==='1'){
						 let data = res.data.data;
						 this.formItem.id = data.id;
						 this.formItem.name = data.name;
						 var div = document.getElementById('name');
                         var input = div.getElementsByClassName('ivu-input')[0];
                         input.readOnly = true;
						 this.formItem.sn = data.sn; 
						this.formItem.uid = data.uid;
						this.formItem.tyshxydm = data.tyshxydm;
						this.formItem.legal_person = data.legal_person;
						this.formItem.put_date = data.put_date;
						if(data.dealinfo){
						  if(data.dealinfo.is_admittance){
                             this.formItem.is_admittance = data.dealinfo.is_admittance;
						  }
						   
						   this.formItem.username = data.dealinfo.username;
						   this.formItem.password = data.dealinfo.password;
						   if(data.dealinfo.status){
                               this.formItem.status = data.dealinfo.status;
						   }
						   if(data.dealinfo.qualification){
                              this.formItem.qualification = Number(data.dealinfo.qualification);
						   }
						   
						}
						if(data.contact){
						   this.formItem.fullname = data.contact.fullname;
						   if(data.contact.duty_id){
                              this.formItem.duty_id = data.contact.duty_id;
						   }
						   this.formItem.address = data.contact.address;
						   this.formItem.zipcode = data.contact.zipcode;
						   this.formItem.mobile = data.contact.mobile;
						   this.formItem.email =  data.contact.email;
						   this.formItem.phone = data.contact.phone;
						   this.formItem.fax = data.contact.fax;
						}
						this.formItem.idcard = data.idcard;
						this.formItem.major_product = data.major_product;
						this.formItem.reg_assets = data.reg_assets;
						this.formItem.reg_time = data.reg_time;
						this.formItem.category = data.category;
						this.formItem.c_address = data.address;
						this.arr = [data.province,data.city,data.county];
						console.log(this.arr);
						this.res_s = this.arr;
					}
				},err=>{
					this.$api.errcallback(err);
				}).catch(err=>{
					 this.$api.errcallback(err);
				})
			}
		},
		computed: {
			ruleValidate: function () {
				return {
					name: [this.emptyRule],
					sn: [this.emptyRule],
					uid:[this.changeRule2],
					tyshxydm: [this.emptyRule,
						{validator: codeLength, trigger: 'blur'},],
					major_product:[this.emptyRule],
					legal_person: [this.emptyRule],
					is_admittance:[this.changeRule],
                    idcard:[this.emptyRule],
					status: [this.changeRule],
					reg_assets: [this.emptyRule],
					qualification:[this.changeRule2],
					reg_time:[this.emptyRule],
					username: [this.emptyRule],
					password: [this.emptyRule],
					duty_id:[this.changeRule2],
					fullname: [this.emptyRule],
					mobile: [this.emptyRule,
						{ min: 11,max:11, message: '手机号码必须为11位', trigger: 'blur'},
						{validator: telphone, trigger: 'blur'},
					],
					email: [this.emptyRule,
						{validator: email, trigger: 'blur'}],
					phone: [this.emptyRule, {
						validator: officeReg, trigger: 'blur'
					}],
					fax: [this.emptyRule, {
						validator: officeReg, trigger: 'blur'
					}],
					address: [this.emptyRule],
					c_address:[this.emptyRule],
					zipcode: [this.emptyRule],
					put_date:[this.emptyRule]
				}
			},
		},
		watch: {
			hint: function () {
				this.changeHint();
			},
			'$route':function () {
				this.getBank();
				this.changeCategory();
			},
			res_s:function(newValue,old){
			   console.log(newValue,old);
			   return this.res_s = newValue;
			   
			}

		},
		beforeMount(){
           
		},
		mounted() {
			this.getBank();
			this.changeCategory();
			this.clientLeader();
			this.clientDuty();
			this.clientLot();
			console.log(this.$route.query);
			console.log(this.res_s);
			if(this.$route.query.userDetail.active === '修改'){
				   this.clientdetail();
				   this.res_s = this.$route.query.dizhi;
			}	
		}
	}
</script>

<template>
	<div class="AddClient main-container">
		<Card class="AddClientBox">
			<h3 slot="title">{{$route.query.userDetail.active==='修改' ?'修改客户信息':'添加新用户'}}</h3>
			<Form :model="formItem" :label-width="120" :rules="ruleValidate" class="myForm">
				<!-- <h4>基本信息</h4> -->
				<Row>
					<Col span="9">
					<FormItem label="企业全称" prop='name'>
						<Input v-model="formItem.name" placeholder="需与营业执照名称完全一致，企业名称不可修改。" id='name'></Input>

					</FormItem>
					</Col>
					<Col span="5" offset='2'>
					<FormItem label="企业简称" prop='sn'>
						<Input v-model="formItem.sn" placeholder="请输入企业简称"></Input>
					</FormItem>
					</Col>
				</Row>
				<Row>
				  <Col span='9'>
					<FormItem label="所属行业">
						<Col span='8'>
						   <Select v-model='category1' v-on:on-change='changeCategory1'>
							<Option v-for='item in categoryList1' :value='item.value'>{{item.label}}</Option>
						   </Select>
						</Col>
						<Col span='7' offset='1'>
						   <Select v-model='category2'  v-on:on-change='changeCategory2' v-if='categoryList2.length>0'>
							<Option v-for='item in categoryList2' :value='item.value'>{{item.label}}</Option>
						   </Select>
						</Col>
						<Col span='7' offset='1'>
						   <Select v-model='category3' v-on:on-change='changeCategory3' v-if='categoryList3.length>0'>
							<Option v-for='item in categoryList3' :value='item.value'>{{item.label}}</Option>
						   </Select>
						</Col>
						
					</FormItem>
				  </Col>
				  <Col span='5' offset='2'>
					 <FormItem label='客户负责人' prop='uid'>
						 <Select v-model='formItem.uid'>
							 <Option v-for='item in list1' :value='item.value' :key='item.value'>{{item.label}}</Option>
						 </Select>
					 </FormItem>
				  </Col>
				</Row>
				<h4>客户基本信息</h4>
				<Row>
					<Col span="9">
					<FormItem label="营业执照注册号" prop='tyshxydm'>
						<Input v-model="formItem.tyshxydm" placeholder="请输入15位或18位的统一社会信用代码"></Input>
					</FormItem>
					</Col>
					 <Col span='9' offset='2'>
						<FormItem label="客户产品"  prop='major_product'>
							<Input  v-model='formItem.major_product' placeholder="请输入公司主要生产产品"></Input>
						</FormItem>
					     </Col>
					

				</Row>
				<Row>
					<Col span="9">
					<FormItem label="法人代表姓名" prop='legal_person'>
						<Input v-model="formItem.legal_person" placeholder="与营业执照上一致"></Input>
					</FormItem>
					</Col>
					<Col span="9" offset='2'>
					<FormItem label="是否已准入" prop='is_admittance'>
						<Select v-model='formItem.is_admittance'>
							<Option value='1'>是</Option>
							<Option value='0'>否</Option>
						</Select>
					</FormItem>
					</Col>
					
				</Row>
				<Row>
					<Col span="9">
					<FormItem label="法人身份证号" prop='idcard'>
						<Input v-model='formItem.idcard' placeholder="请输入有效身份证号"></Input>
					</FormItem>
					</Col>
					<Col span="9" offset='2'>
					<FormItem label="交易资格状态" prop='status'>
						 <Select v-model='formItem.status'>
							 <Option value='1'>已提交</Option>
							 <Option value='2'>已通过</Option>
							 <Option value='3'>已公示</Option>
							 <Option value='4'>变更</Option>
						 </Select>
					</FormItem>
					</Col>
				
				</Row>
				<Row>
					<Col span="9">
					<FormItem label="注册资本" prop='reg_assets'>
						<Input v-model="formItem.reg_assets" placeholder="请如实填写"></Input>
					</FormItem>
					</Col>
						<Col span="9" offset='2'>
						<FormItem label="交易资格获取批次" prop='qualification'>
							 <Select v-model='formItem.qualification'>
								 <Option v-for='item in list3' :value='item.value' :key='item.value'>{{item.label}}</Option>
							 </Select>
					</FormItem>
				 </Col>
					
				</Row>
				<Row>
						<Col span="9">
						<FormItem label="成立日期" prop='reg_time'>
							<Input v-model="formItem.reg_time" placeholder="请如实填写"></Input>
						</FormItem>
						</Col>
						<Col span="9" offset='2'>
							<FormItem label="交易中心账号" prop='username'>
								<Input v-model="formItem.username" placeholder="请如实填写"></Input>
						</FormItem>
					 </Col>
						
					</Row>
					<Row>
						<Col span="9">
						<FormItem label="投运日期" prop='put_date'>
							<Input v-model="formItem.put_date" placeholder="请如实填写"></Input>
						</FormItem>
						</Col>
						<Col span="9" offset='2'>
								<FormItem label="交易中心密码" prop='password'>
									<Input v-model="formItem.password" placeholder="请如实填写"></Input>
							</FormItem>
						 </Col>
					</Row>
					  <Row :gutter='10'>
						 <FormItem label="注册地址" class='address'>
						   <Col span="8">
						    <FormItem>
							<al-selector data-type='name' v-model="res_ss" level=2 />
						</FormItem>
						</Col>
						<Col span="8">
						<FormItem prop='c_address'>
							<Input v-model="formItem.c_address" placeholder="请输入详细通讯地址"></Input>
						</FormItem>
						</Col>
					    </FormItem>
					  </Row>
							
				<h4>联系人信息</h4>
				 <Row>
					<Col span="6">
						 <FormItem label="联系人姓名" prop='fullname'>
							 <Input v-model="formItem.fullname" placeholder="请输入联系人姓名"></Input>
						 </FormItem>
					</Col>
					<Col span="6" offset='1'>
					     <FormItem label="联系人职务" prop='duty_id'>
							<Select v-model="formItem.duty_id">
								<Option v-for='item in list2' :value='item.value' :key='item.value'>{{item.label}}</Option>
							</Select>
						</FormItem>
					 </Col>
					 <Col span="6" offset='1'>
						<FormItem label="联系人手机号" prop='mobile'>
							<Input v-model="formItem.mobile" placeholder="请输入联系人手机号码"></Input>
					   </FormItem>
					</Col>
				 </Row>
				 <Row>
						<Col span="6">
							<FormItem label="联系人固定电话" prop='phone'>
								 <Input v-model="formItem.phone" placeholder="格式：区号-固定电话"></Input>
							</FormItem>
						</Col>
						<Col span="6" offset='1'>
							<FormItem label="联系人传真号码" prop='fax'>
								 <Input v-model="formItem.fax" placeholder="格式：区号-传真号码"></Input>
							</FormItem>
						</Col>
						<Col span="6" offset='1'>
							<FormItem label="联系人邮箱地址" prop='email'>
							     <Input  v-model='formItem.email' placeholder="请输入邮箱"></Input>
							</FormItem>
						</Col>
				 </Row>
				<Row :gutter="10">
					<FormItem label="通讯地址" class='address'>
						<Col span="8">
						<FormItem>
							<al-selector   data-type='name' v-model="res_s" level=2 />
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
					</FormItem>
				</Row>
				<Row>
					<Col span="14" style="text-align: center;line-height: 34px;margin-top:80px">
					<Form-item style='margin-bottom: 0'>
						<Button type="primary" style="margin-left: 30px" @click='addClient()'>保存</Button>
						<Button type="ghost" style="margin-left: 30px" @click="$router.go(-1)">取消</Button>
						<div v-if='hint' style="margin-left: 60px;">
							<Alert type="warning" show-icon style='width:250px;margin:10px auto;color: red;'>公司名称及简称不能为空！
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
	.AddClient {
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
          margin-bottom: 15px;
          margin-left: -100px;
          border-bottom: 1px solid #e3e8ee;
		  width: 95%;
		  padding-left:5px;
          padding-bottom:5px;
	}

	.AddClientBox form {
		margin-left: 15%;
		margin-top:10px;
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
	select {
		width: 200px;
		height: 30px;
		margin-right: 10px;
		margin-bottom: 15px;
		border-color: #ccc;
		padding-left: 10px;
	}
	.vertical-center-modal {
		display: flex;
		align-items: center;
		justify-content: center;

	}

	.vertical-center-modal .ivu-modal {
		top: 0;
	}
	@media (min-width: 1365px) and (max-width: 1919px){
		.hint{
			left:25px;
		}
	}
</style>
