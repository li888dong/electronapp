<style>
	.calendar-input-container #calendar {
		top: -36px!important;
		left: -1px!important;
		width: 243px!important;
		height: 283px!important;
		border: none!important;
	}

	.calendar-input-container #calendar .week{
		color: #999!important;
	}
	.calendar-input-container #calendar .weekend{
		color: #999;
	}
	.calendar-input-container #calendar .week .weekend{
		color: #999;
	}
	.calendar-input-container #calendar .days span:not(.unselect){
		color:#5a5a5a!important;
		font-weight:bold;
	}
	.calendar-input-container #calendar .days span.select{
		border-radius: 50%!important;
		background-color: #F78181!important;
		color: white!important;

	}
	.calendar-input-container #calendar .days span{
		height: 20px!important;
		width: 20px!important;
		margin: 0 6.5px!important;
	}

	.calendar-input-container #calendar .days span:hover{
		border-radius: 50%!important;
		background-color: #F78181!important;
		color: white!important;
		transition: none;
	}
	.calendar-input-container input{
		display: none!important;
	}
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
//            (function () {
//                laydate.render({
//                    elem:"#homeCalendar",
//                    position: 'static',
//                    width:'200px'
//                });
//            })()
        },
        data(){
            return{

            }
        },components: {
            'calendar-input':calendarInput
        }
    }
</script>