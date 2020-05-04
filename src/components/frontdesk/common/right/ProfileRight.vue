<template>
  <div class="box">
    <div class="cell">
      <div class="row no-gutters">
        <div class="col-3">
          <router-link :to="memberUrl(id)">
            <img :src="avatar" />
          </router-link>
        </div>
        <div class="col-1"></div>
        <div>
          <div class="bigger mx-auto">
            <router-link :to="memberUrl(id)">{{ username }}</router-link>
          </div>
        </div>
      </div>
      <div class="sep3"></div>
      <div class="row no-gutters">
        <div class="col-4">
          <router-link
            to="/my/nodes"
            class="dark text-center"
            style="display:block;"
          >
            <span class="bigger">{{ keepNodeCount }}</span>
            <div class="sep3"></div>
            <span class="gray">节点收藏</span>
          </router-link>
        </div>
        <div
          class="col-4"
          style="border-left: 1px solid rgba(100, 100, 100, 0.4); border-right: 1px solid rgba(100, 100, 100, 0.4);"
        >
          <router-link
            to="/my/themes"
            class="dark text-center"
            style="display:block;"
          >
            <span class="bigger">{{ keepThemeCount }}</span>
            <div class="sep3"></div>
            <span class="gray">主题收藏</span>
          </router-link>
        </div>
        <div class="col-4">
          <router-link
            to="/my/attention"
            class="dark text-center"
            style="display:block;"
          >
            <span class="bigger">{{ attentionCount }}</span>
            <div class="sep3"></div>
            <span class="gray">特别关注</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="cell">
      <div class="row no-gutters">
        <div class="col-2">
          <router-link to="/new">
            <img :src="require('@/assets/img/compose.png')" width="28px" />
          </router-link>
        </div>
        <div class="col-5 align-self-center">
          <router-link to="/new">创作新主题</router-link>
        </div>
      </div>
    </div>
    <div class="inner">
      <router-link to="/notifications" class="gray">{{ notifyCount }} 条未读提醒</router-link>
    </div>
  </div>
</template>

<script>
import { memberRouter } from "@/router/routerUrl";
import { getUserStateCountByUserId } from "@api/user/user";

export default {
  name: "ProfileRight",
  created() {
    this.getUserStateCountByUserIdFromServer(this.id);
  },
  data() {
    return {
      // keepNodeCount: 0,
      // keepThemeCount: 0,
      // attentionCount: 0,
      // notifyCount: 0,
    };
  },
  computed: {
    avatar: function() {
      return this.$store.state.userStore.user.cAvatar;
    },
    username: function() {
      return this.$store.state.userStore.user.cUsername;
    },
    id: function() {
      return this.$store.state.userStore.user.nId;
    },
    keepNodeCount: function() {
      return this.$store.state.keepStore.keepNodeCount;
    },
    keepThemeCount: function() {
      return this.$store.state.keepStore.keepThemeCount;
    },
    attentionCount: function() {
      return this.$store.state.keepStore.attentionCount;
    },
    notifyCount: function() {
      return this.$store.state.keepStore.notifyCount;
    },
  },
  methods: {
    memberUrl(id) {
      return memberRouter(id);
    },
    getUserStateCountByUserIdFromServer(userId) {
      getUserStateCountByUserId(userId)
        .then((data) => {
          let result = data.data;
          // this.keepNodeCount = result.keepNodeCount;
          // this.keepThemeCount = result.keepThemeCount;
          // this.attentionCount = result.attentionCount;
          // this.notifyCount = result.notifyCount;
          let keepNodeCount = result.keepNodeCount;
          let keepThemeCount = result.keepThemeCount;
          let attentionCount = result.attentionCount;
          let notifyCount = result.notifyCount;
          this.$store.dispatch("initCount", {
            keepNodeCount,
            keepThemeCount,
            notifyCount,
            attentionCount
          });
        })
        .catch((error) => {
          this.$message({
            message: "加载用户状态失败",
            type: "error",
            showClose: true,
          });
        });
    },
  },
};
</script>

<style></style>
