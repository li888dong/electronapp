<script>
export default {
    name:'panel'
}
</script>
<template>
    <!--面板组件-->
  <div class="panel">
      <slot></slot>
  </div>
</template>
<style>
   .panel{
       background-color:#fff;
       width:100%;
   }
    .panel .title-lv3{
        height:30px;
        line-height:30px;
        padding:0 10px;
        font-size:14px;
        display: inline-block;
        vertical-align: middle;
    }
    .panel .title-lv2{
        height:30px;
        line-height:30px;
        margin-left: 10px;
        padding:10px 10px 0px 10px;
        font-size:16px;
        display: inline-block;
        vertical-align: middle;
    }
    .panel .btn-group{
        float: right;
        margin-right: 10px;
        margin-top: 10px;
    }
    .panel .container{
        padding:10px 10px;
    }
</style>