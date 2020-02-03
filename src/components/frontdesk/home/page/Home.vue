<template>
  <div>
    <frontdesk-header></frontdesk-header>
    <div id="Wrapper">
      <div class="content">
          <div id="main">
            <tabs-navigation/>
          </div>
          <div id="Rightbar">

          </div>
      </div>
    </div>
    <frontdesk-footer></frontdesk-footer>
  </div>
</template>

<script>
import FrontdeskHeader from "@frontdesk/common/header/Header";
import FrontdeskFooter from "@frontdesk/common/footer/Footer";
import TabsNavigation from "@frontdesk/home/components/tabsNavigation/TabsNavigation"
export default {
  name: "FrontdeskHome",
  components: {
    'frontdesk-header': FrontdeskHeader,
    'frontdesk-footer': FrontdeskFooter,
    'tabs-navigation':TabsNavigation
  },
  created:function(){
    this.getThemeClass();
  },
  methods:{
    getThemeClass:function(){
        this.$store.dispatch("getThemeClass").catch(error=>{
              this.$message({type:'error',message:error+':'+'分类加载失败',showClose: true});
        });
    }  
  }
};
</script>
<style src="@/assets/css/frontdesk/home.css">
</style>
<style scoped>
.content {
    min-width: 600px;
    max-width: 1100px;
    margin: 0 auto;
}
</style>
