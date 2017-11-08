<script>
    import Weather from '@/components/Weather.vue'
    import {ipcRenderer} from 'electron';

    export default {
        name: 'mainheader',
        mounted() {
            this.weatherData();
        },
        methods: {
//            用以关闭应用
            closeApp() {
                console.log(ipcRenderer);
                ipcRenderer.send('window-all-closed');
            },
//            用以关闭应用
            hideApp() {
                console.log(ipcRenderer);
                ipcRenderer.send('hide-window');
            },
            weatherData(city = '郑州') {
                this.$http.get('http://www.sojson.com/open/api/weather/json.shtml?city=' + city).then(res => {
                    this.weather.city = res.data.city;
                    this.weather.nowWeather = res.data.data.forecast[0].type;
                    this.weather.temperature = res.data.data.wendu;
                    this.weather.humidity = res.data.data.shidu;
                }, err => {
                    console.log(err)
                })
            }
        },
        components: {
            'weather': Weather
        }
    }
</script>
<template>

	<div class="header fixed height_99">
		<ul class="absolute">
			<li class="top_40 icon-menu">
				<i class="icon iconfont icon-liebiao"></i>
			</li>
			<li class="search top_40 left_136">
				<input type="search" placeholder="请输入设备名称/设备编号/厂家名称等关键字">
			</li>
			<li class="icon-li left_582 top_40">
				<i class="icon iconfont icon-search"></i>
			</li>
			<li class="weather top_40">
				<weather></weather>
			</li>
			<li class="setting">
				<ul>
					<li class="menu-icon right_316"><i class="iconfont">&#xe6ff;</i></li>
					<li class="menu-icon right_243"><i class="iconfont">&#xe606;</i></li>
					<li class="menu-icon right_168"><i class="iconfont">&#xe607;</i></li>
					<li class="menu-icon right_72"><i class="iconfont">&#xe606;</i></li>
					<li class="hideBtn iconfont" @click="hideApp()">&#xe601;</li>
					<li class="right_29 closeBtn iconfont" @click="closeApp()">&#xe664;</li>
				</ul>
			</li>
		</ul>
	</div>
</template>
<style scoped>
	.header {
		background-color: #fff;
		width: 90%;
		z-index: 1000;
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
		width: 88px;
		height: 50px;
		padding-top: 12px;
		box-sizing: border-box;
		text-align: center;
		border-right: 1px solid #efefef;
	}

	.icon-li {
		width: 30px;
		height: 40px;
		line-height: 40px;
	}

	.menu-icon {
		width: 25px;
		height: 25px;
	}

	.top_40 {
		top: 40px;
	}

	.left_47 {
		left: 47px;
	}

	.left_136 {
		left: 136px;
	}

	.left_582 {
		left: 582px;
	}

	.right_29 {
		right: 29px;
	}

	.right_72 {
		right: 72px;
	}

	.right_168 {
		right: 168px;
	}

	.right_243 {
		right: 243px;
	}

	.right_316 {
		right: 316px;
	}

	.header li input[type='search'] {
		width: 470px;
		height: 42px;
		border-radius: 40px;
		outline: none;
		border: none;
		background-color: #ededed;
		padding: 5px 10px 5px 20px;
		box-shadow: none;
	}

	.header .weather {
		left: 990px;
		width: 200px;
		height: 60px;
		color: #000;
		font-size: 14px;
	}

	.header .setting {
		top: 45px;
		right: 0;
	}

	li.setting i {
		cursor: pointer;
		font-size: 22px !important;
	}

	.closeBtn {
		top: -50px;
		cursor: pointer;
		font-size: 26px;
	}

	.hideBtn {
		top: -50px;
		right: 65px;
		cursor: pointer;
		font-size: 26px;
	}
</style>