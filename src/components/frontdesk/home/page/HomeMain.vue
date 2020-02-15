<template>
  <div class="box">
    <tabs-navigation />
    <home-themelist />
  </div>
</template>

<script>
import TabsNavigation from "@frontdesk/home/components/tabsNavigation/TabsNavigation";
import HomeThemeList from "@frontdesk/home/components/themeList/ThemeList";

export default {
  name: "HomeMain",
  components: {
    "tabs-navigation": TabsNavigation,
    "home-themelist": HomeThemeList
  }
};
</script>

<style></style>
