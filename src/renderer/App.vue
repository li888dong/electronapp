<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
    import Cookies from 'js-cookie';
    import {ipcRenderer} from 'electron';
    import Main from './components/Main'
	import Login from './components/login.vue'
    export default {
        name: 'smartpower',
	    data(){
            return{

            }
	    },
	    mounted(){
	      if (localStorage.getItem('isLogin')!=='success'){
	          this.$router.push('login')
	      }
	    },
        computed:{
            login() {
                return localStorage.getItem('isLogin')
//                return this.$store.getters.login
            }
        },
	    methods:{

	    },
        components: {
            'Main':Main,
	        'Login':Login
        }
    }
</script>

<style>

</style>
