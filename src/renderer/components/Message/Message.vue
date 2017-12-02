<script>
	export default {

	}
</script>
<template>
	<div class="layout">
		<Row>
			<Col span="3" class="sidebar-left">
			<Menu active-name="1"  width="auto">
				<h3 class="title">消息中心</h3>
				<MenuItem name="1" @click.native="$router.push('/message-center/')">
						<span class="layout-text">系统消息</span>
				</MenuItem>
				<MenuItem name="2"  @click.native="$router.push('/message-center/')">
					<span class="layout-text">公司消息</span>
				</MenuItem>
				<MenuItem name="3"  @click.native="$router.push('/message-send')">
						<span class="layout-text">发送消息</span>
				</MenuItem>
			</Menu>
			</Col>
			<Col span="21">
			<div class="layout-content">
                <router-view></router-view>
			 </div>
			</Col>
		</Row>
	</div>
</template>
<style scoped>
	a{
		color:black;
	}
	.layout{
		height:945px;
		background: #f5f7f9;
		position: relative;
		border-radius: 4px;
		overflow: hidden;
	}
	.layout-content{
		min-height: 200px;
		overflow: hidden;
	}

	.layout-content-main{
		padding: 10px;
	}
	.layout-ceiling-main a{
		color: #9ba7b5;
	}
	.layout-hide-text .layout-text{
		display: none;
	}
	.layout .ivu-col{
		transition: width .2s ease-in-out;
		height:945px;
		border:none;
	}
	.ivu-col ul{
		height:100%;
        font-size:14px;
		border:none;
	}
	.ivu-col ul li{
       height:52px;
		text-align: center;
	}
	.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
		border-top: 1px solid #e5e5e5;
		border-bottom: 1px solid #e5e5e5;
		border-left: 5px solid #108CEE;
		border-right:none;
	}
	.title{
		background-color:#fff;
		height:52px;
		line-height:52px;
		text-align: center;
		font-size:16px;
		display: block;
	}
	.ivu-menu-vertical.ivu-menu-light:after{
		width:0;
	}
</style>