<script>
export default {
    name: 'inputs',
    data() {
        return{
            cityList: [
                {
                    value: 'New York',
                    label: 'New York'
                },
                {
                    value: 'London',
                    label: 'London'
                },
                {
                    value: 'Sydney',
                    label: 'Sydney'
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa'
                },
                {
                    value: 'Paris',
                    label: 'Paris'
                },
                {
                    value: 'Canberra',
                    label: 'Canberra'
                }
            ],
            model1: '',
            value2: '',
            value3: '',
            value: ''
        }
    }
}
</script>

<template>
<div class="inputs">
    <Input v-model="value2" class="myInput" placeholder="default size" ></Input>
    <br>
    <Input v-model="value2" class="mySearch" icon="ios-search-strong" placeholder="default size" ></Input>
    <br>
    <Input v-model="value7" class="myTextarea" type="textarea" placeholder="Enter something..."></Input>
    <Input v-model="value8" type="textarea" disabled  placeholder="Enter something..."></Input>
    <Select v-model="model1" class="mySelect">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <Input v-model="value4" icon="ios-search-strong" placeholder="Enter something..." style="width: 200px"></Input>

</div>
</template>

<style>

/* 输入框*/
.myInput input{
    width: 270px;
    height: 34px;
    border-radius: 0;
    background-color: red
}
/*文本域状态*/
.myTextarea textarea{
    width: 700px;
    height: 102px;
    resize:none;
}

/* 地市选择器 */
.mySelect{
    width: 100px;
    height: 34px;
}
.mySelect .ivu-select-selection .ivu-select-placeholder, .mySelect .ivu-select-selection .ivu-select-selected-value{
    height: 32px;
    line-height: 32px;
}
.mySelect .ivu-select-selection{
    height: 34px;
    border-radius: 0;
}

/* 搜索框 */
.mySearch {    
    
} 
.mySearch >.ivu-input{
    width: 454px;
    height: 34px;
    line-height: 34px;
}