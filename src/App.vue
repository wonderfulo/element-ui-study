<template>
	<div id="app">
		<img src="./assets/logo.png">
		<div>
			<router-link to="/notification">Go to notification</router-link>
			<router-link to="/input">Go to input</router-link>
			<router-link to="/slotTest">Go to slotTest</router-link>
		</div>
		<div>
			<!-- 路由匹配到的组件将渲染在这里 -->
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {

		}
	}
</script>

<style>
	#app {
		font-family: Helvetica, sans-serif;
		text-align: center;
	}
</style>
