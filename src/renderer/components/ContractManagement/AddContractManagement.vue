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
                htNum: '',
                htNian: '',
                htDianchang: '',
                htDianliang: '',
                htStatus: '',
                htDate: '',
                htQianyue: '',
                htZhixing: '',
                htPerson: '',
                htIphone: '',
                htNote: '',
            },
            ruleVa: {
                htNum: [
                    { required: true, message: '这个选项不能为空', trigger: 'blur' }
                ],
                htNian: [
                    { required: true, message: '这个选项不能为空', trigger: 'blur' }
                ],
                htDianchang: [
                    { required: true, message: '这个选项不能为空', trigger: 'blur' }
                ],
                htDianliang: [
                    { required: true, message: '这个选项不能为空', trigger: 'blur' }
                ],
                htStatus: [
                    { required: true, message: '这个选项不能为空', trigger: 'blur' }
                ],
                htDate: [
                    { required: true, message: '这个选项不能为空', trigger: 'blur' }
                ],
                htQianyue: [
                    { required: true, message: '这个选项不能为空', trigger: 'blur' }
                ],
                htZhixing: [
                    { required: true, message: '这个选项不能为空', trigger: 'blur' }
                ],
                htPerson: [
                    { required: true, message: '这个选项不能为空', trigger: 'blur' }
                ],
                htIphone: [
                    { required: true, message: '这个选项不能为空', trigger: 'blur' }
                ],
                htNote: [
                    { required: true, message: '这个选项不能为空', trigger: 'blur' }
                ],
                


                // htNian: [
                //     { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                //     { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                // ],
                // city: [
                //     { required: true, message: 'Please select the city', trigger: 'change' }
                // ],
                // gender: [
                //     { required: true, message: 'Please select gender', trigger: 'change' }
                // ],
                // interest: [
                //     { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                //     { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                // ],
                // date: [
                //     { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                // ],
                // time: [
                //     { required: true, type: 'date', message: 'Please select time', trigger: 'change' }
                // ],
                // desc: [
                //     { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                //     { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                // ]
            },
            defaultList: [
                {
                    'name': 'a42bdcc1178e62b4694c830f028db5c0',
                    'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
                }
            ],
            imgName: '',
            visible: false,
            uploadList: [],
            tip: ''
        }
    },
    components: {
        "inputs": inputs
    },
    methods: {
        handleView (name) {
            this.imgName = name;
            this.visible = true;
        },
        handleRemove (file) {
            const fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        },
        handleSuccess (res, file) {
            file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
            file.name = file.name;
        },
        handleFormatError (file) {
            this.$Notice.warning({
                title: '文件类型不支持',
                desc: '文件格式为（ ' + file.name + ' ）不支持, 请上传PDF格式.'
            });
        },
        handleMaxSize (file) {
            this.$Notice.warning({
                title: '文件太大',
                desc: '文件' + file.name + ' 太大，大小不能超过2M.'
            });
        },
        handleBeforeUpload () {
            const check = this.uploadList.length < 1;
            if (!check) {
                this.$Notice.warning({
                    title: '最多上传一份文件.'
                });
            }
            return check;
        },
        
    },
    mounted () {
        this.uploadList = this.$refs.upload.fileList;
    }
}
</script>

<template>
<Row class="main-container">
    <Card>
        <i class="iconfont icon-fanhui1 back" @click="$router.go(-1)" style="position: absolute;top: 10px;left: 10px;"></i>
        <h3 slot="title" style="padding-left: 40px;">添加长协合同</h3>
        <Row class="ContractBox">
            <div class="ContractBox-main">            
                <Form ref="formItem" :model="formItem" :rules='ruleVa' :label-width="110">
                    <p>基本信息</p>
                    <Row>
                        <Col span="8">
                            <Form-item label="合同编号" prop='htNum'>
                                <Input v-model="formItem.htNum" placeholder="请输入合同编号"></Input>                                
                            </Form-item>
                        </Col>
                        <Col span="8">
                            <Form-item label="合同年度" prop='htNian'>
                                <Input v-model="formItem.htNian" placeholder="请输入合同年度"></Input>
                            </Form-item>
                        </Col>               
                    </Row>
                    <Row>
                        <Col span="8">
                            <Form-item label="签约电厂" prop='htDianchang'>
                                <Select :model.sync="formItem.htDianchang" placeholder="请选择签约电厂">
                                    <Option value="beijing">郑州市电厂</Option>
                                    <Option value="shanghai">广东市电厂</Option>
                                    <Option value="shenzhen">北京市电厂</Option>
                                </Select>
                            </Form-item>
                        </Col>
                        <Col span="8">
                            <Form-item label="签约电量" prop='htDianliang'>
                                <Input v-model="formItem.htDianliang" placeholder="请输入签约电量"></Input>   <i class="wkw">万KVA</i>                    
                            </Form-item>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col span="8">
                            <Form-item label="合同状态" prop='htStatus'>
                                <Input v-model="formItem.htStatus" placeholder="请输入合同状态"></Input>
                            </Form-item>
                        </Col>
                        <Col span="8">
                            <Form-item label="签约日期" prop='htDate'>
                                <Input v-model="formItem.htDate" placeholder="请输入签约日期"></Input>
                            </Form-item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <Form-item label="签约价格" prop='htQianyue'>
                                <Input v-model="formItem.htQianyue" placeholder="请输入签约价格"></Input>
                            </Form-item>
                        </Col>
                        <Col span="8">
                            <Form-item label="执行日期" prop='htZhixing'>
                                <Input v-model="formItem.htZhixing" placeholder="请输入执行日期"></Input>
                            </Form-item>
                        </Col>
                    </Row>
                    <p>联系信息</p>
                    <Row>
                        <Col span="8">
                            <Form-item label="业务代表" prop='htPerson'>
                                <Input v-model="formItem.htPerson" placeholder="请输入业务代表"></Input>
                            </Form-item>
                        </Col>
                        <Col span="8">
                            <Form-item label="联系电话" prop='htIphone'>
                                <Input v-model="formItem.htIphone" placeholder="请输入联系电话"></Input>
                            </Form-item>
                        </Col>
                    </Row>
                    <Row :gutter="10">
                        <Form-item label="电厂地址">
                            <Col span="2">
                                <Input disabled v-model="formItem.input" placeholder="-"></Input>
                            </Col>
                            <Col span="2">
                                <Input disabled v-model="formItem.input" placeholder="-"></Input>
                            </Col>
                            <Col span="8">
                                <Input disabled v-model="formItem.input" placeholder="-"></Input>
                            </Col>
                        </Form-item>
                    </Row>
                    <Row>
                        <Col span="8">
                            <Form-item label="合同备注" prop='htNote'>
                                <Input v-model="formItem.htNote" placeholder="请输入合同备注"></Input>
                            </Form-item>
                        </Col>
                    </Row>
                    <p>电子合同备查</p>
                    <div class="TName">
                            <span>合同上传 : </span>
                            <div class="changXie-upload-box">
                                <div class="changXie-upload"></div>
                                <Upload
                                    ref="upload"
                                    :default-file-list="defaultList"
                                    :on-success="handleSuccess"
                                    :format="['pdf']"
                                    :max-size="2048"
                                    :on-format-error="handleFormatError"
                                    :on-exceeded-size="handleMaxSize"
                                    :before-upload="handleBeforeUpload"
                                    multiple
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    style="display: inline-block;width:80px;">
                                    <Button type="primary" style="vertical-align: top; height: 34px;">选择文件</Button>
                                </Upload>
                            </div><br>
                            <!-- <Modal title="查看文件" v-model="visible">
                                <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
                            </Modal> -->
                            <!-- <div class="up">
                                <input type="file" name="" id="">
                            </div>-->  
                            <i class="typeTip">仅支持PDF格式</i><span>{{tip}}</span><br/>
                        </div> <br>
                    <p>合同电量分配</p>
                    <Row class="month" >
                        <div>一月</div>
                        <div>二月</div>
                        <div>三月</div>
                        <div>四月</div>
                        <div>五月</div>
                        <div>六月</div>
                        <div>七月</div>
                        <div>八月</div>
                        <div>九月</div>
                        <div>十月</div>
                        <div>十一月</div>
                        <div>十二月</div>
                        <div>总计</div>
                    </Row>
                    <Row class="monthData">
                        <input type="text" name="" id="" placeholder="-">
                        <input type="text" name="" id="" placeholder="-">
                        <input type="text" name="" id="" placeholder="-">
                        <input type="text" name="" id="" placeholder="-">
                        <input type="text" name="" id="" placeholder="-">
                        <input type="text" name="" id="" placeholder="-">
                        <input type="text" name="" id="" placeholder="-">
                        <input type="text" name="" id="" placeholder="-">
                        <input type="text" name="" id="" placeholder="-">
                        <input type="text" name="" id="" placeholder="-">
                        <input type="text" name="" id="" placeholder="-">
                        <input type="text" name="" id="" placeholder="-">
                        <input type="text" name="" id="" placeholder="-">                    
                    </Row>                
                    <i class="tiShi">十二个月购电量分配合计与签约电量不一致！</i>
                    <div class="save">
                        <Button type="primary">保存并继续添加</Button>
                        <Button type="primary">保存</Button>
                        <Button type="ghost">取消</Button>
                    </div>            
                </Form>
            </div>
        </Row>
    </Card>
    
</Row>
</template>

<style scoped>

/* 下载模块样式 */
.changXie-upload-box {
    width: 570px;
    height: 34px;
    margin-top: 10px;
    margin-left: 110px;    
}
.changXie-upload {
    width: 480px;
    height: 34px;
    display: inline-block;
    border: 1px solid #dddee1;
}
.ivu-upload{
    vertical-align: top;
    margin-left: 6px;
}
/* 表单每一项的下外边距 */

.ivu-form-item {
    margin-bottom: 20px;
}

 .layout-breadcrumb{
    padding: 10px 15px 0;
}
.ContractBox{
    height: 905px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
    line-height: 1;
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
    padding-left: 18%;
    position: relative;
    padding-right: 17%;
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
.typeTip {
    position: absolute;
    font-style: normal;
    bottom: 8px;
    color: #ccc;
    padding-left: 114px;
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
}
.save button{
    margin-right: 30px;
}
.month div{    
    display: inline-block;
    width: 60px;
    height: 32px;
    background-color: #f6f7fb;
    line-height: 32px;
    text-align: center;
    margin-left: 10px;
}
.monthData input{    
    width: 60px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #E5E5E5;
    margin-top: 10px;
    margin-left: 10px;
}
</style>


