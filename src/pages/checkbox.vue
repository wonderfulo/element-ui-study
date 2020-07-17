<template>
	<div>
		<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
		<div style="margin: 15px 0;"></div>
		<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
			<el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
		</el-checkbox-group>
	</div>
</template>
<script>
	const cityOptions = ['上海', '北京', '广州', '深圳'];
	export default {
		data() {
			return {
				//控制全选按钮是否处于选中状态,为true时显示  √，为false时 
				//有两种情况，一：isIndeterminate=true,此时显示 "-",
				//二：sIndeterminate=false,此时显示 " " 空,
				checkAll: false,	
				checkedCities: ['上海', '北京'],
				cities: cityOptions,
				//这个属性控制说明当前的多选框处于不确定状态，页面显示样式为 "-",选中为√，不选为空
				//只有在 至少有一个选中，并且 至少有一个未选中时：为true
				//该属性优先级>checkAll,当两者同时为true时，页面显示"-"
				isIndeterminate: true, 

			};
		},
		methods: {
			handleCheckAllChange(val) {
				//使复选框处于全部选中，或者全部未选中状态
				this.checkedCities = val ? cityOptions : [];
				this.isIndeterminate = false; //关闭不确定状态,不关闭会使checkAll = true，失效，因为优先级问题
			},
			handleCheckedCitiesChange(value) { //容器内 复选框有变化时触发
				//value：容器内选中的 复选框数组，length：获得个数
				let checkedCount = value.length;
				this.checkAll = checkedCount === this.cities.length;
				this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
			}
		}
	};
</script>

<style>
</style>
