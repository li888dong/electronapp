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
		<h2>本月竞价模拟</h2>
		<Row>

			<bid-chart></bid-chart>
		</Row>
		<h2 class="">往期竞价结果</h2>
		<Row>

			<previous-biding-chart></previous-biding-chart>
		</Row>
		<h2>上期交易结果公式</h2>

		<div class="previous-biding-resolute data-panel">
			<Table :columns="[
			        {
			            title:'购防名称',
			            key:'gfmc'
			        },
			        {
			            title:'所属区域',
			            key:'ssqy'
			        },
			        {
			            title:'售方名称',
			            key:'ssqy'
			        },
			        {
			            title:'时间段',
			            key:'sjd'
			        },
			        {
			            title:'成交电量',
			            key:'cjdl'
			        },
			        {
			            title:'成交电价',
			            key:'cjdj'
			        },
			        {
			            title:'差价',
			            key:'cj'
			        },
			        {
			            title:'电厂报价',
			            key:'dcbj'
			        },
			        {
			            title:'售电公司报价',
			            key:'sdgsbj'
			        },
			        {
			            title:'报价差价',
			            key:'bjcj'
			        },
			    ]">

			</Table>
		</div>
		<div class="data-panel mock-trading">
			<div class="header">
				<h3 class="title">模拟交易</h3>
			</div>
			<div class="btn-group fr">
				<my-tab v-on:changeSelect="switchSelected('0')" v-bind:type="mockSelected === '0'?'zd':'normal'">添加供给侧价格</my-tab>
				<my-tab v-on:changeSelect="switchSelected('1')" v-bind:type="mockSelected === '1'?'zd':'normal'">添加需求侧价格</my-tab>
			</div>
			<div class="input-container">
				<input v-if="mockSelected === '0'" type="text" placeholder="电厂名称" v-model="dcmc">
				<input v-if="mockSelected === '0'" type="text" placeholder="供应量" v-model="gyl">
				<input v-if="mockSelected === '1'" type="text" placeholder="售电公司名称" v-model="dcmc">
				<input v-if="mockSelected === '1'" type="text" placeholder="需求量" v-model="gyl">
				<input type="text" placeholder="报价(元/Kw时)" v-model="bj">
				<div v-if="mockSelected === '0'" class="btn-group"><Button type="primary">保存</Button></div>
				<div v-if="mockSelected === '1'" class="btn-group"><Button type="primary">保存</Button></div>
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
		padding: 0;
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
		width: 430px;
		height: 647px;
		right: 0px;
		top: 7px;
		padding: 0;
	}
	.mock-trading .header{
		height: 50px;
		line-height: 50px;
		padding-left: 20px;
		display: inline-block;
	}
	.mock-trading .btn-group{
		margin: 10px 10px 0 0;
		height: 40px;
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
		vertical-align: middle;
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