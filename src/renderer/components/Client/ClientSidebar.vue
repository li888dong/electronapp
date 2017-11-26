<script>
	export default {
	    name:'clientsidebar',
		data(){
	        return{
				companyList:[
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
					{
					    name:'河南众企联合售电有限公司',
						id:'123456789987654321',
						avatar:''
					},
				]
	        }
		}
	}
</script>
<template>
	<div class="client-sidebar">
		<div class="search relative">
			<i class="iconfont icon-search absolute"></i>
			<input type="search" placeholder="客户编号或客户名称">
		</div>
		<div class="company-list">
			<ul>
				<li class="relative" v-for="item in companyList">
					<div class="avator absolute" style="left: 2px;top: 6px;width: 40px;height: 40px;line-height: 43px;text-align: center;">
						<i class="iconfont icon-touxiang2" style="font-size: 36px!important;color: #669BD8"></i>
					</div>
					<p>{{item.name}}</p>
					<p>{{item.id}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<style scoped>
	.client-sidebar{
		width: 200px;
		height: 890px;
		background-color: #fff;
		display: inline-block;
		vertical-align: top;
		position: fixed;
		left: 242px;
		top: 82px;
	}
	.search{
		width: 205px;
		height: 60px;
		border-bottom: solid 1px #ccc;
		line-height: 60px;
		text-align: center;
	}
	.search i{
		top: 1px;
		left: 18px;
		color: #ccc;
	}
	.search input{
		width: 185px;
		height: 30px;
		border: solid 1px #ccc;
		box-sizing: border-box;
		outline: none;
		padding-left: 20px;
	}
	.company-list ul{
		width: 200px;
		height: 880px;
		overflow-y: scroll;
		overflow-x: hidden;
	}
	/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
	.company-list ul::-webkit-scrollbar{
		width: 10px;
		/*滚动条宽度（右侧滚动条）*/
		height: 10px;
		/*滚动条高度（底部滚动条）*/
		background-color: #eeeeee;
	}
	/*定义滚动条轨道 内阴影+圆角*/
	.company-list ul::-webkit-scrollbar-track
	{
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
		border-radius: 10px;
		background-color: #F5F5F5;
	}
	/*定义滑块 内阴影+圆角*/
	.company-list ul::-webkit-scrollbar-thumb
	{
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.2);
		background-color: #ccc;
	}
	.company-list li:nth-of-type(1){
		background-color: #E0EBF7;
	}
	.company-list li{
		width: 200px;
		padding-left: 45px;
		height: 55px;
		text-align: left;
		overflow: hidden;
		line-height: 28px;
		word-wrap: break-word;
		white-space: nowrap;
		border-bottom: solid 1px #eee;
	}
</style>