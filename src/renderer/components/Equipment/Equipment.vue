<script>

import EquipmentInstall from '@/components/Equipment/EquipmentInstall.vue'
import EquipmentRun from '@/components/Equipment/EquipmentRun.vue'


export default {
    name: 'equipment',
    data() {
        return{
            columnsEq: [
                {
                    title: '申报主体单位',
                    key: 'n1'
                },
                {
                    title: '申报人',
                    key: 'n2'
                },
                {
                    title: '联系电话',
                    key: 'n3'
                },
                {
                    title: '申报日期',
                    key: 'n4'
                },
                {
                    title: '申报安装日期',
                    key: 'n5'
                },
                 {
                    title: '申报安装数量',
                    key: 'n6'
                },
                 {
                    title: '状态',
                    key: 'n7'
                },
                 {
                    title: '审核人',
                    key: 'n8'
                },
                 {
                    title: '施工人',
                    key: 'n9'
                },
                {
                    title: '操作',
                    key: 'n10'
                }

            ],
            dataEq: [
                {
                    n1: '河南某某有线公司',
                    n2: '某某某',
                    n3: '-',
                    n4: '-',
                    n5: '-',
                    n6: '-',
                    n7: '-',
                    n8: '-',
                    n9: '-',
                    n10: '-',
                },
                
                {
                    n1: '河南某某有线公司',
                    n2: '某某某',
                    n3: '-',
                    n4: '-',
                    n5: '-',
                    n6: '-',
                    n7: '-',
                    n8: '-',
                    n9: '-',
                    n10: '-',
                },
                {
                    n1: '河南某某有线公司',
                    n2: '某某某',
                    n3: '-',
                    n4: '-',
                    n5: '-',
                    n6: '-',
                    n7: '-',
                    n8: '-',
                    n9: '-',
                    n10: '-',
                },
                {
                    n1: '河南某某有线公司',
                    n2: '某某某',
                    n3: '-',
                    n4: '-',
                    n5: '-',
                    n6: '-',
                    n7: '-',
                    n8: '-',
                    n9: '-',
                    n10: '-',
                },
            ]
        }
    },
    mounted(){
    },
    methods: {      
        
    },
    components: {
        'EquipmentInstallView': EquipmentInstall,
        'EquipmentRunView': EquipmentRun
    }
  }

</script>

<template>
<Row className="main-container">
    <Row :gutter="15">
        <Col span="12" >
            <!-- 设备安装情况 -->
            <EquipmentInstallView></EquipmentInstallView>
        </Col>
        <Col span="6" >
            <!-- 设备库存情况 -->
            <Card class="equipment-stock">
                <h3 slot="title">设备库存情况</h3>
            </Card>                
        </Col>
        <Col span="6" >
            <!-- 设备其他情况 -->
            <Card class="equipment-other">
                <h3 slot="title">其他的设备详情</h3>
            </Card>                
        </Col>
    </Row>
    <!-- 设备运行情况 -->
    <Row class="mgt_15">
        <Col span="24">
            <EquipmentRunView></EquipmentRunView>
        </Col>
    </Row>
        <!-- 设备安装申请表 -->
    <Row class="mgt_15">
        <Col span="24">
            <Card>
                <h3 slot="title">设备安装申请</h3>
                <Row>
                    <Col span="24">
                        <Table border height=200 :columns="columnsEq" :data="dataEq"></Table> 
                    </Col>
                </Row>     
            </Card>                             
        </Col>
    </Row>
</Row>
</template>

<style scoped>
.equipment-stock{       
    height: 290px;
    border: 1px #e5e5e5 solid;
    background-color: #fff;
}
.equipment-other{
    height: 290px;
    border: 1px #e5e5e5 solid;
    background-color: #fff;
}

</style>
