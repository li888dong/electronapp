<script>
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
                        value: '高压侧',
                        label: '高压侧',
                    }, {
                        value: '低压侧',
                        label: '低压侧'
                    }
                ],
                dataList5: [],
                dataList6: [
                    {
                        value: '1',
                        label: '1',
                    }, {
                        value: '1',
                        label: '1'
                    }, {
                        value: '1',
                        label: '1',
                    },
                    {
                        value: '1',
                        label: '1',
                    }
                ],
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
                    txdz: '',
                    port: '',
                    sim: '',
                    ydyys: '',
                    origratio: ''
                },
                hint: false,

            }
        },
        methods: {
            isEmpty(obj){
                for (let key in obj){
                    if (obj[key] !== ""){
                        return false
                    }
                }
                return true
            },
            showUnit: function (value) {
                this.model2 = value;
                this.addShow = true;
            },
            showWay: function (value) {
                this.model4 = value;
                this.wayShow = true;
                if (value === "高压侧") {
                    this.dataList5 = [
                        {
                            value: '三相三线',
                            label: '三相三线',
                        }, {
                            value: '三相四线',
                            label: '三相四线'
                        }
                    ]
                } else if (value === '低压侧') {
                    this.dataList5 = [{
                        value: '三相四线',
                        label: '三相四线'
                    }]
                }
            },
            addTerminal() {

                if (!this.isEmpty(this.terminalList)) {
                    this.terminalList.cgrq = this.terminalList.cgrq.Format('yyyy-MM-dd');
                    this.terminalList.azrq = this.terminalList.azrq.Format('yyyy-MM-dd');
                    this.no = parseInt(this.no);
                    this.terminalList.ptxs = parseInt(this.terminalList.ptxs);
                    this.terminalList.ctxs = parseInt(this.terminalList.ctxs);
                    this.terminalList.origratio = parseFloat(this.terminalList.origratio);
                    var wir_name = this.model4 + ":" + this.model5;
                    var wir_id = 0;
                    switch (wir_name) {
                        case "高压侧：三相三线":
                            wir_id = 1;
                            break;
                        case "高压侧：三相四线":
                            wir_id = 3;
                            break;
                        case "低压侧：三相四线":
                            wir_id = 2;
                            break;
                        default:
                            break;
                    };
                    this.$http.post(this.$api.CLIENT_ADD_TERMINAL, {
                        com_id: this.$store.getters.com_id,
                        cus_id: this.$store.getters.cus_id,
                        clientid: this.terminalList.ztbh,
                        serial_no: this.terminalList.ztwz,
                        user_no: this.terminalList.user_no,
                        trans_id: this.no,
                        type: this.terminalList.type,
                        wir_id: wir_id,
                        pt: this.terminalList.ptxs,
                        pt_ratio1: this.terminalList.pt1,
                        pt_ratio2: this.terminalList.pt2,
                        ct: this.terminalList.ctxs,
                        ct_ratio1: this.terminalList.ct1,
                        ct_ratio2: this.terminalList.ct2,
                        erial_no: this.terminalList.ccbh,
                        factory: this.terminalList.sccj,
                        pur_date: this.terminalList.cgrq,
                        mailing_address: this.terminalList.txdz,
                        port: this.terminalList.port,
                        sim_no: this.terminalList.sim,
                        operators: this.terminalList.ydyys,
                        is_install: 1,
                        install_date: this.terminalList.azrq,
                        mea_name: this.terminalList.ztmc,
                        userratio: this.terminalList.origratio,
                        used_com: '1',
                    }).then(res => {
                        console.log("添加终端", res);
                        this.$router.push('client-detail')
                    }, err => {
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
                    name: this.name,
                    no: this.no,
                    capacity: this.capacity
                }).then(res => {
                    console.log("添加变压器", res);
                    this.terminalList.byqxx = this.no + "/" + this.name + "/" + this.capacity;
                    this.modal2 = false;
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            timeout() {
                var _this = this;
                setTimeout(function () {
                    _this.hint = false;
                }, 3000);
            },
            userNum() {
                this.$http.post(this.$api.CLIENT_HOOKUP, {cus_id: this.$store.getters.cus_id}).then(res => {
                    console.log('户号信息', res);
                    var data = res.data.data;
                    for (var i = 0; i < data.length; i++) {
                        var obj = {
                            value: data[i].user_no,
                            label: data[i].user_no
                        }
                        this.dataList1.push(obj);
                    }
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },


        },
        watch: {
            hint: function () {
                this.timeout();
            }
        },
        mounted() {

            this.userNum();
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
					<Form :label-width="80">
						<FormItem label="终端名称" class='mgb_20'>
							<Input placeholder='汉字、数字或字母表示，不超过15个字符' v-model='terminalList.ztmc'></Input>
						</FormItem>
						<FormItem label="终端位置" class='mgb_20'>
							<Input placeholder="请输入终端安装位置" v-model='terminalList.ztwz'></Input>
						</FormItem>
						<FormItem label="终端编号" class='mgb_20'>
							<Input placeholder="请输入终端编号" v-model='terminalList.ztbh'></Input>
						</FormItem>
						<FormItem label="户号信息" class='mgb_20'>
							<Select placeholder='请选择户号' v-model='terminalList.user_no' style='width:300px;'>
								<Option v-for="item in dataList1" :value='item.value' :key='item.value'>
									{{item.label}}
								</Option>
							</Select>
						</FormItem>
						<FormItem label="变压器信息" class='mgb_20'>
							<Select v-model="terminalList.byqxx" style="width:300px" placeholder="请添加变压器名称"
							        v-on:on-change='showUnit' disabled>
								<Option :value="terminalList.byqxx" :key="terminalList.byqxx">{{terminalList.byqxx}}
								</Option>
							</Select><span class="add" @click="modal2 = true" style="cursor: pointer;margin-left:10px;">添加</span>
							<span v-show='addShow'>变压器容量单位: <span class="add"
							                                      style="margin-left: 10px;">10KVA</span></span>
						</FormItem>
						<FormItem label="终端类型" class='mgb_20'>
							<Select v-model="terminalList.type" style="width:300px" placeholder="请选择终端类型">
								<Option v-for="item in dataList3" :value="item.value" :key="item.value">{{item.label}}
								</Option>
							</Select>
						</FormItem>
						<FormItem label="监测位置" class="mgb_10 mgb_20">
							<Select v-model="model4" style="width:300px" placeholder="请选择终端位置" v-on:on-change='showWay'>
								<Option v-for="item in dataList4" :value="item.value" :key="item.value">{{item.label}}
								</Option>
							</Select><Select v-model="model5" style="width:150px;margin-left:10px;" placeholder="接线方式"
							                 v-show='wayShow'>
							<Option v-for="item in dataList5" :value="item.value" :key="item.value">{{item.label}}
							</Option>
						</Select>
						</FormItem>
						<h3 class="sub_title">设备参数</h3>
						<FormItem label="PT系数" class="mgb_10 mgb_20">
							<Input style="width:120px;" v-model='terminalList.ptxs'></Input>
							<span class="input_span">PT变化</span><Input style="width:56px;"
							                                           v-model='terminalList.pt1'></Input> : <Input
								style="width:56px;" v-model='terminalList.pt2'></Input><span
								class="input_span">CT系数</span><Input style="width:120px;"
							                                         v-model='terminalList.ctxs'></Input>
							<span class="input_span">CT变化</span><Input style="width:56px;"
							                                           v-model='terminalList.ct1'></Input> : <Input
								style="width:56px;" v-model='terminalList.ct2'></Input><span
								class="input_span">用户倍率</span><Input style="width:120px;"
							                                         v-model='terminalList.origratio'></Input>
						</FormItem>
						<h3 class="sub_title">设备信息</h3>
						<FormItem label="出厂编号" class='mgb_20'>
							<Input class="width_183" v-model='terminalList.ccbh'></Input>
							<span class="input_span">生产厂家</span><Select v-model="terminalList.sccj" class="width_183"
							                                            placeholder="请选择生产厂家">
							<Option v-for="item in dataList6" :value="item.value" :key="item.value">{{item.label}}
							</Option>
						</Select>
							<span class="input_span">采购日期</span>
							<DatePicker type="date" placeholder='请选择采购日期' class='width_183'
							            v-model='terminalList.cgrq'></DatePicker>
							<span class="input_span">安装日期</span>
							<DatePicker type="date" placeholder='请选择安装日期' class='width_183'
							            v-model='terminalList.azrq'></DatePicker>
						</FormItem>
						<FormItem label="通信地址" class='mgb_20'>
							<Input class="width_183" v-model='terminalList.txdz'></Input>
							<span class="input_span">远程端口</span><Input class="width_183"
							                                           v-model='terminalList.port'></Input>
						</FormItem>
						<FormItem label="SIM卡号" class="last mgb_20">
							<Input class="width_183" v-model='terminalList.sim'></Input>
							<span class="input_span">移动运营商</span><Input class="width_183"
							                                            v-model='terminalList.ydyys'></Input>
						</FormItem>
					</Form>
				</div>
			</div>
			<div class="btn-group" style="text-align: center;">
				<Button type="primary">保存并继续添加</Button>
				<Button type="default" class="mglr_10" @click="addTerminal()">保存</Button>
				<Button type="default">取消</Button>
			</div>
			<div v-show='hint'>
				<Alert type="warning" show-icon style='width: 200px;margin:5px auto;color: red'>内容不能为空</Alert>
			</div>

			<Modal
					v-model="modal2"
					title="Common Modal dialog box title"
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
		margin-bottom: 10px;
	}

	.from-container {
		padding-left: 60px;
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
		margin-top: 40px;
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
		height: 40px;
		line-height: 40px;
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

</style>