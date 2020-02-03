<template>
  <div id="app">
    <router-view/>
  </div>
  
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');

* { margin: 0; padding: 0; }
:root {
    --box-background-color: #fff;
    --box-background-alt-color: #f9f9f9;
    --box-background-hover-color: #fafafa;
    --box-foreground-color: #000;
    --box-border-color: #e2e2e2;
    --box-border-radius: 3px;
}
.me-container{
  margin-top: 62px;
}
</style>
