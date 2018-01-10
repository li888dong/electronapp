<script>
	import FiveData from '@/components/Home/PowerUse'
	import BidChart from '@/components/TradeManager/BidChart'
	import RealTimePowerChart from '@/components/Home/RealTimePowerChart'
	import TradePi from '@/components/Home/TradePi'
	import HenanMap from '@/components/HenanMap'
	import ClientSidebar from '@/components/Client/ClientSidebar'
	import JieXianTu from '@/components/Client/JieXianTu'
	import Pagenation from '@/components/Pagenation'
    export default {
        name:'Exmaple',
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
            'bid-chart':BidChart,
            'real-time-power-chart':RealTimePowerChart,
            'trade-pi':TradePi,
            'henan-map':HenanMap,
		    'client-sidebar':ClientSidebar,
            'jie-xian-tu':JieXianTu,
		    'pagenation':Pagenation,
		    'five-data':FiveData
        }
    }
</script>
<template>
	<div>
		<jie-xian-tu></jie-xian-tu>
		<five-data></five-data>
		<pagenation :cur.sync="cur" :all.sync="all" v-on:btn-click="pageListen"></pagenation>

		<div class="data-panel data-exmaple">
			<h3 class="title">标题</h3>
			<div class="btn-group">
				<button class="button">按钮</button>
				<button class="button btnSelected">按钮</button>
				<button class="button">按钮</button>
				<button class="button">按钮</button>
			</div>
		</div>
		<div class="main-container">
			<span class="title">标题</span>
			<div class="main-container-panel">
				<div class="header">
					<span>头部</span>
				</div>
				<div class="tab">
					<div class="btn-group">
						<button class="button">下一年</button>
						<button class="button btnSelected">2017年</button>
						<button class="button">下一年</button>
						<button class="button">年度选择 <i class="iconfont">&#xe613;</i></button>
						<button class="button">区域选择 <i class="iconfont">&#xe613;</i></button>
					</div>
				</div>
			</div>
			<div class="content">
				<bid-chart></bid-chart>
				<real-time-power-chart></real-time-power-chart>

				<henan-map></henan-map>
			</div>
		</div>
		<!--<client-sidebar></client-sidebar>-->
	</div>
</template>
<style>
	.content{
		background-color: #fff;
	}
	.data-exmaple{
		width: 600px;
		height: 400px;
	}
	.bid-simulation{
		width: 1242px;
	}
</style>