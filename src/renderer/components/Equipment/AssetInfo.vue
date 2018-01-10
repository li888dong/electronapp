<script>
import PagingTool from '@/components/Equipment/PagingTool'

export default {
    name: 'AssetInfo',
    data(){
        return{
            
        }
    },
    components: {
        "PagingToolVIew": PagingTool
    }
}
</script>

<template>
<div class="AssetInfo"> <!-- 这是设备资产信息页面 -->   
    <div class="AssetInfoSearch">
        <button class="apply">申请设备入库</button> <i class="iconfont icon-search"></i> <input class="AsSearchText " type="text" name="" id="" placeholder="资产号 | IP地址 | 企业名字"><button type="submit" class="AsSearch">搜索</button>
    </div>
    <div class="AssetInfoForm">
        <table>
            <tbody>
                <tr>
                    <th><input type="checkbox" name="" id=""> 资产号</th> 
                    <th>生产厂家</th>
                    <th>出厂编号</th>
                    <th>采购日期</th>
                    <th>接线方式</th>
                    <th>IP地址</th>
                    <th>端口号</th>
                    <th>是否已安装</th>
                    <th>操作</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <router-link to="/EquipmentStatus" tag="a">详情</router-link>
                        <router-link to="/EquipmentException" tag="a">更多</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <PagingToolVIew></PagingToolVIew>
    </div>
    
</div>

</template>

<style scoped>

.AssetInfo{
    width: 1700px;
    height: 944px;
    background-color: #EEEEEE;
    padding: 10px 20px;
}
.AssetInfoSearch{
    background-color: #fff;
    height: 46px;
    padding: 12px 10px;
    position: relative;
}
.AssetInfoSearch i{
    position: absolute;
    top: 16px;
    left: 150px;
}
.apply{
    width: 120px;
    height: 30px;
    background-color: #108CEE;    
    color: #fff;
}
.AsSearchText{
    width: 184px;
    height: 30px;
    border: 1px solid #ccc;
    margin-left: 10px;
    padding-left: 26px;
}
.AsSearch{
    width: 60px;
    height: 30px;
    background-color: #108CEE;
    color: #fff;
}

.AssetInfoForm{
    background-color: #fff;
    height: 882px;
    position: relative;
}
.AssetInfoForm th{
    display: inline-block;
    padding: 0 20px;
    height: 40px;
    background-color: #F6F7FB;
    line-height: 40px;
    margin: 0 45px;
}
.AssetInfoForm th input {
    vertical-align: middle;
}
.AssetInfoForm td{
    display: inline-block;
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    margin: 0 38px;
    text-align: center;
    width: 100px;
}
.AssetInfoForm a{
    padding: 0 2px;
} 



</style>
