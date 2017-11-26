
<script>

import myFenye from '@/components/Tool/myFenye.vue';

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
        change: function (page) {
            console.log(page)
        }
    }
}
</script>

<template>
<div class="ChangxieContract">
    <div class="changxie">
        <h3>长协合同</h3>
        <div class="hetongList">
            <div class="hetongForm">
                <ul class="hetongIfno">
                    <li>合同编号：31654641-7</li>
                    <li>合同年度：2017年度</li>
                    <li>签约电量：10000 MWh</li>
                    <li>业务代表：王辉朝</li>
                    <li>联系电话：18637177720</li>
                    <li>合同状态：已签约</li>
                    <li>电厂名称：平顶山姚梦电厂有限公司</li>
                    <li class="change">
                        <router-link to="AddContractManagement" tag="span" style="cursor: pointer; ">修改</router-link>
                        <span>删除</span>
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
                    <li>合同编号：31654641-7</li>
                    <li>合同年度：2017年度</li>
                    <li>签约电量：10000 MWh</li>
                    <li>业务代表：王辉朝</li>
                    <li>联系电话：18637177720</li>
                    <li>合同状态：已签约</li>
                    <li>电厂名称：平顶山姚梦电厂有限公司</li>
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
            <!-- <div class="fenYe">
                <Page :total="100" show-total show-elevator @on-change='change'></Page> <Button type="primary">确定</Button>
            </div>             -->
        <!-- <myFenye></myFenye> -->
            
        </div>
        <Row class="fenYe">
            <col span="24">
            <Page :total="100" show-total show-elevator></Page> <Button type="primary">确定</Button>
            </Col>
        </Row>
    </div>
</div>
</template>

<style scoped>
.changxie {
    background-color: #E8ECF0;
    overflow: hidden;
    padding: 20px;
}
.changxie h3 {
    height: 50px;
    border-bottom: 1px solid #E5E5E5;
    background-color: #fff;
    padding-left: 20px;
    padding-top: 20px;
    font-size: 16px;
    font-weight: 400;    
}
.hetongList {
    height: 850px;
    background-color: #fff;
    padding: 10px;
    }
.hetongIfno{
    height: 44px;
    background-color: #F6F7FB;
    padding-left: 15px;
    position: relative;
}
.hetongIfno li{
    float: left;
    line-height: 44px;
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
    padding-right: 75px;
    line-height: 25px;
}
.hetongNumber li{
    float: left;
    padding-right: 70px;
    line-height: 25px;
}


/* 分页的样式 */
.fenYe {
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 0;
    left: 0;
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
