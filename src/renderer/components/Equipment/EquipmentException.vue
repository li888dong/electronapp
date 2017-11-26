<script>
export default {
    name: 'EquipmentException',
    data(){
        return{
            columns1: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    "sortable": true,
                    title: '终端编号',
                    key: 'n1'
                },
                {
                    "sortable": true,
                    title: '生产厂家',                    
                    width: 200,
                    key: 'n2'
                },
                {
                    "sortable": true,
                    title: '当前状态',
                    key: 'n3'
                },
                { 
                    title: '异常编码',
                    key: 'n4'
                },
                {
                    "sortable": true,
                    title: '异常类别',
                    key: 'n5'
                },
                {
                    title: '异常出现时间',
                    key: 'n6'
                },
                {
                    "sortable": true,
                    title: '操作人',
                    key: 'n7'
                },
                
                {
                    title: '操作',
                    key: 'n8',
                    align: 'center',
                    width: 150,
                    render: (h, params) => {
                        return h('div', [                            
                            h('span', {
                                style: {
                                    marginRight: '5px',
                                    color:'#36c ',
                                    cursor:'pointer'
                                },
                                on: {
                                    click: () => {
                                        
                                    }
                                }
                            }, '修正完成'),
                            h('span', {
                                style: {
                                    marginLeft: '10px',
                                    color:'#36c ',
                                    cursor:'pointer'
                                },
                                on: {
                                    click: () => {
                                        
                                    }
                                }
                            }, '拆除设备')                                        
                        ]);
                    }

                }               
            ],
            data1: [
                {
                    n1: '123456',
                    n2: '2017-11-12',
                    n3: '123456',
                    n4: '2017-11-12',
                    n5: '123456',
                    n6: '2017-11-12',
                    n7: '123456',
                    n8: '2017-11-12',
                    n9: '123456',
                    n10: '22',
                    n11: '33'
                },
                {
                    n1: '123456',
                    n2: '2017-11-12',
                    n3: '123456',
                    n4: '2017-11-12',
                    n5: '123456',
                    n6: '2017-11-12',
                    n7: '123456',
                    n8: '2017-11-12',
                    n9: '123456',
                    n10: '22',
                    n11: '33'
                },
                {
                    n1: '123456',
                    n2: '2017-11-12',
                    n3: '123456',
                    n4: '2017-11-12',
                    n5: '123456',
                    n6: '2017-11-12',
                    n7: '123456',
                    n8: '2017-11-12',
                    n9: '123456',
                    n10: '22',
                    n11: '33'
                },
            ]
        }
    }
}
</script>

<template><!-- 设备异常页面 -->
<Row class="EquipmentException">
    设备管理 / 设备异常记录
    <div class="ExceptionTittle">
        <h3>设备异常记录</h3>
    </div>
    <div class="ExceptionTop">
        <i class="iconfont icon-search searchPic"></i>
        <input type="text" name="" id="" class="SearchText" placeholder="终端名称、编号、客户名称、IP地址等"><button>搜索</button>
        <span>m</span>
        <select name="" id="">
            <option value="">所有区域</option>
            <option value="">河南区域</option>
            <option value="">全国区域</option>
        </select>
        <span><DatePicker :value="new Date()" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="请选择日期"  style="width: 200px"></DatePicker></span>        
    </div>
    <div class="ExceptionForm">
        <Table border :columns='columns1' :data='data1'></Table>
        <!-- 分页 -->
        <div class="fenYe">
            <Page :total="100" show-total show-elevator></Page> <Button type="primary">确定</Button>
        </div>
    </div>
</Row>
</template>

<style scoped>
button {
    outline: none;
    border: none;
}
.EquipmentException{
    max-width: 1700px;
    height: 914px;
    background-color: #E8ECF0;
    padding: 15px;
    font-size: 14px;
}
.ExceptionTittle{
    background-color: #fff;
    height: 46px;
    border-bottom: 1px solid #ccc;
    padding: 20px 10px 0px 10px;
}
.ExceptionTittle h3{
    display: inline-block;
    font-size: 16px;
    font-family: 'MicrosoftYahei'; 
}
.ExceptionTittle span {
    width: 123px;
    height: 30px;
    float: right;
    font-size: 14px;
    background-color: #108CEE;
    color: #fff;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
    cursor: pointer;
}

.ExceptionTop {
    height: 50px;
    padding: 10px;
    background-color: #fff;
    position: relative;
}
.ExceptionTop .SearchText{
    width: 250px;
    height: 30px;
    border: 1px solid #ccc;
    padding-left: 24px;
}
.searchPic {
    position: absolute;
    left: 15px;
    top: 13px;
}
.ExceptionTop button {
    width: 60px;
    height: 30px;
    background-color: #108CEE;
    color: #fff;
}
.ExceptionTop span{
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: #EAF6FE;
    margin: 0 30px;
    vertical-align: middle;
    color: #108CEE;
    line-height: 30px;
    text-align: center;
}
.ExceptionTop select{
    width: 94px;
    height: 30px;
    background-color: #EAF6FE;
    color: #108CEE;
    border: none;
    outline: none;
}

.ExceptionForm{
    background-color: #fff;
    position: relative;
    max-height: 768px;
    padding: 0 10px;
}


/* 分页的样式 */
.fenYe {
    width: 100%;
    height: 60px;
    background-color: #fff;
    padding-top: 10px;
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
