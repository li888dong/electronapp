<script>
    export default {
        name:'messageDetail',
        data(){
            return{
                msgList:[
                    {
                        item:'勒索病毒',
                        content:'这是消息内容展示区域',
                        date:'2017-10-26 14:32:59',
                    }
                ],
            }
        }
    }

</script>
<template>
    <Card class="msg-container">
        <div slot="title" class="back_msgcenter">
            <i class="iconfont icon-fanhui1 back" @click="$router.go(-1)"></i>
        </div>
        <div class="container" v-for="msg in msgList">
            <div class="time_header">
                <span>{{msg.date}}</span>
            </div>
                <p class="msg-content">
                    {{msg.content}}
                </p>
        </div>
    </Card>
</template>
<style>
    .msg-container{
        height:100%;
    }
    .msg-container  .back_msgcenter{
        font-size:16px;
    }
    .container{
        padding-left:40px;
        padding-right:40px;
    }
    .container .time_header{
          padding-bottom: 10px;
          text-align: center;
      }
    .container .msg-content{
        margin:15px;
    }
</style>