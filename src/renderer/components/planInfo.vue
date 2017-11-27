<template>
    <div class="main-container">
        <panel style="height: 892px;">
            <Row>

                <h3 class="title-lv2">计划进度</h3>
            </Row>
            <Row>

                <div class="containerBox">
                    <Row>
                        <Col span='24'>
                            <div  id="myCharts" :style="{width: '100%', height: '260px'}">

                            </div>
                        </Col>
                    </Row>
                    <Col span='24'>
                        <Table border :columns='columns1' :data='data1'></Table>
                    </Col>

                </div>
            </Row>
            <!-- 分页 -->
            <Row class="fenYe">
                <Col span='24'>
                <Page :total="66" show-total show-elevator></Page> <Button type="primary">确定</Button>
                </Col>
            </Row>
            <!-- <myFenye></myFenye> -->
        </panel>
    </div>
</template>

<script>

    import myFenye from '@/components/Tool/myFenye.vue'

    export default {
        name: 'planInfo',
        data(){
            return{
                columns1: [                
                {
                    title: '交易月份',
                    key: 'n1'
                },
                {
                    title: '竞价日期',                    
                    width: 200,
                    key: 'n2'
                },
                {
                    title: '预测电量时间',
                    key: 'n3'
                },
                {
                    title: '申报电量时间',
                    key: 'n4'
                },
                {
                    title: '购电确认时间',
                    key: 'n5'
                },
                {
                    title: '状态',
                    key: 'n6'
                },               
                {
                    title: '操作',
                    key: 'n7',
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [                            
                            h('span', {
                                style: {
                                    marginRight: '5px',
                                    color:'#36c ',
                                    cursor:'pointer'
                                },
                                on: {
                                    click: () => {
                                        
                                    }
                                }
                            }, '完成'),
                            h('span', {
                                style: {
                                    marginRight: '5px',
                                    color: '#36c',
                                    cursor: 'pointer'
                                },
                                on: {
                                    click: () => {
                                       
                                    }
                                }                            

                            },'编辑'),
                            h('span', {
                                style: {
                                    marginRight: '5px',
                                    color: '#36c',
                                    cursor: 'pointer'
                                },
                                on: {
                                    click: () => {
                                        
                                    }
                                }                            

                            },'生成月电量数据')
                        ]);
                    }

                }               
            ],
                data1: [
                {
                    n1: '2017-12',
                    n2: '2017-11-20',
                    n3: '2017-12-01~2017-12-31',
                    n4: '2017-11-07~2017-09-30',
                    n5: '2017-11-18~2017-11-24',
                    n6: '进行中'
                },
                {
                    n1: '2017-11',
                    n2: '2017-11-20',
                    n3: '2017-12-01~2017-12-31',
                    n4: '2017-11-07~2017-09-30',
                    n5: '2017-11-18~2017-11-24',
                    n6: '已完成'
                }
            ]
            }
        },
        mounted(){
            this.planChart();
        },
        components: {
            'myFenye': myFenye
        },
        methods: {
            planChart() {
                let nowYear = new Date().getFullYear();
                let nowMonth = (new Date().getMonth())+1;
                let nowDay = (new Date().getDate());
                console.log(nowYear,nowMonth,nowDay)
                let  day = new Date(2017,2,0).getDate()+1;


                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myCharts'))
                // 绘制图表
                myChart.setOption({
                color: ['#0089fa'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['交易月份：2017-12'],
                    left:10,
                    top:0
                },
                grid: {
                    left: '1%',
                    right: '1%',
                    top: '10%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    min:'0',
                    max:'31',
                    scale:true,
                    maxInterval:1,

                    data: function () {
                        let list = [];
                        for (let i = 1;i < day+1; i++){
                            list.push(i)
                        }
                    }

                },
                yAxis: {
                    type: 'category',
                    data: ['预测电量日期','客户申报日期','购电确认日期','月度竞价申报日期'],
                    splitLine:{
                        show:true
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                },
                series: [
                    {
                        name: '辅助',
                        type: 'bar',
                        stack: '总量',
                        itemStyle: {
                            normal: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            },
                            emphasis: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            }
                        },
//                        起始日期
                        data: ['10', '12', '14','8']
                    },
                    {
                        name: '交易月份：2017-12',
                        type: 'bar',
                        stack: '总量',
                        barMaxWidth: 20,
                        label: {
                            normal: {
                                show: true,
                                position: 'inside'
                                }
                        },
//                        距离截止日期还有几天
                        data: ['5', '6', '6','8']
                    }
                ]
                })
                
            }
        }
    }
</script>

<style scoped>
.header{
    height: 905px;
    margin: 20px;
    background-color: #fff;
}
.header h3{
    height: 44px;
    font-size: 16px;
    font-weight: 700;
    padding: 20px;
    line-height: 24px;
}
.containerBox {
    width: 100%;
    padding: 20px;
}


/* 分页的样式 */
.fenYe {
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
}
.fenYe table{
    border: 0;
}
.fenYe ul {
    display: inline-block;
}
.fenYe button{
    top: -12px;
    left: 12px;
}
</style>