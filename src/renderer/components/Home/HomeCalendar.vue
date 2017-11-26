<style>

</style>
<template>
	<div id="homeCalendar">
		<calendar-input></calendar-input>
	</div>
</template>
<script>

import calendarInput from '../../../../node_modules/calendar-plugin/calendar-input.vue';

    export default {
        name: 'homeCalendar',
	    mounted(){
        },
        data(){
            return{

            }
        },components: {
            'calendar-input':calendarInput
        }
    }
</script>