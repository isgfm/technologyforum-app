<template>
  <div class="box">
    <node-header :nodeRouter="nodeRouter"/>
    <NodeThemeList :nodeRouter="nodeRouter"/>
  </div>
</template>

<script>
import NodeThemeList from '../components/nodeThemeList/NodeThemeList'
import NodeHeader from '../components/nodeheader/NodeHeader'
export default {
    props:{
        nodeRouter:{}
    },
    components:{
        NodeHeader,
        NodeThemeList
    }
};
</script>

<style>

</style>
