<template>
  <div>
    <content-header :tip="`我收藏的节点`"></content-header>
    <div id="my-nodes">
      <router-link
        v-for="nodeVO in nodeVOList"
        v-bind:key="nodeVO.themeClass.nId"
        class="grid_item"
        :to="nodeUrl(nodeVO.themeClass.cRouter)"
        ><div
          style="
            display: table;
            padding: 20px 0px 20px 0px;
            width: 100%;
            text-align: center;
            font-size: 14px;
          "
        >
          <img
            :src="nodeVO.themeClass.cImgUrl"
            border="0"
            align="default"
            width="73"
            alt="create"
            loading="lazy"
            title=""
            style=""
          />
          <div class="sep10"></div>
          {{ nodeVO.themeClass.cName }}
          <div class="sep5"></div>
          <span class="f12"
            >主题总数:{{nodeVO.themeCount }}</span
          >
        </div></router-link
      >
    </div>
  </div>
</template>

<script>
import { nodeRouter } from "@/router/routerUrl";
import { getNodesByUserKeep } from "@api/theme/themeClassApi";
import ContentHeader from "@common/contentHeader/ContentHeader";
export default {
  components: {
    ContentHeader,
  },
  created() {
    this.initNodeVOListFromServer();
  },
  data() {
    return {
      nodeVOList: [],
    };
  },
  methods: {
    nodeUrl: function (url) {
      return nodeRouter(url);
    },
    initNodeVOListFromServer() {
      getNodesByUserKeep()
        .then((data) => {
          this.nodeVOList = data.data;
        })
        .catch((error) => {
          this.$message({
            type: "error",
            message: error + ":" + "收藏节点加载失败",
          });
        });
    },
  },
};
</script>

<style>
#my-nodes {
  background-color: var(--box-background-alt-color);
}

.grid_item {
  background-color: #f9f9f9;
  width: 25%;
  height: 160px;
  padding: 0;
  margin: 0;
  box-shadow: none;
  display: inline-block;
  transition: box-shadow 0.2s;
  text-decoration: none;
}
</style>
