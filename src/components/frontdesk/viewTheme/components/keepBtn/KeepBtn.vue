<template>
  <div>
    <template v-if="!keepStatus">
      <a href="#" class="tb" @click="keep">加入收藏</a>
    </template>
    <template v-else>
      <a href="#" class="tb" @click="cancleKeep">取消收藏</a>
    </template>
  </div>
</template>

<script>
import { keepTheme, cancleKeepTheme, isKeepTheme } from "@api/keep/keepApi";
export default {
  created() {
    this.isKeep(this.themeId);
  },
  props: {
    themeId: {},
  },
  data() {
    return {
      keepStatus: false,
    };
  },
  methods: {
    isKeep(themeId) {
      isKeepTheme(themeId).then((data) => {
        this.keepStatus = data.data;
      });
    },
    keep() {
      keepTheme(this.themeId)
        .then((data) => {
          this.keepStatus = true;
          this.$emit('addKeepCount',1);
          this.$store.dispatch("addKeepThemeCount", 1);
          this.$message({
            message: "收藏成功",
            type: "success",
          });
        })
        .catch((error) => {
          this.$message({
            message: "收藏失败",
            type: "error",
          });
        });
    },
    cancleKeep() {
      cancleKeepTheme(this.themeId)
        .then((data) => {
          this.keepStatus = false;
          this.$emit('addKeepCount',-1);
          this.$store.dispatch("addKeepThemeCount", -1);
          this.$message({
            message: "取消收藏成功",
            type: "success",
          });
        })
        .catch((error) => {
          this.$message({
            message: "取消收藏失败",
            type: "error",
          });
        });
    },
  },
};
</script>

<style></style>
