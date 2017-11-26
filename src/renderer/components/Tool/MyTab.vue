<script>
	export default {
	    name:'my-tab',
		props:['type'],
		data(){
	        return{
				tabType:''
	        }
		},
		mounted(){
            this.tabType = this.type;
		},
		watch:{
			type:function (newType) {
				this.tabType = newType
            }
		},
		methods:{
		    run(){

		        this.$emit('changeSelect');
                this.tabType = this.type;
			    console.log(this.tabType);
		    }
		}
	}
</script>
<template>
	<span class="my-tab" :class="'my-tab-'+tabType" @click="run">
		<slot></slot>
	</span>
</template>
<style>

</style>