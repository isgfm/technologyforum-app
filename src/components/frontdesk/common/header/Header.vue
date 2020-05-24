<template>
  <el-header height="44px" id="Top">
    <el-row class="content">
      <el-col :span="3">
        <div class="logo-box float-left">
          <router-link to="/" title="Viewer">
            <img :src="require('@/assets/img/viewer.png')" id="logo">
          </router-link>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="search float-left">
          <frontdesk-search/>
        </div>
      </el-col>
      <el-col :span="11">
        <div class="header-button float-right">
        <template v-if="!isLogIn">
          <router-link to="/">首页</router-link>
          &nbsp;&nbsp;&nbsp;
          <router-link to="/signup">注册</router-link>
          &nbsp;&nbsp;&nbsp;
          <router-link to="/login">登录</router-link>
        </template>
          <template v-else>
            <template v-if="isAdmin">
              <router-link to="/manage" class="top">后台管理</router-link>
            </template>
            &nbsp;&nbsp;&nbsp;
            <router-link to="/">首页</router-link>
          &nbsp;&nbsp;&nbsp;
            <router-link :to="memberUrl(userId)" v-text="username" class="top"></router-link>
            &nbsp;&nbsp;&nbsp;
            <router-link to="/setting" class="top">设置</router-link>
            &nbsp;&nbsp;&nbsp;
            <a href="#" @click="logout" class="top">登出</a>
          </template>
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
import FrontdeskSearch from '@frontdesk/common/search/FrontdeskSearch'
import {memberRouter} from '@/router/routerUrl'
export default {
  name:'FrontdeskHeader',
  components:{
    'frontdesk-search':FrontdeskSearch
  },
  computed:{
    isLogIn(){
      return this.$store.state.userStore.user != null;
    },
    username(){
      return this.$store.state.userStore.user.cUsername;
    },
    userId:function(){
      return this.$store.state.userStore.user.nId;
    },
    isAdmin() {
      return this.$store.state.userStore.user != null&&this.$store.state.userStore.user.nAdmin==1;
    }
  },
  methods:{
logout(){
      let that = this
        this.$store.dispatch('logout').then(() => {
          this.$router.push({path: '/'})
        }).catch((error) => {
          if (error !== 'error') {
            that.$message({message: error, type: 'error', showClose: true});
          }
        })
    },
    memberUrl(userId){
      return memberRouter(userId);
    }
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