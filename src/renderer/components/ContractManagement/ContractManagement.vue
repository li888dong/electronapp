<script>
import PagingTool from '@/components/Equipment/PagingTool'
import ChangxieContract from '@/components/ContractManagement/ChangxieContract'
import saleContract from '@/components/ContractManagement/saleContract'

export default {
    name: 'ContractManagement',
    data(){
        return{
            
        }
    },
    components: {
        'PagingToolView': PagingTool,
        'saleContract': saleContract,
        'ChangxieContract': ChangxieContract
    }
}
</script>

<template>
<div class="ContractManagement">
    <div class="ConNavBar">
        <span class="hetongMan">合同管理</span>
        <router-link to="ChangxieContract" tag="span" style="cursor: pointer; ">长协合同</router-link>
        <router-link to="saleContract" tag="span" style="cursor: pointer; ">售电合同</router-link>
        <router-link to="AddContractManagement" tag="span" style="cursor: pointer; ">添加长协合同</router-link>
    </div>
    <!-- 长协合同 -->
    <ChangxieContract></ChangxieContract>
    <!-- <div class="changxie">
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
                    <li class="change"><span>修改</span> <span>删除</span></li>
                </ul>
                <div class="hetongShuju">
                    <span class="hetongChat">
                        <i class="iconfont icon-xieyi seeicon"></i><a href="">查看</a>
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
                        <i class="iconfont icon-xieyi seeicon"></i><a href="">查看</a></span>
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
            <PagingToolView></PagingToolView>
        </div>
    </div> -->
    <!-- 售电合同 -->
    <saleContract></saleContract>
    
</div>
</template>

<style scoped>
.ContractManagement {
    background-color: #E8ECF0;
}
.ConNavBar{
    width: 160px;
    height: 914px;
    background-color: #fff;
    position: fixed;
    left: 220px;
    top: 79px;
    border-right: 1px solid #E5E5E5;    
}
.ConNavBar span {
    display: inline-block;
    width: 160px;
    height: 52px;
    font-size: 14px;
    text-align: center;
    line-height: 52px;
    border-left: 5px solid #108CEE;
    color: #108CEE;
    border-bottom: 1px solid #E5E5E5; 
}
.ConNavBar .hetongMan {
    font-size: 16px;
    border: none;
    color: #000;
    border-bottom: 1px solid #E5E5E5; 
}
.changxie {
    width: 1540px;
    height: 914px;
    padding: 20px;
    margin-left: 160px;
    background-color: #E8ECF0;
    /* display: none; */
}
.changxie h3 {
    height: 52px;
    border: 1px solid #E5E5E5;
    background-color: #fff;
    padding-left: 20px;
    padding-top: 20px;
    font-size: 16px;
    font-weight: 400;
}
.hetongList {
    height: 850px;
    background-color: #fff;
    border: 1px solid #E5E5E5;
    border-top: none;
    padding-top: 14px;
}
.hetongIfno{
    height: 50px;
    background-color: #F6F7FB;
    padding-left: 15px;
    position: relative;
}
.hetongIfno li{
    float: left;
    line-height: 50px;
    padding-right: 50px;
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
    top: 10px;
    left: 25px;
    width: 60px;
    text-align: center;
    line-height: 1.1;

}
.seeicon {
    width: 54px;
    height: 64px;
    font-size: 60px;
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
    padding-right: 77px;
    line-height: 25px;
}
.hetongNumber li{
    float: left;
    padding-right: 72px;
    line-height: 25px;
}


</style>
