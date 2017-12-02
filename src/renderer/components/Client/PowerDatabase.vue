<script>
	export default{
	    name:'database',
		data(){
	        return{
	            year:'2017年',
                chartOption2: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        left:-5,
                        top:10,
                        itemWidth:16,
                        itemHeight:16,
                        data:['2017','2016','2015','2014'],
                    },
	                backgroundColor:'#fff',
                    grid: {
                        top: 50,
                        left: 0,
                        right: 0,
                        bottom: '6%',
                        containLabel: true
                    },
                    color:['#4f8af9','#6ec71e','#f56e6a','#fc8b40','#818af8','#31c9d7','#f35e7a','#ab7aee','#14d68b','#edb00d'],
                    xAxis: [
                        {
                            type:'category',

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
                        end:50
                    },
                    series: [
                        {
                            name: '2017',
                            type: 'bar',
                            data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48]
                        },
                        {
                            name: '2016',
                            type: 'bar',
                            data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48].map(i=>i*0.9)
                        },
                        {
                            name: '2015',
                            type: 'bar',
                            data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48].map(i=>i*0.8)
                        },
                        {
                            name: '2014',
                            type: 'bar',
                            data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48].map(i=>i*1.1)
                        },
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
	<div class="client-container">
		<Row>
			<Col span="24">
				<Card>
					<h3 slot="title">历史用电量趋势</h3>
					<Row>

						<div class="history-chart-container" id="historyChart">
						</div>
					</Row>
				</Card>
			</Col>
		</Row>

		<Row className="mgt_15">
			<Card class="history-table-container">
				<h3 slot="title">历史用电量数据</h3>
				<div slot="extra" class="btn-group">
					<RadioGroup v-model="year" type="button">
						<Radio label="2017年"></Radio>
						<Radio label="2016年"></Radio>
						<Radio label="2015年"></Radio>
						<Radio label="2014年"></Radio>
					</RadioGroup>
				</div>

				<Table :columns="columns6" :data="data5" height="320"></Table>

			</Card>

		</Row>
	</div>
</template>
<style scoped>
	.history-chart-container{
		height: 371px;
	}
	.history-table-container{
		height:395px;
	}
	.btn-group{
		margin-top: -8px;
	}
</style>