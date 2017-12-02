<template>
    <!-- 暂时不可用 -->
    <Row class="fenYe">               
        <Col span="24">
            <Page :total="100" show-total show-elevator></Page> <Button type="primary">确定</Button>
        </Col>
    </Row>
</template>

<script>
    export default {
        name: 'myFenye',
        data() {
            return {
                
            }
        },
        methods:{
            change: function (page) {
                console.log(page)
            }
        }
    }
</script>

<style scoped>

/* 分页的样式 */
.fenYe {
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0px;
    text-align: center;
}
.fenYe ul {
    display: inline-block;
}
.fenYe button{
    top: -12px;
    left: 12px;
}
</style>