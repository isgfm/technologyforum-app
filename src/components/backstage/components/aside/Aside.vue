<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        unique-opened
        router
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-custom"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/manage/user">被封禁用户列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-chat-dot-square"></i>
            <span>主题管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/manage/theme">被隐藏主题列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {

    },
    handleClose(key, keyPath) {

    },
  },
};
</script>

<style>
.el-menu-vertical-demo {
    display: inline-block;
    text-align: left;
}

.el-menu-vertical-demo ul{
    margin:0;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    min-height: 600px;
}
</style>
