<style>
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
        transition: all .1s ease;
    }
    .slide-fade-leave-active {
        transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
    .sidebar-group i{
        display: inline-block;
    }
    .rotate90{
        transform: rotate(-90deg);
    }
</style>
<template>
    <div id="main-sidebar">
        <div class="logo"></div>
        <div class="sidebar-item">
            <router-link to="exmaple" tag="span"><i class="iconfont icon-overview"></i><span>概况</span></router-link>
        </div>
        <div class="sidebar-item">
            <i class="iconfont icon-yanjing"></i>
            <router-link to="home" tag="span">实时监控</router-link>
        </div>
        <div class="sidebar-group">
            <i class="icon iconfont icon-xiala" v-bind:class="{rotate90:!sidebarPredictiveShow}" @click="sidebarPredictiveShow = !sidebarPredictiveShow"></i>
            <span>预测分析</span>
            <transition name="slide-fade">
                <ul id="sidebar-predictive" v-show="sidebarPredictiveShow">
                    <router-link to="weather" tag="li"><i class="iconfont icon-shebei"></i><span>预测概况</span></router-link>
                    <router-link to="annual-forecast" tag="li"><i class="iconfont icon-xieyi"></i><span>年度预测</span></router-link>
                    <router-link to="cart" tag="li"><i class="iconfont icon-shujuku"></i><span>月度预测</span></router-link>
                </ul>
            </transition>
        </div>
        <div class="sidebar-group">
            <i class="icon iconfont icon-xiala" v-bind:class="{rotate90:!sidebarTransactionTanagementShow}"  @click="sidebarTransactionTanagementShow = !sidebarTransactionTanagementShow"></i>
            <span>交易管理</span>
            <transition name="slide-fade">
            <ul id="sidebar-transaction-management" v-show="sidebarTransactionTanagementShow">
                <router-link to="bid-management" tag="li"><i class="iconfont icon-zhuzhuangtutubiao"></i><span>交易概况</span></router-link>
                <router-link to="home" tag="li"><i class="iconfont icon-kehu"></i><span>长协管理</span></router-link>
                <router-link to="map" tag="li"><i class="iconfont icon-numberlist"></i><span>竞价管理</span></router-link>
            </ul>
            </transition>
        </div>
        <div class="sidebar-group">
            <i class="icon iconfont icon-xiala" v-bind:class="{rotate90:!sidebarCustomerSeviceShow}"  @click="sidebarCustomerSeviceShow = !sidebarCustomerSeviceShow"></i>
            <span>客户中心</span>
            <transition name="slide-fade">
            <ul id="sidebar-customer-sevice" v-show="sidebarCustomerSeviceShow">
                <router-link to="/client-situation" tag="li"><i class="iconfont icon-bcc"></i><span>客户概况</span></router-link>
                <router-link to="/client-list" tag="li"><i class="iconfont icon-bcc"></i><span>客户详情</span></router-link>
            </ul>
            </transition>
        </div>
        <div class="sidebar-group">
            <i class="icon iconfont icon-xiala" v-bind:class="{rotate90:!sidebarEquipmentControlShow}"  @click="sidebarEquipmentControlShow = !sidebarEquipmentControlShow"></i>
            <span>设备管理</span>
            <transition name="slide-fade">
            <ul id="sidebar-equipment-control" v-show="sidebarEquipmentControlShow">
                <router-link to="echarts-demo/demo2" tag="li"><i class="iconfont icon-bcc"></i><span>设备概况</span></router-link>
                <router-link to="" tag="li"><i class="iconfont icon-bcc"></i><span>资产信息</span></router-link>
            </ul>
            </transition>
        </div>
        <div class="sidebar-item" style="border-bottom: none">
            <i class="iconfont icon-shujuku"></i>
            <span>电量数据库</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'mainsidebar',
        data(){
            return{
                sidebarPredictiveShow:true,
                sidebarTransactionTanagementShow:true,
                sidebarCustomerSeviceShow:true,
                sidebarEquipmentControlShow:true
            }
        }
    }
</script>