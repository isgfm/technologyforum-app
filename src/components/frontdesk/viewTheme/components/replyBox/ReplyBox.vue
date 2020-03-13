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
      <vue-tribute :options="tributeOptions">
        <textarea
          name="content"
          maxlength="10000"
          class="mll"
          id="reply_content"
          style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 112px;"
        ></textarea>
      </vue-tribute>
      <div class="sep10"></div>
      <div class="fr">
        <div class="sep5"></div>
        <span class="gray">请尽量让自己的回复能够对别人有帮助</span>
      </div>
      <input type="submit" value="回复" class="super normal button" />
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
export default {
  data() {
    return {
      tributeOptions: {
        trigger: "@",
        selectClass: "highlight",
        iframe: null,
        menuItemTemplate: function(item) {
          return item.string;
        },
        noMatchTemplate: function() {
          return '<span style:"visibility: hidden;"></span>';
        },
        menuContainer: document.body,
        lookup: "key",
        positionMenu: true,
        values: [
          { key: "Phil Heartman", value: "pheartman" },
          { key: "Gordon Ramsey", value: "gramsey" }
        ]
      }
    };
  },
  components: {
    VueTribute
  },
  methods: {
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
    replyContent() {
      return this.$store.state.themeReplyStore.replyContent;
    }
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
.normal.button {
  background-color: #fff;
  color: #333;
  text-shadow: 0 1px 0 #fff;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 0 1px 0 rgba(66, 66, 77, 0.1);
}

.super.button {
  background-image: url("~@/assets/img/bg_blended_light.png");
  padding: 4px 8px;
  border: 1px solid rgba(80, 80, 90, 0.2);
  border-bottom-color: rgba(80, 80, 90, 0.35);
  border-radius: 3px;
  font-size: 14px;
  outline: 0;
}

ul li{
list-style-type:none;
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

.highlight {
  background: #ddd;
}
</style>
