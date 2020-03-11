<template>
  <div class="cell" id="reply-box">
      <div class="cell">
          <div class="fr">
              <a></a>
               &nbsp; &nbsp;
               <a @click="backToTop">回到顶部</a>
          </div>
            添加一条新回复
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
    methods:{
        backToTop(){
            var doc= document.documentElement;
    $(doc).animate({
      scrollTop:0
    },500)
  }
        }
}
</script>

<style>
#reply-box {
    transition: box-shadow .25,background-color .25s;
}
</style>