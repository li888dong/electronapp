<script>
	export default {
	    name:'addceliang',
		data(){
	        return{
				addShow:false,
				dataList1:[
					{
                        value: '1',
                        label: '1'

                    }
				],
				dataList2:[
				   {
                      value:'1',
                      label:'1'
				   },{
                      value:'1',
                      label:'1',
				   }
				],
				dataList3:[
				   {
				   	value:'1',
				   	label:'1',
				   },{
				   	value:'1',
				   	label:'1'
				   },{
				   	 value:'1',
				   	 label:'1',
				   }
				],
				dataList4:[
				   {
				   	value:'1',
				   	label:'1',
				   },{
				   	value:'1',
				   	label:'1'
				   },{
				   	 value:'1',
				   	 label:'1',
				   },
				   {
				   	 value:'1',
				   	 label:'1',
				   }
				],
				dataList5:[
				   {
				   	value:'1',
				   	label:'1',
				   },{
				   	value:'1',
				   	label:'1'
				   },{
				   	 value:'1',
				   	 label:'1',
				   },
				   {
				   	 value:'1',
				   	 label:'1',
				   }
				],
				dataList6:[
				   {
				   	value:'1',
				   	label:'1',
				   },{
				   	value:'1',
				   	label:'1'
				   },{
				   	 value:'1',
				   	 label:'1',
				   },
				   {
				   	 value:'1',
				   	 label:'1',
				   }
				],
                model1:'',
                model2:'',
                model3:'',
                model4:'',
                model5:'',
                model6:'',
                modal2: false

            }
		},
		methods:{
			showUnit:function(value){
             this.model2 = value;
             this.addShow = true;
		}
	 }
	}
</script>
<template>
	<div class="client-container">
		<Card class="addceliang-panel">
			<h3 slot="title">配置终端</h3>
			<div class="from-container">
				<h4 class="title">基本信息</h4>
				<div class="label-container">
					<Form :label-width="80">
						<h3 class="sub_title">终端名称</h3>
						<FormItem label="终端位置">
							<Input placeholder="汉字、数字或字母表示，不超过8个字符"></Input>
						</FormItem>
						<FormItem label="终端编号">
							<Input placeholder="设置出厂编号"></Input>
						</FormItem>
						<FormItem label="户号信息">
							<Select v-model="model1" style="width:300px" placeholder="请选择户号信息">
							<Option v-for="item in dataList1" :value="item.value" :key="item.value">{{item.label}}</Option>
							</Select>
						</FormItem>
						<FormItem label="变压器信息">
							 <Select v-model="model2" style="width:300px" placeholder="请选择变压器名称" v-on:on-change='showUnit'>
							 <Option v-for="item in dataList2" :value="item.value" :key="item.value">{{item.label}}</Option>
							 </Select><span class="add" @click="modal2 = true" style="cursor: pointer;margin-left:10px;">添加</span> <span v-show='addShow'>变压器容量单位: <span class="add" style="margin-left: 10px;">10KVA</span></span>
						</FormItem>
						<FormItem label="终端类型">
							<Select v-model="mode3" style="width:300px" placeholder="请选择终端类型">
								<Option v-for="item in dataList3" :value="item.value" :key="item.value">{{item.label}}</Option>
							</Select>
						</FormItem>
						<FormItem label="监测位置">
							<Select v-model="model4" style="width:300px" placeholder="请选择终端位置">
								<Option v-for="item in dataList4" :value="item.value" :key="item.value">{{item.label}}</Option>
								</Select><Select v-model="model5" style="width:150px;margin-left:10px;" placeholder="接线方式">
							<Option v-for="item in dataList5" :value="item.value" :key="item.value">{{item.label}}</Option>
							</Select>
						</FormItem>
						<h3 class="sub_title">设备参数</h3>
						<FormItem label="PT系数">
							<Input style="width:120px;"></Input>
							<span class="input_span">PT变化</span><Input style="width:56px;"></Input> : <Input style="width:56px;"></Input><span class="input_span">CT系数</span><Input style="width:120px;"></Input>
							<span class="input_span">CT变化</span><Input style="width:56px;"></Input> : <Input style="width:56px;"></Input><span class="input_span">用户倍率</span><Input style="width:120px;"></Input>
						</FormItem>
						<h3 class="sub_title">设备信息</h3>
						<FormItem label="出厂编号">
							<Input class="width_183"></Input>
							<span class="input_span">生产厂家</span><Select v-model="model6"class="width_183" placeholder="请选择生产厂家">
							<Option v-for="item in dataList6" :value="item.value" :key="item.value">{{item.label}}</Option>
						     </Select>
							<span class="input_span">采购日期</span><Input class="width_183"></Input>
						</FormItem>
						<FormItem label="通信地址">
							<Input class="width_183"></Input>
							<span class="input_span">远程端口</span><Input class="width_183"></Input>
						</FormItem>
						<FormItem label="SIM卡号" class="last">
							<Input class="width_183"></Input>
							<span class="input_span">移动运营商</span><Input class="width_183"></Input>
						</FormItem>
					</Form>
				</div>
			</div>
			<div class="btn-group" style="text-align: center;">
				<Button type="primary">保存并继续添加</Button>
				<Button type="default" class="mglr_10">保存</Button>
				<Button type="default">取消</Button>
			</div>
			<Modal
					v-model="modal2"
					title="Common Modal dialog box title"
					@on-ok="ok"
					@on-cancel="cancel" solt="添加变压器" class-name="vertical-center-modal">
				<div slot="header">
					<h3 class="title" style="border: none;font-weight: normal;display: inline-block;margin-left: 15px;">添加变压器</h3>
				</div>
				<div class="modal-container">
					<label>
					<span>变压器名称:</span><Input></Input>
					</label><br>
					<label>
					<span>变压器编号:</span><Input></Input>
					</label><br>
					<label>
					<span>变压器容量:</span><Input></Input><span>KvA</span>
					</label><br>
					</div>
				<div slot="footer">
					<Button type="primary">保存</Button>
					<Button type="default" @click="modal2 = false">取消</Button>
				</div>
			</Modal>
		</Card>
	</div>
</template>
<style scoped>
	.addceliang-panel{
		overflow: hidden;
		font-size: 14px;
		height: 853px;
	}

	.title{
		padding-left: 5px;
		font-size:16px;
		margin-bottom:10px;
	}
	.from-container{
		padding-left:60px;
	}
	.label-container{
		padding-left: 30px;
	}
	.label-container label{
		margin-top: 10px;
		display: inline-block;
	}
	.label-container label input,.label-container label select {
		width: 290px;
		height: 30px;
		vertical-align: middle;
	}
	.label-container  span{
		display: inline-block;
		vertical-align: middle;
		margin-left: 20px;
	}
	.add{
		color: #3EC7F5;
	}
	.width_80{
		width: 80px;
	}
	.width_183{
		width: 183px!important;
	}
	.input_span{
		width:80px;
		text-align: right;
		margin-right:10px;
	}
	.btn-group{
		float: none;
		width:100%;
		height:40px ;
		line-height: 40px;
	}
	.modal-container{
		margin: 20px 40px;
	}
	.modal-container label{
		display: inline-block;
		vertical-align: middle;
		margin-bottom: 20px;
		margin-left: 20px;
	}
	.modal-container label input{
		width: 200px;
		margin-left: 10px;
	}
	.modal-container .ivu-input-type{
		margin-left:10px;
		width: 200px;
	}
	.ivu-input{
		width:300px;
	}
	.ivu-input-wrapper{
		width:300px;
	}
	.text-right{
		text-align: right;
	}
	.ivu-modal-header .title{
		font-size:16px;
		font-weight:bold;
	}
	.sub_title{
		font-size:14px;
		height:40px;
		line-height: 40px;
	}
	.last{
		margin-bottom:10px !important;
	}
	.vertical-center-modal{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.vertical-center-modal .ivu-modal{
		top: 0;
	}
	.mglr_10{
		margin-left: 10px;
		margin-right:10px;
	}
</style>