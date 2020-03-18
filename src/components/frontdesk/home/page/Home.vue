<template>
  <div>
    <frontdesk-header></frontdesk-header>
    <div id="Wrapper">
      <div class="content">
        <router-view name="right"></router-view>
        <div id="Main">
          <div class="sep20"></div>
          <router-view name="main"></router-view>
        </div>
      </div>
    </div>
    <frontdesk-footer></frontdesk-footer>
  </div>
</template>

<script>
import FrontdeskHeader from "@frontdesk/common/header/Header";
import FrontdeskFooter from "@frontdesk/common/footer/Footer";


export default {
  name: "FrontdeskHome",
  components: {
    "frontdesk-header": FrontdeskHeader,
    "frontdesk-footer": FrontdeskFooter
  }
};
</script>
<style src="@/assets/css/frontdesk/home.css"></style>
<style scoped>

</style>
