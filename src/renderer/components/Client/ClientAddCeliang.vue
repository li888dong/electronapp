<script>
     import {ztmcLength,telphone} from '../../../../static/verification.js'
    export default {
        name: 'addceliang',
        data() {
            return {
                addShow: false,
                wayShow: false,
                dataList1: [],
                dataList2: [
                    {
                        value: '1',
                        label: '1'
                    }, {
                        value: '1',
                        label: '1',
                    }
                ],
                dataList3: [
                    {
                        value: '1',
                        label: '表计',
                    }, {
                        value: '2',
                        label: '终端'
                    }, {
                        value: '3',
                        label: '终端表计',
                    }
                ],
                dataList4: [
                    {
                        value: '高压测',
                        label: '高压侧',
                    }, {
                        value: '低压测',
                        label: '低压侧'
                    }
                ],
                dataList5: [],
                dataList6: [],
	            byqList:[],
                name: '',
                no: '',
                capacity: '',
                model5: '',
                model4: '',
                modal2: false,
                terminalList: {
                    ztmc: '',
                    ztwz: '',
                    ztbh: '',
                    user_no: '',
                    byqxx: '',
                    type: '',
                    wir_id: '',
                    ptxs: '',
                    pt1: '',
                    pt2: '',
                    ctxs: '',
                    ct1: '',
                    ct2: '',
                    ccbh: '',
                    sccj: '',
                    cgrq: '',
                    azrq: '',
                    sim: '',
                    ydyys: '',
                    origratio: ''
                },
                hint: false,
                wiringList: [],
                txdz: '',
                port: '',
                ruleValidate: {
                    ztmc: [{required: true, message: '内容不能为空', trigger: 'blur'},
                        {validator: ztmcLength, trigger: 'blur'}],
                    ztwz: [{required: true, message: '内容不能为空', trigger: 'blur'}],
                    ztbh: [{required: true, message: '内容不能为空', trigger: 'blur'}],
                    user_no: [{required: true, message: '内容不能为空', trigger: 'change'}],
                    byqxx: [{required: true, message: '内容不能为空', trigger: 'blur'}],
                    type: [{required: true, message: '内容不能为空', trigger: 'blur'}],
                    ptxs: [{required: true, message: '内容不能为空', trigger: 'blur'}],
                    pt1: [{required: true, message: '内容不能为空', trigger: 'blur'}],
                    pt2: [{required: true, message: '内容不能为空', trigger: 'blur'}],
                    ctxs: [{required: true, message: '内容不能为空', trigger: 'blur'}],
                    ct1: [{required: true, message: '内容不能为空', trigger: 'blur'}],
                    ct2: [{required: true, message: '内容不能为空', trigger: 'blur'}],
                    ccbh: [{required: true, message: '内容不能为空', trigger: 'blur'}],
                    sccj: [{required: true,type:'number', message: '内容不能为空', trigger: 'change'}],
                    cgrq: [{required: true, type: 'date', message: '内容不能为空', trigger: 'change'}],
                    azrq: [{required: true, type: 'date', message: '内容不能为空', trigger: 'change'}],
                    sim: [{required: true, message: '内容不能为空', trigger: 'blur'},
                        {validator: telphone, trigger: 'blur'}],
                    ydyys: [{required: true, message: '内容不能为空', trigger: 'blur'}],
                    origratio: [{required: true, message: '内容不能为空', trigger: 'blur'}]
                },
                factoryname:'',
                modal3:false,
                nameEmpty:false,

            }
        },
        methods: {
            isEmpty(obj) {
                for (let key in obj) {
                    if (obj[key] !== "") {
                        return false
                    }
                }
                return true
            },
            showUnit: function (value) {
                this.byqList.map(i=>{
                    if (i.no===value){
                        this.name = i.name;
                        this.capacity = i.capacity;
                        this.terminalList.byqxx = i.no + "/" + i.name + "/" + i.capacity;
                    }
                });
                this.model2 = value;
                this.addShow = true;
            },
            showWay: function (value) {
                this.model4 = value;
                this.wayShow = true;
                if (value === "高压测") {
                    this.dataList5 = [{
                        value: '三相三线',
                        label: '三相三线'
                    }]

                } else if (value === '低压测') {
                    this.dataList5 = [
                        {
                            value: '三相三线',
                            label: '三相三线',
                        }, {
                            value: '三相四线',
                            label: '三相四线'
                        }
                    ]
                }
            },
            addTerminal(goDetil) {
                if (!this.isEmpty(this.terminalList)) {
                    this.terminalList.cgrq = this.terminalList.cgrq.Format('yyyy-MM-dd');
                    this.terminalList.azrq = this.terminalList.azrq.Format('yyyy-MM-dd');
                    this.no = parseInt(this.no);
                    this.terminalList.ptxs = parseInt(this.terminalList.ptxs);
                    this.terminalList.ctxs = parseInt(this.terminalList.ctxs);
                    this.terminalList.origratio = parseFloat(this.terminalList.origratio);
                    for (var i = 0; i < this.wiringList.length; i++) {
                        if (this.model4 + this.model5 == this.wiringList[i].wiring) {
                            this.terminalList.wir_id = this.wiringList[i].id;
                        }
                    }
                    this.$http.post(this.$api.CLIENT_ADD_TERMINAL, {
                        com_id: this.$store.getters.com_id,
                        cus_id: this.cus_id,
                        clientid: this.terminalList.ztbh,
                        user_no: this.terminalList.user_no,
                        trans_id: this.no,
                        type: this.terminalList.type,
                        wir_id: this.terminalList.wir_id,
                        pt: this.terminalList.ptxs,
                        pt_ratio1: this.terminalList.pt1,
                        pt_ratio2: this.terminalList.pt2,
                        ct: this.terminalList.ctxs,
                        ct_ratio1: this.terminalList.ct1,
                        ct_ratio2: this.terminalList.ct2,
                        serial_no: this.terminalList.ccbh,
                        factory: this.terminalList.sccj,
                        pur_date: this.terminalList.cgrq,
                        mailing_address: this.txdz,
                        port: this.port,
                        sim_no: this.terminalList.sim,
                        operators: this.terminalList.ydyys,
                        is_install: 1,
                        install_date: this.terminalList.azrq,
                        mea_name: this.terminalList.ztmc,
                        userratio: this.terminalList.origratio,
                        used_com: this.$store.getters.cus_name,
                        mea_address: this.terminalList.ztwz
                    }).then(res => {
                        console.log("添加终端", res);
                        if (res.data.status==='1') {
                            if (goDetil) {
                                this.$router.push('client-detail')
                            } else {
                                this.success();
                                for (let k in this.terminalList) {
                                    this.terminalList[k] = '';
                                }
                                this.no = '';
                            }
                        } else {
                            this.$Modal.error({
                                content: '添加失败'
                            })
                        }
                    }, err => {
                        this.$Modal.error({
                            content: '添加失败'
                        })
                        this.$api.errcallback(err);
                    }).catch(err => {
                        this.$api.errcallback(err);
                    })
                } else {
                    this.hint = true;

                }
            },
            addTransformer() {
                this.$http.post(this.$api.CLIENT_ADD_TRANSFORMER, {
                    cus_id: this.cus_id,
                    name: this.name,
                    no: this.no,
                    capacity: this.capacity
                }).then(res => {
                    if (res.data.status==='1'){

                        console.log("添加变压器", res);
                        this.terminalList.byqxx = this.no + "/" + this.name + "/" + this.capacity;
                        this.modal2 = false;
                        this.getByq()
                    }
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            timeout() {
                var _this = this;
                var timer= setTimeout(function () {
                    _this.hint = false;
                    if(_this.hint =false){
                        clearTimeout(timer);
                    }
                }, 3000);
            },
            userNum() {
                this.$http.post(this.$api.CLIENT_HOOKUP, {cus_id: this.cus_id}).then(res => {
                    console.log('户号信息', res);
                    if(res.data.status==='1'){
                          var data = res.data.data;
                       for (var i = 0; i < data.length; i++) {
                           var obj = {
                            value: data[i].user_no,
                            label: data[i].user_no
                           }
                        this.dataList1.push(obj);
                      }
                    }
                  
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            wiringWay() {
                this.$http.post(this.$api.TERMINAL_WIRING_WAY).then(res => {
                    console.log("接线方式", res);
                    var data = res.data.data;
                    if (res.data.status) {
                        for (var i = 0; i < data.length; i++) {
                            var obj = {
                                id: data[i].id,
                                wiring: data[i].location + data[i].wiring
                            }
                            this.wiringList.push(obj);
                        }
                    }

                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            success() {
                this.$Message.success('添加成功');
            },
            changeValue() {
                if (this.terminalList.pt1 && this.terminalList.pt2) {
                    this.terminalList.ptxs = this.terminalList.pt1 / this.terminalList.pt2
                    this.terminalList.ptxs = this.terminalList.ptxs.toFixed(2);
                }
            },
            ctValueChange() {
                if (this.terminalList.ct1 && this.terminalList.ct2) {
                    this.terminalList.ctxs = this.terminalList.ct1 / this.terminalList.ct2;
                    this.terminalList.ctxs = this.terminalList.ctxs.toFixed(2);
                }
            },
	        getByq(){
                this.$http.post(this.$api.CLIENT_GET_TRANSFORMER, {
                    cus_id: this.cus_id
                }).then(res => {
                    console.log("获取变压器", res);
                    if(res.data.status === '1'){
                        this.byqList = res.data.data;
                    }else{
                        this.byqList=[];
                    }
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
	        },
            factoryList(){
              this.$http.post(this.$api.CLIENT_FACTORY).then(res=>{
                  console.log('生产厂家列表',res);
                  if(res.data.status === '1'){
                     var data = res.data.data;
                     for(let i=0;i<data.length;i++){
                         var obj = {
                              value:data[i].fname,
                              label:data[i].id
                         }
                         this.dataList6.push(obj);
                     }

                  }
              },err=>{
                  this.$api.errcallback(err);
              }).catch(err=>{
                   this.$api.errcallback(err);
              })
            },
            addFactory(){
                  if(this.factoryname){
                    this.$http.post(this.$api.CLIENT_ADD_FAcTORY,{fname:this.factoryname}).then(res=>{
                        console.log('添加生产厂家',res);
                        if(res.data.status === '1'){
                            this.factoryList();
                            this.modal3 = false;

                        }
                    },err=>{
                         this.$api.errcallback(err);
                    }).catch(err=>{
                         this.$api.errcallback(err);
                    })
                  }else{
                      this.nameEmpty = true;
                 }
            },
            disappear(){
                 var _this = this;
                 var timer2=setTimeout(function () {
                    _this.nameEmpty = false;
                    if(_this.nameEmpty=false){
                        clearTimeout(timer2);
                    }
                }, 3000);
            }
        },
        computed:{
           cus_id:function(){
              return this.$store.getters.cus_id;
           }
        },
        watch: {
            hint: function () {
                this.timeout();
            },
            nameEmpty:function(){
                 this.disappear();
            },
            cus_id:function(){
                this.getByq();
            }
        },
        mounted() {

            this.userNum();
            this.wiringWay();
            this.getByq();
            this.$Message.config({
                top: 200,
                duration: 3
            });
            this.factoryList();
        }
    }
</script>
<template>
	<div class="client-container">
		<Card class="addceliang-panel">
			<h3 slot="title">配置终端</h3>
			<div class="from-container">
				<h4 class="title">基本信息</h4>
				<div class="terminal-container">
					<Form :label-width="85" :model='terminalList' :rules="ruleValidate" ref='terminalList'>
						<FormItem label="终端名称" class='mgb_20' prop='ztmc'>
							<Input placeholder='汉字、数字或字母表示，不超过15个字符' v-model='terminalList.ztmc'></Input>
						</FormItem>
						<FormItem label="终端位置" class='mgb_20' prop='ztwz'>
							<Input placeholder="请输入终端安装位置" v-model='terminalList.ztwz'></Input>
						</FormItem>
						<FormItem label="逻辑地址" class='mgb_20' prop='ztbh'>
							<Input placeholder="请输入终端编号" v-model='terminalList.ztbh'></Input>
						</FormItem>
						<FormItem label="所属户号" class='mgb_20' prop='user_no'>
							<Select placeholder='请选择户号' v-model='terminalList.user_no' style='width:300px;'>
								<Option v-for="item in dataList1" :value='item.value' :key='item.value'>
									{{item.label}}
								</Option>
							</Select>
						</FormItem>
						<FormItem label="变压器信息" class='mgb_20 trans' prop='byqxx'>
							<Select style="width:300px;color:black" placeholder="请选择或添加变压器名称" v-model="no"
							        v-on:on-change='showUnit'>
								<Option v-for="item in byqList" :value="item.no">{{item.name}}
								</Option>
							</Select><span class="add" @click="modal2 = true" style="cursor: pointer;margin-left:10px;">添加</span>
							<span v-show='addShow'>变压器容量单位: <span class="add"
							                                      style="margin-left: 10px;">10KVA</span></span>
							<p v-if="terminalList.byqxx" style="color: #999999;position: absolute;bottom: -26px">编号/名称/容量 : {{terminalList.byqxx}}</p>
						</FormItem>
						<FormItem label="终端类型" class='mgb_20' prop='type'>
							<Select v-model="terminalList.type" style="width:300px" placeholder="请选择终端类型">
								<Option v-for="item in dataList3" :value="item.value" :key="item.value">{{item.label}}
								</Option>
							</Select>
						</FormItem>
						<FormItem label="监测位置" class="mgb_20">
							<Select v-model="model4" style="width:300px" placeholder="请选择终端位置" v-on:on-change='showWay'>
								<Option v-for="item in dataList4" :value="item.value" :key="item.value">{{item.label}}
								</Option>
							</Select><Select v-model="model5" style="width:150px;margin-left:10px;" placeholder="接线方式"
							                 v-show='wayShow'>
							<Option v-for="item in dataList5" :value="item.value" :key="item.value">{{item.label}}
							</Option>
						</Select>
						</FormItem>
						<FormItem label="用户倍率" prop='origratio' class='mgb_10 mgb_20'>
							<Input v-model='terminalList.origratio'></Input>
						</FormItem>
						<h3 class="sub_title">设备参数</h3>
						<FormItem label='PT变化' class="mgb_10 mgb_20">
							<Row>
								<Col span='5'>
								<FormItem>
									<Row>
										<Col span='9'>
										<FormItem prop='pt1'><Input style="width:100%;" v-model='terminalList.pt1'></Input></FormItem></Col>
										<Col span='3' style='text-align: center;'>:</Col>
										<Col span='9'>
										<FormItem prop='pt2'>
											<Input  style="width:100%;" v-model='terminalList.pt2'
											       v-on:on-change='changeValue'></Input>
										</FormItem>
										</Col>
									</Row>
								</FormItem>
								</Col>
								<Col span='6'>
								<FormItem label='PT系数'>
									<Row>
										<Col span='10'>
										<FormItem>
											<Input style="width:120px;" v-model='terminalList.ptxs' readonly
											       number></Input>
										</FormItem>
										</Col>
									</Row>
								</FormItem>
								</Col>
								<Col span='6'>
								<FormItem label='CT变化'>
									<Row>
										<Col span='6'>
										<FormItem prop='ct1'>
											<Input style="width:100%;" v-model='terminalList.ct1'></Input>
										</FormItem>
										</Col>
										<Col span='2' style='text-align: center;'>:</Col>
										<Col span='6'>
										<FormItem prop='ct2'>
											<Input style="width:100%;" v-model='terminalList.ct2'
											       v-on:on-change="ctValueChange"></Input>
										</FormItem>
										</Col>
									</Row>
								</FormItem>
								</Col>
								<Col span='6'>
								<FormItem label="CT系数" style='margin-left: -20px'>
									<Row>
										<Col span='10'>
										<FormItem>
											<Input style="width:120px;" v-model='terminalList.ctxs' readonly></Input>
										</FormItem>
										</Col>
									</Row>
								</FormItem>
								</Col>
							</Row>
						</FormItem>
						</Col>
						</Row>
						</FormItem>
						<h3 class="sub_title">设备信息</h3>
						<FormItem label="出厂编号" class='mgb_20'>
							<Row>
								<Col span='4'>
								<FormItem prop='ccbh'>
									<Input class="width_183" v-model='terminalList.ccbh'></Input>
								</FormItem>
								</Col>
								<Col span='8'>
								<FormItem label='生产厂家' class='mgl_10'>
									<Row>
										<Col span='18' class='factory_name'>
										<FormItem prop='sccj'>
											<Select v-model="terminalList.sccj" class="width_183" placeholder="请选择生产厂家">
												<Option v-for="item in dataList6" :value="item.label">
													{{item.value}}
												</Option>
											</Select><span class="add" @click="modal3 = true" style="cursor: pointer;margin-left:10px;">添加</span>
										</FormItem>
										</Col>
									</Row>
								</FormItem>
								</Col>
								<Col span='6' class='mgl_20'>
								<FormItem label='采购日期'>
									<Row>
										<Col span='10'>
										<FormItem prop='cgrq'>
											<DatePicker type="date" placeholder='请选择采购日期' class='width_183'
											            placement="top"
											            v-model='terminalList.cgrq'></DatePicker>
										</FormItem>
										</Col>
									</Row>
								</FormItem>
								</Col>
								<Col span='6'>
								<FormItem label='安装日期'>
									<Row>
										<Col span='10'>
										<FormItem prop='azrq'>
											<DatePicker type="date" placeholder='请选择安装日期' class='width_183'
											            placement="top"
											            v-model='terminalList.azrq'></DatePicker>
										</FormItem>
										</Col>
									</Row>
								</FormItem>
								</Col>
							</Row>
						</FormItem>
						<FormItem label="主站地址" class='mgb_20'>
							<Row>
								<Col span='4'>
								<FormItem>
									<Input class="width_183" v-model='txdz'></Input>
								</FormItem>
								</Col>
								<Col span='6'>
								<FormItem label='主站端口' class='mgl_10'>
									<Row>
										<Col span='10'>
										<FormItem>
											<Input class="width_183" v-model='port' :maxlength='4'></Input>
										</FormItem>
										</Col>
									</Row>
								</FormItem>
								</Col>
							</Row>
						</FormItem>
						<FormItem label="SIM卡号" class="last mgb_20">
							<Row>
								<Col span='4'>
								<FormItem prop='sim'>
									<Input class="width_183" v-model='terminalList.sim'></Input>
								</FormItem>
								</Col>
								<Col span='6'>
								<FormItem label='移动运营商' class='mgl_10'>
									<Row>
										<Col span='10'>
										<FormItem prop='ydyys'>
											<Select class='width_183' v-model='terminalList.ydyys'>
												<Option value='中国移动'>中国移动</Option>
												<Option value='中国联通'>中国联通</Option>
												<Option value='中国电信'>中国电信</Option>
												<Option value='物联网'>物联网</Option>
											</Select>
										</FormItem>
										</Col>
									</Row>
								</FormItem>
								</Col>
							</Row>
						</FormItem>
					</Form>
				</div>
			</div>
			<div class="btn-group" style="text-align: center;margin-top:25px">
				<Button type="primary" @click="addTerminal()">保存并继续添加</Button>
				<Button type="default" class="mglr_10" @click="addTerminal('goDetil')">保存</Button>
				<Button type="default" @click="$router.go(-1)">取消</Button>
			</div>
			<div v-show='hint'>
				<Alert type="warning" show-icon style='width: 200px;margin:2px auto;color: red'>内容不能为空</Alert>
			</div>
			<Modal
					v-model="modal2"
					title="变压器信息"
					solt="添加变压器" class-name="vertical-center-modal">
				<div slot="header">
					<h3 class="title" style="border: none;font-weight: normal;display: inline-block;margin-left: 15px;">
						添加变压器</h3>
				</div>
				<div class="modal-container">
					<label>
						<span>变压器名称:</span><Input v-model="name"></Input>
					</label><br>
					<label>
						<span>变压器编号:</span><Input v-model='no'></Input>
					</label><br>
					<label>
						<span>变压器容量:</span><Input v-model='capacity'></Input><span>KvA</span>
					</label><br>
				</div>
				<div slot="footer">
					<Button type="primary" @click='addTransformer()'>保存</Button>
					<Button type="default" @click="modal2 = false">取消</Button>
				</div>
			</Modal>
            <Modal
                    v-model="modal3"
                    title="生产厂家信息"
                    solt="添加生产厂家" class-name="vertical-center-modal">
                <div slot="header">
                    <h3 class="title" style="border: none;font-weight: normal;display: inline-block;margin-left: 15px;">
                        添加生产厂家</h3>
                </div>
                <div class="modal-container">
                    <label>
                        <span>生产厂家名称:</span><Input v-model="factoryname"></Input> 
                        <div style="height: 14px;"><span style="margin-left: 90px;margin-top: 10px;color: red" v-if='nameEmpty'>内容不能为空</span></div>
                    </label>
                </div>
                <div slot="footer">
                    <Button type="primary" @click='addFactory()'>保存</Button>
                    <Button type="default" @click="modal3 = false">取消</Button>
                </div>
            </Modal>
		</Card>
	</div>
</template>
<style scoped>
	.addceliang-panel {
		overflow: hidden;
		font-size: 14px;
		height: 853px;
	}

	.title {
		padding-left: 5px;
		font-size: 16px;
		margin-bottom: 5px;
	}

	.from-container {
		padding-left: 50px;
	}

	.label-container {
		padding-left: 30px;
	}

	.terminal-container label {
		margin-top: 10px;
		display: inline-block;
	}

	.terminal-container label input, .terminal-container label select {
		width: 290px;
		height: 30px;
		vertical-align: middle;
	}

	.terminal-container span {
		display: inline-block;
		vertical-align: middle;
		margin-left: 20px;
	}

	.add {
		color: #3EC7F5;
	}

	.width_80 {
		width: 80px;
	}

	.width_183 {
		width: 183px !important;
	}

	.input_span {
		width: 80px;
		text-align: right;
		margin-right: 10px;
	}

	.btn-group {
		float: none;
		width: 100%;
		height: 40px;
		line-height: 40px;
		margin-top: 10px;
	}

	.modal-container {
		margin: 20px 40px;
	}

	.modal-container label {
		display: inline-block;
		vertical-align: middle;
		margin-bottom: 20px;
		margin-left: 20px;
	}

	.modal-container label input {
		width: 200px;
		margin-left: 10px;
	}

	.modal-container .ivu-input-type {
		margin-left: 10px;
		width: 200px;
	}

	.ivu-input {
		width: 300px;
	}

	.ivu-input-wrapper {
		width: 300px;
	}

	.text-right {
		text-align: right;
	}

	.ivu-modal-header .title {
		font-size: 16px;
		font-weight: bold;
	}

	.sub_title {
		font-size: 14px;
		height: 28px;
		line-height: 28px;
	}

	.last {
		margin-bottom: 10px !important;
	}

	.vertical-center-modal {
		display: flex; 
		align-items: center;
		justify-content: center;
	}

	.vertical-center-modal .ivu-modal {
		top: 0;
	}

	.mglr_10 {
		margin-left: 10px;
		margin-right: 10px;
	}

	.mgb_20 {
		margin-bottom: 18px;
	}

	.mgb_10 {
		margin-bottom: 5px;
	}
    @media (min-width: 1365px) and (max-width: 1919px) {
        .mgl_10{
            margin-left:9px;
        }
        .from-container{
            padding-left: 20px;
        }
        .mgl_20{
            margin-left: -15px;
        }
        .factory_name{
            width:70%;
        }
    }

</style>