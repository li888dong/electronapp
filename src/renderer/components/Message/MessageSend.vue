<script>
	export default {

		data(){
	        return{
			    clientList:['河南众企售电有限公司','河南众企售电有限公司','河南众企售电有限公司'],
				businessList:['河南众企售电有限公司','河南众企售电有限公司','河南众企售电有限公司'],
                theme2: 'light',
            }
		},
		methods:{

		}
	}
</script>
<template>
	<div class="message-container">
		<panel>
			<h3 class="title-lv2">发送消息</h3>
			<div class="container">
				<Row class="sendMessage">
					<Col span="20" class="sendMain">
					<div class="message-main">
						<div class="btn-group">
							<Button type="primary">发送</Button>
							<Button type="default">取消</Button>
						</div>
						<form action="" id="sendMessageFrame">
							<Row class="sendRow bt-line">
								<Col span="2">
								 消息接受人：
								</Col>
								<Col span="22">
								<input type="text" placeholder="添加消息接受人姓名">
								</Col>
							</Row>
							<Row class="sendRow bt-line">
								<Col span="2">
								 消息主题：
							</Col>
								<Col span="22">
								<input type="text" name="" id="">
								</Col>
							</Row>
							<Row class="sendRow bt-line">
								<Col span="2">
								 消息类型：
							</Col>
								<Col span="22">
								<Checkbox>通知</Checkbox><Checkbox>私信</Checkbox><Checkbox>公告</Checkbox>
							</Col>
							</Row>
							<Row class="sendRow">
								消息内容
							</Row>
							<Row class="sendRow">
								<textarea placeholder="消息内容"></textarea>
							</Row>
							<Row class="sendRow">
								<Col span="2">
								选项：
							</Col>
								<Col span="22">
								<Checkbox>微信端通知</Checkbox>
								<Checkbox>手机短信通知 <span>（每条信息1毛钱）</span> <span>充值</span></Checkbox>
								<Checkbox>公告</Checkbox>
							</Col>
							</Row>
						</form>
					</div>
				</Col>
					<Col span="4" class="address-list">
					<Row class="searchRow">
						<Col span="18" class="relative search-content">
						<input type="search" placeholder="客户编号或客户名称">
						<i class="iconfont icon-search absolute"></i>
					</Col>
						<Col span="4">
						<Button type="primary">搜索</Button>
					</Col>
					</Row>
					<Row class="sendRow">
						<Menu :theme="theme2" class="menu">
							<Submenu name="1">
								<template slot="title">
									客户通讯录
								</template>
								<MenuItem  name='1-+(index+1)'  v-for="(item,index) in clientList">{{item}}</MenuItem>
							</Submenu>
							<Submenu name="2">
								<template slot="title">
									企业通讯录
								</template>
								<MenuItem name="2-+(index+1)" v-for="(item,index) in businessList">{{item}}</MenuItem>
							</Submenu>
						</Menu>
					 </Row>
					</Col>
				</Row>
			</div>
		</panel>
	</div>
</template>
<style scoped>
	.layout-content .message-container{
		width:100%;
		height:905px;
	}
	.panel{
      margin:0;
	}
	.panel .title-lv2{
		padding-left:10px;
		height:40px;
		line-height:40px;
		border-bottom:1px solid #eeeeee;
		display: block;
		margin:0 10px;
	}
	.panel .btn-group{
		float: none;
		padding:20px 10px 10px;
		margin-top:0;
	}
	.panel .container{
		height:865px;
	}
	.container .sendMessage{
		padding:0 60px 0 60px;
		height:865px;
	}
	.sendMessage .sendMain{
		border-right:1px solid #eeeeee;
		height:865px;
		margin-top:-10px;
	}
	.message-main{
		font-size:14px;
		vertical-align: middle;
		height:100%;
	}
	.message-main #sendMessageFrame{
		padding-left:10px;
		padding-right: 40px;

	}
	#sendMessageFrame .sendRow{
		margin-top:10px;
		width:100%;
	}
	#sendMessageFrame .bt-line{
		border-bottom:1px solid #eeeeee;
	}
	#sendMessageFrame textarea{
		width: 100%;
		height:400px;
		resize: none;
	}
	input,	select {
		vertical-align: middle;
	}
	.sendMessage .address-list{

	}
	.address-list .searchRow{
		padding:10px;
	}
	.searchRow .search-content{
		margin-right:10px;
	}
	.searchRow .search-content input[type=search]{
		width:100%;
		height:32px;
		padding-left:5px;
	}
	.message-main label{
		display: inline-block;
	}
	.message-main input[type=text]{
		width: 100%;
		height: 24px;
		border:none;
	}
	.message-main input[type=checkbox]{
		margin-left: 20px;
	}
	.message-main textarea{
		vertical-align: top;
	}
	.icon-search{
		position: absolute;
		top: 50%;
		right:5px;
		margin-top:-10px;
	}
	.ivu-menu-vertical.ivu-menu-light:after{
		width:0;
	}
	.menu{
		width:100% !important;
	}
</style>