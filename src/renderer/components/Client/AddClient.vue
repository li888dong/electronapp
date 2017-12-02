<script>
export default {
    name: 'AddClient',
    data(){
        return{
            formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: '',
                    res_s:[]
                },
            bankList: [
                    {
                        value: '中国人民银行',
                        label: '中国人民银行'
                    },
                    {
                        value: '中国建设银行',
                        label: '中国建设银行'
                    },
                    {
                        value: '中国光大银行',
                        label: '中国光大银行'
                    },
                    {
                        value: '中国招商银行',
                        label: '中国招商银行'
                    },
                    {
                        value: '中国浦发银行',
                        label: '中国浦发银行'
                    },
                    {
                        value: '中国工商银行',
                        label: '中国工商银行'
                    }
                ],
                lvList:[
                    {
                        value: '一级',
                        label: '一级'
                    },
                    {
                        value: '二级',
                        label: '二级'
                    },
                     {
                        value: '三级',
                        label: '二级'
                    }
                ],                
                model11: '',
                model22: '',
        }
    }
}
</script>

<template>
<div class="AddClient">
    <Card class="AddClientBox">
        <i class="iconfont icon-fanhui1 back" @click="$router.go(-1)" style="position: absolute;top: 14px;left: 10px;"></i>
        <h3 slot="title" style="padding-left:40px;">添加新客户</h3>
        <Form :model="formItem" :label-width="110">
            <h4>基本信息</h4>
            <Row>
                <Col span="12">
                    <Form-item label="企业全称">
                        <i-input :value.sync="formItem.input" placeholder="请输入企业全称"></i-input>
                        
                    </Form-item>
                </Col>
                <Col span="5">
                    <Form-item label="企业简称">
                        <i-input :value.sync="formItem.input" placeholder="请输入企业简称"></i-input>
                    </Form-item>
                </Col>
                <Col span="20" offset='2' class="hint">
                    <p>需与当地政府颁发的商业许可证书或企业注册证上的企业名称完全一致，信息审核审核成功后，企业名称不可修改。</p>
                </Col>    
            </Row>
            <Row>
                <Col span="12">
                    <Form-item label="统一社会信用代码">
                        <i-input :value.sync="formItem.input" placeholder="请输入15位或18位的统一社会信用代码"></i-input>
                    </Form-item>
                </Col>
            </Row>
            <Row>
                <Col span="8">
                    <Form-item label="法人代表姓名">
                        <i-input :value.sync="formItem.input" placeholder="与营业执照上一致"></i-input>
                    </Form-item>
                </Col>
                <Col span="8">
                    <Form-item label="组织机构代码">
                        <i-input :value.sync="formItem.input" placeholder="与营业执照上一致"></i-input>
                    </Form-item>
                </Col>
            </Row>        
            <Row>
                <Col span="8">
                    <Form-item label="开户银行">
                        <Select :model.sync="formItem.select" placeholder="请选择">
                            <Option value="beijing">北京市</Option>
                            <Option value="shanghai">上海市</Option>
                            <Option value="shenzhen">深圳市</Option>
                        </Select>
                    </Form-item>
                </Col>
            </Row>
            <Row>
                <Col span="8">
                    <Form-item label="开户账号">
                        <i-input :value.sync="formItem.input" placeholder="请如实填写"></i-input>
                    </Form-item>
                </Col>
            </Row>
            <h4>业务信息</h4>
            <Row :gutter="10">                
                <Form-item label="所属行业">
                    <Col span="5">
                        <Select :model.sync="formItem.select" placeholder="请选择">
                            <Option value="beijing">北京市</Option>
                            <Option value="shanghai">上海市</Option>
                            <Option value="shenzhen">深圳市</Option>
                        </Select>
                    </Col>
                    <Col span="4">
                    <Select :model.sync="formItem.select" placeholder="请选择">
                        <Option value="beijing">北京市</Option>
                        <Option value="shanghai">上海市</Option>
                        <Option value="shenzhen">深圳市</Option>
                    </Select>
                    </Col>
                    <Col span="4">
                    <Select :model.sync="formItem.select" placeholder="请选择">
                        <Option value="beijing">北京市</Option>
                        <Option value="shanghai">上海市</Option>
                        <Option value="shenzhen">深圳市</Option>
                    </Select>
                    </Col>
                </Form-item>                
            </Row>
            <Row>
                <Col span="8">
                    <Form-item label="用电等级">
                        <Select :model.sync="formItem.select" placeholder="请选择">
                            <Option value="beijing">一级</Option>
                            <Option value="shanghai">二级</Option>
                            <Option value="shenzhen">三级</Option>
                        </Select>
                    </Form-item>
                </Col>
            </Row>
            <h4>联系信息</h4>
            <Row :gutter="10">
                <Form-item label="通讯地址">
                    <Col span="4">
                        <al-selector v-model="res_s" level=1 />
                    </Col>
                    <Col span="8">
                        <i-input :value.sync="formItem.input" placeholder="请输入详细通讯地址"></i-input>
                    </Col>
                    <Col span="2">
                        <i-input :value.sync="formItem.input" placeholder="邮政编码"></i-input>
                    </Col>
                </Form-item>
            </Row>
            <Row>
                <Col span="8">
                    <Form-item label="联系人">
                        <i-input :value.sync="formItem.input" placeholder="请输入联系人姓名"></i-input>
                    </Form-item>
                </Col>
            </Row>
            <Row>
                <Col span="8">
                    <Form-item label="联系人电话">
                        <i-input :value.sync="formItem.input" placeholder="请输入联系人手机号码"></i-input>
                    </Form-item>
                </Col>
                <Col span="12" class="hint2">
                    <p>该手机号用于开通系统登录账号，请确保手机号正确</p>
                </Col>
            </Row>
            <Row>
                <Col span="8">
                    <Form-item label="电子邮箱">
                        <i-input :value.sync="formItem.input" placeholder="请输入联系人邮箱号码"></i-input>
                    </Form-item>
                </Col>
                <Col span="12" class="hint2">
                    <p>接收账号密码和找回密码使用。</p>
                </Col>
            </Row>
            <Row>
                <Col span="8">
                    <Form-item label="办公电话">
                        <Col span="8">
                            <i-input :value.sync="formItem.input" placeholder="-"></i-input>
                        </Col>
                        <Col span="1" style="text-align: center;line-height: 34px;">-</Col>    
                        <Col span="15">
                            <i-input :value.sync="formItem.input" placeholder="请输入办公电话"></i-input>
                        </Col>
                    </Form-item>
                </Col>
                <Col span="8">
                    <Form-item label="传真号码">
                        <Col span="8">
                            <i-input :value.sync="formItem.input" placeholder="-"></i-input>
                        </Col>
                        <Col span="1" style="text-align: center;line-height: 34px;">-</Col>    
                        <Col span="15">
                            <i-input :value.sync="formItem.input" placeholder="请输入传真号码"></i-input>
                        </Col>
                    </Form-item>
                </Col>
            </Row>            
            <Row>
                <Col span="12" style="text-align: center;line-height: 34px;">
                    <Form-item>
                        <i-button type="primary">保存并添加合同</i-button>
                        <i-button type="primary" style="margin-left: 30px">保存</i-button>
                        <i-button type="ghost" style="margin-left: 30px">取消</i-button>
                    </Form-item>
                </Col>
            </Row>
        </Form>
    </Card>
</div>  
</template>

<style scoped>
/* 表单每一项的下外边距 */

.ivu-form-item {
    margin-bottom: 15px;
}

.AddClient{
    max-width: 1700px;
    padding: 20px;
    line-height: 1;
    max-height: 914px;
    overflow: hidden;
}
.AddClientBox{
    background-color: #fff;
    height: 905px;
    overflow: hidden;
}

.AddClientBox h4{
    font-size: 14px;
    padding-left: 6px;
    margin-bottom: 20px;
}
.AddClientBox form{
    margin: 20px 60px;
    margin-left: 20%;
}

.AddClientBox form input{
    width: 280px;
    height: 30px;
    border: 1px solid #CCCCCC;
    padding-left: 10px;
    margin-bottom: 15px;
}


.hint{
    color: #ccc;
    top: -12px;
    left: 12px;
    font-size: 12px;
}
.hint2 {
    color: #ccc;
    margin-left: 10px;
    line-height: 34px;
}
.jiancheng{
    display: inline;
    margin-left: 30px;
    margin-right: 22px;
    font-size: 14px;
    color: #000;
}
select {
    width: 200px;
    height: 30px;
    margin-right: 10px;
    margin-bottom: 15px;
    border-color: #ccc;
    padding-left: 10px;
}
.addClientSubmit {
    width: 100%;
    height: 38px;
    text-align: center;
    margin-top: 40px;
}
.addClientSubmit button{
    width: 120px;
    height: 38px;
    font-size: 14px;
    color: #fff;
    background-color: #108CEE;
    margin-left: 14px;
}
.addClientSubmit .saveAdd{
    width: 200px;
}
.addClientSubmit .save {
    width: 70px;
}
.addClientSubmit .cancel {
    width: 70px;
    color: #108CEE;
    border: 1px solid #108CEE;
    background-color: #fff;
}
</style>
