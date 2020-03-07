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
    <TopicButtons
      :click="theme.nClick"
      :keepCount="theme.nKeepCount"
      :themeId="theme.nId"
    />
    <div class="sep20"></div>
    <ReplyList :themeId="themeId"/>
  </div>
</template>

<script>
import { Ftime } from "@util/themeUtil";
import TopicButtons from "@frontdesk/viewTheme/components/topicButtons/TopicButtons";
import ReplyList from "@frontdesk/viewTheme/components/replyList/ReplyList";
import {getTheme} from "@api/theme/themeApi";
import { Message } from 'element-ui';
export default {
  components: {
    TopicButtons,
    ReplyList
  },
  props:{
    themeId:{
      type:Number
    }
  },
  created(){
    this.getThemeFromServer(this.themeId);
  },
  data() {
    return {
      theme: ""
    };
  },
  methods: {
    memberUrl(id) {
      return "/member/" + id;
    },
    ftime: function(timespan) {
      return Ftime(timespan);
    },
    getThemeFromServer:function(themeId){
      getTheme(themeId).then(data=>{
        this.theme = data.data;
      }).catch(error=>{
        this.$message({
          message: error+"主题加载错误",
          type: "error",
          showClose: true
        });
      })
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
