<script>
    export default {
        name: 'importData',
        data() {
            return {

            }
        }
    }
</script>
<template>
	<div class="main-container relative">
		<span class="title">年度预测/导入数据</span>
		<div class="main-container-panel">
			<div class="header">
				<span>导入数据</span>
			</div>
			<div class="form-container">
				<div><span>导入目标数据:</span><span>年/月度预测数据</span></div>
				<div><span>添加导入文件:</span><input type="file">
				<p>导入文件格式必须选择文件格式为xls文件格式，且严格按照模版格式填写！<a href="#">下载模板</a></p></div>
				<div>

					<span>导入事件记录</span>:<textarea cols="30" rows="10" placeholder="第一条记录：
第二记录条：
导入完成：合计导入数据121条；数据分别导入到12家公司；0条失败；操作完成时间2017年12月12日12：00；操作人：王辉朝"></textarea>
				</div>
				<div class="btn-group">
					<button class="button btnSelected">开始导入</button>
					<button class="button">取消</button>
				</div>
			</div>
		</div>
	</div>

</template>
<style scoped>
	.main-container-panel{
		height: 900px;
	}
	textarea{
		vertical-align: top;
	}
	.form-container{
		width: 1400px;
		height: 600px;
		margin: 50px auto;
	}
	.form-container>div{
		margin-top: 20px;
	}
</style>