<template>
	<div>
		<div class="block">
		  <span class="demonstration">默认不区分颜色</span>
		  <el-rate v-model="value1"></el-rate>
		</div>
		<div class="block">
		  <span class="demonstration">区分颜色</span>
		  <!-- show-text：在评分之后显示文字，用于提示用户的体验度 
		  texts：自定义提示内容，为一个数组，长度应等于最大值 max。
		  icon-classes：改变显示的图标，可以传入一个数组，一般有3个值
		  或者传入对象，分别设置每一个星级对象的图标
		  void-icon-class：未选中时的图标样式-->
		  <el-rate
		    v-model="value2"
		    :colors="colors"
			 show-text
			 :texts="tipList"
			 :icon-classes="iconClasses"
			 void-icon-class="icon-rate-face-off">
		  </el-rate>
		</div>
		
	</div>
</template>
<script>
  export default {
    data() {
      return {
		  //value：该值记录的是数字，范围为1~5
        value1: null,
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#08F243']  ,// 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
		tipList: ["极差","较差","一般","不错","完美"],
		 iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
      }
    }
  }
</script>
<style>
	@import "../../assets/css/docs.84b973e.css";
</style>