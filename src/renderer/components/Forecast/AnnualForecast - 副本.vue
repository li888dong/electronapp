<script>
    export default {
        name: 'yearForecast',
        data(){
            return{
                value: '',
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
                        title: '人工预测(万kW-h)',
                        key: 'n1'
                    },
                    {
                        width: '150',
                        title: '系统预测(万kW-h)',
                        key: 'n2'
                    },
                    {
                        width: '150',
                        title: '偏差电量(万kW-h)',
                        key: 'n3'
                    },{
                        title: '偏差比例',
                        key: 'n4'
                    },
                    {
                        title: '合计',
                        key: 'all'
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
                        key: 'n8'
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
		<div class="layout-content">
			<h3>年度预测</h3>
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
                <Col span="6" offset='12' style=" text-align: right;">
                    <Input v-model="value" placeholder="客户编号或客户名称" class="myInput" style="width: 280px"></Input><Button type="primary" style="border-radius: 0">搜索</Button>
                </Col>
            </Row>
			</div>
			<div class="layout-content-main">
				<Table border ref="selection" :columns="columns4" :data="data1"></Table>
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
	</div>

</template>

<style scoped>

.MonthForecast {    
    width: 100%;
}
.layout-content{
    min-height: 200px;
    margin: 20px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px; 
    height: 945px;
}
.layout-content h3{
	height: 50px;
	border-bottom: 1px solid #E5E5E5;
	background-color: #fff;
	padding-left: 20px;
	padding-top: 20px;
	font-size: 16px;
	font-weight: 400;    
}
.layout-content-top {
	padding: 10px;
	padding-bottom: 0;
    margin-bottom: 15px;
}

.layout-content-main {
	padding: 10px;
	padding-top: 0;
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
