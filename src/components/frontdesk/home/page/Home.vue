<template>
  <div>
    <frontdesk-header></frontdesk-header>
    <div id="Wrapper">
      <div class="content">
        <div id="Rightbar">
          <div class="sep20"></div>
          <forum-state />
          <div class="sep20"></div>
          <today-hottheme/>
          <div class="sep20"></div>
          <hot-node/>
        </div>
        <div id="Main">
          <div class="sep20"></div>
          <div class="box">
            <tabs-navigation />
            <home-themelist />
          </div>
        </div>
      </div>
    </div>
    <frontdesk-footer></frontdesk-footer>
  </div>
</template>

<script>
import FrontdeskHeader from "@frontdesk/common/header/Header";
import FrontdeskFooter from "@frontdesk/common/footer/Footer";
import TabsNavigation from "@frontdesk/home/components/tabsNavigation/TabsNavigation";
import HomeThemeList from "@frontdesk/home/components/themeList/ThemeList";
import ForumState from "@frontdesk/home/components/forumState/ForumState";
import TodayHotTheme from "@frontdesk/home/components/todayHotTheme/TodayHotTheme"
import HotNode from "@frontdesk/home/components/hotNode/HotNode"
export default {
  name: "FrontdeskHome",
  components: {
    "frontdesk-header": FrontdeskHeader,
    "frontdesk-footer": FrontdeskFooter,
    "tabs-navigation": TabsNavigation,
    "home-themelist": HomeThemeList,
    "forum-state": ForumState,
    "today-hottheme":TodayHotTheme,
    "hot-node":HotNode
  },
  created: function() {
    this.getThemeClass();
  },
  methods: {
    getThemeClass: function() {
      this.$store.dispatch("getThemeClass").catch(error => {
        this.$message({
          type: "error",
          message: error + ":" + "分类加载失败",
          showClose: true
        });
      });
    }
  }
};
</script>
<style src="@/assets/css/frontdesk/home.css"></style>
<style scoped>
.content {
  min-width: 600px;
  max-width: 1100px;
  margin: 0 auto;
}
</style>
