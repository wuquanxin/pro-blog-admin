<template>
	<div>
		<el-card class="box-card login-box pr">
			<div class="panda pa">
				<img v-show="!focusObj.username && !focusObj.password" src="@a/panda/panda-none.png" alt="" />
				<img v-show="focusObj.username" src="@a/panda/panda-next.png" alt="" />
				<img v-show="focusObj.password" src="@a/panda/panda-all.png" alt="" />
			</div>
			<div class="margin-auto">
				<h2 class="logon-title text-center">人才加速器后台管理系统</h2>
				<el-form :rules="rules" ref="ruleForm" :model="form" label-width="80px">
					<el-form-item label="用户名" prop="username">
				    <el-input @focus="changeState('username', true)" @blur="changeState('username', false)" prefix-icon="el-icon-user" type="text" v-model="form.username"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="password">
				    <el-input @focus="changeState('password', true)" @blur="changeState('password', false)" prefix-icon="el-icon-lock" type="password" v-model="form.password"></el-input>
		    	</el-form-item>
		    	<!-- <el-form-item label="验证码" prop="imgcode">
				    <div class="codeImg-box clearfix">
				    	<div>
				    		<el-input prefix-icon="el-icon-picture-outline" type="text" v-model="form.imgcode"></el-input>
				    	</div>
				    	<div>
				    		<div class="code">
				    			<div @click="getTime = new Date().getTime()">
				    				<img :src="imgCodeLink" alt="" />
				    			</div>
				    		</div>
				    	</div>
				    </div>
		    	</el-form-item> -->
					<el-form-item class="text-right">
			    	<el-button type="success" @click="onSubmit">
			    		<i class="el-icon-s-promotion"></i>
			    		<span>登陆</span>
		    		</el-button>
			    </el-form-item>
				</el-form>
			</div>
		</el-card>
	</div>
</template>
<script>
	import { isMain, setStorageToekn, getStorageToekn } from '@u/tools'
	import { login } from '@/api/user'
	export default {
		data(){
			return {
				getTime: '',
				focusObj: {
					username: false,
					password: false
				},
				form:{
					username: '',
					password: '',
					imgcode: ''
				},
				rules: {
					username: [{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					},{
						min: 4,
						max: 16,
						message: '长度在 4 到 16 个字符',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					},{
						min: 4,
						max: 16,
						message: '长度在 4 到 16 个字符',
						trigger: 'blur'
					}],
					imgcode: [{
						required: true,
						message: '请输入验证码',
						trigger: 'blur'
					},{
						min: 4,
						max: 4,
						message: '长度在 4 个字符',
						trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			onSubmit(){
				// loading
				this.$showLoading();
				// 登陆
				login({
					username:this.form.username,
					password:this.form.password
				}).then((data)=>{
					this.$hideLoading();
					if(data.code == 500) {
						this.$alert(data.text);
					}else if(data.code == 200) {
						setStorageToekn(data.token);
						this.$router.push('/main/index');
					}

				});
			},
			changeState(key, bool){
				if(bool){
					this.focusObj[key] = true;
					return
				}
				this.focusObj[key] = false;
			}
		},
		beforeRouteEnter(to, from, next){
		  let token = getStorageToekn();
		  let isLogin = token && token.length === 32;
		  if(isLogin){
		  	// 进入系统首页
		  	next('/main/index');
		  }else{
		  	// 进入当前页面
		  	next()
		  }
		}
	}
</script>
<style lang="scss" scoped>
	.login-box{
		width: 500px;
		height: 350px;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -250px;
		margin-top: -175px;
		border-radius: 10px;
		overflow: visible;
		background: rgba(0,0,0,.7);
		.logon-title{
			font-size: 24px;
			line-height: 36px;
			padding: 0 0 20px;
		}
		.margin-auto{
			margin: 20px 50px;
		}
		.panda{
			left: 50%;
			margin-left: -60px;
			top: -75px;
			img{
				width: 120px;
			}
		}
		.codeImg-box{
			.code{
				padding: 0 5px;
			}
			>div{
				width: 50%;
				float: left;
			}
			img{
				max-width: 100%;
				vertical-align: middle;
			}
		}
	}
</style>