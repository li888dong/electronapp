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
			<Row class="fenYe">
				<Col span='24'>
				<Page :total="66" show-total show-elevator></Page>
				<Button type="primary">确定</Button>
				</Col>
			</Row>
		</Card>
		<Modal
				v-model="modal1"
				:title="`${editMonth} 计划进度`"
				@on-ok="saveEdit"
				@on-cancel="cancel">
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
				<Col span="14"><DatePicker type="daterange" placeholder="Select date" v-model="decl_cycle"></DatePicker></Col>

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
	            editMonth:'',
                edit_bid_day:'',
                edit_fore_cycle:[],
                edit_decl_cycle:[],
                edit_cf_cycle:[],
                columns1: [
                    {
                        title: '交易月份',
                        key: 'n1'
                    },
                    {
                        title: '竞价日期',
                        width: 200,
                        key: 'n2'
                    },
                    {
                        title: '预测电量时间',
                        key: 'n3'
                    },
                    {
                        title: '申报电量时间',
                        key: 'n4'
                    },
                    {
                        title: '购电确认时间',
                        key: 'n5'
                    },
                    {
                        title: '状态',
                        key: 'n6'
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
                                            this.editMonth = params.row.n1;
											console.log(params.row.n1)
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
            //TODO:多条计划进度时的展现
            tableData:function () {
                let arr = [];
                let obj = {};
                obj.n1 = new Date().getFullYear()+'-'+(new Date().getMonth()+1);
                obj.n2 = this.$route.query.planDate.bid_day;
                obj.n3 = this.$route.query.planDate.fore_cycle_start+'~'+this.$route.query.planDate.fore_cycle_end;
                obj.n4 = this.$route.query.planDate.decl_cycle_start+'~'+this.$route.query.planDate.decl_cycle_end;
                obj.n5 = this.$route.query.planDate.cf_cycle_start+'~'+this.$route.query.planDate.cf_cycle_end;
                obj.n6 = this.$route.query.planStatus ==='1'?'进行中':'已确定';
                arr.push(obj);
	            return arr
            },
            planDate:function () {
	            return this.$route.query.planDate
            },
            planStatus:function () {
	            return this.$route.query.planStatus
            },
	    },
        mounted() {
            this.planChart();
        },
        components: {
            'myFenye': myFenye
        },
        methods: {
            saveEdit(){
                this.$http.post(this.$api.ADD_SCHEDULE,{
                    com_id:this.$store.getters.com_id,
	                month:this.editMonth,
	                bid_day:this.edit_bid_day.Format('yyyy-MM-dd'),
                    fore_cycle:this.edit_fore_cycle[0].Format('yyyy-MM-dd')+`/`+this.edit_fore_cycle[1].Format('yyyy-MM-dd'),
                    decl_cycle:this.edit_decl_cycle[0].Format('yyyy-MM-dd')+`/`+this.edit_decl_cycle[1].Format('yyyy-MM-dd'),
                    cf_cycle:this.edit_cf_cycle[0].Format('yyyy-MM-dd')+`/`+this.edit_cf_cycle[1].Format('yyyy-MM-dd'),
                })
                    .then(res => {
                        console.log('设置计划进度',res);

                    }, err => {
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
                            name: '辅助',
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
                            name: '交易月份：2017-12',
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