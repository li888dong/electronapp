<script>
    export default {
        name:'clientsidebar',
        data(){
            return{

            }
        },
	    computed:{
            selectedId:function () {
	            return this.$store.getters.cus_id
            },
            companyList:function () {
	            return this.$store.getters.cusList.tableData
            },
		    searchKey:function () {
                return this.$store.getters.searchKey
            }
	    },
	    methods:{
            changeCompany(id,name){
                this.$store.dispatch('setCusId',id);
                this.$store.dispatch('setCusName',name);
            },
	    },
        mounted(){

        }

    }
</script>
<template>
	<div class="client-sidebar">
		<div class="search relative">
			<i class="iconfont icon-search absolute"></i>
			<input type="search" placeholder="客户编号或客户名称" :value="searchKey">
		</div>
		<div class="company-list">
			<ul>
				<template v-for="item in companyList">

					<li class="relative" v-bind:class="{selected:selectedId == item.id}" @click="changeCompany(item.id,item.name)">
						<Row>
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
		margin: 3px;
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