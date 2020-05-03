<template>
  <div>
    <template v-if="!blockStatus">
      <template v-if="isAdmin">
        <el-button type="danger" @click="block" round>封禁该用户</el-button>
      </template>
    </template>
    <template v-else>
      <el-button type="danger" round>用户已被封禁</el-button>
    </template>
  </div>
</template>

<script>
import { blockUser, cancleBlockUser, isBlockUser } from "@api/user/user";
export default {
  created() {
    this.isblock(this.userId);
  },
  props: {
    userId: {},
    isAdmin: {},
  },
  data() {
    return {
      blockStatus: false,
    };
  },
  methods: {
    isblock(userId) {
      isBlockUser(userId).then((data) => {
        this.blockStatus = data.data;
      });
    },
    block() {
      this.$confirm("是否封禁该用户", "确认信息", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
      })
        .then(() => {
          blockUser(this.userId).then((data) => {
            this.blockStatus = true;
            this.$message({
              message: "封禁成功",
              type: "success",
            });
          }).catch((error) => {
              this.$message({
                message: "封禁失败",
                type: "error",
              });
            });
        })
        .catch((action) => {});
    },
    cancleblock() {
      this.$confirm("是否取消封禁", "确认信息", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
      })
        .then(() => {
          cancleBlockUser(this.userId).then((data) => {
            this.blockStatus = false;
            this.$message({
              message: "取消封禁成功",
              type: "success",
            });
          });
        })
        .catch((action) => {});
    }
  }
};
</script>

<style></style>
