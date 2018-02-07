<script>
    export default {
        name: 'database',
        data() {
            return {
                year: new Date().getFullYear()+'年',
                columns6: [
                    {
                        title: '户号',
                        key: 'cus_id',
                        width:120,
                    },
                    {
                        title: '1月',
                        key: 'month01',
                        width:100,
                    }, {
                        title: '2月',
                        key: 'month02',
                        width:100,
                    },
                    {
                        title: '3月',
                        key: 'month03',
                        width:100,
                    }, {
                        title: '4月',
                        key: 'month04',
                        width:100,
                    },
                    {
                        title: '5月',
                        key: 'month05',
                        width:100,
                    }, {
                        title: '6月',
                        key:'month06',
                        width:100,
                    }, {
                        title: '7月',
                        key: 'month07',
                        width:100,
                    }, {
                        title: '8月',
                        key: 'month08',
                        width:100,
                    }, {
                        title:'9月',
                        key: 'month09',
                        width:100,
                    }, {
                        title:'10月',
                        key:'month10',
                        width:100,
                    }, {
                        title:'11月',
                        key: 'month11',
                        width:100,
                    }, {
                        title:'12月',
                        key:'month12',
                        width:100,
                    }, {
                        title:'总计',
                        key:'total',
                        width:100,
                    }
                ],
                column5:[{
                   title:'月份',
                   key:'month',
                   width:80
                },{
                    title:'标号',
                    key:'mark',
                    width:80,
                    render:(h,params)=>{
                        return h('span',{
                            style:{
                                display:'inline-block',
                                width:'15px',
                                height:'15px',
                                lineHeight:'15px',
                                textAlign:'center',
                                backgroundColor:'#4f8af9',
                                color:'#fff'

                            }
                        },params.row.mark)
                    }
                },{
                    title:'趋势',
                    key:'trend',
                    width:80,
                    render:(h,params)=>{
                        if(params.row.trend =='上升'){
                            return h('span',{
                               attrs: {
                                    class: 'iconfont icon-web-icon-1'
                                },
                                style:{
                                    display:'inline-block',
                                    width:'20px',
                                    height:'20px',
                                    lineHeight:'18px',
                                    textAlign:'center',
                                    border:'1px solid red',
                                    borderRadius:'50%',
                                    color:'red',
                                }
                             },'')
                        }else if(params.row.trend =='下降'){
                            return h('span',{
                               attrs: {
                                    class: 'iconfont icon-web-icon-'
                                },
                                style:{
                                    display:'inline-block',
                                    width:'20px',
                                    height:'20px',
                                    lineHeight:'18px',
                                    textAlign:'center',
                                    border:'1px solid #19be6b',
                                    borderRadius:'50%',
                                    color:'#19be6b',
                                }
                             },'')
                        }  
                    }
                },{
                    title:'事件类别',
                    key:'classes',
                    width:100
                },{
                    title:'备注',
                    key:'notes',
                    width:200
                },{
                    title:'标注人',
                    key:'mark_person',
                    width:100
                }],
                markData:[{month:'12月',mark:'A',trend:'上升',classes:'环保原因停产qqq',notes:'出你个人给 i 很方便客户刚刚看 v 肌肤',mark_person:'皇甫丽丽'}],
                chartData: [{
                    name:'1234567890',
                    type:'line',
                    data:[11,500,200,100,20,300,80,50,60,1000],
                    markPoint: {
                        data: [
                        {value:'A',xAxis:0,yAxis:11},
                        ]
                     }
                 }],
                yearList:[],
                monthList:[{
                    label:'一月',
                    value:'一月',
                },
                {
                    label:'二月',
                    value:'二月',
                },
                {
                    label:'三月',
                    value:'三月',
                },
                {
                    label:'四月',
                    value:'四月',
                },
                {
                    label:'五月',
                    value:'五月',
                },
                {
                    label:'六月',
                    value:'六月',
                },
                {
                    label:'七月',
                    value:'七月',
                },
                {
                    label:'八月',
                    value:'八月',
                },
                {
                    label:'九月',
                    value:'九月',
                },
                {
                    label:'十月',
                    value:'十月',
                },
                {
                    label:'十一月',
                    value:'十一月',
                },
                {
                    label:'十二月',
                    value:'十二月',
                }
                ],
                noshList:[{label:'1234567890',value:'1234567890'}],
                loading:false,
                legendList:[],
                yearData:[{cus_id:'1234567890',month01:11.4567,month02:22,month03:999,month03:23,month04:444,month05:11,month06:22,month07:999,month08:23,month09:444,month10:98,month11:456,month12:1235}],
                addList:{
                    month:'',
                    user_no:'',
                    trend:'',
                    classes:'',
                    notes:'',
                },
            }
        },
        computed: {
            // yearData: function () {
            //     switch (this.year) {
            //         case this.yearList[0]:
            //             return this.tableData[0];
            //         case this.yearList[1]:
            //             return this.tableData[1];
            //         case this.yearList[2]:
            //             return this.tableData[2];
            //         case this.yearList[3]:
            //             return this.tableData[3]
            //     }
            // },
            historyChart:function(){
                return this.$echarts.init(document.getElementById('historyChart'));
            },
            chartOption2: function () {
                return {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        left:0,
                        top: 10,
                        itemWidth: 16,
                        itemHeight: 16,
                        data:['1234567890']
                    },
                    backgroundColor: '#fff',
                    grid: {
                        top: 50,
                        left:'4%',
                        right: 15,
                        bottom: '6%',
                        containLabel: true
                    },
                    color: this.$store.getters.chartOption.colorList,
                    xAxis: [
                        {
                            type:'category',
                            boundaryGap: false,
                            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                        }
                    ],
                    yAxis: [
                        {
                            type:'value',
                        }
                    ],

                    series:this.chartData

                }
            }
        },
        mounted() {

            // this.historyUserPower();
            this.drawChart();
        },
        methods: {
            drawChart() {
                // 基于准备好的dom，初始化echarts实例
                // this.historyChart.clear();
                // 绘制图表
                this.historyChart.setOption(this.chartOption2);
                
            },
            yearChange(year) {
                 this.year = year;
            },
            addMark(){
                let index = 0;
                switch(this.addList.month){
                    case '一月':
                    index =0;
                    break;
                    case '二月':
                    index =1;
                    break;
                    case '三月':
                    index =2;
                    break;
                    case '四月':
                    index =3;
                    break;
                    case '五月':
                    index = 4;
                    break;
                    case '六月':
                    index =5;
                    break;
                    case '七月':
                    index =6;
                    break;
                    case '八月':
                    index =7;
                    break;
                    case '九月':
                    index =8;
                    break;
                    case '十月':
                    index =9;
                    break;
                    case '十一月':
                    index =10;
                    break;
                    case '十二月':
                    index =11;
                    break;
                    default:
                    break;
                }
                var obj ={
                    value:1,
                    xAxis:index,
                    yAxis:this.chartData[0].data[index]
                }
               this.chartData[0].markPoint.data.push(obj);
               this.drawChart();
            },
            historyUserPower() {
                this.loading = true;
                this.historyChart.showLoading();
                this.$http.post(this.$api.HISTORY_ELECTRIC, {cus_id: this.$store.getters.cus_id}).then(res => {
                    console.log("历史用电量趋势", res.data.data);
                    if(res.data.status === '1'){
                        this.historyChart.hideLoading();
                        let data = res.data.data;
                      for (let year in data) {
                             this.legendList.unshift(year);
                             this.yearList.unshift(year+'年');
                        // if (data[year].length > 0) {
                            this.tableData.unshift(data[year]);
                            this.chartData.unshift({
                                name: year,
                                type: 'line',
                                barMaxWidth: 30,
                                data: [
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month01
                                    }, 0),
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month02
                                    }, 0),
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month03
                                    }, 0),
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month04
                                    }, 0),
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month05
                                    }, 0),
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month06
                                    }, 0),
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month07
                                    }, 0),
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month08
                                    }, 0),
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month09
                                    }, 0),
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month10
                                    }, 0),
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month11
                                    }, 0),
                                    data[year].reduce(function (preValue, curValue, index, array) {
                                        return preValue + curValue.month12
                                    }, 0),
                                ]
                            })
                        // }
                    }
                    console.log(this.tableData);
                    console.log(this.yearList);
                    this.drawChart(this.chartOption2);
                    this.loading = false;
                    }else{

                    }
                    
                }, err => {
                    this.loading = false;
                    this.historyChart.hideLoading();
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.loading = false;
                    this.historyChart.hideLoading();
                    this.$api.errcallback(err);
                })
            },

        },
    }
</script>
<template>
	<div class="client-container">
		<Row>
			<Col span="24">
			<Card>
                <h3 slot="title">历史用电量趋势</h3>
                <div slot='extra' class="btn-group">
                    <DatePicker type="year" placeholder="请选择年份"></DatePicker>

                </div>
				<Row>

					<div class="history-chart-container" id="historyChart">
					</div>
				</Row>
			</Card>
			</Col>
		</Row>

		<Row className="mgt_15">
			<Card class="history-table-container">
                <Row :gutter='10'>
                    <Col span='11'>
                       <Table :columns="columns6" :data="yearData" height="360px" :loading='loading' size='small'></Table>
                    </Col>
                    <Col span='13'>
                         <Row :gutter='5'>
                             <Col span='3'>
                             <Select v-model='addList.month'>
                                 <Option v-for='item in monthList' :value='item.value' :key='item.value'>{{item.label}}</Option>
                             </Select>
                            </Col>
                            <Col span='4'>
                                <Select v-model='addList.user_no'>
                                    <Option v-for='item in noshList' :value='item.value' :key='item.value'>{{item.label}}</Option>
                                </Select>
                            </Col>
                            <Col span='3'>
                                <Select v-model='addList.trend'>
                                    <Option value='上升'>上升</Option>
                                    <Option value='下降'>下降</Option>
                                </Select>
                            </Col>
                            <Col span='4'>
                                <Select v-model='addList.classes'>
                                    <Option value='环保原因停产'>环保原因停产</Option>
                                </Select>
                            </Col>
                            <Col span='8'>
                                <Input placeholder="备注" v-model='addList.notes'></Input>
                            </Col>
                            <Col span='2'>
                                <Button type="primary" @click='addMark'>保存</Button>
                            </Col>
                         </Row>
                         <Row style="margin-top:10px;">
                             <Table size='small' :columns='column5' :data='markData' height='318px'> </Table>
                         </Row>
                     </Col>
                </Row>
			</Card>

		</Row>
	</div>
</template>
<style scoped>
	.history-chart-container{
		height: 386px;
	}
    .history-table-container{
        height: 388px;
    }
	.btn-group {
		margin-top: -8px;
	}
</style>