<script>
    export default {
        name: 'bidchart',
        props: ['comsupply', 'powerplant'],
        data() {
            return {
                markLineData:[]
            }
        },
        mounted() {

        },
        computed: {
            chartOption2: function () {
                let xRange = [0],
                    dcbj = [],
                    gsbj = [],
                    average = [],
                    sum = 0;
//                降序公司报价
                this.comsupply.sort(function (a, b) {
                    return  b.baojia - a.baojia
                });
                this.comsupply.map(function (i) {
                    gsbj.push(i.baojia);
                });
//                升序电厂报价
                this.powerplant.sort(function (a, b) {
                    return a.baojia - b.baojia
                });
                this.powerplant.map(function (i) {
                    xRange.push(sum += i.gongying);
                    dcbj.push(i.baojia)
                });
				for (let j = 0;j<dcbj.length;j++){
                    average.push(gsbj[j]/2+dcbj[j]/2)
				}
				for (let i;i<xRange.length;i++){
                    this.markLineData.push([{
                        name: `${xRange[i]}kw`,
                        coord:[xRange[i],0],
                        itemStyle:{
                            normal:{
                                color:'#31c9d7'
                            }
                        },
                        lineStyle:{
                            normal:{
                                type:'solid',
                                width:20,
                            }
                        }
                    }, {
                        coord:[xRange[i+1],0],
                    }])
				}
                xRange.map(i=>{

                });
                console.log('x轴区间', xRange);
                console.log('电厂报价', dcbj);
                return {
                    tooltip: this.$store.getters.chartOption.lineTooltip,
                    legend: {
                        data: ['电厂报价', '售电公司报价','平均报价'],
                        icon: 'rect',
                        left: -5,
                        top: 0,
                        itemWidth: 16,
                        itemHeight: 16,             // 图例图形宽度
                    },
                    grid: {
                        top: '40',
                        left: "0",
                        right: "16",
                        bottom: '',
                        containLabel: true
                    },
                    xAxis: {
                        show: false,
                        type: 'category',
                        boundaryGap: false,
                        data: xRange,
                        axisLabel: {
                            formatter: '{value}kw'
                        },
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}'
                        },
                        axisPointer: {
                            snap: true
                        },
                        position: 'right',
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                    },

                    color: this.$store.getters.chartOption.colorList,
                    series: [
                        {
                            name: '电厂报价',
                            type: 'line',
                            smooth: true,
                            data: dcbj,
                            step: 'middle',
	                        itemStyle:{normal: {areaStyle: {type: 'default',opacity:0.8}}},
                            markLine: {
                                symbol: ['circle', 'circle'],
                                data: this.markLineData,
                            }
                        },
                        {
                            name: '售电公司报价',
                            type: 'line',
                            data: gsbj,
                            itemStyle:this.$store.getters.chartOption.lineItemStyle,
                            markLine: {
                                symbol: ['circle', 'circle'],
                                data: this.markLineData,
                            }
                        },
                        {
                            name: '平均值',
                            type: 'line',
                            data: average
                        },
                    ]
                }
            }
        },
        mounted() {
            this.drawLine(this.chartOption2);
        },
        methods: {
            drawLine(option = this.chartOption2) {
                // 基于准备好的dom，初始化echarts实例
                let bidSimulationChart = this.$echarts.init(document.getElementById('bid-simulation-chart'));
                // 绘制图表
                bidSimulationChart.setOption(option);
            }
        }
    }
</script>
<template>
	<div class="bid-simulation relative">
		<div id="bid-simulation-chart" style="position: absolute;top:0;bottom:0;right:0;left:0;"></div>
	</div>
</template>
<style>
	.bid-simulation {
		background-color: #fff;
		width: 100%;
		height: 310px;
	}
</style>