<template>
  <div id="qbar">
    <input
      type="text"
      v-model="searchContent"
      @keyup.enter="search"
      maxlength="40"
      name="q"
      id="q"
    />
  </div>
</template>

<script>
export default {
  name: "FrontdeskSearch",
  data() {
    return {
      searchContent: "",
    };
  },
  methods: {
    search() {
      let searchContentTrim = this.searchContent.trim();
      if (searchContentTrim.length == 0) {
        this.$message({
          message: "请输入查询内容",
          type: "warning",
        });
      } else {
        this.$router.push({ path: `/search/${searchContentTrim}` });
        this.searchContent = "";
      }
    },
  },
};
</script>

<style>
#qbar {
  width: 276px;
  height: 28px;
  background-size: 276px 28px;
  background-image: url(~@/assets/img/qbar_light@2x.png);
  background-repeat: no-repeat;
  display: inline-block;
}

#q {
  border: none;
  width: 222px;
  height: 26px;
  margin: 0 0 2px 30px;
  background-color: transparent;
  font-family: helvetica neue, luxi sans, dejavu sans, Tahoma, hiragino sans gb,
    STHeiti !important;
  font-size: 14px;
  line-height: 16px;
  outline: 0;
}
</style>
