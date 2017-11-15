<script>
	export default{
	    name:'database',
		data(){
	        return{
                chartOption2: {
                    title : {
                        text: '历史用电量'
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['意向']
                    },
                    backgroundColor:'#fff',
                    calculable : true,
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['周一','周二','周三','周四','周五','周六','周日']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [

                        {
                            name:'意向',
                            type:'line',
                            smooth:true,
                            itemStyle: {normal: {areaStyle: {type: 'default'}}},
                            data:[1320, 1132, 601, 234, 120, 90, 20]
                        }
                    ]
                }
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
		<div class="history-table-container">
			<h3 class="title">历史用电量数据</h3>
			<div class="btn-group fr">
				<button class="button btnSelected">2017年</button>
				<button class="button">2016年</button>
				<button class="button">2015年</button>
				<button class="button">2014年</button>
			</div>
			<table width="100%" cellspacing="15">
				<thead>
					<tr>
						<th>户号</th>
						<th>01月</th>
						<th>02月</th>
						<th>03月</th>
						<th>04月</th>
						<th>05月</th>
						<th>06月</th>
						<th>07月</th>
						<th>08月</th>
						<th>09月</th>
						<th>10月</th>
						<th>11月</th>
						<th>12月</th>
						<th>合计</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<style scoped>
	.database-container{
		top: 75px;
		left: 225px;
		overflow: hidden;
	}
	.history-chart-container{
		width: 1447px;
		height: 371px;
		background-color: #fff;
		padding: 10px 15px;
	}
	.history-table-container{
		width: 1447px;
		height: 441px;
		background-color: #fff;
		margin-top: 15px;
		padding: 10px 15px;

	}
	.history-table-container th{
		height: 40px;
		background-color: #f6f6f6;

	}
</style>