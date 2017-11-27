<script>
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
            model1: ''
        }
    }
}
</script>

<template><!-- 设备异常页面 -->
<Row class="EquipmentException">
    <div class="EquipmentExceptionBox">
        <Row  class="ExceptionTittle">
            <Col span="24">
                <i class="iconfont icon-fanhui1 back" @click="$router.go(-1)"></i>
                <h3>设备异常记录</h3>
            </Col>
        </Row>
        <Row class="ExceptionTop">
            <Col span="5"class="searchBox">
                <i class="iconfont icon-search" ></i>
                <Input v-model="value" placeholder="客户编号或客户名称" class="myInput" style="width: 280px"></Input><Button type="primary">搜索</Button>
            </Col>
            <span class='refresh'> <i class="iconfont icon-shuaxin"></i> </span>
            <Select v-model="model1" style="width:100px; margin-right:10px;" placeholder="请选择区域">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <DatePicker :value="new Date()" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="请选择日期"  style="width: 200px"></DatePicker>   
        </Row>
        <Row class="ExceptionForm">
            <Table border :columns='columns1' :data='data1'></Table>            
        </Row>
        <div class="fenYe">
            <Page :total="100" show-total show-elevator></Page> <Button type="primary">确定</Button>
        </div>
    </div>
</Row>
</template>

<style scoped>
.EquipmentException{
    width: 100%;
    height: 945px;
    background-color: #E8ECF0;
    padding: 15px;
    font-size: 14px;
}
.ExceptionTittle{
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    line-height: 1;
    position: relative;
    height: 40px;
    padding-left: 20px;
    line-height: 40px;
}
.ExceptionTittle h3{
    height: 40px;
	border-bottom: 1px solid #E5E5E5;
	background-color: #fff;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
    padding-left: 42px;
}

.EquipmentExceptionBox {
    height: 905px;
    background-color: #fff;
}


.ExceptionTittle .back{
    position: absolute;
    top: 0px;
    left: -10px;
    z-index: 9;
    cursor: pointer;
    color: #108CEE;
}
/* 顶部搜索框样式 */
.ivu-btn{
    height: 34px;
    border-radius: 0;
}
.searchBox {
    position: relative;
}
.searchBox i {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 6px;
    left: 2%;
    z-index: 11;
}
.ExceptionTop {
    height: 59px;
    padding: 10px 10px 15px;
    background-color: #fff;
    position: relative;
}

.ExceptionForm{
    background-color: #fff;
    position: relative;    
    max-height: 768px;
    padding: 0 10px;
}

/* 分页的样式 */
.fenYe {
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 10px;
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
