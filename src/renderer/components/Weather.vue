<style scoped>
    .weather-container{
        width: 265px;
        height: 60px;
        color: #000;
        font-size: 14px;
        line-height: 16px;
        top: -26px;
    }
    .weather-container .weather-data{
        width: 180px;
        top: 14px;
        left: 50px;
    }
    .weather-container div span{
        margin-right: 10px;
    }
    .weather-img{
        top: 10px;
        width: 40px;
        height: 40px;
        background: url("../assets/b1.gif") no-repeat -34px -28px;
    }
    .weather-xiala{
        top: 24px;
        left: 200px;
        transform: rotate(-90deg);
    }
</style>
<template>
    <div class="weather-container relative">
        <div class="weather-img absolute"></div>
        <div class="absolute weather-data">
            <span class="city">{{city}}&nbsp;&nbsp;{{nowWeather}}</span><br>
            <span class="temperature">{{wenduLow}}-{{wenduHigh}}</span><span class="humidity">湿度{{humidity}}</span>
        </div>
        <i class="icon iconfont icon-xiala weather-xiala absolute"></i>
    </div>
</template>
<script>
//  开发环境会跨域，设置ajax拦截
  import Mock from 'mockjs'
  Mock.mock('http://www.sojson.com/open/api/weather/json.shtml?city=郑州', 'get', {
    "date": "20171103",
    "message": "Success !",
    "status": 200,
    "city": "郑州",
    "count": 10,
    "data": {
      "shidu": "71%",
      "pm25": 59,
      "pm10": 150,
      "quality": "轻度污染",
      "wendu": "11",
      "ganmao": "儿童、老年人及心脏、呼吸系统疾病患者人群应减少长时间或高强度户外锻炼",
      "yesterday": {
        "date": "02日星期四",
        "sunrise": "06:46",
        "high": "高温 24.0℃",
        "low": "低温 10.0℃",
        "sunset": "17:32",
        "aqi": 82,
        "fx": "西风",
        "fl": "3-4级",
        "type": "晴",
        "notice": "天气干燥，请适当增加室内湿度"
      },
      "forecast": [
        {
          "date": "03日星期五",
          "sunrise": "06:47",
          "high": "高温 17.0℃",
          "low": "低温 7.0℃",
          "sunset": "17:31",
          "aqi": 94,
          "fx": "东北风",
          "fl": "3-4级",
          "type": "晴",
          "notice": "晴空万里，去沐浴阳光吧"
        },
        {
          "date": "04日星期六",
          "sunrise": "06:48",
          "high": "高温 15.0℃",
          "low": "低温 6.0℃",
          "sunset": "17:30",
          "aqi": 80,
          "fx": "东南风",
          "fl": "<3级",
          "type": "多云",
          "notice": "绵绵的云朵，形状千变万化"
        },
        {
          "date": "05日星期日",
          "sunrise": "06:48",
          "high": "高温 17.0℃",
          "low": "低温 6.0℃",
          "sunset": "17:29",
          "aqi": 87,
          "fx": "南风",
          "fl": "<3级",
          "type": "多云",
          "notice": "悠悠的云里有淡淡的诗"
        },
        {
          "date": "06日星期一",
          "sunrise": "06:49",
          "high": "高温 21.0℃",
          "low": "低温 9.0℃",
          "sunset": "17:28",
          "aqi": 96,
          "fx": "南风",
          "fl": "<3级",
          "type": "多云",
          "notice": "绵绵的云朵，形状千变万化"
        },
        {
          "date": "07日星期二",
          "sunrise": "06:50",
          "high": "高温 23.0℃",
          "low": "低温 10.0℃",
          "sunset": "17:27",
          "aqi": 98,
          "fx": "西北风",
          "fl": "3-4级",
          "type": "晴",
          "notice": "天气干燥，请适当增加室内湿度"
        }
      ]
    }
  })


  export default {
      name:'weather',
      data(){
        return{
          city:'',
          nowWeather:'',
          temperature:'',
          humidity:'',
          wenduHigh:'',
          wenduLow:''
        }
      },
      mounted(){
        this.getWeatherData();
      },
      methods:{
        getWeatherData(city='郑州'){
          this.$http.get('http://www.sojson.com/open/api/weather/json.shtml?city='+city).then(res=>{
            this.city = res.data.city;
            this.nowWeather = res.data.data.forecast[0].type;
            this.temperature = res.data.data.wendu;
            this.humidity = res.data.data.shidu;
            this.wenduHigh = res.data.data.forecast[0].high.split(' ')[1];
            this.wenduLow = res.data.data.forecast[0].low.split(' ')[1];
          },err=>{
            console.log(err)
          })
        }
      }
    }
</script>