<script>
export default {
    name: 'UserForecast',
    data(){
        return{
            value: '请输入你想查询的编号',
            place: [
                {
                    value: 'New York',
                    label: 'New York'
                },
                {
                    value: 'London',
                    label: 'London'
                },
                {
                    value: 'Sydney',
                    label: 'Sydney'
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa'
                },
                {
                    value: 'Paris',
                    label: 'Paris'
                },
                {
                    value: 'Canberra',
                    label: 'Canberra'
                }
            ],
            model1: '',
            columns4: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '企业名称',
                    key: 'name'
                },
                {
                    title: '上月申报电量(万KW-h)',
                    key: 'name'
                },
                {
                    title: '上月用电量(万KW-h)',
                    key: 'name'
                },
                {
                    title: '预测电量(万kW-h)',
                    key: 'name'
                },
                {
                    title: '申报电量(万kW-h)',
                    key: 'name'
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
                                        this.show()
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
            modal10: false,
            columns5: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '申报人',
                    key:'people'
                },
                {
                    title: '申报电量',
                    key:'usePower'
                },
                {
                    title: '申报时间',
                    key:'useTime'
                },
                {
                    title: '备注',
                    key:'useNote'
                }
            ],
            data5: [
                {
                    people: '王朝辉',
                    usePower: '11111',
                    useTime: '2017-11-11',
                    useNote: '暂无情况'
                },
                {
                    people: '利天天',
                    usePower: '11111',
                    useTime: '2017-11-11',
                    useNote: '暂无情况'
                },
            ],
             
        }
    },
    methods: {
        show(index) {
            this.$Modal.info({
                title: '12月份电量申报详情',   
                content: '企业名称 :   <span>河南众企联合售电有限公司</span> <br>申报记录 : <Table border ref="selection" :columns="columns5" :data="data5"></Table>'
            })
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
        <div class="layout-content-top">          
            <Row>
                    <Col span="1">
                    <div class="aaa" style="opacity: 0;">
                        我是占位符
                    </div>
                </Col>
                <Col span="3">
                    <DatePicker :value="new Date()" format="yyyy年MM月dd日" type="date" placeholder="value1" style="width: 200px"></DatePicker>
                </Col>
                <Col span="3">
                    <Select v-model="model1" style="width:200px">
                        <Option v-for="item in place" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </Col>
                <Col span="11">
                    <div class="aaa" style="opacity: 0;">
                        我是占位符
                    </div>
                </Col>
                <Col span="6">
                    <Input v-model="value" placeholder="客户编号或客户名称" class="myInput" style="width: 280px"></Input><Button type="primary">搜索</Button>
                </Col>
            </Row>
        </div>
        <div class="layout-content-main">
            <Table border ref="selection" :columns="columns4" :data="data4"></Table>
        </div>
        <Button type="primary" style="margin-left: 20px">批量确认</Button>
        <Button type="primary">导入</Button>
        <Button type="primary">导出</Button>
        <Page :total="100" show-sizer style="float: right"></Page>
    </div>

    <!-- <Button @click="modal10 = true">查看</Button>
    <Modal
        title="12月份电量申报详情"
        v-model="modal10"
        class-name="vertical-center-modal"
        :closable="false"
        :mask-closable="false">
        企业名称 :   <span>河南众企联合售电有限公司</span> <br>
        申报记录 :   <Table border ref="selection" :columns="columns5" :data="data5"></Table>        
    </Modal> -->
</div>
</template>

<style scoped>
.UserForecast {
    width: 1694px;
    height: 932px;
    background-color: #E8ECF0;
    padding: 16px;
}
.layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}
.layout-content-main{
    padding: 10px;
}
.layout-content-top {
    padding-top: 10px;
}


</style>
