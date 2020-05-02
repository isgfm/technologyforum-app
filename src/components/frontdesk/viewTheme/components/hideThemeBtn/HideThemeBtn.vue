<template>
  <div>
    <template v-if="!HideStatus">
      <a href="#" class="tb" @click="Hide">隐藏主题</a>
    </template>
    <template v-else>
      <a href="#" class="tb" @click="cancleHide">取消隐藏</a>
    </template>
  </div>
</template>

<script>
import { hideTheme, isHideTheme } from "@api/theme/themeApi";
export default {
  created() {
    this.isHide(this.themeId);
  },
  props: {
    themeId: {},
  },
  data() {
    return {
      HideStatus: false,
    };
  },
  methods: {
    isHide(themeId) {
      isHideTheme(themeId).then((data) => {
        this.HideStatus = data.data;
      });
    },
    Hide() {
      hideTheme(this.themeId)
        .then((data) => {
          this.HideStatus = true;
          this.$message({
            message: "隐藏主题成功",
            type: "success",
          });
        })
        .catch((error) => {
          this.$message({
            message: "隐藏主题失败",
            type: "error",
          });
        });
    }
  }
};
</script>

<style></style>
