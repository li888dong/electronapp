<script>
import {ipcRenderer} from 'electron'
export default {
    name: "equipmentInstall",
    data() {
        return{
            dataPie:{
                 has_install:0,
                 declared:0,
                 tobe_install:0,
                 four_wire:0,
                 scott_wiring:0,
            },
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
                if(res.data.status === '1'){
                  console.log(res.data.data);
                  this.dataPie = res.data.data;
                    this.drawLine();
                }else{
                   this.dataPie = {has_install:0,declared:0,tobe_install:0,four_wire:0,scott_wiring:0};
                }
                
                
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
        totalWidth: function () {
                let screenWidth = ipcRenderer.sendSync('width-change', 'change');
                let totalWidth = 0;
                console.log(screenWidth);
                if (screenWidth < 1920) {
                    totalWidth = 300;
                } else {
                    totalWidth = 436;
                }
                return totalWidth;
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
                <br>
                <span class="fat"><span class="pro-bar" v-bind:style="{width: (dataPie.scott_wiring/dataPie.has_install)*totalWidth+'PX'}"></span></span>
                <!-- <Slider v-model="value1" disabled></Slider> -->
            </p>
            <p class="oneType">
                三相四线
                 <br>
                <span class="fat"><span class="pro-bar" v-bind:style="{width: (dataPie.four_wire/dataPie.has_install)*totalWidth+'PX'}"></span></span>
                <!-- <Slider v-model="value2" disabled></Slider> -->
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
        width: 436px;
    }
    .oneType span{
        display: inline-block;
        height: 32px;
        
    }
    .oneType .fat{
      background-color: #e9eaec;
      width: 100%;
    }
    .oneType .pro-bar{
       background-color: #57a3f3;
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
        left:500px;
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
    @media (min-width: 1365px) and (max-width: 1919px) {
        .oneType{
           width:300px;
        }
      .num{
        position: absolute;
        left:450px;
        top:35px;
        width:300px;
    }
    }
</style>
