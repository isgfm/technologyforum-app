<template>
  <div class="box">
    <content-header :tip="`设置`"></content-header>
    <div class="inner">
      <ProfileForm />
    </div>
  </div>
</template>

<script>
import ProfileForm from "../components/profile/ProfileForm";
import ContentHeader from "@common/contentHeader/ContentHeader";
export default {
  components: {
    ProfileForm,
    ContentHeader
  }
};
</script>

<style></style>
