<script>
    export default {
        name:'messagecenter',
        data(){
            return{
                cur: 1,
                all: 5,
                msg: '',
				keyWords:'',
				msgSource:'系统消息',
	            msgCount:93,
	            msgs:[
	                {
	                    checked:false,
		                warning:'!',
		                public:'公告',
						title:'安全预警通告',
		                msg:'勒索病毒 ',
                        date:'2017-10-26 14:32:59',
                        source:'来自百度云'
	                },{
                        checked:false,
                        warning:'!',
                        public:'公告',
                        title:'安全预警通告',
                        msg:'勒索病毒 ',
                        date:'2017-10-26 14:32:59',
                        source:'来自百度云'
	                },{
                        checked:false,
                        warning:'!',
                        public:'公告',
                        title:'安全预警通告',
                        msg:'勒索病毒 ',
                        date:'2017-10-26 14:32:59',
                        source:'来自百度云'
	                },{
                        checked:false,
                        warning:'!',
                        public:'公告',
                        title:'安全预警通告',
                        msg:'勒索病毒 ',
                        date:'2017-10-26 14:32:59',
                        source:'来自百度云'
	                },{
                        checked:false,
                        warning:'!',
                        public:'公告',
                        title:'安全预警通告',
                        msg:'勒索病毒 ',
                        date:'2017-10-26 14:32:59',
                        source:'来自百度云'
	                },
	                ]
            }
        },
        methods:{
            pageListen: function (data) {
                this.msg = '当前页码：' + data
            },
			isRead:function () {
				//发送请求
            },
			searchMessages:function(){
                 //发送请求
			}
        },
	    components:{

	    }
    }
</script>
<template>
	<div class="message-center">
		<panel class="relative">
			<h3 class="title-lv2">{{msgSource}} <span>（{{msgCount}}未读消息）</span></h3>
			<div class="container">
				<div class="message-main">
					<ul>
						<li class="message-title">
							<div class="fl">
								<input type="checkbox">
								<div class="btn-group">
									<button class="button">批量刪除</button>
									<button class="button">批量已读</button>
								</div>
							</div>
							<div class="fr">
								<span>消息类型选择:</span>
								<select name="" id="">
									<option value="1">全部类型</option>
								</select><input type="text" placeholder="请输入搜索的标题或内容" v-model="keyWords"><Button type="primary" class="search">搜索</Button>
							</div>
						</li>
						<template v-for="msg in msgs">
							<li>
								<input type="checkbox" v-model="msg.checked">
								<span class="warning">{{msg.warning}}</span>
								<span>[{{msg.public}}]</span>
								<span>【{{msg.title}}】</span>
								<span>{{msg.msg}}</span>
								<span class="fr mr">{{msg.source}}</span>
								<span class="fr time">{{msg.date}}</span>
							</li>
						</template>
					</ul>
				</div>
			</div>
			<div class="page-center">
				<!--分页-->
				<div class="fenYe">
					<Page :total="50" show-total show-elevator></Page> <Button type="primary">确定</Button>
				</div>
			</div>
		</panel>
	</div>
</template>
<style scoped>
	div,span,input,select,option,ul,li{
		margin:0;
		padding:0;
	}
    .message-center{
		height:905px;
	}
	.panel{
		height:100%;
	}
	.panel .btn-group{
		margin-top:0;
	}
    .panel .title-lv2{
		padding-left:20px;
		height:40px;
		line-height:40px;
	}
	.title-lv2 span{
		color:red;
		font-size:12px;
		margin-left:18px;
		font-weight:normal;
	}
	.message-main{
		font-size:14px;
		vertical-align: middle;
	}
	.message-main li{
		border-bottom: 1px solid #eeeeee;
		padding:30px 40px 20px 20px;
	}
	.message-main .message-title{
		overflow: hidden;
		padding:15px 20px 0;
		border-top: 1px solid #eeeeee;
		border-bottom: none;
		vertical-align: middle;
	}
	.message-main .message-title .fr select{
           width:140px;
		   margin-left:18px;
		  font-size:12px;
		  padding-left:10px;
	}
	.message-main .message-title .fr input[type=text]{
		width:240px;
		margin-left:40px;
		padding-left:10px;

	}
	input,	select {
		vertical-align: middle;
	}
	.message-main .message-title .fr input,.message-main .message-title select{
		height: 28px;
		border:1px solid #cccccc;
		outline: none;
	}
	.message-main .message-title .fr .search{
		margin-left:10px;
		height:28px;
		width:64px;
		padding:0;
		vertical-align: middle;
	}
	/*批量按钮*/
	.message-title .fl .btn-group .button{
		width:88px;
		height:28px;
		line-height: 28px;
		border:none;
		border-radius:2px;
		background-color:#e6f3fd;
		color:#a2d3f8;
		margin-left:10px;
	}
	.message-title .fl .btn-group button:nth-child(2){
		margin-left:20px;
	}
	.message-main li .warning{
		display: inline-block;
		height: 18px;
		width:18px;
		text-align: center;
		border-radius: 50%;
		border:2px solid #fd8c41;
		line-height: 16px;
		margin-left:20px;
		margin-right:20px;
		font-size:8px;
		color:#fd8c41;
	}
     .relative .page-center{
		text-align: center;
		position: absolute;
		bottom:18px;
		left:0;
		right:0;
	}
	/* 分页的样式 */
	.page-center  .fenYe {
		width: 100%;
		height: 60px;
		background-color: #fff;
		padding-top: 10px;
		text-align: center;
	}
	.fenYe table{
		border: 0;
	}
	.fenYe ul {
		display: inline-block;
	}
	.fenYe button{
		top: -12px;
		left: 12px;
	}

	.message-main label{
		display: inline-block;
		margin-top: 10px;
	}
	.message-main input[type=text]{
		width: 400px;
		height: 24px;
	}
	.mr{
		display:inline-block;
		line-height: 14px;
		margin-left:40px;
		color:#6f6f6f;
	}
	.time{
		font-size:10px;
		line-height: 14px;
		display:inline-block;
		vertical-align: baseline;
	}
</style>