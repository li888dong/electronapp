<template>
    <div id="main" class="app-main" @click='companybol'>
        <router-view></router-view>
    </div>
</template>

<script>
	import Vue from 'vue';
	import axios from 'axios';
	import {app,ipcRenderer} from 'electron';
    export default {
        data () {
            return {
                theme: this.$store.state.app.themeColor
            };
        },
        beforeMount () {
			let access_token = ipcRenderer.send('getToken');

			if (!access_token){
				axios.post('http://39.106.106.150/oauth/token',{
					grant_type:'client_credentials',
					client_id:1,
					client_secret:'IRwipTloBj54dYeznekQt2shYHaTrmeIIRXq0bQb',
					scope:''

				}).then(res=>{
					console.log('令牌请求成功',res);
					ipcRenderer.send('setToken',res.data.access_token);
					Vue.prototype.$http = axios.create({
						headers:{
							common:{
								Authorization:res.data.access_token
							}
						},
						baseURL:"http://39.106.106.150/",
						timeout:15000
					});
				},err=>{
					ipcRenderer.send('login-failed');
					console.log(err)
				});
			}else {
				Vue.prototype.$http = axios.create({
					headers:{
						common:{
							Authorization:access_token
						}
					},
					baseURL:"http://39.106.106.150/",
					timeout:15000
				});
			}
			ipcRenderer.on('quit',function () {
				localStorage.removeItem('pageOpenedList');
				localStorage.removeItem('fullname');
				localStorage.removeItem('currentPageName');
				localStorage.removeItem('cachePage');
			})
        },
        beforeDestroy () {

        },
        methods: {
           companybol(){
               this.$store.dispatch('setCompanbol',false)
           },
        }
    };
</script>

<style lang="less">
    @import "../../static/resetIview/reset";
</style>
<style>
html,body{
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    overflow: hidden;
}
.app-main{
    width: 100%;
    height: 100%;
}
</style>
