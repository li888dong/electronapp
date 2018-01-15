<template>
    <div id="main" class="app-main" @click='companybol'>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                theme: this.$store.state.app.themeColor
            };
        },
        mounted () {
            

        },
        beforeDestroy () {

        },
        methods: {
           companybol(){
               this.$store.dispatch('setCompanbol',false)
           },
        }
    };
</script>

<style lang="less">
    @import "../../static/resetIview/reset";
</style>
<style>
html,body{
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    overflow: hidden;
}
.app-main{
    width: 100%;
    height: 100%;
}
</style>
