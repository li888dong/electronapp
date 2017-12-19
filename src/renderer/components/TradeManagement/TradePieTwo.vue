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
    .month-all  p{
        font-size:12px;
    }
    .month-all p span{
        font-size:22px;
        color:#fea06f;
    }
</style>
<template>
    <div class="main">
        <div class="center">
            <Radio-group type="button" v-on:on-change="changeType" v-model="statusType">
                <Radio label="按月" style="width: 70px"></Radio>
                <Radio label="自定义" style="width: 70px"></Radio>
            </Radio-group>
            <DatePicker v-show="statusType ==='按月'" type="month" placeholder="请选择月份" @on-change="monthSelect"></DatePicker>
            <DatePicker v-show="statusType !=='按月'" type="daterange" placeholder="请选择时间" @on-change="monthSelect" placement="bottom-end"></DatePicker>

        </div>
        <div class="tradeFrame2 relative">
            <div id="tradeFrame2" style="position: absolute;left:0px;top:0px;bottom: 0;right: 0;">
            </div>
        </div>
        <div class="month-all center">
            <p>月度总交易电量 <span>{{pieData.month.longpact + pieData.month.bidding}}</span>KW.时</p>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'tradeframe',
        data() {
            return {
                statusType:'按月',
                pieData:{
                    month: {
                        bidding: 0,
                        longpact: 0
                    },
                    year: {
                        bidding: 0,
                        longpact: 0
                    }
                },
                month:''
            }
        },
        computed:{
            powerFrameChart:function () {
                return this.$echarts.init(document.getElementById('tradeFrame2'));
            },
            pieOption:function () {
                return {
//          鼠标悬浮提示
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    series: [
                        {
                            name: '年度',
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
                                    value: this.pieData.year.longpact,
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
                                    value: this.pieData.year.bidding,
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
                            name: '月度',
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
                                    value: this.pieData.month.longpact,
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
                                    value: this.pieData.month.bidding,
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
                }
            }
        },
        mounted() {
            this.drawLine();
            this.reqTradeOf();
        },
        methods: {
            reqTradeOf(){
                this.$http.post(this.$api.TRADE_OF,{com_id:this.$store.getters.com_id,month:this.month}).then(res=>{
                    console.log("交易占比饼图",res);
                    this.pieData = res.data.data;
                   this.drawLine();
                },err=>{
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.$api.errcallback(err);
                })
            },
            selectMonth(month){
                this.month = month
            },
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                // 绘制图表
                this.powerFrameChart.setOption(this.pieOption);
            },
            changeType(value){
                this.statusType = value;
            }
        }
    }
</script>

