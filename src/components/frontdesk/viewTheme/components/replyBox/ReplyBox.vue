<template>
  <div
    class="box"
    id="reply-box"
    v-bind:class="{ 'reply-box-sticky': isSticky }"
  >
    <div class="cell">
      <div class="fr">
        <a
          href="#"
          @click="undockReplyBox"
          id="undock-button"
          v-bind:class="{ 'hidden-element': !isSticky }"
          >取消回复框停靠</a
        >
        &nbsp; &nbsp;
        <a href="#" @click="backToTop">回到顶部</a>
      </div>
      添加一条新回复
    </div>
    <div class="cell">
      <!-- <vue-tribute :options="tributeOptions">
        <textarea
          name="content"
          maxlength="10000"
          class="mll"
          id="reply_content"
          style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 112px;"
        ></textarea>
      </vue-tribute> -->
      <CKEditor :value.sync="replyContent" :themeId="themeId" />
      <div class="sep10"></div>
      <div class="fr">
        <div class="sep5"></div>
        <span class="gray">请尽量让自己的回复能够对别人有帮助</span>
      </div>
      <input
        type="submit"
        @click="submiRreply"
        value="回复"
        class="super normal button"
      />
    </div>
    <div class="inner">
      <div class="fr"><router-link to="/">← V2EX</router-link></div>
      &nbsp;
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import VueTribute from "vue-tribute";
import ReplyTinymceEditor from "@components/common/editor/ReplyTinymceEditor";
import CKEditor from "@components/common/editor/CKEditor";
import { reply } from "@api/theme/themeReplyApi";
import { Message } from "element-ui";
export default {
  props: {
    themeId: {}
  },
  data() {
    return {
      replyContent: ""
    };
  },
  components: {
    CKEditor
  },
  methods: {
    submiRreply() {
      if (this.replyContent === "") {
        Message({
          type: "warning",
          showClose: true,
          message: "请输入回复内容"
        });
      } else{
          reply(this.themeId, this.replyContent).then(data=>{
              this.replyContent = '';
          }).catch(error=>{
              console.log(error);
          })
          
      }
    },
    backToTop() {
      var doc = document.documentElement;
      $(doc).animate(
        {
          scrollTop: 0
        },
        500
      );
    },
    undockReplyBox() {
      this.$store.dispatch("change_isSticky", false);
    }
  },
  computed: {
    isSticky() {
      return this.$store.state.themeReplyStore.isSticky;
    },
    replyContent2() {
      return this.$store.state.themeReplyStore.replyContent;
    }
  },
  watch: {
    //     'replyContent' :{
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

<style>
#reply-box {
  transition: box-shadow 0.25, background-color 0.25s;
}

.reply-box-sticky {
  position: sticky;
  bottom: -2px;
  top: -2px;
}


ul li {
  list-style-type: none;
}

.mll {
  border-radius: 3px;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  display: block;
  width: 100%;
  height: 8em;
  overflow-y: auto;
  font-family: helvetica neue, luxi sans, dejavu sans, Tahoma, hiragino sans gb,
    microsoft yahei, sans-serif;
  resize: vertical;
  box-sizing: border-box;
}
</style>
