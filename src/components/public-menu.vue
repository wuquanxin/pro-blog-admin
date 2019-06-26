<template>
	<div class="menus el-card">
		<el-menu :unique-opened="true" :default-active="activeMenu" class="el-menu-vertical-demo menu-box app-left-menu-reset" :collapse="isCollapse">
		  <div v-for="(item, index) in allRouter" :key="index">
		  	<!-- 一级 -->
				<el-menu-item v-if="!item.list" @click="goHome(item.path)" :key="''+index" :index="item.path">
					<i :class="item.elIcon"></i>
					<span slot="title">{{item.name}}</span>
				</el-menu-item>
				<!-- 二层 -->
				<el-submenu v-else :key="''+index" :index="''+index" style="">
					<template slot="title">
						<i class="el-icon-document"></i>
						<span v-show="!isCollapse">{{item.name}}</span>
					</template>
					<!-- 二层单一 -->
					<el-menu-item v-for="(item2, index2) in item.list" v-if="!item2.list" @click="goHome(item2.path)" :key="item2.path" :index="item2.path" style="padding-left: 60px;padding-right: 0;">
						<i class="el-icon-s-promotion"></i>
						<span slot="title">{{item2.name}}</span>
					</el-menu-item>
					<!-- 二层折叠 -->
					<el-submenu v-for="(item2, index2) in item.list"  v-if="item2.list" :key="''+index2" :index="index +'-'+index2" style="">
						<template slot="title">
							<i class="el-icon-document"></i>
							<span>{{item2.name}}</span>
						</template>
						<el-menu-item v-for="(item3, index3) in item2.list" @click="goHome(item3.path)" :key="item3.path" :index="item3.path" style="padding-left: 80px;padding-right: 0;">
							<i class="el-icon-s-promotion"></i>
							<span slot="title">{{item3.name}}</span>
						</el-menu-item>
					</el-submenu>
				</el-submenu>
				<!--  -->
			</div>
		</el-menu>
	</div>
</template>
<script>
	import Bus from '@u/bus'
	export default {
		data(){
			return {
				isCollapse: false,
				activeMenu: "",
				allRouter: [
					// {
					// 	name: "用户管理",
					// 	list: [
					// 		{
					// 			name: "管理组",
					// 			list: [
					// 				{
					// 					name: "角色管理",
					// 					path: '/main/index'
					// 				}
					// 			]
					// 		},
					// 		{
					// 			name: "用户组",
					// 			path: '/main/info'
					// 		}
					// 	]
					// },
					// {
					// 	name: "用户管理",
					// 	list: [
					// 		{
					// 			name: "管理组",
					// 			path: '/asd'
					// 		},
					// 		{
					// 			name: "用户组",
					// 			path: '/t'
					// 		}
					// 	]
					// },
					{
						name: "添加文章",
						path: '/main/add_article',
						elIcon: 'el-icon-document-add'
					},
					{
						name: "文章管理",
						path: '/main/management_article',
						elIcon: 'el-icon-document'
					},
					{
						name: "标签管理",
						path: '/main/management_lable',
						elIcon: 'el-icon-price-tag'
					}
				]
			}
		},
		methods: {
			goHome(path){
				this.$router.push(path);
			},
			bindEvent(){
				Bus.$on('changeMenuState', (bool) => {
					this.isCollapse = bool
				})
			},
			setActiveMenu(){
				// 设置选中
				this.activeMenu = this.$route.path;
			}
		},
		created(){
			this.bindEvent();
			this.setActiveMenu();
		},
		watch: {
			'$route'(to, from){
				this.setActiveMenu()
			}
		}
	}
</script>
<style lang="scss" scoped>
	.menus{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		overflow-y: auto;
		overflow-x: hidden;
	}
</style>
<style>
	.app-left-menu-reset{
		border-right: 0!important;
		background: #f4f4f4!important;
	}
/*	.el-menu--vertical{
		display: none!important;
	}*/
</style>