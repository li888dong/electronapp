<script>
export default {
    name: 'MonthForecast',
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
                    title: '所属区域',
                    key: 'name'
                },
                {
                    title: '是否参与购电',
                    key: 'name'
                },
                {
                    title: '人工预测(万kW-h)',
                    key: 'name'
                },
                {
                    title: '系统预测(万kW-h)',
                    key: 'name'
                },
                {
                    title: '偏差电量(万kW-h)',
                    key: 'name'
                },{
                    title: '偏差比例',
                    key: 'name'
                },
                {
                    title: '合计',
                    key: 'name'
                },
                {
                    title: '修改人',
                    key: 'name'
                },
                {
                    title: '确认人',
                    key: 'name'
                },
                {
                    title: '状态',
                    key: 'name'
                },
                {
                    title: '操作',
                    key: 'name'
                }
            ],
            data1: [
                {
                    name: '河南众企联合售电有限公司',
                    name: '修改  确认',
                },
                {                   
                    name: '修改  确认',
                },
            ]
        }
    },
    // mounted() {
    //         this.getNewData(data11);
    //     },
    methods: {
        // getNewData(){
        //     var data11 = new Date();
        //     // var y = data11.getFullYear();
        //     // var m = data11.getMonth()+1;
        //     // var d = data11.getDate();
        //     // if(y < 10){
        //     //     y = "0"+ y
        //     // };
        //     // if(m < 10){
        //     //     m = "0"+ m
        //     // };
        //     // if(d < 10){
        //     //     d = "0"+ d
        //     // };
        //     // var t = y+ '-' +m+ '-' +d;
        //     return data11;          
        // }
        // handleSelectAll (status) {
        //     this.$refs.selection.selectAll(status);
        // }
    }
}

</script>

<template>
<div class="MonthForecast">
    <div class="layout-breadcrumb">
        <Breadcrumb>
            <BreadcrumbItem href="#">预测分析</BreadcrumbItem>
            <BreadcrumbItem>月度预测</BreadcrumbItem>
        </Breadcrumb>
    </div>
    <div class="layout-content">
        <h3>月度预测</h3>
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
            <Table border ref="selection" :columns="columns4" :data="data1"></Table>
        </div>
        <Button type="primary" style="margin-left: 20px">批量确认</Button>
        <Button type="primary">导入</Button>
        <Button type="primary">导出</Button>
        <Page :total="100" show-sizer style="float: right"></Page>
    </div>
</div>

</template>

<style scoped>
.layout-breadcrumb{
    padding: 10px 15px 0;
    
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
.layout-content h3{
    height: 50px;
    padding-left: 10px;
    padding-top: 15px;
    border-bottom: 1px solid #E5E5E5;
    font-size: 16px;
    font-weight: 700;
}
.layout-content-top {
    padding-top: 10px;
}
</style>
