<script>

import EquipmentInstall from '@/components/Equipment/EquipmentInstall.vue'
import EquipmentRun from '@/components/Equipment/EquipmentRun.vue'


export default {
    name: 'equipment',
    data() {
        return{
            
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
<div class="equipment-box">
    <Row class="equipment-top">
        <Col span="12">
            <!-- 设备安装情况 -->
            <EquipmentInstallView></EquipmentInstallView>
        </Col>
        <Col span="6" class="equipment-stock">
            <!-- 设备库存情况 -->
            <div >
                设备库存情况
            </div>
        </Col>
        <Col span="6" class="equipment-other">
            <!-- 设备其他情况 -->
            <div >
                其他的设备详情
            </div>
        </Col>
    </Row>

    <Row>
        <Col span="24">
                    <!-- 设备运行情况 -->
            <EquipmentRunView></EquipmentRunView>
        </Col>
    </Row>
    <Row>
        <Col span="24">
                <!-- 设备安装申请表 -->
            <div class="equipmentInform">
                <table>
                    <thead>设备安装申请</thead>
                    <tbody>
                        <tr>
                            <th> <input type="checkbox" name="" id="" class="check"> 申报主题单位</th>
                            <th>申报人</th>
                            <th>联系电话</th>
                            <th>申报日期</th>
                            <th>申报安装日期</th>
                            <th>申报安装数量</th>
                            <th>状态</th>
                            <th>审核人</th>
                            <th>施工人</th>
                            <th>操作</th>
                        </tr>
                    </tbody>
                </table>
            </div>            
        </Col>
    </Row>
    
</div>
</template>


<style scoped>
    .equipment-box{
        max-width: 1700px;
        padding-left: 18px;
        padding-top: 15px;
        background-color: #E8ECF0;
        overflow: hidden;
    }
    .equipment-top{
        height: 290px;
        margin-bottom: 10px;
    }
    .equipment-stock{
        max-width: 405px;
        height: 290px;
        border: 1px #e5e5e5 solid;
        background-color: #fff;
        margin-right: 6px;
        float: left;
    }
    .equipment-other{
        max-width: 405px;
        height: 290px;
        border: 1px #e5e5e5 solid;
        background-color: #fff;
        float: left;
    }
    

    tabble, thead, tbody, tr, th, td{
        margin: 0;
        padding: 0;
    }
    .equipmentInform{
        background-color: #fff;
        padding: 20px;
    }
    .equipmentInform thead{
        font-size: 16px;
        font-family: '微软雅黑'
    }
    .equipmentInform tr{
        text-align: center;        
    }
    .equipmentInform th{
        display: inline-block;
        background-color: #F6F7FB;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 20px;
        padding-right: 20px;
        margin-right: 60px;
    }
    .equipmentInform .check{
        list-style: none;
        max-width: 16px;
        height: 16px;
        vertical-align:middle; 
    }
</style>
