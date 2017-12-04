<style>

</style>
<template>
	<div id="homeCalendar">
		<calendar-input
			:planDate="{
                plan1: new Date(planDate.bid_day).getDate(),
                plan2: new Date(planDate.decl_cycle).getDate(),
                plan3_start: new Date(planDate.fore_cycle_start).getDate(),
                plan3_end: new Date(planDate.fore_cycle_end).getDate(),
                plan4: new Date(planDate.cf_cycle).getDate()
		}"></calendar-input>
	</div>
</template>
<script>

import calendarInput from './calendar-plugin/calendar-input.vue';

    export default {
        name: 'homeCalendar',
	    props:['planDate'],
	    components: {
            'calendar-input':calendarInput
        }
    }
</script>