<script>
import inputs from '@/components/ContractManagement/inputs'

export default {
    name: 'ContractManagement',
    data(){
        return{
            formRight: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
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
            ],
            cityList: [
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
            model3: '',
            file: null,
            loadingStatus: false,
            formItem: {
                input: '',
                select: '',
                radio: 'male',
                checkbox: [],
                switch: true,
                date: '',
                time: '',
                slider: [20, 50],
                textarea: ''
            },
        }
    },
    components: {
        "inputs": inputs
    },
    methods: {
        handleUpload (file) {
            this.file = file;
            return false;
        },
        upload () {
            this.loadingStatus = true;
            setTimeout(() => {
                this.file = null;
                this.loadingStatus = false;
                this.$Message.success('Success')
            }, 1500);
        }
    }
}
</script>

<template>
<Row class="ContractManagement">
    <div class="ContractBox">
        <div class="ContractBox-main">
            <h3>添加长协合同</h3>
            <i-form :model="formItem" :label-width="110">
            <p>基本信息</p>
            <Row>
                <i-col span="8">
                    <Form-item label="合同编号">
                        <i-input :value.sync="formItem.input" placeholder="请输入合同编号"></i-input>
                        
                    </Form-item>
                </i-col>
                <i-col span="8">
                    <Form-item label="合同年度">
                        <i-input :value.sync="formItem.input" placeholder="请输入合同年度"></i-input>
                    </Form-item>
                </i-col>               
            </Row>
            <Row>
                <i-col span="8">
                    <Form-item label="签约电厂">
                        <i-input :value.sync="formItem.input" placeholder="请输入签约电厂"></i-input>
                    </Form-item>
                </i-col>
                <i-col span="8">
                    <Form-item label="签约电量">
                        <i-input :value.sync="formItem.input" placeholder="请输入签约电量"></i-input>   <i class="wkw">万KVA</i>                    
                    </Form-item>
                </i-col>
                
            </Row>
            <Row>
                <i-col span="8">
                    <Form-item label="合同状态">
                        <i-input :value.sync="formItem.input" placeholder="请输入合同状态"></i-input>
                    </Form-item>
                </i-col>
                <i-col span="8">
                    <Form-item label="签约日期">
                        <i-input :value.sync="formItem.input" placeholder="请输入签约日期"></i-input>
                    </Form-item>
                </i-col>
            </Row>
            <Row>
                <i-col span="8">
                    <Form-item label="签约价格">
                        <i-input :value.sync="formItem.input" placeholder="请输入签约价格"></i-input>
                    </Form-item>
                </i-col>
                <i-col span="8">
                    <Form-item label="执行日期">
                        <i-input :value.sync="formItem.input" placeholder="请输入执行日期"></i-input>
                    </Form-item>
                </i-col>
            </Row>
            <p>联系信息</p>
            <Row>
                <i-col span="8">
                    <Form-item label="业务代表">
                        <i-input :value.sync="formItem.input" placeholder="请输入业务代表"></i-input>
                    </Form-item>
                </i-col>
                <i-col span="8">
                    <Form-item label="联系电话">
                        <i-input :value.sync="formItem.input" placeholder="请输入联系电话"></i-input>
                    </Form-item>
                </i-col>
            </Row>
            <Row :gutter="10">
                <Form-item label="电厂地址">
                    <i-col span="2">
                        <i-select :model.sync="formItem.select" placeholder="请选择">
                            <i-option value="beijing">北京市</i-option>
                            <i-option value="shanghai">上海市</i-option>
                            <i-option value="shenzhen">深圳市</i-option>
                        </i-select>
                    </i-col>
                    <i-col span="2">
                    <i-select :model.sync="formItem.select" placeholder="请选择">
                        <i-option value="beijing">北京市</i-option>
                        <i-option value="shanghai">上海市</i-option>
                        <i-option value="shenzhen">深圳市</i-option>
                    </i-select>
                    </i-col>
                    <i-col span="8">
                        <i-input :value.sync="formItem.input" placeholder="请输入详细通讯地址"></i-input>
                    </i-col>
                </Form-item>
            </Row>
            <Row>
                <i-col span="8">
                    <Form-item label="合同备注">
                        <i-input :value.sync="formItem.input" placeholder="请输入合同备注"></i-input>
                    </Form-item>
                </i-col>
            </Row>
            <p>电子合同备查</p>
            <div class="TName">
                    <span>合同上传 : </span>                    
                    <div class="up">
                        <input type="file" name="" id="">
                    </div> <br>
                    <i style="padding-left:114px;">仅支持PDF格式</i><br/>
                </div> <br>
            <p>合同电量分配</p>
                <Row :gutter="16" class="month" >
                    <Col span="1">一月</Col>
                    <Col span="1">二月</Col>
                    <Col span="1">三月</Col>
                    <Col span="1">四月</Col>
                    <Col span="1">五月</Col>
                    <Col span="1">六月</Col>
                    <Col span="1">七月</Col>
                    <Col span="1">八月</Col>
                    <Col span="1">九月</Col>
                    <Col span="1">十月</Col>
                    <Col span="1">十一月</Col>
                    <Col span="1">十二月</Col>
                    <Col span="1">总计</Col>
                </Row>
                <Row :gutter="16" class="monthData">
                    <Col span="1">10</Col>
                    <Col span="1">10</Col>
                    <Col span="1">10</Col>
                    <Col span="1">10</Col>
                    <Col span="1">10</Col>
                    <Col span="1">10</Col>
                    <Col span="1">10</Col>
                    <Col span="1">10</Col>
                    <Col span="1">10</Col>
                    <Col span="1">10</Col>
                    <Col span="1">10</Col>
                    <Col span="1">10</Col>
                    <Col span="1"></Col>                    
                </Row>                
                <i class="tiShi">十二个月购电量分配合计与签约电量不一致！</i>
                <div class="save">
                    <Button type="primary">保存并继续添加</Button>
                    <Button type="primary">保存</Button>
                    <Button type="ghost">取消</Button>
                </div>            
            </i-form>
        </div>
    </div>
</Row>
</template>

<style scoped>
/* 表单每一项的下外边距 */

.ivu-form-item {
    margin-bottom: 15px;
}

 .layout-breadcrumb{
    padding: 10px 15px 0;
}
.ContractBox{
    height: 905px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
    margin: 20px;
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
    height: 30px;
    font-size: 14px;
    border-bottom: 1px solid #E5E5E5;
}
.ContractBox-main form {
    padding-left: 12%;
    position: relative;
    padding-right: 20%;
}
.ContractBox-main form p{
    font-size: 14px;
    font-weight: 700;
    padding-left: 5px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.myInput {
    margin-top: 10px;
    margin-left: 110px;
}
.beizhu {
    margin-top: 40px;
}
.beizhu input{
    width: 700px;
    margin-top: 10px;    
    margin-left: 110px;
    height: 34px;
    border: 1px solid #E5E5E5;
}
.adress {
    position: relative;
}
.beizhu {
    position: relative;
}
.adress input {
    height: 34px;
    margin-left: 10px;
    vertical-align: top;
    border: 1px solid #E5E5E5;
    width: 480px;
}
.beizhu span, .adress span{
    position: absolute ; 
    top: 20px;
    left: 40px;
    font-size: 14px;
    color: #000;
}
.mySelect {
    margin-left: 4px;
}
.TName{
    position: relative;
    display: inline-block;
    width: 34%;
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
    right: -46px;
    top: 0px;
    font-style: normal;
    font-size: 12px;
    color: #ccc;
}
/* .TName .myTextarea{
    width: 700px;
    height: 102px;
    resize:none;
    margin-top: 10px;
    margin-left: 110px; 
} */

.up input{
    margin-left: 110px;
    margin-top: 16px;
}
.powerFenpei {
    margin-top: 10px;
}
.tiShi {
    color: #E19D0C;
    margin-left: 10px;
}
.save {
    text-align: center;
    margin-top: 20px;
    margin-left: -80px;
}
.month div{
    height: 32px;
    background-color: #f6f7fb;
    line-height: 32px;
    text-align: center;
    margin-right: 10px;
    margin-left: 14px;
    width: 60px;
}
.monthData div{
    height: 32px;
    line-height: 32px;
    text-align: center;
    margin-right: 10px;
    border: 1px solid #E5E5E5;
    margin-top: 10px;
    margin-left: 14px;
    width: 60px;
}
</style>


