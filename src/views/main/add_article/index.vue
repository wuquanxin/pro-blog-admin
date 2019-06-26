<template>
  <!-- form -->
  <div class="form">
    <el-form :model="form">
      <el-form-item label="文章标题" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" placeholder="请输入要添加的文章标题"></el-input>
      </el-form-item>
      <!--  -->
      <el-form-item label="文章描述" :label-width="formLabelWidth">
        <el-input type="textarea" :rows="4" v-model="form.desc" autocomplete="off" placeholder="请输入文章描述"></el-input>
      </el-form-item>
      <!--  -->
      <div>
      	<h4 style="margin-left: 40px;font-weight:normal">文章内容：</h4>
      	<vue-editor v-model="content"></vue-editor>
      </div>

    </el-form>
    <div slot="footer" align="right" class="footer">
      <el-button type="primary" @click="submitHandle">保 存</el-button>
      <el-button @click="$router.go(-1)">返 回</el-button>
    </div>
  </div>
</template>
<script>
import { get, update } from "@/api/lecture_editor";
import { VueEditor } from "vue2-editor";
import { setBodyBg, isMain, isDev } from "@u/tools";
export default {
  data() {
    return {
      formLabelWidth: '110px',
      toggleShow: false,
      form: {
        id: null,
        name: "",
        desc: ""
      },
      content: "<h3>请输入文章内容：</h3>"
    };
  },
  methods: {
    ylHandle() {
      this.preview = !this.toggleShow ? "收 起" : "预 览";
      return (this.toggleShow = !this.toggleShow);
    },
    pullData() {
      // loading
      // this.$showLoading();
      // get({
      //   id: this.$route.query.id
      // }).then(data => {
      //   this.form = data.item;
      //   this.$hideLoading();
      // });
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
    }
  },
  components: {
      VueEditor
    },
  created() {
    this.pullData();
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
.quillWrapper {
	width: 1010px;
	margin-top: 20px;
	background: rgba(0,0,0,.3);
}
</style>
