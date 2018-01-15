<template>
    <div>
    <!-- 分页 -->
    <Row class="fenYe">
        <Col span='24'>
            <Page :total="66" show-total show-elevator></Page> <Button type="primary">确定</Button>
        </Col>
    </Row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
/* 分页的样式 */
.fenYe {
    width: 100%;
    height: 60px;
    background-color: #fff;
    position: fixed;
    bottom:0px;
    left: 5%;
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