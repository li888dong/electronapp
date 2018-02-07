<template>
	<div class="main-container">
		<Card style="height: 892px;">
			<h3 slot="title">计划进度</h3>
			<div id="myCharts" :style="{width: '100%', height: '260px'}">

			</div>

			<Row>
				<Table border :columns='columns1' :data='tableData'></Table>
			</Row>

			<!-- 分页 -->
			<!--<Row class="fenYe">-->
				<!--<Col span='24'>-->
				<!--<Page :total="66" show-total show-elevator></Page>-->
				<!--<Button type="primary">确定</Button>-->
				<!--</Col>-->
			<!--</Row>-->
		</Card>
		<Modal
				v-model="modal1"
				:title="`${editMonth} 计划进度`"
				@on-ok="saveEdit">
			<Row>
				<Col span="10" class="text-right">月度集中竞价日期：</Col>
				<Col span="14"><DatePicker  type="date" placeholder="Select date" v-model="edit_bid_day"></DatePicker></Col>
			</Row>
			<Row className="mgt_15">
				<Col span="10" class="text-right">预测电量周期：</Col>
				<Col span="14"><DatePicker type="daterange" placeholder="Select date" v-model="edit_fore_cycle"></DatePicker></Col>

			</Row>
			<Row className="mgt_15">
				<Col span="10" class="text-right">客户申报周期：</Col>
				<Col span="14"><DatePicker type="daterange" placeholder="Select date" v-model="edit_decl_cycle"></DatePicker></Col>

			</Row>
			<Row className="mgt_15">
				<Col span="10" class="text-right">购电量确认开始周期：</Col>
				<Col span="14"><DatePicker type="daterange" placeholder="Select date" v-model="edit_cf_cycle"></DatePicker></Col>

			</Row>
		</Modal>
	</div>
</template>

<script>

    import myFenye from '@/components/Tool/myFenye.vue'

    export default {
        name: 'planInfo',
        data() {
            return {
                modal1:false,
	            editMonth:'2017-12',
                edit_bid_day:'',
                edit_fore_cycle:[],
                edit_decl_cycle:[],
                edit_cf_cycle:[],
	            tableData:[{month:'-', bid_day:'-',fore_cycle:'-',decl_cycle:'-',cf_cycle:'-',status:'-'}],
                planDate:{
                    bid_day: "",
                    fore_cycle_start: "",
                    fore_cycle_end: "",
                    decl_cycle_start: "",
                    decl_cycle_end: "",
                    cf_cycle_start: "",
                    cf_cycle_end: "",
                    biddays: 0
                },
                planStatus:1,
                columns1: [
                    {
                        title: '交易月份',
                        key: 'month'
                    },
                    {
                        title: '竞价日期',
                        width: 200,
                        key: 'bid_day'
                    },
                    {
                        title: '预测电量时间',
                        key: 'fore_cycle'
                    },
                    {
                        title: '申报电量时间',
                        key: 'decl_cycle'
                    },
                    {
                        title: '购电确认时间',
                        key: 'cf_cycle'
                    },
                    {
                        title: '状态',
                        key: 'status'
                    },
                    {
                        title: '操作',
                        key: 'n7',
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('span', {
                                    style: {
                                        marginRight: '5px',
                                        color: '#36c ',
                                        cursor: 'pointer'
                                    },
                                    on: {
                                        click: () => {

                                        }
                                    }
                                }, '完成'),
                                h('span', {
                                    style: {
                                        marginRight: '5px',
                                        color: '#36c',
                                        cursor: 'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            this.modal1 = true;
                                            this.editMonth = params.row.month;
											console.log(params.row.month)
                                        }
                                    }

                                }, '编辑')
                            ]);
                        }

                    }
                ]
            }
        },
	    computed:{

	    },
        mounted() {
            this.getSchedule();

        },
        components: {
            'myFenye': myFenye
        },
        methods: {
            saveEdit(){
                this.$http.post(this.$api.ADD_SCHEDULE,{
                    com_id:this.$store.getters.com_id,
	                month:this.edit_bid_day.Format('yyyy-MM'),
	                bid_day:this.edit_bid_day.Format('yyyy-MM-dd'),
                    fore_cycle:this.edit_fore_cycle[0].Format('yyyy-MM-dd')+`/`+this.edit_fore_cycle[1].Format('yyyy-MM-dd'),
                    decl_cycle:this.edit_decl_cycle[0].Format('yyyy-MM-dd')+`/`+this.edit_decl_cycle[1].Format('yyyy-MM-dd'),
                    cf_cycle:this.edit_cf_cycle[0].Format('yyyy-MM-dd')+`/`+this.edit_cf_cycle[1].Format('yyyy-MM-dd'),
                })
                    .then(res => {
                        console.log('设置计划进度',res);
						this.getSchedule();
                    }, err => {
                        this.$api.errcallback(err)
                    })
                    .catch(err=>{
                        this.$api.errcallback(err)
                    })
            },
	        getSchedule(){
                this.$http.post(this.$api.PLAN_REMIND,{
                    com_id:this.$store.getters.com_id
                })
                    .then(res => {

                        console.log('获取计划进度',res.data);
                        if(res.data.status ==='1'){
                             this.tableData = [res.data[0]];
                        this.planDate.bid_day = res.data[0].bid_day;
                        this.planDate.fore_cycle_start = res.data[0].fore_cycle.split('\/')[0];
                        this.planDate.fore_cycle_end = res.data[0].fore_cycle.split('\/')[1];
                        this.planDate.decl_cycle_start = res.data[0].decl_cycle.split('\/')[0];
                        this.planDate.decl_cycle_end = res.data[0].decl_cycle.split('\/')[1];
                        this.planDate.cf_cycle_start = res.data[0].cf_cycle.split('\/')[0];
                        this.planDate.cf_cycle_end = res.data[0].cf_cycle.split('\/')[1];
                        this.planDate.biddays = res.data[0].biddays;
                        this.planStatus = res.data.status;
                        this.planChart();
                        }else{
                             this.tableData = [{
                                 month:'-',
                                 bid_day:'-',
                                 fore_cycle:'-',
                                 decl_cycle:'-',
                                 cf_cycle:'-',
                                 status:'-'
                             }]
                        }
						
                    }, err => {
                        this.planChart();
                        this.$api.errcallback(err)
                    })
                    .catch(err=>{
                        this.$api.errcallback(err)
                    })
            },
            planChart() {
                let nowYear = new Date().getFullYear();
                let nowMonth = (new Date().getMonth()) + 1;
                let nowDay = (new Date().getDate());
                let day = new Date(nowYear, nowMonth, 0).getDate() + 1;


                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myCharts'));
                // 绘制图表
                myChart.setOption({
                    color:this.$store.getters.chartOption.colorList,
                    tooltip: this.$store.getters.chartOption.barTooltip,
                    legend: {
                        data: ['交易月份：'+nowYear+'-'+nowMonth],
                        left: -5,
                        top: 0,
                        itemWidth: 16,
                        itemHeight: 16,
                    },
                    grid: {
                        left: 0,
                        right: 10,
                        top: 50,
	                    bottom:40,
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'value',
                        min: 0,
                        max:31,
                        maxInterval: 1,
                        data: function () {
                            let list = [];
                            for (let i = 1; i < day + 1; i++) {
                                list.push(i)
                            }
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },

                    }],
                    yAxis: {
                        type: 'category',
                        data: ['预测电量日期', '客户申报日期', '购电确认日期', '月度竞价申报日期'],
                        splitLine: {
                            show: true
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                    },
                    series: [
                        {
                            name: '交易日开始日期',
                            type: 'bar',
                            stack: '总量',
                            itemStyle: {
                                normal: {
                                    barBorderColor: 'rgba(0,0,0,0)',
                                    color: 'rgba(0,0,0,0)'
                                },
                                emphasis: {
                                    barBorderColor: 'rgba(0,0,0,0)',
                                    color: 'rgba(0,0,0,0)'
                                }
                            },
//                        起始日期
                            data: [this.planDate.fore_cycle_start.slice(-2), this.planDate.decl_cycle_start.slice(-2), this.planDate.cf_cycle_start.slice(-2), nowDay]
                        },
                        {
                            name: '距交易日结束天数',
                            type: 'bar',
                            stack: '总量',
                            barMaxWidth: 20,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'inside'
                                }
                            },
//                        距离截止日期还有几天
                            data: [this.planDate.fore_cycle_end.slice(-2) - this.planDate.fore_cycle_start.slice(-2),this.planDate.decl_cycle_end.slice(-2)-this.planDate.decl_cycle_start.slice(-2), this.planDate.cf_cycle_end.slice(-2)- this.planDate.cf_cycle_start.slice(-2) , this.planDate.biddays]
                        }
                    ]
                })

            }
        }
    }
</script>

<style scoped>
	/* 分页的样式 */
	.fenYe {
		width: 100%;
		height: 60px;
		position: absolute;
		bottom: 0;
		left: 0;
		text-align: center;
	}

	.fenYe table {
		border: 0;
	}

	.fenYe ul {
		display: inline-block;
	}

	.fenYe button {
		top: -12px;
		left: 12px;
	}
	.text-right{
		text-align: right;
		height: 30px;
		line-height: 30px;
	}
</style>