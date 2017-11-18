<script>
import PagingTool from '@/components/Equipment/PagingTool'

export default {
    name: 'EquipmentStatus',
    data(){
        return{
            
        }
    },
    components: {
        'PagingToolView': PagingTool
    }
}
</script>

<template><!-- 设备状态页面 -->
<div class="EquipmentStatus">
    设备管理 / 设备统计日志
    <div class="statusTittle">
        <h3>设备统计日志</h3>
        <router-link to="/EquipmentException" tag="a">设备异常记录</router-link>
    </div>
    <div class="statusTop">
        <i class="iconfont icon-search searchPic"></i>
        <input type="text" name="" id="" class="SearchText" placeholder="终端名称、编号、客户名称、IP地址等"><button>搜索</button>
        <span>m</span>
        <select name="" id="">
            <option value="">所有区域</option>
            <option value="">河南区域</option>
            <option value="">全国区域</option>
        </select>
        <span>时间</span>
        <div class="viewOffline">
            <input type="checkbox" name="" id="">
            仅显示已掉线设备
        </div>    
    </div>
    <div class="statusForm">
        <table>
            <tr>
                <th><input type="checkbox" name="" id="">终端编号</th>
                <th>生产厂家</th>
                <th>登录IP：端口</th>
                <th>最新上线时间</th>
                <th>当前在线时长</th>
                <th>当前状态</th>
                <th>掉线时间</th>
                <th>采集成功率</th>
                <th>上报比例</th>
                <th>操作</th>
            </tr>
            <tr>
                <td>23422</td>
                <td>232342</td>
                <td>234324324</td>
                <td>2017.225.255</td>
                <td>2555</td>
                <td>运行中</td>
                <td>状态正常</td>
                <td>25%</td>
                <td>3.5</td>
                <td>
                    详情
                </td>
            </tr>
            <tr>
                <td>23422</td>
                <td>232342</td>
                <td>234324324</td>
                <td>2017.225.255</td>
                <td>2555</td>
                <td>已掉线</td>
                <td>2017-12-12 12:12:12</td>
                <td>33%</td>
                <td>33%</td>
                <td>
                    详情
                </td>
            </tr>
            <PagingToolView></PagingToolView>
        </table>
    </div>
</div>
</template>

<style scoped>
.EquipmentStatus{
    width: 1700px;
    height: 914px;
    background-color: #E8ECF0;
    padding: 15px;
    font-size: 14px;
}
.statusTittle{
    background-color: #fff;
    height: 60px;
    border-bottom: 1px solid #666666;
    padding: 20px 10px 10px 10px;
}
.statusTittle h3{
    display: inline-block;
    font-size: 16px;
    font-family: 'MicrosoftYahei'; 
}
.statusTittle a {
    width: 123px;
    height: 30px;
    float: right;
    font-size: 14px;
    background-color: #108CEE;
    color: #fff;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
    cursor: pointer;
}

.statusTop {
    height: 50px;
    padding: 10px;
    background-color: #fff;
    position: relative;
}
.statusTop .SearchText{
    width: 250px;
    height: 30px;
    border: 1px solid #ccc;
    padding-left: 24px;
}
.searchPic {
    position: absolute;
    left: 15px;
    top: 13px;
}
.statusTop button {
    width: 60px;
    height: 30px;
    background-color: #108CEE;
    color: #fff;
}
.statusTop span{
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: #EAF6FE;
    margin: 0 30px;
    vertical-align: middle;
    color: #108CEE;
    line-height: 30px;
    text-align: center;
}
.statusTop select{
    width: 94px;
    height: 30px;
    background-color: #EAF6FE;
    color: #108CEE;
    border: none;
    outline: none;
}
.viewOffline{
    float: right;
}
.viewOffline input {
    width: 16px;
    height: 16px;
    border: 1px solid #000;
    outline: none;
    vertical-align: middle;
}

.statusForm{
    background-color: #fff;
    position: relative;
    height: 768px;
}
.statusForm th{
    display: inline-block;
    padding: 0 20px;
    height: 40px;
    background-color: #F6F7FB;
    line-height: 40px;
    margin: 0 27px;
}
.statusForm th input {
    vertical-align: middle;
}
.statusForm td{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    margin: 0 32px;
    text-align: center;
    width: 100px;
}
.statusForm a{
    padding: 0 2px;
} 

</style>
