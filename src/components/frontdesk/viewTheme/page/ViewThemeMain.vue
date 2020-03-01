<template>
  <div class="box">
    <div class="header">
      <div class="fr">
        <router-link :to="memberUrl(id)"
          ><img
            :src="avatar"
            class="avatar"
            border="0"
            align="default"
            alt="misakarin"
            loading="lazy"
        /></router-link>
      </div>
      <router-link to="/">V2EX</router-link>
      <span class="chevron">&nbsp;›&nbsp;</span>
      <router-link></router-link>
      <div class="sep10"></div>
      <h1>{{ theme.cThemeTitle }}</h1>
      <small class="gray">
        <router-link :to="memberUrl(id)">{{ username }}</router-link> ·
        {{ ftime(theme.dCreateTime) }} {{ theme.nClick }} 次点击 &nbsp;
      </small>
    </div>
    <div class="cell">
      <div class="topic_content">
        <div class="markdown_body">
          {{ theme.cThemeContent }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Ftime } from "@util/themeUtil";

export default {
  data() {
    return {
      theme: "",
      reply: []
    };
  },
  methods: {
    memberUrl(id) {
      return "/member/" + id;
    },
    ftime: function(timespan) {
      return Ftime(timespan);
    }
  },
  computed: {
    id: function() {
      return this.$store.state.userStore.user.nId;
    },
    username: function() {
      return this.$store.state.userStore.user.cUsername;
    }
  }
};
</script>

<style>
.topic_content {
  font-size: 14px;
  line-height: 1.6;
  color: #000;
  word-break: break-word;
}
</style>
