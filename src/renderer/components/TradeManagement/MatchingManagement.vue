<script>
    import Pagenation from '@/components/Pagenation'

    export default {
	    name:'trade-matching',
		data(){
	        return{
                cur: 1,
                all: 5,
                msg: '',
	        }
		},
	    methods: {
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
	<div class="matching-container relative">
		<div class="data-panel reference">
			<h3 class="title">用户数据参考</h3>
			<div class="btn-group fr">
				<button class="button">2017年 <i class="iconfont icon-xiala"></i></button>
				<button class="button">10月 <i class="iconfont icon-xiala"></i></button>
			</div>
			<table width="100%">
				<thead>
					<tr>
						<th>月份</th>
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
					</tr>
				</thead>
				<tbody>
				<tr>
					<td>预测电量</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
				</tr>
				<tr>
					<td>申报电量</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
				</tr>
				</tbody>
			</table>
		</div>
		<div class="data-panel trade-matching">
			<h3 class="title">交易匹配</h3>
			<div>
				<span class="matching-title">匹配电厂:</span>
				<select>
					<option value="1">电厂1</option>
					<option value="1">电厂1</option>
					<option value="1">电厂1</option>
					<option value="1">电厂1</option>
				</select>
			</div>
			<div>
				<span class="matching-title">电厂信息:</span>
				<span>剩余电量:123321MW.h</span><br>
				<span style="margin-left: 74px;">价格:123元/MWh</span>
			</div>
			<div>
				<span class="matching-title">匹配电量:</span><input type="text">
			</div>
			<div>
				<div class="btn-group">
					<button class="button btnSelected">完成</button>
					<button class="button">清空</button>
				</div>
			</div>
		</div>
		<div class="data-panel user-config">
			<h3 class="title" style="display: inline-block;">用户配置列表</h3>
			<div class="btn-group fr">
				<button class="button btnSelected">导入</button>
				<button class="button btnSelected">导出</button>
			</div>
			<table width="100%">
				<thead>
					<tr>
						<th>交易月份</th>
						<th>交易预测电量(万KWh)</th>
						<th>申报电量(万KWh)</th>
						<th>购电电厂</th>
						<th>交易价格</th>
						<th>交易类型</th>
						<th>匹配人</th>
						<th>确认人</th>
						<th>状态</th>
						<th>操作</th>
					</tr>
				</thead>
			</table>
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
			<pagenation class="absolute" style="bottom: 20px;right: 40px; " :cur.sync="cur" :all.sync="all"
			            v-on:btn-click="pageListen"></pagenation>
		</div>
	</div>

</template>
<style scoped>
	.matching-container{
		top: 75px;
		left: 225px;
		overflow: hidden;
	}
	.matching-container h3{
		display: inline-block;
	}
	.reference{
		margin:0;
		width: 1094px;
		height: 230px;
	}
	.reference th:not(:nth-child(1)){
		height: 30px;
		background-color: #f6f6f6;
	}
	.reference td{
		text-align: center;
	}
	.reference td:not(:nth-child(1)){
		border: 1px solid #999999;
		border-radius: 3px;
	}
	.trade-matching{
		width: 350px;
		height: 230px;
		margin: 0;
	}
	.trade-matching input,
	.trade-matching select{
		width: 150px;
		height:26px;
		border: 1px solid #666666;
	}
	.matching-title{
		display: inline-block;
		vertical-align: middle;
		margin-right: 10px;
		font-size: 14px;
	}
	.btn-group{
		margin-top: 15px;
		margin-left: 20px;
	}
	.trade-matching>div{
		margin-top: 10px;
	}
	.user-config {
		width: 1447px;
		height: 580px;
		margin-left: 0;
	}
	.user-config .btn-group{
		margin-top: -5px;
	}
	.user-config table{
		margin-top: 15px;
	}
	th{
		height: 30px;
		background-color: #f6f6f6;
	}
	td{
		text-align: center;
	}
	.table-page {
		font-size: 14px;
		color: #36c;
		bottom: 20px;
		right: 300px;
	}
</style>