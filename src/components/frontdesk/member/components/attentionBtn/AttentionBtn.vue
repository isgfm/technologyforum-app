<template>
  <div>
    <template v-if="!attentionStatus">
      <el-button type="info" @click='attention' round
        >加入特别关注</el-button
      >
    </template>
    <template v-else>
      <el-button type="danger" @click="cancleAttention" round
        >取消特别关注</el-button
      >
    </template>
  </div>
</template>

<script>
import {
  attentionUser,
  cancleAttentionUser,
  isAttentionUser
} from "@api/keep/keepApi";
export default {
  created() {
    this.isAttention(this.userId);
  },
  props: {
    userId: {}
  },
  data() {
    return {
      attentionStatus: false
    };
  },
  methods: {
    isAttention(userId) {
      isAttentionUser(userId).then(data => {
        this.attentionStatus = data.data;
      });
    },
    attention() {
      this.$confirm("是否加入特别关注", "确认信息", {
        confirmButtonText: "确认",
        cancelButtonText: "取消"
      })
        .then(() => {
          attentionUser(this.userId).then(data => {
            this.attentionStatus = true;
            this.$message({
              message: "特别关注成功",
              type: "success"
            });
          });
        })
        .catch(action => {});
    },
    cancleAttention() {
      this.$confirm("是否取消特别关注", "确认信息", {
        confirmButtonText: "确认",
        cancelButtonText: "取消"
      })
        .then(() => {
          cancleAttentionUser(this.userId).then(data => {
            this.attentionStatus = false;
            this.$message({
              message: "取消特别关注成功",
              type: "success"
            });
          });
        })
        .catch(action => {});
    }
  }
};
</script>

<style></style>
