<template>
	<div>
		<div>基础多选</div>
		<el-row>
			<el-col :span="12">
				<el-select v-model="value1" multiple placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-col>
			<el-col :span="12">
				<!-- collapse-tags:多选的选项转为数字显示 -->
				<el-select v-model="value2" multiple collapse-tags style="margin-left: 20px;" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-col>
		</el-row>

		<div>自定义模板</div>
		<el-row>
			<el-col :span="12">
				<el-select v-model="value" placeholder="请选择">
					<el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
						<span style="float: left">{{ item.label }}</span>
						<span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
					</el-option>
				</el-select>
			</el-col>

		</el-row>


	</div>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value1: [],
				value2: [],
				//2：
				cities: [{
					value: 'Beijing',
					label: '北京'
				}, {
					value: 'Shanghai',
					label: '上海'
				}, {
					value: 'Nanjing',
					label: '南京'
				}, {
					value: 'Chengdu',
					label: '成都'
				}, {
					value: 'Shenzhen',
					label: '深圳'
				}, {
					value: 'Guangzhou',
					label: '广州'
				}],
				value: ''
			}
		}
	}
</script>

<style>
</style>
