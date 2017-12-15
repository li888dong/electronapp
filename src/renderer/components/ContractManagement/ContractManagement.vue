<script>


export default {
    data(){
        return{
            
        }
    },
    methods: {
        isShow(value){
            this.$router.push(value)
        }
    }
}
</script>

<template>
<div class="ContractManagement">
    <Row>
       <!--  <Col span='2'>
            <div class="ConNavBar">
                <span class="hetongMan">合同管理</span>
                <Col span='24'>        
                    <router-link to="ChangxieContract" tag="span" style="cursor: pointer; " 
                    :class="{selected:$route.name==='ChangxieContract'}" @click="isShow('ChangxieContract')"
                    >长协合同</router-link>
                </Col>
                <Col span='24'>
                    <router-link to="saleContract" tag="span" style="cursor: pointer; " 
                    :class="{selected:$route.name==='saleContract'}" @click="isShow('saleContract')"
                    >售电合同</router-link>
                </Col>
            </div>
        </Col> -->
        <!-- <Col span='22'>
            
        </Col> -->
        <router-view></router-view>
    
    </Row>    
</div>
</template>

<style scoped>
.ContractManagement {
    background-color: #E8ECF0;
    overflow: hidden;
}
.ConNavBar{
    max-height: 935px;
    height: 935px;
    background-color: #fff;
    border-right: 1px solid #E5E5E5;    
}
.ConNavBar span {
    display: inline-block;
    width: 100%;
    height: 52px;
    font-size: 14px;
    text-align: center;
    line-height: 52px;    
}
.ConNavBar span.selected{
    border-left: 5px solid #108CEE;
    color: #108CEE;
    border-bottom: 1px solid #E5E5E5; 
    border-top: 1px solid #E5E5E5; 
}
.ConNavBar .hetongMan {
    font-size: 16px;
    border: none;
    color: #000;
    border-bottom: 1px solid #E5E5E5; 
}


</style>
