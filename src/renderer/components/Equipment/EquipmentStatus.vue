<script>

export default {
    name: 'EquipmentStatus',
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
                    key: 'n2'
                },
                {
                    "sortable": true,
                    title: '登陆IP：端口',
                    key: 'n3'
                },
                { 
                    title: '最新上线时间',
                    key: 'n4'
                },
                {
                    "sortable": true,
                    title: '当前在线时长',
                    key: 'n5'
                },
                {
                    "sortable": true,
                    title: '合计在线时长',
                    key: 'n6'
                },
                {
                    "sortable": true,
                    title: '当前状态',
                    key: 'n7'
                },
                {
                    title: '掉线时间',
                    key: 'n8'
                },
                {
                    "sortable": true,
                    title: '采集成功率',
                    key: 'n9'
                },
                {
                    "sortable": true,
                    title: '上报比例',
                    key: 'n10'
                },
                {
                    title: '操作',
                    key: 'n11',
                    align: 'center',
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
                            }, '更多')                            
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

<template><!-- 设备状态页面 -->
<Row class="EquipmentStatus">
    <div  class="statusTittle">
        <h3>设备统计日志</h3>
        <router-link to="/EquipmentException" tag="a">设备异常记录</router-link>
    </div>
    <Row class="statusTop">
        <i class="iconfont icon-search searchPic"></i>
        <input type="text" name="" id="" class="SearchText" placeholder="终端名称、编号、客户名称、IP地址等"><button>搜索</button>
        <span>m</span>
        <select name="" id="">
            <option value="">所有区域</option>
            <option value="">河南区域</option>
            <option value="">全国区域</option>
        </select>
        <span><DatePicker :value="new Date()" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="请选择日期"  style="width: 200px"></DatePicker></span>
        <div class="viewOffline">
            <input type="checkbox" name="" id="">
            仅显示已掉线设备
        </div>    
    </Row>
    <Row class="statusForm">
        <Table border :columns='columns1' :data='data1'></Table>
        <div class="fenYe">
            <Page :total="100" show-total show-elevator></Page> <Button type="primary">确定</Button>
        </div>
    </Row>
</Row>
</template>

<style scoped>
button {
    outline: none;
    border: none;
}
.EquipmentStatus{
    max-width: 1700px;
    height: 914px;
    background-color: #E8ECF0;
    padding: 15px;
    font-size: 14px;
}
.statusTittle{
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    line-height: 1;
    position: relative;
    height: 40px;
    padding-left: 20px;
    line-height: 40px;
}
.statusTittle h3{
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    font-family: 'MicrosoftYahei'; 
}
.statusTittle a {
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
    position: absolute;
    top: 6px;
    right: 30px;
}

.statusTop {
    padding: 10px;
    background-color: #fff;
    position: relative;
}
.statusTop .SearchText{
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
.statusTop button {
    width: 60px;
    height: 30px;
    background-color: #108CEE;
    color: #fff;
}
.statusTop span{
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
.statusTop select{
    width: 94px;
    height: 30px;
    background-color: #EAF6FE;
    color: #108CEE;
    border: none;
    outline: none;
}
.viewOffline{
    float: right;
}
.viewOffline input {
    width: 16px;
    height: 16px;
    border: 1px solid #000;
    outline: none;
    vertical-align: middle;
}

.statusForm{
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
