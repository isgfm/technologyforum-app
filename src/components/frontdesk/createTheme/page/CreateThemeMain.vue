<template>
  <div class="box">
    <content-header :tip="`创作新主题`"></content-header>
    <el-form
      ref="themeForm"
      :model="themeForm"
      :rules="rules"
      label-position="left"
    >
      <div class="cell">
        主题标题
      </div>
      <el-input
        maxlength="120"
        minlength="1"
        placeholder="请输入主题标题，如果标题能够表达完整内容，则正文可以为空"
        v-model="themeForm.themeTitle"
        show-word-limit
      ></el-input>

      <div class="cell">
        正文
      </div>
      <div prop="themeContent">
        <tinymce-editor :value.sync="themeForm.themeContent" />
      </div>
      <div class="cell">
        <ThemeClassSelect :value.sync="themeForm.themeClass" :depth="2" />
        <!-- <el-select v-model="themeForm.themeClass" placeholder="选择主题分类">
        <el-option v-for="option in options" :key="option.id" :label="option.name" :value="option.id"></el-option>
      </el-select> -->
      </div>
      <div>
        <el-button
          type="primary"
          @click.native.prevent="publishThemeToServer('themeForm')"
          >发布主题</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script>
import TinymceEditor from "@components/common/editor/TinymceEditor";
import ContentHeader from "@common/contentHeader/ContentHeader";
import ThemeClassSelect from "@common/select/ThemeClassSelect";
import { publishTheme } from "@api/theme/themeApi";
export default {
  name: "CreateThemeMain",
  components: {
    TinymceEditor,
    ContentHeader,
    ThemeClassSelect
  },
  data() {
    return {
      themeForm: {
        themeTitle: "",
        themeContent: "",
        themeClass: 3
      },
      rules: {
        // themeTitle: [
        //   {
        //     required: true,
        //     message: "请输入标题",
        //     trigger: "blur",
        //     placement: "top"
        //   }
        // ]
      }
    };
  },
  methods: {
    publishThemeToServer(formName) {
      let that = this;
      if (
        this.themeForm.themeTitle === "" ||
        this.themeForm.themeClass === ""
      ) {
        that.$message({
          message: "标题和分类不能为空",
          type: "error",
          showClose: true
        });
        return false;
      }
      publishTheme(this.themeForm)
        .then(data => {
          console.log("主题id为" + data.data);
        })
        .catch(error => {
          this.$message({
            message: error,
            type: "error",
            showClose: true
          });
        });
    }
  },
  watch: {
    //     'themeForm.themeClass' :{
    //       handler(newVal,oldVal){
    // console.log("旧值"+oldVal);
    //       console.log("新值"+newVal);
    //       },
    //       deep: true,
    //       immediate: true
    //     }
  }
};
</script>

<style></style>
