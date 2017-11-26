<script>
	import Pagenation from '@/components/Pagenation'
	export default {
	    name:'caiji',
        data(){
            return{
                currentPDS:'1',
	            column1:[
		            {
		                title:'采集时间',
			            width:'90',
			            key:'cjsj'
		            },
		            {
		                title:'势数',
                        key:'ss'
		            },
		            {
		                title:'倍率',
                        key:'bl'
		            },
		            {
		                title:'电量',
                        key:'dl'
		            },
		            {
		                title:'电压',
			            key:'dy'
		            },
		            {
		                title:'电流',
			            key:'dl'
		            },
		            {
		                title:'有功功率',
			            key:'yggl'
		            },
		            {
		                title:'无功功率',
			            key:'wggl'
		            },
		            {
		                title:'视在功率',
			            key:'szgl'
		            },
		            {
		                title:'功率因数',
			            key:'glys'
		            },
		            {
		                title:'负荷',
			            key:'fh'
		            },
		            {
		                title:'需量',
			            key:'xl'
		            }
	            ]
            }
        },
        methods:{
            pageListen: function (data) {
                this.msg = '当前页码：' + data
            },
            changeSelect(pds){
                this.currentPDS = pds;
            },
        },
		components:{
		    'pagenation':Pagenation
		}
	}
</script>
<template>
	<div class="client-container">
		<panel style="height: 852px;">
			<Row>
				<h3 class="title-lv3">终端采集记录 <small style="color: #999">采集记录仅记录最近60天的采集记录</small></h3>
			</Row>
			<Row>
				<ul class="pds-container">
					<div class="tab-container">
						<my-tab v-on:changeSelect="changeSelect('1')" v-bind:type="currentPDS === '1'?'zd':'normal'">10KV配电室-1</my-tab>
						<my-tab v-on:changeSelect="changeSelect('2')" v-bind:type="currentPDS === '2'?'zd':'normal'">10KV配电室-2  </my-tab>
						<my-tab v-on:changeSelect="changeSelect('3')" v-bind:type="currentPDS === '3'?'zd':'normal'">10KV配电室-3  </my-tab>
						<my-tab v-on:changeSelect="changeSelect('4')" v-bind:type="currentPDS === '4'?'zd':'normal'">10KV配电室-4  </my-tab>
						<my-tab v-on:changeSelect="changeSelect('5')" v-bind:type="currentPDS === '5'?'zd':'normal'">10KV配电室-5 </my-tab>
						<my-tab v-on:changeSelect="changeSelect('6')" v-bind:type="currentPDS === '6'?'zd':'normal'">10KV配电室-6  </my-tab>
					</div>
				</ul>
			</Row>
			<Row style="margin:0 20px;">
				<Col span="24">
					<Table :columns="column1" ></Table>
				</Col>

			</Row>
		</panel>
		<div class="page-container">

			<Page :total="100" show-elevator show-total></Page>
		</div>
	</div>
</template>
<style scoped>

	.pds-container{
		height: 76px;
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

</style>