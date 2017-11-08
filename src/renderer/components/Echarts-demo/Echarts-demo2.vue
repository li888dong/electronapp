<style>
	#myCharts-2 {
		margin: 0 auto;
	}
</style>

<template>
	<div style="width: 900px;margin: 0 auto">
		<div id="myCharts-2" :style="{width: '800px', height: '800px'}">

		</div>
		<button @click="backHome()">回到主页</button>
		<button @click="drawLine(chartOption1)">层叠柱状图</button>
		<button @click="drawLine(chartOption2)">嵌套环形图</button>
		<button @click="drawChina()">嵌套环形图</button>
		<div id="myCharts-map" :style="{width: '800px', height: '800px'}">

		</div>
	</div>

</template>

<script>
    export default {
        name: 'echarts-demo2',
        data() {
            return {
                chartOption1: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '直接访问',
                            type: 'bar',
                            data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '邮件营销',
                            type: 'bar',
                            stack: '广告',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'bar',
                            stack: '广告',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '视频广告',
                            type: 'bar',
                            stack: '广告',
                            data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '搜索引擎',
                            type: 'bar',
                            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                            markLine: {
                                lineStyle: {
                                    normal: {
                                        type: 'dashed'
                                    }
                                },
                                data: [
                                    [{type: 'min'}, {type: 'max'}]
                                ]
                            }
                        },
                        {
                            name: '百度',
                            type: 'bar',
                            barWidth: 5,
                            stack: '搜索引擎',
                            data: [620, 732, 701, 734, 1090, 1130, 1120]
                        },
                        {
                            name: '谷歌',
                            type: 'bar',
                            stack: '搜索引擎',
                            data: [120, 132, 101, 134, 290, 230, 220]
                        },
                        {
                            name: '必应',
                            type: 'bar',
                            stack: '搜索引擎',
                            data: [60, 72, 71, 74, 190, 130, 110]
                        },
                        {
                            name: '其他',
                            type: 'bar',
                            stack: '搜索引擎',
                            data: [62, 82, 91, 84, 109, 110, 120]
                        }
                    ]
                },
                chartOption2: {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            selectedMode: 'single',
                            radius: [0, '30%'],

                            label: {
                                normal: {
                                    position: 'inner'
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [
                                {value: 335, name: '直达', selected: true},
                                {value: 679, name: '营销广告'},
                                {value: 1548, name: '搜索引擎'}
                            ]
                        },
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['40%', '55%'],
                            label: {
                                normal: {
                                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                                    backgroundColor: '#eee',
                                    borderColor: '#aaa',
                                    borderWidth: 1,
                                    borderRadius: 4,
                                    // shadowBlur:3,
                                    // shadowOffsetX: 2,
                                    // shadowOffsetY: 2,
                                    // shadowColor: '#999',
                                    // padding: [0, 7],
                                    rich: {
                                        a: {
                                            color: '#999',
                                            lineHeight: 22,
                                            align: 'center'
                                        },
                                        // abg: {
                                        //     backgroundColor: '#333',
                                        //     width: '100%',
                                        //     align: 'right',
                                        //     height: 22,
                                        //     borderRadius: [4, 4, 0, 0]
                                        // },
                                        hr: {
                                            borderColor: '#aaa',
                                            width: '100%',
                                            borderWidth: 0.5,
                                            height: 0
                                        },
                                        b: {
                                            fontSize: 16,
                                            lineHeight: 33
                                        },
                                        per: {
                                            color: '#eee',
                                            backgroundColor: '#334455',
                                            padding: [2, 4],
                                            borderRadius: 2
                                        }
                                    }
                                }
                            },
                            data: [
                                {value: 335, name: '直达'},
                                {value: 310, name: '邮件营销'},
                                {value: 234, name: '联盟广告'},
                                {value: 135, name: '视频广告'},
                                {value: 1048, name: '百度'},
                                {value: 251, name: '谷歌'},
                                {value: 147, name: '必应'},
                                {value: 102, name: '其他'}
                            ]
                        }
                    ]
                },
                chartOption3: {
                    title: {
                        text: 'iphone销量',
                        subtext: '纯属虚构',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['iphone3', 'iphone4', 'iphone5']
                    },
                    visualMap: {
                        min: 0,
                        max: 2500,
                        left: 'left',
                        top: 'bottom',
                        text: ['高', '低'],           // 文本，默认为数值文本
                        calculable: true
                    },
                    toolbox: {
                        show: true,
                        orient: 'vertical',
                        left: 'right',
                        top: 'center',
                        feature: {
                            mark: {show: true},
                            dataView: {show: true, readOnly: false},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    series: [
                        {
                            name: 'iphone3',
                            type: 'map',
                            mapType: 'china',
                            roam: false,
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data: [
                                {name: '北京', value: Math.round(Math.random() * 1000)},
                                {name: '天津', value: Math.round(Math.random() * 1000)},
                                {name: '上海', value: Math.round(Math.random() * 1000)},
                                {name: '重庆', value: Math.round(Math.random() * 1000)},
                                {name: '河北', value: Math.round(Math.random() * 1000)},
                                {name: '河南', value: Math.round(Math.random() * 1000)},
                                {name: '云南', value: Math.round(Math.random() * 1000)},
                                {name: '辽宁', value: Math.round(Math.random() * 1000)},
                                {name: '黑龙江', value: Math.round(Math.random() * 1000)},
                                {name: '湖南', value: Math.round(Math.random() * 1000)},
                                {name: '安徽', value: Math.round(Math.random() * 1000)},
                                {name: '山东', value: Math.round(Math.random() * 1000)},
                                {name: '新疆', value: Math.round(Math.random() * 1000)},
                                {name: '江苏', value: Math.round(Math.random() * 1000)},
                                {name: '浙江', value: Math.round(Math.random() * 1000)},
                                {name: '江西', value: Math.round(Math.random() * 1000)},
                                {name: '湖北', value: Math.round(Math.random() * 1000)},
                                {name: '广西', value: Math.round(Math.random() * 1000)},
                                {name: '甘肃', value: Math.round(Math.random() * 1000)},
                                {name: '山西', value: Math.round(Math.random() * 1000)},
                                {name: '内蒙古', value: Math.round(Math.random() * 1000)},
                                {name: '陕西', value: Math.round(Math.random() * 1000)},
                                {name: '吉林', value: Math.round(Math.random() * 1000)},
                                {name: '福建', value: Math.round(Math.random() * 1000)},
                                {name: '贵州', value: Math.round(Math.random() * 1000)},
                                {name: '广东', value: Math.round(Math.random() * 1000)},
                                {name: '青海', value: Math.round(Math.random() * 1000)},
                                {name: '西藏', value: Math.round(Math.random() * 1000)},
                                {name: '四川', value: Math.round(Math.random() * 1000)},
                                {name: '宁夏', value: Math.round(Math.random() * 1000)},
                                {name: '海南', value: Math.round(Math.random() * 1000)},
                                {name: '台湾', value: Math.round(Math.random() * 1000)},
                                {name: '香港', value: Math.round(Math.random() * 1000)},
                                {name: '澳门', value: Math.round(Math.random() * 1000)}
                            ]
                        },
                        {
                            name: 'iphone4',
                            type: 'map',
                            mapType: 'china',
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data: [
                                {name: '北京', value: Math.round(Math.random() * 1000)},
                                {name: '天津', value: Math.round(Math.random() * 1000)},
                                {name: '上海', value: Math.round(Math.random() * 1000)},
                                {name: '重庆', value: Math.round(Math.random() * 1000)},
                                {name: '河北', value: Math.round(Math.random() * 1000)},
                                {name: '安徽', value: Math.round(Math.random() * 1000)},
                                {name: '新疆', value: Math.round(Math.random() * 1000)},
                                {name: '浙江', value: Math.round(Math.random() * 1000)},
                                {name: '江西', value: Math.round(Math.random() * 1000)},
                                {name: '山西', value: Math.round(Math.random() * 1000)},
                                {name: '内蒙古', value: Math.round(Math.random() * 1000)},
                                {name: '吉林', value: Math.round(Math.random() * 1000)},
                                {name: '福建', value: Math.round(Math.random() * 1000)},
                                {name: '广东', value: Math.round(Math.random() * 1000)},
                                {name: '西藏', value: Math.round(Math.random() * 1000)},
                                {name: '四川', value: Math.round(Math.random() * 1000)},
                                {name: '宁夏', value: Math.round(Math.random() * 1000)},
                                {name: '香港', value: Math.round(Math.random() * 1000)},
                                {name: '澳门', value: Math.round(Math.random() * 1000)}
                            ]
                        },
                        {
                            name: 'iphone5',
                            type: 'map',
                            mapType: 'china',
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data: [
                                {name: '北京', value: Math.round(Math.random() * 1000)},
                                {name: '天津', value: Math.round(Math.random() * 1000)},
                                {name: '上海', value: Math.round(Math.random() * 1000)},
                                {name: '广东', value: Math.round(Math.random() * 1000)},
                                {name: '台湾', value: Math.round(Math.random() * 1000)},
                                {name: '香港', value: Math.round(Math.random() * 1000)},
                                {name: '澳门', value: Math.round(Math.random() * 1000)}
                            ]
                        }
                    ]
                }
            }
        },
        mounted() {
            this.drawLine(this.chartOption1);
            this.drawChina()
        },
        methods: {
            drawLine(option = this.chartOption1) {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myCharts-2'));
                // 绘制图表,第二个参数表示数据不合并
                myChart.setOption(option, true);
            },
            drawChina() {
                this.$http.get('../../../../static/henan.json').then(res => {
                    let mapChart = this.$echarts.init(document.getElementById('myCharts-map'));
                    this.$echarts.registerMap('henan', res.data);
                    mapChart.setOption({
                        tooltip: {
                            trigger: 'item',
                            formatter: '{b}',
                            backgroundColor: '#1694f3'
                        },
//	                    控制地图随数值渐变色
                        visualMap: {
                            min: 0,
                            max: 2500,
                            inRange: {
                                color: ['#e0ffff', '#006edd']
                            },
                            calculable: true
                        },
                        series: [{
                            type: 'map',
                            map: 'henan',
                            selectedMode: 'single',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true
                                    },
                                    areaColor: '#006edd',
                                    borderColor: '#fff'
                                },
                                emphasis: {
                                    label: {
                                        show: true
                                    },
                                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                                    shadowBlur: 20
                                }
                            },
	                        data:[
                                {"name":"南阳市",value: Math.round(Math.random()*2500)},
                                {"name":"信阳市",value: Math.round(Math.random()*2500)},
                                {"name":"洛阳市",value: Math.round(Math.random()*2500)},
                                {"name":"驻马店市",value: Math.round(Math.random()*2500)},
                                {"name":"周口市",value: Math.round(Math.random()*2500)},
                                {"name":"商丘市",value: Math.round(Math.random()*2500)},
                                {"name":"三门峡市",value: Math.round(Math.random()*2500)},
		                        {"name":"新乡市",value: Math.round(Math.random()*2500)},
                                {"name":"平顶山市",value: Math.round(Math.random()*2500)},
                                {"name":"郑州市",value: Math.round(Math.random()*2500)},
                                {"name":"安阳市",value: Math.round(Math.random()*2500)},
                                {"name":"开封市",value: Math.round(Math.random()*2500)},
                                {"name":"焦作市",value: Math.round(Math.random()*2500)},
                                {"name":"许昌市",value: Math.round(Math.random()*2500)},
		                        {"name":"濮阳市",value: Math.round(Math.random()*2500)},
                                {"name":"漯河市",value: Math.round(Math.random()*2500)},
                                {"name":"鹤壁市",value: Math.round(Math.random()*2500)}
	                        ]
                        }]
                    });
                }, err => {
                    console.log(err)
                });
            },
            backHome() {
                this.$router.push('/home')
            }
        }
    }
</script>

