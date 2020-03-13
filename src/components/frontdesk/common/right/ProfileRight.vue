<template>
  <div class="box">
    <div class="cell">
      <div class="row">
        <div class="col-2">
          <router-link :to="memberUrl(id)">
            <img :src="avatar" />
          </router-link>
        </div>
        <div class="col-1"></div>
        <div>
          <span class="bigger">
            <router-link :to="memberUrl(id)">{{ username }}</router-link>
          </span>
        </div>
      </div>
      <div class="sep3"></div>
      <div class="row">
        <div class="col-4">
          <a href="/my/nodes" class="dark text-center" style="display:block;">
            <span class="bigger">1</span>
            <div class="sep3"></div>
            <span class="gray">节点收藏</span>
          </a>
        </div>
        <div
          class="col-4"
          style="border-left: 1px solid rgba(100, 100, 100, 0.4); border-right: 1px solid rgba(100, 100, 100, 0.4);"
        >
          <a href="/my/topics" class="dark text-center" style="display:block;">
            <span class="bigger">2</span>
            <div class="sep3"></div>
            <span class="gray">主题收藏</span>
          </a>
        </div>
        <div
          class="col-4"
        >
          <a href="/my/following" class="dark text-center" style="display:block;">
            <span class="bigger">3</span>
            <div class="sep3"></div>
            <span class="gray">特别关注</span>
          </a>
        </div>
      </div>
    </div>
    <div class="cell">
      <div class="row">
        <div class="col-2">
          <router-link to="/new">
            <img :src="require('@/assets/img/compose.png')" width="28px"/>
          </router-link>
        </div>
        <div class="col-5 align-self-center">
          <router-link to="/new">创作新主题</router-link>
        </div>
      </div>
    </div>
    <div class="inner">
      <a href="/notifications" class="gray">0 条未读提醒</a>
    </div>
  </div>
</template>

<script>
import {memberRouter} from '@/router/routerUrl'
export default {
  name: "ProfileRight",
  computed: {
    avatar: function() {
      return this.$store.state.userStore.user.cAvatar;
    },
    username: function() {
      return this.$store.state.userStore.user.cUsername;
    },
    id:function(){
      return this.$store.state.userStore.user.nId;
    }
  },
  methods:{
    memberUrl(id){
      return memberRouter(id);
    }
  }
};
</script>

<style></style>
