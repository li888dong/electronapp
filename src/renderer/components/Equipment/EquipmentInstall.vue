<script>
export default {
    name: "equipmentInstall",
    data() {
        return{

        }
    },
    mounted(){
        this.drawLine();
    },
    methods:{
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
        }
    }
}
</script>

<template>
<div class="equipmentInstall">
    <div id="myCharts" :style="{width: '780px', height: '260px'}"></div>
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

</template>

<style scoped>
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
</style>
