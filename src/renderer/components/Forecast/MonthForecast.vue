<script>
import myFenye from '@/components/Tool/myFenye'
import mySearch from '@/components/Tool/mySearch'

export default {
    name: 'MonthForecast',
    data(){
        return{
            value: '',
            modalShow: false,
            spinShow:false,
            currentPage:1,
            limit:11,
            totalPage:1,
            selectList: [],
            modifyList:[],
            selectMonth: new Date().Format('yyyy-MM'),
            selectArea: '',
            statusList: [
                {
                    value: 0,
                    label: '未确认'
                },
                {
                    value: 1,
                    label: '已确认'
                },
                {
                    value: 2,
                    label: '已购电'
                },
            ],
            modifyIndex:'0',
            tableData1: [],
            tableData2: [],
            modifyModal: false,
            model1: '',
            columns4: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    width: '200',
                    title: '企业名称',
                    key: 'name',
                    align: 'center'
                },
                {
                    width: '100',
                    title: '所属区域',
                    key: 'area',
                    align: 'center'
                },
                {
                    width: '150',
                    title: '系统预测(万kW-h)',
                    key: 'sy_predict',
                    align: 'center'
                },
                {
                    width: '150',
                    title: '企业申报',
                    key: 'declare',
                    align: 'center'
                },
                {
                    width: '150',
                    title: '年度月预测(万kW-h)',
                    key: 'forecast',
                    align: 'center'
                },{
                    title: '月度预测记录(万kW-h)',
                    key: 'log',
                    align: 'center',
git
                },{
                    title: '月度预测(万kW-h)',
                    key: 'p_predict',
                    align: 'center'
                },
                {
                    title: '修改人',
                    key: 'modify_people',
                    width:80,
                    align: 'center'
                },
                {
                    title: '确认人',
                    key: 'confirmor',
                    width:80,
                    align: 'center'
                },
                {
                    title: '状态',
                    key: 'n17',
                    aligin:'left',
                    render: (h, params) => {
                        let status0 = params.row.status ==='0';
                        let status1 = params.row.status ==='1';
                        let status2 = params.row.status ==='2';
                        return h('select', {
                            on:{
                                change:(e)=>{
                                    this.setTableData1(params.index,e.target.value);
//                                        params.row.status = e.target.value;

                                }
                            }
                        },[
                            h('option', {
                                attrs:{
                                    selected:status0,
                                    value:0
                                }
                            }, '未确认'),
                            h('option', {

                                attrs:{
                                    selected:status1,
                                    value:1
                                }
                            }, '已确认'),
                            h('option', {
                                attrs:{
                                    selected:status2,
                                    value:2
                                }
                            }, '已购电'),
                        ])
                    }
                },
                {
                    title: '操作',
                    key: 'change',
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
                                        this.renderM(params)
                                    }
                                }
                            }, '修改')
                        ])
                    }
                }
            ],
            modal1: false,
        }
    },
    mounted(){
        this.monthData();
    },
    methods: {
        monthData() {
            this.spinShow=true;
            this.$http.post(this.$api.MONTH_FORECAST, {
                com_id: this.$store.getters.com_id,
                month: this.selectMonth,
                page:this.currentPage,
                limit:this.limit,
                area: this.selectArea,
                keyword: this.$store.getters.searchKey
            }).then(res => {
                this.spinShow=false;
                console.log("月度预测", res);
                this.tableData1 = res.data.data.data;
                this.totalPage = res.data.data.total;
                this.currentPage = res.data.data.current_page
            }, err => {
                this.spinShow=false;
                this.$api.errcallback(err);
            }).catch(err => {
                this.spinShow=false;
                this.$api.errcallback(err);
            })
        },
        monthSelect(month) {
            this.selectYear = month;
            console.log(this.selectMonth);
            this.monthData()
        },
        areaSelect(area) {
            this.selectArea = area[1].name.replace(/市/, '');
            console.log(this.selectArea);

            this.monthData()
        },
        selectItem(items){
            console.log(items);
            this.selectList = items
        },
        allComfirm(){
            let postArr = [];
            let _this = this;
            this.selectList.map(function (i) {
                postArr.push({
                    cus_id:i.cus_id,
                    year:_this.selectYear,
                    type:i.status
                })

            });
            console.log(postArr);
            this.$http.post(this.$api.MONTH_CONFIRM, {data:postArr}).then(res => {
                console.log("月度预测确认", res);
            }, err => {
                this.$api.errcallback(err);
            }).catch(err => {
                this.$api.errcallback(err);
            })
        },
        modifyData(){
            let postArr = [];
            let _this = this;
            this.tableData2.map(function (i) {
                postArr.push({
                    id:i.id,
                    data: {
                        month01:i.month01,
                        month02:i.month02,
                        month03:i.month03,
                        month04:i.month04,
                        month05:i.month05,
                        month06:i.month06,
                        month07:i.month07,
                        month08:i.month08,
                        month09:i.month09,
                        month10:i.month10,
                        month11:i.month11,
                        month12:i.month12
                    }

                })
            });
            console.log(postArr);
            this.$http.post(this.$api.MONTH_MODIFY, {data:postArr}).then(res => {
                console.log("年度预测修改", res);
            }, err => {
                this.$api.errcallback(err);
            }).catch(err => {
                this.$api.errcallback(err);
            })
        },
        setTableData1(index,value){
            this.tableData1[index].status = value;
        },
        renderM() {
            this.modal1= true
        },
        toDaoru() {
            this.$router.push({path:"/import-data",query:{type:'month'}})
        },
        pageChange(page){
            this.currentPage = page;
            this.monthData();
            console.log(page)
        },
    },
    components : {
        'myFenye': myFenye,
        'mySearch': mySearch
    },
}

</script>

<template>
<div class="main-container">
    <Card>        
        <h3 slot="title">月度预测</h3>       
        <div class="layout-content">
            <div class="layout-content-top">
                <Row gutter="10">
                    <Col span="2">
                    <DatePicker type="month" placeholder="请选择月份" @on-change="monthSelect"></DatePicker>

                    </Col>
                    <Col span="4">
                    <al-selector level=1  @on-change="areaSelect"/>

                    </Col>
                    <Col span="5">

                    <mySearch placeholder="请输入公司名称或关键字" swidth="340" v-on:doSearch="monthData"></mySearch>
                    </Col>
                    <Col span="4" offset="9" style="display: flex;justify-content: flex-end">
                    <Button class="fl" type="primary" @click="allComfirm">批量确认</Button>
                    <Button class="fl" type="primary" style="margin-left: 10px" @click="toDaoru()">导入</Button>
                    </Col>
                </Row>
            </div>
            <Row class="layout-content-main">
                <Table border @on-selection-change="selectItem" :columns="columns4" :data="tableData1"></Table>
                <Spin size="large" fix v-if="spinShow"></Spin>
            </Row>
            <div class="page-container">
                <Page
                        :total="totalPage"
                        :current="currentPage"
                        show-total
                        show-elevator
                        v-on:on-change="pageChange"
                ></Page>
            </div>
        </div>
    </Card>
    <Modal
        title="12月份电量申报详情"
        v-model="modal1"
        width = '846px'
        :mask-closable="false"
        class-name="vertical-center-modal">
        <Row class="gongSiBox" v-if="modal1">
            <Col span="8" class="gongSi">
                <Row class="comName">
                    <Col span='10'>企业名称</Col>
                    <Col span='7'>所属区域</Col>
                    <Col span='7'>是否购电</Col>
                </Row>
                <Row style="margin-top:35px;text-align: center;">
                    <Col span='10'>{{tableData1[modifyIndex].name}}</Col>
                    <Col span='7'>{{tableData1[modifyIndex].area}}</Col>
                    <Col span='7'>{{tableData1[modifyIndex].status==2?'是':'否'}}</Col>
                </Row>
            </Col>
            <Col span="16">
                <table cellspacing="10" cellpadding="10">
                    <tr>
                        <td>系统预测合计: {{tableData1[modifyIndex].sy_predict}}</td>
                        <td>企业申报合计: 0</td>
                        <td>人工预测合计: {{tableData1[modifyIndex].p_predict}} <br>
                        <Checkbox label="使用客户申报数值">使用客户申报数值</Checkbox></td>
                    </tr>
                    <tr>
                        <td>1234657498: <span class="num">0</span></td>
                        <td>1234657498: <span class="num">0</span></td>
                        <td>1234657498: <input type="text" placeholder="-"> </td>
                    </tr>
                    <tr>
                        <td>1234657498: <span class="num">0</span></td>
                        <td>1234657498: <span class="num">0</span></td>
                        <td>1234657498: <input type="text" placeholder="-"></td>
                    </tr>
                    <tr>
                        <td>1234657498: <span class="num">0</span></td>
                        <td>1234657498: <span class="num">0</span></td>
                        <td>1234657498: <input type="text" placeholder="-"></td>
                    </tr>
                </table>
            </Col>
        </Row>
     </Modal>
</div>

</template>

<style scoped>
.layout-content{
    background: #fff;
    height: 810px;
}
.layout-content-top {
    padding-bottom: 15px;
}
.gongSiBox {
    border: 1px solid #ccc;
    overflow: hidden;
}

.comName {
    height: 36px;
    text-align: center;
    line-height: 36px;
}
.comName div{     
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 0 10px;
 }
 .comName div:first-child{
     border-left: 0;
 }
.gongSi div{
    text-align: center;
}
.vertical-center-modal  table{
    text-align: center;
	border-collapse:collapse;
}
.vertical-center-modal th{
	background-color: #f2f7fb;
}
.vertical-center-modal td,.vertical-center-modal th{
	border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
	width: 180px;
	height: 34px;
}
.vertical-center-modal tr:last-child td{
    border-bottom: 0;
}
.vertical-center-modal input{
	width: 70px;
	height: 26px;
	text-align: center;
}
</style>
