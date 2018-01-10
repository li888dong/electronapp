<script>
export default {
    name: 'EquipmentRun',
    data() {
        return{
            symbolSize: 10,
            data: [['01:30', 5], ['03:00', 10], ['06:00', 60], ['09:00', 10], ['12:00', 40]],
            timeLine: ['00:00','01:30','03:00','04:30','06:00','07:30','09:00','10:30','12:00','13:30','15:00','16:30','18:00','19:30','21:00','22:30']
        }
    },
    mounted() {
        this.drawLine2();
        this.drawLine3();
    },
    methods: {
        drawLine2(data = this.data, symbolSize = this.symbolSize, timeLine = this.timeLine){
            // 基于准备好的dom，初始化echarts实例
            let myChart2 = this.$echarts.init(document.getElementById('TerminalOnline'))
            // 绘制图表
            myChart2.setOption({
                title: {
                    text: '终端在线率曲线'
                },
                tooltip: {
                    trigger: 'axis'
                    
                },
                legend: {
                    data: ['在线率'],
                    x: 'center',
                },
                grid: {
                    left: 50,
                    right: 50,
                },
                xAxis: {               
                    type : 'category',
                    boundaryGap : false,
                    axisLine: {onZero: true},
                    data: timeLine
                },
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
                        symbolSize: symbolSize,
                        data: data
                    }
                ]
            })
        },
        drawLine3(data = this.data, symbolSize = this.symbolSize, timeLine = this.timeLine){
            // 基于准备好的dom，初始化echarts实例
            let myChart3 = this.$echarts.init(document.getElementById('informationCollection'))
            // 绘制图表
            myChart3.setOption({
                color: ['#22c','#ccc','#a33'],
                title: {
                    text: '实时采集量统计'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer : {
                        type : 'shadow'       
                    }
                },
                legend: {
                    orient: 'horizontal',
                    left: 'center',
                    top: '10',
                    data: ['成功','未抄表','失败']
                },                 
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: 2,
                    containLabel: true
                },
                xAxis: {               
                    type : 'category',            
                    data: timeLine,
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
            })
        }    
    }
}
</script>

<template>
<div class="equipment-run">
    <div class="equipmentTittle">
        <h3>设备运行状态概况</h3>
        <span>采集成功率</span><span>终端在线率</span>
    </div>
    <!-- 折线图盒子 -->
    <div class="EqFormList">
        <div id="TerminalOnline" class="EqForm" :style="{width: '690px', height: '210px'}"></div>
        <div id="informationCollection"  class="EqForm" :style="{width: '690px', height: '210px'}"></div>
    </div>
</div>
</template>

<style scoped>
    .equipment-run{
        width: 1667px;
        height: 290px;
        border: 1px #e5e5e5 solid;
        background-color: #fff;        
        margin-bottom: 10px;
        padding: 10px;
    }
    .equipment-run .equipmentTittle{
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
        padding-right: 20px;
    }
    .equipment-run .equipmentTittle h3{
        display: inline;
        font-size: 16px;
    }
    .equipment-run .equipmentTittle span{
        float: right;
        width: 90px;
        height: 30px;
        text-align: center;
        background-color: #EAF6FE;
        color: #108CEE;
        cursor: pointer;
    }
    .equipment-run .equipmentTittle span:last-child{
        background-color: #108CEE;
        color: #EAF6FE;
    }
    .equipment-inform{
        width: 1665px;
        height: 329px;
        border: 1px #e5e5e5 solid;
        background-color: #fff;
    }
    .EqFormList{
        padding-top: 20px;
        padding-left: 100px;
    }
    .EqForm{
        float: left;
    }
</style>
