<script>
    import MyUpload from '../Tool/upLoad.vue'

    export default {
        components: {'my-upload': MyUpload},
        name: 'addAgreement',
        data() {
            return {
                htfs: '',
                file: '',
                bol: false,
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
                tip: '',
                user_nums: [],
                user_num: '',
                columns1: [
                    {
                        title: '营销用户编号',
                        key: 'user_id',
                        width: '150'

                    }, {
                        title: '用户电压等级',
                        key: 'user_grade'
                    },
                    {
                        title: '报装容量',
                        key: 'bzrl',
                    }, {
                        title: '用电类别',
                        key: 'ydlb'
                    }, {
                        title: '用电单位类型',
                        key: 'yddwlb'
                    }, {
                        title: '用电地址',
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
                                    }
                                }, '修改'),
                                h('span', {
                                    style: {
                                        color: '#3EC7F5',
                                        cursor: 'pointer',
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
                    yddz: '',
                },
                stree: '',
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
			addCompact(){
				if(!this.isEmpty(this.addList)){
					if(this.way_param !=''){
						if(this.user_nums.length > 0){
							this.addList.ly_used = parseFloat(this.addList.ly_used);
							this.addList.ly_maxload = parseFloat(this.addList.ly_maxload);
							this.addList.bndyjdl = parseFloat(this.addList.bndyjdl);
							this.addList.bndyjzdfh = parseFloat(this.addList.bndyjzdfh);
							var user_nums = this.user_nums.join(',');
							var deadline =this.addList.deadline[0].Format('yyyy-MM-dd') + '/' + this.addList.deadline[1].Format('yyyy-MM-dd')
                           this.$http.post(this.$api.POWER_ADD_COMPACT,{
               	    cus_name:this.addList.user_name,
               	    con_no:this.addList.con_no,
               	    way:this.addList.way,
               	    way_param:this.way_param,
					ly_used:this.addList.ly_used,
					ly_maxload:this.addList.ly_maxload,
					bndyjdl:this.addList.bndyjdl,
					bndyjzdfh:this.addList.bndyjzdfh,
					htscdz:this.addList.htid,
					user_nums:user_nums,
					deadline:deadline

               }).then(res=>{
               	 console.log('添加合同',res);
               	 var msg = res.data.msg;
               	 if(msg == "添加成功!"){
                      for(let key in this.addList){
                      	this.addList[key] = '';
                      }
                      this.file='';
                      for(let key in this.data1){
                      	 this.data1 = ''
                      }
                      this.$router.push('/saleContract');
               	 }else if(msg == '客户名称不存在!'){
                         this.modal2 = true;
               	 }
               },err=>{
               	 this.$api.errcallback(err);
               }).catch(err=>{
               	  this.$api.errcallback(err);
               })
						}
					}
				}
				this.hint2 = true;           
			},
			changeStatus(){
        if(this.file != ""){
            this.bol = true;
        }
			},
			saveBtn(){
				console.log(this.addList.way);
				if(this.addList.way == '分成模式'){
					if(this.way_param1 != '' && this.way_param2 != ''){
						this.way_param = this.way_param1 + ":" + this.way_param2;
						console.log(this.way_param);
						var div = document.getElementsByClassName('htfs-container');
				        for(var i=0;i<div.length;i++){
					      div[i].style.display = 'none';
				          }
					 }else{
					this.isKong = true;
				    }
				}else if(this.addList.way == '保底模式'){
					if(this.way_param3 != ''){
						this.way_param = this.way_param3;
						var div = document.getElementsByClassName('htfs-container');
				        for(var i=0;i<div.length;i++){
					      div[i].style.display = 'none';
				          }
					}
				}else if(this.addList.way == '分成保底'){
					if(this.way_param4 != '' && this.way_param5 !=''&&this.way_param6 != ''){
						this.way_param = this.way_param4 + "," + this.way_param5 + ":"+this.way_param6;
						var div = document.getElementsByClassName('htfs-container');
				        for(var i=0;i<div.length;i++){
					      div[i].style.display = 'none';
				          }
					}		
				}else if(this.addList.way == '分成叠加'){
                     if(this.way_param7 != ''&&this.way_param8 != '' && this.way_param9 != ''){
                        this.way_param = this.way_param7 + ":" + this.way_param8 + "," + this.way_param9;
					var div = document.getElementsByClassName('htfs-container');
				        for(var i=0;i<div.length;i++){
					      div[i].style.display = 'none';
				          }
                     }
				}else if(this.addList.way =='固定服务'){
					if(this.way_param10 != ''){
						this.way_param = this.way_param10;
					  var div = document.getElementsByClassName('htfs-container');
				        for(var i=0;i<div.length;i++){
					      div[i].style.display = 'none';
				          }
					}	
				}		
			},
			saveData(){
				if(!this.isEmpty(this.addTableList)){
				   var arr = this.addTableList.yddz;
               	  
               	  var address = ''
               	  for(var i = 0; i < arr.length;i++){
               	  	 address += arr[i].name;
               	  }
               	    address += this.stree
               	   this.addTableList.yddz = address;
               	   var data1 = {
               	   	  user_id:this.addTableList.user_id,
               	   	  user_grade:this.addTableList.user_grade,
               	   	  bzrl:this.addTableList.bzrl,
					  ydlb:this.addTableList.ydlb,
					  yddwlb:this.addTableList.yddwlb,
					  yddz:this.addTableList.yddz

               	   };
               	   this.$http.post(this.$api.USER_NUM_ADD,{
               	   	     cus_id:this.$store.getters.cus_id,
               	   	     user_no:data1.user_id,
               	   	     vol_level:data1.user_grade,
               	   	     packing_capacity:data1.bzrl,
               	   	     category:data1.ydlb,
               	   	     unit_type:data1.yddwlb,
               	   	     address:data1.yddz
               	   }).then(res=>{
                       console.log('用户户号添加',res);
                       if(res.data.status){
                       	   this.data1.push(data1);
                       	   this.user_nums.push(res.data.id);
                       }
                       
               	   this.modal1 = false;
               	   },err=>{
               	   	 this.$api.errcallback(err);
               	   }).catch(err=>{
               	   	this.$api.errcallback(err);
               	   })
				}else{
                    this.hint = true;
                }
                this.addTableList.yddz = [];
                this.addTableList.user_id = '';
                this.addTableList.user_grade = '';
                this.addTableList.bzrl = '';
                this.addTableList.ydlb = '';
                this.addTableList.yddwlb = '';
                this.stree = '';
            },
            isEmpty(obj) {
                for (let key in obj) {
                    if (obj[key] !== "") {
                        return false
                    }
                }
                return true
            },
            timeout() {
                var _this = this;
                var timer = setTimeout(function () {
                    _this.hint = false;
                    if (_this.hint = false) {
                        clearTimeout(timer);
                    }
                }, 3000);
            },
            valueChange() {
                var _this = this;
                var timer2 = setTimeout(function () {
                    _this.isKong = false;
                    if (_this.isKong = false) {
                        clearTimeout(timer2);
                    }
                }, 3000);
            },
            disappear() {
                var _this = this;
                var timer3 = setTimeout(function () {
                    _this.hint2 = false;
                    if (_this.hint2 = false) {
                        clearTimeout(timer3);
                    }
                }, 3000);
            },
            cancel() {
                this.modal2 = false;
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
					<Input v-model='addList.user_name'></Input>
				</FormItem>
				<FormItem label='合同编号' prop="con_no">
					<Input v-model='addList.con_no'></Input>
				</FormItem>
				<FormItem label='合同方式' prop='way'>
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
						<Button type="primary" @click='saveBtn'>保存</Button>
						<span v-if='isKong' style="font-size: 12px;color:red;margin-left:5px;">内容不能为空</span>
					</div>
				</FormItem>
				<FormItem label='合同起止日期'>
					<DatePicker
							type="daterange"
							placement="bottom-end"
							placeholder="请选择合同起止日期"
							v-model='addList.deadline'
							format="yyyy-MM-dd"
							size='large' class='add_hetong'></DatePicker>
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
					<Table :columns='columns1' :data='data1' width='1000' height='130'></Table>
					<div style="width:1000px;text-align: right;">
						<Button type="primary" style='margin-top:10px;' @click='modal1=true'>添加</Button>
					</div>

				</FormItem>
				<FormItem>
					<div class="btn-group">
						<Button type="primary" class="mgr-20" @click='changeStatus'>保存</Button>
						<Button type="default">取消</Button>
					</div>
					<div v-if='hint2'>
						<Alert type="warning" show-icon style='width: 200px;margin:5px auto;color: red'>内容不能为空</Alert>
					</div>
				</FormItem>
			</Form>

			<!--遮罩层-->
			<Modal v-model="modal1" :styles="{top:'280px'}" class="addAgreement-modal" width="850px;">
				<h3 slot="header" class="title">添加营销用户编号</h3>
				<ul class="add-msg">
					<li><label>营销用户编号:</label><Input class="width-200" placeholder="用户户号"
					                                 v-model='addTableList.user_id'></Input></li>
					<li><label>用户电压等级:</label><Select class="width-200" v-model='addTableList.user_grade'>
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
					</Select></li>
					<li><label>报装容量:</label><Input class="width-200"
					                               v-model='addTableList.bzrl'></Input><span>KVA</span></li>
					<li><label>用电类别:</label><Select class="width-200" v-model='addTableList.ydlb'>
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
					</Select></li>
					<li><label>用电单元类型:</label><Select class="width-200" v-model='addTableList.yddwlb'>
						<Option value="农、林、牧、渔业">农、林、牧、渔业</Option>
            <Option value="工业">工业</Option>
					</Select></li>
					<li><label>用户地址:</label>
						<al-selector v-model='addTableList.yddz' level=2  class='address'/>
						<Input placeholder="街道等详细地址" style='width:250px;' v-model='stree'></Input>
					</li>
					<li><label style="margin-right:0;"></label>
						<Radio class="default-radio">企业默认地址</Radio>
					</li>
				</ul>
				<div slot="footer" class="add-btn-group">
					<Button type="primary" @click="saveData">保存</Button>
					<Button type="default" @click="modal1=false">取消</Button>
					<div v-if='hint'>
						<Alert type="warning" show-icon style='width: 200px;margin:5px auto;color: red'>内容不能为空</Alert>
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

	.add-msg li {
		margin-top: 10px;
		vertical-align: middle;
	}

	.add-msg li label {
		display: inline-block;
		width: 100px;
		text-align: right;
		margin-right: 10px;
	}

	.add-msg li label:last-child {
		margin-right: 0;
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

	li div {
		display: inline-block;
		vertical-align: middle;
	}

	.myTab {
		margin-bottom: 10px;
	}

	.address {
		width: 350px;
	}
</style>