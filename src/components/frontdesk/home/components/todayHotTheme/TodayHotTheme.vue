<template>
  <div class="box">
      <div class="cell">
          <span>今日热议主题</span>
      </div>
      <div class="cell row no-gutters" v-for="themeVO in todayHotThemeList" v-bind:key="themeVO.nId">
          <div class="col-1">
            <router-link :to="userUrl(themeVO.themeOwner.nId)">
                <img :src="themeVO.themeOwner.cAvatar" style="max-width: 24px; max-height: 24px;" class="avatar"/>
            </router-link>
          </div>
          <div class="col-1"></div>
          <div class="col-8">
              <span class="item_hot_topic_title">
                  <router-link :to="themeUrl(themeVO.theme.nId)" v-text="themeVO.theme.cThemeTitle"></router-link>
              </span>
          </div>
      </div>
  </div>
</template>

<script>
import {getTodayHotTheme} from '@api/theme/themeApi'
import {hotThemeCount} from '@constant/themeConstant'
export default {
    name:"TodayHotTheme",
    created:function(){
        this.getTodayHotThemeList();
    },
    data:function(){
        return {
            todayHotThemeList:[]
        }
    },
    methods:{
        getTodayHotThemeList:function(){
            getTodayHotTheme(hotThemeCount).then(data=>{
                this.todayHotThemeList = data.data;
            }).catch(error=>{
                this.$message({type:'error',message:error+':'+'今日热议主题加载失败',showClose: true});
            });
        },
        userUrl:function(userId){
            return "#member/"+userId;
        },
        themeUrl:function(themeId){
            return '#t/'+themeId;
        }
    }
}
</script>

<style>
.item_hot_topic_title {
    font-size: 13px;
    line-height: 120%;
    text-shadow: 0 1px 0 #fff;
}
</style>