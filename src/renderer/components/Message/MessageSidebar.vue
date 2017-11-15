<script>
	export default {
	    name:'messagesidebar',

		data(){
	        return{
				nowPage:'xtxx'
	        }
		},
		methods:{
		    changePage(page){
				this.nowPage = page
			    this.$emit('nowPage',page)
		    }
		}
	}
</script>
<template>
	<div class="message-sidebar">
		<dl>
			<dt>消息中心</dt>
			<dd v-bind:class="{selected:nowPage==='xtxx'}" @click="changePage('xtxx')">系统消息</dd>
			<dd v-bind:class="{selected:nowPage==='gsxx'}" @click="changePage('gsxx')">公司消息</dd>
			<dd v-bind:class="{selected:nowPage==='fsxx'}" @click="changePage('fsxx')">发消息</dd>
		</dl>
	</div>
</template>
<style scoped>
	.message-sidebar{
		width: 160px;
		height: 920px;
		background-color: #fff;
		float: left;
		border: 1px solid #e5e5e5;
	}
	dl,dt,dd{
		margin: 0;
		padding: 0;
	}

	dt,dd{
		width: 156px;
		height: 52px;
		line-height: 52px;
		text-align: center;
	}
	dt{
		font-size: 16px;
	}
	dd{
		font-size: 14px;
		cursor: pointer;
	}
	dd.selected{
		border-top: 1px solid #e5e5e5;
		border-bottom: 1px solid #e5e5e5;
		border-left: 5px solid #108CEE;
	}
</style>