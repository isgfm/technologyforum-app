<template>
<div>
  <div class="cell item"  v-for="themeVO in themeList" v-bind:key="themeVO.nId">
      <div class="row">
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
            <a class="node" :href="nodeUrl(themeVO.theme.nThemeClass)" v-text="themeVO.themeClassName"></a>
             &nbsp;•&nbsp;
             <strong>
               <a :href="userUrl(themeVO.themeOwner.nId)" v-text="themeVO.themeOwner.cUsername"></a>
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
          <a :href="themeUrl(themeVO.theme.nId)" class="count_livid float-right" v-text="themeVO.countReply"></a>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import {Ftime,getClassNameById} from '@util/themeUtil'
export default {
  name: "HomeThemeList",
  methods:{
    userUrl:function(userId){
      return "/member/"+userId;
    },
    nodeUrl:function(router){
      return "/go/"+router;
    },
    themeUrl:function(themeId){
      return '/t/'+themeId;
    },
    ftime:function(timespan){
      return Ftime(timespan);
    },
    getClassName:function(classId){
      return getClassNameById(this.$store.state.themeClassStore.themeClass_nodes,classId);
    }
  },
  computed:{
    themeList:function(){
      return this.$store.state.themeStore.themeList;
    }
  }
};
</script>

<style>

</style>
