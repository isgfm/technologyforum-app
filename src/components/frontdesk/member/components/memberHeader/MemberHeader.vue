<template>
  <div class="box">
    <div class="cell">
      <div class="row">
        <div class="col-2">
          <img />
        </div>
        <div class="col-10">
            <div class="fr">
                <el-button type="info" round>加入特别关注</el-button>
                <el-button type="danger" round>Block</el-button>
            </div>
          <h1 style="margin-bottom: 5px;">justrand</h1>
          <div class="sep10"></div>
          <span class="gray"
            >V2EX 第 {{}} 号会员，加入于 {{}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        userId:{}
    },
    created:{
        
    },
    data(){
        return {
            user:''
        }
    },
  computed: {
    isLogIn() {
      return this.$store.state.userStore.user != null;
    }
  }
};
</script>

<style></style>
