<script>

    export default {
        name:'clientlist',
        data(){
            return{

            }
        },
        components:{

        }
    }
</script>
<template>
	<div>
		<div class="main-container">
			<span class="title">客户中心/客户列表</span>
			<div class="main-container-panel">
				<div class="header">
					<span>客户列表</span>
					<ul>
						<li class="selected">全部 <span>(12332)</span></li>
						<li>郑州 <span>(332)</span></li>
						<li>开封 <span>(332)</span></li>
						<li>洛阳 <span>(332)</span></li>
						<li>平顶山 <span>(332)</span></li>
						<li>安阳 <span>(332)</span></li>
						<li>鹤壁 <span>(332)</span></li>
						<li>新乡 <span>(332)</span></li>
						<li class="more">更多 <span><i class="iconfont icon-xiala"></i></span></li>
					</ul>
					<div class="btn-group fr add-client">
						<button class="button btnSelected">+新增用户</button>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>
<style scoped>
	.header ul{
		margin-left: 100px;
		display: inline-block;
		vertical-align: top;
	}
	.header li{
		display: inline-block;
		width: 90px;
		height: 30px;
		border: 1px solid #ccc;
		text-align: center;
		line-height: 30px;
		font-size: 12px;
		font-weight:normal;
		margin-left: 5px;
		vertical-align: middle;
	}
	.header li.selected{
		background-color: #E8F8FE;
	}

	.header li.more i{
		display: inline-block;
		width: 30px;
		height: 30px;
		border-left:1px solid #ccc;
		font-size: 12px;
		text-align: center;
		float: right;
	}
	.add-client{
		margin-right: 20px;
	}
	.add-client button{
		width: 120px;
	}
</style>