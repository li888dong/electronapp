<script>

</script>
<template>
	<Row>

		<Col span="12">
		<Menu :theme="'dark'" :open-names="['1']" accordion style="width: 220px;background-color: #19233C;">
			<MenuItem name="01" style="padding-left: 43px;">总览</MenuItem>
			<MenuItem name="02" style="padding-left: 43px;">实时监控</MenuItem>
			<Submenu name="1">
				<template slot="title">
					<Icon type="ios-paper"></Icon>
					客户中心
				</template>
				<MenuItem name="1-1">
					<router-link to="/client-situation" tag="div"><i class="iconfont icon-bcc"></i><span>客户概况</span>
					</router-link>
				</MenuItem>
				<MenuItem name="1-2">
					<router-link to="/AddClient" tag="div"><i class="iconfont icon-bcc"></i><span>添加客户</span>
					</router-link>
				</MenuItem>
			</Submenu>
			<Submenu name="2">
				<template slot="title">
					<Icon type="ios-people"></Icon>
					预测分析
				</template>
				<MenuItem name="2-1">
					<router-link to="weather" tag="div"><i class="iconfont icon-shebei"></i><span>预测概况</span>
					</router-link>
				</MenuItem>
				<MenuItem name="2-2">
					<router-link to="annual-forecast" tag="div"><i class="iconfont icon-xieyi"></i><span>年度预测</span>
					</router-link>
				</MenuItem>
				<MenuItem name="2-3">
					<router-link to="cart" tag="div"><i class="iconfont icon-shujuku"></i><span>月度预测</span>
					</router-link>
				</MenuItem>
				<MenuItem name="2-4">月度预测</MenuItem>
			</Submenu>
			<Submenu name="3">
				<template slot="title">
					<Icon type="ios-people"></Icon>
					交易管理
				</template>
				<MenuItem name="3-1">
					<router-link to="trade-situation" tag="li"><i
							class="iconfont icon-zhuzhuangtutubiao"></i><span>交易概况</span>
					</router-link>

				</MenuItem>
				<MenuItem name="3-2">
					<router-link to="changxie-management" tag="li"><i class="iconfont icon-kehu"></i><span>长协管理</span>
					</router-link>

				</MenuItem>
				<MenuItem name="3-3">
					<router-link to="bid-management" tag="li"><i class="iconfont icon-numberlist"></i><span>竞价管理</span>
					</router-link>

				</MenuItem>
				<MenuItem name="3-4">
					<router-link to="matching-management" tag="li"><i
							class="iconfont icon-numberlist"></i><span>交易匹配管理</span>
					</router-link>

				</MenuItem>


			</Submenu>
			<Submenu name="4">
				<template slot="title">
					<Icon type="ios-people"></Icon>
					设备管理
				</template>


				<MenuItem name="4-1">
					<router-link to="/equipment" tag="li"><i class="iconfont icon-bcc"></i><span>设备概况</span></router-link>

				</MenuItem>
				<MenuItem name="4-2">
					<router-link to="/AssetInfo" tag="li"><i class="iconfont icon-bcc"></i><span>资产信息</span></router-link>

				</MenuItem>

			</Submenu>
			<MenuItem name="03" style="padding-left: 43px;">
				<router-link to="index-compare" tag="li"><i class="iconfont icon-numberlist"></i><span>行业指数</span>
				</router-link>
			</MenuItem>
			<MenuItem name="04" style="padding-left: 43px;">
				<router-link to="sand-table" tag="li"><i class="iconfont icon-numberlist"></i><span>售电沙盘</span>
				</router-link>
			</MenuItem>
			<MenuItem name="05" style="padding-left: 43px;">
				<router-link to="/database" tag="div">电量数据库</router-link>
			</MenuItem>
			<MenuItem name="06" style="padding-left: 43px;">合同管理</MenuItem>
		</Menu>
		</Col>
	</Row>
</template>
<style>
	.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover {
		background-color: #000 !important;
	}

	.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu) {
		color: #ffffff;
	}

	#main-sidebar {
		width: 220px;
		position: fixed;
		top: 0;
		left: 0;
		height: 1194px;
		background: #19233C;
		z-index: 9;
		transition: width 0.3s;
		font-size: 12px;
		color: #fff;
		overflow: hidden;
	}

	.sidebar-item, .sidebar-group {
		position: relative;
		padding-left: 30px;
		border-bottom: 0.5px solid #999;
	}

	.sidebar-item {
		line-height: 50px;
		cursor: pointer;
	}

	.sidebar-group {
		line-height: 30px;
	}

	.sidebar-group li {
		cursor: pointer;
	}

	#main-sidebar i {
		margin-right: 8px;
	}

	.logo {
		width: 220px;
		height: 80px;
		background: url("../assets/logo蓝底.png") no-repeat center;
		background-size: cover;
	}

	.sidebar-group ul li {
		list-style: none;
		padding-left: 20px;
	}

	.sidebar-group i {
		display: inline-block;
	}

	.rotate90 {
		transform: rotate(-90deg);
	}
</style>