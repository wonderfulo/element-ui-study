<template>
	<div>
		<h3>你好，我是slot：插槽测试</h3>
		<slot name="aaa"></slot>
		<slot name="bbb"></slot>
		<slot></slot>
		<ul>
			<!-- :val：传递给父组件的属性，名称和数量可以任意定义 -->
			<!-- 父组件中：通过在该组件标签内 ，template标签中定义 slot-scope="props" ，
			可以获得 此处作用域插槽的值，
			可以理解为把 父组件的 作用域插槽 放在此处，进行循环，
			父组件中，可以使用 props.val 获取 此处 value的值， props：可以在父组件中任意定义
			-->
			
			<!-- 作用域组件的意义 ：可以把 本该放到 子组件中的 孙子组件的提升到 父组件中，
			 避免 层层向上 传递 $emit-->
			<slot v-for="value in list" :val=value>
				
			</slot>
		</ul>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				list: [1, 2, 3, 4]
			}
		}
	}
</script>

<style>

</style>
