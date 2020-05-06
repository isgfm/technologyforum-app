<template>
  <el-container>
      <el-header class="backstage-header">
        <Header/>
      </el-header>
      <el-container>
        <el-aside>
          <Aside></Aside>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import Aside from "../components/aside/Aside"
import Header from "../components/header/Header"
export default {
    components:{
        Aside,
        Header
    }
}
</script>

<style>
.backstage-header {
  background-color: #409EFF;
  color: #fff;
  line-height: 55px;
}
</style>