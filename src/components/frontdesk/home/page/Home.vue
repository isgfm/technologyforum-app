<template>
  <div>
    <frontdesk-header></frontdesk-header>
    <div>
      中间
    </div>
    <frontdesk-footer></frontdesk-footer>
  </div>
</template>

<script>
import FrontdeskHeader from "frontdesk/common/header/Header";
import FrontdeskFooter from "frontdesk/common/footer/Footer";
export default {
  name: "FrontdeskHome",
  components: {
    'frontdesk-header': FrontdeskHeader,
    'frontdesk-footer': FrontdeskFooter
  }
};
</script>

<style></style>
