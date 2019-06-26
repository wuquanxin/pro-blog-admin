<template>
  <div class="main">
    <vue-ueditor-wrap id="ue-box" v-model="content" :config="ueConfig" @ready="editorReady"></vue-ueditor-wrap>
    <button class="ylBtn" @click="ylHandle">{{preview}}</button>
    <div :class="['phone-box',toggleShow?'active':'']">
      <div class="stereo"></div>
      <div class="text" v-html="content"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
import { setBodyBg,isMain, isDev } from "@u/tools";
import VueUeditorWrap from "vue-ueditor-wrap";
export default {
  data() {
    return {
      content: "",
      preview: "预览",
      toggleShow: false,
      ueConfig: {
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 500,
        // 初始容器宽度
        initialFrameWidth: "100%",
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        // serverUrl: 'http://35.201.165.105:8000/controller.php',
        // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
        UEDITOR_HOME_URL: isDev() ? '/static/UEditor/' : (isMain()  ? "/main/system/static/UEditor/" : "/test/system/static/UEditor/")
      }
    };
  },
  components: {
    VueUeditorWrap
  },
  methods: {
    ylHandle() {
      this.preview = !this.toggleShow ? "收起" : "预览";
      return (this.toggleShow = !this.toggleShow);
    },
    submit() {
      console.log(this.result);
    },
    editorReady(ue) {
      console.log(ue);
      ue.execCommand('serverparam', function(editor) {
          return {
              'key': 'test'
          };
      })
      console.log("ueditor准备就绪");
    },
    setContent() {
      this.content = "这是一段话……";
    }
  },
  created() {
    setBodyBg("global-bg3");
  }
};
</script>

<style lang="scss" scoped>
body {
  color: #333;
}
.main {
  background-color: #fff;
  color: #333;
  position: relative;
  .ylBtn {
    line-height: 40px;
    border: 0;
    background-color: cadetblue;
    color: #fff;
    border-radius: 8px;
    margin: 15px;
    cursor: pointer;
  }
  .phone-box {
    background-color: rgba($color: #333333, $alpha: 0.9);
    height: 667px;
    width: 375px;
    position: fixed;
    right: -385px;
    top: 85px;
    z-index: 999;
    border-radius: 20px;
    box-shadow: 0 0 5px #666;
    transition: all 0.6s;
    overflow: hidden;
    .stereo{
      width: 40px;
      height: 10px;
      background-color: rgba(51, 51, 51, 0.6);
      border: 1px solid #fff;
      border-radius: 15px;
      margin: 20px auto 0;
    }
    .text {
      background-color: #fff;
      position: absolute;
      top: 55px;
      left: 15px;
      right: 15px;
      bottom: 55px;
    }
  }
  .phone-box.active {
    right: 20px;
  }
  .circle {
    position: absolute;
    bottom: 8px;
    transform: translateX(-50%);
    left: 50%;
    width: 40px;
    height: 40px;
    background-color: #dddddd;
    box-shadow: 0 0 5px #333333;
    border-radius: 50%;
  }
}
</style>
