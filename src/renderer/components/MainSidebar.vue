<style>
    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened .ivu-menu-submenu-title,
    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover,
    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened{
        background-color: #19233C;
    }

    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):hover, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu):hover{
        background-color: #000 !important;
    }
    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover {
        background-color: #000 !important;
    }

    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu) {
        color: #ffffff;
    }
    #main-sidebar {
        width: 220px;
        position: fixed;
        top: 0;
        left: 0;
        height: 1194px;
        background: #19233C;
        z-index: 9;
        transition: width 0.3s;
        font-size: 12px;
        color: #fff;
        overflow: hidden;
    }

    .sidebar-item, .sidebar-group {
        position: relative;
        padding-left: 30px;
        border-bottom: 0.5px solid #999;
    }

    .sidebar-item {
        line-height: 50px;
        cursor: pointer;
    }

    .sidebar-group {
        line-height: 30px;
    }

    .sidebar-group li {
        cursor: pointer;
    }

    #main-sidebar i {
        margin-right: 8px;
    }

    .logo {
        width: 220px;
        height: 80px;
        background: url("../assets/logo.png") no-repeat center;
        background-size: cover;
    }

    .sidebar-group ul li {
        list-style: none;
        padding-left: 20px;
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
        <Row>
            <Col span="24">
                <div class="logo">

                </div>
            </Col>
            <Col span="24">
            <Menu :theme="'dark'" :open-names="['1']" accordion style="width: 220px;background-color: #19233C;">
                <MenuItem name="01" >
                    <router-link to="/home" tag="div"><i class="iconfont icon-zonglan-hui"></i><span>概况</span>
                    </router-link>
                </MenuItem>
                <MenuItem name="02" ><i class="iconfont icon-yanjing"></i><router-link to="/button" tag="span"><span>概况</span>
                </router-link></MenuItem>
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        客户中心
                    </template>
                    <MenuItem name="1-1">
                        <router-link to="/client-situation" tag="div"><i class="iconfont icon-kehu"></i><span>客户概况</span>
                        </router-link>
                    </MenuItem>
                    <MenuItem name="1-2">
                        <router-link to="/client-list" tag="div"><i class="iconfont icon-numberlist"></i><span>客户列表</span>
                        </router-link>
                    </MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <i class="iconfont icon-fenxi"></i>
                        预测分析
                    </template>
                    <MenuItem name="2-1">
                        <router-link to="UserForecast" tag="div"><i class="iconfont icon-fenxi"></i><span>用户申报</span>
                        </router-link>
                    </MenuItem>
                    <MenuItem name="2-2">
                        <router-link to="annual-forecast" tag="div"><i class="iconfont icon-xieyi"></i><span>年度预测</span>
                        </router-link>
                    </MenuItem>
                    <MenuItem name="2-3">
                        <router-link to="MonthForecast" tag="div"><i class="iconfont icon-shujuku"></i><span>月度预测</span>
                        </router-link>
                    </MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <i class="iconfont icon-jiaoyiguanli"></i>
                        交易管理
                    </template>
                    <MenuItem name="3-1">
                        <router-link to="trade-situation" tag="li"><i
                                class="iconfont icon-jiaoyiguanli"></i><span>交易概况</span>
                        </router-link>

                    </MenuItem>
                    <MenuItem name="3-3">
                        <router-link to="bid-management" tag="li"><i class="iconfont icon-zhuzhuangtutubiao"></i><span>竞价管理</span>
                        </router-link>

                    </MenuItem>
                    <MenuItem name="3-2">
                        <router-link to="changxie-management" tag="li"><i class="iconfont icon-xieyi"></i><span>长协管理</span>
                        </router-link>

                    </MenuItem>

                    <MenuItem name="3-4">
                        <router-link to="matching-management" tag="li"><i
                                class="iconfont icon-pipei"></i><span>交易匹配管理</span>
                        </router-link>

                    </MenuItem>


                </Submenu>
                <Submenu name="4">
                    <template slot="title">
                        <i class="iconfont icon-shebei1"></i>
                        设备管理
                    </template>


                    <MenuItem name="4-1">
                        <router-link to="/equipment" tag="li"><i class="iconfont icon-shebei"></i><span>设备概况</span></router-link>

                    </MenuItem>
                    <MenuItem name="4-2">
                        <router-link to="/AssetInfo" tag="li"><i class="iconfont icon-lifangti"></i><span>资产信息</span></router-link>

                    </MenuItem>

                </Submenu>
                <MenuItem name="03" >
                    <router-link to="index-compare" tag="li"><i class="iconfont icon-xingzhuang"></i><span>行业指数</span>
                    </router-link>
                </MenuItem>
                <MenuItem name="04" >
                    <router-link to="sand-table" tag="li"><i class="iconfont icon-qizi"></i><span>售电沙盘</span>
                    </router-link>
                </MenuItem>
                <MenuItem name="05" >
                    <router-link to="/database" tag="div"><i class="iconfont icon-shujuku1"></i><span>电量数据库</span></router-link>
                </MenuItem>
                <!--<router-link to="/ContractManagement" tag="li"><i class="iconfont icon-bcc"></i><span>合同信息</span></router-link>-->
                <!--<router-link to="/AddContractManagement" tag="li"><i class="iconfont icon-bcc"></i><span>添加长协合同</span></router-link>-->
                <MenuItem name="06" >
                    <router-link to="/ContractManagement" tag="li"><i class="iconfont icon-wenjianjia"></i><span>合同信息</span></router-link>
                </MenuItem>
            </Menu>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        name: 'mainsidebar',
        data(){
            return{

            }
        }
    }
</script>