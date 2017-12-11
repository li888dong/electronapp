<style>

    #main-sidebar {
        height: 920px;
    }
    .logo {
        height: 80px;
        background-image: url("../assets/logo蓝底.png");
        background-repeat:no-repeat;
        background-position:24px center;
        background-size: 45%;
        background-color: #495060;
    }
</style>
<template>
    <div >
        <Row>
            <Row>
                <div class="logo">

                </div>
            </Row>
            <Row>
                <Menu :theme="'dark'" active-name="0-1" accordion width="auto"  id="#main-sidebar">
                    <MenuItem name="0-1" @click.native="$router.push('home')">
                        <div><i class="iconfont icon-zonglan-hui"></i><span> &nbsp;概况</span></div>
                    </MenuItem>
                    <MenuItem name="0-2" @click.native="$router.push('button')">
                        <div><i class="iconfont icon-yanjing"></i><span> &nbsp;Button</span></div>
                    </MenuItem>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-people"></Icon>
                            客户中心
                        </template>
                        <MenuItem name="1-1" @click.native="$router.push('client-situation')">
                            <div><i class="iconfont icon-kehu"></i><span> &nbsp;客户概况</span></div>
                        </MenuItem>
                        <MenuItem name="1-2" @click.native="$router.push('client-list')">
                            <div><i class="iconfont icon-numberlist"></i><span> &nbsp;客户列表</span></div>
                        </MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <i class="iconfont icon-fenxi"></i>
                            预测分析
                        </template>
                        <MenuItem name="2-1" @click.native="$router.push('UserForecast')">
                            <div><i class="iconfont icon-fenxi"></i><span> &nbsp;用户申报</span></div>
                        </MenuItem>
                        <MenuItem name="2-2" @click.native="$router.push('year-forecast')">
                            <div><i class="iconfont icon-xieyi"></i><span> &nbsp;年度预测</span></div>
                        </MenuItem>
                        <MenuItem name="2-3" @click.native="$router.push('MonthForecast')">
                            <div><i class="iconfont icon-xieyi"></i><span> &nbsp;月度预测</span></div>
                        </MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <i class="iconfont icon-jiaoyiguanli"></i>
                            交易管理
                        </template>
                        <MenuItem name="3-1" @click.native="$router.push('trade-situation')">
                            <li><i class="iconfont icon-jiaoyiguanli"></i><span> &nbsp;交易概况</span></li>
                        </MenuItem>
                        <MenuItem name="3-3" @click.native="$router.push('bid-management')">
                            <li><i class="iconfont icon-zhuzhuangtutubiao"></i><span> &nbsp;竞价管理</span></li>
                        </MenuItem>
                        <MenuItem name="3-2" @click.native="$router.push('changxie-management')">
                            <li><i class="iconfont icon-xieyi"></i><span> &nbsp;长协管理</span></li>
                        </MenuItem>

                        <MenuItem name="3-4" @click.native="$router.push('matching-management')">
                            <li><i class="iconfont icon-pipei"></i><span> &nbsp;交易匹配管理</span></li>
                        </MenuItem>
                    </Submenu>
                    <Submenu name="4">
                        <template slot="title">
                            <i class="iconfont icon-shebei1"></i>
                            设备管理
                        </template>
                        <MenuItem name="4-1" @click.native="$router.push('equipment')">
                            <li><i class="iconfont icon-shebei"></i><span> &nbsp;设备概况</span></li>
                        </MenuItem>
                        <MenuItem name="4-2" @click.native="$router.push('AssetInfo')">
                            <li><i class="iconfont icon-lifangti"></i><span> &nbsp;资产信息</span></li>
                        </MenuItem>
                        <MenuItem name="4-3" @click.native="$router.push('EquipmentStatus')">
                            <li><i class="iconfont icon-lifangti"></i><span> &nbsp;统计日志</span></li>
                        </MenuItem>
                    </Submenu>
                    <MenuItem name="03" @click.native="$router.push('index-compare')">
                        <li>
                            <i class="iconfont icon-zhuzhuangtutubiao"></i>
                            <span>  &nbsp;行业指数</span>
                        </li>
                    </MenuItem>
                    <MenuItem name="04" @click.native="$router.push('sand-table')">
                        <li>
                            <i class="iconfont icon-qizi"></i>
                            <span>  &nbsp;售电沙盘</span>
                        </li>
                    </MenuItem>
                    <MenuItem name="05" @click.native="$router.push('database')">
                        <li>
                            <i class="iconfont icon-shujuku1"></i>
                            <span>  &nbsp;电量数据库</span>
                        </li>
                    </MenuItem>
                    <MenuItem name="06" @click.native="$router.push('ContractManagement')">
                        <li>
                            <i class="iconfont icon-wenjianjia"></i>
                            <span>  &nbsp;合同管理</span>
                        </li>
                    </MenuItem>
                </Menu>
            </Row>
        </Row>
    </div>
</template>
<script>
    export default {
        name: 'mainsidebar',
        data(){
            return{

            }
        },
        methods:{
            goto1(){
                console.dir(event.srcElement)
            },
            goto2(){
                console.log(2)
            },
        }
    }
</script>