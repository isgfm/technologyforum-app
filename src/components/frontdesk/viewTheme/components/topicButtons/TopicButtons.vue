<template>
  <div class="topic_buttons">
    <div class="fr topic_stats" style="padding-top: 4px;">
      {{click}} 次点击 &nbsp;∙&nbsp; {{keepCount}} 人收藏 &nbsp;
    </div>
    <a
      href="#"
      @click="keep"
      class="tb"
      >加入收藏</a
    >
    </div>
  </div>
</template>

<script>
export default {
    props:{
        click:{
            type:Number,
            default:0
        },
        keepCount:{
            type:Number,
            default:0
        }
    },methods:{
        keep:function(){

        }
    }
};
</script>

<style>
.topic_stats {
    text-shadow: 0 1px 0 #fff;
    font-size: 11px;
    color: #999;
    line-height: 100%;
}
</style>
