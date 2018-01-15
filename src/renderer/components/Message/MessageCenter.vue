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
				show:false,
	            msgs:[
	                {
						title:'这是一封来自系统的邮件！',
		                msg:'勒索病毒 ',
                        date:'2017-10-26 14:32:59',
	                },{
                        title:'这是一封来自系统的邮件！',
                        msg:'勒索病毒 ',
                        date:'2017-10-26 14:32:59',
	                },{
                        title:'这是一封来自系统的邮件！',
                        msg:'勒索病毒 ',
                        date:'2017-10-26 14:32:59',
	                },{
                        title:'这是一封来自系统的邮件！',
                        msg:'勒索病毒 ',
                        date:'2017-10-26 14:32:59',
	                },{
                        title:'这是一封来自系统的邮件！',
                        msg:'勒索病毒 ',
                        date:'2017-10-26 14:32:59',
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
			},
			showCont:function () {
                  this.show = !this.show;
            },
            messageList(){
            	this.$http.post(this.$api.MESSAGE_LIST,{n_cateid:1}).then(res=>{
            		console.log("消息列表",res);
            	},err=>{
            		this.$api.errcallback(err);
            	}).catch(err=>{
            		this.$api.errcallback(err);
            	})
            }
        },
	    components:{

	    },
		mounted(){
			this.messageList();
		}
    }
</script>
<template>
		<Card class="relative main-container msg-center">
			<h3 slot="title" class="title">{{msgSource}} <span>（{{msgCount}}未读消息）</span></h3>
			<div class="message-main">
				<ul id="msg-content">
					<li v-for="(msg,index) in msgs" class="clear">
						<p :id="index">
							<router-link to="/message-detail">
								<span>{{msg.title}}</span>
							</router-link>
						</p>
						<Button type="default" class="fr btnRead">标记为已读</Button>
						<span class="time fr">{{msg.date}}</span>
					</li>
				</ul>
			</div>
			<div class="page-center">
				<!--分页-->
				<div class="fenYe">
					<Page :total="50" show-total show-elevator></Page> <Button type="primary">确定</Button>
				</div>
			</div>
		</Card>
</template>
<style scoped>
	div,span,input,select,option,ul,li{
		margin:0;
		padding:0;
	}
	.title span{
		color:red;
		font-size:12px;
		margin-left:18px;
		font-weight:normal;
	}
	.message-main{
		font-size:12px;
		vertical-align: middle;
	}
	.message-main li{
		border-top:1px solid #eeeeee;
		padding:20px;
	}
	.message-main li:hover{
		background-color: #eeeeee;
	}
	.message-main li:last-child{
		border-bottom:1px solid #eeeeee;
	}
	.message-main li:first-child{
		border-top:none;
	}
     .relative .page-center{
		text-align: center;
		position: absolute;
		bottom:0px;
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
		line-height: 14px;
		display:inline-block;
		vertical-align: baseline;
	}
	.ivu-menu-vertical.ivu-menu-light:after{
	 width:0;
	}
	.btnRead{
		margin-left:20px;
		margin-top:-10px;
		vertical-align: top;
	}
	li p{
		display: inline-block;
		cursor: pointer;
	}
	li p a{
		display: inline-block;
		width:100%;
		height:100%;
		color:#669bd8;
	}
	.clear:after{
		content:'';
		display: block;
		clear: both;
	}
</style>