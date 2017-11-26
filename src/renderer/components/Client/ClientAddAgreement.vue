<script>
	export default {
	    name:'addAgreement',
		data(){
	        return{
				htfs:''
	        }
		}
	}
</script>
<template>
	<div class="main-container relative">
		<div class="main-container-panel">
			<div class="header">
				添加售电合同
			</div>
			<div class="data-panel">
				<div class="form-container">
					<h3 class="title" style="display:block;border-left: 5px solid #3EC7F5;padding-left: 10px">基本信息</h3>
					<label>
						<span>客户名称:</span>
						<input type="text">
					</label><br>
					<label>
						<span>合同编号:</span>
						<input type="text">
					</label><br>
					<label>
						<span>合同方式:</span>
						<select v-model="htfs">
							<option>合同模式</option>
							<option>分成模式</option>
							<option>保底模式</option>
							<option>分成保底</option>
							<option>分成叠加</option>
							<option>固定服务</option>
						</select>
						<div class="htfs-container" v-if="htfs === '分成模式'">
							<span>分成比例:</span>
							<input type="text" placeholder="售电公司占比" style="width: 80px">:
							<input type="text" placeholder="用户占比" style="width: 80px">
						</div>
						<div class="htfs-container" v-if="htfs === '保底模式'">
							<span>保底价格:</span>
							<input type="text" placeholder="输入保底价格" style="width: 80px">
						</div>
						<div class="htfs-container" v-if="htfs === '分成保底'">
							<span>保底价格:</span>
							<input type="text" placeholder="输入保底价格" style="width: 80px">
							<span>分成比例:</span>
							<input type="text" placeholder="售电公司占比" style="width: 80px">
							<input type="text" placeholder="用户占比" style="width: 80px">
						</div>
						<div class="htfs-container" v-if="htfs === '分成叠加'">
							<span>分成比例:</span>
							<input type="text" placeholder="售电公司占比" style="width: 80px">
							<input type="text" placeholder="用户占比" style="width: 80px">
							<span>叠加价格:</span>
							<input type="text" placeholder="叠加价格">
						</div>
						<div class="htfs-container" v-if="htfs === '固定服务'">
							<span>服务费率:</span>
							<input type="text" placeholder="输入服务费率" style="width: 80px"><span>/kw.h</span>
						</div>


						<div class="btn-group">
							<button class="button btnSelected">保存</button>
						</div>
					</label><br>
					<label>
						<span>客户名称:</span>
						<input type="text">
					</label><br>
					<label>
						<span>上年用电量:</span>
						<input type="text">
						<span>MW.h</span>
					</label><br>
					<label>
						<span>上年最大负荷:</span>
						<input type="text">
						<span>MW.h</span>
					</label><br>
					<label>
						<span>本年度预计电量:</span>
						<input type="text">
						<span>MW.h</span>
					</label><br>
					<label>
						<span>本年度预计最大负荷:</span>
						<input type="text">
						<span>MW.h</span>
					</label><br>
					<label>
						<span>合同上传:</span>
						<input type="file">
					</label><br>
					<label>
						<span>用户户号:</span>
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
									<td><span>修改</span><span>添加</span><span>删除</span></td>
								</tr>
							</tbody>
						</table>
					</label>
				</div>
				<div class="btn-group fr" style="margin-top: 50px;">
					<button class="button btnSelected" >保存</button>
					<button class="button">取消</button>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.main-container{
		height:900px;
	}
	.main-container-panel{
		height: 900px;
	}
	.main-container-panel .header{
		height: 60px;
		line-height: 60px;
	}
	.form-container label{
		display: inline-block;
		margin-top: 10px;
	}
	.form-container label span:nth-child(1){
		display: inline-block;
		width: 120px;
		text-align: right;
	}
	.form-container label input,
	.form-container label select{
		width: 150px;
		height: 30px;
	}
	.form-container th{
		background-color: #f6f6f6;
		height:40px;
	}
	.htfs-container{
		display: inline-block;
	}
	.htfs-container span{
		display: inline!important;
	}
</style>