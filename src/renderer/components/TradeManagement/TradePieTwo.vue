<style>
    .tradeFrame2 {
        box-sizing: border-box;
        background-color: #fff;
        margin-top:4px;
        height:150px;
        text-align: center;
    }
    .center{
        text-align: center;
    }
    .ivu-radio-group-button .ivu-radio-wrapper{
        height:34px;
        line-height: 32px;
    }
    .ivu-input{
         height: 34px;
    }
    .month-all{
        text-align: center;
    }
    .month-all  p{
        font-size:12px;
    }
    .month-all p span{
        font-size:22px;
        color:#fea06f;
    }
    @media (max-width: 1366px) {
        .center{
        text-align: left;
        }
        .month_choose{
            width:135px;
        }
        .small .ivu-input-wrapper{
            width:65px;
            
        }
    }
</style>
<template>
    <div>
        <div class="center">
            <Radio-group type="button" v-on:on-change="changeType" v-model="statusType">
                <Radio label="按月" style="width: 70px"></Radio>
                <Radio label="自定义" style="width: 70px"></Radio>
            </Radio-group>
            <DatePicker v-show="statusType ==='按月'" type="month" placeholder="请选择月份" @on-change="selectMonth" placement='bottom-end' class='month_choose'></DatePicker>
              <DatePicker v-show="statusType !=='按月'"  type="month" :value='month1' placeholder="开始月份" @on-change="selectMonth1" class='small' placement='bottom-end'></DatePicker>
             <DatePicker  v-show="statusType !=='按月'"  type="month" :value='month2' placeholder="结束月份" @on-change="selectMonth2" class='small' placement='bottom-end'></DatePicker>
            
        </div>
        <div class="tradeFrame2 relative">
            <div id="tradeFrame2" style="position: absolute;left:0px;top:0px;bottom: 0;right: 0;">
            </div>
        </div>
        <div class="month-all">
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
                month:new Date().Format('yyyy-MM'),
                month1:'',
                month2:''
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
            // this.drawLine();
            this.reqTradeOf();
        },
        methods: {
            reqTradeOf(){
                this.powerFrameChart.showLoading();
                this.$http.post(this.$api.TRADE_OF,{com_id:this.$store.getters.com_id,month:this.month}).then(res=>{
                    console.log("交易占比饼图",res);
                    if(res.data.status==='1'){
                        this.pieData = res.data.data;
                        this.drawLine();
                    }else{
                        
                        this.drawLine();
                    }
                },err=>{
                    this.powerFrameChart.hideLoading();
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.powerFrameChart.hideLoading();
                    this.$api.errcallback(err);
                })
            },
            selectMonth(month){
                this.month = month
            },
            selectMonth1(value){
                this.month1 = value;
                console.log(this.month1)
            },
            selectMonth2(value){
                this.month2 = value;
                console.log(this.month1+'/'+this.month2);
                this.powerFrameChart.showLoading();
                if(this.month1 && this.month2){
                    this.$http.post(this.$api.TRADE_OF,{com_id:this.$store.getters.com_id,time:this.month1+'/'+ this.month2}).then(res=>{
                         console.log('自定义查询成功',res);
                         if(res.data.status==='1'){
                        this.pieData = res.data.data;
                        this.drawLine();
                       }else{
                        this.drawLine();
                       }
                    },err=>{
                         this.powerFrameChart.hideLoading();
                         this.$api.errcallback(err);
                    }).catch(res=>{
                         this.powerFrameChart.hideLoading();
                         this.$api.errcallback(err);
                    })
                }
            },
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                // 绘制图表
                this.powerFrameChart.clear();
                this.powerFrameChart.setOption(this.pieOption);
                this.powerFrameChart.hideLoading();
            },
            changeType(value){
                this.statusType = value;
                this.reqTradeOf();
                this.month1='';
                this.month2='';
            }
        },
        watch:{
            month:function(){
                this.reqTradeOf();
            }
        }
    }
</script>

