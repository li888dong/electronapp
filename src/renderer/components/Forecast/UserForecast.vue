<script>
export default {
    name: 'UserForecast',
    data(){
        return{
            value: '',
            place: [
                {
                    value: '河南',
                    label: '河南'
                },
                {
                    value: '河北',
                    label: '河北'
                },
                {
                    value: '江西',
                    label: '江西'
                },
                {
                    value: '山东',
                    label: '山东'
                },
                {
                    value: '山西',
                    label: '山西'
                },
                {
                    value: '陕西',
                    label: '陕西'
                }
            ],
            model1: '',
            columns4: [

                {
                    title: '企业名称',
                    key: 'name',
                    width: 200
                },
                {
                    title: '上月申报电量(万KW-h)',
                    key: 'name',
                    width: 180
                },
                {
                    title: '上月用电量(万KW-h)',
                    key: 'name',
                    width: 150
                },
                {
                    title: '预测电量(万kW-h)',
                    key: 'name',
                    width: 150
                },
                {
                    title: '申报电量(万kW-h)',
                    key: 'name',
                    width: 150
                },
                {
                    title: '购电量(万kW-h)',
                    key: 'sale'
                },{
                    title: '申报时间',
                    key: 'time'
                },
                {
                    title: '申报状态',
                    key: 'name'
                },
                {
                    title: '审核状态',
                    key: 'name'
                },
                {
                    title: '确认人',
                    key: 'name'
                },               
                {
                    title: '操作',
                    key: 'change',
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
                            }, '审核'),
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
                            }, '查看'),
                            h('span', {
                                style: {
                                    marginRight: '5px',
                                    color:'#36c ',
                                    cursor:'pointer'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            }, '删除')
                        ])
                    }
                }
            ],
            data4: [
                {
                    name: '河南众企联合售电有限公司'
                },
                {                
                    name: '河南众企联合售电有限公司'
                },
            ],
            modal8: false,
            columns5: [
                {
                    title: '申报时间',
                    width: 110,
                    key:'time1'
                },
                {
                    title: '申报人',
                    key:'people'
                },
                {
                    title: '申报时间合计',
                    width: 110,
                    key:'heji'
                },
                {
                    title: '详情',
                    width: 160,
                    key:'xiangQing'
                },
                {
                    title: '备注',
                    key:'useNote'
                }
            ],
            data5: [
                {
                    time1: '2017-12-12 12:00:00',
                    people: '王朝辉',
                    heji: '11111',
                    xiangQing: '134564 1233.12Mv时',
                    useNote: '无备注'
                },
                {
                    time1: '2017-12-12 12:00:00',
                    people: '王朝辉',
                    heji: '11111',
                    xiangQing: '134564 1233.12Mv时',
                    useNote: '无备注'
                },
            ],
             
        }
    },
    methods: {
        renderM(index) {
            this.modal8= true
            console.log(index)
        },
        remove(index){
            this.data4.splice(index, 1);
        }
    }
}           
</script>

<template>
<div class="UserForecast">
    <div class="layout-content">
        <h3>用户申报</h3>
        <div class="layout-content-top">          
            <Row>
                <Col span="3">
                    <DatePicker :value="new Date()" format="yyyy年MM月dd日" type="date" placeholder="value1" style="width: 200px;height:30px;"></DatePicker>
                </Col>
                <Col span="3">
                    <Select v-model="model1" style="width:200px">
                        <Option v-for="item in place" :value="item.value" :key="item.value" >{{ item.label }}</Option>
                    </Select>
                </Col>
                <Col span="6" offset='12' class="searchBox">
                    <i class="iconfont icon-search" ></i>
                    <Input v-model="value" placeholder="客户编号或客户名称" class="myInput" style="width: 280px"></Input><Button type="primary">搜索</Button>
                </Col>
            </Row>
        </div>
        <div class="layout-content-main">
            <Table border ref="selection" :columns="columns4" :data="data4"></Table>
        </div>
        <Row class="fenYe">
            <Col span="5" style="margin: 14px">
                <Button type="primary" style="margin-left: 20px">批量确认</Button>
                <Button type="primary">导入</Button>
            </Col>
            <Col span="10">
                <Page :total="100" show-total show-elevator></Page> <Button type="primary">确定</Button>
            </Col>
        </Row>
    </div>
    <Modal
        title="12月份电量申报详情"
        v-model="modal8"
        width = 666
        :mask-closable="false"
        class-name="vertical-center-modal">
        企业名称 :   <span>河南众企联合售电有限公司</span> <br>
        申报记录 :   <Table border ref="selection" :columns="columns5" :data="data5"></Table>
     </Modal>

</div>
</template>

<style scoped>
/* 顶部搜索框样式 */
.ivu-btn{
    height: 34px;
    border-radius: 0;
}
.searchBox {
    position: relative;
    text-align: right;
}
.searchBox i {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 6px;
    left: 18%;
    z-index: 11;
}


.UserForecast {    
    width: 100%;
}
.layout-content{
    min-height: 200px;
    margin: 20px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
    padding: 10px;    
    height: 945px;
}
.layout-content h3{
	height: 40px;
	border-bottom: 1px solid #E5E5E5;
	background-color: #fff;
	padding-left: 10px;
    padding-top: 10px;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
}

.layout-content-top {
    margin-bottom: 15px;
}

/* 分页的样式 */
.fenYe {
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 50px;
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
