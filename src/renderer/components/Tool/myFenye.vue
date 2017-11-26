<template>
    <!-- 暂时不可用 -->
    <Row class="myFenye">
        <Col span="24">
            <Page :total="100" show-elevator show-total @on-change="change"></Page><Button type="primary">确定</Button>
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
    bottom: 0;
    left: 0;
    text-align: center;
}
.fenYe table{
    border: 0;
}
.fenYe ul {
    display: inline-block;
}
.fenYe button{
    top: -12px;
    left: 12px;
}
</style>