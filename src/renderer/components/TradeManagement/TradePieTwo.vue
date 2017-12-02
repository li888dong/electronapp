<style>
    .tradeFrame2 {
        box-sizing: border-box;
        background-color: #fff;
        margin-top:5px;
        height:160px;
        text-align: center;
    }
    .center{
        text-align: center;
    }
    .ivu-radio-group-button .ivu-radio-wrapper{
        height:34px;
        line-height: 32px;
    }
</style>
<template>
    <div class="main">
        <div class="center">
            <Radio-group type="button" v-on:on-change="changeType" v-model="statusType">
                <Radio label="按月"></Radio>
                <Radio label="自定义"></Radio>
            </Radio-group><Select placeholder="2017年" style="width:100px;margin-right:5px;margin-left: 5px;" class="selectDate"><Option v-for="item in yearList" :value="item.value" :key="item.value">{{ item.label }}</Option></Select><Select placeholder="10月" style="width:80px;"  class="selectDate"><Option v-for="item in monthList" :value="item.value" :key="item.value">{{ item.label }}</Option></Select>
        </div>
        <div class="tradeFrame2 relative">
            <div id="tradeFrame2" style="position: absolute;left:0px;top:0px;bottom: 0;right: 0;">
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'tradeframe',
        data() {
            return {
                statusType:'按月',
                chartOption2: {
//          鼠标悬浮提示
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {},
                    series: [
                        {
                            name: '交易来源',
                            type: 'pie',
                            selectedMode: 'single',
                            radius: ['0', '40px'],
                            center: ['50%', '50%'],
                            itemStyle: {
                                normal: {
                                    offset:5,
                                },
                                emphasis: {}
                            },
                            label: {
                                normal: {
                                    show: false
                                }
                            },

                            data: [
                                {
                                    value: 335,
                                    name: '长协(年)',
                                    itemStyle: {
                                        normal: {
                                            color: '#ab7aee'
                                        },
                                        emphasis: {
                                            color: '#8757c9'
                                        }
                                    }
                                },
                                {
                                    value: 679,
                                    name: '市场竞价(年)',
                                    itemStyle: {
                                        normal: {
                                            color: '#31c9d7'
                                        },
                                        emphasis: {
                                            color: '#15aebd'
                                        }
                                    }
                                },
                            ],
                        },
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['56px', '70px'],
                            label: {
                                normal: {
                                    show: false
                                }
                            },
                            center: ['50%', '50%'],
                            data: [
                                {
                                    value: 335,
                                    name: '长协(月)',
                                    itemStyle: {
                                        normal: {
                                            color: '#edb00d'
                                        },
                                        emphasis: {
                                            color: '#d69d02'
                                        }
                                    }
                                },
                                {
                                    value: 310,
                                    name: '市场竞价(月)',
                                    itemStyle: {
                                        normal: {
                                            color: '#4fa8f9'
                                        },
                                        emphasis: {
                                            color: '#3077b9'
                                        }
                                    }
                                },
                            ]
                        }
                    ]
                },
                yearList:[
                    {
                        value:'2010年',
                        label:'2010年',
                    },{
                        value:'2011年',
                        label:'2011年',
                    },{
                        value:'2012年',
                        label:'2012年',
                    },{
                        value:'2013年',
                        label:'2013年',
                    },{
                        value:'2014年',
                        label:'2014年',
                    },{
                        value:'2015年',
                        label:'2015年',
                    },{
                        value:'2016年',
                        label:'2016年',
                    },{
                        value:'2017年',
                        label:'2017年',
                    }
                ],
                monthList:[
                    {
                        value:'1月',
                        label:'1月',
                    },{
                         value:'2月',
                        label:'2月',
                    },{
                        value:'3月',
                        label:'3月',
                    },{
                        value:'3月',
                        label:'3月',
                    },{
                        value:'4月',
                        label:'4月',
                    },{
                        value:'5月',
                        label:'5月',
                    },{
                        value:'6月',
                        label:'6月',
                    },{
                        value:'7月',
                        label:'7月',
                    },{
                        value:'8月',
                        label:'8月',
                    },{
                        value:'9月',
                        label:'9月',
                    },{
                        value:'10月',
                        label:'10月',
                    },{
                        value:'11月',
                        label:'11月',
                    },{
                        value:'12月',
                        label:'12月',
                    }

                ]
            }
        },
        mounted() {
            this.drawLine(this.chartOption2);
        },
        methods: {
            drawLine(option = this.chartOption2) {
                // 基于准备好的dom，初始化echarts实例
                let powerFrameChart = this.$echarts.init(document.getElementById('tradeFrame2'));
                // 绘制图表
                powerFrameChart.setOption(option);
            },
            changeType(value){
                this.statusType = value;
            }
        }
    }
</script>

