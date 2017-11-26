<script>
	export default {
	    name:'addceliang',
		data(){
	        return{
				addShow:false,
				dataList:[
					{
                        value: '1',
                        label: '1'

                    }
				],
                model1:'',
                modal2: false

            }
		}
	}
</script>
<template>
	<div class="addceliang-container relative">
		<div class="data-panel addceliang-panel">
			<h3 class="title">配置终端</h3>
			<div class="from-container">
				<h4 class="title">基本信息</h4>
				<div class="label-container">
					<label><span class="width_80">终端名称</span><Input placeholder="汉字、数字或字母表示，不超过8个字符"></Input></label><br>
					<label><span class="width_80">终端位置</span><Input placeholder="汉字、数字或字母表示，不超过8个字符"></Input></label><br>
					<label><span class="width_80">终端编号</span><Input placeholder="设置出厂编号"></Input></label><br>
					<label><span class="width_80">户号信息</span><Select v-model="model1" style="width:300px">
						<Option v-for="item in dataList" :value="item.value" :key="item.value">{{item.label}}</Option>
					</Select></label><br>
					<label><span class="width_80">变压器信息</span><Select v-model="model1" style="width:300px">
							<Option v-for="item in dataList" :value="item.value" :key="item.value">{{item.label}}</Option>
						</Select></label><span class="add" @click="modal2 = true" style="cursor: pointer">添加</span> <span>变压器容量单位: <span class="add">10KVA</span></span><br>
					<label><span class="width_80">终端类型</span><Select v-model="model1" style="width:300px">
						<Option v-for="item in dataList" :value="item.value" :key="item.value">{{item.label}}</Option>
					</Select></label><br>
					<label><span class="width_80">监测位置</span><Select v-model="model1" style="width:300px">
						<Option v-for="item in dataList" :value="item.value" :key="item.value">{{item.label}}</Option>
					</Select></label>&nbsp;<label><Select v-model="model1" style="width:150px">
					<Option v-for="item in dataList" :value="item.value" :key="item.value">{{item.label}}</Option>
				</Select></label><br>
					<label><span class="width_80">安装时间</span><Input></Input></label><br>
				</div>

			</div>
			<div class="from-container">
				<h4 class="title">设备参数</h4>
				<div class="label-container">
					<label><span class="width_50">pt系数</span><Input style="width:200px;"></Input></label>
					<label>pt变比：<Input style="width:56px;"></Input> : <Input style="width:56px;"></Input></label>

					<label><span class="width_80" style="text-align: right;">ct系数</span><Input style="width:183px;"></Input></label>
					<label>ct变比：<Input style="width:56px;"></Input> : <Input style="width:56px;"></Input></label>
				</div>

			</div>
			<div class="from-container">
				<h4 class="title">设备信息</h4>
				<div class="label-container">
					<label><span  class="width_50 text-right">出厂编号</span><Input class="width_183"></Input></label>
					<label><span  class="width_80 text-right">生产厂家</span><Input class="width_183" placeholder="请选择生产厂家"></Input><span>添加</span></label>
					<label><span  class="width_80 text-right">采购日期</span><Input class="width_183"></Input></label><br>
					<label><span  class="width_50 text-right">通信地址</span><Input class="width_183"></Input></label>
					<label><span  class="width_80 text-right">远程端口</span><Input class="width_183"></Input></label>
					<label style="margin-left: 48px;"><span  class="width_80 text-right">波特率</span><Input class="width_183"></Input></label><br>
					<label><span  class="width_50 text-right">sim卡口</span><Input class="width_183"></Input></label>
					<label><span  class="width_80 text-right">移动运营商</span><Input class="width_183"></Input></label><br>
				</div>

			</div>
			<div class="btn-group" style="text-align: center;">
				<Button type="primary">保存并继续添加</Button>
				<Button type="default">保存</Button>
				<Button type="default">取消</Button>
			</div>
			<Modal
					v-model="modal2"
					title="Common Modal dialog box title"
					@on-ok="ok"
					@on-cancel="cancel" solt="添加变压器">
				<div slot="header">
					<h3 class="title" style="border: none;font-weight: normal;display: inline-block;margin-left: 15px;">添加变压器</h3>
				</div>
				<div class="modal-container">
					<label>
					<span>变压器名称:</span><input type="text">
					</label><br>
					<label>
					<span>变压器编号:</span><input type="text">
					</label><br>
					<label>
					<span>变压器容量:</span><input type="text"><span>KvA</span>
					</label><br>
					</div>
				<div slot="footer">
					<Button type="primary">保存</Button>
					<Button type="default">取消</Button>
				</div>
			</Modal>
		</div>
	</div>
</template>
<style scoped>
	.addceliang-container{
		top: 40px;
		left: 205px;
		overflow: hidden;
		font-size: 14px;
	}

	.title{
		padding-left: 5px;
	}
	.addceliang-panel{
		height: 853px;
	}
	.from-container{
		width: 1407px;
		padding-left: 70px;
		padding-top: 40px;
	}
	.from-container .title{
		font-size: 12px!important;
	}
	.label-container{
		padding-left: 50px;
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
	.label-container label span{
		display: inline-block;
		vertical-align: middle;
		margin-right: 20px;
	}
	.add{
		color: #3EC7F5;
	}
	.width_80{
		width: 80px;
	}
	.width_60{
		width: 70px;
	}
	.width_183{
		width: 183px!important;
	}
	.width_50{
		width:60px;
	}
	.btn-group{
		float: none;
		width:100%;
		height:60px ;
		line-height: 60px;
	}
	.btn-group button{
		height: 36px;
	}
	.modal .header{
		height: 40px;
		line-height: 40px;
		background-color: #f6f6f6;
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
		height: 30px;
		margin-left: 10px;
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
</style>