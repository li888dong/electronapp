<script>
export default {
    name: 'equipment',
    data() {
        return{
            symbolSize: 10,
            data: [['01:30', 5], ['03:00', 10], ['06:00', 60], ['09:00', 10], ['12:00', 40]],
            timeLine: ['00:00','01:30','03:00','04:30','06:00','07:30','09:00','10:30','12:00','13:30','15:00','16:30','18:00','19:30','21:00','22:30']
        }
    },
    mounted(){
      this.drawLine();
      this.drawLine2();
      this.drawLine3();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myCharts'))
        // 绘制图表
        myChart.setOption({
            color: ['#22c','#ccc','#a33'],
            title: { 
                text: '设备安装概况',
                x: "left",
           },
            tooltip : {
                trigger: 'item'
            },
            legend: {
                orient: 'horizontal',
                left: 'right',
                data: ['已经安装','等待安装','设备库存']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['18%', '52%'],
                    data:[
                        {value:335, name:'等待安装'},
                        {value:100, name:'设备库存'},
                        {value:1548, name:'已经安装'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });
      },
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
      },
    }
  }

</script>

<template>
<div class="equipment-box">
    <div class="equipment-top">
        <!-- 设备安装情况 -->
        <div class="equipmentInstall">
            <div id="myCharts" :style="{width: '780px', height: '260px'}">
            </div>
            <!-- 安装的种类 -->
            <div class="inType">
                <p class="oneType">
                    三相三线
                    <i></i>
                </p>
                <p>
                    三相四丝
                    <i></i>
                </p>
                
            </div>
            <!-- 安装的数据 -->
            <div class="indata">
                <span>已安装: <i>95,145.61</i></span>
                <span>待安装: <i>6,145.61</i></span>
                <span>已申报: <i>-5,145.61</i></span>
            </div>
        </div>
        <!-- 设备库存情况 -->
        <div class="equipment-stock">
            设备库存情况
        </div>
        <!-- 设备其他情况 -->
        <div class="equipment-other">

        </div>
    </div>
    <!-- 设备运行情况 -->
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
    <!-- 设备安装申请表 -->
    <div class="equipmentInform">
        <table>
            <thead>设备安装申请</thead>
            <tbody>
                <tr>
                    <th> <input type="checkbox" name="" id="" class="check"> 申报主题单位</th>
                    <th>申报人</th>
                    <th>联系电话</th>
                    <th>申报日期</th>
                    <th>申报安装日期</th>
                    <th>申报安装数量</th>
                    <th>状态</th>
                    <th>审核人</th>
                    <th>施工人</th>
                    <th>操作</th>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>


<style scoped>
    .equipment-box{
        width: 1700px;
        padding-left: 18px;
        padding-top: 15px;
        background-color: #E8ECF0;
        overflow: hidden;
    }
    .equipment-top{
        height: 290px;
        margin-bottom: 10px;
    }
    .equipmentInstall{
        width: 820px;
        height: 290px;
        border: 1px #e5e5e5 solid;
        float: left;
        background-color: #fff;
        margin-right: 18px;
        padding: 20px;
        position: relative;
    }
    .inType{
        width: 460px;
        height: 136px;
        position: absolute;
        top: 46px;
        right: 40px;        
        padding: 10px;
    }
    .inType p{
        font-size: 14px;
        font-family: '微软雅黑';
        margin-top: 10px;
    }
    .inType i{
        display: block;
        height: 34px;
        width: 300px;
        background-color: skyblue;
    }
    .indata{
        position: absolute;
        bottom: 10px;
        left: 40px;
    }
    .indata span{
        margin-right: 150px;

    }
    .indata span i{
        font-style: normal;
        font-size: 24px;
    }
    .equipment-stock{
        width: 405px;
        height: 290px;
        border: 1px #e5e5e5 solid;
        background-color: #fff;        
        margin-right: 18px;
        float: left;
    }
    .equipment-other{
        width: 405px;
        height: 290px;
        border: 1px #e5e5e5 solid;
        background-color: #fff;
        float: left;
    }
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

    tabble, thead, tbody, tr, th, td{
        margin: 0;
        padding: 0;
    }
    .equipmentInform{
        background-color: #fff;
        padding: 20px;
    }
    .equipmentInform thead{
        font-size: 16px;
        font-family: '微软雅黑'
    }
    .equipmentInform tr{
        text-align: center;        
    }
    .equipmentInform th{
        display: inline-block;
        background-color: #F6F7FB;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 20px;
        padding-right: 20px;
        margin-right: 60px;
    }
    .equipmentInform .check{
        list-style: none;
        width: 16px;
        height: 16px;
        vertical-align:middle; 
    }
</style>
