<script>
export default {
    name: 'DataHInt',
    data () {
        return {
            bts: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            currentPage: 1,
            totalPage: 0,
            pageLimit: 18,
            // 告警趋势数据
            spinShow: false,
            lineData: {
                date: [],
                data: []
            },
            pieData: {
                type: [],
                data: []
            },
            cusList: {
                tableData: [],
                pageData: {
                    total: 100,
                    current: 2
                }
            },
            columns4: [
                {
                    title: '告警等级',
                    key: 'level',
                    width: 90,
                    render: (h,params) => {
                        return h('div',{
                            style: {
                                width: '15px',
                                height: '15px',
                                backgroundColor: params.row.level
                            }                            
                        })
                    }
                },
                {
                    title: '告警时间',
                    key: 'created_at'
                },
                {
                    title: '告警次数',
                    key: 'sort',
                    width: 90
                },
                {
                    title: '告警客户',
                    key: 'name'
                },
                {
                    title: '告警类型',
                    key: 'type',
                    width: 90,
                    // filters: [
                    //     {
                    //         label: '已签订',
                    //         value: '已签订'
                    //     },
                    //     {
                    //         label: '未签订',
                    //         value: '未签订'
                    //     }
                    // ],
                    // filterMultiple: false,
                    // filterMethod (value, row) {
                    //     if(value == '已签订'){
                    //         return row.contract == '已签订'
                    //     }
                    //     if(value == '未签订'){
                    //         return row.contract == '未签订'
                    //     }
                    // }
                },
                {
                    title: '关联户号',
                    key: 'user_no',
                    width: 110                
                },
                {
                    title: '关联终端',
                    key: 'clientid',
                    width: 110
                },
                {
                    title: '告警原因',
                    key: 'reason'
                },
                {
                    title: '处理意见',
                    key: 'disposition',
                    render:(h,params) => {
                        return h('div',[
                            h('span',{
                                // on: {
                                //     click: () => {
                                //         console.log('点击编辑',params)
                                //     }
                                // }
                            },params.row.disposition),
                            h('span',{
                                style: {
                                    color: '#4fa8f9',
                                    marginLeft: '5px',
                                    cursor: 'pointer'
                                },
                                on: {
                                    click: () => {
                                        console.log('点击编辑',params)
                                        this.editmodal = true
                                        this.clickID = params.row.id
                                        this.editInfo = params.row.disposition
                                    }
                                }, 
                                // on: {
                                //     click: () => {
                                //         console.log('点击编辑',params)
                                //         // this.editDis(params.row.id)
                                //     }
                                // }
                            },'修改')
                        ])
                    }
                },
                {
                    title: '状态',
                    key: 'status',
                    width: 160,
                    render: (h, params) => {
                        return h('div', [
                            h('span', {
                                style: {
                                    marginRight: '5px',
                                    cursor: 'pointer'                                       
                                }                                      
                            }, params.row.status),
                            h('span', {
                                style: {
                                    marginRight: '5px',
                                    color: '#4fa8f9 ',
                                    cursor: 'pointer',
                                    display: params.row.status == '已处理'? 'none' : ''                                     
                                },     
                                on: {
                                    click: () => {
                                        console.log('变更', params)
                                        this.clickID = params.row.id
                                        this.statusChange()
                                        // this.goClientInfo('user-manager', params)
                                    }
                                }                                    
                            }, '变更')
                        ])
                    }
                }
            ],
            editmodal: false,
            editInfo: '',
            clickID: '',
            currentPage: 1,
            totalPage: 0,
            pageLimit: 9,
            okID: []
        }
    },
    computed:{
        //饼图
        chartOption2: function(){
            return {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    left:10,
                    orient: 'vertical',
                    x: 'left',
                    data: this.pieData.type
                },
                color: this.$store.getters.chartOption.colorList,
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
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
                        data:[
                            // {value:this.pieData.data, name:this.pieData.type, selected:true}
                        ]
                    },
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['50%', '65%'],
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
                        data:[
                            {value: this.pieData.data, name: '剩余电量'},
                            // {value:310, name:'邮件营销'},
                            // {value:234, name:'联盟广告'},
                            // {value:135, name:'视频广告'},
                            // {value:1048, name:'百度'},
                            // {value:251, name:'谷歌'},
                            // {value:147, name:'必应'},
                            // {value:102, name:'其他'}
                        ]
                    }
                ]
            }
        },
        //折线图
        chartOption: function () {
            return {
                tooltip:this.$store.getters.chartOption.lineTooltip,
                legend: {
                    left:10,
                    top:0,
                    itemWidth:16,
                    itemHeight:16,
                    data: ['数据告警']
                },
                grid: {
                    top:40,
                    left: 10,
                    right:40,
                    bottom: '6%',
                    containLabel: true
                },
                color:this.$store.getters.chartOption.colorList,
                xAxis: {
                    type: 'category',
                    data: this.lineData.date
                },
                yAxis: {
                    type: 'value',
                    splitArea: {show: false},
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                },
                series: [{
                    name: '数据告警',
                    data: this.lineData.data,
                    type: 'line'
                }]
            }
        },
        lineChart:function () {
            return this.$echarts.init(document.getElementById('powerTimeFrame'))
        },
        pieChart2:function () {
            return this.$echarts.init(document.getElementById('hintFB'))
        }
    },
    created () {
        
    },
    mounted () {
        this.getHintQS()
        this.drawLine()
        this.getHintFB()
        this.getHintSJ()
    },
    methods: {
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            this.lineChart.clear();
            this.lineChart.setOption(this.chartOption);

            this.pieChart2.clear();
            this.pieChart2.setOption(this.chartOption2);
        },
        pageChange(page) {
            this.currentPage = page;
            this.getHintSJ()
            console.log(page)
        },
        //获取告警数据
        getHintQS(){
            this.spinShow = true;
            let _this= this;
            this.$http.post(this.$api.REPORT_TREND,{com_id: this.$store.getters.com_id})
            .then(res => {
                // console.log('告警数据',res)
                this.spinShow = false;
                if(res.data.status == 1){
                    let data = res.data.data;
                    // console.log(data)
                    for( let i in data){
                        //  console.log(data[i].day)

                        _this.lineData.date.push(data[i].day)
                        _this.lineData.data.push(data[i].total)
                    }
                    // console.log(this)
                }else{
                    _this.lineData.date= [];
                    _this.lineData.data= [];
                }
                this.drawLine()
            }, err => {
                this.spinShow = false;
                this.$api.errcallback(err);
            }).catch(err => {
                this.spinShow = false;
                this.$api.errcallback(err);
            })
            
        },
        //获取告警数据
        getHintFB(){
            this.spinShow = true;
            let _this= this;
            this.$http.post(this.$api.REPORT_SPREAD,{com_id: this.$store.getters.com_id})
            .then(res => {
                // console.log('告警数据分布',res)
                this.spinShow = false;
                if(res.data.status == 1){
                    let data = res.data.data;
                    // console.log(data)
                    for( let i in data){
                        //  console.log(data[i].day)
                        if(data[i].type == 1){
                            data[i].type = '剩余电量'
                        }
                        _this.pieData.type.push(data[i].type)
                        _this.pieData.data.push(data[i].total)
                    }
                    // console.log(this.pieData.type)
                }else{
                    _this.pieData.type=[];
                    _this.pieData.data=[];
                }
                this.drawLine()
            }, err => {
                this.spinShow = false;
                this.$api.errcallback(err);
            }).catch(err => {
                this.spinShow = false;
                this.$api.errcallback(err);
            })
            
        },
        //获取告警事件
        getHintSJ(){
            this.spinShow = true;
            let _this= this;
            this.$http.post(this.$api.REPORT_INDEX,{
                com_id: this.$store.getters.com_id,
                page: this.currentPage,
                limit: this.pageLimit
            })
            .then(res => {
                console.log('告警事件',res)
                this.spinShow = false;
                if(res.data.status == 1){
                    let data = res.data.data.data;
                    console.log(data)
                    data.map(function(i){
                        console.log(i)
                        if(i.level == 1){
                            i.level = '#F38900'
                        }else if(i.level == 2){
                            i.level = '#990099'
                        }else{
                            i.level = '#DA1B1B'
                        }

                        if(i.status == 0){
                            i.status = '待处理'
                        }else{
                            i.status = '已处理'
                            _this.okID.push(i.id)
                            // console.log(_this.okID)
                        }
                    })
                    this.cusList.tableData = data;
                    this.totalPage = res.data.data.total;
                    this.currentPage = res.data.data.currentPage;
                    // for( let i in data){
                    //     //  console.log(data[i].day)
                        
                    // }
                    // console.log(this.pieData.type)
                }else{
                    this.cusList.tableData = [];
                    
                }
                this.drawLine()
            }, err => {
                this.spinShow = false;
                this.$api.errcallback(err);
            }).catch(err => {
                this.spinShow = false;
                this.$api.errcallback(err);
            })
            
        },
        //修改处理意见
        editDis(){
            this.spinShow = true;
            let _this= this;
            this.$http.post(this.$api.REPORT_UPDATE,{id: this.clickID,disposition: this.editInfo})
            .then(res => {
                console.log('修改处理意见',res)
                this.spinShow = false;
                // if(res.data.status == 1){
                    
                // }else{
                //     this.$api.errcallback(err);
                // }
                // this.drawLine()
            }, err => {
                this.spinShow = false;
                this.$api.errcallback(err);
            }).catch(err => {
                this.spinShow = false;
                this.$api.errcallback(err);
            })
        },
        //修改警告处理状态
        statusChange(){
            console.log('修改警告处理状态')
            this.spinShow = true;
            let _this= this;
            this.$http.post(this.$api.REPORT_UPDATE,{id: this.clickID,status: '1'})
            .then(res => {
                console.log('修改处理意见',res)
                this.spinShow = false;
                if(res.data.status == 1){
                    this.$Message.info('修改状态成功');
                }else{
                    this.$Message.info('修改状态失败');
                }

                //刷新页面
                this.getHintSJ()
            }, err => {
                this.spinShow = false;
                this.$api.errcallback(err);
            }).catch(err => {
                this.spinShow = false;
                this.$api.errcallback(err);
            })
        },
        ok () {
            this.editDis()
            //刷新页面
            this.getHintSJ()
        },
        cancel () {
            this.$Message.info('点击取消');
        },
        // 改变未处理的表格字体颜色
        rowClassName(row, index){
            // console.log('每一行信息',row)
            // 无法进入循环，暂时表格没有变色

            
            // if (row.id == this.okID[0]) {
            //     console.log('判断成功')
            //     return 'dataHint-table-info-row';
            // } else {
            //     console.log('判断失败')
            //     return 'dataHint-table-error-row';
            // }
            
            
            // return '';
        }
    }
}
</script>

<template>
<div class="main-container">
    <Row :gutter="10">
        <Col span="18">
            <Card  class="top relative">
                <p slot="title">告警趋势</p>
                <div id="powerTimeFrame" style="position: absolute;left: 0;top: 56px;bottom: 0;right: 0;"></div>
                <Spin size="large" fix v-if="spinShow"></Spin>
            </Card>
        </Col>
        <Col span="6">
            <Card class="top">
                <p slot="title">告警分布</p>
                <div id="hintFB" style="position: absolute;left: 0;top: 56px;bottom: 0;right: 0;"></div>
                <Spin size="large" fix v-if="spinShow"></Spin>
            </Card>
        </Col>
    </Row>
    <Row>
        <Col span="24">
            <Card  class="mians mgt_15">
                <p slot="title">告警事件</p>
                <div class="hinetitle">                    
                    <div class="fr">
                        <span><i style="background-color: #DA1B1B"></i>致命</span>
                        <span><i style="background-color: #990099"></i>严重</span>
                        <span><i></i>警告</span>
                    </div>
                </div>
                <Table size="small" :row-class-name="rowClassName" :columns="columns4" :data="cusList.tableData" no-data-text='-' no-filtered-data-text='暂无结果数据'></Table>
                <Spin size="large" fix v-if="spinShow"></Spin>
            </Card>
        </Col>
        <div class="page-container">
			<Page
					:total="totalPage"
					:current="currentPage"
					:page-size="pageLimit"
					show-total
					show-elevator
					v-on:on-change="pageChange"
			></Page>
		</div>
        <Modal
            v-model="editmodal"
            title="修改处理意见"
            @on-ok="ok"
            @on-cancel="cancel">
            <Input v-model="editInfo" placeholder="请输入处理意见" ></Input>
        </Modal>
    </Row>
</div>
</template>

<style scoped>
.top{
    height: 275px;
}
.mians{
    height: 635px;
}
.hinetitle{
    height: 30px;
}
.hinetitle span {
    margin-right: 20px;
}
.hinetitle span i{
    width: 15px;
    height: 15px;
    display: inline-block;
    background-color: #F38900;
    margin-right: 10px;
    vertical-align: text-top;    
}

</style>
