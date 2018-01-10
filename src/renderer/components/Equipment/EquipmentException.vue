<script>
import PagingTool from '@/components/Equipment/PagingTool'

export default {
    name: 'EquipmentException',
    data(){
        return{
            
        }
    },
    components: {
        'PagingToolView': PagingTool
    }
}
</script>

<template><!-- 设备异常页面 -->
<div class="EquipmentException">
    设备管理 / 设备异常记录
    <div class="ExceptionTittle">
        <h3>设备异常记录</h3>
    </div>
    <div class="ExceptionTop">
        <i class="iconfont icon-search searchPic"></i>
        <input type="text" name="" id="" class="SearchText" placeholder="终端名称、编号、客户名称、IP地址等"><button>搜索</button>
        <span>m</span>
        <select name="" id="">
            <option value="">所有区域</option>
            <option value="">河南区域</option>
            <option value="">全国区域</option>
        </select>
        <span>时间</span>        
    </div>
    <div class="ExceptionForm">
        <table>
            <tr>
                <th><input type="checkbox" name="" id="">终端编号</th>
                <th>生产厂家</th>
                <th>当前状态</th>
                <th>异常编码</th>
                <th>异常类别</th>
                <th>异常出现时间</th>
                <th>操作人</th>
                <th>操作</th>
            </tr>
            <tr>
                <td>23422</td>
                <td>232342</td>
                <td>234324324</td>
                <td>2017.225.255</td>
                <td>2555</td>
                <td>2017-12-12 12:12:12</td>
                <td>丽丽</td>
                <td>修正完成</td>
            </tr>
            <tr>
                <td>23422</td>
                <td>232342</td>
                <td>234324324</td>
                <td>2017.225.255</td>
                <td>2555</td>
                <td>2017-12-12 12:12:12</td>
                <td>明明</td>
                <td>拆除设备</td>
            </tr>
            <PagingToolView></PagingToolView>
        </table>
    </div>
</div>
</template>

<style scoped>
.EquipmentException{
    width: 1700px;
    height: 944px;
    background-color: #E8ECF0;
    padding: 15px;
    font-size: 14px;
}
.ExceptionTittle{
    background-color: #fff;
    height: 60px;
    border-bottom: 1px solid #666666;
    padding: 20px 10px 10px 10px;
}
.ExceptionTittle h3{
    display: inline-block;
    font-size: 16px;
    font-family: 'MicrosoftYahei'; 
}
.ExceptionTittle span {
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

.ExceptionTop {
    height: 50px;
    padding: 10px;
    background-color: #fff;
    position: relative;
}
.ExceptionTop .SearchText{
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
.ExceptionTop button {
    width: 60px;
    height: 30px;
    background-color: #108CEE;
    color: #fff;
}
.ExceptionTop span{
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
.ExceptionTop select{
    width: 94px;
    height: 30px;
    background-color: #EAF6FE;
    color: #108CEE;
    border: none;
    outline: none;
}

.ExceptionForm{
    background-color: #fff;
    position: relative;
    height: 882px;
}
.ExceptionForm th{
    display: inline-block;
    padding: 0 20px;
    height: 40px;
    background-color: #F6F7FB;
    line-height: 40px;
    margin: 0 33px;
}
.ExceptionForm th input {
    vertical-align: middle;
}
.ExceptionForm td{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    margin: 0 32px;
    text-align: center;
    width: 100px;
}
.ExceptionForm a{
    padding: 0 2px;
} 

</style>
