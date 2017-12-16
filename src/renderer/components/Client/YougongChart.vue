<style scoped>
	.relative{
		background-color: #fff;
	}
</style>
<template>
	<Card class="relative">
		<h3 slot="title" style="position: absolute;top: 5px;left: 15px;">负荷曲线</h3>
		<div @click="showModal" style="position: absolute;z-index: 999;font-size: 14px;cursor: pointer;right: 10px;top: 5px;color: #31c9d7">
			<Icon type="qr-scanner"></Icon> &nbsp;全屏
		</div>
		<Modal v-model="modal3"
		       title="负荷曲线"
		       width="1500">
			<div id="lineModalChart3" :style="{width: '1449px', height: '543px',margin:'15px 0 0 20px'}">

			</div>
			<div slot="footer">

			</div>
		</Modal>
		<div id="lineChart3" :style="{width: '690px', height: '183px'}">

		</div>
	</Card>

</template>

<script>

    export default {
        name: 'lineChart',
        data() {
            return {
                modal3:false,
                modalName: [ '河南众企联合售电'],
                modalxData: ['2017年01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月', '10月', '11月', '12月'],
                modalyData: [
                    {
                        name: '河南众企联合售电',
                        type: 'line',
                        smooth: true,
                        data: [184, 160, 174, 160, 207, 158, 175, 156, 217, 253, 298, 130, 187, 130, 194, 169, 153, 161, 145, 109, 103, 162, 32, 228, 270, 226, 179, 226, 206, 165, 134, 177, 115, 185, 126, 158, 276, 284, 261, 149, 166, 175, 146, 275, 158, 112, 210, 114, 48]
                    }
                ],
            }
        },
        props:['active_power','updated_at'],
        computed:{
            powerChart:function () {
                return this.$echarts.init(document.getElementById('lineChart3'));
            },
            powerModalChart:function () {
                return this.$echarts.init(document.getElementById('lineModalChart3'));
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
                            data: this.updated_at
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
                            data:this.active_power
                        }
                    ]
                }
            },
            chartOption2: function () {
                return {
                    tooltip: this.$store.getters.chartOption.lineTooltip,
                    legend: {
                        data: this.modalName,
                        left: 0,
                        top: 2,
                        itemWidth: 16,
                        itemHeight: 16,
                    },
//                    toolbox: {
//                        feature: {
//                            myTool2: {
//                                show: true,
//                                title: '自定义扩展方法',
//                                icon: 'image://http://echarts.baidu.com/images/favicon.png',
//                                onclick: function () {
//                                    alert('myToolHandler2')
//                                }
//                            }
//                        }
//                    },
                    grid: {
                        top: '80',
                        left: 5,
                        right: 0,
                        bottom: '6%',
                        containLabel: true
                    },
                    color: this.$store.getters.chartOption.colorList,
                    xAxis: [
                        {
                            ...this.$store.getters.chartOption.xAxis,
                            data: this.modalxData,
                        }
                    ],
                    yAxis: this.$store.getters.chartOption.yAxis,
                    dataZoom: this.$store.getters.chartOption.dataZoom,
                    series: this.modalyData
                }
            }
        },
        mounted() {
            this.drawLine();
        },
	    watch:{
            active_power:function () {
	            this.drawLine()
            }
	    },
        methods: {
            showModal() {
                this.modal3 = true;
                this.$http.post(this.$api.CLIENT_CURVE_MODAL, {cus_id: this.$store.getters.cus_id})
                    .then(res => {
                        this.modalyData = [];
                        let data = res.data.data,
                            usernolist = Object.keys(data),
                            usernoData = Object.values(data),
                            active_power = [],
                            power_factor = [];
                        usernoData.map(i => {
                            this.modalxData = Object.values(i).map(j => j.collect_time);
                            active_power.push(Object.values(i).map(j => j.active_power));
                            power_factor.push(Object.values(i).map(j => j.power_factor));
                        });
                        usernolist.map((v,i) => {
                            this.modalName.push({name: v, icon: 'rect'});
                            this.modalyData.push({
                                name: v,
                                type: 'line',
                                smooth: true,
                                data: active_power[i]
                            })
                        });
                        this.modalName.unshift(this.$store.getters.cus_name);
                        this.modalxData.unshift(this.updated_at);
                        this.modalyData.unshift({
                            name: this.$store.getters.cus_name,
                            type: 'line',
                            smooth: true,
                            data: this.active_power
                        });
                        console.log(this.modalyData)
                        console.log('负荷曲线 户号', res);
                        this.drawModal1()
                    }, err => {
                        this.drawModal1();
                        this.$api.errcallback(err)
                    })
                    .catch(err => {
                        this.$api.errcallback(err)
                    });

            },
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

