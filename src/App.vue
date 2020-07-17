<template>
	<div id="app">
		<img src="./assets/logo.png">
		<div>
			<span v-for="(item ,index) in testList" :key="index">
				<!-- 原版导航，下方有修改过样式的导航哦 -->
				<!-- <router-link :to="item.path">Go to {{item.component}}</router-link> -->
				<router-link :to="item.path" v-slot="{ href, route, navigate, isActive, isExactActive }">
					<span :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">
						<!-- navigate: 导航事件，不触发导航事件依然可以进行路由跳转 -->
						<!-- <a :href="href" @click="navigate">{{ route.fullPath }}</a> -->
						<!-- <a :href="href">{{ route.fullPath }}</a> -->
						<el-button type="primary" @click="handleClick(href)" class="margin-right" plain>
							{{item.component}}
						</el-button>
					</span>
				</router-link>
			</span>
		</div>
		<div>
			<!-- 路由匹配到的组件将渲染在这里 -->
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				testList: [{
						path: '/notification',
						component: 'notification'
					},
					{
						path: '/input',
						component: 'input'
					},
					{
						path: '/slotTest',
						component: 'slotTest'
					},
					{
						path: '/checkbox',
						component: 'checkbox'
					},
					{
						path: '/select',
						component: 'select'
					},
					{
						path: '/selectGroup',
						component: 'selectGroup'
					},
					{
						path: '/selectByQuery',
						component: 'selectByQuery'
					},
					{
						path: '/selectByRemoteQuery',
						component: 'selectByRemoteQuery'
					},
					{
						path: '/cascader',
						component: 'cascader'
					},
					{
						path: '/cascaderDynamicLoading',
						component: 'cascaderDynamicLoading'
					},
					{
						path: '/upload',
						component: 'upload'
					},
					{
						path: '/uploadHeadPortrait',
						component: 'uploadHeadPortrait'
					},
					{
						path: '/uploadFileThumbnail',
						component: 'uploadFileThumbnail'
					}
				]
			}
		},
		methods: {
			handleClick(href) {
				window.location.href = href;
			}
		}
	}
</script>

<style>
	#app {
		font-family: Helvetica, sans-serif;
		text-align: center;
	}

	.margin-bottom {
		margin-bottom: 5px;
	}

	.margin-right {
		margin-right: 5px;
	}
</style>
