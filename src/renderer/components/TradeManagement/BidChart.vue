<script>
    export default {
        name: 'bidchart',
	    props:['comsupply','powerplant'],
        data() {
            return {

            }
        },
	    watch:{
			comsupply:function () {

            },
            powerplant:function () {
                this.drawLine(this.chartOption2);
            },
	    },
	    computed:{
            chartOption2:function () {
                let xData = [],
                    xRange = [0],
                    dcbj =[],
                    gsbj =[],
                    sum = 0;
                this.comsupply.map(function (i) {
                    xRange.push(sum+=i.gongying);
                    gsbj.push(i.baojia);
                });
                this.powerplant.map(function (i) {
                    dcbj.push(i.baojia)
                });
				for (let i = 0;i<xRange.length;i++){
				    let count = (xRange[i+1]-xRange[i])/50;
				    let arr1 = [],
					    arr2 = [];
				    for (let j = 0;j<count;j++){
				        arr1.push(dcbj[i]);
				        arr2.push(gsbj[i]);
				    }
				    dcbj.splice(i,1,arr1);
					gsbj.splice(i,1,arr2)
				}
                dcbj = dcbj.reduce((a,b)=>a.concat(b));
                gsbj = gsbj.reduce((a,b)=>a.concat(b));
                for (let i = 0;i<sum/50+1;i++){
                    xData.push(50*i)
                }
                console.log('x轴区间',xRange);
                console.log('电厂报价',dcbj);
	            return {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    legend: {
                        data:['电厂报价', '售电公司报价'],
                        icon:'rect',
                        left:-5,
                        top:0,
                        itemWidth: 16,
                        itemHeight: 16,             // 图例图形宽度
                    },
                    grid: {
                        top:'40',
                        left: "0",
                        right: "16",
                        bottom: '',
                        containLabel: true
                    },
                    xAxis:  {
                        show:false,
                        type: 'category',
                        boundaryGap: false,
//                        data: ['0', '50', '100', '150', '200', '250', '300', '350', '400', '450', '500', '550', '600', '650', '700', '750', '800', '850', '900', '950','1000'],
	                    data:xData,
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
                        position:'right',
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                    },

                    color: ['#31c9d7','#14d86b'],
                    series: [
                        {
                            name:'电厂报价',
                            type:'line',
                            smooth: true,
                            data: dcbj,
                            markLine: {
                                symbol:['circle','circle'],
                                data: [ [{
                                    name: '100kw',
                                    coord:[`${xRange[0]}`,0],
                                    itemStyle:{
                                        normal:{
                                            color:'#31c9d7',
                                        }
                                    },
                                    label:{
                                        normal:{
                                            position:'middle',
                                        }
                                    },
                                    lineStyle:{
                                        normal:{
                                            type:'solid',
                                            width:2,
                                        }
                                    }
                                }, {
                                    coord:[`${xRange[1]}`,0],
                                }], [{
                                    name: '300kw',
                                    coord:[`${xRange[1]}`,0],
                                    itemStyle:{
                                        normal:{
                                            color:'#6ec71e',
                                        }
                                    },
                                    label:{
                                        normal:{
                                            position:'middle',
                                        }
                                    },
                                    lineStyle:{
                                        normal:{
                                            type:'solid',
                                            width:2,
                                        }
                                    }
                                }, {
                                    coord:[`${xRange[2]}`,0],
                                }], [{
                                    name: '500kw',
                                    coord:[`${xRange[2]}`,0],
                                    itemStyle:{
                                        normal:{
                                            color:'#fc8b40',
                                        }
                                    },
                                    label:{
                                        normal:{
                                            position:'middle',
                                        }
                                    },
                                    lineStyle:{
                                        normal:{
                                            type:'solid',
                                            width:2,
                                        }
                                    }
                                }, {
                                    coord:[`${xRange[3]}`,0],
                                }], [{
                                    name: '600kw',
                                    coord:[`${xRange[3]}`,0],
                                    itemStyle:{
                                        normal:{
                                            color:'#818af8',
                                        }
                                    },
                                    label:{
                                        normal:{
                                            position:'middle',
                                        }
                                    },
                                    lineStyle:{
                                        normal:{
                                            type:'solid',
                                            width:2,
                                        }
                                    }
                                }, {
                                    coord:[`${xRange[4]}`,0],
                                }]],
                            }
                        },
	                    {
                            name:'售电公司报价',
                            type:'line',
                            smooth: true,
                            data:gsbj,
                            markLine: {
                                symbol:['circle','circle'],
                                data: [ [{
                                    name: '100kw',
                                    coord:[`${xRange[0]}`,0],
                                    itemStyle:{
                                        normal:{
                                            color:'#31c9d7',
                                        }
                                    },
                                    label:{
                                        normal:{
                                            position:'middle',
                                        }
                                    },
                                    lineStyle:{
                                        normal:{
                                            type:'solid',
                                            width:2,
                                        }
                                    }
                                }, {
                                    coord:[`${xRange[1]}`,0],
                                }], [{
                                    name: '300kw',
                                    coord:[`${xRange[1]}`,0],
                                    itemStyle:{
                                        normal:{
                                            color:'#6ec71e',
                                        }
                                    },
                                    label:{
                                        normal:{
                                            position:'middle',
                                        }
                                    },
                                    lineStyle:{
                                        normal:{
                                            type:'solid',
                                            width:2,
                                        }
                                    }
                                }, {
                                    coord:[`${xRange[2]}`,0],
                                }], [{
                                    name: '500kw',
                                    coord:[`${xRange[2]}`,0],
                                    itemStyle:{
                                        normal:{
                                            color:'#fc8b40',
                                        }
                                    },
                                    label:{
                                        normal:{
                                            position:'middle',
                                        }
                                    },
                                    lineStyle:{
                                        normal:{
                                            type:'solid',
                                            width:2,
                                        }
                                    }
                                }, {
                                    coord:[`${xRange[3]}`,0],
                                }], [{
                                    name: '600kw',
                                    coord:[`${xRange[3]}`,0],
                                    itemStyle:{
                                        normal:{
                                            color:'#818af8',
                                        }
                                    },
                                    label:{
                                        normal:{
                                            position:'middle',
                                        }
                                    },
                                    lineStyle:{
                                        normal:{
                                            type:'solid',
                                            width:2,
                                        }
                                    }
                                }, {
                                    coord:[`${xRange[4]}`,0],
                                }]],
                            }
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
		width:100%;
		height:310px;
	}
</style>