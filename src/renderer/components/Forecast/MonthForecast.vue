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
                    key: 'name'
                },
                {
                    width: '100',
                    title: '所属区域',
                    key: 'place'
                },
                {
                    width: '150',
                    title: '是否参与购电',
                    key: 'sales'
                },
                {
                    width: '150',
                    title: '系统预测(万kW-h)',
                    key: 'n1'
                },
                {
                    width: '150',
                    title: '企业申报',
                    key: 'n2'
                },
                {
                    width: '150',
                    title: '人工预测(万kW-h)',
                    key: 'n3'
                },{
                    title: '偏差电量(万kW-h)',
                    key: 'n4'
                },
                {
                    title: '修改人',
                    key: 'n5'
                },
                {
                    title: '确认人',
                    key: 'n6'
                },
                {
                    title: '状态',
                    key: 'n7'
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
    },
    components : {
        'myFenye': myFenye,
        'mySearch': mySearch
    },
}

</script>

<template>
<div class="main-container">
    <panel>
        <Row>
            <h3 class="title-lv2">月度预测</h3>
        </Row>
        <div class="layout-content">
            <Row class="layout-content-top">
                <Col span='8'>
                    <Button class="Button" type="primary">上一月</Button>
                    <i-select :model.sync="model1" style="width:100px" placeholder='月度选择'>								
                        <i-option v-for="item in timeList" :value="item.value" :key = 'item.id'>{{ item.label }}</i-option>
                    </i-select>
                    <Button class="Button" type="primary">下一月</Button>						
                    <i-select :model.sync="model1" style="width:100px" placeholder='全部区域'>								
                        <i-option v-for="item in cityList" :value="item.value" :key = 'item.id'>{{ item.label }}</i-option>
                    </i-select>
                </Col>
                <Col span="6" offset='7'>
                    <mySearch></mySearch>
                </Col>                    
                <Col span="3" style="text-align: right;">
                    <Button type="primary">批量确认</Button>
                    <Button type="primary" style="margin-left: 10px">导入</Button>
                </Col>
            </Row>
            <Row class="layout-content-main">
                <Table border ref="selection" :columns="columns4" :data="data1"></Table>
            </Row>
            <myFenye></myFenye>
        </div>
    </panel>
    <Modal
        title="12月份电量申报详情"
        v-model="modal1"
        width = 666
        :mask-closable="false"
        class-name="vertical-center-modal">
        <Row>
            <Col span="8" class="gongSi">
                <Row style="margin-top:10px;">
                    <Col span='12'>企业名称</Col>
                    <Col span='6'>所属区域</Col>
                    <Col span='6'>是否购电</Col>
                </Row>
                <Row style="margin-top:35px;">
                    <Col span='12'>郑州大学科技园</Col>
                    <Col span='6'>郑州</Col>
                    <Col span='6'>是</Col>
                </Row>
            </Col>
            <Col span="16">
                <table cellspacing="10" cellpadding="10">
                    <tr>
                        <td>系统预测合计</td>
                        <td>企业申报合计</td>
                        <td>人工预测合计 <input type="checkbox" name="" id=""  checked="checked" >使用客户申报数值</td>
                    </tr>
                    <tr>
                        <td>1234657498: <span class="num">0</span></td>
                        <td>1234657498: <span class="num">0</span></td>
                        <td>1234657498: <input type="text"> </td>
                    </tr>
                    <tr>
                        <td>1234657498: <span class="num">0</span></td>
                        <td>1234657498: <span class="num">0</span></td>
                        <td>1234657498: <input type="text"></td>
                    </tr>
                    <tr>
                        <td>1234657498: <span class="num">0</span></td>
                        <td>1234657498: <span class="num">0</span></td>
                        <td>1234657498: <input type="text"></td>
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
    border-radius: 4px;
    padding: 10px;    
    height: 875px
}
.layout-content-top {
    padding-bottom: 15px;
}
.gongSi div{
    text-align: center;
}
</style>
