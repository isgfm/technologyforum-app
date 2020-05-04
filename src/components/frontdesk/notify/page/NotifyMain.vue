<template>
  <div class="box">
    <content-header :tip="`提醒`"></content-header>
    <div class="box">
        <NotifyList/>
    </div>
  </div>
</template>

<script>
import ContentHeader from "@common/contentHeader/ContentHeader";
import NotifyList from "../components/notifyList/NotifyList"
export default {
components: {
    ContentHeader,
    NotifyList
  },
}
</script>

<style>

</style>