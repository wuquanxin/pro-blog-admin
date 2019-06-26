<template>
  <div class="el-card pd20">
    <div class="main">
      <div class="search-box"></div>
      <!-- list -->
      <div class="list-box">
        <el-table :data="list" show-overflow-tooltip border style="width: 100%">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column type="index" width="100" label="序号"></el-table-column>
          <el-table-column prop="id" label="ID" width="100"></el-table-column>
          <el-table-column prop="name" label="讲座名称"></el-table-column>
          <el-table-column label="操作" width="180">
              <template slot-scope="scope">
                  <el-button type="primary" size="mini" icon="el-icon-edit" @click="updateHandle(scope.$index, scope.row)" circle></el-button>
                  <!-- <el-button type="danger" size="mini" icon="el-icon-delete" circle></el-button> -->
              </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 添加按钮 -->
      <el-button type="primary" class="addBtn" size="mini" icon="el-icon-circle-plus" @click="dialogFormVisible = true" circle></el-button>
      <!-- 分页 -->
      <el-pagination class="pages" 
        :page-sizes="[25, 50, 75, 100,200,300,400,500]"
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange" 
        :page-size="pages.size" 
        :current-page="pages.page"
        background 
        layout="sizes,prev, pager, next" 
        :total="pages.count"> 
      </el-pagination>
    </div>
    
    <el-dialog title="添加讲座名称" :visible.sync="dialogFormVisible">
      <div class="addDialog">
        <el-form :model="form">
          <el-form-item label="讲座名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addHandle">确 定</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { setBodyBg  } from "@u/tools";
import { list,add } from "@/api/lecture_editor";
export default {
  data() {
    return {
      list: [],
      pages: {},
      dialogFormVisible:false,
      form:{
        id:null,
        name:''
      }
    };
  },
  methods: {
    // 调整每页显示条数
    handleSizeChange(val) {
      this.pages.size = val;
      this.pullData();
    },
    // 触发分页
    handleCurrentChange(val) {
      this.pages.page = val;
      this.pullData();
    },
    //   修改
    updateHandle(index,row){
        this.$router.push({
            path:'/main/lecture_editor_form',
            query:{
                id:row.id
            }
        });
    },
    //   添加
    addHandle(){
      add({
        name:this.form.name
      }).then((data)=>{
        this.dialogFormVisible = false;
        this.$message({
          message: '添加成功',
          type: 'success'
        });
        this.$router.push({
            path:'/main/lecture_editor_form',
            query:{
                id:data.id
            }
        });
      });
    },
    //   获取列表数据
    pullData() {
      // loading
      this.$showLoading();
      list({
        page:this.pages?this.pages.page:null,  //页码，默认1
        size:this.pages?this.pages.size:null   //每页数量，默认25
      }).then(data => {
        this.list = data.list;
        this.pages = data.pager;
        this.$hideLoading();
      });
    }
  },
  created() {
    setBodyBg("global-bg3");
    this.pullData();
  }
};
</script>

<style lang="scss" scoped>
.main{
  position: relative;
}
.addBtn{
  position: absolute;
  left: 0;
  bottom: 0;
}
.addDialog{
  text-align: right;
}
.pages{
  text-align: right;
  margin-top: 30px;
}
</style>
<style>
.addDialog .el-form-item__content{
  text-align: left;
}
.addDialog  .el-input{
  width: 500px;
}
.addDialog  .el-input input{
  background-color: #fff !important;
  color: #333 !important;
}
</style>
