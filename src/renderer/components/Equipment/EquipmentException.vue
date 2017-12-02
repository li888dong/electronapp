<script>
import myFenye from '@/components/Tool/myFenye'
import mySearch from '@/components/Tool/mySearch'

export default {
    name: 'EquipmentException',
    data(){
        return{
            columns1: [
                {
                    "sortable": true,
                    title: '终端编号',
                    key: 'n1'
                },
                {
                    "sortable": true,
                    title: '生产厂家',                    
                    width: 200,
                    key: 'n2'
                },
                {
                    "sortable": true,
                    title: '当前状态',
                    key: 'n3'
                },
                { 
                    title: '异常编码',
                    key: 'n4'
                },
                {
                    "sortable": true,
                    title: '异常类别',
                    key: 'n5'
                },
                {
                    title: '异常出现时间',
                    key: 'n6'
                },
                {
                    "sortable": true,
                    title: '操作人',
                    key: 'n7'
                },
                
                {
                    title: '操作',
                    key: 'n8',
                    align: 'center',
                    width: 150,
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
                            }, '修正完成'),
                            h('span', {
                                style: {
                                    marginLeft: '10px',
                                    color:'#36c ',
                                    cursor:'pointer'
                                },
                                on: {
                                    click: () => {
                                        
                                    }
                                }
                            }, '拆除设备')                                        
                        ]);
                    }

                }               
            ],
            data1: [
                {
                    n1: '123456',
                    n2: '2017-11-12',
                    n3: '123456',
                    n4: '2017-11-12',
                    n5: '123456',
                    n6: '2017-11-12',
                    n7: '123456',
                    n8: '2017-11-12',
                    n9: '123456',
                    n10: '22',
                    n11: '33'
                },
                {
                    n1: '123456',
                    n2: '2017-11-12',
                    n3: '123456',
                    n4: '2017-11-12',
                    n5: '123456',
                    n6: '2017-11-12',
                    n7: '123456',
                    n8: '2017-11-12',
                    n9: '123456',
                    n10: '22',
                    n11: '33'
                },
                {
                    n1: '123456',
                    n2: '2017-11-12',
                    n3: '123456',
                    n4: '2017-11-12',
                    n5: '123456',
                    n6: '2017-11-12',
                    n7: '123456',
                    n8: '2017-11-12',
                    n9: '123456',
                    n10: '22',
                    n11: '33'
                },
            ],
            cityList: [
                {
                    value: '所有区域',
                    label: '所有区域'
                },
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
            value: ''
        }
    },
    components : {
        'myFenye': myFenye,
        'mySearch': mySearch
    },
}
</script>

<template><!-- 设备异常页面 -->
<div class="main-container">
    <Card>
        <i class="iconfont icon-fanhui1 back" @click="$router.go(-1)"></i>
        <h3 slot="title" style="padding-left:40px">设备异常记录</h3>
        <div class="EquipmentExceptionBox">
            <div class="ExceptionTop">
                <div class="search"><mySearch placeholder="请输入公司名称或关键字" swidth="340"></mySearch></div>
                <Button type="primary" class="refresh" style="margin-left: 10px;"><i class="iconfont icon-shuaxin" style="top:-12px;left:-8px;"></i></Button>
                <Select v-model="model1" style="width:100px; margin-left: 10px;margin-right:10px;" placeholder="请选择区域">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <DatePicker :value="new Date()" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="请选择日期"  style="width: 200px"></DatePicker>
            </div>
            <Row class="ExceptionForm">
                <Table border :columns='columns1' :data='data1'></Table>            
            </Row>
        </div>
        <myFenye></myFenye>
    </Card>
</div>
</template>

<style scoped>
.search {
    display: inline-block;
    width: 340px;
    vertical-align: bottom;
}
.EquipmentExceptionBox {
    height: 811px;
    background-color: #fff;
}
 .back{
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 9;
    cursor: pointer;
    /* color: #108CEE; */
}
.ExceptionTop {
    height: 34px;
    position: relative;
    margin-bottom: 15px;
}
</style>
