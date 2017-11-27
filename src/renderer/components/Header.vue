<script>
    import Weather from '@/components/Weather.vue'
    import FastBoot from '@/components/FastBoot'

    export default {
        name: 'mainheader',
	    data(){
          return{

          }
	    },
        mounted() {
            this.weatherData();
        },
        methods: {
            weatherData(city = '郑州') {
                this.$http.get('http://www.sojson.com/open/api/weather/json.shtml?city=' + city).then(res => {
                    this.weather.city = res.data.city;
                    this.weather.nowWeather = res.data.data.forecast[0].type;
                    this.weather.temperature = res.data.data.wendu;
                    this.weather.humidity = res.data.data.shidu;
                }, err => {
                    console.log(err)
                })
            },
	        hideFast(){
                this.$emit('hideFast')
	        }
        },
        components: {
            'weather': Weather,
            'fast-boot': FastBoot
        }
    }
</script>
<template>

	<div class="header">
		<ul class="absolute">
			<li class="top_15 icon-menu" @click="hideFast" style="cursor: pointer">
				<i class="icon iconfont icon-caidan" style="font-size: 28px!important;"></i>
			</li>
			<li class="search top_15 left_136">
				<input type="search" placeholder="请输入设备名称/设备编号/厂家名称等关键字">
			</li>
			<li class="icon-li top_15">
				<i class="icon iconfont icon-search"></i>
			</li>
			<li class="weather top_15">
				<weather></weather>
			</li>
			<li class="setting">
				<ul>
					<router-link  class="menu-icon right_243" to="message-center" tag="li"><i class="iconfont">&#xe6ff;</i></router-link>
					<li class="menu-icon right_168"><i class="iconfont">&#xe606;</i></li>
					<li class="avatar right_72">李栋</li>
					<i class="iconfont icon-xiala absolute" style="right: 30px;font-size: 14px!important;"></i>
				</ul>
			</li>
		</ul>
	</div>
</template>
<style scoped>
	.header {
		background-color: #fff;
		height: 79px;
		overflow: hidden;
		position: relative;
	}

	.header > ul {
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}

	.header li {
		position: absolute;
	}

	.header .icon-menu {
		width: 78px;
		height: 50px;
		padding-top: 6px;
		box-sizing: border-box;
		text-align: center;
		border-right: 1px solid #efefef;
	}
	.header .avatar{
		top: -10px;
		width: 45px;
		height: 45px;
		text-align: center;
		line-height: 45px;
		background-color: #EA2E2E;
		border-radius: 50%;
		color: white;
		font-size: 18px;
	}
	.icon-li {
		width: 30px;
		height: 40px;
		line-height: 40px;
		left: 565px;
		color: #999999;
	}

	.menu-icon {
		width: 25px;
		height: 25px;
	}

	.top_15 {
		top: 15px;
	}

	.left_136 {
		left: 128px;
	}

	.right_72 {
		right: 72px;
	}

	.right_168 {
		right: 142px;
	}

	.right_243 {
		right: 192px;
	}

	.header li input[type='search'] {
		width: 470px;
		height: 42px;
		border-radius: 40px;
		outline: none;
		border: none;
		background-color: #EDEDED;
		padding: 5px 10px 5px 20px;
		box-shadow: none;

	}

	.header .weather {
		left: 58%;
		width: 200px;
		height: 60px;
		color: #000;
		font-size: 14px;
	}

	.header .setting {
		top: 27px;
		right: 10px;
	}

	li.setting i {
		cursor: pointer;
		font-size: 22px !important;
	}

</style>