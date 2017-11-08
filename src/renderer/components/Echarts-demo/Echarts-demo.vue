<template>
    <div>
        <div id="myCharts" :style="{width: '500px', height: '400px'}">

        </div>

        <button @click="backHome()">回到主页</button>
    </div>

</template>

<script>

  export default {
    name: 'echarts-demo',
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myCharts'))
        // 绘制图表
        myChart.setOption({
          title: { text: '在Vue中使用echarts' },
          tooltip: {},
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      },
      backHome(){
        this.$router.push('/home')
      }
    }
  }
</script>

<style>
    #myCharts{
        margin: 0 auto;
    }
</style>
