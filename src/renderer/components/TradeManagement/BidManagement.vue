<script>
	import BidChart from '@/components/TradeManagement/BidChart'
	import PreviousBidingChart from '@/components/TradeManagement/PreviousBidingChart'
	export default {
	    name:'bidmanagement',
		data(){
	        return{
				mockSelected:'0',
		        dcmc:'',
		        gyl:'',
		        bj:'',
		        mockDatas:[
			        {
			            rank:'1',
			            name:'汕头华能南澳风力发电有限公司',
				        gongying:'123.321',
				        baojia:'123.321',
				        caozuo:'修改',
			        },{
                        rank:'1',

                        name:'汕头华能南澳风力发电有限公司',
				        gongying:'123.321',
				        baojia:'123.321',
				        caozuo:'修改',
			        },{
				        rank:'1',
                        name:'汕头华能南澳风力发电有限公司',
				        gongying:'123.321',
				        baojia:'123.321',
				        caozuo:'修改',
			        },{
                        rank:'1',

                        name:'汕头华能南澳风力发电有限公司',
				        gongying:'123.321',
				        baojia:'123.321',
				        caozuo:'修改',
			        },
		        ]
	        }
		},
		methods:{
		    switchSelected(type){
		        this.mockSelected = type
		    },
            modifyData(data){
		        console.log(data);
		        this.dcmc = data.name;
		        this.gyl = data.gongying;
		        this.bj = data.baojia
            }
		},
		components:{
		    'bid-chart':BidChart,
            'previous-biding-chart':PreviousBidingChart
		}
	}
</script>
<template>
	<div class="main-container relative">
		交易概况
		<bid-chart></bid-chart>
		<previous-biding-chart></previous-biding-chart>
		<div class="previous-biding-resolute data-panel">
			<h3 class="title">上期交易结果公式</h3>
			<table width="100%">
				<thead>
					<tr>
						<th>购方名称</th>
						<th>所属区域</th>
						<th>售方名称</th>
						<th>时间段</th>
						<th>成交电量</th>
						<th>成交电价</th>
						<th>价差</th>
						<th>电厂报价</th>
						<th>售电公司报价</th>
						<th>报价价差</th>
					</tr>
				</thead>
			</table>
		</div>
		<div class="data-panel mock-trading">
			<div class="header">
				<h3 class="title">模拟交易</h3>
			</div>
			<div class="tab">
				<span v-bind:class="{selected:mockSelected==='0'}" @click="switchSelected('0')">添加供给侧价格</span>
				<span v-bind:class="{selected:mockSelected==='1'}" @click="switchSelected('1')">添加需求侧价格</span>
			</div>
			<div class="input-container">
				<input v-if="mockSelected === '0'" type="text" placeholder="电厂名称" v-model="dcmc">
				<input v-if="mockSelected === '0'" type="text" placeholder="供应量" v-model="gyl">
				<input v-if="mockSelected === '1'" type="text" placeholder="售电公司名称" v-model="dcmc">
				<input v-if="mockSelected === '1'" type="text" placeholder="需求量" v-model="gyl">
				<input type="text" placeholder="报价(元/Kw时)" v-model="bj">
				<div v-if="mockSelected === '0'" class="btn-group"><button class="button btnSelected">保存</button></div>
				<div v-if="mockSelected === '1'" class="btn-group"><button class="button btnSelected">保存</button></div>
			</div>
			<ul v-for="mockData in mockDatas">
					<li>{{mockData.rank}}</li>
					<li class="name">{{mockData.name}}</li>
					<li class="gongying">{{mockData.gongying}}</li>
					<li class="baojia">{{mockData.baojia}}</li>
					<li class="caozuo" @click="modifyData(mockData)">{{mockData.caozuo}}</li>
			</ul>
		</div>
	</div>
</template>
<style scoped>
	.previous-biding-resolute{
		width: 1667px;
		height: 329px;
		margin: 0!important;
	}
	.previous-biding-resolute table{
	}
	.previous-biding-resolute th{
		width: 80px;
		height: 40px;
		background-color: #F6F7FB;
	}
	.mock-trading{
		position: absolute;
		width: 410px;
		height: 600px;
		right: 20px;
		top: 3px;
		padding: 0;
	}
	.mock-trading .header{
		height: 50px;
		line-height: 50px;
		padding-left: 20px;
	}
	.mock-trading .tab{
		background-color: #f9f9f9;
		height: 40px;
	}
	.mock-trading .tab span{
		display: inline-block;
		margin-top: 10px;
		margin-left: 10px;
		width: 150px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		cursor: pointer;
	}
	.mock-trading .tab span.selected{
		background-color: #fff;
	}
	.input-container{
		padding-left: 20px;
		margin-top: 15px;
	}
	.input-container input{
		border: 1px solid #999999;
		margin-left: 10px;
		width: 80px;
		height: 30px;
		text-align: center;
		outline: none;
	}
	.input-container input:nth-child(1){
		width: 100px;
	}
	.mock-trading ul{
		height: 30px;
		margin-top: 10px;
	}
	.mock-trading li{
		float: left;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-left: 20px;
		text-align: center;
	}
	li.name{
		width: 80px;
	}
	li.gongying{
		width: 70px;
	}
	li.baojia{
		width:80px;
	}
	li.caozuo{
		cursor: pointer;
	}
</style>