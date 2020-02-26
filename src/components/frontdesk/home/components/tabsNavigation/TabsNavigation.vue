<template>
  <div>
    <div class="inner" id="Tabs">
      <router-link v-for="tab in tabs" 
      v-text="tab.cName" 
      :to="tabUrl(tab.cRouter)"
      v-on:click.native="changeSecondaryTab($event)"
      :data-tabRouter="tab.cRouter"
      v-bind:class='tab.cRouter==isActive?"tab_current":"tab"'
      v-bind:key="tab.cName"> </router-link>
    </div>
    <div class="cell" id="SecondaryTabs">
        <router-link v-for="secondaryTab in secondaryTabs" 
        class="secondarytab" 
        :data-nodeRouter="secondaryTab.cRouter" 
        :to="nodeUrl(secondaryTab.cRouter)" 
        v-text="secondaryTab.cName" 
        v-bind:key="secondaryTab.cName"> </router-link>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import {offset,pageSize} from '@constant/themeConstant'
export default {
    name: "TabsNavigation",
    props:{
      tabrouter:{
      type:String,
      default:''
    }
    },
  created: function() {
    
    this.$store.dispatch("setActiveTab",this.tabrouter).then(()=>{
      this.getThemeClass();
    });
    
  },
    data:function(){
        return {}
    },
    methods:{
        changeSecondaryTab:function(){
          let tabRouter = $(event.target).attr("data-tabRouter");
          console.log(tabRouter);
          this.$store.dispatch("setActiveTab",tabRouter);
          this.$store.dispatch("getTabThemeList",{tabRouter,offset,pageSize})
        },
        tabUrl:function(url){
          return "/tab/"+url;
        },
        nodeUrl:function(url){
          return "/go/"+url;
        },
        getThemeClass: function() {
      this.$store.dispatch("getThemeClassTabs").catch(error => {
        this.$message({
          type: "error",
          message: error + ":" + "分类加载失败",
          showClose: true
        });
      });
    }
    },
    computed:{
      tabs:function(){
        return this.$store.state.themeClassStore.themeClass_tabs;
      },
      secondaryTabs:function(){
        // let activeTabId = this.$store.state.themeClassStore.activeTab;
        // let parentIdMap = this.$store.state.themeClassStore.parentIdMap;
        // return parentIdMap[activeTabId];
        return this.$store.state.themeClassStore.themeClass_nodes;
      },
      isActive:function(){
        return this.$store.state.themeClassStore.activeTab;
      }
    }
}
</script>

<style>
.inner {
  padding: 10px;
  font-size: 14px;
  line-height: 150%;
  text-align: left;
}

#Tabs {
  background-color: var(--box-background-color);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

#SecondaryTabs {
    background-color: var(--box-background-alt-color);
    padding: 10px 10px 10px 20px;
}

.secondarytab{
  margin-left: 10px;
}

a.tab:active,
a.tab:link,
a.tab:visited {
  display: inline-block;
  font-size: 14px;
  line-height: 14px;
  padding: 5px 8px;
  margin-right: 5px;
  border-radius: var(--box-border-radius);
  color: #555;
  -webkit-tap-highlight-color: transparent;
}

a.tab_current:active,
a.tab_current:link,
a.tab_current:visited {
  display: inline-block;
  font-size: 14px;
  line-height: 14px;
  padding: 5px 8px;
  margin-right: 5px;
  border-radius: 3px;
  background-color: #334;
  color: #fff;
}
</style>