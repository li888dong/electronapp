<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
    import Cookies from 'js-cookie';
    import {ipcRenderer} from 'electron';
    import Main from './components/MainPage'
	import Login from './components/login.vue'
    export default {
        name: 'smartpower',
	    data(){
            return{

            }
	    },
	    mounted(){

	    },
        computed:{

        },
	    watch:{
            "$route": function () {
            	this.$store.dispatch('setSearchKey','');
            	this.$store.dispatch('setTermLinalKey','');
	            console.log('路由变化');
	            if (!this.$store.getters.access_token){
	                this.$router.push('login')
	            }
            }
	    },
        components: {
            'Main':Main,
	        'Login':Login
        }
    }
</script>

<style>

</style>
