<template>
<div>
<editor id="tinymce" v-model="editText" :init="init"></editor>
</div>
  
</template>

<script>
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import 'tinymce/themes/silver/theme.min.js';
import 'tinymce/skins/ui/oxide/skin.min.css';
import '@/assets/tinymce/langs/zh_CN.js';
import 'tinymce/plugins/wordcount'// 字数统计插件

export default {
  name: "TinymceEditor",
  components: {
    Editor
  },
  props: {
    value:{
      type:String,
      default:''
    },
     plugins: {
      type: [String, Array],
      default: 'wordcount'
    }
  },
  data() {
    return {
      init: {
        language: 'zh_CN',//语言
        height: 500,
        menubar: false,//顶部菜单栏显示
        resize: false,
         plugins: this.plugins,
      },
      editText:this.value
    };
  },
  mounted() {
    tinymce.init({});
  },
  watch:{
    editText:function(newVal,oldVal){
      this.$emit('update:value', newVal);
    }
  }
};
</script>

<style></style>
