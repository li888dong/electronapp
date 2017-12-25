<script>
    export default {
        name: 'bidchart',
        props: ['comsupply', 'powerplant'],
        data() {
            return {}
        },
        watch:{
            powerplant:function () {
	            this.drawLine()
            },
            comsupply:function () {
                console.log(this.comsupply)
	            this.drawLine()
            },
        },
        computed: {
            chartOption2: function () {
                //x轴总值
                let xRange = [0],
//	                电厂报价
                    dcbj = [],
//		            售电公司报价
                    gsbj = [],
//		            用来计算x轴区间的中间量
                    sum = 0,
//		            电厂名称
	                dcname=[],
//		            电厂供应量
	                dcgongying = [],
//		            售电公司数据坐标
                    gsData = [],
//		            平均值坐标
	                pjData = [],
//		            电厂数据
	                dcData = [];
//                售电公司根据报价降序
                this.comsupply.sort(function (a, b) {
                    return b.baojia - a.baojia
                })
                this.comsupply.map(function (i) {
                    gsbj.push(i.baojia);
                    gsData.push([i.gongying,i.baojia])
                });
//                电厂根据报价升序
                this.powerplant.sort(function (a, b) {
                    return a.baojia - b.baojia
                })
                this.powerplant.map(function (i) {
                    xRange.push(sum += i.gongying);
                    dcbj.push(i.baojia);
                    dcname.push(i.name);
                    dcgongying.push(i.gongying)
                });

                for (let i = 0;i<xRange.length;i++){
                    dcData.push([dcgongying[i],xRange[i],xRange[i+1],dcbj[i],dcname[i]])
                }
				dcData.map(i=>{
				    pjData.push([i[1]+i[0]/2,this.getAverage(gsData[0][0],gsData[1][0],gsData[0][1],gsData[1][1],i[1]+i[0]/2,i[3])]);

				});
                console.log('x轴区间', xRange);
                console.log('电厂报价', dcData);
                var colorList = this.$store.getters.chartOption.colorList;

                dcData = this.$echarts.util.map(dcData, function (item, index) {
                    return {
                        value: item,
                        itemStyle: {
                            normal: {
                                color: colorList[index]
                            }
                        }
                    };
                });

				gsData.map(i=>{

				});
                return {
                    tooltip: {
                        axisPointer: {
                            type: 'cross'
                        },
                    },
                    xAxis: {
                        scale: true
                    },
                    yAxis: {},
                    grid: {
                        top:'40',
                        left: "0",
                        right: "40",
                        bottom: '',
                        containLabel: true
                    },
                    series: [{
                        type: 'custom',
                        renderItem: this.renderItem,
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        dimensions: ['供应量','开始量', '结束量', '报价','电厂名称'],
                        encode: {
                            x: [1, 2],
                            y: 3,
                            tooltip: [ 0,3],
                            itemName: 4
                        },
                        data: dcData
                    },
                    {
                        type: 'line',
                        data: gsData
                    },
                    {
                        type: 'line',
                        symbolSize:'10',
	                    lineStyle:{
                            normal:{
                                color:'#fff'
                            }
	                    },
                        dimensions: ['供应量（KW时）','报价（元）'],
                        encode: {
                            x: 0,
                            y: 1,
                            tooltip: [0,1],
                        },
                        data: pjData
                    }]
                }
            }
        },
        mounted() {
            this.drawLine();
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let bidSimulationChart = this.$echarts.init(document.getElementById('bid-simulation-chart'));
                // 绘制图表
                bidSimulationChart.setOption(this.chartOption2);
            },
            renderItem(params, api) {
                var yValue = api.value(3);
                var start = api.coord([api.value(1), yValue]);
                var size = api.size([api.value(2) - api.value(1), yValue]);
                var style = api.style();

                return {
                    type: 'rect',
                    shape: {
                        x: start[0],
                        y: start[1],
                        width: size[0],
                        height: size[1]
                    },
                    style: style
                };
            },
	        getAverage(x1,x2,y1,y2,x,y3){
                let a = (y2-y1)/(x2-x1),
	                b = (x1*y2 - x2*y1)/(x1-x2);
                return ((a*x + b)+y3)/2
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