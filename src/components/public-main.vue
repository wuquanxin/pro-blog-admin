<template>
	<div>
		<!-- 头部 -->
		<div class="header-view pa el-card">
			<!--  -->
			<public-header></public-header>
		</div>
		<!-- 内容 -->
		<div class="body-view pa">
			<!-- 左侧菜单 -->
			<div :class="[isCollapse ? 'men-shrink' : '' , 'menu-view pr animation']">
				<!--  -->
				<public-menu></public-menu>
				<div @click="changeMenuState" class="pa touchBtn text-center">
					<i :class="[isCollapse ? 'fa-chevron-right' : 'fa-chevron-left', 'fa']" aria-hidden="true"></i>
				</div>
			</div>
			<!-- 右侧内容 -->
			<div :class="[isCollapse ? 'con-expand' : '', 'content-view animation']">
				<!--  -->
				<router-view/>
			</div>
		</div>
	</div>
</template>
<script>
	import publicHeader from './public-header'
	import publicMenu from './public-menu'
	import Bus from '@u/bus'
	export default {
		data(){
			return {
				isCollapse: false,
			}
		},
		components: {
			publicHeader,
			publicMenu
		},
		methods: {
			changeMenuState(){
				this.isCollapse = !this.isCollapse;
				let arg = this.isCollapse;
				Bus.$emit('changeMenuState', arg);
				Bus.$emit('changeLogoState', arg);
			}
		}
	}
</script>
<style lang="scss" scoped>
	.header-view{
		height: 60px;
		top: 0;
		left: 0;
		right: 0;
		z-index: 2;
	}
	.body-view{
		display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    top:60px;
    bottom: 0;
    left: 0;
    right: 0;
    .animation{
    	transition: all .5s;
    }
    .menu-view{
			width: 300px;
    	height: 100%;
    }
    // menu合并
    .men-shrink{
    	width: 64px;
    }
    .content-view{
			-webkit-box-flex: 1;
	    -webkit-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    overflow-y: scroll;
	    padding: 20px;
	    overflow: auto;
    }
	}
	.touchBtn{
		width: 15px;
		height: 60px;
		line-height: 60px;
		background: #333;
		color: #fff;
		right: -15px;
		top: 50%;
		font-size: 14px;
		margin-top: -30px;
		border-top-right-radius: 15px;
		border-bottom-right-radius: 15px;
		cursor: pointer;
	}
</style>