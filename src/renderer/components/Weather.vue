<style scoped>
	.weather-container {
		width: 265px;
		height: 60px;
		color: #000;
		font-size: 12px;
		line-height: 16px;
		top: -10px;

	}

	.weather-container .weather-data {
		width: 180px;
		line-height: 18px;
		top: 14px;
		left: 50px;
	}

	.weather-container div span {
		margin-right: 10px;
		display: inline-block;
		vertical-align: middle;

	}

	.weather-img{
		top: 17px;
		width: 36px;
		height: 36px;
		background-image: url("../assets/天气.png");
		background-repeat: no-repeat;
	}
	.weather-qing {
		/*晴  -6px  多云 -75px 阴 -144 小雨-213 中雨-282 大雨-351 大暴雨-420 小雪-489 中雪 -558 大雪 -627*/
		background-position: -6px -13px;
	}
	.weather-duoyun {
		/*晴  -6px  多云 -75px 阴 -144 小雨-213 中雨-282 大雨-351 大暴雨-420 小雪-489 中雪 -558 大雪 -627*/
		background-position: -75px -13px;
	}
	.weather-yin {
		/*晴  -6px  多云 -75px 阴 -144 小雨-213 中雨-282 大雨-351 大暴雨-420 小雪-489 中雪 -558 大雪 -627*/
		background-position: -144px -13px;
	}
	.weather-xiaoyu {
		/*晴  -6px  多云 -75px 阴 -144 小雨-213 中雨-282 大雨-351 大暴雨-420 小雪-489 中雪 -558 大雪 -627*/
		background-position: -213px -13px;
	}
	.weather-zhongyu {
		/*晴  -6px  多云 -75px 阴 -144 小雨-213 中雨-282 大雨-351 大暴雨-420 小雪-489 中雪 -558 大雪 -627*/
		background-position: -282px -13px;
	}
	.weather-dayu {
		/*晴  -6px  多云 -75px 阴 -144 小雨-213 中雨-282 大雨-351 大暴雨-420 小雪-489 中雪 -558 大雪 -627*/
		background-position: -351px -13px;
	}
	.weather-dabaoyu {
		/*晴  -6px  多云 -75px 阴 -144 小雨-213 中雨-282 大雨-351 大暴雨-420 小雪-489 中雪 -558 大雪 -627*/
		background-position: -420px -13px;
	}
	.weather-xiaoxue {
		/*晴  -6px  多云 -75px 阴 -144 小雨-213 中雨-282 大雨-351 大暴雨-420 小雪-489 中雪 -558 大雪 -627*/
		background-position: -489px -13px;
	}
	.weather-zhongxue {
		/*晴  -6px  多云 -75px 阴 -144 小雨-213 中雨-282 大雨-351 大暴雨-420 小雪-489 中雪 -558 大雪 -627*/
		background-position: -558px -13px;
	}
	.weather-daxue {
		/*晴  -6px  多云 -75px 阴 -144 小雨-213 中雨-282 大雨-351 大暴雨-420 小雪-489 中雪 -558 大雪 -627*/
		background-position: -627px -13px;
	}

	.weather-xiala {
		top: 24px;
		left: 193px;
		font-size: 12px!important;
		transform: rotate(-90deg);
	}
</style>
<template>
	<div class="weather-container relative">
		<div v-if="nowWeather === '晴'" class="weather-img weather-qing absolute"></div>
		<div v-else-if="nowWeather === '多云'" class="weather-img weather-duoyun absolute"></div>
		<div v-else-if="nowWeather === '阴'" class="weather-img weather-yin absolute"></div>
		<div v-else-if="nowWeather === '小雨'" class="weather-img weather-xiaoyu absolute"></div>
		<div v-else-if="nowWeather === '中雨'" class="weather-img weather-zhongyu absolute"></div>
		<div v-else-if="nowWeather === '大雨'" class="weather-img weather-dayu absolute"></div>
		<div v-else-if="nowWeather === '大暴雨'" class="weather-img weather-dabaoyu absolute"></div>
		<div v-else-if="nowWeather === '小雪'" class="weather-img weather-xiaoxue absolute"></div>
		<div v-else-if="nowWeather === '中雪'" class="weather-img weather-zhongxue absolute"></div>
		<div v-else-if="nowWeather === '大雪'" class="weather-img weather-daxue absolute"></div>

		<div class="absolute weather-data">
			<span class="city">{{city}}&nbsp;&nbsp;{{nowWeather}}</span><br>
			<span class="temperature">{{wenduLow}}~{{wenduHigh}}</span><span class="humidity">湿度{{humidity}}</span>
		</div>
		<i class="iconfont icon-xiala weather-xiala absolute"></i>
	</div>
</template>
<script>
    //  开发环境会跨域，设置ajax拦截
    import Mock from 'mockjs'

//    Mock.mock('http://www.sojson.com/open/api/weather/json.shtml?city=郑州', 'get', {
//        "date": "20171117",
//        "message": "Success !",
//        "status": 200,
//        "city": "郑州",
//        "count": 14,
//        "data": {
//            "shidu": "66%",
//            "pm25": 146.0,
//            "pm10": 207.0,
//            "quality": "中度污染",
//            "wendu": "10",
//            "ganmao": "儿童、老年人及心脏、呼吸系统疾病患者人群应减少长时间或高强度户外锻炼，一般人群适量减少户外运动",
//            "yesterday": {
//                "date": "16日星期四",
//                "sunrise": "06:59",
//                "high": "高温 14.0℃",
//                "low": "低温 9.0℃",
//                "sunset": "17:20",
//                "aqi": 212.0,
//                "fx": "东风",
//                "fl": "<3级",
//                "type": "阴",
//                "notice": "阴天是彩虹的前期之景"
//            },
//            "forecast": [{
//                "date": "17日星期五",
//                "sunrise": "07:00",
//                "high": "高温 11.0℃",
//                "low": "低温 0.0℃",
//                "sunset": "17:20",
//                "aqi": 177.0,
//                "fx": "无持续风向",
//                "fl": "4-5级",
//                "type": "阴",
//                "notice": "阴天是彩虹的前期之景"
//            }, {
//                "date": "18日星期六",
//                "sunrise": "07:01",
//                "high": "高温 6.0℃",
//                "low": "低温 0.0℃",
//                "sunset": "17:19",
//                "aqi": 68.0,
//                "fx": "东北风",
//                "fl": "3-4级",
//                "type": "多云",
//                "notice": "悠悠的云里有淡淡的诗"
//            }, {
//                "date": "19日星期日",
//                "sunrise": "07:02",
//                "high": "高温 9.0℃",
//                "low": "低温 2.0℃",
//                "sunset": "17:19",
//                "aqi": 74.0,
//                "fx": "南风",
//                "fl": "<3级",
//                "type": "多云",
//                "notice": "今日多云，骑上单车去看看世界吧"
//            }, {
//                "date": "20日星期一",
//                "sunrise": "07:03",
//                "high": "高温 14.0℃",
//                "low": "低温 3.0℃",
//                "sunset": "17:18",
//                "aqi": 74.0,
//                "fx": "西风",
//                "fl": "<3级",
//                "type": "晴",
//                "notice": "晴空万里，去沐浴阳光吧"
//            }, {
//                "date": "21日星期二",
//                "sunrise": "07:04",
//                "high": "高温 15.0℃",
//                "low": "低温 3.0℃",
//                "sunset": "17:18",
//                "aqi": 88.0,
//                "fx": "西风",
//                "fl": "3-4级",
//                "type": "多云",
//                "notice": "今日多云，骑上单车去看看世界吧"
//            }]
//        }
//    })


    export default {
        name: 'weather',
        data() {
            return {
                city: '',
                nowWeather: '',
                temperature: '',
                humidity: '',
                wenduHigh: '',
                wenduLow: ''
            }
        },
        mounted() {
            this.getWeatherData();
        },
        methods: {
            getWeatherData(city = '郑州') {
                this.$http.get('http://www.sojson.com/open/api/weather/json.shtml?city=' + city).then(res => {
                    this.city = res.data.city;
                    this.nowWeather = res.data.data.forecast[1].type;
                    this.temperature = res.data.data.wendu;
                    this.humidity = res.data.data.shidu;
                    this.wenduHigh = res.data.data.forecast[1].high.split(' ')[1];
                    this.wenduLow = res.data.data.forecast[1].low.split(' ')[1];
                }, err => {
                    console.log(err)
                })
            }
        }
    }
</script>