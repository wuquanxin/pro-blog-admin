<template>
  <!-- form -->
  <div class="form">
    <el-form :model="form">
      <el-form-item label="编辑讲座" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" placeholder="请输入要修改的讲座名称"></el-input>
      </el-form-item>
      <!--  -->
      <el-form-item label="渠道名称" :label-width="formLabelWidth">
        <el-input v-model="form.source" autocomplete="off" placeholder="请输入渠道名称"></el-input>
      </el-form-item>
      <!--  -->
      <el-form-item label="说明文字" :label-width="formLabelWidth">
        <el-input v-model="form.desc"  type="textarea" :rows="4" autocomplete="off" placeholder="请输入说明文字"></el-input>
      </el-form-item>
      <!--  -->
      <el-form-item label="回复文字" :label-width="formLabelWidth">
        <el-input v-model="form.text"  type="textarea"  :rows="4" autocomplete="off" placeholder="请输入回复文字"></el-input>
      </el-form-item>
      <!--  -->
      <el-form-item label="结束时间" :label-width="formLabelWidth">
        <el-date-picker v-model="form.end_time" type="datetime" placeholder="请输入结束时间"></el-date-picker>
      </el-form-item>
      <!--  -->
      <el-form-item class="textEnd" label="结束后回复文字" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.text_end"  :rows="4"  placeholder="请输入结束后回复文字"></el-input>
      </el-form-item>
     
      <!--  -->
      <el-form-item label="活码链接"  :label-width="formLabelWidth" >
        <el-input v-model="form.link" autocomplete="off" placeholder="请输入渠道名称"></el-input>
      </el-form-item>
      <!--  -->
      <el-form-item label="活动详情"  :label-width="formLabelWidth">
        <vue-ueditor-wrap id="ue-box" v-model="form.detail" :config="ueConfig" @ready="editorReady"></vue-ueditor-wrap>
      </el-form-item>
      <!-- 手机模型 -->
      <div :class="['phone-box',toggleShow?'active':'']">
        <div class="stereo"></div>
        <div class="text">
           <!-- 手机模型内部内容 -->
          <div class="header">
            <div class="left">
              <span>4</span><br/>
              影响力
            </div>
            <div class="center">
              <span>阿木木</span><br/>
              邀请更多好友，获得影响力值！
            </div>
            <div class="right">
              <img src="@a/panda/panda-none.png" alt="">
            </div>
          </div>
          <!-- tab -->
          <div class="tab">
            <div class="tab-head">
              <img src="@a/lecture/main1.png" alt="">
              <p>影响力排行</p>
            </div>
            <div class="tab-head">
              <img src="@a/lecture/main22.png" alt="">
              <p>活动详情</p>
            </div>
            <div class="tab-head">
              <img src="@a/lecture/main3.png" alt="">
              <p>影响力排行</p>
            </div>
          </div>
          <!-- 内容 txt-->
          <div class="content" v-html="form.detail"></div>
        </div>
        <div @click="ylHandle" class="circle"></div>
      </div>
    </el-form>
    <div slot="footer" align="right" class="footer">
      <el-button type="primary" @click="submitHandle">保 存</el-button>
      <el-button type="primary"  @click="ylHandle">{{preview}}</el-button>
      <el-button @click="$router.go(-1)">返 回</el-button>
    </div>
  </div>
</template>
<script>
import { get, update } from "@/api/lecture_editor";
import VueUeditorWrap from "vue-ueditor-wrap";
import { setBodyBg, isMain, isDev } from "@u/tools";
export default {
  data() {
    return {
      formLabelWidth: '110px',
      toggleShow: false,
      preview: "预 览",
      ueConfig: {
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 300,
        // 初始容器宽度
        initialFrameWidth: "100%", // isMain()  ? "/test/system/static/UEditor/" : "/static/UEditor/"
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        // serverUrl: 'http://35.201.165.105:8000/controller.php',
        // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
        UEDITOR_HOME_URL: isDev() ? '/static/UEditor/' : (isMain()  ? "/main/system/static/UEditor/" : "/test/system/static/UEditor/")
      },
      form: {
        id: null,
        name: "",
        source: "",
        desc: "",
        text: "",
        end_time: "",
        text_end: "",
        link: "",
        detail: ""
      }
    };
  },
  components: {
    VueUeditorWrap
  },
  methods: {
    ylHandle() {
      this.preview = !this.toggleShow ? "收 起" : "预 览";
      return (this.toggleShow = !this.toggleShow);
    },
    pullData() {
      // loading
      this.$showLoading();
      get({
        id: this.$route.query.id
      }).then(data => {
        this.form = data.item;
        this.$hideLoading();
      });
    },
    // 提交修改后的数据
    submitHandle(){
      if(
        this.form.id && 
        this.form.name && 
        this.form.source && 
        this.form.desc && 
        this.form.text && 
        this.form.end_time && 
        this.form.text_end && 
        this.form.link && 
        this.form.detail
      ){
          update({
            id:this.form.id, 
            name:this.form.name, 
            source:this.form.source, 
            desc:this.form.desc, 
            text:this.form.text, 
            end_time:this.form.end_time, 
            text_end:this.form.text_end, 
            link:this.form.link,
            detail:this.form.detail
          }).then((data)=>{
            this.$message({
              message: '提交成功！',
              type: 'success'
            });
            this.$router.push('/main/lecture_editor');
          });
      }else{
        this.$message({
          message: '数据不能为空！',
          type: 'warning'
        });
      }
    },
    editorReady(ue) {
      ue.execCommand("serverparam",(editor)=>{
        return {
          key: this.$route.path+"?id="+this.$route.query.id
        };
      });
      console.log("ueditor准备就绪");
    }
  },
  created() {
    this.pullData();
    setBodyBg("global-bg3");
  }
};
</script>

<style lang="scss" scoped>
.form {
  padding: 15px 15px 15px 60px;
  .el-input,.el-textarea {
    width: 800px;
  }
  #ue-box{
    width: 800px;
    display: inline-block;
    line-height: 1;
  }
  .footer{
    margin-top: 60px;
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
      background-color: #e8e8e8;
      overflow-y: scroll;
      color: #333333;
      position: absolute;
      top: 55px;
      left: 15px;
      right: 15px;
      bottom: 55px;
      .header{
        background: linear-gradient(#1d1c21,#3c3c3c);
        padding:30px 10px;
        display: flex;
        align-items: center;
        color: #ffffff;
        .left{
          font-size: 14px;
          color: #feca05;
          span{
            font-size: 24px;
          }
        }
        .center{
          border-left: 1px solid #666;
          padding-left: 8px;
          margin-left: 8px;
          font-size: 14px;
          span{
            font-size: 18px;
            font-weight: normal;
          }
        }
        .right{
          width: 50px;
          height: 50px;
          background-color: #dddddd;
          border-radius: 50%;
          overflow: hidden;
          flex: none;
          margin-left: auto;
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
      .tab{
        margin: -20px  10px auto;
        display: flex;
        font-size: 14px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 3px 1px 1px #cccccc;
        padding: 10px 0;
        .tab-head{
          flex: 1;
          text-align: center;
          img{
            width:30px;
            height: 30px;
          }
        }
      }
      .content{
        font-size: 14px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 3px 1px 1px #cccccc;
        padding: 10px;
        margin: 15px 10px;
      }
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
    cursor: pointer;
  }
}
</style>
