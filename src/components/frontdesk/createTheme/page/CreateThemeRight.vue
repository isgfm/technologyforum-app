<template>
  <div id="Rightbar">
    <div class="sep20"></div>
   <theme-tips/>
    <div class="sep20"></div>
    <forum-guide/>
  </div>
</template>

<script>
import ThemeTips from '@frontdesk/createTheme/components/themeTips/ThemeTips'
import ForumGuide from '@frontdesk/createTheme/components/forumGuide/ForumGuide'
export default {
    name:'CreateThemeRight',
    components:{
        ThemeTips,
        ForumGuide
    }
}
</script>

<style>

</style>