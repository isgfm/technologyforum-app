<template>
  <div v-title :data-title="theme.cThemeTitle">
    <div class="box">
      <div class="header">
        <div class="fr">
          <router-link :to="memberUrl(themeOwner.nId)"
            ><img
              :src="themeOwner.cAvatar"
              class="avatar"
              border="0"
              align="default"
              alt="misakarin"
              loading="lazy"
          /></router-link>
        </div>
        <router-link to="/">V2EX</router-link>
        <span class="chevron">&nbsp;›&nbsp;</span>
        <router-link :to="nodeUrl(theme.nThemeClass)">{{
          themeClassName
        }}</router-link>
        <div class="sep10"></div>
        <h1>{{ theme.cThemeTitle }}</h1>
        <small class="gray">
          <router-link :to="memberUrl(themeOwner.nId)">{{
            themeOwner.cUsername
          }}</router-link>
          · {{ ftime(theme.dCreateTime) }} ·&nbsp;{{ theme.nClick }} 次点击
          &nbsp;
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
    </div>
    <div class="sep20"></div>
    <ReplyList :themeId="themeId" />
    <div class="sep20"></div>
    <!-- <template v-if="">

    </template> -->
    <ReplyBox :themeId="themeId"/>
  </div>
</template>

<script>
import { Ftime } from "@util/themeUtil";
import TopicButtons from "@frontdesk/viewTheme/components/topicButtons/TopicButtons";
import ReplyList from "@frontdesk/viewTheme/components/replyList/ReplyList";
import { getTheme } from "@api/theme/themeApi";
import { Message } from "element-ui";
import ReplyBox from "../components/replyBox/ReplyBox"
import {memberRouter,nodeRouter} from '@/router/routerUrl';
export default {
  components: {
    TopicButtons,
    ReplyList,
    ReplyBox
  },
  props: {
    themeId: {}
  },
  created() {
    this.getThemeFromServer(this.themeId);
  },
  data() {
    return {
      theme: "",
      themeOwner: "",
      themeClassName: ""
    };
  },
  methods: {
    nodeUrl: function(router) {
      return nodeRouter(router);
    },
    memberUrl(id) {
      return memberRouter(id);
    },
    ftime: function(timespan) {
      return Ftime(timespan);
    },
    getThemeFromServer: function(themeId) {
      getTheme(themeId)
        .then(data => {
          this.theme = data.data.theme;
          this.themeOwner = data.data.themeOwner;
          this.themeClassName = data.data.themeClassName;
        })
        .catch(error => {
          this.$message({
            message: error + "主题加载错误",
            type: "error",
            showClose: true
          });
        });
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
