<template>
  <div class="header">
      <router-link to="/">V2EX</router-link>
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
.header {
    padding: 10px;
    font-size: 15px;
    line-height: 120%;
    text-align: left;
    border-bottom: 1px solid #e2e2e2;
    overflow: auto;
}

.chevron {
    font-family: lucida grande;
    font-weight: 500;
}

</style>