<template>
	<!-- Notification 组件提供通知功能，Element 注册了$notify方法，接收一个options字面量参数，在最简单的情况下，你可以设置title字段和message字段，用于设置通知的标题和正文。默认情况下，经过一段时间后 Notification 组件会自动关闭，但是通过设置duration，可以控制关闭的时间间隔，特别的是，如果设置为0，则不会自动关闭。注意：duration接收一个Number，单位为毫秒，默认为4500。 -->
	<div>
		<el-button plain @click="open1">
			可自动关闭
		</el-button>
		<el-button plain @click="open2">
			不会自动关闭
		</el-button>
		<el-button plain @click="open3">
			偏移的消息
		</el-button>
		<!-- 很危险，尽量不要使用 -->
	<!-- 	<el-button plain @click="open4">
			使用 HTML 片段
		</el-button> -->
	</div>
</template>

<script>
	export default {
		methods: {
			open1() {
				const h = this.$createElement;

				this.$notify({
					title: '标题名称',
					message: h('i', {
						style: 'color: teal'
					}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
				});
			},
			open2() {
				this.$notify({
					title: '提示',
					message: '这是一条不会自动关闭的消息',
					duration: 0
				});
			},
			open3() {
				this.$notify({
					title: '偏移',
					message: '这是一条带有偏移的提示消息',
					offset: 100, //这个便宜量是从页面上方
				});
			}
		}
	}
</script>

<style>

</style>
