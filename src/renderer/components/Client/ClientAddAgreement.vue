<script>
	import Panel from "../Tool/Panel.vue";

    export default {
        components: {Panel},
        name:'addAgreement',
		data(){
	        return{
				htfs:'',
				htfsList:[
					{
					    value:'分成模式',
						label:'分成模式',
					},{
				       value:'保底模式',
						label:'保底模式',
					},{
				        value:'分成保底',
						label:'分成保底',
					},{
				         value:'分成叠加',
						 label:'分成叠加',
					},{
				        value:'固定服务',
						label:'固定服务',
					}
				],
				modal1:false,
	        }
		}
	}
</script>
<template>
	<div class="main-container relative">
		<panel class="main-container-panel">
			<div class="title-lv2">
				添加售电合同
			</div>
			<div class="container">
				<div class="form-container">
					<h3 class="title" style="display:block;border-left: 5px solid #3EC7F5;padding-left: 10px">基本信息</h3>
					<label>
						<span class="width-120">客户名称 :</span>
						<Input></Input>
					</label><br>
					<label>
						<span class="width-120">合同编号 :</span>
						<Input></Input>
					</label><br>
					<label>
						<span class="width-120">合同方式 :</span>
						<Select v-model="htfs" style="width:150px;" placeholder="合同模式">
							<Option v-for="item in htfsList" :value="item.value" :key="item.value">{{item.label}} </Option>
						</Select>
					</label>
					<div class="htfs-container" v-if="htfs === '分成模式'">
						<span>分成比例:</span>
						<Input class="width-90" placeholder="售电公司占比"></Input> ：
						<Input class="width-90" placeholder="用户占比"></Input>
					</div>
					<div class="htfs-container" v-if="htfs === '保底模式'">
						<span>保底价格:</span>
						<Input class="width-90" placeholder="输入保底价格"></Input>
					</div>
					<div class="htfs-container" v-if="htfs === '分成保底'">
						<span>保底价格:</span>
						<Input class="width-90 mgr-10" placeholder="输入保底价格"></Input>
						<span>分成比例:</span>
						<Input class="width-90" placeholder="售电公司占比"></Input> ：
						<Input class="width-90" placeholder="用户占比"></Input>
					</div>
					<div class="htfs-container" v-if="htfs === '分成叠加'">
						<span>分成比例:</span>
						<Input class="width-90" placeholder="售电公司占比"></Input> ：
						<Input class="width-90 mgr-10" placeholder="用户占比"></Input>
						<span>叠加价格:</span>
						<Input placeholder="叠加价格" class="width-90"></Input>
					</div>
					<div class="htfs-container" v-if="htfs === '固定服务'">
						<span>服务费率:</span>
						<Input class="width-90" placeholder="输入服务费率"></Input><span>/kw.h</span>
					</div>
					<div class="btn-save">
							<Button type="primary">保存</Button>
						</div>
					<br>
					<label>
						<span class="width-120">客户名称 :</span>
						<Input></Input>
					</label><br>
					<label>
						<span class="width-120">上年用电量 :</span>
						<Input></Input>
						<span>MW.h</span>
					</label><br>
					<label>
						<span class="width-120">上年最大负荷 :</span>
						<Input></Input>
						<span>MW.h</span>
					</label><br>
					<label>
						<span class="width-120">本年度预计电量 :</span>
						<Input></Input>
						<span>MW.h</span>
					</label><br>
					<label>
						<span class="width-120">本年度预计最大负荷 :</span>
						<Input></Input>
						<span>MW.h</span>
					</label><br>
					<label>
						<span class="width-120">合同上传 :</span>
						<input type="file">
					</label><br>
					<label>
						<span class="width-120">用户户号 :</span>
						<table class="fr" cellspacing="10" width="1000">
							<thead>
								<tr>
									<th>营销用户编号</th>
									<th>用电电压等级</th>
									<th>报装容量</th>
									<th>用电类别</th>
									<th>用电单元类型</th>
									<th>用电地址</th>
									<th>操作</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>723458431453</td>
									<td>10KV</td>
									<td>10KVA</td>
									<td>大工业用电</td>
									<td>第二产业（工业）</td>
									<td>第二产业（工业）</td>
									<td><span>修改</span><span class="mr-l" @click="modal1=true">添加</span><span>删除</span></td>
								</tr>
							</tbody>
						</table>
					</label>
				</div>
				<div class="btn-group" style="margin-top: 50px;">
					<Button type="primary" class="mgr-20">保存</Button>
					<Button type="default">取消</Button>
				</div>
			</div>
			<!--遮罩层-->
			<Modal v-model="modal1" :styles="{top:'280px'}" class="addAgreement-modal" width="850px;">
				<h3 slot="header" class="title">添加营销用户编号</h3>
				<ul class="add-msg">
					<li><label>营销用户编号:</label><Input class="width-200" placeholder="用户户号"></Input></li>
					<li><label>用户电压等级:</label><Select class="width-200"><Option value="0.4kv">0.4kv</Option></Select></li>
					<li><label>报装容量:</label><Input class="width-200"></Input><span>KVA</span></li>
					<li><label>用户类别:</label><Select class="width-200"><Option value="大功业用户">大工业用户</Option></Select></li>
					<li><label>用户单元类型:</label><Select class="width-200"><Option value="第一产业（农业）">第一产业（农业）</Option></Select></li>
                    <li><label>用户地址:</label><Select class="width-80" placeholder="省份"><Option value="河南省">河南省</Option></Select>
						<Select class="width-80" placeholder="市"><Option value="郑州市">郑州市</Option></Select>
						<Select class="width-80" placeholder="区/县"><Option value="中牟县">中牟县</Option></Select>
						<Input placeholder="街道等详细地址" class="width-100"></Input>
					</li>
					<li><label style="margin-right:0;"></label><Radio class="default-radio">企业默认地址</Radio></li>
				</ul>
				<div slot="footer" class="add-btn-group">
					<Button type="primary">保存</Button>
					<Button type="default" @click="modal1=false">取消</Button>
				</div>
			</Modal>
		</panel>
	</div>
</template>
<style scoped>
	.main-container{
		height:900px;
	}
	.main-container-panel{
		height: 900px;
	}
	.main-container-panel .title-lv2{
		height: 60px;
		line-height: 60px;
		display: block;
		font-weight: bold;
		border-bottom:1px solid #eeeeee;
	}
	.form-container{
		 margin-left:60px;
		margin-top:20px;
	}
	.form-container label{
		display: inline-block;
		margin-top: 10px;
	}
	.form-container label .width-120{
		display: inline-block;
		width: 120px;
		text-align: right;
		margin-right:15px;
	}

	.form-container label select{
		width: 150px;
		border-radius: 0;
		height: 34px;
		border:1px solid #eeeeee;
	}
	.form-container th{
		background-color: #f6f6f6;
		height:40px;
	}
	.form-container tr td{
		 text-align: center;
	}
	.form-container tr td span{
		 color: #3EC7F5;
		cursor: pointer;
	}
	.htfs-container{
		display: inline-block;
	}
	.htfs-container span{
		display: inline!important;
	}
	.ivu-input{
		width:200px;
	}
	.ivu-input-wrapper{
		width:200px;
	}
	.panel .btn-save{
		float: none;
		margin-top:0;
		margin-left:20px;
		display: inline-block;
	}
	.width-90{
		width:90px;
	}
	.mr-l{
		display: inline-block;
		margin-right:15px;
		margin-left:15px;
	}
	.panel .btn-group{
		width:100%;
		float: none;
		text-align: center;
	}
	.mgr-20{
		margin-right:20px;
	}
	.mgr-10{
		margin-right:10px;
	}
	 .ivu-modal-header{
		 height:60px;
		line-height: 60px;
		 padding:0;
	}
	.ivu-modal-content .ivu-modal-header .title{
		 text-align: center;
	}
	.width-200{
		width:200px;
	}
	.width-80{
		width:80px;
	}
	.width-100{
		width:100px;
	}
	.add-msg li{
		margin-top:10px;
	}
	.add-msg li label{
		display: inline-block;
		width: 100px;
		text-align: right;
		margin-right: 10px;
	}
	.add-msg li label:last-child{
		margin-right:0;
	}
	.ivu-modal-footer .add-btn-group{
		text-align: center;
	  }
</style>