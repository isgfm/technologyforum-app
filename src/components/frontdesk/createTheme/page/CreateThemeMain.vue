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
    <div class="cell" prop="themeTitle">
      <el-input
        maxlength="120"
        minlength="1"
        placeholder="请输入主题标题，如果标题能够表达完整内容，则正文可以为空"
        v-model="themeForm.themeTitle"
        show-word-limit
      ></el-input>
    </div>
    <div class="cell">
      正文
    </div>
    <div prop="themeContent">
      <tinymce-editor v-model="themeForm.themeContent" />
    </div>
    <el-form-item prop="themeClass">
      <el-select v-model="themeForm.themeClass" placeholder="选择主题分类">
        <el-option v-for="option in options" :key="option.id" :label="option.name" :value="option.id"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
import TinymceEditor from "@components/common/editor/TinymceEditor";
import ContentHeader from '@common/contentHeader/ContentHeader'
export default {
  name: "CreateThemeMain",
  components: {
    TinymceEditor,
    ContentHeader
  },
  data() {
    return {
      themeForm: {
        themeTitle: "",
        themeContent: "",
        themeClass: ""
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
      },
      options:[
          {
              id:1,
              name:'程序员'
          },
          {
              id:2,
              name:'设计'
          }
      ]
    };
  }
};
</script>

<style></style>
