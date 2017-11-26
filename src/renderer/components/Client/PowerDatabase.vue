<script>
	export default{
	    name:'database',
		data(){
	        return{
                chartOption2: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:[{name:'河南众企联合售电',icon:'rect'}],
                        left:22,
                        top:2,
                        itemWidth:14,
                    },
	                backgroundColor:'#fff',
                    grid: {
                        top:'40',
                        left: '2%',
                        right: '2%',
                        bottom: '6%',
                        containLabel: true
                    },
                    color:['#48C3F3'],
                    xAxis: [
                        {
                            type:'category',
                            boundaryGap : false,
                            data: ['01月', '02月', '03月','04月','05月', '06月','07月','08月', '09月', '10月','11月','12月'],
                            splitLine: {show: false},
                            splitArea: {show: false},
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                        }
                    ],
                    yAxis: [
                        {
                            position:'right',
                            type: 'value',
                            boundaryGap: 0,
                            splitArea: {show: false},
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                        }
                    ],
                    dataZoom:{
                        bottom:-5,
                        start:0,
                        end:90
                    },
                    series: [
                        {
                            name: '河南众企联合售电',
                            type: 'line',
                            smooth:true,
                            itemStyle: {normal: {areaStyle: {type: 'default',opacity:0.3}}},
                            data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48]
                        }
                    ]
                },
				columns6:[
					{
					    title:'户号',
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
				data5:[
					{
					    name:'111',
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
					}
				]
	        }
		},mounted() {
            this.drawChart(this.chartOption2);
        },
		methods:{
            drawChart(option = this.chartOption2) {
                // 基于准备好的dom，初始化echarts实例
                let historyChart = this.$echarts.init(document.getElementById('historyChart'));
                // 绘制图表
                historyChart.setOption(option);
            }
		}
	}
</script>
<template>
	<div class="database-container relative">
		<div class="history-chart-container" id="historyChart">
		</div>
		<panel class="history-table-container mgt_15">
			<h3 class="title-lv2">历史用电量数据</h3>
			<div class="btn-group">
				<Button type="primary">2017年</Button>
				<Button type="default">2016年</Button>
				<Button type="default">2015年</Button>
				<Button type="default">2014年</Button>
			</div>
		</panel>
		<Row>
			<Col span="24">
				<Table :columns="columns6" :data="data5" width="1440" height="422"></Table>
			</Col>
		</Row>
	</div>
</template>
<style scoped>
	.database-container{
		top: 60px;
		left: 220px;
		overflow: hidden;
	}
	.history-chart-container{
		width:1440px;
		height: 371px;
		background-color: #fff;
	}
	.history-table-container{
		width:1440px;
		height: 50px;
	}

</style>