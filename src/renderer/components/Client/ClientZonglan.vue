<script>
	import ClientHeader from './ClientHeader'
	import ClientSider from './ClientSidebar'
	import CompanyPowerProgress from '@/components/Home/PowerUse'
	import JieXianTu from '@/components/Client/JieXianTu'
	import PowerTimeframe from '@/components/Home/PowerTimeframeYM'
    import RealTimePowerChart from '@/components/Home/RealTimePowerChart.vue'
    import FuheChart from './FuheChart.vue'
    import Gonglv from './GonglvChart.vue'
    import Yougong from './YougongChart.vue'

    export default {
	    name:'zonglan',
		data(){
	        return{
	            fuhe:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
                active_power:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
                power_factor:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
                updated_at:["2017/10/4", "2017/10/5", "2017/10/6", "2017/10/7", "2017/10/8", "2017/10/9", "2017/10/10", "2017/10/11", "2017/10/12", "2017/10/13", "2017/10/14", "2017/10/15", "2017/10/16", "2017/10/17", "2017/10/18", "2017/10/19", "2017/10/20", "2017/10/21", "2017/10/22", "2017/10/23", "2017/10/24", "2017/10/25", "2017/10/26", "2017/10/27", "2017/10/28", "2017/10/29", "2017/10/30", "2017/10/31", "2017/11/1", "2017/11/2", "2017/11/3", "2017/11/4", "2017/11/5", "2017/11/6", "2017/11/7", "2017/11/8", "2017/11/9", "2017/11/10", "2017/11/11", "2017/11/12", "2017/11/13", "2017/11/14", "2017/11/15", "2017/11/16", "2017/11/17", "2017/11/18", "2017/11/19", "2017/11/20", "2017/11/21"],
		        user_no:''
	        }
		},
        mounted(){
            this.doAjax();
        },
	    computed:{
		    cus_id:function () {
			    return this.$store.getters.cus_id
            }
	    },
	    watch:{
            cus_id:function () {
	            this.doAjax()
            }
	    },
	    methods:{
	        setUserNo(num){
	            this.user_no = num;
                this.$http.post(this.$api.CLIENT_CURVE_3,{user_no:this.user_no})
                    .then(res => {
                        this.active_power = [];
                        this.power_factor=[];
                        this.updated_at=[];
                        let data = res.data.data;
                        data.map(i=>{
                            this.active_power.push(i.active_power);
                            this.power_factor.push(i.power_factor);
                            this.updated_at.push(i.updated_at);
                        })
                        console.log('户号负荷曲线',res);

                    }, err => {
                        this.active_power = [];
                        this.power_factor=[];
                        this.updated_at=[];
                        this.$api.errcallback(err)
                    })
                    .catch(err=>{
                        this.$api.errcallback(err)
                    })
	        },
            doAjax(){
                this.$http.post(this.$api.CLIENT_CURVE_3,{cus_id:this.cus_id})
                    .then(res => {
                        this.active_power = [];
                        this.power_factor=[];
                        this.updated_at=[];
                        console.log('负荷曲线',res);
                        let data = res.data.data;
                        data.map(i=>{
                            this.active_power.push(i.active_power);
                            this.power_factor.push(i.power_factor);
                            this.updated_at.push(i.updated_at);
                        })
                    }, err => {
                        this.$api.errcallback(err)
                    })
                    .catch(err=>{
                        this.$api.errcallback(err)
                    })
            },
	    },
		components:{
            'real-time-power-chart': RealTimePowerChart,
            'client-sider':ClientSider,
			'company-power-progress':CompanyPowerProgress,
			'jiexiantu':JieXianTu,
            'power-timeframe':PowerTimeframe,
			'fuhe-chart':FuheChart,
			'gonglv-chart':Gonglv,
			'yougong-chart':Yougong,
			'client-header':ClientHeader
		}
	}
</script>
<template>
	<div class="client-container">
		<Row gutter=15>
			<Col span="7">
			<jiexiantu v-on:setUser="setUserNo"></jiexiantu>
			</Col>
			<Col span="10">
			<company-power-progress belong="cus"></company-power-progress>
			</Col>
			<Col span="7">
			<power-timeframe baseWidth="323" belong="cus"></power-timeframe>
			</Col>
		</Row>
		<Row class="mgt_15">
			<Col span="24">
				<real-time-power-chart belong="cus"></real-time-power-chart>
			</Col>

		</Row>
		<Row class="mgt_15" gutter=15>

			<Col span="12">
				<gonglv-chart :power_factor="power_factor" :updated_at="updated_at"></gonglv-chart>

			</Col>

			<Col span="12">
				<yougong-chart :active_power="active_power" :updated_at="updated_at"></yougong-chart>

			</Col>

		</Row>

		</div>
</template>
<style scoped>


</style>