<script>
    import Pagenation from '@/components/Pagenation'
    export default {
        name:'clientlist',
        data(){
            return{
                pageData:{
                    cur: 1,
                    all: 5,
                    msg: ''
                },
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '客户名称',
                        key: 'name'
                    },
                    {
                        sortable: true,
                        title: '实际用电量',
                        key: 'shiji'
                    },
                    {
                        title: '申报电量',
                        key: 'shenbao'
                    },{
                        title: '申报偏差',
                        key: 'shenbaopiancha'
                    },{
                        title: '购电量',
                        key: 'goudianliang'
                    },{
                        title: '购电偏差',
                        key: 'goudianpiancha'
                    },{
                        title: '预测电量',
                        key: 'yucedianliang'
                    },{
                        title: '预测偏差',
                        key: 'yucepiancha'
                    },{
                        title: '最低功率因数',
                        key: 'gonglv'
                    },{
                        title: '总览',
                        key: 'zonglan'
                    },{
                        title: '指数',
                        key: 'zhishu'
                    },{
                        title: '操作',
                        key: 'caozuo'
                    }
                ],
                data1: [

                ],
                showBorder: false,
                showStripe: false,
                showHeader: true,
                showIndex: true,
                showCheckbox: false,
                fixedHeader: false,
                tableSize: 'default'
            }
        },
	    computed:{

	    },
        methods:{
            pageListen: function (data) {
                this.pageData.msg = '当前页码：' + data
            }
        },
        components:{
			'pagenation':Pagenation
        }
    }
</script>
<template>
	<div>
		<div class="main-container">
			<span class="title">客户中心/客户列表</span>
			<div class="main-container-panel">
				<div class="header">
					<span>客户列表</span>
					<ul>
						<li class="selected">全部 <span>(12332)</span></li>
						<li>郑州 <span>(332)</span></li>
						<li>开封 <span>(332)</span></li>
						<li>洛阳 <span>(332)</span></li>
						<li>平顶山 <span>(332)</span></li>
						<li>安阳 <span>(332)</span></li>
						<li>鹤壁 <span>(332)</span></li>
						<li>新乡 <span>(332)</span></li>
						<li class="more">更多 <span><i class="iconfont icon-xiala"></i></span></li>
					</ul>
					<div class="btn-group">
						<button class="button btnSelected">+新增用户</button>
						<div class="search-container">
							<i class="iconfont icon-search"></i><input type="search" placeholder="客户编号或客户名称"><button class="button btnSelected">搜索</button>
						</div>
						<div class="dateSwitch fr">
							<button class="button btnSelected">年度</button><button class="button">月度</button>
							<button class="button">上一年</button>
							<button class="button">2017年6月</button>
							<button class="button">下一年</button>
						</div>
					</div>
				</div>
				<div class="table-container">
					<!--<Table ref="selection" stripe="false" :columns="columns4" :data="data1"></Table>-->
					<table width="100%" cellspacing="15">
						<thead>
						<tr>
							<th>客户名称</th>
							<th>实际用电量</th>
							<th>实际用电量</th>
							<th>申报电量</th>
							<th>申报偏差</th>
							<th>购电量</th>
							<th>购电偏差</th>
							<th>预测电量</th>
							<th>预测偏差</th>
							<th>最低功率因数</th>
							<th>总览</th>
							<th>指数</th>
							<th>操作</th>
						</tr>
						<tr>
							<td>客户名称</td>
							<td>实际用电量</td>
							<td>实际用电量</td>
							<td>申报电量</td>
							<td>申报偏差</td>
							<td>购电量</td>
							<td>购电偏差</td>
							<td>预测电量</td>
							<td>预测偏差</td>
							<td>最低功率因数</td>
							<td>总览</td>
							<td>指数</td>
							<td>
								<router-link to="/client/detail">详情</router-link>
								<span class="xiala">更多 <i class="iconfont icon-xiala"></i>
									<div class="router-container">
										<router-link to="/hetong">合同</router-link>
										<router-link to="/user-manager">用户</router-link>
									</div>
								</span>
							</td>
						</tr>
						</thead>
					</table>
					<pagenation class="table-page fr" :cur.sync="pageData.cur" :all.sync="pageData.all" v-on:btn-click="pageListen"></pagenation>

					<div class="table-page fr">
						<span>共44444条记录</span><span>123页</span>
						<span>第 <select name="" id="">
							<option value="1">1</option>
							<option value="1">1</option>
							<option value="1">1</option>
							<option value="1">1</option>
							<option value="1">1</option>
						</select>页</span>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>
<style scoped>
	.main-container .title{
		margin-top:20px;
	}
	.btn-group{
		display: block;
	}
	input[type='search']{
		height: 30px;
		padding: 5px 20px;
		vertical-align: -1px;
	}
	.table-container{
		margin-top: 56px;
		height: 600px;
	}
	.table-container th{
		text-align: center;
		height: 40px;
		background-color: #F6F7FB;
	}
	.table-container td{
		text-align: center;
	}
	.xiala{
		color: #2d8cf0;
		position: relative;
	}
	.xiala:hover .router-container{
		display: inline-block;
	}
	.xiala .router-container{
		display: none;
		position: absolute;
		top: 16px;
		left: 0px;
		width: 38px;
		line-height:26px;
		}
	.main-container-panel .header ul{
		margin-left: 100px;
		display: inline-block;
		vertical-align: top;
	}
	.main-container-panel .header li{
		display: inline-block;
		width: 90px;
		height: 30px;
		border: 1px solid #ccc;
		text-align: center;
		line-height: 30px;
		font-size: 12px;
		font-weight:normal;
		margin-left: 5px;
		vertical-align: middle;
	}
	.main-container-panel .header li.selected{
		background-color: #E8F8FE;
	}
	.search-container{
		display: inline-block;
		vertical-align: middle;
	}
	.search-container i{
		position: relative;
		left: 20px;
	}
	.main-container-panel .header li.more i{
		display: inline-block;
		width: 30px;
		height: 30px;
		border-left:1px solid #ccc;
		font-size: 12px;
		text-align: center;
		float: right;
	}
	.add-client{
		margin-right: 20px;
	}
	.add-client button{
		width: 120px;
	}
	.table-page{
		margin-top: 480px;
	}
</style>