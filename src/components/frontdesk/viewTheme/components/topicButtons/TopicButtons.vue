<template>
  <div class="topic_buttons">
    <div class="fr topic_stats" style="padding-top: 4px;">
      {{ click }} 次点击 &nbsp;∙&nbsp; {{ keepCount }} 人收藏 &nbsp;
    </div>
    <template v-if="loginUser != null">
      <KeepBtn :themeId="themeId" @addKeepCount="addKeepCount" />
      <template v-if="loginUser.nAdmin==1">
        <HideThemeBtn :themeId="themeId"></HideThemeBtn>
      </template>
    </template>
    <template v-else>
        <a
      href="#"
      class="tb"
      style="visibility:hidden"
      >占位</a
    >
    </template>
  </div>
</template>

<script>
import { keepTheme } from "@api/theme/themeApi";
import KeepBtn from "../keepBtn/KeepBtn";
import HideThemeBtn from "../hideThemeBtn/HideThemeBtn"
export default {
  components: {
    KeepBtn,
    HideThemeBtn
  },
  props: {
    click: {
      type: Number,
      default: 0,
    },
    keepCount: {
      type: Number,
      default: 0,
    },
    themeId: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    addKeepCount(count) {
      //count可能为负数
      this.keepCount = this.keepCount + count;
    },
  },
  computed: {
    loginUser() {
      return this.$store.state.userStore.user;
    }
  },
};
</script>

<style>
.topic_buttons {
  padding: 5px;
  font-size: 14px;
  line-height: 120%;
  background: #eee;
  background: -moz-linear-gradient(top, #eee 0, #ccc 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, #eee),
    color-stop(100%, #ccc)
  );
  background: -webkit-linear-gradient(top, #eee 0, #ccc 100%);
  background: -o-linear-gradient(top, #eee 0, #ccc 100%);
  background: -ms-linear-gradient(top, #eee 0, #ccc 100%);
  background: linear-gradient(to bottom, #eee 0, #ccc 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee',endColorstr='#cccccc',GradientType=0 );
  border-radius: 0 0 3px 3px;
  text-align: left;
}

.topic_stats {
  text-shadow: 0 1px 0 #fff;
  font-size: 11px;
  color: #999;
  line-height: 100%;
}
</style>
