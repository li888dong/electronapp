<style scoped>
	.chart-container{
		height: 377px;
	}
	.danwei{
		position: absolute;
		top: 55px;
		right: 3px;
		border: none!important;
		background-color: transparent!important;
	}

	.btn-group{
		z-index: 10;
		margin-top: -8px;
	}
</style>
<template>
	<Card class="chart-container">

		<h3 slot="title">实时电量负荷</h3>

		<div class="btn-group relative" slot="extra">
			<RadioGroup v-model="powerRealtimeType" type="button" v-on:on-change="powerRealtimeTypeSwitch">
				<Radio label="15"></Radio>
				<Radio label="日"></Radio>
				<Radio label="月"></Radio>
			</RadioGroup>
			<span class="danwei">单位Mw.h</span>
		</div>

		<div id="powerChart" style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;">

		</div>
	</Card>

</template>

<script>

    export default {
        name: 'powerChart',
	    props:['belong'],
        data() {
            return {
                powerRealtimeType: '15',
	            type:'15分钟',
                powerdata1: {
                    xData:['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
					yData:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
                },
                powerdata2: [

                ],
                powerdata3: [],
                powerdate: [],
            }
        },
        watch:{
            cus_id:function () {
                this.doAjax(this.belong);
            }
        },
	    computed:{
            cus_id:function () {
                return this.$store.getters.cus_id
            },
            chartOption1:function () {
	            return {
                    tooltip: this.$store.getters.chartOption.lineTooltip,
                    legend: {
                        ...this.$store.getters.chartOption.legend,
                        left:17,
                        top:60,
                        data: ['实时电量'],
                    },
                    grid: {
                        ...this.$store.getters.chartOption.grid,
                        top:'100',
                        left: '20',
                        right: '20',
                        bottom: '8%'
                    },
                    xAxis: [
                        {
                            ...this.$store.getters.chartOption.xAxis,
                            data:this.powerdata1.xData
                        }
                    ],
                    yAxis: [
                        {
                            ...this.$store.getters.chartOption.yAxis,
                            position:'right'
                        }
                    ],
                        //设置可拖动区间
                    dataZoom: this.$store.getters.chartOption.dataZoom,
                    color:this.$store.getters.chartOption.colorList,
                    series:[
                        {
                            name: '实时电量',
                            type: 'line',
                            smooth:true,
                            itemStyle: {normal: {areaStyle: {type: 'default',opacity:0.08}}},
                            data:this.powerdata1.yData
                        }
                    ]
                }
            },
            chartOption2:function () {
                let dayList = [],
	                dayData = [];
                for (let i = 1;i<30;i++){
                    dayList.push(i+'日');
                    dayData.push(0)
                }
	            return {
                    tooltip:this.$store.getters.chartOption.barTooltip,
                    legend: {
	                    ...this.$store.getters.chartOption.legend,
                        left:17,
                        top:60,
                        data: ['实时电量', '谷段电量', '平段电量','峰段电量',]
                    },
                    grid: {
	                    ...this.$store.getters.chartOption.grid,
                        top:'100',
                        left: '20',
                        right: '20',
                        bottom: '8%'
                    },
                    xAxis: [
                        {
	                        ...this.$store.getters.chartOption.xAxis,
                            boundaryGap : true,
	                        data:dayList
                        }
                    ],
                    yAxis: [
                        {
	                        ...this.$store.getters.chartOption.yAxis,
                            position:'right'
                        }
                    ],
                    // 设置可拖动区间
                    dataZoom: this.$store.getters.chartOption.dataZoom,
                    color:this.$store.getters.chartOption.colorList,
                    series:[
                        {
                            name: '实时电量',
                            type: 'bar',
                            data: dayData.map((i) => i * 3),
                        },
                        {
                            name: '谷段电量',
                            type: 'bar',
	                        barWidth:'10%',
                            stack: '实时电量',
	                        data: dayData
                        },
                        {
                            name: '平段电量',
                            type: 'bar',
                            stack: '实时电量',
	                        data:dayData
                        },
                        {
                            name: '峰段电量',
                            type: 'bar',
                            stack: '实时电量',
	                        data:dayData
                        }

                    ]
                }
            },
            chartOption3:function () {
	            return {
                    tooltip: this.$store.getters.chartOption.barTooltip,
                    legend: {
	                    ...this.$store.getters.chartOption.legend,
                        left:17,
                        top:60,
                        data: ['申报电量', '预测电量','长协购电量','竞价购电量', '实时电量', '谷段电量', '平段电量','峰段电量',]
                    },
                    grid: {
	                    ...this.$store.getters.chartOption.grid,
                        top:'100',
                        left: '20',
                        right: '20',
                        bottom: '8%'
                    },
                    xAxis: [
                        {
	                        ...this.$store.getters.chartOption.xAxis,
                            data: ["1968/10/4", "1968/10/5", "1968/10/6", "1968/10/7", "1968/10/8", "1968/10/9", "1968/10/10", "1968/10/11", "1968/10/12", "1968/10/13", "1968/10/14", "1968/10/15", "1968/10/16", "1968/10/17", "1968/10/18", "1968/10/19", "1968/10/20", "1968/10/21", "1968/10/22", "1968/10/23", "1968/10/24", "1968/10/25", "1968/10/26", "1968/10/27", "1968/10/28", "1968/10/29", "1968/10/30", "1968/10/31", "1968/11/1", "1968/11/2", "1968/11/3", "1968/11/4", "1968/11/5", "1968/11/6", "1968/11/7", "1968/11/8", "1968/11/9", "1968/11/10", "1968/11/11", "1968/11/12", "1968/11/13", "1968/11/14", "1968/11/15", "1968/11/16", "1968/11/17", "1968/11/18", "1968/11/19", "1968/11/20", "1968/11/21"]
                        }
                    ],
                    yAxis: [
                        {
	                        ...this.$store.getters.chartOption.yAxis,
                            position:'right'
                        }
                    ],
                    //设置可拖动区间
                    dataZoom: this.$store.getters.chartOption.dataZoom,
                    color:this.$store.getters.chartOption.colorList,
                    series:[
                        {
                            name: '申报电量',
                            type: 'bar',
                            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        },
                        {
                            name: '预测电量',
                            type: 'bar',
	                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        },
                        {
                            name: '长协购电量',
                            type: 'bar',
                            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        }, {
                            name: '竞价购电量',
                            type: 'bar',
                            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        },
                        {
                            name: '实时电量',
                            type: 'bar',
                            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        },
                        {
                            name: '谷段电量',
                            type: 'bar',
                            barWidth : "3%",
                            stack: '实时电量',
                            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        },
                        {
                            name: '平段电量',
                            type: 'bar',
                            stack: '实时电量',
                            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        },
                        {
                            name: '峰段电量',
                            type: 'bar',
                            stack: '实时电量',
                            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        }

                    ]
                }
            },
		    powerChart:function () {
                return this.$echarts.init(document.getElementById('powerChart'))
            }
	    },
        mounted() {
            this.drawLine();
	        this.doAjax(this.belong);
        },
        methods: {
            doAjax(belong){
                if (belong === 'com'){
                    this.$http.post(this.$api.REALTIME_POWER_CURVE,{com_id:this.$store.getters.com_id,type:this.type})
                        .then(res => {
                            console.log('企业实时电量负荷曲线',res);
                            this.drawLine();
                        }, err => {
                            this.$api.errcallback(err);
                            this.drawLine();
                        })
                        .catch(err=>{
                            this.$api.errcallback(err)
                        })
                }else if (belong === 'cus'){
                    this.$http.post(this.$api.CLIENT_REALTIME_CURVE,{com_id:this.cus_id,type:this.type})
                        .then(res => {
                            console.log('用户实时电量负荷曲线',res);
                            this.drawLine();
                        }, err => {
                            this.$api.errcallback(err);
                            this.drawLine();
                        })
                        .catch(err=>{
                            this.$api.errcallback(err)
                        })
                }

            },
            powerRealtimeTypeSwitch(type) {
                if (type==='15'){
                    this.type = '15分钟';
                }else if (type === '日'){
                    this.type = '日'
                }else if (type === '月'){
                    this.type = '月'
                }
                this.doAjax(this.belong);
            },
            initData() {
                var base = +new Date(1968, 9, 3);
                var oneDay = 24 * 3600 * 1000;
                var date = [];
                var data = [];
                for (var i = 1; i < 50; i++) {
                    var now = new Date(base += oneDay);
                    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
                    data.push(Math.round((Math.random() * 300)));
                }
                this.powerdate = date;
                this.powerdata = data;
            },
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
	            this.powerChart.clear();
                if (this.powerRealtimeType === '15'){
                    this.powerChart.setOption(this.chartOption1,true);
                }else if (this.powerRealtimeType === '日'){
                    this.powerChart.setOption(this.chartOption2,true);
                }else {
                    this.powerChart.setOption(this.chartOption3,true);
                }
                // 绘制图表

            }
        }
    }
</script>

