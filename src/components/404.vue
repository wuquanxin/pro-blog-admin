<template>
  <div class="un-box">
    <div style="margin-top: -20px;">
      <div class="wscn-http404">
        <div class="pic-404">
          <img class="pic-404__parent" :src="img_404" alt="404">
          <img class="pic-404__child left" :src="img_404_cloud" alt="404">
          <img class="pic-404__child mid" :src="img_404_cloud" alt="404">
          <img class="pic-404__child right" :src="img_404_cloud" alt="404">
        </div>
        <div class="bullshit">
          <div class="bullshit__oops">未知页面!</div>
          <div class="bullshit__headline">{{ message }}</div>
          <!-- <a href="/" class="bullshit__return-home" style="margin-top:50px;">返回首页</a> -->
          <router-link to="/main/index" class="bullshit__return-home" style="margin-top:50px;">返回首页</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import img_404 from '@a/404_images/404.png'
  import img_404_cloud from '@a/404_images/404_cloud.png'
  import { setBodyBg } from '@u/tools'
  export default {
    data() {
      return {
        img_404,
        img_404_cloud
      }
    },
    computed: {
      message() {
        return '没有找到相关页面,请点击以下按钮返回主页'
      }
    },
    created(){
      setBodyBg('global-bg3');
    }
  }
</script>

<style lang="scss" scoped>
  .un-box{
    width: 100%;
    height: 100%;
    overflow:hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .wscn-http404 {
    position: relative;
    width: 1200px;
    top: 0;
    left: 0;
    bottom: 0;
    margin: 20px auto 60px;
    padding: 0 100px;
    overflow: hidden;
    .pic-404 {
      position: relative;
      float: left;
      width: 600px;
      padding: 150px 0;
      overflow: hidden;
      &__parent {
        width: 100%;
      }
      &__child {
        position: absolute;
        &.left {
          width: 80px;
          top: 17px;
          left: 220px;
          opacity: 0;
          animation-name: cloudLeft;
          animation-duration: 2s;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
          animation-delay: 1s;
        }
        &.mid {
          width: 46px;
          top: 10px;
          left: 420px;
          opacity: 0;
          animation-name: cloudMid;
          animation-duration: 2s;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
          animation-delay: 1.2s;
        }
        &.right {
          width: 62px;
          top: 100px;
          left: 500px;
          opacity: 0;
          animation-name: cloudRight;
          animation-duration: 2s;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
          animation-delay: 1s;
        }
        @keyframes cloudLeft {
          0% {
            top: 17px;
            left: 220px;
            opacity: 0;
          }
          20% {
            top: 33px;
            left: 188px;
            opacity: 1;
          }
          80% {
            top: 81px;
            left: 92px;
            opacity: 1;
          }
          100% {
            top: 97px;
            left: 60px;
            opacity: 0;
          }
        }
        @keyframes cloudMid {
          0% {
            top: 10px;
            left: 420px;
            opacity: 0;
          }
          20% {
            top: 40px;
            left: 360px;
            opacity: 1;
          }
          70% {
            top: 130px;
            left: 180px;
            opacity: 1;
          }
          100% {
            top: 160px;
            left: 120px;
            opacity: 0;
          }
        }
        @keyframes cloudRight {
          0% {
            top: 100px;
            left: 500px;
            opacity: 0;
          }
          20% {
            top: 120px;
            left: 460px;
            opacity: 1;
          }
          80% {
            top: 180px;
            left: 340px;
            opacity: 1;
          }
          100% {
            top: 200px;
            left: 300px;
            opacity: 0;
          }
        }
      }
    }
    .bullshit {
      position: relative;
      float: left;
      width: 300px;
      padding: 150px 0;
      overflow: hidden;
      &__oops {
        font-size: 32px;
        font-weight: bold;
        line-height: 40px;
        color: #1482f0;
        opacity: 0;
        margin-bottom: 20px;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
      }
      &__headline {
        font-size: 20px;
        line-height: 24px;
        color: #1482f0;
        opacity: 0;
        margin-bottom: 10px;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-delay: 0.1s;
        animation-fill-mode: forwards;
      }
      &__info {
        font-size: 13px;
        line-height: 21px;
        color: grey;
        opacity: 0;
        margin-bottom: 30px;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-delay: 0.2s;
        animation-fill-mode: forwards;
      }
      &__return-home {
        display: block;
        float: left;
        width: 110px;
        height: 36px;
        background: #1482f0;
        border-radius: 100px;
        text-align: center;
        color: #ffffff;
        text-decoration: none;
        opacity: 0;
        font-size: 14px;
        line-height: 36px;
        cursor: pointer;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-delay: 0.3s;
        animation-fill-mode: forwards;
        transition: background .3s;
      }
      &__return-home:hover{
        background: red;
      }
      @keyframes slideUp {
        0% {
          transform: translateY(60px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
  }
</style>
