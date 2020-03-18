<template>
  <div class="node_header">
    <div class="node_avatar">
      <div
        style="float: left; display: inline-block; margin-right: 10px; margin-bottom: initial!important;"
      >
        <img
          :src="nodeRouterVO.themeClass.cImgUrl"
          border="0"
          align="default"
          width="72"
          alt="programmer"
          loading="lazy"
        />
      </div>
    </div>
    <div class="node_info">
      <div class="fr f12">
        <span>主题总数</span> <strong>{{nodeRouterVO.themeCount}}</strong>
        <span class="snow">&nbsp;•&nbsp;</span>
        <a href="/favorite/node/300?once=60912" class="node_header_link"
          >加入收藏</a
        >
      </div>
      <router-link to="/">V2EX</router-link> <span class="chevron">&nbsp;›&nbsp;</span> {{nodeRouterVO.themeClass.cName}}
      <div class="sep10"></div>
      <div class="sep5"></div>
      <div class="fr" style="padding-left: 10px;">
        <input
          type="button"
          class="super normal button"
          value="创建新主题"
          @click="newTheme"
        />
      </div>
      <span class="f12"
        >{{nodeRouterVO.themeClass.cDescription}}</span
      >
    </div>
  </div>
</template>

<script>
import { getNodeByNodeRouter } from "@api/theme/themeClassApi";
export default {
  created() {
    this.initNodeInformation(this.nodeRouter);
  },
  props: {
    nodeRouter: {}
  },
  data() {
    return {
      nodeRouterVO: ""
    };
  },
  methods: {
    newTheme() {
      this.$router.push("/new");
    },
    initNodeInformation(nodeRouter) {
      getNodeByNodeRouter(nodeRouter).then(data => {
        this.nodeRouterVO = data.data;
      });
    }
  }
};
</script>

<style>
.node_header {
  padding: 0;
  font-size: 14px;
  line-height: 120%;
  text-align: left;
  background-color: #333344;
  color: #fff;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  display: flex;
}

.node_avatar {
  width: 73px;
  padding: 10px;
  box-sizing: content-box;
}

.node_info {
  padding: 10px 10px 0 0;
  width: 100%;
}

.node_header_link:link, .node_header_link:visited, .node_info a:link, .node_info a:visited {
    color: #03C8FF;
}
</style>
