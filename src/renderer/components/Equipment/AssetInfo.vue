<script>
export default {
    name: 'AssetInfo',
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
                    title: '资产号',
                    key: 'n1'
                },
                {
                    title: '生产厂家',                    
                    width: 200,
                    key: 'n2'
                },
                {
                    "sortable": true,
                    title: '出厂编号',
                    key: 'n3'
                },
                {
                    "sortable": true,
                    title: '采购日期',
                    key: 'n4'
                },
                {
                    title: '接线方式',
                    key: 'n5'
                },
                {
                    title: 'IP地址',
                    key: 'n6'
                },
                {
                    title: '端口号',
                    key: 'n7'
                },
                {
                    title: '是否已安装',
                    width: '112',
                    key: 'n8',
                    filters: [
                        {
                            label: '安装',
                            value: 1
                        },
                        {
                            label: '未安装',
                            value: 2
                        }
                    ],
                    filterMultiple: false,
                    filterMethod (value, row) {
                        if (value === 1) {
                            return row.n8 ==='安装';
                        } else if (value === 2) {
                            return row.n8 ==='未安装';
                        }
                    }
                },
                {
                    title: '操作',
                    key: 'n9',
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
                                        this.infoTo(params.index)
                                    }
                                }
                            }, '详情'),
                            h('span', {
                                style: {
                                    marginRight: '5px',
                                    color: '#36c',
                                    cursor: 'pointer'
                                },
                                on: {
                                    click: () => {
                                        this.moreTo(params.index)
                                    }
                                }                            

                            },'更多')
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
                    n8: '安装',
                    n9: '123456'
                },
                {
                    n1: '123456',
                    n2: '2017-11-12',
                    n3: '123456',
                    n4: '2017-11-12',
                    n5: '123456',
                    n6: '2017-11-12',
                    n7: '123456',
                    n8: '未安装',
                    n9: '123456'
                }
            ]
        }
    },
    methods: {
        infoTo(index) {
            this.$router.push('EquipmentStatus')    
        },
        moreTo(index) {
            this.$router.push('EquipmentException')
        }
    }
}
</script>

<template>
<div class="AssetInfo main-container"> <!-- 这是设备资产信息页面 -->
    <Row class="AssetInfoSearch">
        <Col span='24'>
            <button class="apply">申请设备入库</button> <i class="iconfont icon-search"></i> <input class="AsSearchText " type="text" name="" id="" placeholder="资产号 | IP地址 | 企业名字"><button type="submit" class="AsSearch">搜索</button>
        </Col>
    </Row>
    <Row class="AssetInfoForm">
        <Col span='24'>
            <Table border :columns='columns1' :data='data1'></Table>
        </Col>        
    </Row>
    <!-- 分页 -->
    <Row class="page-container">
        <Col span='24' class="fenYe">
            <Page :total="100" show-total show-elevator></Page> <Button type="primary">确定</Button>
        </Col>
    </Row>
</div>

</template>

<style scoped>
button {
    outline: none;
    border: none;
}
.AssetInfo{
    height: 905px;
    background-color:#fff;
}

.AssetInfoSearch{
    background-color: #fff;
    height: 55px;
    padding: 12px 10px;
    position: relative;
}
.AssetInfoSearch i{
    position: absolute;
    top: 5px;
    left: 142px;
}
.apply{
    width: 120px;
    height: 30px;
    background-color: #108CEE;    
    color: #fff;
}
.AsSearchText{
    width: 184px;
    height: 30px;
    border: 1px solid #ccc;
    margin-left: 10px;
    padding-left: 26px;
}
.AsSearch{
    width: 60px;
    height: 30px;
    background-color: #108CEE;
    color: #fff;
}

.AssetInfoForm{
    background-color: #fff;
    max-height: 825px;
    position: relative;
    padding: 0 10px;
}

/* 分页的样式 */
.fenYe {
    width: 100%;
    height: 40px;
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
