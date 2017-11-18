<script>
import inputs from '@/components/ContractManagement/inputs'

export default {
    name: 'ContractManagement',
    data(){
        return{
            value: "",
            columns1: [
                {
                    title: '01月',
                    key: 'one'
                },
                {
                    title: '02月',
                    key: 'one'
                },
                {
                    title: '03月',
                    key: 'one'
                },
                {
                    title: '04月',
                    key: 'one'
                },
                {
                    title: '05月',
                    key: 'one'
                },
                {
                    title: '06月',
                    key: 'one'
                },
                {
                    title: '07月',
                    key: 'one'
                },
                {
                    title: '08月',
                    key: 'one'
                },
                {
                    title: '09月',
                    key: 'one'
                },
                {
                    title: '10月',
                    key: 'one'
                },
                {
                    title: '11月',
                    key: 'one'
                },
                {
                    title: '12月',
                    key: 'one'
                },
                {
                    title: '总计',
                    key: 'zongji'
                }
            ],
            data1: [
                {
                    one: '22',
                    zongji: '1111'
                }               
            ]
        }
    },
    components: {
        "inputs": inputs
    }
}
</script>

<template>
<div class="ContractManagement">
    <!-- <inputs></inputs> -->
    <div class="layout-breadcrumb">
        <Breadcrumb>
            <BreadcrumbItem href="#">合同管理</BreadcrumbItem>
            <BreadcrumbItem href="#">添加长协合同</BreadcrumbItem>
        </Breadcrumb>
    </div>
    <div class="ContractBox">
        <div class="ContractBox-main">
            <h3>添加长协合同</h3>
            <form action="">
                <p>基本信息</p>
                <div class="TName"><span>合同编号 :</span> <Input v-model="value" class='myInput'></Input></div>
                <div class="TName"><span>合同年度 :</span> <Input v-model="value" class='myInput'></Input></div>
                <div class="TName"><span>签约电厂 :</span> <Input v-model="value" class='myInput'></Input></div>
                <div class="TName"><span>签约电量 :</span> <Input v-model="value" class='myInput'></Input> <i class="wkw">万KVA</i></div>
                <div class="TName"><span>合同状态 : </span><Input v-model="value" class='myInput'></Input></div>
                <div class="TName"><span>签约日期 :</span> <Input v-model="value" class='myInput'></Input></div>
                <div class="TName"><span>签约价格 :</span> <Input v-model="value" class='myInput'></Input></div>
                <p>联系信息</p>
                <div class="TName"><span>业务代表 :</span> <Input v-model="value" class='myInput'></Input></div>
                <div class="TName"><span>联系电话 :</span> <Input v-model="value" class='myInput'></Input></div>
                <div class="TName"><span>电厂地址 :</span> <Input v-model="value" style="width=480px" class='myInput'></Input></div>
                <div class="TName"><span>合同备注 :</span> <textarea name="" id="" class='myTextarea' cols="30" rows="10"></textarea></div>
                <p>电子合同备查</p>
                <div class="TName">
                    <span>合同上传 : </span>
                    <input type="text" class="fileUpload" name="fileUpload" /> 
                    <div class="up">
                         <Upload :before-upload="handleUpload" class="Upload" action="//jsonplaceholder.typicode.com/posts/">
                            <Button type="ghost" icon="" style="height:34px">选择文件</Button>
                        </Upload>
                    </div>
                    <i>仅支持PDF格式</i><br/>
                </div>
                
                <p>合同电量分配</p>
                <Table class="powerFenpei" :columns="columns1" :data="data1"></Table>
                <i class="tiShi">十二个月购电量分配合计与签约电量不一致！</i>
                <div class="save">
                    <Button type="primary">保存</Button>
                    <Button type="ghost">取消</Button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<style scoped>
 .layout-breadcrumb{
    padding: 10px 15px 0;
}
.ContractBox{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}
.ContractBox-main{
    padding: 10px;
}
.layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}
.ContractBox-main  h3{
    border-bottom: 1px solid #E5E5E5;
}
.ContractBox-main form {
    padding-top: 10px;
    padding-left: 50px;
    position: relative;
}
.ContractBox-main form p{
    border-left: 6px solid #108CEE;
    font-size: 14px;
    font-weight: 700;
    padding-left: 5px;
}
.myInput {
    margin-top: 10px;
    margin-left: 110px;
}
.TName{
   position: relative;
    
}
.TName span{
    position: absolute ; 
    top: 20px;
    left: 40px;
    font-size: 14px;
    color: #000;
}
.wkw{
    position: absolute; 
    left: 400px;
    top: 20px;
    font-style:normal;
    font-size: 12px;
}
.TName .myTextarea{
    width: 700px;
    height: 102px;
    resize:none;
    margin-top: 10px;
    margin-left: 110px;
}
.fileUpload{
    width: 280px;
    height: 34px;
    margin-top: 10px;
    margin-left: 110px;
}
.up {
    display: inline-block;
    vertical-align: middle;

}
.powerFenpei {
    margin-top: 10px;
}
.tiShi {
    float: right;
    color: #E19D0C;
}
.save {
    text-align: center;
}
</style>


