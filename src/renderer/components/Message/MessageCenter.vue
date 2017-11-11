<script>
	import MessageSidebar from './MessageSidebar.vue'
    export default {
        name:'messagecenter',
        data(){
            return{

            }
        },
	    components:{
            'message-sidebar':MessageSidebar
	    }
    }
</script>
<template>
	<div>
		<message-sidebar></message-sidebar>
	</div>
</template>
<style>

</style>