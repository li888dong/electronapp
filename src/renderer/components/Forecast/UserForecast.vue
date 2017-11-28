<script>
import myFenye from '@/components/Tool/myFenye'
import mySearch from '@/components/Tool/mySearch'

export default {
    name: 'UserForecast',
    data(){
        return{
            value: '',
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
    },
    components : {
        'myFenye': myFenye,
        'mySearch': mySearch
    },
}           
</script>

<template>
<div class="main-container">    
    <panel >
        <Row>
            <h3 class="title-lv2">用户申报</h3>
        </Row>
        <div class="layout-content">
            <Row class="layout-content-top">          
                <Row>
                    <Col span="3">
                        <DatePicker :value="new Date()" format="yyyy年MM月dd日" type="date" placeholder="value1" style="width: 200px;height:30px;"></DatePicker>
                    </Col>
                    <Col span="3">
                        <Select v-model="model1" style="width:200px" placeholder='全部区域'>
                            <Option v-for="item in cityList" :value="item.value" :key="item.value" >{{ item.label }}</Option>
                        </Select>
                    </Col>
                    <Col span="6" offset='12'>
                        <mySearch></mySearch>
                    </Col>
                </Row>
            </Row>
            <Row class="layout-content-main">
                <Table border ref="selection" :columns="columns4" :data="data4"></Table>
            </Row>
            <myFenye></myFenye>
        </div>
    </panel>
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

.layout-content{
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
    padding: 10px;    
    height: 875px
}
.layout-content-top {
    margin-bottom: 15px;
}
</style>
