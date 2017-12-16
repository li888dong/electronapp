<style scoped>
	.relative{
		background-color: #fff;
	}
</style>
<template>
	<Card class="relative">
		<h3 slot="title" style="position: absolute;top: 5px;left: 15px;">负荷曲线</h3>
		<div @click="modal1 = true;drawModal1()" style="position: absolute;z-index: 999;font-size: 14px;cursor: pointer;right: 10px;top: 5px;color: #31c9d7">
			<Icon type="qr-scanner"></Icon> &nbsp;全屏
		</div>
		<Modal v-model="modal1"
		       title="负荷曲线"
				width="1500">
			<div id="lineModalChart1" :style="{width: '1449px', height: '543px',margin:'15px 0 0 20px'}">

			</div>
			<div slot="footer">

			</div>
		</Modal>
		<div id="lineChart1" :style="{width: '449px', height: '183px'}">

		</div>

	</Card>

</template>

<script>

    export default {
        name: 'lineChart',
        data() {
            return {
                modal1:false,
                powerdata: [],
                powerdate: []
            }
        },
		props:['fuhe','created_at'],
        computed:{
            cus_id:function () {
                return this.$store.getters.cus_id
            },
	        powerChart:function () {
		        return this.$echarts.init(document.getElementById('lineChart1'));
            },
            powerModalChart:function () {
                return this.$echarts.init(document.getElementById('lineModalChart1'));
            },
            chartOption1:function () {
	            return {
                    tooltip: this.$store.getters.chartOption.lineTooltip,
                    grid: {
                        top:5,
                        left: 0,
                        right: 0,
                        bottom: '8%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            boundaryGap : true,
                            axisLine: {onZero: false},
                            type: 'category',
                            data: this.created_at
                        }
                    ],
                    yAxis: [
                        {
	                        ...this.$store.getters.chartOption.yAxis,
                            position:'right',

                        }
                    ],
//          设置可拖动区间
                    color:this.$store.getters.chartOption.colorList,
                    dataZoom:this.$store.getters.chartOption.dataZoom,
                    series: [
                        {
                            name: '负荷曲线',
                            type: 'line',
                            smooth:true,
                            itemStyle: this.$store.getters.chartOption.lineItemStyle,
                            data:this.fuhe
                        }
                    ]
                }
            },
	        chartOption2:function () {
		        return {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:[{name:'河南众企联合售电',icon:'rect'},{name:'111111111',icon:'rect'},{name:'22222222222',icon:'rect'},{name:'asdasdasda',icon:'rect'},{name:'dasfsdgdafasd',icon:'rect'}],
                        left:0,
                        top:2,
                        itemWidth:16,
                        itemHeight:16,
                    },
//                    toolbox: {
//                        feature: {
//                            myTool2: {
//                                show: true,
//                                title: '自定义扩展方法',
//                                icon: 'image://http://echarts.baidu.com/images/favicon.png',
//                                onclick: function (){
//                                    alert('myToolHandler2')
//                                }
//                            }
//                        }
//                    },
                    grid: {
                        top:'80',
                        left: 5,
                        right: 0,
                        bottom: '6%',
                        containLabel: true
                    },
                    color:['#4f8af9','#6ec71e','#f56e6a','#fc8b40','#818af8','#31c9d7','#f35e7a','#ab7aee','#14d68b','#edb00d'],
                    xAxis: [
                        {
                            type:'category',
                            boundaryGap : false,
                            data: ['2017年01月', '02月', '03月','04月','05月', '06月','07月','08月', '09月', '10月','11月','12月'],
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
                            position:'left',
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
                            data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48]
                        },
                        {
                            name: '111111111',
                            type: 'line',
                            smooth:true,
                            data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48].map(i=>i*0.8)
                        },
                        {
                            name: '22222222222',
                            type: 'line',
                            smooth:true,
                            data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48].map(i=>i*0.9)
                        },
                        {
                            name: 'asdasdasda',
                            type: 'line',
                            smooth:true,
                            data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48].map(i=>i*1.1)
                        },
                        {
                            name: 'dasfsdgdafasd',
                            type: 'line',
                            smooth:true,
                            data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48].map(i=>i*1.5)
                        },
                    ]
                }
            }
        },
	    mounted(){
            this.drawLine()
	    },
        watch:{
            fuhe:function () {
                this.drawLine()
            }
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                // 绘制图表
                this.powerChart.clear();
                this.powerChart.setOption(this.chartOption1);
            },
	        drawModal1(){
                // 基于准备好的dom，初始化echarts实例
                // 绘制图表
                this.powerModalChart.clear();
                this.powerModalChart.setOption(this.chartOption2);
	        }
        }
    }
</script>

