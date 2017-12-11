<script>
    export default {
        name: 'caiji',
        data() {
            return {
                currentPDS: '1',
                powerType: '综合',
                origratio:'',
                columnzh: [
                    {
                        title: '采集时间',
                        key: 'collect_time'
                    },
                    {
                        title: '电量',
                        key: 'electricity'
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
                        key: 'eall'
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
                        key: 'neall'
                    },
                    {
                        title: '反向有功总（示数）',
                        key: 'rap'
                    },
                    {
                        title: '反向有功电量',
                        key: 'feall'
                    },
                    {
                        title: '反向无功总（示数）',
                        key: 'rrpt'
                    },
                    {
                        title: '反向无功电量',
                        key: 'fneall'
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
            }
        },
        methods: {
            pageListen: function (data) {
                this.msg = '当前页码：' + data
            },
            changeSelect(pds) {
                this.currentPDS = pds;
            },
            terminalCollectRecord(type) {
                let typeNum = 0;
                switch (type) {
                    case "综合":
                        typeNum = 0;
                        break;
                    case "电量":
                        typeNum = 1;
                        break;
                    case "电流":
                        typeNum = 2;
                        break;
                    case "电压":
                        typeNum = 3;
                        break;
                    case "功率":
                        typeNum = 4;
                        break;
                    case "功率因数":
                        typeNum = 5;
                        break;
                }
                this.$http.post(this.$api.CLIENT_TERMINAL_RECORD, {
                    cus_id: this.$store.getters.cus_id,
                    clientid: this.$store.getters.clientid,
                    type: typeNum,
                }).then(res => {
                    console.log("终端采集记录", res);
                    let data = res.data.data;
	                this.origratio = res.data.origratio;
                    if (type === '综合'){
                        this.zhData = Object.values(data);
                    } else if (type === '电量'){
                        this.dianliangData = data;
                    }else if (type === '电流'){
                        this.dianliuData = data
                    }else if (type === '电压'){
                        this.dianyaData = data
                    }else if (type === '功率'){
                        this.gonglvData = data
                    }else if (type === '功率因数'){
                        this.yinshuData = data
                    }
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            }
        },
	    computed:{

	    },
        beforeMount() {
            this.terminalCollectRecord('综合');
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
					<my-tab v-on:changeSelect="changeSelect('1')" v-bind:type="currentPDS === '1'?'disabled':'normal'">
						10KV配电室-1
					</my-tab>
					<my-tab v-on:changeSelect="changeSelect('2')" v-bind:type="currentPDS === '2'?'disabled':'normal'">
						10KV配电室-2
					</my-tab>
					<my-tab v-on:changeSelect="changeSelect('3')" v-bind:type="currentPDS === '3'?'disabled':'normal'">
						10KV配电室-3
					</my-tab>
					<my-tab v-on:changeSelect="changeSelect('4')" v-bind:type="currentPDS === '4'?'disabled':'normal'">
						10KV配电室-4
					</my-tab>
					<my-tab v-on:changeSelect="changeSelect('5')" v-bind:type="currentPDS === '5'?'disabled':'normal'">
						10KV配电室-5
					</my-tab>
					<my-tab v-on:changeSelect="changeSelect('6')" v-bind:type="currentPDS === '6'?'disabled':'normal'">
						10KV配电室-6
					</my-tab>
				</div>
			</Row>
			<Row v-if="powerType ==='综合'">
				<h3 class="fr">综合倍率：<span class="bl">{{origratio}}</span></h3>

				<Col span="24">
				<Table :columns="columnzh" :data="zhData"></Table>
				</Col>

			</Row>
			<Row v-if="powerType ==='电量'">
				<h3 class="fr">电量倍率：<span class="bl">{{origratio}}</span></h3>

				<Col span="24">
				<Table :columns="columndianliang" :data="dianliangData"></Table>

				</Col>

			</Row>
			<Row v-if="powerType ==='电流'">
				<h3 class="fr">电流倍率：<span class="bl">{{origratio}}</span></h3>

				<Col span="24">
				<Table :columns="columndianliu" :data="dianliuData"></Table>

				</Col>

			</Row>
			<Row v-if="powerType ==='电压'">
				<h3 class="fr">电压倍率：<span class="bl">{{origratio}}</span></h3>

				<Col span="24">
				<Table :columns="columndianya" :data="dianyaData"></Table>

				</Col>

			</Row>
			<Row v-if="powerType ==='功率'">
				<h3 class="fr">综合倍率：<span class="bl">{{origratio}}</span></h3>

				<Col span="24">
				<Table :columns="columngonglv" :data="gonglvData"></Table>

				</Col>

			</Row>
			<Row v-if="powerType ==='功率因数'">
				<h3 class="fr">综合倍率：<span class="bl">{{origratio}}</span></h3>

				<Col span="24">
				<Table :columns="columnyinshu" :data="yinshuData"></Table>

				</Col>

			</Row>

			<div class="page-container">

				<Page :total="100" show-elevator show-total></Page>
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
</style>