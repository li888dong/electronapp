<script>
	export default {
	    name:'addceliang',
		data(){
	        return{
				addShow:false
	        }
		}
	}
</script>
<template>
	<div class="addceliang-container relative">
		<div class="data-panel addceliang-panel">
			<h3 class="title">配置测量点</h3>
			<div class="from-container">
				<h4 class="title">基本信息</h4>
				<div class="label-container">
					<label><span class="width_80">测量点名称</span><input type="text" placeholder="汉字、数字或字母表示，不超过8个字符"></label><br>
					<label><span class="width_80">测量点编号</span><input type="text" placeholder="设置出厂编号"></label><br>
					<label><span class="width_80">户号信息</span><select type="text">
						<option value="0">请选择户号信息</option><option value="1">1</option><option value="1">1</option></select></label><br>
					<label><span class="width_80">变压器信息</span><select type="text">
						<option value="0">请选择变压器名称</option><option value="1">1</option><option value="1">1</option></select></label><span class="add" @click="addShow = true" style="cursor: pointer">添加</span> <span>变压器容量单位: <span class="add">10KVA</span></span><br>
					<label><span class="width_80">测量点类型</span><select type="text">
						<option value="0">请选择测量点类型</option><option value="1">1</option><option value="1">1</option></select></label><br>
					<label><span class="width_80">测量点位置</span><select type="text">
						<option value="0">请选择测量点位置</option><option value="1">1</option><option value="1">1</option></select></label>&nbsp;<label><select type="text" disabled style="width: 180px">
					<option value="0">接线方式</option><option value="1">1</option><option value="1">1</option></select></label><br>
					<label><span class="width_80">安装时间</span><input type="text"></label><br>
				</div>

			</div>
			<div class="from-container">
				<h4 class="title">设备参数</h4>
				<div class="label-container">
					<label><span class="width_80">pt系数</span><input type="text" style="width: 183px"></label>
					<lebel>pt变比：<input type="text" style="width: 56px"> : <input type="text" style="width: 56px"></lebel>

					<label><span class="width_80">ct系数</span><input type="text" style="width: 183px"></label>
					<lebel>ct变比：<input type="text" style="width: 56px"> : <input type="text" style="width: 56px"></lebel>
				</div>

			</div>
			<div class="from-container">
				<h4 class="title">设备信息</h4>
				<div class="label-container">
					<label><span  class="width_60">出厂编号</span><input class="width_183" type="text"></label>
					<label><span  class="width_60">生产厂家</span><input class="width_183" type="text" placeholder="请选择生产厂家"><span>添加</span></label>
					<label><span  class="width_60">采购日期</span><input class="width_183" type="text"></label><br>
					<label><span  class="width_60">通信地址</span><input class="width_183" type="text"></label>
					<label><span  class="width_60">远程端口</span><input class="width_183" type="text"></label>
					<label style="margin-left: 48px;"><span  class="width_60">波特率</span><input class="width_183" type="text"></label><br>
					<label><span  class="width_60">sim卡口</span><input class="width_183" type="text"></label>
					<label><span  class="width_60">移动运营商</span><input class="width_183" type="text"></label><br>
				</div>

			</div>
			<div class="btn-group" style="margin: 20px 400px 0 200px  ">
				<button class="button btnSelected" style="width: 120px;">保存并继续添加</button>
				<button class="button">保存</button>
				<button class="button">取消</button>
			</div>
			<transition name="fade">
			<div class="modal" v-show="addShow">
				<div class="header">
					<h3 class="title" style="border: none;font-weight: normal;display: inline-block;margin-left: 15px;">添加变压器</h3>
					<span class="iconfont icon-guanbi fr" style="font-size: 32px;cursor: pointer" @click="addShow=false"></span>
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
					<div class="btn-group" style="margin-left: 40px;">
						<button class="button btnSelected" style="width: 80px;">保存</button>
						<button class="button">取消</button>
					</div>
				</div>
			</div>
			</transition>
		</div>
	</div>
</template>
<style scoped>
	.addceliang-container{
		top: 60px;
		left: 205px;
		overflow: hidden;
		font-size: 14px;
	}

	.title{
		border-left: 4px solid #36c;
		padding-left: 5px;
	}
	.addceliang-panel{
		height: 820px;
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
	.btn-group button{
		height: 36px;
	}
	.modal{
		width: 922px;
		height: 321px;
		background-color: #fff;
		position: fixed;
		top: 220px;
		left: 550px;
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
</style>