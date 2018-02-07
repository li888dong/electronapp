<script>
    export default {
        name: 'MyUpload',
        data() {
            return {
                formData:'',
	            file:null,
            }
        },
        props: {
            url: {
                type: String
            },
	        beginUpload:{
                type:Boolean
	        },
            accepts: {
                //允许的上传类型
                type: String,
                default: 'application/pdf,application/vnd.ms-excel,application/x-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            },
            maxSize: {
                type: Number,
                default: 0//上传大小限制
            },
        },
	    watch:{
            beginUpload:function (curVal,oldVal) {
	            console.log('curVal',curVal);
	            console.log('oldVal',oldVal);
	            if (curVal){
                    console.log('开始上传');
                    this.upload();
                }

            }
	    },
        methods: {
            selectFile(event){
                this.file = event.target.files[0];
                console.log('已选择文件',this.file);
                if (this.file) {
//                    if (this.accepts) {
//                    } //此处用来判断文件的类型及大小
                    this.formData = new FormData();
                    this.formData.append('file', this.file);
                    this.$emit('selectComplete',this.file.name)
                }
            },
            upload() {
                this.$http.post(this.url, this.formData, {
                    progress(event) {
                        //传递给父组件的progress方法
                        this.$emit('progress', parseFloat(event.loaded / event.total * 100))
                    }
                }).then(res => {
                    console.log(res);
                    this.$emit('complete', res.data);
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            }
        }
    }
</script>
<template>
	<label class="mo-upload">
		<input type="file" :accept="accepts" @change="selectFile">
		<slot></slot>
	</label>
</template>
<style scoped>
	.mo-upload {
		display: inline-block;
		position: relative;
		margin-bottom: 0;
		z-index: 22;
		vertical-align: middle;
	}

	.mo-upload input[type="file"] {
		width: 600px;
		height: 34px;
		opacity: 0;
		vertical-align: middle;
	}

	.mo-upload .mo-upload--label {
		display: inline-block;
		position: relative;
		vertical-align: middle;
	}

	.mo-upload a {
		display: inline-block;
		height: 32px;
		line-height: 32px;
		background: #0089F0 !important;
		padding-right: 12px;
		padding-left: 12px;
		color: #fff;
		position: absolute;
		right: 0;
		top: 0;
		border-radius: 4px;
		vertical-align: middle;
	}

	.mo-upload .file {
		position: absolute;
		top: 0;
		left: 0;
		width: 520px;
		z-index: -1;
		vertical-align: middle;
	}
</style>