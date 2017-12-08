<script>
export default{
	name:'MyUpload',
	data(){
		return{

		}
	},
	props:{
		accepts:{
			//允许的上传类型
			type:String,
			default:'application/pdf'
		},
		flag:[String,Number],
		maxSize:{
			type:Number,
			default:0//上传大小限制
		},
	},
	methods:{
		upload(event){
			let file = event.target.files[0];
			console.log(file);
			if(file){
				if(this.accepts){} //此处用来判断文件的类型及大小
					 const formData = new FormData();
                    formData.append('file', file);
                    this.$http.post(this.$api.UPLOAD_COMPACT,formData,{
                    	progress(event) {
                                //传递给父组件的progress方法
                                this.$emit('progress', parseFloat(event.loaded / event.total * 100), this.flag) 
                            }
                    }).then(res=>{
                       var data = res.data.fileid;
                       this.$emit('complete', 200 , data,this.flag,file.name);
                        console.log(res)
                    },err=>{
                    	this.$api.errcallback(err);
                    }).catch(err=>{
                    	this.$api.errcallback(err);
                    })

			}
		}
	}
}
</script>
<template>
 <label class="mo-upload">
        <input type="file" :accept="accepts" @change="upload">
        <slot></slot>
    </label>
</template>
<style>
.mo-upload {
        display: inline-block;
        position: relative;
        margin-bottom: 0; 
        z-index: 22;
        vertical-align: middle;
    }
 .mo-upload  input[type="file"] {
            width:600px;
            height:34px;
            opacity: 0;
            vertical-align: middle;
        }
 .mo-upload .mo-upload--label {
            display: inline-block;
            position: relative;
            vertical-align: middle;
 }
 .mo-upload a{
 	display: inline-block;
 	height:32px;
 	line-height: 32px;
 	background:#0089F0 !important;
 	padding-right: 12px;
 	padding-left:12px;
 	color:#fff;
 	position: absolute;
 	right:0;
 	top:0;
 	border-radius: 4px;
 	vertical-align: middle;
 }
 .mo-upload .file{
 	position: absolute;
 	top:0;
 	left:0; 
 	width:520px;
 	z-index: -1;
 	vertical-align: middle;
 }
</style>