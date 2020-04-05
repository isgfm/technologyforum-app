<template>
  <div style="display:inline">
    <template v-if="!keepStatus">
      <a href="#" @click="keep">加入收藏</a>
    </template>
    <template v-else>
      <a href="#" @click="cancleKeep">取消收藏</a>
    </template>
  </div>
</template>

<script>
import { keepNode, cancleKeepNode, isKeepNode } from "@api/keep/keepApi";
export default {
  created() {
    this.isKeep(this.nodeId);
  },
  props: {
    nodeId: {},
  },
  data() {
    return {
      keepStatus: false,
    };
  },
  methods: {
    isKeep(nodeId) {
      isKeepNode(nodeId).then((data) => {
        this.keepStatus = data.data;
      });
    },
    keep() {
      keepNode(this.nodeId)
        .then((data) => {
          this.keepStatus = true;
          this.$store.dispatch("addKeepNodeCount", 1);
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
      cancleKeepNode(this.nodeId)
        .then((data) => {
          this.keepStatus = false;
          this.$store.dispatch("addKeepNodeCount", -1);
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

<style>
.node_header_link:link, .node_header_link:visited, .node_info a:link, .node_info a:visited {
    color: #03C8FF;
}
</style>
