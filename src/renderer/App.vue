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
		margin: 79px 0 0 220px;
		background-color: #F6F6F6;
		font-size: 12px;
		font-family: "Microsoft YaHei","Arial","黑体","宋体",sans-serif!important;
		overflow-x: hidden;
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
		height: 900px;
		padding: 0 20px;
		overflow: hidden;
	}
	.main-container .title{
		display: inline-block;
		font-size: 16px!important;
		margin: 0 0 5px 15px;
	}
	.main-container-panel{
		width: 1655px;

		background-color: #fff;
	}
	.main-container-panel .header{
		box-sizing: border-box;
		font-weight: bold;
		font-size: 16px;
		height: 50px;
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
		padding: 10px 20px 10px 20px;
		margin-left: 20px;
		margin-top: 20px;
		display: inline-block;
		vertical-align: top;
	}

	.data-panel .title {
		margin: 0;
		padding: 0;
		font-size: 16px !important;
		color: #404040;
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
		color: #828282;
		border: 1px solid #999;
		outline: none;
		background-color: #EEEEEE;
	}

	.btn-group .btnSelected {
		background-color: #108CEE!important;
		border: none;
		color: #fff!important;
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
	.height_79 {
		height: 79px;
	}

	.ft_35c {
		color: #35c;
	}

	.flex-row {
		display: flex!important;
		flex-flow: row nowrap;
		justify-content: space-around;
	}

	.flex-col {
		display: flex!important;
		flex-flow: column nowrap;
		justify-content: space-around;
	}

	/* 可以设置不同的进入和离开动画 */
	/* 设置持续时间和动画函数 */
	.slide-fade-enter-active {
		transition: all .1s ease;
	}
	.slide-fade-leave-active {
		transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to
		/* .slide-fade-leave-active for below version 2.1.8 */ {
		transform: translateX(10px);
		opacity: 0;
	}
</style>
