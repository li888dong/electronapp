<script>
export default {
    name: 'PagingTool',
    data(){
        return{
            
        }
    },
    methods: {
        // 上一页
        lastPage(){
            
        },
        // 下一页
        nextPage(){

        }
    }
}
</script>

<template>
<div class="AssetPage">
    共&nbsp;&nbsp;1224&nbsp;&nbsp;条记录&nbsp;&nbsp;&nbsp;123 页&nbsp;&nbsp;&nbsp;    第
    <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6" selected="true">6</option>
        <option value="7">7</option> 
    </select>
    页 
    <input type="button" value="<">
    <span class="page3">1</span><input type="button" value=">">
</div>
</template>

<style scoped>
/* 分页功能 */
.AssetPage {
    width: 368px;
    height: 28px;
    color: #108CEE;
    float: right;
    line-height: 30px;
    position: absolute;
    right: 0;
    bottom: 20px;
    font-size: 14px;
    background-color: #fff;
}
.AssetPage input{
    width: 30px;
    height: 30px;
    background-color: #F6F7FB;
    color: #ccc;
}
.page3{
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: #108CEE;
    color: #fff;
    line-height: 30px;
    text-align: center;
}
</style>
