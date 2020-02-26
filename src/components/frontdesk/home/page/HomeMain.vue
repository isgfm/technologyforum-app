<template>
  <div class="box">
    <tabs-navigation :tabrouter="tabrouter"/>
    <home-themelist />
  </div>
</template>

<script>
import TabsNavigation from "@frontdesk/home/components/tabsNavigation/TabsNavigation";
import HomeThemeList from "@frontdesk/home/components/themeList/ThemeList";

export default {
  name: "HomeMain",
  props:{
    tabrouter:{
      type:String,
      default:''
    }
  },
  components: {
    "tabs-navigation": TabsNavigation,
    "home-themelist": HomeThemeList
  }
};
</script>

<style></style>
