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
                    textarea: ''
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
    <div class="AddClientBox">
        <h3>添加新客户</h3>
        <i-form :model="formItem" :label-width="110">
            <h4>基本信息</h4>
            <Row>
                <i-col span="12">
                    <Form-item label="企业全称">
                        <i-input :value.sync="formItem.input" placeholder="请输入企业全称"></i-input>
                        
                    </Form-item>
                </i-col>
                <i-col span="5">
                    <Form-item label="企业简称">
                        <i-input :value.sync="formItem.input" placeholder="请输入企业简称"></i-input>
                    </Form-item>
                </i-col>
                <i-col span="20" offset='2' class="hint">
                    <p>需与当地政府颁发的商业许可证书或企业注册证上的企业名称完全一致，信息审核审核成功后，企业名称不可修改。</p>
                </i-col>    
            </Row>
            <Row>
                <i-col span="12">
                    <Form-item label="统一社会信用代码">
                        <i-input :value.sync="formItem.input" placeholder="请输入15位或18位的统一社会信用代码"></i-input>
                    </Form-item>
                </i-col>
            </Row>
            <Row>
                <i-col span="8">
                    <Form-item label="法人代表姓名">
                        <i-input :value.sync="formItem.input" placeholder="与营业执照上一致"></i-input>
                    </Form-item>
                </i-col>
                <i-col span="8">
                    <Form-item label="组织机构代码">
                        <i-input :value.sync="formItem.input" placeholder="与营业执照上一致"></i-input>
                    </Form-item>
                </i-col>
            </Row>        
            <Row>
                <i-col span="8">
                    <Form-item label="开户银行">
                        <i-select :model.sync="formItem.select" placeholder="请选择">
                            <i-option value="beijing">北京市</i-option>
                            <i-option value="shanghai">上海市</i-option>
                            <i-option value="shenzhen">深圳市</i-option>
                        </i-select>
                    </Form-item>
                </i-col>
            </Row>
            <Row>
                <i-col span="8">
                    <Form-item label="开户账号">
                        <i-input :value.sync="formItem.input" placeholder="请如实填写"></i-input>
                    </Form-item>
                </i-col>
            </Row>
            <h4>业务信息</h4>
            <Row :gutter="10">                
                <Form-item label="所属行业">
                    <i-col span="5">
                        <i-select :model.sync="formItem.select" placeholder="请选择">
                            <i-option value="beijing">北京市</i-option>
                            <i-option value="shanghai">上海市</i-option>
                            <i-option value="shenzhen">深圳市</i-option>
                        </i-select>
                    </i-col>
                    <i-col span="4">
                    <i-select :model.sync="formItem.select" placeholder="请选择">
                        <i-option value="beijing">北京市</i-option>
                        <i-option value="shanghai">上海市</i-option>
                        <i-option value="shenzhen">深圳市</i-option>
                    </i-select>
                    </i-col>
                    <i-col span="4">
                    <i-select :model.sync="formItem.select" placeholder="请选择">
                        <i-option value="beijing">北京市</i-option>
                        <i-option value="shanghai">上海市</i-option>
                        <i-option value="shenzhen">深圳市</i-option>
                    </i-select>
                    </i-col>
                </Form-item>                
            </Row>
            <Row>
                <i-col span="8">
                    <Form-item label="用电等级">
                        <i-select :model.sync="formItem.select" placeholder="请选择">
                            <i-option value="beijing">一级</i-option>
                            <i-option value="shanghai">二级</i-option>
                            <i-option value="shenzhen">三级</i-option>
                        </i-select>
                    </Form-item>
                </i-col>
            </Row>
            <h4>联系信息</h4>
            <Row :gutter="10">
                <Form-item label="通讯地址">
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
                        <i-input :value.sync="formItem.input" placeholder="详细通讯地址"></i-input>
                    </i-col>
                    <i-col span="2">
                        <i-input :value.sync="formItem.input" placeholder="邮政编码"></i-input>
                    </i-col>
                </Form-item>
            </Row>
            <Row>
                <i-col span="8">
                    <Form-item label="联系人">
                        <i-input :value.sync="formItem.input" placeholder="联系人姓名"></i-input>
                    </Form-item>
                </i-col>
            </Row>
            <Row>
                <i-col span="8">
                    <Form-item label="联系人电话">
                        <i-input :value.sync="formItem.input" placeholder="联系人手机号码"></i-input>
                    </Form-item>
                </i-col>
                <i-col span="12" class="hint2">
                    <p>该手机号用于开通系统登录账号，请确保手机号正确</p>
                </i-col>
            </Row>
            <Row>
                <i-col span="8">
                    <Form-item label="电子邮箱">
                        <i-input :value.sync="formItem.input" placeholder="联系人邮箱号码"></i-input>
                    </Form-item>
                </i-col>
                <i-col span="12" class="hint2">
                    <p>接收账号密码和找回密码使用。</p>
                </i-col>
            </Row>
            <Row>
                <i-col span="8">
                    <Form-item label="办公电话">
                        <i-col span="8">
                            <i-input :value.sync="formItem.input" placeholder="请输入"></i-input>
                        </i-col>
                        <i-col span="1" style="text-align: center;line-height: 34px;">-</i-col>    
                        <i-col span="15">
                            <i-input :value.sync="formItem.input" placeholder="请输入"></i-input>
                        </i-col>
                    </Form-item>
                </i-col>
                <i-col span="8">
                    <Form-item label="传真号码">
                        <i-col span="8">
                            <i-input :value.sync="formItem.input" placeholder="请输入"></i-input>
                        </i-col>
                        <i-col span="1" style="text-align: center;line-height: 34px;">-</i-col>    
                        <i-col span="15">
                            <i-input :value.sync="formItem.input" placeholder="请输入"></i-input>
                        </i-col>
                    </Form-item>
                </i-col>
            </Row>            
            <Row>
                <i-col span="12" style="text-align: center;line-height: 34px;">
                    <Form-item>
                        <i-button type="primary">保存并添加合同</i-button>
                        <i-button type="primary">保存</i-button>
                        <i-button type="ghost" style="margin-left: 8px">取消</i-button>
                    </Form-item>
                </i-col>
            </Row>
        </i-form>
    </div>
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
    height: 914px;
    overflow: hidden;
}
.AddClientBox h3{
    height: 55px;
    line-height: 55px;
    border-bottom: 1px solid #E5E5E5;
    padding-left: 20px;
    font-size: 16px;
    font-weight: 600;
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
