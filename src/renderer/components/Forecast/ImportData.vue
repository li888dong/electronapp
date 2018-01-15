<script>
    import MyUpload from '../Tool/upLoad.vue'

    export default {
        name: 'importData',
        components: {'my-upload': MyUpload},
        data() {
            return {
                file: null,
                isUpload: false,
                fileName: '',
                record: '',
                visible: false,
                uploadType:'',
                urlname:''
            }
        },
	    mounted(){
            this.uploadType = this.$route.query.type;
            this.downloadname();
	    },
	    computed:{
	        uploadUrl:function () {
		        if (this.uploadType === 'year'){
		            return this.$api.YEAR_IMPORT
		        }else if(this.uploadType === 'month'){
                    return this.$api.MONTH_IMPORT
                }
            }
	    },
        methods: {
            handleView(name) {
                this.imgName = name;
                this.visible = true;
            },
            uploadComplete(result) {
                console.log(result);
                this.record = result;
                this.isUpload = false;
                this.fileName = '';
                this.$Message.destroy();
                this.$Message.success({
                    content: '上传成功',
                    duration: 3
                });
            },
            selectComplete(fileName) {
                console.log('已选择的文件名', fileName);
                this.fileName = fileName;
            },
            beginUpload() {
                this.isUpload = true;
                this.$Message.info({
                    content: '上传中'
                });
            },
            downloadname(){
                if (this.uploadType === 'year'){
		           this.urlname = '年度预测表.xlsx';
		           console.log(this.urlname);
		        }else if(this.uploadType === 'month'){
                    this.urlname = '月度预测表.xlsx';
                    console.log(this.urlname);
                }
            }
        }
    }
</script>
<template>
	<div class="main-container relative">
		<Card>
			<i class="iconfont icon-fanhui1 back" @click="$router.go(-1)"
			   style="position: absolute;top: 10px;left: 10px;"></i>
			<h3 slot="title" style="padding-left: 40px;">导入数据</h3>
			<div class="main-container-panel">
				<Form label-position="right" :label-width="100">
					<FormItem label="导入目标数据:">
						<Select style="width: 120px" v-model="uploadType">
							<Option value="year">年度预测数据</Option>
							<Option value="month">月度预测数据</Option>
							<!-- <Option value="month">往期竞价结果</Option> -->
						</Select>
					</FormItem>
					<FormItem label='文件上传' class='myTab'>
						<my-upload
								@complete="uploadComplete"
								@selectComplete="selectComplete"
								:url="uploadUrl"
								:beginUpload="isUpload">
							<Input placeholder='请选择文件' class='file' v-model='fileName'></Input>
							<a>选择文件</a>
						</my-upload>
						<p style="color:#ccc;line-height:20px;">导入文件格式必须选择文件格式为xls文件格式，且严格按照模版格式填写！<a :href="'http://39.106.106.150/download/'+ urlname">下载模板</a></p>
					</FormItem>
					<FormItem label="导入事件记录">
						<Input v-model="record" type="textarea" readonly="true" :autosize="{minRows: 20,maxRows: 30}"></Input>
					</FormItem>
					<FormItem style="text-align: center;">
						<Button type="primary" @click="beginUpload">开始导入</Button>
						<Button type="ghost" style="margin-left: 30px" @click="$router.go(-1)">取消</Button>
					</FormItem>
				</Form>
			</div>
		</Card>

	</div>

</template>
<style scoped>
	.main-container-panel {
		height: 900px;
		background-color: #fff;
		margin-left: 10%;
		margin-right: 10%;
	}

	textarea {
		vertical-align: top;
	}

	.form-container {
		width: 1400px;
		height: 600px;
		margin: 50px auto;
	}

	.form-container > div {
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

	.ivu-upload {
		vertical-align: top;
		margin-left: 6px;
	}
</style>