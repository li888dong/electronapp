<template>
    <div class="saleContract">
        <h3>售电合同</h3>
        <div class="saleBox">
            <Row class="saleNav">
                <Col span="3">合同编号</Col>
                <Col span="2">营销用户编号</Col>
                <Col span="2">用户电压等级</Col>
                <Col span="2">报装容量</Col>
                <Col span="2">用户类型</Col>
                <Col span="2">用户单元类型</Col>
                <Col span="5">用户地址</Col>
                <Col span="6">操作</Col>
            </Row>
            <div class="listBox" v-for="item in data1">
                <div class="bianhao">
                    <i class="iconfont icon-jishiben01"></i>
                    <span class="bhNumber">{{item.bianhao}}</span> 
                </div>
                <Table  
                :columns="columns1" 
                :data="item.blist" 
                :show-header='false'
                style = 'margin-left:180px; margin-right:400px;'
                ></Table>
                <div class="listChange">
                    <span>修改</span>
                    <span @click="removeItem(item.index)">删除</span>
                </div>
            </div>               
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                columns1: [
                    {
                        title: '营销用户编号',
                        key: 'n1',
                        width: '140px'
                    },
                    {
                        title: '用户电压等级',
                        key: 'n2',
                        width: '130px'
                    },
                    {
                        title: '报装容量',
                        key: 'n3',
                        width: '130px'
                    },
                    {
                        title: '用户类型',
                        key: 'n4',
                        width: '130px'
                    },
                    {
                        title: '用户单元类型',
                        key: 'n5',
                        width: '150px'
                    },
                    {
                        title: '用户地址',
                        key: 'n6',
                        width: '300px'
                    }
                ],
                data1: [
                    {
                        bianhao: '11111-x',
                        index: '1',
                        blist: [
                            {
                                n1: '123465456',
                                n2: '10kv',
                                n3: '10ktv',
                                n4: '大工业用电',
                                n5: '第二产业(工业)',
                                n6: '河南省高新区电子商业大厦'
                            },
                            {
                                n1: '123465456',
                                n2: '10kv',
                                n3: '10ktv',
                                n4: '大工业用电',
                                n5: '第二产业(工业)',
                                n6: '河南省高新区电子商业大厦'
                            },
                            {
                                n1: '123465456',
                                n2: '10kv',
                                n3: '10ktv',
                                n4: '大工业用电',
                                n5: '第二产业(工业)',
                                n6: '河南省高新区电子商业大厦'
                            },
                            {
                                n1: '123465456',
                                n2: '10kv',
                                n3: '10ktv',
                                n4: '大工业用电',
                                n5: '第二产业(工业)',
                                n6: '河南省高新区电子商业大厦'
                            },
                            {
                                n1: '123465456',
                                n2: '10kv',
                                n3: '10ktv',
                                n4: '大工业用电',
                                n5: '第二产业(工业)',
                                n6: '河南省高新区电子商业大厦'
                            }

                        ]
                    },
                    {
                        bianhao: '22222-x',
                        index: '2',
                        blist: [
                            {
                                n1: '123465456',
                                n2: '10kv',
                                n3: '10ktv',
                                n4: '大工业用电',
                                n5: '第二产业(工业)',
                                n6: '河南省高新区电子商业大厦'
                            },
                            {
                                n1: '123465456',
                                n2: '10kv',
                                n3: '10ktv',
                                n4: '大工业用电',
                                n5: '第二产业(工业)',
                                n6: '河南省高新区电子商业大厦'
                            },
                            {
                                n1: '123465456',
                                n2: '10kv',
                                n3: '10ktv',
                                n4: '大工业用电',
                                n5: '第二产业(工业)',
                                n6: '河南省高新区电子商业大厦'
                            },
                            {
                                n1: '123465456',
                                n2: '10kv',
                                n3: '10ktv',
                                n4: '大工业用电',
                                n5: '第二产业(工业)',
                                n6: '河南省高新区电子商业大厦'
                            },
                            {
                                n1: '123465456',
                                n2: '10kv',
                                n3: '10ktv',
                                n4: '大工业用电',
                                n5: '第二产业(工业)',
                                n6: '河南省高新区电子商业大厦'
                            }

                        ]
                    },
                    {
                        bianhao: '333333-x',
                        index: '3',
                        blist: [
                            {
                                n1: '123465456',
                                n2: '10kv',
                                n3: '10ktv',
                                n4: '大工业用电',
                                n5: '第二产业(工业)',
                                n6: '河南省高新区电子商业大厦'
                            },
                            {
                                n1: '123465456',
                                n2: '10kv',
                                n3: '10ktv',
                                n4: '大工业用电',
                                n5: '第二产业(工业)',
                                n6: '河南省高新区电子商业大厦'
                            },
                            {
                                n1: '123465456',
                                n2: '10kv',
                                n3: '10ktv',
                                n4: '大工业用电',
                                n5: '第二产业(工业)',
                                n6: '河南省高新区电子商业大厦'
                            },
                            {
                                n1: '123465456',
                                n2: '10kv',
                                n3: '10ktv',
                                n4: '大工业用电',
                                n5: '第二产业(工业)',
                                n6: '河南省高新区电子商业大厦'
                            },
                            {
                                n1: '123465456',
                                n2: '10kv',
                                n3: '10ktv',
                                n4: '大工业用电',
                                n5: '第二产业(工业)',
                                n6: '河南省高新区电子商业大厦'
                            }

                        ]
                    },
                    {
                        bianhao: '444444-x',
                        index: '4',
                        blist: [
                            {
                                n1: '123465456',
                                n2: '10kv',
                                n3: '10ktv',
                                n4: '大工业用电',
                                n5: '第二产业(工业)',
                                n6: '河南省高新区电子商业大厦'
                            },
                            {
                                n1: '123465456',
                                n2: '10kv',
                                n3: '10ktv',
                                n4: '大工业用电',
                                n5: '第二产业(工业)',
                                n6: '河南省高新区电子商业大厦'
                            },
                            {
                                n1: '123465456',
                                n2: '10kv',
                                n3: '10ktv',
                                n4: '大工业用电',
                                n5: '第二产业(工业)',
                                n6: '河南省高新区电子商业大厦'
                            },
                            {
                                n1: '123465456',
                                n2: '10kv',
                                n3: '10ktv',
                                n4: '大工业用电',
                                n5: '第二产业(工业)',
                                n6: '河南省高新区电子商业大厦'
                            },
                            {
                                n1: '123465456',
                                n2: '10kv',
                                n3: '10ktv',
                                n4: '大工业用电',
                                n5: '第二产业(工业)',
                                n6: '河南省高新区电子商业大厦'
                            }

                        ]
                    },
                ]
            }
        },
        methods: {
            removeItem (index) {
                console.log(index);
                this.data1.splice(index, 1)
            }
        }
    }
</script>

<style scoped>
.saleContract {
    background-color: #fff;
    margin-left: 178px;
}
.saleContract h3 {
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    border-bottom: 1px solid #E5E5E5;
    padding-left: 18px;
    padding-top: 10px;
}
.saleBox {
    margin: 10px;
}
.saleNav div{
    height: 44px;
    background-color: #4fa8f9;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    line-height: 44px;
    text-align: center;
}
.saleList div{
    height: 44px;
    text-align: center;
    font-size: 12px;
    color: #202020;
}
.saleList td{
    width: 100px;
    height: 44px;
    border: 1px solid #000;
}
.listBox {
    position: relative;
    border-bottom: 1px solid #E5E5E5;
}
.ivu-table tr:last-child {
    background-color: red;
}
.bianhao{
    width: 64px;
    height: 64px;
    background-color: #5ecfb8;
    border-radius: 50%;
    padding-top: 64px;
    position: absolute;
    top: 50%;
    left: 55px;
    margin-top: -50px;
}
.bianhao i{
    position: absolute;
    top: 4px;
    left: 14px;
    font-size: 40px;
    color: #fff;
}
.bhNumber {
    width: 100px;
    text-align: center;
    display: inline-block;
    margin-left: -20px;
}
.listChange {
    position: absolute;
    top: 50%;
    right: 150px;
    color: #4fa8f9;
}
.listChange span {
    cursor: pointer;
}
.ivu-table-wrapper {
    border-bottom: 0;
    border-top: 0;
}

</style>