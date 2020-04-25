<template>
  <div v-title :data-title="nodeRouterVO.themeClass.cName" class="node_header">
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
        <template v-if="loginUser!=null && nodeRouterVO.themeClass!='' ">
          <span class="snow">&nbsp;•&nbsp;</span>
          <KeepNodeBtn :nodeId="nodeRouterVO.themeClass.nId"/>
        </template>
      </div>
      <router-link to="/">Viewer</router-link> <span class="chevron">&nbsp;›&nbsp;</span> {{nodeRouterVO.themeClass.cName}}
      <div class="sep10"></div>
      <div class="sep5"></div>
      <template v-if="loginUser!=null">
        <div class="fr" style="padding-left: 10px;">
        <input
          type="button"
          class="super normal button"
          value="创建新主题"
          @click="newTheme"
        />
      </div>
      </template>
      <span class="f12"
        >{{nodeRouterVO.themeClass.cDescription}}</span
      >
    </div>
  </div>
</template>

<script>
import { getNodeByNodeRouter } from "@api/theme/themeClassApi";
import KeepNodeBtn from '../keepNodeBtn/KeepNodeBtn'
export default {
  created() {
    this.initNodeInformation(this.nodeRouter);
  },
  components:{
    KeepNodeBtn
  },
  props: {
    nodeRouter: {}
  },
  data() {
    return {
      nodeRouterVO: {
        themeCount:0,
        themeClass:''
      }
    };
  },
  methods: {
    newTheme() {
      this.$router.push("/new");
    },
    initNodeInformation(nodeRouter) {
      getNodeByNodeRouter(nodeRouter).then(data => {
        this.nodeRouterVO = data.data;
      }).catch(error=>{
        this.$message({
            message: error+"加载节点失败",
            type: "error",
          });
      });
    }
  },
  computed:{
    loginUser() {
      return this.$store.state.userStore.user;
    }
  },
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


</style>
