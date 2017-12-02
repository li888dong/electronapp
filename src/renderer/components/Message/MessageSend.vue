<script>
    import mySearch from '@/components/Tool/mySearch'
	export default {

		data(){
	        return{
			    clientList:['河南众企售电有限公司','河南众企售电有限公司','河南众企售电有限公司'],
				businessList:['河南众企售电有限公司','河南众企售电有限公司','河南众企售电有限公司'],
                theme2: 'light',
                editorText: '',
            }
		},
		methods:{
            onContentChange (val) {
                this.editorText = val
            },
            afterChange () {
            }
		},
		components:{
            'mySearch': mySearch
		},
        mounted (){

		},
	}
</script>
<template>
	<Card>
			<h3  slot="title" class="title">发送消息</h3>
			<div class="container">
				<Row class="sendMessage">
					<Col span="20" class="sendMain">
					<div class="message-main">
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
								<div id="text">
									<textarea id="articleEditor"></textarea>
								</div>
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
							<Row>
								<div class="center-btn">
									<Button type="primary">发送</Button>
									<Button type="default" class="mgl_20">取消</Button>
								</div>
							</Row>
						</form>
					</div>
				</Col>
					<Col span="4" class="address-list">
					<Row class="searchRow">
						<mySearch></mySearch>
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
	</Card>
</template>
<style scoped>
	.container{
		height:820px;
	}
	.sendMessage{
		height:100%;
	}
	.sendMessage .sendMain{
		border-right:1px solid #eeeeee;
		height: 100%;
	}
	.message-main{
		font-size:14px;
		vertical-align: middle;
		height:100%;
	}
	.message-main #sendMessageFrame{
		padding-right: 16px;

	}
	#sendMessageFrame .sendRow{
		margin-top:10px;
		width:100%;
	}
	#sendMessageFrame .bt-line{
		border-bottom:1px solid #eeeeee;
	}
	input,	select {
		vertical-align: middle;
	}
	.sendMessage .address-list{

	}
	.address-list .searchRow{
		padding:10px;
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
	.ivu-menu-vertical.ivu-menu-light:after{
		width:0;
	}
	.menu{
		width:100% !important;
	}
	.center-btn{
		width: 100%;
		height:60px;
		line-height: 60px;
		text-align: center;
	}
	#articleEditor{
		width:100%;
		height:500px;
		resize: none;
	}
	.mgl_20{
		margin-left:20px;
	}
	.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
		color:black;
		border-right: none;
	}
</style>