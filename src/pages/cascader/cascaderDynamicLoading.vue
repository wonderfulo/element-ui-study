<template>
	<div>
		<el-row>
			<el-col :span="12">
				<el-cascader :props="props"></el-cascader>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	 let id = 0;
	export default {
	    data() {
	      return {
	        props: {
	          lazy: true,	//开启懒加载，在点击时触发数据加载
	          lazyLoad (node, resolve) {
	            const { level } = node;
	            setTimeout(() => {
	              const nodes = Array.from({ length: level + 1 })
	                .map(item => ({
	                  value: ++id,
	                  label: `选项${id}`,
	                  leaf: level >= 2	//控制是否为叶子节点，最后一级数据
	                }));
	              // 通过调用resolve将子节点数据返回，通知组件数据加载完成
	              resolve(nodes);
	            }, 1000);
	          }
	        }
	      };
	    }
	  };
</script>
