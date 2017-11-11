<script>
	import ClientSidebar from './ClientSidebar.vue'
	import ClientHeader from './ClientHeader.vue'
	export default {
	    name:'client',
		data(){
	        return{

	        }
		},
		components:{
		    'client-sidebar':ClientSidebar,
			'client-header':ClientHeader
		}
	}
</script>
<template>
	<div>
		<client-sidebar></client-sidebar>
		<client-header></client-header>
		<router-view></router-view>
	</div>
</template>
<style>

</style>