<template>
  <div>
    <div class="inner" id="Tabs">
      <a v-for="tab in tabs" 
      v-text="tab.cName" 
      :href="tabUrl(tab.cRouter)"
      v-on:click="changeSecondaryTab($event)"
      :data-tabsId="tab.nId"
      v-bind:class='tab.nId==isActive?"tab_current":"tab"'
      v-bind:key="tab.cName"> </a>
    </div>
    <div class="cell" id="SecondaryTabs">
        <a v-for="secondaryTab in secondaryTabs" 
        class="secondarytab" 
        :data-nodeId="secondaryTab.nId" 
        :href="nodeUrl(secondaryTab.cRouter)" 
        v-text="secondaryTab.cName" 
        v-bind:key="secondaryTab.cName"> </a>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import {offset,pageSize} from '@constant/themeConstant'
export default {
    name: "TabsNavigation",
    data:function(){
        return {}
    },
    methods:{
        changeSecondaryTab:function(){
          let tabId = $(event.target).attr("data-tabsId");
          this.$store.dispatch("setActiveTab",tabId);
          this.$store.dispatch("getTabThemeList",{tabId,offset,pageSize})
        },
        tabUrl:function(url){
          return "#tab="+url;
        },
        nodeUrl:function(url){
          return "#go/"+url;
        }
    },
    computed:{
      tabs:function(){
        return this.$store.state.themeClassStore.themeClass_tabs;
      },
      secondaryTabs:function(){
        let activeTabId = this.$store.state.themeClassStore.activeTab;
        let parentIdMap = this.$store.state.themeClassStore.parentIdMap;
        return parentIdMap[activeTabId];
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