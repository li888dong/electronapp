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
		        },
                columns: [
                    {
                        title: '申报月份',
                        key: 'month'
                    },
                    {
                        title: '申报电量',
                        key: 'sbdl'
                    },
                    {
                        title: '采集电量',
                        key: 'cjdl'
                    },
                    {
                        title: '偏差',
                        key: 'pc'
                    },
                    {
                        title: '实用电量',
                        key: 'sydl'
                    },
                    {
                        title: '电费单电量',
                        key: 'dfddl'
                    },
	                {
                        title: '申报人',
                        key: 'sbr'
                    },
                    {
                        title: '审核',
                        key: 'sh'
                    }
                ],
		        columns2: [
                    {
                        title: '用电月',
                        key: 'ydy'
                    },
                    {
                        title: '用电量',
                        key: 'ydl'
                    },
                    {
                        title: '金额',
                        key: 'je'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('span', {

                                    style: {
                                        marginRight: '5px',
                                        color:'#4fa8f9 ',
                                        cursor:'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params.index)
                                            this.gotoDetail()
                                        }
                                    }
                                }, '查看'),
                                h('span', {
                                    style: {
                                        marginRight: '5px',
                                        color:'#4fa8f9 ',
                                        cursor:'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params.index)

                                            this.gotoHetong()
                                        }
                                    }
                                }, '确认'),
                            ])
                        }
                    }

                ],
	        }
		}
	}
</script>
<template>
	<div>
		<div class="detail-container relative">
			<div class="data-panel client-data-panel user-detail">
				<h3 class="title">用户基本信息 <small>详情</small></h3>
				<table cellspacing="5" width="100%">
					<tbody>

						<tr>
							<td><span>客户编码 :</span> {{userDetail.khbm}}</td>
							<td><span>所属行业 :</span> {{userDetail.sshy}}</td>
							<td><span>售电起止时间 :</span> {{userDetail.qzsh}}</td>
						</tr>
						<tr>
							<td><span>客户地址 :</span> {{userDetail.khdz}}</td>
							<td><span>联系人 :</span> {{userDetail.lxr}}</td>
							<td><span>联系电话 :</span> {{userDetail.lxdh}}</td>
						</tr>
					</tbody>
				</table>
			</div><!--
			--><div class="data-panel client-data-panel agreement-detail">
				<h3 class="title">合同基本情况 <small>详情</small></h3>
				<table  cellspacing="5" width="100%">
					<tr>
						<td><span>合同编码 :</span> {{agreementDetail.htbm}}</td>
						<td><span>户号个数 :</span> {{agreementDetail.hhgs}}</td>
					</tr>
					<tr>
						<td><span>年用电量 :</span> {{agreementDetail.mydl}} <span class="danwei1">Kw.时</span></td>
						<td><span>合同模式 :</span> {{agreementDetail.htms}}</td>
					</tr>
				</table>
			</div>
			<div class="data-panel client-data-panel user-apply">
				<h3 class="title">用户申报记录</h3>
				<Table :columns="columns"></Table>
			</div><!--
			--><div class="data-panel client-data-panel user-bill">
				<h3 class="title">用户电费单</h3>
				<Table :columns="columns2" :show-header="true" ></Table>
			</div>
			<div class="data-panel client-data-panel user-clientlist">
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
		top: 40px;
		left: 205px;
	}

	.title small{
		color: #4fa8f9;
		font-size: 12px;
		font-weight:normal;
		float: right;
	}
	.user-detail{
		width: 940px;
		height: 95px;
	}
	.user-detail table td span,
	.agreement-detail table td span:not(.danwei1){
		color: #999999;
	}
	.agreement-detail{
		width: 487px;
		height: 95px;

	}
	.user-apply{
		width: 940px;
		height: 287px;
		margin-top: 15px;
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
		width: 487px;
		height: 287px;
		margin-top: 15px;
	}
	.user-bill td{
		border-top: 1px solid #333333;
		height: 36px;
	}
	.user-clientlist{
		width: 1447px;
		height: 425px;
		margin-top: 15px;
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