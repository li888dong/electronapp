<style>
	.calendar-input-container #calendar {
		left: 13px!important;
		width: 264px!important;
		height: 180px!important;
		box-sizing: border-box;
	}
</style>
<template>
	<div id="homeCalendar">
		<calendar-input></calendar-input>
	</div>
</template>
<script>
//    import '../../../static/laydate/theme/default/laydate.css'
//    import '../../../static/laydate/laydate'
import calendarInput from '../../../node_modules/calendar-plugin/calendar-input.vue';

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