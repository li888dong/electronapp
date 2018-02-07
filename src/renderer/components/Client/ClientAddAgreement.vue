<script>
    import MyUpload from '../Tool/upLoad.vue'
    import bank from '../../../../static/bank.json'
    import {telphone, codeLength, officeReg,email} from '../../../../static/verification.js'
import { defaultCoreCipherList } from 'constants';

    export default {
        components: {'my-upload': MyUpload},
        name: 'addAgreement',
        data() {
            return {
                cus_id: '',
                file: '',
                bol: false,
                addList: {
                    id:undefined,
                    cus_name:'',
                    con_no: '',
                    way: '',
                    ly_used: '',
                    ly_maxload: '',
                    bndyjdl: '',
                    bndyjzdfh: '',
                    htscdz: '',
                    bank_name:'',
                    bank_account:'',
                    address:'',
                    zipcode:'',
                    contact:'',
                    phone:'',
                    fax:'',
                    sub_branch:'',
                    way_param: ''
                },
                index: '',
                res_s:[],
                id: '',
                hint2: false,
                hint: false,
                isKong: false,
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
                modal2: false,
                tip: '',
                emptyRule: {required: true, message: '内容不能为空', trigger: 'blur'},
				changeRule:{required: true, message: '内容不能为空', trigger: 'change'},
                address1: '',
                address2: '',
                address3: '',
                loading1:false,
                bankList:[],
                way:'',
                data1:'',
                data2:'',
                msg:'',
                changeBol:false
            }
        },
        methods: {
            //文件上传
            uploadComplete(result) {
                console.log(result);
                this.addList.htscdz = result.fileid;
                this.addCompact();
                this.bol = false;
            },
            selectSuccess(file) {
                this.file = file;
                this.changeBol = true;
                console.log(this.changeBol);
            },
            addCompact(){
                console.log(this.addList.htscdz,'0000');
                if (this.addList.cus_name && this.addList.con_no && this.addList.way&&this.data1&&this.data2&&this.addList.way_param) {
                                this.addList.ly_used = Number(this.addList.ly_used);
                                this.addList.ly_maxload = Number(this.addList.ly_maxload);
                                this.addList.bndyjdl = Number(this.addList.bndyjdl);
                                this.addList.bndyjzdfh = Number(this.addList.bndyjzdfh);
                                this.addList['deadline']= this.data1 + '/' + this.data2;
                                this.addList['province'] = this.res_s[0];
                                this.addList['city'] = this.res_s[1];
                                this.addList['county'] = this.res_s[2];
                                this.$http.post(this.$api.POWER_ADD_COMPACT,this.addList).then(res => {
                                    console.log('添加合同', res);

                                    if (res.data.status ==='1') {
                                        for (let key in this.addList) {
                                            this.addList[key] = '';
                                        }
                                        this.file = '';
                                        for (let key in this.data1) {
                                            this.data1 = ''
                                        }
                                        this.$router.push({path:'/client-detail',query:{target:'contract'}});
                                    }else{
                                        this.msg = res.data.msg;
                                        this.modal2 = true;
                                    }
                                }, err => {
                                    this.$api.errcallback(err);
                                }).catch(err => {
                                    this.$api.errcallback(err);
                                })
                    } else {
                        this.hint2 = true;
                        console.log(13324);
                    }
                 },
            changeStatus() {
                   console.log(this.addList);
                   console.log(this.addList.way_param);
                   console.log(this.addList.bank_name);
                if(this.file&&!this.changeBol&& this.addList.cus_name && this.addList.con_no && this.addList.way&&this.addList.way_param&&this.data1&&this.data2){
                    this.bol = false;
                    this.addCompact();
                } else if (this.file &&this.changeBol && this.addList.cus_name && this.addList.con_no && this.addList.way&& this.addList.way&&this.addList.way_param&&this.data1&&this.data2) {
                    this.bol = true;
                } else {
                    this.hint2 = true;
                    console.log(2392304903);
                }
            },
            saveBtn() {
                let i;
                console.log(this.addList.way);
                let div = document.getElementsByClassName('htfs-container');

                if (this.addList.way === '分成模式') {
                    if (this.way_param1 && this.way_param2) {
                        this.addList.way_param = this.way_param1 + ":" + this.way_param2;
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
                        this.addList.way_param = this.way_param3;
                        for (i = 0; i < div.length; i++) {
                            div[i].style.display = 'none';
                        }
                        this.way = "保底模式";
                    }
                } else if (this.addList.way === '分成保底') {
                    if (this.way_param4 && this.way_param5 && this.way_param6) {
                        this.addList.way_param = this.way_param4 + "," + this.way_param5 + ":" + this.way_param6;
                        for (i = 0; i < div.length; i++) {
                            div[i].style.display = 'none';
                        }
                        this.way = "分成保底";
                    }
                } else if (this.addList.way === '分成叠加') {
                    if (this.way_param7 && this.way_param8 && this.way_param9) {
                        this.addList.way_param = this.way_param7 + ":" + this.way_param8 + "," + this.way_param9;
                        for (i = 0; i < div.length; i++) {
                            div[i].style.display = 'none';
                        }
                        this.way = "分成叠加";
                    }
                } else if (this.addList.way === '固定服务') {
                    if (this.way_param10 !== '') {
                        this.addList.way_param = this.way_param10;
                        for (i = 0; i < div.length; i++) {
                            div[i].style.display = 'none';
                        }
                        this.way = "固定服务";
                    }
                }
              },
            isEmpty(obj) {
                for (let key in obj) {
                    if (obj[key] != '') {
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
            time1(value){
               console.log(value,4444);
               this.data1 = value;
            },
            time2(value){
                console.log(value,55555);
                this.data2=value;
            },
            updateCompact(id) {
                this.$http.post(this.$api.SALE_CONTRACT_DETAIL,{id:id}).then(res=>{
                    console.log('售电合同详情',res);
                    if(res.data.status === '1'){
                         let data = res.data.data;
                         this.addList.id = id;
                         this.addList.cus_name = this.cus_name;
                         var div = document.getElementById('name');
                         var input = div.getElementsByClassName('ivu-input')[0];
                         input.readOnly = true;
                         this.addList.con_no = data.con_no;
                         this.addList.way = data.way;
                         this.addList.ly_used = data.ly_used;
                        this.addList.ly_maxload = data.ly_maxload;
                        this.addList.bndyjdl = data.bndyjdl;
                        this.addList.bndyjzdfh = data.bndyjzdfh;
                        this.addList.htscdz = data.htscdz;
                        this.addList.bank_name = data.bank_name;
                        this.addList.bank_account = data.bank_account;
                        this.addList.address = data.address;
                        this.addList.zipcode = data.zipcode;
                        this.addList.contact = data.contact;
                        this.addList.phone = data.phone;
                        this.addList.fax = data.fax;
                        this.addList.sub_branch = data.sub_branch;
                        this.addList.way_param = data.way_param;
                        this.data1 = data.deadline.split('/')[0];
                        this.data2 = data.deadline.split('/')[1];
                        if(this.addList.way_param&&this.addList.way){
                            switch(this.addList.way){
                               case '分成模式':
                                     this.way_param1 = this.addList.way_param.split(':')[0];
                                     this.way_param2 = this.addList.way_param.split(':')[1];
                                break;
                                case '保底模式':
                                     this.way_param3 = this.addList.way_param;
                                break;
                                case '分成保底':
                                      this.way_param4 = this.addList.way_param.split(',')[0];
                                      this.way_param5 = this.addList.way_param.split(',')[1].split(':')[0];
                                      this.way_param6 = this.addList.way_param.split(',')[1].split(':')[1];
                                break;
                                case '分成叠加':
                                     this.way_param7 = this.addList.way_param.split(',')[0].split(':')[0];
                                     this.way_param8 = this.addList.way_param.split(',')[0].split(':')[1];
                                     this.way_param9 = this.addList.way_param.split(',')[1];
                                break;
                                case '固定服务':
                                     this.way_param10 = this.addList.way_param;
                                break;
                                default:
                                break;
                           }
                        }
                        this.file = data.filename;
                        this.changeBol = false;
                    }
                },err=>{
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.$api.errcallback(err);
                })
            },
            addressChange(value) {
                this.addTableList.yddz = value;
                console.log(value);
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
            },
            '$route':function () {
                this.getBank();
            }
        },
        computed:{
            addValidate:function(){
                return {
                    cus_name:[this.emptyRule],
                    con_no: [this.emptyRule],
                    ly_used: [this.emptyRule],
                    ly_maxload: [this.emptyRule],
                    bndyjdl: [this.emptyRule],
                    bndyjzdfh: [this.emptyRule],
                    way:[this.changeRule],
                    bank_name :[this.changeRule],
                    bank_account:[this.emptyRule],
                    address:[this.emptyRule],
                    zipcode:[this.emptyRule],
                    contact:[this.emptyRule],
                    phone:[this.emptyRule,{validator: officeReg, trigger: 'blur'}],
                    fax:[this.emptyRule,{validator: officeReg, trigger: 'blur'}],
                    sub_branch:[this.emptyRule]
                }
            },
            cus_name:function(){
                return this.$store.getters.cus_name;
            }
        },
        mounted() {
            this.getBank();
            if (this.$route.query.cus_name && this.$route.query.active ==='添加') {
                this.addList.cus_name = this.$route.query.cus_name;
                var div = document.getElementById('name');
                var input = div.getElementsByClassName('ivu-input')[0];
                input.readOnly = true;
                // console.log(this.$route.query.cus_id)
            } else {
                this.addList.cus_name = '';
            }
            this.cus_id = this.$route.query.cus_id || this.$store.getters.cus_id;
            if(this.$route.query.id){
                  this.updateCompact(this.$route.query.id);
            }
        }
    }
</script>
<template>
	<div class="main-container relative addAgreement">
		<Card class="main-container-panel">
			<h3 slot="title">{{$route.query.active?'添加售电合同':'修改售电合同'}}</h3>
			<Form class="form-container" :label-width='130' ref='addList' :model='addList' :rules='addValidate'>
                <Row>
                    <Col span='9'>
                         	<FormItem label='客户名称' prop='cus_name'>
					            <Input v-model='addList.cus_name' id='name'></Input>
				            </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span='9'>
				     <FormItem label='合同编号' prop="con_no">
                            <Input v-model='addList.con_no'></Input>
                    </FormItem>
                    </Col>
                </Row>
                 <Row>
                     <Col span='9'>
                              <FormItem label='合同周期'>
                                       <DatePicker
                                             type="date"
                                             placement="bottom-end"
                                             placeholder="请选择"
                                             class='add_hetong' v-on:on-change="time1"
                                            :value='data1'></DatePicker>&nbsp;<DatePicker
                                             type="date"
                                             placement="bottom-end"
                                             placeholder="请选择"
                                             class='add_hetong' v-on:on-change="time2"
                                             :value='data2'></DatePicker>
                             </FormItem> 
                     </Col>
                </Row>
                <Row>
                    <Col span='9'>
                       <FormItem label='合同方式' prop='way' class='mgb_0'>
                                <Select v-model="addList.way" placeholder="合同模式">
						             <Option v-for="item in htfsList" :value="item.value" :key="item.value">{{item.label}} </Option>
					            </Select>
                                 <div style="height: 13px;line-height: 13px;color: #ccc;font-siz:12px">
						             <span v-if='way == "分成模式"'>分成比例：{{way_param1}} : {{way_param2}}</span>
						             <span v-if='way == "保底模式"'>保底价格：{{way_param3}} </span>
						             <span v-if='way == "分成保底"'>保底价格：{{way_param4}},分成比例：{{way_param5}} : {{way_param6}} </span>
						             <span v-if='way == "分成叠加"'>分成比例：{{way_param7}} : {{way_param8}},叠加价格:{{way_param9}} </span>
						             <span v-if='way == "固定服务"'>服务费率:{{way_param10}}</span>
					            </div>
					     </FormItem>
                    </Col>
                    <Col span='15'>
                            <FormItem class="mgl_0">
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
                            </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span='9'>
                         <FormItem label='上年度用电量' prop='ly_used'>
					         <Input v-model='addList.ly_used'></Input>
				        </FormItem>
                    </Col>
                    <Col span='9' offset='2'>
                       <FormItem label='上年度最大负荷量' prop='ly_maxload'>
					         <Input v-model='addList.ly_maxload'></Input>
				       </FormItem>
                    </Col>
                </Row>
               <Row>
                   <Col span='9'>
                        <FormItem label='本年度预计电量' prop='bndyjdl'>
					         <Input v-model='addList.bndyjdl'></Input>
				        </FormItem>
                   </Col>
                   <Col span='9' offset='2'>
                         <FormItem label='本年度预计最大负荷' prop='bndyjzdfh'>
					         <Input v-model='addList.bndyjzdfh'></Input>
				        </FormItem>
                   </Col>
               </Row>
				
				<Row>
                    <FormItem label='合同上传' class='myTab'>
					<my-upload @complete="uploadComplete" :url='$api.UPLOAD_COMPACT' @selectComplete='selectSuccess'
					           :beginUpload='bol'>
						<Input placeholder='请选择文件' class='file' v-model='file'></Input>
						<a>选择文件</a>
					</my-upload>
					<br>
					<i class="typeTip">仅支持PDF格式</i><span>{{tip}}</span><br/>
                   </FormItem>
                </Row>
                <h4>开户行信息</h4>
                <Row>
                    <Col span='9'>
                         <FormItem label="选择开户银行">
                              <Row>
                                 <Col span='8'>
                                    <FormItem  prop='bank_name'>
                                        <Select
								             v-model = "addList.bank_name"
								             filterable
                                             clearable
								             remote
								             :remote-method="getBank"
								             :loading="loading1"
                                             class="bank_list">
							                 <Option :value="item.value" v-for='(item, index) in bankList' :key="index">{{item.label}}</Option>
						                 </Select>
                                     </FormItem>
                                </Col>
                               <Col span='15' offset='1'>
                                     <FormItem prop='sub_branch'>
                                         <Input class="bank_infor" placeholder='添加开户信息 如"郑州花园路支行"' v-model="addList.sub_branch"></Input>
                                    </FormItem>
                               </Col>
                             </Row>
				        </FormItem>
                    </Col>
                </Row>
				<Row>
                    <Col span='9'>
                          <FormItem label='银行账户' prop='bank_account'>
                             <Input v-model='addList.bank_account'></Input>
                         </FormItem>  
                    </Col>
                </Row>
               <Row>
                    <FormItem label="通讯地址" class='address'>
                         <Row>
                             <Col span="8">
                                 <FormItem>
                                     <al-selector data-type='name' v-model="res_s" level=2 />
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
               <Row>
                   <Col span='9'>
                        <FormItem label='联系人' prop='contact'>
                            <Input v-model='addList.contact' placeholder="联系人姓名"></Input>
                       </FormItem> 
                   </Col>
               </Row>
                <Row>
                    <Col span='9'>
                         <FormItem label='固定电话' prop='phone'>
                             <Input v-model='addList.phone' placeholder="格式：区号-办公固定号码"></Input>
                         </FormItem> 
                    </Col>
                </Row>
                <Row>
                    <Col span='9'>
                        <FormItem label='传真号码' prop='fax'>
                             <Input v-model='addList.fax' placeholder="格式：区号-传真号码"></Input>
                         </FormItem> 
                    </Col>
                </Row>
                 <Row>
                    <FormItem>
					     <div class="btn-group">
						     <Button type="primary" class="mgr-20" @click='changeStatus()'>保存</Button>
						     <Button type="default" @click="$router.go(-1)">取消</Button>
					    </div>
					     <div v-if='hint2'>
						    <Alert type="warning" show-icon
						       style='width: 460px;margin:5px auto;color: red;margin-left:450px' class='cont_empty'>合同编号，合同周期，合同方式及上传合同不能为空！
						    </Alert>
					    </div>
                     </FormItem>
                 </Row>
			</Form>
			<!-- 错误提示蒙版 -->
			<Modal v-model="modal2" width="360" class-name="vertical-center-modal">
				<p slot="header" style="color:#f60;text-align:center">
					<Icon type="information-circled"></Icon>
					<span>警告</span>
				</p>
				<div style="text-align:center">
					<p style="color: red">{{msg}}</p>
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
    .addAgreement{
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
        margin-bottom: 15px;
        padding-left:5px;
        padding-bottom:5px;
        border-bottom:1px solid #e3e8ee;
        margin-left:-100px;
    }
	.addAgreement .form-container {
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
        margin-left:5px;
	}

	.htfs-container span {
		display: inline !important;
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
        margin-top:20px;
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
	.mgb_0 {
		margin-bottom: 0;
	}

	.user_address {
		margin-bottom: 0px;
	}
    .myTab {
		margin-bottom: 2px;
	}
    .address{
      width:100%;
     }
     .code{
      width:100%;
     }
     .add_hetong{
        width:49.3%;
     }
     .bank_infor{
         width:100%;
     }
    @media (min-width: 1365px) and (max-width: 1919px) {
        .cont_empty{
            margin-left:200px !important;
        }
       .addAgreement .form-container {
        margin-left: 10%;
        margin-top:20px;

      }
        
    }
</style>