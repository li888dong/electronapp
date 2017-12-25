<script>
    export default {
        name: 'caiji',
        data() {
            return {
                terminalList:[],
                currentPDS:0,
                powerType: '综合',
                origratio:'',
                columnzh: [
                    {
                        title: '采集时间',
                        key: 'updated_at'
                    },
                    {
                        title: '电量',
                        key: 'pat'
                    },
                    {
                        title: '有功功率',
                        key: 'active_power'
                    },
                    {
                        title: '无功功率',
                        key: 'reactive_power'
                    },
                    {
                        title: '视在功率',
                        key: 'inspect_power'
                    },
                    {
                        title: '功率因数',
                        key: 'power_factor'
                    }
                ],
                columndianliang: [
                    {
                        title: '采集时间',
                        key: 'updated_at'
                    },
                    {
                        title: '正向有功总（示数）',
                        key: 'pat'
                    },
                    {
                        title: '正向有功电量',
                        key: 'patall'
                    },
                    {
                        title: '费率',
                        key: 'rate',
	                    width:60
                    },
                    {
                        title: '正向无功总（示数）',
                        key: 'prt'
                    },
                    {
                        title: '正向无功电量',
                        key: 'prteall'
                    },
                    {
                        title: '反向有功总（示数）',
                        key: 'rap'
                    },
                    {
                        title: '反向有功电量',
                        key: 'rapeall'
                    },
                    {
                        title: '反向无功总（示数）',
                        key: 'rrpt'
                    },
                    {
                        title: '反向无功电量',
                        key: 'rrptall'
                    },
                ],
                columndianliu: [
                    {
                        title: '采集时间',

                        key: 'updated_at'
                    }, {
                        title: 'A相（示数）',

                        key: 'caall'
                    }, {
                        title: 'A相电流',

                        key: 'cur_a'
                    }, {
                        title: 'B相（示数）',

                        key: 'cball'
                    }, {
                        title: 'B相电流',

                        key: 'cur_b'
                    }, {
                        title: 'C相（示数）',

                        key: 'ccall'
                    }, {
                        title: 'C相电流',

                        key: 'cur_c'
                    },
                ],
                columndianya: [
                    {
                        title: '采集时间',

                        key: 'updated_at'
                    }, {
                        title: 'A相（示数）',

                        key: 'vaall'
                    }, {
                        title: 'A相电压',

                        key: 'vol_a'
                    }, {
                        title: 'B相（示数）',

                        key: 'vball'
                    }, {
                        title: 'B相电压',

                        key: 'vol_b'
                    }, {
                        title: 'C相（示数）',

                        key: 'vcall'
                    }, {
                        title: 'C相电压',

                        key: 'vol_c'
                    },
                ],
                columngonglv: [
                    {
                        title: '采集时间',
                        key: 'updated_at'
                    }, {
                        title: '总有功（示数）',
                        key: 'active_powerall'
                    }, {
                        title: '总有功功率',

                        key: 'active_power'
                    }, {
                        title: '总无功（示数）',
                        key: 'reactive_powerall'
                    }, {
                        title: '总无功功率',

                        key: 'reactive_power'
                    }, {
                        title: 'A相有功功率',

                        key: 'apa'
                    }, {
                        title: 'A相无功功率',

                        key: 'rpa'
                    }, {
                        title: 'B相有功功率',

                        key: 'apb'
                    }, {
                        title: 'B相无功功率',

                        key: 'rpb'
                    }, {
                        title: 'C相有功功率',

                        key: 'apc'
                    }, {
                        title: 'C相无功功率',

                        key: 'rpc'
                    },
                ],
                columnyinshu: [
                    {
                        title: '采集时间',
                        key: 'updated_at'
                    },
                    {
                        title: '总功率因数（瞬时）',
                        key: 'power_factor'
                    },
                    {
                        title: 'A相功率因数（瞬时）',
                        key: 'pfa'
                    },
                    {
                        title: 'B相功率因数（瞬时）',
                        key: 'pfb'
                    },
                    {
                        title: 'C相功率因数（瞬时）',
                        key: 'pfc'
                    },
                    {
                        title: '总功率因数（计算）',
                        key: 'power_factorall'
                    },
                ],
	            zhData:[],
	            dianliangData:[],
	            dianliuData:[],
	            dianyaData:[],
	            gonglvData:[],
	            yinshuData:[],
                limit:13,
                currentPage:1,
                totalPages:0,
                typeNum:0,
                type:'综合',
                loading:false,
                clientid:''
            }
        },
        methods: {
            pageListen: function (data) {
                this.msg = '当前页码：' + data
            },
            changeSelect(pds,id,clientid) {
                 this.currentPDS = pds;
                 this.clientid = clientid;
                 switch(this.typeNum){
                    case 0:
                     this.type = '综合';
                     break;
                     case 1:
                      this.type = '电量';
                      break;
                      case 2:
                      this.type = '电流';
                      break;
                      case 3:
                      this.type = '电压';
                      break;
                      case 4:
                      this.type = '功率';
                      break;
                      case 5:
                      this.type = '功率因数';
                      break;
                }
                 this.$http.post(this.$api.CLIENT_TERMINAL_RECORD, {
                    cus_id: this.cus_id,
                    clientid: this.clientid,
                    type: this.typeNum,
                    limit:this.limit,
                    page:this.currentPage
                }).then(res => {
                    console.log("终端采集记录", res);
                    let data = res.data.data;
                    this.origratio = res.data.origratio;
                    this.totalPages = data.total;
                        this.currentPage = data.current_page
                    if (this.type === '综合'){
                        this.zhData = data.data;    
                    } else if (this.type === '电量'){
                        this.dianliangData = data.data;
                    }else if (this.type === '电流'){
                        this.dianliuData = data.data;
                    }else if (this.type === '电压'){
                        this.dianyaData = data.data;
                    }else if (this.type === '功率'){
                        this.gonglvData = data.data;
                    }else if (this.type === '功率因数'){
                        this.yinshuData = data.data;
                    }
                    this.loading = false;
                }, err => {
                    this.loading = false;
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.loading = false;
                    this.$api.errcallback(err);
                })
                console.log(this.clientid);
            },
            //用户终端列表
            clientTerminalList() {
                this.$http.post(this.$api.CLIENT_TERMINAL_LIST, {cus_id: this.cus_id}).then(res => {
                    console.log('用户终端列表', res.data[0]);
                    this.terminalList = res.data[0].data;
                    this.terminalCollectRecord('综合');
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            terminalCollectRecord(type) {
                this.currentPage = 1;
                this.currentPDS = 0;
                // let typeNum = 0;
                switch (type) {
                    case "综合":
                        this.typeNum = 0;
                        break;
                    case "电量":
                        this.typeNum = 1;
                        break;
                    case "电流":
                        this.typeNum = 2;
                        break;
                    case "电压":
                        this.typeNum = 3;
                        break;
                    case "功率":
                        this.typeNum = 4;
                        break;
                    case "功率因数":
                        this.typeNum = 5;
                        break;
                }
                this.loading = true;
                this.$http.post(this.$api.CLIENT_TERMINAL_RECORD, {
                    cus_id: this.cus_id,
                    clientid: this.$store.getters.clientid,
                    type: this.typeNum,
                    limit:this.limit,
                    page:this.currentPage
                }).then(res => {
                    console.log("终端采集记录", res);
                    let data = res.data.data;
	                this.origratio = res.data.origratio;
                    this.totalPages = data.total;
                        this.currentPage = data.current_page
                    if (type === '综合'){
                        this.zhData = data.data;    
                    } else if (type === '电量'){
                        this.dianliangData = data.data;
                    }else if (type === '电流'){
                        this.dianliuData = data.data;
                    }else if (type === '电压'){
                        this.dianyaData = data.data;
                    }else if (type === '功率'){
                        this.gonglvData = data.data;
                    }else if (type === '功率因数'){
                        this.yinshuData = data.data;
                    }
                    this.loading = false;
                }, err => {
                    this.loading = false;
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.loading = false;
                    this.$api.errcallback(err);
                })
            },
            pageChange(value){
                switch(this.typeNum){
                    case 0:
                     this.type = '综合';
                     break;
                     case 1:
                      this.type = '电量';
                      break;
                      case 2:
                      this.type = '电流';
                      break;
                      case 3:
                      this.type = '电压';
                      break;
                      case 4:
                      this.type = '功率';
                      break;
                      case 5:
                      this.type = '功率因数';
                      break;
                }
                this.loading = true;
                this.$http.post(this.$api.CLIENT_TERMINAL_RECORD, {
                    cus_id: this.cus_id,
                    clientid: this.$store.getters.clientid,
                    type: this.typeNum,
                    limit:this.limit,
                    page:value
                }).then(res => {
                    console.log("终端采集记录", res);
                    let data = res.data.data;
                    this.origratio = res.data.origratio;
                    this.totalPages = data.total;
                    this.currentPage = data.current_page;
                    if (this.type === '综合'){
                        this.zhData = data.data;
                    } else if (this.type === '电量'){
                        this.dianliangData = data.data;
                    }else if (this.type === '电流'){
                        this.dianliuData = data.data;
                    }else if (this.type === '电压'){
                        this.dianyaData = data.data;
                    }else if (this.type === '功率'){
                        this.gonglvData = data.data;
                    }else if (this.type === '功率因数'){
                        this.yinshuData = data.data;
                    }
                    this.loading = false;
                }, err => {
                    this.loading = false;
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.loading = false;
                    this.$api.errcallback(err);
                })
               
            }
        },
	    computed:{
           cus_id:function(){
             return this.$store.getters.cus_id;
           }
	    },
        watch:{
            cus_id:function(){
                this.clientTerminalList();
                // this.pageChange();
            }
        },
        beforeMount() {
            this.clientTerminalList();
        }
    }
</script>
<template>
	<div class="client-container">
		<Card style="height: 852px;" class="relative">
			<h3 slot="title">终端采集记录 <span
					style="color: #999;font-weight:normal;font-size: 12px;">采集记录仅记录最近60天的采集记录</span></h3>
			<div slot="extra" class="btn-group">
				<RadioGroup v-model="powerType" type="button" v-on:on-change="terminalCollectRecord">
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
					<template v-for="(item,index) in terminalList">
						<my-tab v-on:changeSelect="changeSelect(index,item.id,item.clientid)"
						        v-bind:type="currentPDS === index?'disabled':'normal'">{{item.mea_name}}
						</my-tab>
					</template>
				</div>
			</Row>
			<Row v-if="powerType ==='综合'">
				<h3 class="fr">综合倍率：<span class="bl">{{origratio}}</span></h3>

				<Col span="24">
				<Table :columns="columnzh" :data="zhData" :loading='loading'></Table>
				</Col>

			</Row>
			<Row v-if="powerType ==='电量'">
				<h3 class="fr">电量倍率：<span class="bl">{{origratio}}</span></h3>

				<Col span="24">
				<Table :columns="columndianliang" :data="dianliangData" :loading='loading'></Table>

				</Col>

			</Row>
			<Row v-if="powerType ==='电流'">
				<h3 class="fr">电流倍率：<span class="bl">{{origratio}}</span></h3>

				<Col span="24">
				<Table :columns="columndianliu" :data="dianliuData" :loading='loading'></Table>

				</Col>

			</Row>
			<Row v-if="powerType ==='电压'">
				<h3 class="fr">电压倍率：<span class="bl">{{origratio}}</span></h3>

				<Col span="24">
				<Table :columns="columndianya" :data="dianyaData" :loading='loading'></Table>

				</Col>

			</Row>
			<Row v-if="powerType ==='功率'">
				<h3 class="fr">综合倍率：<span class="bl">{{origratio}}</span></h3>

				<Col span="24">
				<Table :columns="columngonglv" :data="gonglvData" :loading='loading'></Table>

				</Col>

			</Row>
			<Row v-if="powerType ==='功率因数'">
				<h3 class="fr">综合倍率：<span class="bl">{{origratio}}</span></h3>

				<Col span="24">
				<Table :columns="columnyinshu" :data="yinshuData" :loading='loading'></Table>

				</Col>

			</Row>

			<div class="page-container">

				<Page :total="totalPages" :page-size='limit' :current='currentPage' show-elevator show-total v-on:on-change='pageChange'></Page>
			</div>

		</Card>

	</div>
</template>
<style scoped>
	.bl {
		font-size: 18px;
		color: #F38900;
	}

	.btn-group {
		margin-top: -8px;
	}
	.tab-container span {
		margin-right: 5px;
	}
</style>