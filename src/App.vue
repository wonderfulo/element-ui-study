<template>
	<div id="app">
		<img src="./assets/logo.png">
		<div v-for="(item ,index) in testList" :key="index">
			<div>
				<!-- 原版导航，下方有修改过样式的导航哦 -->
				<!-- <router-link :to="item.path">Go to {{item.component}}</router-link> -->
				<router-link :to="item.path" v-slot="{ href, route, navigate, isActive, isExactActive }">
					<li :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">
						<!-- navigate: 导航事件，不触发导航事件依然可以进行路由跳转 -->
						<!-- <a :href="href" @click="navigate">{{ route.fullPath }}</a> -->
						<!-- <a :href="href">{{ route.fullPath }}</a> -->
						<el-button type="primary" @click="handleClick(href)" class="margin-bottom" plain>
							{{item.component}}
						</el-button>
					</li>
				</router-link>
			</div>
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
</style>
