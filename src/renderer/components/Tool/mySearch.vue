<template>
    <div class="searchBox flex-row" v-on:keyup.enter="doSearch">
        <i class="fas fa-search" ></i>
        <Input v-model="value" :placeholder="placeholder" :style="{width:swidth+'px'}" :size="size" v-on:on-keyup='dimSearch'>
            <Button slot="append" @click="doSearch">搜索</Button>
        </Input>
    </div>
</template>

<script>
    export default {
        name: 'mySearch',
        props:['keyword','placeholder','swidth','size'],
        data(){
            return{
                value:''
            }
        },
        methods:{
            doSearch(){
                this.$store.dispatch('setSearchKey',this.value);
                this.$emit('doSearch')
            },
            dimSearch(){
                this.$store.dispatch('setSearchKey',this.value);
                this.$emit('dimSearch')
            },
        }
    }
</script>

<style scoped>
/* 顶部搜索框样式 */
.searchBox {
    width: 340px;
    margin-right: 0;
    position: relative;
}

.searchBox i {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 10px;
    left: 10px;
    z-index: 11;
}
</style>