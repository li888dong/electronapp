<script>
export default {
    name: 'EquipmentRun',
    data() {
        return{
            isType: '1',
            cartOption2:{
                color: ['#4fa8f9','#6ec71e','#f56e6a'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer : {
                        type : 'shadow'       
                    }
                },
                legend: {
                    orient: 'horizontal',
                    left: 'left',
                    itemWidth:16,
                    itemHeight:16,
                    data: ['成功','未抄表','失败']
                },                 
                grid: {
                    left: '10',
                    right: '10',
                    bottom: '0',
                    top: '40',
                    containLabel: true
                },
                xAxis: {               
                    type : 'category',            
                    data: [['01:30', 5], ['03:00', 10], ['06:00', 60], ['09:00', 10], ['12:00', 40]],            
                    axisTick: {
                        alignWithLabel: true
                    }
                },
                yAxis: {
                    type: 'value'
                },            
                series: [
                    {
                        name: '成功',
                        type: 'bar',
                        data: [184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30, 187, 130, 94, 169, 53, 161, 45, 109, 103, 162, 32, 228, 270, 226, 79, 226, 206, 65, 34, 77, 5, 85, 26, 158, 276, 284, 261, 49, 66, 175, 46, 275, 58, 12, 210, 14, 48]
                    },
                    {
                        name: '未抄表',
                        type: 'bar',
                        data: [184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30, 187, 130, 94, 169, 53, 161, 45, 109, 103, 162, 32, 228, 270, 226, 79, 226, 206, 65, 34, 77, 5, 85, 26, 158, 276, 284, 261, 49, 66, 175, 46, 275, 58, 12, 210, 14, 48]
                    },
                    {
                        name: '失败',
                        type: 'bar',
                        data: [184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30, 187, 130, 94, 169, 53, 161, 45, 109, 103, 162, 32, 228, 270, 226, 79, 226, 206, 65, 34, 77, 5, 85, 26, 158, 276, 284, 261, 49, 66, 175, 46, 275, 58, 12, 210, 14, 48]
                    }                
                ]
            },
            dataList:[['01:30', 0], ['03:00', 0], ['06:00', 0], ['09:00', 0], ['12:00', 0]],
            timeList:['00:00','01:30','03:00','04:30','06:00','07:30','09:00','10:30','12:00','13:30','15:00','16:30','18:00','19:30','21:00','22:30'],
            loading:true,
        }
    },
    mounted() {
        this.drawLine();
        this.equipmentRun();
    },
    methods: {
        isShow(type){
            console.log(type);
            this.isType = type;
            this.drawLine()
        } ,
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            // let myChart = this.$echarts.init(document.getElementById('runChart'))
            // // 绘制图表
            // if(this.isType === "1"){
            //     myChart.setOption(this.cartOption1,true)
            // } else if(this.isType === "2"){
            //      myChart.setOption(this.cartOption2,true)
            // }else {
            //      myChart.setOption(this.cartOption1,true)
            // }
            this.powerFrameChart.setOption(this.Option);
        },
        equipmentRun(){
            this.$http.post(this.$api.EQUIPMENT_RUN_STATUS,{com_id:this.com_id}).then(res=>{
                console.log("设备运行状态概况",res);
                if(res.data.status){
                    var dataObj = res.data.data;
                    var timeArr = [];
                    var dataList = [];
                    console.log(dataObj);
                    for(let k in dataObj){
                        timeArr.push(dataObj[k].collect_time)
                        var arr = [dataObj[k].collect_time,(dataObj[k].ratio*100)]
                        dataList.push(arr);
                    }
                    this.timeList = timeArr;
                    this.dataList = dataList;
                    this.drawLine();
                    this.loading = false;
                  }else{
                    this.loading = false;
                 }
            },err=>{
                 this.loading = false;
                 this.$api.errcallback(err);
            }).catch(err=>{
                 this.loading = false;
                 this.$api.errcallback(err);
            })
        }       
        
    },
    computed:{
         com_id:function(){
         return this.$store.getters.com_id;
        },
        powerFrameChart:function(){
            return this.$echarts.init(document.getElementById('runChart'));
        },
        Option:function(){
            return {
                  color: ['#4fa8f9'],
                tooltip: {
                    trigger: 'axis'                    
                },
                legend: {
                    data: ['在线率'],
                    x: 'left',
                    itemWidth:16,
                    itemHeight:16,
                },
                grid: {
                    left: '60',
                    right: '20',
                    bottom: '40',
                    top: '40',
                    containLabel: true
                },
                xAxis: {               
                    type : 'category',
                    boundaryGap : false,
                    axisLine: {onZero: true},
                    data: this.timeList,          
                },
                 dataZoom: this.$store.getters.chartOption.dataZoom,
                yAxis: {
                    min: 0,
                    max: 100,
                    type: 'value',
                    axisLine: {onZero: false}
                },            
                series: [
                    {
                        name: '在线率',
                        type: 'line',
                        top: 50,
                        smooth: true,
                        symbolSize: 10,
                        data: this.dataList,
                    }
                ]
            }
        }
    },
    watch:{
    com_id:function(){
        this.equipmentRun();
      }
    }
}
</script>

<template>
<div class="equipment-run">
    <Card class="equipmentBox">
        <h3 slot="title">设备运行状态概况</h3>
        <!-- <div slot='extra'>
            <RadioGroup class="qieHuan" v-model="isType" v-on:on-change='isShow' type="button">
            <Radio label='1'>终端在线率曲线</Radio>
            <Radio label='2'>实时采集量统计</Radio>
        </RadioGroup>
        </div> -->
        <!-- 折线图盒子 -->
        <Col span="24">
            <div id="runChart" :style="{width: '100%', height: '500px'}"></div>
            <Spin fix v-if='loading'></Spin>
        </Col>
    </Card>
</div>
</template>

<style scoped>
    .equipment-run{
        background-color: #fff;
    }
    .equipmentBox {
        height: 591px;
    }
    .qieHuan {
        margin-top: -8px;
        z-index: 10;
    }
</style>
