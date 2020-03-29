<template>
  <div class="box">
    <div class="cell">
      <div class="row no-gutters">
        <div class="col-2">
          <img :src="user.cAvatar"/>
        </div>
        <div class="col-10">
          <div class="fr">
            <template v-if="isLogIn">
              <el-button type="info" round>加入特别关注</el-button>
              <el-button type="danger" round>Block</el-button>
            </template>
          </div>
          <h1 style="margin-bottom: 5px;">{{ user.cUsername }}</h1>
          <div class="sep10"></div>
          <span class="gray"
            >V2EX 第 {{ user.nId }} 号会员，加入于 {{ user.dCreateTime }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserByUserId } from "@api/user/user";
export default {
  props: {
    userId: {}
  },
  created() {
    this.getUserByUserIdFromServer(this.$route.params.userId);
  },
  data() {
    return {
      user: ""
    };
  },
  methods: {
    getUserByUserIdFromServer(userId) {
      getUserByUserId(userId).then(data => {
        this.user = data.data;
      });
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
