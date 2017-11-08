<template>
	<div id="app">
		<main-sidebar></main-sidebar>
		<main-header></main-header>
		<router-view></router-view>
	</div>
</template>

<script>
    import MainSidebar from '@/components/MainSidebar'
    import Header from '@/components/Header'

    export default {
        name: 'smartpower',
        components: {
            'main-sidebar': MainSidebar,
            'main-header': Header
        }
    }
</script>

<style>
	body {
		padding: 0;
		margin: 99px 0 50px 220px;
		background-color: #E8ECF0;
		font-size: 12px;
		overflow-x: hidden;
		font-family: "Microsoft YaHei" ! important;
	}

	body::-webkit-scrollbar {
		width: 0px;
		/*滚动条宽度（右侧滚动条）*/
		height: 10px;
		/*滚动条高度（底部滚动条）*/
		background-color: #333;
	}
	.main-container{
		width: 1700px;
		padding: 15px 18px;
		overflow: hidden;
	}
	.main-container .title{
		display: inline-block;
		margin-bottom: 5px;
	}
	.main-container-panel{
		width: 1664px;
		height: 909px;
		background-color: #fff;
	}
	.main-container-panel .header{
		box-sizing: border-box;
		font-weight: bold;
		font-size: 16px;
		height: 50px;
		line-height: 50px;
		padding-left: 15px;
		border-bottom: 1px solid #e5e5e5;
	}
	.fixed {
		top: 0;
		position: fixed;
	}

	.relative {
		position: relative;
	}

	.absolute {
		position: absolute;
	}
	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
	ul {
		margin: 0;
		padding: 0;
	}

	li {
		list-style: none;
	}

	.data-panel {
		background-color: #fff;
		box-sizing: border-box;
		overflow: hidden;
		position: relative;
		padding: 10px;
		margin-left: 18px;
		margin-top: 15px;
		display: inline-block;
	}

	.data-panel .title {
		margin: 0;
		padding: 0;
		font-size: 16px !important;
	}


	.btn-group {
		display: inline-block;
	}

	.btn-group .button {
		cursor: pointer;
		min-width: 58px;
		height: 30px;
		line-height: 20px;
		font-size: 12px;
		color: #108CEE;
		border: none;
		outline: none;
		background-color: #EAF6FE;
	}

	.btn-group .btnSelected {
		background-color: #108CEE;
		color: #fff;
	}
	.legend {
		float: right;
		margin-right: 81px;
	}

	.legend li {
		display: inline-block;
		vertical-align: top;

	}

	.legend .square {
		display: inline-block;
		width: 15px;
		height: 15px;
		border: 1px solid black;
		vertical-align: -4px;
	}

	.legend-red {
		background-color: red;
	}

	.legend-green {
		background-color: green;
	}

	.legend-blue {
		background-color: #108CEE;
	}
	.right_10{
		right: 10px;
	}
	.top_10{
		top: 10px;
	}
	.height_99 {
		height: 99px;
	}

	.ft_35c {
		color: #35c;
	}

	.flex-row {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-around;
	}

	.flex-col {
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-around;
	}

	#main-sidebar {
		width: 220px;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		background: #19233C;
		z-index: 9;
		transition: width 0.3s;
		font-size: 12px;
		font-family: "Arial Black";
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
		background: url("assets/logo.png") no-repeat center;
		background-size: cover;
	}

	.sidebar-group ul li {
		list-style: none;
		padding-left: 20px;
	}

</style>
