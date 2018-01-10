<script>
	import Pagenation from '@/components/Pagenation'
	export default {
	    name:'caiji',
        data(){
            return{
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
	<div class="caiji-container relative">
		<div class="caiji-header">

			<h3 class="title">终端采集记录 <small>采集记录仅记录最近60天的采集记录</small></h3>
			
		</div>
		<div class="caiji-table">
			<ul class="pds-container">
				<li class="pds">10KV配电室-2</li>
				<li class="pds">10KV配电室-2</li>
				<li class="pds">10KV配电室-2</li>
				<li class="pds">10KV配电室-2</li>
				<li class="pds">10KV配电室-2</li>
				<li class="pds">10KV配电室-2</li>
			</ul>
			<table width="100%" cellspacing="15">
				<thead>
					<tr>
						<th>采集时间</th>
						<th>电量</th>
						<th>电压</th>
						<th>电流</th>
						<th>有功功率</th>
						<th>无功功率</th>
						<th>视在功率</th>
						<th>功率因数</th>
						<th>负荷</th>
						<th>需量</th>
					</tr>
				</thead>
			</table>
			<pagenation class="absolute pagenation" :cur.sync="cur" :all.sync="all" v-on:btn-click="pageListen"></pagenation>
			<div class="table-page absolute fr">
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
</template>
<style scoped>
	.caiji-container{
		top: 60px;
		left: 205px;
		overflow: hidden;
	}
	.caiji-header{
		background-color: #fff;
		width: 1447px;
		height: 50px;
		margin-top: 15px;
		margin-left: 20px;
		line-height: 50px;
		padding-left: 20px;
	}
	.pds-container{
		width: 1447px;
		height: 176px;
		background-color: #fff;
		margin-left: 20px;
		margin-top: 3px;
		padding-top: 15px;
	}
	.pds-container li{
		display: inline-block;
		vertical-align: middle;
		width: 90px;
		height: 30px;
		line-height: 30px;
		margin-left: 10px;
		text-align: center;
		border: 1px solid #333;
	}
	.caiji-table{
		width: 1447px;
		height: 770px;
		margin-left: 20px;
		margin-top: 2px;
		background-color: #fff;
	}
	.caiji-table th{
		text-align: center;
		margin-left: 20px;
		height: 40px;
		background-color: #eee;
	}
	.caiji-table table{
		margin-top: -127px;
	}
	.pagenation{
		right: 240px;
		bottom: 20px;
	}
	.table-page{
		bottom: 20px;
		right: 500px;
	}
</style>