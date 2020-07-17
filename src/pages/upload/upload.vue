<template>
	<div>
		<!-- on-exceed：超出上传文件个数时的限制
		 limit：控制文件上传个数
		 :on-remove：文件移除时触发
		 before-remove：文件移除之前触发
		 multiple：支持多选-->
		<el-upload
		  class="upload-demo"
		  action="https://jsonplaceholder.typicode.com/posts/"
		  :on-preview="handlePreview"
		  :on-remove="handleRemove"
		  :before-remove="beforeRemove"
		  multiple
		  :limit="3"
		  :on-exceed="handleExceed"
		  :file-list="fileList">
		  <el-button size="small" type="primary">点击上传</el-button>
		  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
		</el-upload>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
	  //处理预览的函数
      handlePreview(file) {
		 // 可以使用 location.href=服务器路径+文件路径进行预览
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
</script>
<style>
	.upload-demo {
	    width: 360px;
	}
</style>