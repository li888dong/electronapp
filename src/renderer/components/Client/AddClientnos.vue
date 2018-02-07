<script>
    import MyUpload from '../Tool/upLoad.vue'
    import bank from '../../../../static/bank.json'
    import {lengthNum} from '../../../../static/verification.js'

    export default {
        components: {'my-upload': MyUpload},
        name: 'addAgreement',
        data() {
            return {
                addList:{
                    id:undefined,
                    user_no:'',
                    address:'',
                    zipcode:'',
                    cyjjq:'',
                    unit_type:'',
                    max_demand:'',
                    category:'',
                    vol_level:'',
                    direct_cap:'',
                    price_type:'',
                    tariff:'',
                    tpm:'',
                    trans_rate:'',
                    tariff_code:'',
                    power_factor:'',
                    cont_capacity:''            
                },
                res_s:[],
                hint2:false,
                emptyRule: {required: true, message: '内容不能为空', trigger: 'blur'},
                changeRule:{required: true, message: '内容不能为空', trigger: 'change'},
                changeRule2:{required: true, type:'number',message: '内容不能为空', trigger: 'change'},
                list1:[],
                list2:[],
                user_name:'',
                list3:[],
                categoryList1: [],
				categoryList2: [],
				categoryList3: [],
				category1: '',
				category2: '',
                category3: '',
                categoryindex:1,
                addressBol:false
            }
        },
        methods: {
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
						if(this.$route.query.id){
							this.$http.post(this.$api.USERNOS_DETAIL,{id:this.$route.query.id}).then(res=>{
									if(res.data.status ==='1'){
                                        let data = res.data.data;
                                        if(data.price_type){
										this.addList.price_type = data.price_type;
										console.log(this.addList.price_type);
										var name = this.addList.price_type.split(',')[1];
										for(let i=0;i< this.categoryList2.length;i++){
											if(name == this.categoryList2[i].label ){
                                                this.category2 = this.categoryList2[i].value;
											}
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
						 if(this.$route.query.id){
							this.$http.post(this.$api.USERNOS_DETAIL,{id:this.$route.query.id}).then(res=>{
									if(res.data.status ==='1'){
                                        let data = res.data.data;
                                        if(data.price_type){
                                            	this.addList.price_type = data.price_type;
										        console.log(this.addList.price_type);
										       var name = this.addList.price_type.split(',')[2];
										       for(let i=0;i< this.categoryList3.length;i++){
										        if(name == this.categoryList3[i].label ){
                                                    this.category3 = this.categoryList3[i].value;
										        }
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
						if(this.$route.query.id){
							this.$http.post(this.$api.USERNOS_DETAIL,{id:this.$route.query.id}).then(res=>{
									if(res.data.status ==='1'){
                                        let data = res.data.data;
                                        if(data.price_type){
										this.addList.price_type = data.price_type;
										console.log(this.addList.price_type);
										var name = this.addList.price_type.split(',')[0];
										for(let i=0;i< this.categoryList1.length;i++){
											if(name == this.categoryList1[i].label ){
                                                this.category1 = this.categoryList1[i].value;
											}
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
            powerClasses(){
                this.$http.post(this.$api.POWER_CLASSES).then(res=>{
                    console.log('用电类型',res);
                    if(res.data.status==='1'){
                        var arr = res.data.data;
                        var arr2 = [];
                        var obj = {};
                        for(let i=0;i<arr.length;i++){
                             obj ={
                                 value:arr[i].id,
                                 label:arr[i].name,
                             }
                            arr2.push(obj);
                        }
                        this.list1 = arr2;
                    }else{
                        this.list1=[];
                    }
                },err=>{
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.$api.errcallback(err);
                })
            },
            powerUnitClasses(){
                this.$http.post(this.$api.POWER_UNIT_CLASSES).then(res=>{
                    console.log('用电单位类别',res);
                    if(res.data.status==='1'){
                        var arr = res.data.data;
                        var arr2 =[];
                        var obj={};
                        for(let i=0;i<arr.length;i++){
                            obj={
                                value:arr[i].id,
                                label:arr[i].name,
                            }
                            arr2.push(obj);
                        }
                        this.list2 = arr2;
                    }else{
                        this.list2 =[];
                    }
                },err=>{
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.$api.errcallback(err);
                })
              },
            addClientsnos(){
                   this.addList['province'] = this.res_s[0];
                   this.addList['city'] = this.res_s[1];
                   this.addList['county'] = this.res_s[2];
                   this.addList['cus_id'] = this.cus_id;
                   if (this.categoryindex ===1) {
						this.addList.price_type = this.category1
					} else if (this.categoryindex === 2) {
						this.addList.price_type = this.category2
					} else if (this.categoryindex === 3) {
						this.addList.price_type = this.category3;
					}
                    if(this.user_name&&this.addList.user_no){
                   this.$http.post(this.$api.USER_NUM_ADD,this.addList).then(res=>{
                       console.log('添加用户户号',res);
                       if(res.data.status ==='1'){
                           for(let k in this.addList){
                               this.addList[k] = ''
                           };
                           this.res_s = '';
                           this.$router.push({path:'/client-detail',query:{target:'huhao'}});
                       }
                   },err=>{
                       this.$api.errcallback(err);
                   }).catch(err=>{
                       this.$api.errcallback(err);
                   })
                 }else{
                     this.hint2 = true;
                 }
              },
             addIndustry(){
                  this.$http.post(this.$api.INDUSTRY_AREA).then(res=>{
                      console.log('产业集聚地',res);
                      if(res.data.status ==='1'){
                          let arr =[];
                          arr = res.data.data;
                          var obj={};
                          let arr2 =[];
                          for(let i=0;i<arr.length;i++){
                              obj={
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
            usernoDetail(id){
                this.$http.post(this.$api.USERNOS_DETAIL,{id:id}).then(res=>{
                    console.log('户号详情',res);
                    if(res.data.status === '1'){
                         this.user_name = this.cus_name;
                         var div = document.getElementById('name');
                         var input = div.getElementsByClassName('ivu-input')[0];
                         input.readOnly = true;
                        this.addList = res.data.data;
                        if(this.addList.category){
                             this.addList.category = Number(this.addList.category);
                        }
                        if(this.addList.unit_type){
                             this.addList.unit_type = Number(this.addList.unit_type);
                        }
                        if(this.addList.cyjjq){
                             this.addList.cyjjq = Number(this.addList.cyjjq);
                        }
                        this.addressBol = true;
                        this.res_s = [this.addList.province,this.addList.city,this.addList.county];
                        // this.addressBol = false;
                        console.log(this.res_s);
                    }
                },err=>{
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.$api.errcallback(err);
                })
            },
            changeHint() {
				var _this = this;
				var timer = setTimeout(function () {
					_this.hint2 = false;
					if (_this.hint2 = false) {
						clearTimeout(timer);
					}
				}, 3000)
			},
        },
        watch: {
            res_s:function(newValue,oldValue){
                return this.res_s = newValue;
            },
            hint2: function () {
				this.changeHint();
			},
        },
        computed:{
            addValidate:function(){
                return {
                    user_no:[this.emptyRule,{validator:lengthNum, trigger: 'blur'}],
                    address:[this.emptyRule],
                    zipcode:[this.emptyRule],
                    cyjjq:[this.changeRule2],
                    unit_type:[this.changeRule2],
                    max_demand:[this.emptyRule],
                    category:[this.changeRule2],
                    vol_level:[this.changeRule],
                    direct_cap:[this.emptyRule],
                    Price_type:[this.changeRule],
                    tariff:[this.emptyRule],
                    tpm:[this.changeRule],
                    trans_rate:[this.emptyRule],
                    tariff_code:[this.emptyRule],
                    power_factor:[this.emptyRule],
                    cont_capacity:[this.emptyRule]  
                }
            },
            cus_id:function(){
                return this.$store.getters.cus_id;
            },
            cus_name:function(){
                return this.$store.getters.cus_name;
            } 
        },
        mounted() {
            this.powerClasses();
            this.powerUnitClasses();
            this.addIndustry();
            this.changeCategory();
            if (this.$route.query.cus_name && this.$route.query.active ==='添加') {
                this.user_name = this.$route.query.cus_name;
                var div = document.getElementById('name');
                var input = div.getElementsByClassName('ivu-input')[0];
                input.readOnly = true;
            } else {
                this.user_name = '';
            }
            if(this.$route.query.id){
                this.usernoDetail(this.$route.query.id);
            }
        }
    }
</script>
<template>
	<div class="main-container relative addClietnos">
		<Card class="main-container-panel">
			<h3 slot="title">{{$route.query.active?'添加户号':'修改户号'}}</h3>
			<Form class="form_container" :label-width='130' ref='addList' :model='addList' :rules='addValidate'>
                <Row>
                    <Col span='9'>
                        <FormItem label='用电单位名称'>
					       <Input v-model='user_name' id='name'></Input>
				        </FormItem>
                    </Col>
                </Row>
				<Row>
                    <Col span='9'>
                        <FormItem label='营销用户编号' prop="user_no">
					       <Input v-model='addList.user_no'></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span='9'>
                        <FormItem label='电价行业类别'>
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
                </Row>
                 <Row>
                   <Col span='9'>
                       <FormItem label='所属产业集聚地' prop='cyjjq'>
					        <Select v-model="addList.cyjjq"  placeholder="请选择所属集聚地">
						       <Option v-for='item in list3' :value="item.value" :key='item.value'>{{item.label}}</Option>
					        </Select>
                         </FormItem>
                   </Col>
               </Row>
				<Row>
                   <FormItem label="用电地址" class='address'>
                        <Row>
                             <Col span="8">
                                 <FormItem>
                                    <al-selector data-type='name' v-model="res_s" level=2 v-if='!addressBol'/>
                                    <al-selector data-type='name' v-model="res_s" level=2  v-if='addressBol'/>
                                </FormItem>
                            </Col>
                            <Col span="8" style="margin-left:10px">
                                <FormItem prop='address'>
                                    <Input v-model="addList.address" placeholder="请输入详细通讯地址" class="address"></Input>
                                </FormItem>
                            </Col>
                            <Col span="2" style="margin-left:10px">
                                <FormItem prop='zipcode'>
                                     <Input v-model="addList.zipcode" placeholder="邮政编码" :maxlength="6" class="code"></Input>
                                </FormItem>
                             </Col>
                         </Row>
                    </FormItem>
                </Row>
              
                <h4>户号参数信息</h4>
                <Row>
                    <Col span='9'>
                        <FormItem label='用电单元类型' prop='unit_type'>
                            <Select  v-model='addList.unit_type'>
                                <Option v-for='item in list2' :value="item.value" :key='item.value'>{{item.label}}</Option>
                           </Select>
                        </FormItem>
                    </Col>
                    <Col span='9' offset='2' class="relative">
                        <FormItem label='最大需量' prop='max_demand'>
                            <Input v-model='addList.max_demand'></Input><span class='danwei absolute'>MVA</span>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                        <Col span='9'>
                             <FormItem label='用电类别' prop='category'>
                                 <Select v-model='addList.category'>
						             <Option v-for='item in list1' :value="item.value" :key='item.value'>{{item.label}}</Option>
					             </Select>
                             </FormItem>
                        </Col>
                         <Col span='9' offset='2'>
                                <FormItem label='电价编码' prop='tariff_code'>
                                    <Input v-model='addList.tariff_code'></Input>
                                </FormItem>
                         </Col>
                       
                    </Row>
                    <Row>
                            <Col span='9'>
                                <FormItem label='用户电压等级' prop='vol_level'>
                                    <Select  v-model='addList.vol_level'>
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
                                </FormItem>
                            </Col>
                             <Col span='9' offset='2' class="relative">
                            <FormItem label='直供容量' prop='direct_cap'>
                                <Input v-model='addList.direct_cap'></Input><span class='danwei absolute'>MVA</span>
                            </FormItem>
                         </Col>
                          
                        </Row>
                        <Row>
                                <Col span='9'>
                                    <FormItem label='是否执行峰谷电价' prop='tpm'>
                                        <Select  v-model='addList.tpm'>
                                            <Option value="1">是</Option>
                                            <Option value="0">否</Option>
                                           </Select>
                                    </FormItem>
                                </Col>
                                <Col span='9' offset='2' class="relative">
                                    <FormItem label='目录电价' prop='tariff'>
                                        <Input v-model='addList.tariff'></Input><span class='danwei absolute'>MVA</span>
                                    </FormItem>
                                </Col>
                         </Row>
                         <Row>
                             <Col span='9'>
                              <FormItem label='功率因数' prop='power_factor'>
                                 <Input v-model="addList.power_factor"></Input>
                              </FormItem>
                             </Col>
                                <Col span='9' offset='2' class="relative">
                                    <FormItem label='输配电损耗率' prop='trans_rate'>
                                        <Input v-model='addList.trans_rate'></Input><span class='danwei absolute' style="right:-20px;">%</span>
                                    </FormItem>
                                </Col>
                         </Row>
                         <Row>
                             
                             <Col span='9'>
                              <FormItem label='合同容量' class="relative" prop='cont_capacity'>
                                  <Input v-model="addList.cont_capacity"></Input><span class='danwei absolute'>MVA</span>
                              </FormItem>
                             </Col>
                         </Row>
				<FormItem>
					<div class="btn-group">
						<Button type="primary" class="mgr-20" @click='addClientsnos'>保存</Button>
						<Button type="default" @click="$router.go(-1)">取消</Button>
					</div>
					<div v-if='hint2'>
						<Alert type="warning" show-icon  class='cont_empty'>公司名称及营销编号不能为空！</Alert>
					</div>
                </FormItem>
			</Form>
			<!-- 错误提示蒙版 -->
			<!-- <Modal v-model="modal2" width="360" class-name="vertical-center-modal">
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
            </Modal> -->
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
    .addClietnos{
        line-height: 1;
        max-height: 914px;
        overflow: hidden;
    }
    .main-container-panel{
        background-color: #fff;
		height: 905px;
		overflow: hidden;
    }
    .main-container-panel h4{
        padding-bottom: 5px;
        padding-left:5px;
        margin-bottom:15px;
        border-bottom: 1px solid #e3e8ee;
        margin-left:-100px;
    }
	.title {
		display: block;
	}
	.form_container{
		margin-left: 12%;
		margin-top: 20px;
	}

	.form_container label {
		display: inline-block;
	}
	.btn-group {
		width: 100%;
		float: none;
		text-align: center;
		margin-left: -270px;
        margin-top:100px;
	}
    .mgr-20{
        margin-right: 20px;
    }
	.ivu-modal-header {
		height: 60px;
		line-height: 60px;
		padding: 0;
	}

	.ivu-modal-content .ivu-modal-header .title {
		text-align: center;
	}
	.ivu-modal-footer .add-btn-group {
		text-align: center;
	}
	.biaoFrom td {
		height: 34px;
	}
    .address{
      width:100%;
     }
     .code{
      width:100%;
     }
     .add_hetong{
        width:200px;
     }
     .cont_empty{
        width: 460px;
        margin:10px auto;
        color: red;
        margin-left:450px
     }
     .danwei{
         color:#3EC7F5;
         top:0;
         right:-30px;
     }
    @media (min-width: 1365px) and (max-width: 1919px) {
      .form_container {
        margin-left: 15%;
        margin-top: 20px;
       } 
       .cont_empty{
            margin-left:200px;
        }
        .btn-group{
            margin-left:-170px;
        }
    }
</style>