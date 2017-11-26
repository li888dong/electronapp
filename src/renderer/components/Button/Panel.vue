<script>
export default {

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
       margin:20px;
       width:100%;
   }
    .panel .title{
        height:40px;
        line-height:40px;
        padding-left:10px;
        padding-right:10px;
        font-size:20px;
    }
    .panel .container{
        padding:10px 20px;
    }
</style>