<template>
  <div class="box">
      <content-header :tip="`注册`"></content-header>
      <div class="sep20"></div>
      <signup-form/>
  </div>
</template>

<script>
import ContentHeader from '@common/contentHeader/ContentHeader'
import SignupForm from '@frontdesk/signup/components/signupForm/SignupForm'

export default {
    name:"SignupMain",
    components:{
        'content-header':ContentHeader,
        'signup-form':SignupForm
    }
}
</script>

<style>

</style>