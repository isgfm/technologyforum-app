<template>
  <div>
    <editor id="tinymce" v-model="editText" :init="init"></editor>
  </div>
</template>

<script>
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver/theme.min.js";
import "tinymce/skins/ui/oxide/skin.min.css";
import "@/assets/tinymce/langs/zh_CN.js";
import "tinymce/plugins/wordcount"; // 字数统计插件
import { getUserListFromThemeReply } from "@api/user/user";
export default {
  name: "ReplyTinymceEditor",
  components: {
    Editor
  },
  created() {},
  props: {
    value: {
      type: String,
      default: ""
    },
    themeId: {},
    plugins: {
      type: [String, Array],
      default: "wordcount"
    }
  },
  data() {
    return {
      init: {
        language: "zh_CN", //语言
        height: 500,
        menubar: false, //顶部菜单栏显示
        resize: false,
        plugins: this.plugins,
        mentions_selector: "span.highlight",
        mentions_fetch: function(query, success) {
          if (this.replyUserList.length == 0) return;
          this.replyUserList.then(function(users) {
            users = users.filter(function(user) {
              return user.cUsername.indexOf(query.term.toLowerCase()) !== -1;
            });
            users = users.slice(0, 10);
            success(users);
          });
        },
        mentions_menu_complete: function(editor, userInfo) {
          var a = editor.getDoc().createElement("a");
          a.className = "highlight";
          // store the user id in the mention so it can be identified later
          a.setAttribute("data-mention-id", userInfo.cId);
          a.setAttribute("href","#")
          a.appendChild(
            editor.getDoc().createTextNode("@" + userInfo.cUsername)
          );
          return a;
        }
      },
      editText: this.value,
      replyUserList: []
    };
  },
  methods: {
    initReplyUserList() {
      getUserListFromThemeReply(this.themeId).then(data => {
        this.replyUserList = data.data;
      });
    },
    console(){
        console.log("test");
    }
  },
  mounted() {
    tinymce.init({});
  },
  watch: {
    editText: function(newVal, oldVal) {
      this.$emit("update:value", newVal);
    }
  }
};
</script>

<style>
.highlight {
  background: #ddd;
}
</style>
