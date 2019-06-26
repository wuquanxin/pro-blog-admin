<template>
	<div class="el-card">
		我是首页
	</div>
</template>
<script>
	export default {
		data(){
			return {

			}
		},
		methods: {

		},
		created(){
			setTimeout(() => {
				this.$showLoading();
			},1000)
			setTimeout(() => {
				this.$hideLoading();
			},1000)
		}
	}
</script>
<style lang="scss" scoped>
.el-card{
	font-size: 20px;
	padding: 100px 0;
	text-align: center;
}
</style>
