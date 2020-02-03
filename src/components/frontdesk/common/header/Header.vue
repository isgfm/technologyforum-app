<template>
  <el-header height="44px" id="Top">
    <el-row class="content">
      <el-col :span="3">
        <div class="logo-box float-left">
          <a href="/" title="way to explore">
            <img :src="require('@/assets/img/v2ex@2x.png')" id="logo">
          </a> 
        </div>
      </el-col>
      <el-col :span="10">
        <div class="search float-left">
          <frontdesk-search/>
        </div>
      </el-col>
      <el-col :span="11">
        <div class="header-button float-right">
          <a href="/" class="top">首页</a>
          &nbsp;&nbsp;&nbsp;
          <a href="/signup" class="top">注册</a>
          &nbsp;&nbsp;&nbsp;
          <a href="/login" class="top">登录</a>
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
import FrontdeskSearch from '@frontdesk/common/search/FrontdeskSearch'

export default {
  name:'FrontdeskHeader',
  components:{
    'frontdesk-search':FrontdeskSearch
  }
}
</script>

<style>
#Top {
    text-align: center;
    background-color: var(--box-background-color);
    font-size: 15px;
    font-weight: 500;
    background-size: 44px 44px;
    border-bottom: 1px solid rgba(0,0,0,.22);
    padding: 0 20%;
}

.content{
  padding-top: 6px;
}
.logo-box{
  width:110px;
}

#logo{
    width: 94px;
    height: 30px;
    background-size: 94px 30px;
    background-repeat: no-repeat;
    display: inline-block;
}

.header-button{
  padding-top: 2px;
}

a.top{
  color: #556;
  text-decoration: none;
}
</style>