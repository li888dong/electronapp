<script>
	export default {
	    name:'agreementmanage',
		data(){
	        return{

	        }
		}
	}
</script>
<template>
	<div class="hetong-container relative">
		<div class="data-panel">
			<div class="hetong-header">
				<h3 class="title">合同管理</h3>
			</div>
		</div>
		<div class="data-panel ht-main">

			<div class="btn-group fr">
				<button class="button btnSelected">删除</button>
				<router-link to="/add-hetong" tag="button" class="button btnSelected">+添加合同</router-link>
			</div>
			<ul style="margin-top: 40px;">
				<li style="background-color: #f6f6f6;">
					<table width="80%" cellspacing="0">

						<tbody>
							<tr>
								<td rowspan="4"><img src="" alt="合同图" width="80" height="120" style="vertical-align: middle">31654641-7 <br><span>查看</span></td>
								<td>营销用户编号</td>
								<td>用电电压等级</td>
								<td>报装容量</td>
								<td>用电类别</td>
								<td>用电单元类型</td>
								<td>用电地址</td>
							</tr>
							<tr>
								<td>7230298069</td>
								<td>10KV</td>
								<td>10KVA</td>
								<td>大工业用电</td>
								<td>第二产业(工业)</td>
								<td> </td>
							</tr>
							<tr>
								<td>7230298069</td>
								<td>10KV</td>
								<td>10KVA</td>
								<td>大工业用电</td>
								<td>第二产业(工业)</td>
								<td> </td>
							</tr>
							<tr>
								<td>7230298069</td>
								<td>10KV</td>
								<td>10KVA</td>
								<td>大工业用电</td>
								<td>第二产业(工业)</td>
								<td> </td>
							</tr>
						</tbody>
					</table>
				</li>
			</ul>
		</div>
	</div>
</template>
<style scoped>
	.hetong-container{
		top: 60px;
		left: 205px;
	}
	.hetong-header {
		width: 1407px;
	}
	.ht-main{
		width: 1447px;
		height:780px;
		margin-top: 3px;
	}
	.hetong-container .btn-group button{
		width: 100px;
	}
</style>