<template>
  <div class="box">
      <content-header :tip="`登录`"></content-header>
      <div class="sep20"></div>
      <login-form/>
  </div>
</template>

<script>
import ContentHeader from '@common/contentHeader/ContentHeader'
import LoginForm from '@frontdesk/login/components/loginForm/LoginForm'

export default {
    name:"LoginMain",
    components:{
        'content-header':ContentHeader,
        'login-form':LoginForm
    }
}
</script>

<style>

</style>