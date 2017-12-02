<script>
    export default {
        name: 'changxie',
        data() {
            return {
                columns6:[
                    {
                        title:'类型',
	                    width:200,
                        key:'name',
                    },
                    {
                        title:'01月',
                        key:'Jan',
                    },{
                        title:'02月',
                        key:'Feb',
                    },
                    {
                        title:'03月',
                        key:'Mar',
                    },{
                        title:'04月',
                        key:'Apr',
                    },
                    {
                        title:'05月',
                        key:'May',
                    },{
                        title:'06月',
                        key:'Jun',
                    },{
                        title:'07月',
                        key:'July',
                    },{
                        title:'08月',
                        key:'Aug',
                    },{
                        title:'09月',
                        key:'Sept',
                    },{
                        title:'10月',
                        key:'Oct',
                    },{
                        title:'11月',
                        key:'Nov',
                    },{
                        title:'12月',
                        key:'Dec',
                    },{
                        title:'总计',
                        key:'all',
                    }
                ],
	            column2:[
	                {
	                    title:'合同编号',
		                key:'htbh'
	                },
	                {
	                    title:'电厂名称',
		                key:'dcmc'
	                },
	                {
	                    title:'签约电量',
		                key:'qydl'
	                },
	                {
	                    title:'签约日期',
		                key:'qyrq'
	                },
	                {
	                    title:'执行日期',
		                key:'zxrq'
	                },
	                {
	                    title:'联系人',
		                key:'lxr'
	                },
	                {
	                    title:'联系电话',
		                key:'lxdh'
	                },
	                {
	                    title:'查看',
		                key:'ck'
	                }
	            ],
                data5:[
                    {
                        name:'年度预测合计（wkw）',
                        Jan:'111',
                        Feb:'111',
                        Mar:'111',
                        Apr:'111',
                        May:'111',
                        Jun:'111',
                        July:'1',
                        Aug:'1',
                        Sept:'1',
                        Oct:'1',
                        Nov:'1',
                        Dec:'1',
                        all:'1',
                    },
                    {
                        name:'长协合同总计（wkw）',
                        Jan:'111',
                        Feb:'111',
                        Mar:'111',
                        Apr:'111',
                        May:'111',
                        Jun:'111',
                        July:'1',
                        Aug:'1',
                        Sept:'1',
                        Oct:'1',
                        Nov:'1',
                        Dec:'1',
                        all:'1',
                    },
                    {
                        name:'长协比例（%）',
                        Jan:'111',
                        Feb:'111',
                        Mar:'111',
                        Apr:'111',
                        May:'111',
                        Jun:'111',
                        July:'1',
                        Aug:'1',
                        Sept:'1',
                        Oct:'1',
                        Nov:'1',
                        Dec:'1',
                        all:'1',
                    },
                ],
                data2:[
					{
                        htbh:'-',
                        dcmc:'-',
                        qydl:'-',
                        qyrq:'-',
                        zxrq:'-',
                        lxr:'-',
                        lxdh:'-',
                        ck:'-'
					}
				],
                timeList: [
                    {
                        value: 'beijing',
                        label: '2011'
                    },
                    {
                        value: 'shanghai',
                        label: '2012'
                    },
                    {
                        value: 'shenzhen',
                        label: '2013'
                    },
                    {
                        value: 'hangzhou',
                        label: '2014'
                    },
                    {
                        value: 'nanjing',
                        label: '2015'
                    },
                    {
                        value: 'chongqing',
                        label: '2016'
                    }
                ],
                chartOption: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: ['电厂1', '电厂2', '电厂3', '电厂4', '电厂5'],
						left:'0',
						right:'0',
						itemWidth:16,
                    },
                    color:['#4f8af9','#6ec71e','#f56e6a','#fc8b40','#818af8','#31c9d7','#f35e7a','#ab7aee','#14d68b','#edb00d'],
                    grid: {
                        top:'40',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月',]

                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '电厂1',
                            type: 'bar',
                            stack: '总量',
	                        barWidth:40,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: [320, 302, 301, 334, 390, 330, 320, 320, 302, 301, 334, 390]
                        },
                        {
                            name: '电厂2',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: [120, 132, 101, 134, 90, 120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '电厂3',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '电厂4',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: [150, 212, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '电厂5',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: [820, 832, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                }
            }
        },
        methods: {
            pageListen: function (data) {
                this.msg = '当前页码：' + data
            },
            drawChart() {
                let cxChart = this.$echarts.init(document.getElementById('cxchart'));
                cxChart.setOption(this.chartOption)
            }
        },
        mounted() {
            this.drawChart();
        },
	    components:{

        }
    }
</script>
<template>
	<div class="main-container">
		<Row>
			<Card>
				<h3 slot="title">长协统计</h3>
				<div slot="extra" class="btn-group">
					<Button class="Button" type="primary">上一年</Button>
					<i-select :model.sync="model1" style="width:100px" placeholder='年度选择'>
						<i-option v-for="item in timeList" :value="item.value" :key = 'item.id'>{{ item.label }}</i-option>
					</i-select>
					<Button class="Button" type="primary">下一年</Button>
				</div>
				<div class="chart-container">
					<div id="cxchart" style="width:100%;height: 100%;">
					</div>
				</div>
			</Card>
		</Row>
		<Row className="mgt_15">

			<Table :columns="columns6" :data="data5"  height="180"></Table>
		</Row>
		<Row class="mgt_15">
			<Card class="relative">
					<h3 slot="title">签约统计</h3>
					<div slot="extra" class="btn-group">
						<Button type="primary"  @click.native="$router.push('ContractManagement')">长协合同</Button>
					</div>
					<div style="height: 230px;">
						<Table :columns="column2" :data="data2"></Table>
					</div>
				<div class="page-center">
					<!--分页-->
					<div class="fenYe">
						<Page :total="50" show-total show-elevator></Page> <Button type="primary">确定</Button>
					</div>
				</div>
			</Card>
		</Row>
	</div>
</template>
<style scoped>
	.data-panel {
		width: 100%;
		margin: 0;
		padding: 0;
	}

	.fr{
		clear: both;
	}
	.chart-container{
		height: 300px;
	}
	.btn-group{
		margin-top:-9px;
		z-index:10;
	}
	.relative .page-center{
		text-align: center;
		position: absolute;
		bottom: 0;
		left:0;
		right:0;
	}
	/* 分页的样式 */
	.page-center  .fenYe {
		width: 100%;
		height: 60px;
		background-color: #fff;
		padding-top: 10px;
		text-align: center;
	}
	.fenYe table{
		border: 0;
	}
	.fenYe ul {
		display: inline-block;
	}
	.fenYe button{
		top: -12px;
		left: 12px;
	}
</style>