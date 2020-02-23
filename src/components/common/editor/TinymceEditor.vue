<template>
  <editor id="tinymce" v-model="value" :init="init"></editor>
</template>

<script>
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver";

export default {
  name: "TinymceEditor",
  components: {
    Editor
  },
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      init: {
        language_url: require('@/assets/tinymce/langs/zh_CN.js'),// 语言包的路径
        language: 'zh_CN',//语言
        skin_url: require("@/assets/tinymce/skins/ui/oxide"), // skin路径
        height: 300, //编辑器高度
        branding: false, //是否禁用“Powered by TinyMCE”
        menubar: false //顶部菜单栏显示
      }
    };
  },
  mounted() {
    tinymce.init({});
  }
};
</script>

<style></style>
