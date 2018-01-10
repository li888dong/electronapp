<script>
	export default {
	    name:'client-detail',
		data(){
	        return{
				userDetail:{
				    khbm:'00000-000ZZ',
					sshy:'二级    电力、热力的生产和供应业',
					qzsh:'2018.12.12~2015.12.12',
					khdz:'郑州市中原区大学园18#  450000',
					lxr:'丁军鹏',
					lxdh:'15890191652'
				},
		        agreementDetail:{
				    htbm:'00000-000ZZ',
			        hhgs:'2个',
			        mydl:'10000',
			        htms:'服务费模式'
		        }
	        }
		}
	}
</script>
<template>
	<div>
		<div class="detail-container relative">
			<div class="data-panel client-data-panel user-detail">
				<h3 class="title">用户基本情况 <small>详情</small></h3>
				<table cellspacing="15" width="100%">
					<tbody>

						<tr>
							<td>客户编码:{{userDetail.khbm}}</td>
							<td>所属行业:{{userDetail.sshy}}</td>
							<td>售电起止时间:{{userDetail.qzsh}}</td>
						</tr>
						<tr>
							<td>客户地址:{{userDetail.khdz}}</td>
							<td>联系人:{{userDetail.lxr}}</td>
							<td>联系电话:{{userDetail.lxdh}}</td>
						</tr>
					</tbody>
				</table>
			</div><div class="data-panel client-data-panel agreement-detail">
				<h3 class="title">合同基本情况 <small>详情</small></h3>
				<table  cellspacing="15" width="100%">
					<tr>
						<td>合同编码:{{agreementDetail.htbm}}</td>
						<td>户号个数:{{agreementDetail.hhgs}}</td>
					</tr>
					<tr>
						<td>年用电量:{{agreementDetail.mydl}} <span>Kw.时</span></td>
						<td>合同模式:{{agreementDetail.htms}}</td>
					</tr>
				</table>
			</div><div class="data-panel client-data-panel user-apply">
				<h3 class="title">用户申报记录</h3>
				<table cellspacing="15" width="100%">
					<thead>
						<tr>
							<th>申报月份</th>
							<th>申报电量</th>
							<th>采集电量</th>
							<th>偏差</th>
							<th>实用电量</th>
							<th>电费单电量</th>
							<th>申报人</th>
							<th>审核</th>
						</tr>
					</thead>
				</table>
			</div><div class="data-panel client-data-panel user-bill">
				<h3 class="title">用户电费单</h3>
				<table cellspacing="0" width="100%" style="margin-top: 15px;">
					<tbody>
						<tr>
							<td>2017年12月</td>
							<td>20000.12KW</td>
							<td>135.61元</td>
							<td>状态</td>
							<td>确认</td>
						</tr>
						<tr>
							<td>2017年12月</td>
							<td>20000.12KW</td>
							<td>135.61元</td>
							<td>状态</td>
							<td>确认</td>
						</tr>
					</tbody>


				</table>
			</div><div class="data-panel client-data-panel user-clientlist">
				<h3 class="title">用户终端列表</h3>
				<div class="btn-group fr">
					<button class="button btnSelected">+配置终端</button>
				</div>
				<table cellspacing="15" width="100%" style="margin-top: 20px;">
					<thead>
					<tr>
						<th>测量点名称</th>
						<th>安装位置</th>
						<th>状态</th>
						<th>所属户号</th>
						<th>通讯地址</th>
						<th>端口</th>
						<th>采集成功率</th>
						<th>上报比例</th>
						<th>采集记录</th>
						<th>操作</th>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td><router-link to="/client-terminal">详情</router-link> 编辑 操作</td>
					</tr>
					</thead>
				</table>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.detail-container{
		top: 60px;
		left: 205px;
	}
	.title{
		border-left: 4px solid #36c;
		padding-left: 5px;
	}
	.title small{
		color: blue;
	}
	.user-detail{
		width: 1007px;
		height: 127px;
	}
	.agreement-detail{
		width: 417px;
		height: 127px;
	}
	.user-apply{
		width: 1007px;
		height: 287px;
	}
	.user-apply th{
		text-align: center;
		height: 40px;
		background-color: #F6F7FB;
	}
	.user-apply td{
		text-align: center;
	}
	.user-bill{
		width: 417px;
		height: 287px;
	}
	.user-bill td{
		border-top: 1px solid #333333;
		height: 36px;
	}
	.user-clientlist{
		width: 1444px;
		height: 380px;
	}
	.user-clientlist th{
		text-align: center;
		height: 40px;
		background-color: #F6F7FB;
	}
	.user-clientlist td{
		text-align: center;
	}
</style>