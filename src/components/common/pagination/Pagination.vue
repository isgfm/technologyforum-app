<template>
  <div class="cell pagination" >
      <div class="row">
          <div class="col-12">

          </div>
          <div class="col-2">

          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.pagination{
background-image: url(~@/assets/img/shadow_light.png);
background-size: 20px 20px; background-repeat: repeat-x;
}

.page_current {
    display: inline-block;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    padding: 3px 6px;
    background-color: #f0f0f0;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    margin: 0 1px;
    border: 1px solid #bbb;
    color: #000;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
}

.page_normal:active, .page_normal:link, .page_normal:visited {
    display: inline-block;
    font-weight: 400;
    font-size: 13px;
    line-height: 13px;
    padding: 2px 5px;
    background-color: #fff;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    margin: 0 1px;
    text-decoration: none;
    border: 1px solid #e2e2e2;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
</style>