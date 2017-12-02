<script>
    import MyTab from './MyTab.vue'
	import Panel from './Panel.vue'

    export default {
        components: {
            'my-tab': MyTab,
			'panel':Panel,
        },
        name: 'button',
        data() {
            return {}
        },
        methods: {
            log() {
                console.log(1)
            }
        },

    }
</script>
<template>
	<div>
		<Row>
			<Col span="8" offset="4">
			<Button type="primary">主操作</Button>
			<Button type="default">默认</Button>
			<Button type="info">次操作</Button>
			<Button type="success">特殊按钮1</Button>
			<Button type="error">特殊按钮2</Button>
			</Col>
		</Row>
		<Row>
			<Col span="8" offset="4">
			<Button type="primary" class="disabled">主操作</Button>
			<Button type="default" class="disabled">默认</Button>
			<Button type="info" class="disabled">次操作</Button>
			<Button type="success" class="disabled">特殊按钮1</Button>
			<Button type="error" class="disabled">特殊按钮2</Button>
			</Col>
		</Row>
		<Row>
			<Col span="8" offset="4">
				<span class="my-tab my-tab-disabled">
						tab-disabled
					</span>
				<span class="my-tab my-tab-normal">
						tab-normal
					</span>
				<span class="my-tab my-tab-hl">
						tab-hl
					</span>
				<span class="my-tab my-tab-zd">
						tab-zd
					</span>
				<my-tab type="normal">
					测试
				</my-tab>
				<my-tab type="disabled">
					测试
				</my-tab>
			</Col>
		</Row>
		<Row>
			<Col span="8" offset="4">
			<!--面板-->
			<panel>
                 <h3 class="title-lv3">标题</h3>
				  <div class="container">内容</div>
			</panel>
		</Col>
		</Row>
	</div>
</template>
<style>
	.my-tab {
		display: inline-block;
		vertical-align: middle;
		padding: 5px 10px;
		margin: 0;
		text-align: center;
		height: 30px;
		cursor: pointer;
	}

	.ivu-btn {
		position: relative;
	}

	.ivu-btn span {
		position: relative;
		z-index: 10;
	}

	.ivu-btn-primary {
		background-color: #0089F0 !important;
		color: #fff !important;
	}

	.ivu-btn-info {
		background-color: #ffffff !important;
		color: #0089F0 !important;

	}

	.ivu-btn-info.disabled {
		border: 1px solid #0089F0;
		border-radius: 4px;
		opacity: 0.5;
	}

	.ivu-btn-info.disabled:hover {
		opacity: 0.5;
		border: 1px solid #0089F0;
		border-radius: 4px;
	}

	.ivu-btn-info.disabled:hover:after {
		display: none !important;
	}

	.ivu-btn-info.disabled:after {
		display: none !important;
	}

	.ivu-btn-success {
		background-color: #31C9D7 !important;
		color: #fff !important;
	}

	.ivu-btn-error {
		background-color: #F35E7A !important;
		color: #fff !important;
	}

	.ivu-btn-default:hover {
		color: inherit;
		border-color: rgb(221, 222, 225) !important;
		opacity: 0.8;
	}

	.ivu-btn-info:hover:after {
		display: none !important;
	}

	.ivu-btn:hover:after {
		display: inline-block;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.1);
		color: #ffffff;
		content: "";
	}

	.ivu-btn.disabled:after {
		display: inline-block;
		position: absolute;
		left: -1px;
		top: -1px;
		right: -1px;
		bottom: -1px;
		background-color: #fff;
		opacity: 0.6;
		content: "";
	}
</style>