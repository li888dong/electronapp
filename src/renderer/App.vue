<template>
	<div id="app">
		<Row>
			<Col span="3">
				<main-sidebar></main-sidebar>
			</Col>
			<Col span="21">
				<Row>
					<div class="frame-top">
						<span class="hideBtn iconfont" @click="hideApp()">&#xe601;</span>
						<span class="right_29 closeBtn iconfont" @click="closeApp()">&#xe664;</span>
					</div>
				</Row>
				<Row>
					<main-header v-on:hideFast="hideFast"></main-header>

				</Row>
				<Row>
					<router-view></router-view>
				</Row>

				<transition name="fade">
					<fast-boot v-if="fastboot" v-on:hideSelf="hideFast"></fast-boot>
				</transition>
			</Col>
		</Row>

	</div>
</template>

<script>
    import {ipcRenderer} from 'electron';
    import MainSidebar from '@/components/MainSidebar'
    import Header from '@/components/Header'
    import FastBoot from '@/components/FastBoot'

    export default {
        name: 'smartpower',
	    data(){
            return{
                fastboot:false

            }
	    },
	    methods:{
	      hideFast(){
              this.fastboot = !this.fastboot
	      },
//            用以关闭应用
            closeApp() {
                ipcRenderer.send('window-all-closed');
            },
//            用以最小化应用
            hideApp() {
                ipcRenderer.send('hide-window');
            },
	    },
        components: {
            'main-sidebar': MainSidebar,
            'main-header': Header,
	        'fast-boot':FastBoot
        }
    }
</script>

<style>
	body {
		padding: 0;
		margin: 0;
		background-color: #F6F6F6;
		font-size: 12px;
		font-family: "Microsoft YaHei","Arial","黑体","宋体",sans-serif!important;
		overflow: hidden;
		/*overflow-x: hidden;*/
	}

	body::-webkit-scrollbar {
		width: 0px;
		/*滚动条宽度（右侧滚动条）*/
		height: 10px;
		/*滚动条高度（底部滚动条）*/
		background-color: #333;
	}
	input,select,textarea,option{
		outline: none;
	}
	.frame-top{
		width: 100%;
		height: 25px;
		background-color: #fff;
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-end;
		padding-right: 15px;
	}
	.hideBtn,.closeBtn{
		font-size: 24px!important;
		font-weight:bold;
		color: #000;
		cursor: pointer;
		margin-right: 5px;

	}
	.main-container{
		height: 905px;
		margin:20px;
		overflow: hidden;
		z-index: 998;
	}

	.client-container{
		height: 100%;
		overflow: hidden;
		box-sizing: border-box;
		margin: 60px 20px 20px 20px;
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
		padding: 10px 15px 10px 15px;
		margin-left: 15px;
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

	.mgt_15{
		margin-top: 15px;
	}

	.mgl_20{
		margin-left: 20px;
	}

	.trendUp {
		background: url('./assets/icons.png') no-repeat -385px -85px;
	}

	.trendDown {
		background: url('./assets/icons.png') no-repeat -385px -103px;
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
	/*排行榜*/
	.ranklist-container{
		width: 100%;
		height: 400px;
	}
	.ranklist-container ul{
		margin-top: 20px;
	}
	.ranklist-container li{
		height: 32px;
		line-height: 32px;
	}
	.ranklist-container li span{
		display: inline-block;
		vertical-align: middle;
	}
	span.rate{
		min-width: 50px;
	}
	.ranklist-container li .ranking{
		width: 20px;
		text-align: right;
	}
	.ranklist-container li .city{
		padding: 0;
	}
	.ranklist-container li .ranklist-bar::after{
		content: "";
		position: absolute;
		width: 200px;
		height: 10px;
		background-color: #aaa;
		opacity: 0.2;
	}
	.ranklist-container li .ranklist-bar{
		height: 10px;
		margin-left: 10px;
		background-color: #31C9D7;
		position: relative;
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

	/* placeholder 字体默认颜色 */
		:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
	    color: #CCCCCC; opacity:1;
	}

	::-moz-placeholder { /* Mozilla Firefox 19+ */
	    color: #CCCCCC;opacity:1;
	}

	input:-ms-input-placeholder{
	    color: #CCCCCC;opacity:1;
	}

	input::-webkit-input-placeholder{
	    color: #CCCCCC;opacity:1;
	}

	.page-container{
		position: absolute;
		bottom: 40px;
		left: 50%;
		margin-left: -250px;
	}
	.menu  .ivu-menu-submenu .ivu-menu-submenu-title .ivu-menu-submenu-title-icon{
		float: left !important;
	}
	.refresh{
		display: inline-block;
		vertical-align: middle;
		margin:0 20px;
		cursor: pointer;

	}
	.refresh i{
		color: #0089F0;
		font-size: 18px!important;
		cursor: pointer;
	}

</style>
