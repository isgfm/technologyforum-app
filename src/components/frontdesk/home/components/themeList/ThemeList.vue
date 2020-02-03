<template>
  <div class="cell item">
      <el-row v-for="themeVO in themeList" v-bind:key="theme.nId">
        <el-col :span="3">
          <a href="userUrl(theme.)"
        </el-col>
        <el-col :span="1">

        </el-col>
        <el-col :span="16">

        </el-col>
        <el-col :span="4">

        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: "ThemeIntroduction",
  methods:{
    userUrl:function(router){
      return "#member/"+router;
    }
  },
  computed:{
    themeList:function(){
      return []
    }
  }
};
</script>

<style>

</style>
