<template>
  <div class="header">
      <router-link to="/">Viewer</router-link>
      <span class="chevron">&nbsp;›&nbsp;</span>
      <span>{{tip}}</span>
  </div>
</template>

<script>
export default {
    name:'ContentHeader',
    props:['tip']
}
</script>

<style>

</style>