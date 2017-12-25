<script>
export default {
    name: "equipmentInstall",
    data() {
        return{
            value1: 0,
            value2: 0,
            dataPie:{
                 has_install:'',
                 declared:'',
                 tobe_install:'',
                 four_wire:'',
                 scott_wiring:'',
            }
        }
    },
    mounted(){
        // this.drawLine();
        this.equipmentInstall();
    },
    methods:{
        drawLine(){
             this.powerFrameChart.clear();
            // 基于准备好的dom，初始化echarts实例
             this.powerFrameChart.setOption(this.pieOption);
             this.powerFrameChart.hideLoading();
        },
        equipmentInstall(){
            this.powerFrameChart.showLoading();
            this.$http.post(this.$api.EQUIPMENT_INSTALL,{com_id:this.com_id}).then(res=>{
                console.log("设备安装",res);
                console.log(res.data.data);
                this.dataPie = res.data.data;
                this.value2 = this.dataPie.four_wire;
                this.value1 = this.dataPie.scott_wiring;
                this.drawLine();
            },err=>{
                this.powerFrameChart.hideLoading();
                this.$api.errcallback(err);
            }).catch(err=>{
                 this.powerFrameChart.hideLoading();
                 this.$api.errcallback(err);
            })
        }
    },
    computed:{
       com_id:function(){
         return this.$store.getters.com_id;
       },
       powerFrameChart:function(){
          return this.$echarts.init(document.getElementById('myCharts'));
       },
       pieOption:function () {
          return {
             color: ['#4fa8f9','#6ec71e','#f56e6a'],
                tooltip : {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    itemWidth:16,
                    itemHeight:16,
                    top:'60',
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
                            {value:this.dataPie.has_install, name:'已经安装'},
                            {value:this.dataPie.tobe_install, name:'等待安装'},
                            {value:this.dataPie.declared, name:'设备库存'}
                        ],
                        labelLine: {
                             normal: {
                             show: false
                             }
                        },
                        label: {
                           normal: {
                              show: false,
                         },
                     }
                    }
                ]
          }
       }
    },
    watch:{

    }
}
</script>

<template>
    <Card class="equipmentInstall">
        <h3 slot="title">设备安装概况</h3>
        <Row>
            <Col span='12'>
                <div id="myCharts" :style="{width: '100%', height: '220px'}"></div>
                <div class="indata">
            <span><i>{{dataPie.has_install}}</i></span>
            <br>
            <span><i>{{dataPie.tobe_install}}</i></span>
            <br>
            <span><i>{{dataPie.declared}}</i></span>
           </div>   
            </Col>
            <Col span='10'>
             <!-- 安装的种类 -->
              <div class="inType">
            <p class="oneType">
                三相三线
                <Slider v-model="value1"></Slider>
            </p>
            <p class="oneType">
                三相四线
                <Slider v-model="value2"></Slider>
            </p>
             <p class='num'>
               <span>三相三线：<i>{{this.dataPie.scott_wiring}}</i></span>
               <br>
               <span>三相四线：<i>{{dataPie.four_wire}}</i></span>
             </p>
            
        </div>
            </Col>
        </Row>        
        
        <!-- 安装的数据 -->
         
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
        /*position: absolute;
        top: 66px;
        right: 400px;    */    
        padding: 20px;
    }
    .inType p{
        font-size: 14px;
        /*font-family: '微软雅黑';*/
        margin-top: 10px;
    }
    .oneType {
        width: 60%;
    }
    .indata{
        position: absolute;
        top:65px;
        left:455px;
    }
    .indata span{
        margin-right: 150px;

    }
    .indata span i{
        font-style: normal;
        font-size: 16px;
    }
    .num{
        position: absolute;
        left:450px;
        top:35px;
        width:300px;
    }
    .num span{
        display: inline-block;
        margin-bottom: 25px;
    }
    .num span i{
        font-style: normal;
        font-size: 24px;
    }
</style>
