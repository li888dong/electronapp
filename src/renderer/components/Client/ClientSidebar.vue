<script>
    export default {
        name:'clientsidebar',
        data(){
            return{
                companyList:[
                    {
                        name:'河南众企联合',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司11111',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司asdasdasdasdasdsad',
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
					<Row>
						<!--<Col span="4">-->
							<!--<div class="avator">-->
								<!--<i class="iconfont icon-touxiang2" style="font-size: 36px!important;color: #669BD8"></i>-->
							<!--</div>-->
						<!--</Col>-->
						<Col span="24">
							<p v-bind:title="item.name" class="company-name">{{item.name}}</p>
							<p v-bind:title="item.id" class="company-id">{{item.id}}</p>
						</Col>
					</Row>
				</li>
			</ul>
		</div>
	</div>
</template>
<style scoped>
	.client-sidebar{

		background-color: #fff;

	}
	.search{
		width: 100%;
		height: 60px;
		border-bottom: solid 1px #ccc;
		line-height: 60px;
		text-align: center;
	}
	.search i{
		top: 1px;
		left: 25px;
		color: #ccc;
	}
	.search input{
		width: 90%;
		height: 30px;
		border: solid 1px #ccc;
		box-sizing: border-box;
		outline: none;
		padding-left: 30px;
	}
	.company-list ul{
		width: 100%;
		height: 880px;
		overflow-y: scroll;
		overflow-x: hidden;
	}
	/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
	.company-list ul::-webkit-scrollbar{
		width: 5px;
		/*滚动条宽度（右侧滚动条）*/
		height: 5px;
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
		width: 100%;
		height: 76px;
		overflow: hidden;
		line-height: 38px;
		border-bottom: solid 1px #eee;
		cursor: pointer;
	}
	.company-list li p{
		padding-left: 15px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 90%;
	}
	.company-name{
		font-size: 14px;
		font-weight: bold;
	}
	.company-id{
		color: #999;
	}
	/*.avator{*/
		/*width: 100%;*/
		/*height: 76px;*/
		/*line-height: 70px;*/
		/*text-align: center;*/
		/*margin: 5px;*/
	/*}*/
</style>