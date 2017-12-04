<script>
import myFenye from '@/components/Tool/myFenye'
import mySearch from '@/components/Tool/mySearch'

export default {
    name: 'MonthForecast',
    data(){
        return{
            value: '',
            timeList: [
                {
                    value: 'beijing',
                    label: '2017年1月'
                },
                {
                    value: 'shanghai',
                    label: '2017年2月'
                },
                {
                    value: 'shenzhen',
                    label: '2017年2月'
                },
                {
                    value: 'hangzhou',
                    label: '2017年3月'
                },
                {
                    value: 'nanjing',
                    label: '2017年4月'
                },
                {
                    value: 'chongqing',
                    label: '2017年5月'
                }
            ],
            cityList: [
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
                    width: '200',
                    title: '企业名称',
                    key: 'name',
                    align: 'center'
                },
                {
                    width: '100',
                    title: '所属区域',
                    key: 'place',
                    align: 'center'
                },
                {
                    width: '150',
                    title: '是否参与购电',
                    key: 'sales',
                    align: 'center'
                },
                {
                    width: '150',
                    title: '系统预测(万kW-h)',
                    key: 'n1',
                    align: 'center'
                },
                {
                    width: '150',
                    title: '企业申报',
                    key: 'n2',
                    align: 'center'
                },
                {
                    width: '150',
                    title: '人工预测(万kW-h)',
                    key: 'n3',
                    align: 'center'
                },{
                    title: '偏差电量(万kW-h)',
                    key: 'n4',
                    align: 'center'
                },
                {
                    title: '修改人',
                    key: 'n5',
                    align: 'center'
                },
                {
                    title: '确认人',
                    key: 'n6',
                    align: 'center'
                },
                {
                    title: '状态',
                    key: 'n7',
                    align: 'center'
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
                            }, '修改'),
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
                            }, '确认')
                        ])
                    }
                }
            ],
            data1: [
                {
                    name: '河南众企联合售电有限公司',
                    place: '河南大区',
                    sales: '是',
                    n1: '22',
                    n2: '22',
                    n3: '22',
                    n4: '22',
                    all: '110',
                    n5: '22',
                    n6: '22',
                    n7: '22',
                    n8: 'ok'
                },
                {
                    name: '河南特使售电有限公司',
                    place: '河南大区',
                    sales: '是',
                    n1: '22',
                    n2: '22',
                    n3: '22',
                    n4: '22',
                    all: '110',
                    n5: '22',
                    n6: '22',
                    n7: '22',
                    n8: 'ok'
                },
            ],
            modal1: false,
        }
    },
    methods: {
        renderM() {
            this.modal1= true
        },
        toDaoru() {
            this.$router.push("/import-data")
        }
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
                <div class="fl">
                    <Button class="Button" type="primary">上一年</Button>
                    <Select :model.sync="model1" style="width:100px;" placeholder='年度选择'>
                        <Option v-for="item in timeList" :value="item.value" :key = 'item.id'>{{ item.label }}</Option>
                    </Select>
                    <Button class="Button" type="primary">下一年</Button>                    						
                    <Select :model.sync="model1" style="width:100px;margin-left: 30px" placeholder='区域选择'>
                        <Option v-for="item in cityList" :value="item.value" :key = 'item.id'>{{ item.label }}</Option>
                    </Select>
                </div>
                <div class="fr">
                    <mySearch class="fl" style="margin-right: 30px;" placeholder="请输入公司名称或关键字" swidth="340"></mySearch>
                    <Button class="fl" type="primary">批量确认</Button>
                    <Button  class="fl" type="primary" @click="toDaoru()" style="margin-left: 10px">导入</Button>
                </div>
            </div>
            <Row class="layout-content-main">
                <Table border ref="selection" :columns="columns4" :data="data1"></Table>
            </Row>
            <myFenye></myFenye>
        </div>
    </Card>
    <Modal
        title="12月份电量申报详情"
        v-model="modal1"
        width = '846px'
        :mask-closable="false"
        class-name="vertical-center-modal">
        <Row class="gongSiBox">
            <Col span="8" class="gongSi">
                <Row class="comName">
                    <Col span='10'>企业名称</Col>
                    <Col span='7'>所属区域</Col>
                    <Col span='7'>是否购电</Col>
                </Row>
                <Row style="margin-top:35px;text-align: center;">
                    <Col span='10'>郑州大学科技园</Col>
                    <Col span='7'>郑州</Col>
                    <Col span='7'>是</Col>
                </Row>
            </Col>
            <Col span="16">
                <table cellspacing="10" cellpadding="10">
                    <tr>
                        <td>系统预测合计: 0</td>
                        <td>企业申报合计: 0</td>
                        <td>人工预测合计: 0 <br>
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
    overflow: hidden;
    background: #fff;
    height: 810px;
}
.layout-content-top {
    padding-bottom: 15px;
    overflow: hidden;   
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
