<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>Essential Links</h2>
		<ul>
			<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
			<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
			<li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
			<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
			<br>
			<li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
		</ul>
		<h2>Ecosystem</h2>
		<ul>
			<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
			<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
			<li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
			<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
		</ul>
		<div class="App-viz" ref='domViz' id="content">
			物可视报表将要被画在这里
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
//	import Cookie from 'js-cookie'
	import {ipcRenderer,shell} from 'electron';
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		mounted: function () {
			const containerElement = document.getElementById('content');
			axios({
				method: 'post',
				url: 'http://localhost:8080/tokens',
				data:{ttl:180}
			}).then(res => {
				console.log('物可视token',res)
//				Cookie.set('x-bce-iot-viz-token',res.data.token);
				ipcRenderer.send('set-cookie',res.data.token);
				const bdIotVizPlayer = window.BDIotVizPlayer;
				bdIotVizPlayer({
					containerElement,
					dashboardId: '5a4f1a174418bb0380b5f450'
				});
			}, err => {
				console.log(err)
			})

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1, h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}

	.App-viz {
		width: 800px;
		height: 400px;
		margin: auto;
	}
</style>
