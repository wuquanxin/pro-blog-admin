<template>
  <div class="clearfix">
    <div class="head-l pull-left">
      <router-link :class="[isCollapse ? '' : 'open', 'logo']" to="/main/index">
        <i class="fa fa-home fa-2x" aria-hidden="true"></i>
        <span>我的博客</span>
      </router-link>
      <ul class="nav-list pull-left">
        <li ref="active" v-for="item in navDataList">
          <router-link :to="item.path">
            <span class="float-top btn-float"></span>
            <span class="float-bottom btn-float"></span>
            <span class="nav-tag">{{item.name}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="head-r pull-right">
      <div class="user">
        <el-dropdown class="pull-right">
          <div class="el-dropdown-link user-logo">
            <img :src="userData.headImg">
          </div>
          <el-dropdown-menu slot="dropdown">
					  <router-link class="inlineBlock" to="/main">
						  <el-dropdown-item>
								<i class="fa fa-cog" aria-hidden="true"></i>
								<span>网站信息</span>
						  </el-dropdown-item>
	          </router-link>
	          <router-link class="inlineBlock" to="/main">
						  <el-dropdown-item>
								<i class="fa fa-user" aria-hidden="true"></i>
								<span>个人信息</span>
						  </el-dropdown-item>
	          </router-link>
	          <router-link class="inlineBlock" to="/main">
						  <el-dropdown-item>
								<i class="fa fa-lock" aria-hidden="true"></i>
								<span>密码修改</span>
						  </el-dropdown-item>
	          </router-link>
          <el-dropdown-item>
            <i class="fa fa-sign-out" aria-hidden="true"></i>
            <span @click="loginOutHandle">退出登陆</span>
          </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="pull-right user-data user-name">
      <p>{{userData.name}}</p>
    </div>
    <div class="pull-right user-data pr">
      <div class="right-ico-btn pull-right">
        <i class="fa fa-refresh fa-1x" aria-hidden="true"></i>
        <span>刷新</span>
      </div>
      <div class="right-ico-btn pull-right">
        <i class="fa fa-bell pr" aria-hidden="true">
					<!-- 小红点 -->
					<span class="pa spot"></span>
				</i>
        <span>通知</span>
      </div>
      <div class="pa br-line"></div>
    </div>
  </div>
</template>
<script>
import Bus from '@u/bus'
import {
  setStorageToekn
} from '@u/tools'
import {
  getUser,
  loginOut
} from '@/api/user'
export default {
  data() {
      return {
        isCollapse: false,
        navDataList: [{
          name: '首页',
          path: '/main/index'
        }],
        userData: {}
      }
    },
    methods: {
      loginOutHandle() {
        loginOut()
          .then((data) => {
            if (data.code == 200) {
              setStorageToekn(false);
              this.$router.go(0);
            }
          })
      },
      pullData() {
        getUser()
          .then((data) => {
            if (data.code == 200) {
              this.userData = data.information
            }
          })
      }
    },
    created() {
      this.pullData();
      Bus.$on('changeLogoState', (bool) => {
        this.isCollapse = bool;
      })
    }
}
</script>
<style lang="scss" scoped>
.el-card__body {
  padding: 0;
}

.logo {
  height: 60px;
  float: left;
  line-height: 60px;
  width: 64px;
  text-align: center;
  color: #fff;
  border-right: 1px solid rgba(0, 0, 0, .2);
  overflow: hidden;
  transition: all .5s;
  >i {
    vertical-align: middle;
  }
  >span {
    display: none;
  }
}

.logo.open {
  width: 300px;
  >span {
    display: inline-block;
    padding: 0 10px;
  }
}

.nav-list {
  margin: 0;
  list-style: none;
  margin: 0;
  padding-left: 10px;
  .btn-float {
    position: absolute;
    border-radius: 2px;
    transition: all .3s;
    background: #fe893c;
    width: 100%;
    opacity: 0;
    height: 2px;
    right: 0;
    left: 0;
  }
  .float-top {
    top: 0;
    transform: translateY(-20px);
  }
  .float-bottom {
    bottom: 0;
    transform: translateY(20px);
  }
  .nav-tag {
    color: #fff;
    transition: all .4s;
  }
  li {
    float: left;
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    a {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      vertical-align: top;
      padding: 0 20px;
      color: #fff;
      position: relative;
      text-decoration: none;
      vertical-align: middle;
    }
    a:hover .float-top,
    a:hover .float-bottom {
      opacity: 1;
      transform: translateY(0px);
    }
    a:hover .nav-tag {
      color: #fe893c;
    }
  }
  li.active {
    .btn-float {
      opacity: 1;
      background: #fe893c;
    }
    .nav-tag {
      color: #fe893c;
    }
    .float-top {
      top: 10px;
    }
    .float-bottom {
      bottom: 10px;
    }
  }
  li.active:hover .btn-float {
    display: none;
  }
}

.user-logo {
  line-height: 60px;
  padding: 0 10px;
  cursor: pointer;
  img {
    border-radius: 10px;
    overflow: hidden;
    width: 38px;
    height: 38px;
    display: inline-block;
    vertical-align: middle;
  }
}

.user-data {
  margin: 0;
  height: 60px;
  line-height: 60px;
  padding: 0 0 0 10px;
  p {
    margin: 0;
    cursor: pointer;
  }
  .right-ico-btn {
    padding: 0 10px;
    cursor: pointer;
    color: #fff;
    transition: color .3s;
    >span {
      padding: 0 5px;
    }
  }
  .right-ico-btn:hover {
    color: #fb6d1a;
  }
  .br-line {
    height: 40px;
    right: 0;
    top: 50%;
    margin-top: -20px;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }
  .spot {
    width: 8px;
    height: 8px;
    background: red;
    border-radius: 4px;
    right: -3px;
    top: -2px;
  }
}

.user-name:hover {
  color: red;
}
</style>
