<template>
  <div class="box" v-title :data-title="user.cUsername">
    <div class="cell">
      <div class="row no-gutters">
        <div class="col-2">
          <img :src="user.cAvatar" />
        </div>
        <div class="col-10">
          <div class="fr">
            <template v-if="loginUser != null && loginUser.nId != userId">
              <AttentionBtn :userId="userId" />
              <!-- <el-button type="danger" @click="" round>Block</el-button> -->
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
import AttentionBtn from "../attentionBtn/AttentionBtn";
export default {
  components: {
    AttentionBtn
  },
  props: {
    userId: {}
  },
  created() {
    this.getUserByUserIdFromServer(this.userId);
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
    loginUser() {
      return this.$store.state.userStore.user;
    }
  }
};
</script>

<style></style>
