<script>
	export default {
	    name:'caiji',
        data(){
            return{
                currentPDS:'1',
                powerType:'综合',
	            columnzh:[
                    {
                        title:'采集时间',
                        key:'cjsj'
                    },
		            {
                        title:'电量',
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
	            ],
	            columndianliang:[
                    {
                        title:'采集时间',
                        key:'cjsj'
                    },
		            {
                        title:'正向有功总（示数）',
                        key:'zxygz'
                    },
		            {
                        title:'正向有功电量',
                        key:'zxygdl'
                    },
		            {
                        title:'费率',
                        key:'fl'
                    },
		            {
                        title:'正向无功总（示数）',
                        key:'zxwgz'
                    },
		            {
                        title:'正向无功电量',
                        key:'zxwgdl'
                    },
		            {
                        title:'反向有功总（示数）',
                        key:'fxygz'
                    },
		            {
                        title:'反向有功电量',
                        key:'fxygdl'
                    },
		            {
                        title:'反向无功总（示数）',
                        key:'fxwgz'
                    },
		            {
                        title:'反向无功电量',
                        key:'fxwgdl'
                    },
	            ],
	            columndianliu:[
                    {
                        title:'采集时间',

                        key:'cjsj'
                    },{
                        title:'A相（示数）',

                        key:'Ass'
                    },{
                        title:'A相电流',

                        key:'Adl'
                    },{
                        title:'B相（示数）',

                        key:'Bss'
                    },{
                        title:'B相电流',

                        key:'Bdl'
                    },{
                        title:'C相（示数）',

                        key:'Css'
                    },{
                        title:'C相电流',

                        key:'Cdl'
                    },
	            ],
	            columndianya:[
                    {
                        title:'采集时间',

                        key:'cjsj'
                    },{
                        title:'A相（示数）',

                        key:'Ass'
                    },{
                        title:'A相电压',

                        key:'Adl'
                    },{
                        title:'B相（示数）',

                        key:'Bss'
                    },{
                        title:'B相电压',

                        key:'Bdl'
                    },{
                        title:'C相（示数）',

                        key:'Css'
                    },{
                        title:'C相电压',

                        key:'Cdl'
                    },
	            ],
	            columngonglv:[
                    {
                        title:'采集时间',

                        key:'cjsj'
                    },{
                        title:'总有功（示数）',

                        key:'zygss'
                    },{
                        title:'总有功功率',

                        key:'zyggl'
                    },{
                        title:'总无功（示数）',

                        key:'zwgss'
                    },{
                        title:'总无功功率',

                        key:'zwggl'
                    },{
                        title:'A相有功功率',

                        key:'Ayggl'
                    },{
                        title:'A相无功功率',

                        key:'Awggl'
                    },{
                        title:'B相有功功率',

                        key:'Byggl'
                    },{
                        title:'B相无功功率',

                        key:'Bwggl'
                    },{
                        title:'C相有功功率',

                        key:'Cyggl'
                    },{
                        title:'C相无功功率',

                        key:'Cwggl'
                    },
	            ],
	            columnyinshu:[
                    {
                        title:'采集时间',
                        key:'cjsj'
                    },
                    {
                        title:'总功率因数（瞬时）',
                        key:'zglysss'
                    },
                    {
                        title:'A相功率因数（瞬时）',
                        key:'Aglysss'
                    },
                    {
                        title:'B相功率因数（瞬时）',
                        key:'Bglysss'
                    },
                    {
                        title:'B相功率因数（瞬时）',
                        key:'Bglysss'
                    },
                    {
                        title:'总功率因数（计算）',
                        key:'zglysjs'
                    },
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
            powerType(type){
                console.log(this.powerType)
            }
        },
		components:{

		}
	}
</script>
<template>
	<div class="client-container">
		<Card style="height: 852px;" class="relative">
			<h3 slot="title">终端采集记录 <span style="color: #999;font-weight:normal;font-size: 12px;">采集记录仅记录最近60天的采集记录</span></h3>
			<div slot="extra" class="btn-group">
				<RadioGroup v-model="powerType" type="button" v-on:on-change="powerTypeSwitch">
					<Radio label="综合"></Radio>
					<Radio label="电量"></Radio>
					<Radio label="电流"></Radio>
					<Radio label="电压"></Radio>
					<Radio label="功率"></Radio>
					<Radio label="功率因数"></Radio>
				</RadioGroup>
			</div>
			<Row className="pds-container">
				<div class="tab-container">
					<my-tab v-on:changeSelect="changeSelect('1')" v-bind:type="currentPDS === '1'?'disabled':'normal'">10KV配电室-1</my-tab>
					<my-tab v-on:changeSelect="changeSelect('2')" v-bind:type="currentPDS === '2'?'disabled':'normal'">10KV配电室-2  </my-tab>
					<my-tab v-on:changeSelect="changeSelect('3')" v-bind:type="currentPDS === '3'?'disabled':'normal'">10KV配电室-3  </my-tab>
					<my-tab v-on:changeSelect="changeSelect('4')" v-bind:type="currentPDS === '4'?'disabled':'normal'">10KV配电室-4  </my-tab>
					<my-tab v-on:changeSelect="changeSelect('5')" v-bind:type="currentPDS === '5'?'disabled':'normal'">10KV配电室-5 </my-tab>
					<my-tab v-on:changeSelect="changeSelect('6')" v-bind:type="currentPDS === '6'?'disabled':'normal'">10KV配电室-6  </my-tab>
				</div>
			</Row>
			<Row v-if="powerType ==='综合'">
				<h3 class="fr">综合倍率：<span class="bl">5.000</span></h3>

				<Col span="24">
					<Table :columns="columnzh" size="large"></Table>

				</Col>

			</Row>
			<Row v-if="powerType ==='电量'">
				<h3 class="fr">电量倍率：<span class="bl">5.000</span></h3>

				<Col span="24">
					<Table :columns="columndianliang" size="large"></Table>

				</Col>

			</Row>
			<Row v-if="powerType ==='电流'">
				<h3 class="fr">电流倍率：<span class="bl">5.000</span></h3>

				<Col span="24">
					<Table :columns="columndianliu" size="large"></Table>

				</Col>

			</Row>
			<Row v-if="powerType ==='电压'">
				<h3 class="fr">电压倍率：<span class="bl">5.000</span></h3>

				<Col span="24">
					<Table :columns="columndianya" size="large"></Table>

				</Col>

			</Row>
			<Row v-if="powerType ==='功率'">
				<h3 class="fr">综合倍率：<span class="bl">5.000</span></h3>

				<Col span="24">
					<Table :columns="columngonglv" size="large"></Table>

				</Col>

			</Row>
			<Row v-if="powerType ==='功率因数'">
				<h3 class="fr">综合倍率：<span class="bl">5.000</span></h3>

				<Col span="24">
					<Table :columns="columnyinshu" size="large"></Table>

				</Col>

			</Row>

			<div class="page-container">

				<Page :total="100" show-elevator show-total></Page>
			</div>

		</Card>

	</div>
</template>
<style scoped>
	.bl{
		font-size: 18px;
		color: #F38900;
	}
	.btn-group{
		margin-top: -8px;
	}
</style>