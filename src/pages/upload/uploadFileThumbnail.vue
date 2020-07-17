<template>
	<div>
		<!-- list-type：文件列表的类型
		picture-card：卡片列表视图
		 auto-upload：自动上传-->
		 <!-- 此示例没有储存，上传文件集合，可以通过成功函数，添加文件到文件集合中去 -->
		 <!--   :file-list="fileList"，这是更好的方式，里面存储了所有的文件 -->
		<div>文件缩略图</div>
		<el-upload action="#" list-type="picture-card" :auto-upload="false"
		 :limit="3" 
		 :on-exceed="handleExceed">
			<i slot="default" class="el-icon-plus"></i>
			<!-- 使用插槽，和插槽作用域获取子组件的数据 -->
			<div slot="file" slot-scope="{file}">
				<img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
				<span class="el-upload-list__item-actions">
					<span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
						<i class="el-icon-zoom-in"></i>
					</span>
					<span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
						<i class="el-icon-download"></i>
					</span>
					<span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
						<i class="el-icon-delete"></i>
					</span>
				</span>
			</div>
		</el-upload>
		<el-dialog :visible.sync="dialogVisible">
			<img width="100%" :src="dialogImageUrl" alt="">
		</el-dialog>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				dialogImageUrl: '',
				dialogVisible: false,
				disabled: false
			};
		},
		methods: {
			handleRemove(file) {
				console.log(file);
			},
			handlePictureCardPreview(file) {
				//此时获得文件路径是以 BLOB 开头的url，这是浏览器的内部地址，
				//实际生产环境中，可以去服务器请求文件，
				//如果文件路径有细微差别，可以处理url的路径，用以达到rul匹配服务器规则的形式
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			handleDownload(file) {
				console.log(file);
			},
			handleExceed(files, fileList) {
			  this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
			},
		}
	}
</script>
