<template>
  <div id="Rightbar">
      <div class="sep20"></div>
    <template v-if="isLogIn">
      <profile-right/>
      <div class="sep20"></div>
    <empty-right/>
    </template>
  </div>
</template>

<script>
import ProfileRight from "@frontdesk/common/right/ProfileRight"
import EmptyRight from '@frontdesk/common/right/EmptyRight'
export default {
    components:{
        ProfileRight,
        EmptyRight
    },
    computed:{
    isLogIn(){
      return this.$store.state.userStore.user != null;
    }
  }
}
</script>

<style>

</style>