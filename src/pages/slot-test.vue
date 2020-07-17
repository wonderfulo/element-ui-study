<template>
	<div>
		<slotMe>
			<!-- 除了带名字的插槽之外的所有数据，都会放在匿名插槽中 -->
			<!-- 也会放在 ，作用插槽中，组件中如果有 作用域插槽，则不适合使用匿名插槽 -->
			<!-- 	<template> ccc </template> -->
			<!-- hbuilderx与 git 管理的项目，修改了某文件侧边栏并不会有任何提示，
			 可以进入该项目所在的文件夹中 查看，修改的文件有红色的标记-->
			<template slot="bbb">
				bbb
			</template>

			<template slot="aaa">
				aaa
			</template>

		</slotMe>
		<slotMe>
			<!-- { xxx }:可以直接获得作用域对象的某一个属性 -->
			<template slot-scope="{ val }">
				<!--定义一个插槽，该插槽必须放在template标签内-->
				<li>{{val}}</li>
				<!-- 定义使用渲染方式 -->
			</template>
		</slotMe>

		<slotMe>
			<template slot-scope="props">
				<!--定义一个插槽，该插槽必须放在template标签内-->
				<h1>{{props.val}}</h1>
				<!-- 定义使用渲染方式 -->
			</template>

		</slotMe>
	</div>
</template>

<script>
	import slotMe from './slot-me.vue'
	export default {
		components: {
			slotMe
		}
	}
</script>

<style>

</style>
