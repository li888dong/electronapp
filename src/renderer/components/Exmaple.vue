<script>
	import BidChart from '@/components/BidChart'
	import RealTimePowerChart from '@/components/RealTimePowerChart'
	import PowerTimeFrame from '@/components/PowerTimeFrame'
	import HenanMap from '@/components/HenanMap'
	import ClientSidebar from '@/components/ClientSidebar'
	import CompanyPowerProgress from '@/components/CompanyPowerProgress'
	import JieXianTu from '@/components/JieXianTu'
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
            'power-time-frame':PowerTimeFrame,
            'henan-map':HenanMap,
		    'client-sidebar':ClientSidebar,
            'company-power-progress':CompanyPowerProgress,
            'jie-xian-tu':JieXianTu,
		    'pagenation':Pagenation
        }
    }
</script>
<template>
	<div>
		<pagenation :cur.sync="cur" :all.sync="all" v-on:btn-click="pageListen"></pagenation>
		<jie-xian-tu></jie-xian-tu>
		<company-power-progress></company-power-progress>

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
				<power-time-frame></power-time-frame>
				<henan-map></henan-map>
			</div>
		</div>
		<client-sidebar></client-sidebar>
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