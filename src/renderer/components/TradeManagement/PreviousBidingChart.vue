<script>
    export default {
        name: 'previousbidingchart',
        data() {
            return {
				gsData : [],
	            dcData:[],
	            gsName:[]
            }
        },
	    props:['comsupply','powerplant'],
	    computed:{
            bidSimulationChart:function () {
	            return this.$echarts.init(document.getElementById('bid-previous-chart'))
            },
            chartOption2:function () {
                let data1 = this.gsData.sort(function (a, b) {
                    return a - b
                });
                let data2 = this.dcData.sort(function (a, b) {
                    return b - a
                });
                console.log('33333',data1)
                let axisData = this.gsName;
                let barData1 = [];
                let barData2 = [];
                for(let i=0; i<axisData.length; i++){
                    barData1.push(Math.min(data1[i],data2[i]));
                    barData2.push(Math.abs(data1[i]-data2[i]));
                }
	            return {
                    tooltip: {
                        trigger: 'axis',
                        formatter: function (params) {
                            return '<p>售电公司报价 : ' + data2[params[0].dataIndex] + ' 元</p>' +
                                '<p>电厂报价 : ' + data1[params[0].dataIndex] + ' 元</p>' +
                                '<p>差值 : ' + barData2[params[0].dataIndex] + ' 元</p>';
                        }
                    },
                    legend: {
                        icon: 'rect',
                        itemWidth: 16,
                        itemHeight: 16,
                        data: ['电厂报价', '售电公司报价',],
                        left: '0',
                        top: '0%',
                    },
		            color:this.$store.getters.chartOption.colorList,
                    grid: {
                        left: '0',
                        right: '4%',
                        top: '15%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: axisData
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '电厂报价',
                            type: 'line',
                            smooth: true,
                            symbol: 'circle',
                            data: data1
                        },
                        {
                            name: '售电公司报价',
                            type: 'line',
                            smooth: true,
                            symbol: 'circle',
                            data: data2
                        },
                        // bar图
                        {
                            type: 'bar',
                            stack: 'test',
                            // barWidth:'10%',
                            itemStyle: {
                                normal: {
                                    color: 'rgba(0,0,0,0)'
                                }
                            },
                            data: barData1,
                            tooltip: {
                                show: false
                            }
                        },
                        {
                            type: 'bar',
                            stack: 'test',
                            barWidth: 4,
                            itemStyle: {
                                normal: {
                                    color: function (params) {
                                        // console.log(params);
                                        if (data1[params.dataIndex] > data2[params.dataIndex]) {
                                            return 'green';
                                        } else if (data1[params.dataIndex] < data2[params.dataIndex]) {
                                            return 'red';
                                        } else {
                                            return 'rgba(0,0,0,0)';
                                        }
                                    },
                                    barBorderRadius: 2
                                }
                            },
                            data: barData2,
                            tooltip: {
                                show: false
                            }

                        }

                    ]
                }
            }
	    },
        mounted() {
            this.gsName = this.comsupply.map(i=>i.name);
            this.gsData = this.comsupply.map(i=>i.price);
            this.dcData = this.powerplant.map(i=>i.price);
            this.drawLine();
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                // 绘制图表
                this.bidSimulationChart.setOption(this.chartOption2);
            }
        }
    }
</script>
<template>
	<div class="bid-simulation relative">
		<div id="bid-previous-chart" style="position: absolute;left:0;right:0;bottom:0;top:0;"></div>
	</div>
</template>
<style>
	.bid-simulation {
		width:100%;
		height:310px;
		background-color: #fff;
	}

</style>