<template>
    <div class="searchBox flex-row">
        <i class="iconfont icon-search" ></i>
        <Input autosize="true" :value="search" :placeholder="placeholder" :style="{width:swidth+'px'}" :size="size">
            <Button slot="append">搜索</Button>
        </Input>
    </div>
</template>

<script>
    export default {
        name: 'mySearch',
        props:['search','placeholder','swidth','size'],
        data(){
            return{
                value:''
            }
        },
        mounted(){
            this.value=this.search
        }
    }
</script>

<style scoped>
/* 顶部搜索框样式 */
.searchBox {
    margin-right: 0;
    position: relative;
}

.searchBox i {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 6px;
    left: 10px;
    z-index: 11;
}
</style>