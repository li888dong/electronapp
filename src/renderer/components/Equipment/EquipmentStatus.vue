<script>
import myFenye from '@/components/Tool/myFenye'
import mySearch from '@/components/Tool/mySearch'

export default {
    name: 'EquipmentStatus',
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
                    key: 'n2'
                },
                {
                    "sortable": true,
                    title: '登陆IP：端口',
                    key: 'n3'
                },
                { 
                    title: '最新上线时间',
                    key: 'n4'
                },
                {
                    "sortable": true,
                    title: '当前在线时长',
                    key: 'n5'
                },
                {
                    "sortable": true,
                    title: '合计在线时长',
                    key: 'n6'
                },
                {
                    "sortable": true,
                    title: '当前状态',
                    key: 'n7'
                },
                {
                    title: '掉线时间',
                    key: 'n8'
                },
                {
                    "sortable": true,
                    title: '采集成功率',
                    key: 'n9'
                },
                {
                    "sortable": true,
                    title: '上报比例',
                    key: 'n10'
                },
                {
                    title: '操作',
                    key: 'n11',
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
                            }, '更多')                            
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
            model1:'',
            value: ''
        }
    },
    methods:{
        toYichang(){
            this.$router.push("/EquipmentException");
        }
    },
    components : {
        'myFenye': myFenye,
        'mySearch': mySearch
    },
}
</script>

<template><!-- 设备统计日志页面 -->
<div class="main-container">
    <Card>
        <h3 slot="title">设备统计日志</h3>
        <Button slot="extra" type="primary" style="top:-8px;" @click="toYichang()">设备异常记录</Button>
        <div class="EquipmentStatusBox">
            <div class="statusTop">
                <div class="fl">
                    <div class="search"><mySearch placeholder="请输入公司名称或关键字" swidth="340"></mySearch></div>
                    <Button type="primary" class="refresh" style="margin-left: 10px;"><i class="iconfont icon-shuaxin" style="top:-12px;left:-8px;"></i></Button>
                    <Select v-model="model1" style="width:100px; margin-left: 10px;margin-right:10px;" placeholder="请选择区域">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <DatePicker :value="new Date()" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="请选择日期"  style="width: 200px"></DatePicker>
                </div>
                <div class="viewOffline">
                    <Checkbox label="Eat"></Checkbox>
                    仅显示已掉线设备
                </div>    
            </div>
            <Row class="statusForm">
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
.EquipmentStatusBox {
    height: 811px;
}

.shebeiYichang{
    display: inline-block;
    width: 123px;
    height: 30px;
    font-size: 14px;
    background-color: #108CEE;
    color: #fff;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
}
.EquipmentStatusBox i {
    top: 14px;
    left: 10px;
    position: absolute;
}
.statusTop {
    height: 34px;
    position: relative;
    margin-bottom: 15px;
}
.viewOffline{
    float: right;
    margin-top: 10px;
}
.viewOffline input {
    width: 16px;
    height: 16px;
    border: 1px solid #000;
    outline: none;
    vertical-align: middle;
}

.statusForm{
    background-color: #fff;
    position: relative;
}

</style>
