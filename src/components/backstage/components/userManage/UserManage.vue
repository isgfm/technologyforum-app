<template>
  <div class="box">
    <template v-if="isNoUser">
      <div id="no-comments-yet">
        目前尚无被封禁用户
      </div>
    </template>
    <template v-else>
      <template v-if="isMultiPage">
        <Pagination
          :pageSize="pageSize"
          :total="userCount"
          :currentPage="currentPage"
          @currentChange="currentChange"
        />
      </template>
      <div
        class="cell item"
        v-for="user in userList"
        v-bind:key="user.nId"
      >
        <div class="row no-gutters">
          <div class="col-1">
            <router-link :to="userUrl(user.nId)">
              <img :src="user.cAvatar" class="avatar" />
            </router-link>
          </div>
          <div class="col-3">
            <span class="h5">
              <strong>
                <router-link
                  :to="userUrl(user.nId)"
                  v-text="user.cUsername"
                ></router-link>
              </strong>
            </span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { Ftime } from "@util/themeUtil";
import Pagination from "@common/pagination/Pagination";
import { memberRouter, themeRouter, nodeRouter } from "@/router/routerUrl";
import { getBlockUserList } from "@api/user/user";
export default {
  created() {
    this.getUserListFromServer(this.currentPage, this.pageSize);
  },
  data() {
    return {
      userList: [],
      pageSize: 20,
      userCount: 0,
      currentPage: 1,
    };
  },
  methods: {
    currentChange(newPage) {
      this.currentPage = newPage;
      this.getUserListFromServer(this.currentPage, this.pageSize);
    },
    getUserListFromServer(page, pageSize) {
      getBlockUserList(page, pageSize).then((data) => {
        let result = data.data;
        this.userList = result.userList;
        this.userCount = result.userCount;
      });
    },
    userUrl: function(userId) {
      return memberRouter(userId);
    },
    nodeUrl: function(router) {
      return nodeRouter(router);
    },
    themeUrl: function(themeId) {
      return themeRouter(themeId);
    },
    ftime: function(timespan) {
      return Ftime(timespan);
    },
  },
  computed: {
    isMultiPage() {
      return this.userCount / this.pageSize > 1;
    },
    isNoUser() {
      return this.userCount === 0;
    },
  },
};
</script>

<style></style>
