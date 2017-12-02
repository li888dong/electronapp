
<script>

import myFenye from '@/components/Tool/myFenye'

export default {
    name: 'ChangxieContract',
    data(){
        return{
            
        }
    },
    components : {
        'myFenye': myFenye
    },
    methods:{
        change(page) {
            console.log(page)
        },
        ok () {
            this.$Message.info('点击了确定');
        },
        cancel () {
            this.$Message.info('点击了取消');
        }
    }
}
</script>

<template>
<div class="main-container">
    <Card>
        <p slot="title">长协合同</p>
        <div class="hetongList">
            <div class="hetongForm">
                <ul class="hetongIfno">
                    <li>平顶山姚梦电厂有限公司</li>
                    <li>合同编号：31654641-7</li>
                    <li>合同年度：2017年度</li>
                    <li>签约电量：10000 MWh</li>
                    <li>业务代表：王辉朝</li>
                    <li>联系电话：18637177720</li>
                    <li>合同状态：已签约</li>
                    <li class="change">
                        <router-link to="AddContractManagement" tag="span" style="cursor: pointer; ">修改</router-link>
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
                <div class="hetongShuju">
                    <span class="hetongChat">
                        <i class="iconfont icon-jishiben01 seeicon"></i>
                        <router-link to="AddContractManagement" tag="a" style="cursor: pointer; ">查看</router-link>
                    </span>
                    <ul class="hetongData">
                        <li>01月</li>
                        <li>02月</li>
                        <li>03月</li>
                        <li>04月</li>
                        <li>05月</li>
                        <li>06月</li>
                        <li>07月</li>
                        <li>08月</li>
                        <li>09月</li>
                        <li>10月</li>
                        <li>11月</li>
                        <li>12月</li>
                        <li>合计</li>
                    </ul>
                    <ul class="hetongNumber">
                        <li>56.30</li>
                        <li>56.30</li>
                        <li>56.30</li>
                        <li>56.30</li>
                        <li>56.30</li>
                        <li>56.30</li>
                        <li>56.30</li>
                        <li>56.30</li>
                        <li>56.30</li>
                        <li>56.30</li>
                        <li>56.30</li>
                        <li>56.30</li>
                        <li>2223.45</li>
                    </ul>
                </div>
            </div>
            <div class="hetongForm">
                <ul class="hetongIfno">
                    <li>平顶山姚梦电厂有限公司</li>
                    <li>合同编号：31654641-7</li>
                    <li>合同年度：2017年度</li>
                    <li>签约电量：10000 MWh</li>
                    <li>业务代表：王辉朝</li>
                    <li>联系电话：18637177720</li>
                    <li>合同状态：已签约</li>
                    <li class="change"><span>修改</span> <span>删除</span></li>
                </ul>
                <div class="hetongShuju">
                    <span class="hetongChat">
                        <i class="iconfont icon-jishiben01 seeicon"></i><a href="">查看</a></span>
                    <ul class="hetongData">
                        <li>01月</li>
                        <li>02月</li>
                        <li>03月</li>
                        <li>04月</li>
                        <li>05月</li>
                        <li>06月</li>
                        <li>07月</li>
                        <li>08月</li>
                        <li>09月</li>
                        <li>10月</li>
                        <li>11月</li>
                        <li>12月</li>
                        <li>合计</li>
                    </ul>
                    <ul class="hetongNumber">
                        <li>56.30</li>
                        <li>56.30</li>
                        <li>56.30</li>
                        <li>56.30</li>
                        <li>56.30</li>
                        <li>56.30</li>
                        <li>56.30</li>
                        <li>56.30</li>
                        <li>56.30</li>
                        <li>56.30</li>
                        <li>56.30</li>
                        <li>56.30</li>
                        <li>2223.45</li>
                    </ul>
                </div>
            </div>            
            <myFenye></myFenye>            
        </div>        
    </Card>
</div>
</template>

<style scoped>
.hetongList {
    height: 875px;
    background-color: #fff;
    }
.hetongIfno{
    height: 50px;
    background-color: #f8f8f9;
    padding-left: 15px;
    position: relative;
    font-size: 14px;
}
.hetongIfno li{
    float: left;
    line-height: 50px;
    padding-right: 40px;
}
.hetongIfno .change{
    position: absolute;
    right: 30px;
    top: 0;
    color: #108CEE;
    cursor: pointer;
}
.hetongShuju {
    height: 110px;
    position: relative;
    padding: 26px 0;
}
.hetongChat {
    position: absolute ;
    top: 20px;
    left: 25px;
    text-align: center;
    line-height: 1.1;
    width: 50px;
    height: 50px;
    background-color: #ca94ec;
    border-radius: 50%;
    color: #fff;
    padding-top: 50px;
}
.seeicon {    
    font-size: 30px;
    position: absolute;
    top: 12px;
    left: 12px;
}
.hetongNumber {
    overflow: hidden;
    padding-left: 110px;
}
.hetongData {
    overflow: hidden;
    padding-left: 110px;
}
.hetongData li{
    float: left;
    width: 100px;
    line-height: 25px;
    text-align: center;    
    border-right: 1px solid #e9eaec;
    border-top: 1px solid #e9eaec;
}
.hetongData li:first-child {
    border-left: 1px solid #e9eaec;
}
.hetongNumber li{
    float: left;
    width: 100px;
    text-align: center;
    line-height: 25px;    
    border-right: 1px solid #e9eaec;
    border-top: 1px solid #e9eaec;
    border-bottom: 1px solid #e9eaec;
}
.hetongNumber li:first-child {
    border-left: 1px solid #e9eaec;
}
</style>
