<template>
	<div>
		<div>上传图片</div>
		<!--  list-type="picture"：列表展示类型为picture
		 on-change：文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用 
		 drag：可以支持拖拽上传
		 multiple：支持多选
		 :auto-upload="false"  关闭自动上传-->
		<el-upload
		  class="upload-demo"
		  action="https://jsonplaceholder.typicode.com/posts/"
		  :on-preview="handlePreview"
		  :on-remove="handleRemove"
		  :on-change="handleChange"
		  :file-list="fileList"
		  list-type="picture">
		  <el-button size="small" type="primary">点击上传</el-button>
		  <!-- 提示符插槽，在此插槽中写入的内容会显示在默认插槽的下面 -->
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
		// 图片删除方法
      handleRemove(file, fileList) {
		 //进入这个方法时 fileList中已经不包含删除的 file了，
		 //但是this.fileList中还是原数据，包含已删除的file
		 //this.fileList = fileList; 执行这段代码简化删除操作
        console.log(file, fileList);
		console.log(this.fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
	  handleChange(file, fileList) {
		this.fileList = fileList.slice(-3);
	  }
    }
  }
</script>