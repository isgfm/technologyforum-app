<template>
  <div id="Bottom">
    <div class="content">
      <div class="inner">
        <div class="sep10"></div>
        <strong>
          <router-link to="/about" class="dark">关于</router-link> &nbsp;
          <!-- <span class="snow">·</span> &nbsp; 2154 人在线 -->
        </strong>
        <div class="sep20"></div>

        Viewer网上交流社区
        <div class="sep5"></div>

        Viewer see world
        <div class="sep20"></div>
        <span class="small fade">♥ Do have faith in what you're doing.</span>
        <div class="sep10"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrontdeskFooter"
};
</script>

<style>
#Bottom {
  border-top: 1px solid rgba(0, 0, 0, 0.22);
  background-color: var(--box-background-color);
  text-align: center;
  color: #999;
  padding: 0 10px;
}
</style>
