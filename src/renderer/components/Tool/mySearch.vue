<template>
    <div class="searchBox">
        <i class="iconfont icon-search" ></i>
        <Input placeholder="客户编号或客户名称" class="myInput" style="width: 280px"></Input><Button type="primary" style="border-radios：0；">搜索</Button>
    </div>
</template>

<script>
    export default {
        name: 'mySearch'
    }
</script>

<style scoped>
/* 顶部搜索框样式 */
.searchBox {
    position: relative;
    text-align: right;
}
.searchBox  .ivu-btn{
   border-radius: 0;
}
.searchBox i {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 6px;
    left: 18%;
    z-index: 11;
}
</style>