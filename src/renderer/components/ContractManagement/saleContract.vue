<template>
    <div class="main-container">
        <Card>
            <h3 slot="title">售电合同</h3>
            <div class="saleBox">
                <div class="listBox" v-for="item in data1" :key="item.id">
                    <ul class="hetongNav">
                        <li>平顶山姚梦电厂有限公司</li>
                        <li>合同编号：31654641-7</li>
                        <li>合同方式：''</li>
                        <li>上年用电量：10000 MWh</li>
                        <li>上年最大负荷：10000 MWh</li>
                        <li>本年度预计电量：10000 MWh</li>
                        <li>本年度预计最大负荷：11</li>
                        <li class="change">
                            <router-link to="/add-hetong" tag="span" style="cursor: pointer; ">修改</router-link>
                            <span>
                                <!-- 气泡提示模板 -->
                                <Poptip
                                    placement="left-end"
                                    confirm
                                    title="您确认删除这条内容吗？"
                                    @on-ok="ok"
                                    @on-cancel="cancel">
                                    <span>删除</span>
                                </Poptip>
                            </span>
                        </li>
                    </ul>
                    <div class="htData">
                        <div class="saleSee" @click="toSale()">
                            <i class="iconfont icon-jishiben01"></i>
                            <span class="bhNumber">查看</span> 
                        </div>
                        <i-table 
                        border
                        size='small'
                        :columns="columns1"
                        :data="item.blist" 
                        style = 'margin-left:20%;'
                        ></i-table>
                    </div>
                </div>
                <div class="listBox" v-for="item in data1" :key="item.id">
                    <ul class="hetongNav">
                        <li>平顶山姚梦电厂有限公司</li>
                        <li>合同编号：31654641-7</li>
                        <li>合同方式：''</li>
                        <li>上年用电量：10000 MWh</li>
                        <li>上年最大负荷：10000 MWh</li>
                        <li>本年度预计电量：10000 MWh</li>
                        <li>本年度预计最大负荷：11</li>
                        <li class="change">
                            <router-link to="/add-hetong" tag="span" style="cursor: pointer; ">修改</router-link>
                            <span>
                                <!-- 气泡提示模板 -->
                                <Poptip
                                    placement="left-end"
                                    confirm
                                    title="您确认删除这条内容吗？"
                                    @on-ok="ok"
                                    @on-cancel="cancel">
                                    <span>删除</span>
                                </Poptip>
                            </span>
                        </li>
                    </ul>
                    <div class="htData">
                        <div class="saleSee" @click="toSale()">
                            <i class="iconfont icon-jishiben01"></i>
                            <span class="bhNumber">查看</span> 
                        </div>
                        <i-table 
                        border
                        size='small'
                        :columns="columns1"
                        :data="item.blist" 
                        style = 'margin-left:20%;'
                        ></i-table>
                    </div>
                </div>
                <myFenye></myFenye>
            </div>            
        </Card> 
    </div>
</template>

<script>
import myFenye from '@/components/Tool/myFenye'

export default {
    data() {
        return {
            columns1: [
                {
                    title: '营销用户编号',
                    key: 'n1',
                    width: '140',
                    align: 'center'
                },
                {
                    title: '用户电压等级',
                    key: 'n2',
                    width: '140',
                    align: 'center'
                },
                {
                    title: '报装容量',
                    key: 'n3',
                    width: '140',
                    align: 'center'
                },
                {
                    title: '用户类型',
                    key: 'n4',
                    width: '140',
                    align: 'center'
                },
                {
                    title: '用户单元类型',
                    key: 'n5',
                    width: '140',
                    align: 'center'
                },
                {
                    title: '用户地址',
                    key: 'n6',
                    align: 'center'
                }
            ],
            data1: [               
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
                        ,
                        {
                            n1: '123465456',
                            n2: '10kv',
                            n3: '10ktv',
                            n4: '大工业用电',
                            n5: '第二产业(工业)',
                            n6: '河南省高新区电子商业大厦'
                        }
                        ,
                        {
                            n1: '123465456',
                            n2: '10kv',
                            n3: '10ktv',
                            n4: '大工业用电',
                            n5: '第二产业(工业)',
                            n6: '河南省高新区电子商业大厦'
                        }

                    ]
                }

            ]
        }
    },
    methods: {
        ok (index) {
            this.data1.splice(index, 1)
        },
        cancel () {
            this.$Message.info('点击了取消');
        },
        toSale() {
            this.$router.push("/add-hetong")
        }
        // removeItem (index) {
        //     console.log(index);
        //     this.data1.splice(index, 1)
        // }
    },
    components : {
        'myFenye': myFenye
    },
}
</script>

<style scoped>
.saleBox {
    height: 811px;
}
.hetongNav{
    height: 50px;
    background-color: #f8f8f9;
    padding-left: 15px;
    position: relative;
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: 400;
}
.hetongNav li{
    float: left;
    line-height: 50px;
    padding-right: 40px;
}
.hetongNav .change{
    position: absolute;
    right: 30px;
    top: 0;
    color: #108CEE;
    cursor: pointer;
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
    margin-bottom: 10px;
}
.htData {
    position: relative;
    border: 1px solid #e9eaec;
}
.saleSee{
    width: 50px;
    height: 50px;
    background-color: #5ecfb8;
    border-radius: 50%;
    padding-top: 50px;
    position: absolute;
    top: 50%;
    left: 8%;
    margin-top: -50px;
    cursor: pointer;
}
.saleSee i{
    position: absolute;
    top: 7px;
    left: 13px;
    font-size: 26px;
    color: #fff;
}
.bhNumber {
    width: 90px;
    text-align: center;
    display: inline-block;
    margin-left: -20px;
    color:#108CEE;
}
.listChange {
    position: absolute;
    top: 50%;
    right: 10%;
    color: #4fa8f9;
}
.listChange span {
    cursor: pointer;
}

</style>