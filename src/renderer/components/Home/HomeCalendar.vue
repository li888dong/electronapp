<style>

</style>
<template>
	<div id="homeCalendar">
		<calendar-input
			:planDate="{
                plan1: new Date('2017-12-5').getDate(),
                plan2: new Date('2017-12-10').getDate(),
                plan3: new Date('2017-12-15').getDate(),
                plan4: new Date('2017-12-20').getDate()
		}"></calendar-input>
	</div>
</template>
<script>

import calendarInput from './calendar-plugin/calendar-input.vue';

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