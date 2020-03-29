<template>
  <div class="box">
      <div class="cell">
          <span>社区运行情况</span>
      </div>
      <div class="cell">
          <div>
              <div class="row no-gutters justify-content-center">
                  <span class="gray col-4 text-right">注册会员</span>
                  <strong class="col-4">{{registerNumber}}</strong>
              </div>
              <div class="row no-gutters justify-content-center">
                  <span class="gray col-4 text-right">主题</span>
                  <strong class="col-4">{{themeNumber}}</strong>
              </div>
              <div class="row no-gutters justify-content-center">
                  <span class="gray col-4 text-right">回复</span>
                  <strong class="col-4">{{themeReplyNumber}}</strong>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import {getForumState} from '@api/forum/forumApi'

export default {
    name:"ForumState",
    created:function(){
        this.getForumStateFromServer();
    },
    data(){
        return {
            registerNumber:0,
            themeNumber:0,
            themeReplyNumber:0
        }
    },
    methods:{
        getForumStateFromServer:function(){
            let that = this;
            getForumState().then(data=>{
                let result = data.data;
                that.registerNumber = result.registerNumber;
                that.themeNumber = result.themeNumber;
                that.themeReplyNumber = result.themeReplyNumber;
            }).catch(error=>{
                that.$message({type:'error',message:error+':'+'论坛状况加载失败',showClose: true});
            })
        }
    }
}
</script>

<style>

</style>