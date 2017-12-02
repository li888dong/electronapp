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
                color: ['#f57e6a','#6ec71e','#0089f0'],
                tooltip : {
                    trigger: 'item'
                },
                legend: {
                    orient: 'horizontal',
                    left: 'left',
                    itemWidth:16,
                    itemHeight:16,
                    data: ['已经安装','等待安装','设备库存']
                },
                grid: {
                    left: '40',
                    right: '20',
                    bottom: '40',
                    top: '40',
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '66%',
                        center: ['20%', '48%'],
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
    <Card class="equipmentInstall">
        <p slot="title">设备安装概况</p>
        <Row>
            <Col>
                <div id="myCharts" :style="{width: '100%', height: '220px'}"></div>
            </Col>
        </Row>        
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
    </Card>
</template>

<style scoped>
    .equipmentInstall{
        height: 290px;
        border: 1px #e5e5e5 solid;
        position: relative;
        overflow: hidden;
    }
    .inType{
        height: 136px;
        position: absolute;
        top: 66px;
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
