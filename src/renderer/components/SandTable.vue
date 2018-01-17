<script>
	import HenanMap from '@/components/HenanMap'
	import MyTab from '@/components/Tool/MyTab'
    export default {
        name: 'sandTable',
        data() {
            return {
				type:"市场份额",
                dateType:'月度',
                month:new Date().Format('yyyy-MM'),
                year:new Date().Format('yyyy'),
                companyList1:[],
                cityList:[],
                companyList2:[],
                companyList3:[],
                noList:[],
                bol:false,
                total1:0,
                total2:0,
                total3:0
            }
        },
	    components:{
            'henan-map':HenanMap,
		    'my-tab':MyTab
	    },
	  methods:{
         monthSelect(){
         	this.totalRankM();
            this.earePowerRankM();
            this.companyPowerRankM();
            this.clientPianChaRankM();
               
         },
         yearSelect(){
         	this.totalRankY();
            this.earePowerRankY();
            this.companyPowerRankY();
            this.clientPianChaRankY();

         },
         typeSwitch(){
            if(this.dateType ==='月度'){
            	this.totalRankM();
                 this.earePowerRankM();
                 this.companyPowerRankM();
                 this.clientPianChaRankM();
            }else if(this.dateType === '年度'){
                 this.totalRankY();
                 this.earePowerRankY();
                 this.companyPowerRankY();
                 this.clientPianChaRankY();
            }
         },
         totalRankM(){
           this.$http.post(this.$api.POWER_MARKET,{com_id:this.$store.getters.com_id,month:this.month}).then(res=>{
           	    console.log('售电沙盘 总排行',res);
           	    if(res.data.status === '1'){
					   this.companyList1 = res.data.data;
					   if(res.data.paixu.length!==0){
						var obj = res.data.paixu[0];
           	    	var com_name = obj.num;
           	    	for(let i=0;i<this.companyList1.length;i++){
           	    		if(!com_name === this.companyList1[i].com_name){
                             this.noList = res.data.paixu;
           	    			 this.bol = true;
           	    		}else{
           	    			this.bol=false;
           	    			
           	    		}
           	    	}
                 }

           	    }
           },err=>{
           	    this.$api.errcallback(err);
           }).catch(err=>{
           	    this.$api.errcallback(err);
           })
         },
         earePowerRankM(){
         	this.$http.post(this.$api.POWER_CITY_RANK,{com_id:this.$store.getters.com_id,month:this.month}).then(res=>{
         		console.log('售电沙盘 区域签约电量排行',res);
         		if(res.data.status ==='1'){
         			this.total1 = res.data.total;
         			this.cityList = res.data.citys;

         		}
         	},err=>{
           	    this.$api.errcallback(err);
           }).catch(err=>{
           	    this.$api.errcallback(err);
           })
         },
         companyPowerRankM(){
         	this.$http.post(this.$api.POWER_COMPANY_RANK,{com_id:this.$store.getters.com_id,month:this.month}).then(res=>{
         		console.log('售电沙盘 企业签约电量排行',res);
         		if(res.data.status === '1'){
         			this.total2 = res.data.total;
         			this.companyList2 = res.data.citys;
         		}

         	},err=>{
           	    this.$api.errcallback(err);
           }).catch(err=>{
           	    this.$api.errcallback(err);
           })
         },
         clientPianChaRankM(){
         	this.$http.post(this.$api.CLIENT_PIANCHA_RANK,{com_id:this.$store.getters.com_id,month:this.month}).then(res=>{
         		console.log('售电沙盘 客户预测偏差',res);
         		if(res.data.status === '1'){
         			this.total3 = res.data.total;
         			this.companyList3 = res.data.citys;
         		}

         	},err=>{
           	    this.$api.errcallback(err);
           }).catch(err=>{
           	    this.$api.errcallback(err);
           })
         },
         totalRankY(){
           this.$http.post(this.$api.POWER_MARKET,{com_id:this.$store.getters.com_id,year:this.year}).then(res=>{
           	    console.log('售电沙盘 总排行',res);
           	    if(res.data.status === '1'){
           	    	this.companyList1 = res.data.data;
           	    	var obj = res.data.paixu[0];
           	    	var com_name = obj.num;
           	    	for(let i=0;i<this.companyList1.length;i++){
           	    		if(!com_name === this.companyList1[i].com_name){
                             this.noList = res.data.paixu;
           	    			 this.bol = true;
           	    		}else{
           	    			this.bol=false;
           	    			
           	    		}
           	    	}

           	    }
           },err=>{
           	    this.$api.errcallback(err);
           }).catch(err=>{
           	    this.$api.errcallback(err);
           })
         },
         earePowerRankY(){
         	this.$http.post(this.$api.POWER_CITY_RANK,{com_id:this.$store.getters.com_id,year:this.year}).then(res=>{
         		console.log('售电沙盘 区域签约电量排行',res);
         		if(res.data.status ==='1'){
         			this.total1 = res.data.total;
         			this.cityList = res.data.citys;

         		}
         	},err=>{
           	    this.$api.errcallback(err);
           }).catch(err=>{
           	    this.$api.errcallback(err);
           })
         },
         companyPowerRankY(){
         	this.$http.post(this.$api.POWER_COMPANY_RANK,{com_id:this.$store.getters.com_id,year:this.year}).then(res=>{
         		console.log('售电沙盘 企业签约电量排行',res);
         		if(res.data.status === '1'){
         			this.total2 = res.data.total;
         			this.companyList2 = res.data.citys;
         		}

         	},err=>{
           	    this.$api.errcallback(err);
           }).catch(err=>{
           	    this.$api.errcallback(err);
           })
         },
         clientPianChaRankY(){
         	this.$http.post(this.$api.CLIENT_PIANCHA_RANK,{com_id:this.$store.getters.com_id,year:this.year}).then(res=>{
         		console.log('售电沙盘 客户预测偏差',res);
         		if(res.data.status === '1'){
         			this.total3 = res.data.total;
         			this.companyList3 = res.data.citys;
         		}

         	},err=>{
           	    this.$api.errcallback(err);
           }).catch(err=>{
           	    this.$api.errcallback(err);
           })
         }
	  },
	  mounted(){
         this.totalRankM();
         this.earePowerRankM();
         this.companyPowerRankM();
         this.clientPianChaRankM();
	  }
    }
</script>
<template>
	<div class="main-container">
		<Row>
			<Card>
				<h3 slot="title">售电沙盘<span style="color: #ccc;padding-left: 10px;font-size: 12px;font-weight: 400;">每月度自动更新</span></h3>
				<div slot="extra" class="btn-group">
					<RadioGroup v-model="dateType" type="button" v-on:on-change="typeSwitch">
						<Radio label="月度"></Radio>
						<Radio label="年度"></Radio>
				    </RadioGroup>
				    <DatePicker v-if="dateType ==='月度'" type="month" placeholder="请选择月份" @on-change="monthSelect"></DatePicker>
				    <DatePicker v-if="dateType ==='年度'" type="year" placeholder="请选择年份" @on-change="yearSelect"></DatePicker>
				</div>


				<Row :gutter="10">
					<Col span="12">
						<div style="width: 1500px;height:500px" class='henan_map'>

							<henan-map></henan-map>
						</div>

					</Col>
					<Col span="10" offset="1">
						<div class="ranklist-container">

							<ul>
								<li v-for='(item,index) in companyList1' v-bind:class={active:item.status}><span class="ranking">No.{{index+1}}</span><span class="company-name">{{item.com_name}}</span><span class="rate">{{item.ratio*100}}%</span>
						        <span class="ranklist-bar" :style="{width:200*item.ratio+'px'}"></span></li>
								<li v-for='item in noList' v-if='bol' class='red'><span class="ranking">No.{{item.no}}</span><span class="company-name">{{item.num}}</span></li>
							</ul>
						</div>

					</Col>
				</Row>
			</Card>
		</Row>
		<Row class="mgt_15" :gutter="10">
			<Col span="7">
				<Card class="ranklist-container">
				<h3 slot="title">公司区域签约电量Top10</h3>
				<ul>
					<li v-for='(item,index) in cityList'><span class="ranking">No.{{index+1}}</span><span class="city">{{item.name}}</span>
					<span class="ranklist-bar" :style="{width:200*(item.num||item.bndyjdl/total1)+'px'}"></span></li>
					
				</ul>
			</Card>
			</Col>
			<Col span="8">
				<Card class="ranklist-container">
				<h3 slot="title">签约企业用电量Top10</h3>
				<ul>
					<li v-for='(item,index) in companyList2' :title = 'item.name'><span class="ranking">No.{{index+1}}</span><span class="company-name">{{item.name}}</span>
					<span class="ranklist-bar" :style="{width:200*(item.bndyjdl/total2)+'px'}"></span></li>
				</ul>
			</Card>
			</Col>
			<Col span="9">
				<Card class="ranklist-container">
					<h3 slot="title">客户申报电量偏差Top10</h3>
					<ul>
						<li v-for='(item,index) in companyList3' :title = 'item.name'><span class="ranking">No.{{index+1}}</span><span class="company-name">{{item.name}}</span><span class="rate">{{item.ratio *100}}%</span>
						<span class="ranklist-bar" :style="{width:200*item.ratio+'px'}"></span></li>
					</ul>

				</Card>
			</Col>
		</Row>
	</div>

</template>
<style scoped>
	.ranklist-container li .city{
		width:80px;
		margin-left:25px;
	}
	.company-name{
		width: 185px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align: left;
		padding-left:20px;
	}
	.btn-group{
		margin-top: -8px;
	}
	li.active{
		color:red;
	}
	.red{
		color:red;
	}
	@media (min-width: 1365px) and (max-width: 1919px){
       .henan_map{
       	 width:1500px;
       	 height:500px;
       }
       .company-name{
		width: 160px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align: left;
		padding-left:20px;
	  }
	}
</style>