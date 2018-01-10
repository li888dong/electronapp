<script>
    import Pagenation from '@/components/Pagenation'

    export default {
        name: 'annualforecast',
        data() {
            return {
				modalShow:false,
                cur: 1,
                all: 5,
                msg: ''
            }
        },
	    methods:{
            pageListen: function (data) {
                this.msg = '当前页码：' + data
            }
        },
        components:{
            'pagenation':Pagenation
	    }
    }
</script>
<template>
	<div class="main-container relative">
		<span class="title">预测分析/年度分析</span>
		<div class="main-container-panel">
			<div class="header">
				<span>年度预测</span>
			</div>
			<div class="tab fl">
				<div class="btn-group ">
					<button class="button">下一年</button>
					<button class="button btnSelected">2017年</button>
					<button class="button">下一年</button>
					<button class="button">年度选择 <i class="iconfont icon-xiala"></i></button>
					<button class="button">区域选择 <i class="iconfont icon-xiala"></i></button>
				</div>
			</div>
			<div class="search-box btn-group relative fr" style="margin: 10px 10px 0 0;">
				<i class="iconfont icon-search absolute"></i><input type="search"><button class="button btnSelected">搜索</button>
			</div>
			<div class="table-container">
				<table width="100%" cellspacing="2" style="margin-top: 60px;">
					<thead>
						<tr>
							<th>企业名称</th>
							<th>01月</th>
							<th>02月</th>
							<th>03月</th>
							<th>04月</th>
							<th>05月</th>
							<th>06月</th>
							<th>07月</th>
							<th>08月</th>
							<th>09月</th>
							<th>10月</th>
							<th>11月</th>
							<th>12月</th>
							<th>合计</th>
							<th>修改人</th>
							<th>确认人</th>
							<th>状态</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>河南众企联合售电</td>
							<td>144.55</td>
							<td>144.55</td>
							<td>144.55</td>
							<td>144.55</td>
							<td>144.55</td>
							<td>144.55</td>
							<td>144.55</td>
							<td>144.55</td>
							<td>144.55</td>
							<td>144.55</td>
							<td>144.55</td>
							<td>144.55</td>
							<td>6665554.12</td>
							<td>修改人</td>
							<td>确认人</td>
							<td>状态</td>
							<td style="cursor: pointer;color: #36c" @click="modalShow = true">修改</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div v-if="modalShow" class="modal">
				<div class="header">河南众企联合售电有限公司</div>
				<div class="table-container">
					<table width="100%" cellspacing="2" style="margin-top: 15px;">
						<thead>
						<tr>
							<th>2017年月份</th>
							<th>01月</th>
							<th>02月</th>
							<th>03月</th>
							<th>04月</th>
							<th>05月</th>
							<th>06月</th>
							<th>07月</th>
							<th>08月</th>
							<th>09月</th>
							<th>10月</th>
							<th>11月</th>
							<th>12月</th>
							<th>合计</th>

						</tr>
						</thead>
						<tbody>
							<tr>
								<td>户号12345</td>
								<td><input type="text"></td>
								<td><input type="text"></td>
								<td><input type="text"></td>
								<td><input type="text"></td>
								<td><input type="text"></td>
								<td><input type="text"></td>
								<td><input type="text"></td>
								<td><input type="text"></td>
								<td><input type="text"></td>
								<td><input type="text"></td>
								<td><input type="text"></td>
								<td><input type="text"></td>
								<td>355555.55</td>
							</tr>
							<tr>
								<td>户号12345</td>
								<td><input type="text"></td>
								<td><input type="text"></td>
								<td><input type="text"></td>
								<td><input type="text"></td>
								<td><input type="text"></td>
								<td><input type="text"></td>
								<td><input type="text"></td>
								<td><input type="text"></td>
								<td><input type="text"></td>
								<td><input type="text"></td>
								<td><input type="text"></td>
								<td><input type="text"></td>
								<td>355555.55</td>
							</tr>
							<tr>
								<td>合计</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355555.55</td>
							</tr>
							<tr>
								<td>系统预测</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355555.55</td>
							</tr>
							<tr>
								<td>偏差值</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355.55</td>
								<td>355555.55</td>
							</tr>
						</tbody>
					</table>
					<div class="btn-group" style="margin-left: 40%;">
						<button class="button btnSelected" @click="modalShow = false">确认</button>
						<button class="button" @click="modalShow = false">取消</button>
					</div>
				</div>
			</div>
			<div class="btn-group absolute" style="bottom: 20px;left: 40px">
				<button class="button btnSelected">批量确认</button>
				<router-link tag="button" to="/import-data" class="button btnSelected">导入</router-link>
				<button class="button btnSelected">导出</button>
			</div>
			<div class="table-page absolute">
				<span>共44444条记录</span><span>123页</span>
				<span>第 <select name="" id="">
							<option value="1">1</option>
							<option value="1">1</option>
							<option value="1">1</option>
							<option value="1">1</option>
							<option value="1">1</option>
						</select>页</span>
			</div>
			<pagenation class="absolute" style="bottom: 20px;right: 40px; " :cur.sync="cur" :all.sync="all" v-on:btn-click="pageListen"></pagenation>
		</div>
	</div>

</template>
<style scoped>
	.main-container-panel{
		height: 900px;
	}
	.tab .btn-group{
		padding: 10px 16px;
	}
	.tab button{

	}
	.tab button i{
		color: black;
		font-size: 10px;
	}
	.btn-group input{
		height: 30px;
		width: 200px;
		padding-left: 20px;
	}
	.btn-group i{
		left: 10px;
		top: 2px;
	}
	.table-container th{
		height: 30px;
		background-color: #f6f6f6;

	}
	.table-container td{
		text-align: center;
		height: 30px;
	}
	.modal{
		width: 1600px;
		height: 300px;
		background-color: #fff;
		border: 1px solid #828282;
		position: absolute;
		top: 130px;
		left:50px;
	}
	.modal .header{
		height: 50px;
		line-height: 50px;
		padding-left: 20px;
		background-color: #f6f6f6;
		margin:0 auto;
	}
	.modal td input{
		width: 100px;
		height: 30px;
	}
	.table-page{
		font-size: 14px;
		color: #36c;
		bottom: 20px;
		right: 300px;
	}
</style>