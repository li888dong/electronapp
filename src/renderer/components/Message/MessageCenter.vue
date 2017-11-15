<script>
	import MessageSidebar from './MessageSidebar.vue'
	import Pagenation from '@/components/Pagenation'
    export default {
        name:'messagecenter',
        data(){
            return{
                nowPage:'xtxx',
                cur: 1,
                all: 5,
                msg: '',
				msgSource:'系统消息',
	            msgCount:93,
	            msgs:[
	                {
	                    checked:false,
		                warning:'',
		                public:'公告',
		                msg:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
                        date:'2017-10-26 14:32:59',
                        source:'来自智电'
	                },{
	                    checked:false,
		                warning:'',
		                public:'公告',
		                msg:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
                        date:'2017-10-26 14:32:59',
                        source:'来自智电'
	                },{
	                    checked:false,
		                warning:'',
		                public:'公告',
		                msg:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
                        date:'2017-10-26 14:32:59',
                        source:'来自智电'
	                },{
	                    checked:false,
		                warning:'',
		                public:'公告',
		                msg:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
                        date:'2017-10-26 14:32:59',
                        source:'来自智电'
	                },{
	                    checked:false,
		                warning:'',
		                public:'公告',
		                msg:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
                        date:'2017-10-26 14:32:59',
                        source:'来自智电'
	                },
	                ]
            }
        },
        methods:{
            pageListen: function (data) {
                this.msg = '当前页码：' + data
            },
	        changePage(msg){
                this.nowPage = msg
	        }
        },
	    components:{
            'message-sidebar':MessageSidebar,
            'pagenation':Pagenation
	    }
    }
</script>
<template>
	<div>
		<message-sidebar v-on:nowPage="changePage"></message-sidebar>
		<div v-if="nowPage === 'fsxx'" class="message-container">
			<div class="data-panel">
				<div class="header send-msg">
					发送消息
				</div>
				<div class="message-main relative">
					<label><span class="label-title">消息接受人:</span><input type="text" placeholder="添加消息接收人姓名，用“；”隔开"></label><br>
					<label><span class="label-title">消息主题:</span><input type="text" placeholder="消息标题"></label><br>
					<label><span class="label-title">消息类型:</span><input type="checkbox">通知<input type="checkbox">私信<input type="checkbox">公告</label><br>
					<label><span class="label-title">消息内容:</span><textarea cols="30" rows="5" placeholder="消息内容"></textarea></label><br>
					<label><span class="label-title">选项:</span><input type="checkbox">微信端通知<input type="checkbox">手机短信通知 <span>(每条信息1毛钱)</span><span>充值</span><input type="checkbox">公告</label><br>
					<div class="btn-group" style="margin: 30px 0 20px 150px;">
						<button class="button btnSelected">发送</button>
						<button class="button">取消</button>
					</div>
					<div class="select-receive">
						<span>选择接收人:</span>
						<div class="tab"><span>客户通讯录</span><span>企业通讯录</span></div>
						<div class="contacts"><i class="iconfont icon-search absolute"></i><input type="search" placeholder="客户编号或客户名称"><span>搜索</span></div>
						<div class="" style="width: 280px;height: 200px;border: 1px solid #333"></div>
					</div>
				</div>
			</div>
		</div>
		<div v-else  class="message-container">
			<div class="data-panel">
				<div class="header">
					{{msgSource}} <span style="color: red">({{msgCount}}条未读消息)</span>
				</div>
				<div class="message-main">
					<ul>
						<li class="message-title">
							<span>消息类型选择:</span>
							<select name="" id="">
								<option value="1">全部类型</option>
							</select><input type="text"><span class="search-span">
								<i class="iconfont icon-search"></i>
							</span>
						</li>
						<template v-for="msg in msgs">
						<li>
							<input type="checkbox" v-model="msg.checked">
							<span class="warning">{{msg.warning}}</span>
							<span>[{{msg.public}}]</span>
							<span>{{msg.msg}}</span>
							<span class="fr">{{msg.date}}</span>
							<span class="fr">{{msg.source}}</span>
						</li>
						</template>
						<li>
							<input type="checkbox">
							<div class="btn-group">
								<button class="button">批量刪除</button>
								<button class="button">批量已读</button>
							</div>
							<pagenation class="fr" :cur.sync="cur" :all.sync="all" v-on:btn-click="pageListen"></pagenation>
						</li>
					</ul>
				</div>
			</div>
		</div>

	</div>
</template>
<style scoped>
	.message-container{

	}
	.message-container .header{
		width: 1447px;
		height: 40px;
		line-height: 40px;
		font-size: 14px;
	}
	.message-main{
		padding: 0 20px 0 20px;
		width: 1447px;
		margin-top: 3px;
	}
	.message-main li{
		height: 50px;
		line-height: 50px;
		border-top: 1px solid #666;
		padding-left: 20px;
	}
	input,	select {
		vertical-align: middle;
	}
	.message-main .message-title input,.message-main .message-title select{
		width: 150px;
		height: 30px;
	}
	.label-title{
		display: inline-block;
		width: 100px;
		text-align: right;
		margin-right: 20px;
	}
	.message-main label{
		display: inline-block;
		margin-top: 10px;
	}
	.message-main input[type=text]{
		width: 400px;
		height: 24px;
	}
	.message-main input[type=checkbox]{
		margin-left: 20px;
	}
	.message-main textarea{
		vertical-align: top;
	}
	.select-receive{
		position: absolute;
		right: 20px;
		top: 20px;
		width: 350px;
		height: 330px;
	}
	.send-msg{
		border-bottom: solid 1px #ccc;
	}
	.tab span{
		display: inline-block;
		width: 100px;
		height: 30px;
		background-color: #f6f6f6;
		text-align: center;
		line-height: 30px;
		border: 1px solid #333333;
	}
	.contacts input{
		width: 200px;
		height: 30px;
		padding-left: 20px;
	}
	.contacts span,.search-span{
		display: inline-block;
		text-align: center;
		width: 80px;
		color: white;
		height: 30px;
		line-height: 30px;
		background-color: #36c;
		vertical-align: middle;
	}
	.icon-search{
		top: 50px;
		left: 5px;
	}
	.message-title input {
		width: 180px!important;
		height: 30px!important;
		vertical-align: middle;
	}
</style>