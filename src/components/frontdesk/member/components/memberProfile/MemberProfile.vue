<template>
<div>
  <div class="sep10"></div>
  <div class="row no-gutters">
      <div class="col-4">
        <span>性别</span>
      </div>
      <div class="col-5">
        <v-text-field
            disabled
            readonly
            outlined
            dense
            :value="user.nSex"
          ></v-text-field>
      </div>
  </div>
  <div class="row no-gutters">
      <div class="col-4">
        <span>手机号</span>
      </div>
      <div class="col-5">
        <v-text-field
            disabled
            readonly
            outlined
            dense
            :value="user.cTelephone"
          ></v-text-field>
      </div>
  </div>
  <div class="row no-gutters">
      <div class="col-4">
        <span>电子邮件</span>
      </div>
      <div class="col-5">
        <v-text-field
            disabled
            readonly
            outlined
            dense
            :value="user.cEmail"
          ></v-text-field>
      </div>
  </div>
  <div class="row no-gutters">
      <div class="col-4">
        <span>个人网站</span>
      </div>
      <div class="col-5">
        <v-text-field
            disabled
            readonly
            outlined
            dense
            :value="user.cPersonalWebsite"
          ></v-text-field>
      </div>
  </div>
  <div class="row no-gutters">
      <div class="col-4">
        <span>所在公司</span>
      </div>
      <div class="col-5">
        <v-text-field
            disabled
            readonly
            outlined
            dense
            :value="user.cCompany"
          ></v-text-field>
      </div>
  </div>
  <div class="row no-gutters">
      <div class="col-4">
        <span>工作职位</span>
      </div>
      <div class="col-5">
        <v-text-field
            disabled
            readonly
            outlined
            dense
            :value="user.cPosition"
          ></v-text-field>
      </div>
  </div>
  <div class="row no-gutters">
      <div class="col-4">
        <span>所在地</span>
      </div>
      <div class="col-5">
        <v-text-field
            disabled
            readonly
            outlined
            dense
            :value="user.cLocation"
          ></v-text-field>
      </div>
  </div>
  <div class="row no-gutters">
      <div class="col-4">
        <span>签名</span>
      </div>
      <div class="col-5">
        <v-text-field
            disabled
            readonly
            outlined
            dense
            :value="user.cSignature"
          ></v-text-field>
      </div>
  </div>
  <div class="row no-gutters">
      <div class="col-4">
        <span>个人介绍</span>
      </div>
      <div class="col-5">
        <v-text-field
            disabled
            readonly
            outlined
            dense
            :value="user.cPersonalIntroduction"
          ></v-text-field>
      </div>
  </div>
</div>
  
</template>

<script>
import {getUserByUserId} from '@api/user/user'
export default {
  created(){
    this.getUserByUserIdFromServe(this.$route.params.userId);
  },
  data(){
    return {
      user:''
    }
  },
  methods:{
    getUserByUserIdFromServe(userId){
      getUserByUserId(userId).then(data=>{
        this.user = data.data;
      });
    }
  }
}
</script>

<style>

</style>