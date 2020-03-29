<template>
<div>

</div>
  
</template>

<script>
import VRuntimeTemplate from "v-runtime-template";
export default {
    props:{
        replyContent:{}
    },
    mounted(){
        let { render, staticRenderFns } = Vue.compile(this.replyContent);
        let router = this.$router;
    new Vue({ el: this.$el, render, staticRenderFns, router })
    }
}
</script>

<style>

</style>