<script>
export default {
    name: 'AddClient',
    data(){
        return{
            
        }
    }
}
</script>

<template>
<div class="AddClient">
    客户管理 / 添加新客户
    <div class="AddClientBox">
        <h3>添加新客户</h3>
        <table>
            <h4>基本信息</h4>
            <div class="TagName">企业全称</div> <input class="lang" type="text" name="" id="" placeholder="请输入企业全称"> <div class="jiancheng">企业简称</div> <input type="text" name="" id="" placeholder="请输入企业简称">
            <p class="hint1 hint">需与当地政府颁发的商业许可证书或企业注册证上的企业名称完全一致，信息审核审核成功后，企业名称不可修改。</p><br/>
            <div class="TagName">统一社会信用代码</div><input class="lang" type="text" name="" id="" placeholder="请输入15位或18位的统一社会信用代码"><br/>
            <div class="TagName">法人代表姓名</div><input class="lang" type="text" name="" id="" placeholder="与营业执照上一致"><br/>
            <div class="TagName">组织机构代码</div><input class="lang" type="text" name="" id="" placeholder="与营业执照上一致"><br/>
            <div class="TagName">开户银行</div> 
            <select name="" id="">
                <option value="">请选择开户行信息</option>
                <option value="">中国人民银行</option>
                <option value="">中国建设银行</option>
            </select><br/>
            <div class="TagName">开户账号</div> <input class="lang" type="text" name="" id="" placeholder="请如实填写">
            <h4>业务信息</h4><br/>
            <div class="TagName">所属行业</div> 
            <select name="" id="">
                <option value="">物联网</option>
                <option value="">互联网</option>
                <option value="">智能设备</option>
            </select>
            <ul>
                <li>智能穿戴</li>
                <li>智能穿戴</li>
                <li>智能穿戴</li>
                <li>智能穿戴</li>
                <li>智能穿戴</li>
                <li>智能穿戴</li>
            </ul><br/>
            <div class="TagName">用电等级</div> 
            <select name="" id="">
                <option value="">一级</option>
                <option value="">二级</option>
                <option value="">三级</option>
            </select>
            <h4>联系信息</h4><br/>
            <div class="TagName">通讯地址</div> 
            <select name="" id="">
                <option value="">河南</option>
                <option value="">湖南</option>
                <option value="">海南</option>
            </select>
            <select name="" id="">
                <option value="">郑州市</option>
                <option value="">新乡市</option>
                <option value="">驻马店市</option>
            </select>
            <input type="text" class="lang" name="" id="" placeholder="详细通讯地址"><br/>
            <div class="TagName">联系人</div> <input type="text" name="" id="" placeholder="联系人姓名"><br/>
            <div class="TagName">联系人电话</div><input type="text" name="" id="" placeholder="联系人手机号码">
            <span class="hint">该手机号用于开通系统登录账号，请确保手机号正确</span><br/>
            <div class="TagName">电子邮箱</div> <input type="text" name="" id="" placeholder="联系人邮箱号码">
            <span class="hint">接收账号密码和找回密码使用。</span><br/>
            <div class="TagName">办公电话</div> <input type="text" name="" id="" placeholder="联系人办公电话号码"><br/>
            <div class="TagName">传真号码</div> <input type="text" name="" id="" placeholder="联系人传真号码">
            <div class="addClientSubmit">
                <button>保存并添加合同</button>
                <button class="save">保存</button>
                <button class="cancel">取消</button>
            </div>
        </table>
    </div>
</div>  
</template>

<style scoped>
.AddClient{
    width: 1700px;
    height: 914px;
    padding: 12px 18px;    
}
.AddClientBox{
    background-color: #fff;
}
.AddClientBox h3{
    height: 55px;
    line-height: 55px;
    border-bottom: 1px solid #E5E5E5;
    padding-left: 20px;
    font-size: 16px;
    font-weight: 400;
}
.AddClientBox h4{
    border-left: 6px solid #108CEE;
    font-size: 14px;
    padding-left: 6px;
}
.AddClientBox table{
    margin: 20px 60px;
}
.TagName{
    width: 160px;
    height: 30px;
    text-align: right;
    display: inline-block;
    margin-right: 22px;
    font-size: 14px;
    color: #000;
}
.AddClientBox table input{
    width: 160px;
    height: 30px;
    border: 1px solid #CCCCCC;
    padding-left: 10px;
}
.AddClientBox table .lang{
    width: 320px;
}
.hint1{
    margin-left: 182px;
}
.hint{
    font-size: 12px;
    color: #ccc;
}
/* 提示单词 */
table ul{
    width: 630px;
    height: 60px;
    overflow: hidden;
    margin-left: 182px;
}
table li{
    width: 122px;
    height: 25px;
    background-color: #EAEDF1;
    margin-right: 5px;
    margin-bottom: 5px;
    text-align: center;
    line-height: 25px;
    float: left;
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
}
.addClientSubmit {
    height: 38px;
    text-align: right;
}
.addClientSubmit button{
    width: 120px;
    height: 38px;
    font-size: 14px;
    color: #fff;
    background-color: #108CEE;
    margin-left: 14px;
}
.addClientSubmit .save {
    width: 110px;
}
.addClientSubmit .cancel {
    width: 70px;
    color: #108CEE;
    background-color: #EAF6FE;
}
</style>
