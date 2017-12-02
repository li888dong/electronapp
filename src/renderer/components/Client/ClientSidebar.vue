<script>
    export default {
        name:'clientsidebar',
        data(){
            return{
                selectedName:'河南众企联合',
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
                        name:'河南众企联合售电有限公司驻马点城市观察呢个',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司1',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司2',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司3',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司4',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司5',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司6',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司7',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司8',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司11',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司22',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司33',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司44',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司55',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司66',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司77',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司nn',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司aa',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司ss',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司dd',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司f',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司ee',
                        id:'123456789987654321',
                        avatar:''
                    },
                    {
                        name:'河南众企联合售电有限公司sl',
                        id:'123456789987654321',
                        avatar:''
                    },
                ]
            }
        },
	    methods:{
            changeCompany(name){
                this.selectedName = name
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
				<template v-for="item in companyList">

					<li class="relative" v-bind:class="{selected:selectedName == item.name}" @click="changeCompany(item.name)">
						<Row>
							<!--<Col span="4">-->
							<!--<div class="avator">-->
							<!--<i class="iconfont icon-touxiang2" style="font-size: 36px!important;color: #669BD8"></i>-->
							<!--</div>-->
							<!--</Col>-->
							<Col span="24">
							<p v-bind:title="item.name" class="company-name">{{item.name}}</p>
							</Col>
						</Row>
					</li>
				</template>
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
		height: 870px;
		overflow-y: scroll;
		overflow-x: hidden;
	}
	.company-list ul:hover::-webkit-scrollbar{
		width: 5px;
		/*滚动条宽度（右侧滚动条）*/
		height: 5px;
		/*滚动条高度（底部滚动条）*/
		background-color: #eeeeee;
	}
	/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
	.company-list ul::-webkit-scrollbar{
		width: 0px;
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
	.company-list li.selected{
		background-color: #E0EBF7;
		border-left: 4px solid #108CEE !important;
		border-top: solid 1px #eee;
		color: #108CEE ;
	}
	.company-list li{
		width: 100%;
		min-height: 40px;
		overflow: hidden;
		border-left: 4px solid transparent;
		border-top: solid 1px transparent;
		border-bottom: solid 1px #eee;
		box-sizing: border-box;
		cursor: pointer;

	}
	.company-list li:hover{
		background-color: #E0EBF7;
		color: #108CEE ;
	}
	.company-list li p{
		padding: 10px 0 10px 15px;
		margin-left: 5px;
	}
	.company-name{
		font-size: 12px;
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