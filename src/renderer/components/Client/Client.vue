<script>
    import ClientSidebar from './ClientSidebar.vue'
    import ClientHeader from './ClientHeader.vue'

    export default {
        name: 'client',
        data() {
            return {}
        },
        components: {
            'client-sidebar': ClientSidebar,
            'client-header': ClientHeader
        }
    }
</script>
<template>
	<Row>
		<Col span="3" class='client_sidebar'>
		<client-sidebar></client-sidebar>
		</Col>
		<Col span="21" class='mg_178'>
		<client-header></client-header>
		<router-view></router-view>
		</Col>

	</Row>
</template>
<style scoped>
@media (min-width: 1365px) and (max-width: 1919px) {
    .client_sidebar {
    }
    .ivu-col-span-3{
        width:12.5%;
        height:936px;
    }
}
</style>