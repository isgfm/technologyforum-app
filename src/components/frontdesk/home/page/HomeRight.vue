<template>
  <div id="Rightbar">
    <div class="sep20"></div>
    <template v-if="isLogIn">
      <profile/>
      <div class="sep20"></div>
    </template>
    <today-hottheme />
    <div class="sep20"></div>
    <hot-node />
    <div class="sep20"></div>
    <forum-state />
    <div class="sep20"></div>
  </div>
</template>

<script>
import ForumState from "@frontdesk/home/components/forumState/ForumState";
import TodayHotTheme from "@frontdesk/home/components/todayHotTheme/TodayHotTheme";
import HotNode from "@frontdesk/home/components/hotNode/HotNode";
import ProfileRight from "@frontdesk/common/right/ProfileRight"
export default {
  name: "HomeRight",
  components: {
    "forum-state": ForumState,
    "today-hottheme": TodayHotTheme,
    "hot-node": HotNode,
    "profile":ProfileRight
  },
  computed:{
    isLogIn(){
      return this.$store.state.userStore.user != null;
    }
  }
};
</script>

<style></style>
