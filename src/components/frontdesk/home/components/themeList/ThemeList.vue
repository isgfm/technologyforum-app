<template>
<div>
  <div class="cell item"  v-for="themeVO in themeList" v-bind:key="themeVO.nId">
      <div class="row no-gutters">
        <div class="col-1">
          <router-link :to="userUrl(themeVO.themeOwner.nId)">
            <img :src="themeVO.themeOwner.cAvatar" class="avatar"/>
          </router-link>
        </div>

        <div class="col-10">
          <span class="item_title">
            <router-link :to="themeUrl(themeVO.theme.nId)" v-text="themeVO.theme.cThemeTitle" class="topic-link"></router-link>
          </span>
          <div class="sep5"></div>
          <span class="topic_info">
            <router-link class="node" :to="nodeUrl(themeVO.theme.nThemeClass)" v-text="themeVO.themeClassName"></router-link>
             &nbsp;•&nbsp;
             <strong>
               <router-link :to="userUrl(themeVO.themeOwner.nId)" v-text="themeVO.themeOwner.cUsername"></router-link>
             </strong>
             <template v-if="themeVO.countReply>0">
               &nbsp;•&nbsp;
             最后回复
             <strong>
               <span >{{ftime(themeVO.lastThemeReply.dReplyTime)}}</span>
             </strong>
             </template>
             
          </span>
        </div>
        <div class="col-1">
          <router-link :to="themeUrl(themeVO.theme.nId)" class="count_livid float-right" v-text="themeVO.countReply"></router-link>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import {Ftime} from '@util/themeUtil';
import {memberRouter,themeRouter,nodeRouter} from '@/router/routerUrl';
import{getThemeListByTabRouter,getThemeListByNodeRouter} from '@api/theme/themeApi'
export default {
  name: "HomeThemeList",
  data(){
    return {
    pageSize: 20,
      totalReply: 0,
      currentPage: 1
    }
  },
  methods:{
    userUrl:function(userId){
      return memberRouter(userId);
    },
    nodeUrl:function(router){
      return nodeRouter(router);
    },
    themeUrl:function(themeId){
      return themeRouter(themeId);
    },
    ftime:function(timespan){
      return Ftime(timespan);
    }
  },
  computed:{
    themeList:function(){
      return this.$store.state.themeStore.themeList;
    },
    tabRouter:function(){
      return this.$store.state.themeStore.tabRouter;
    }
  }
};
</script>

<style>

</style>
