<script>
    import Weather from '@/components/Weather.vue'
    import FastBoot from '@/components/FastBoot'
    import {ipcRenderer, shell} from 'electron';

    export default {
        name: 'mainheader',
        data() {
            return {
                logout: false,
                bol:false
            }
        },
        mounted() {
        },
        computed: {
            fullname:function () {
	            return this.$store.getters.fullname
            }
        },
        methods: {
            toggleFast() {
                this.$store.dispatch('setFastboot');
            },
            out() {
                this.$router.push('/login');
                ipcRenderer.send('login-failed');
            },
            toggleMainSidebar(){
            	 if(this.$store.getters.mainsidebar === true){
            	 	this.$store.dispatch('setMainSidebar',false);
            	 }else{
            	 	this.$store.dispatch('setMainSidebar',true);
            	 }
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
			<li class="top_15 icon-menu fast_menu" @click="toggleFast" style="cursor: pointer">
				<i class="icon iconfont icon-caidan" style="font-size: 28px!important;"></i>
			</li>
			<li class="top_15 main_menu icon-menu" @click="toggleMainSidebar()" style="cursor: pointer">
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
					<!--<router-link  class="menu-icon right_243" to="message-center" tag="li"><i class="iconfont">&#xe6ff;</i></router-link>-->
					<!--<li class="menu-icon right_168"><i class="iconfont">&#xe606;</i></li>-->
					<li class="avatar right_72">{{fullname}}</li>
					<i class="iconfont icon-xiala absolute" :class="{rotate90:!logout}"
					   style="right: 30px;font-size: 14px!important;" @click="logout = !logout">

					</i>
					<span class="logout" v-if="logout" @click="out">退出登录</span>
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

	.header .avatar {
		top: -10px;
		width: 48px;
		height: 48px;
		text-align: center;
		line-height: 48px;
		background-color: #EA2E2E;
		border-radius: 50%;
		color: white;
		white-space: nowrap;
		word-wrap: normal;
		font-size: 12px;
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

	.logout {
		position: absolute;
		top: 20px;
		right: 0;
		width: 56px;
		background-color: #fff;
		cursor: pointer;
	}

	.logout:hover {
		opacity: 0.8;
	}

	.rotate90 {
		transform: rotate(-90deg);
	}
	.main_menu{
		 display: none;
	}
		@media (min-width: 1365px) and (max-width: 1919px){
		.main_menu{
            display: block;
        }
        .fast_menu{
        	display: none;
        }
        .header{
        	position: fixed;
        	width: 100%;
        	z-index: 999;
        }
	}
</style>