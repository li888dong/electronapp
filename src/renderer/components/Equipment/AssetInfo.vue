<script>
import myFenye from '@/components/Tool/myFenye'
import mySearch from '@/components/Tool/mySearch'

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
            // this.$router.push('EquipmentStatus')    
        },
        moreTo(index) {
            // this.$router.push('EquipmentException')
        }
    },
    components : {
        'myFenye': myFenye,
        'mySearch': mySearch
    },
}
</script>

<template>
<div class="main-container"> <!-- 这是设备资产信息页面 -->
    <Card>
        <div slot="title">
        <Button type="primary">申请设备入库</Button>
               
        </div>
        <div slot="extra">
             <mySearch placeholder="请输入公司名称或关键字" swidth="340"></mySearch>
        </div>
        <div class="AssetInfo">
            <Row class="AssetInfoForm">
                <Col span='24'>
                    <Table border :columns='columns1' :data='data1'></Table>
                </Col>        
            </Row>
        </div>        
        <!-- 分页 -->
        <myFenye></myFenye>       
    </Card>
</div>

</template>

<style scoped>

.AssetInfo{
    height: 800px;
    background-color: #fff;
}

.AssetInfoSearch{
    overflow: hidden;
    height: 34px;
    margin-bottom: 15px;
}


</style>
