<script>
    export default {
        name: 'importData',
        data() {
            return {
				file: null,
				loadingStatus: false,
				formItem: {
					select: '',
					textarea: '',
					input2: '',
                    input3: '',
					desc:''
				},
				defaultList: [
					{
						'name': 'a42bdcc1178e62b4694c830f028db5c0',
						'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
					}
				],
				imgName: '',
				visible: false,
				uploadList: [],
				tip: ''
				}
			},
		methods: {
			handleView (name) {
				this.imgName = name;
				this.visible = true;
			},
			handleRemove (file) {
				const fileList = this.$refs.upload.fileList;
				this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
			},
			handleSuccess (res, file) {
				file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
				file.name = file.name;
			},
			handleFormatError (file) {
				this.$Notice.warning({
					title: '文件类型不支持',
					desc: '文件格式为（ ' + file.name + ' ）不支持, 请上传PDF格式.'
				});
			},
			handleMaxSize (file) {
				this.$Notice.warning({
					title: '文件太大',
					desc: '文件' + file.name + ' 太大，大小不能超过2M.'
				});
			},
			handleBeforeUpload () {
				const check = this.uploadList.length < 1;
				if (!check) {
					this.$Notice.warning({
						title: '最多上传一份文件.'
					});
				}
				return check;
			}
		},
		mounted () {
			this.uploadList = this.$refs.upload.fileList;
		}
    }
</script>
<template>
	<div class="main-container relative">
		<Card>
			<i class="iconfont icon-fanhui1 back" @click="$router.go(-1)" style="position: absolute;top: 10px;left: 10px;"></i>
			<h3 slot="title" style="padding-left: 40px;">导入数据</h3>
			<div class="main-container-panel">
				<Form :model="formItem" label-position="right" :label-width="100">
					<FormItem label="导入目标数据:">
						<Select v-model="formItem.select" style="width: 120px">
							<Option value="beijing" selected>年度预测数据</Option>
							<Option value="shanghai">月度预测数据</Option>
						</Select>
					</FormItem>
					<FormItem label="添加导入文件:">
						<div class="yuceDaoru-upload-box">
                            <div class="yuceDaoru-upload"></div>
                            <Upload
                                ref="upload"
                                :default-file-list="defaultList"
                                :on-success="handleSuccess"
                                :format="['pdf']"
                                :max-size="2048"
                                :on-format-error="handleFormatError"
                                :on-exceeded-size="handleMaxSize"
                                :before-upload="handleBeforeUpload"
                                multiple
                                action="//jsonplaceholder.typicode.com/posts/"
                                style="display: inline-block;width:80px;">
                                <Button type="primary" style="vertical-align: top; height: 34px;">选择文件</Button>
                            </Upload>
                        </div>
						<p style="color:#ccc;line-height:20px;">导入文件格式必须选择文件格式为xls文件格式，且严格按照模版格式填写！<a href="#">下载模板</a></p>
					</FormItem>
					<FormItem label="导入事件记录">
						 <Input v-model="formItem.desc" type="textarea" :autosize="{minRows: 20,maxRows: 30}" placeholder="第一条记录：
第二记录条：
导入完成：合计导入数据121条；数据分别导入到12家公司；0条失败；操作完成时间2017年12月12日12：00；操作人：王辉朝"></Input>
					</FormItem>
					<FormItem style="text-align: center;">
						<Button type="primary">开始导入</Button>
						<Button type="ghost" style="margin-left: 30px">取消</Button>
					</FormItem>
				</Form>				
			</div>
		</Card>
		
	</div>

</template>
<style scoped>
	.main-container-panel{
		height: 900px;
		background-color: #fff;
		margin-left: 10%;
		margin-right: 10%;
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
	/* 下载模块样式 */
.yuceDaoru-upload-box {
    width: 570px;
    height: 34px;
}
.yuceDaoru-upload {
    width: 480px;
    height: 34px;
    display: inline-block;
    border: 1px solid #dddee1;
	border-radius: 4px;
}
.ivu-upload{
    vertical-align: top;
    margin-left: 6px;
}
</style>