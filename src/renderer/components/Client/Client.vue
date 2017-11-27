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
	<Row>
		<Col span="3">
			<client-sidebar></client-sidebar>
		</Col>
		<Col span="21">
			<client-header></client-header>
			<router-view></router-view>
		</Col>

	</Row>
</template>
<style>

</style>