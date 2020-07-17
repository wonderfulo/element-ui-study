<template>
	<div>
		<div>远程搜索,可多选,可自行创建条目</div>
		<el-row>
			<el-col :span="24">
				<!-- filterable：开启可搜索功能
				 remote：开启远程功能，和可搜索配套试用
				 reserve-keyword：多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词
				 remote-method：输入框改变时触发事件
				 allow-create：可自行创建选项-->
				<el-select v-model="value" multiple filterable remote reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod"
				 :loading="loading"
				 allow-create>
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
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
				options: [],
				value: [],
				list: [],
				loading: false,
				states: ["Alabama", "Alaska", "Arizona",
					"Arkansas", "California", "Colorado",
					"Connecticut", "Delaware", "Florida",
					"Georgia", "Hawaii", "Idaho", "Illinois",
					"Indiana", "Iowa", "Kansas", "Kentucky",
					"Louisiana", "Maine", "Maryland",
					"Massachusetts", "Michigan", "Minnesota",
					"Mississippi", "Missouri", "Montana",
					"Nebraska", "Nevada", "New Hampshire",
					"New Jersey", "New Mexico", "New York",
					"North Carolina", "North Dakota", "Ohio",
					"Oklahoma", "Oregon", "Pennsylvania",
					"Rhode Island", "South Carolina",
					"South Dakota", "Tennessee", "Texas",
					"Utah", "Vermont", "Virginia",
					"Washington", "West Virginia", "Wisconsin",
					"Wyoming"
				]
			}
		},
		mounted() {
			this.list = this.states.map(item => {
				return {
					value: `value:${item}`,
					label: `label:${item}`
				};
			});
		},
		methods: {
			remoteMethod(query) {
				if (query !== '') {
					this.loading = true;
					setTimeout(() => {
						this.loading = false;
						this.options = this.list.filter(item => {
							return item.label.toLowerCase()
								.indexOf(query.toLowerCase()) > -1;
						});
					}, 200);
				} else {
					this.options = [];
				}
			}
		}
	}
</script>

<style>
</style>
