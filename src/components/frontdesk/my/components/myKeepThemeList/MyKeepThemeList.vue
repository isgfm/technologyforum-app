<template>
  <div>
    <content-header :tip="`我收藏的主题`"></content-header>
    <template v-if="isNoTheme">
      <div id="no-comments-yet">
        目前尚无收藏主题
      </div>
    </template>
    <template v-else>
      <template v-if="isMultiPage">
        <Pagination
          :pageSize="pageSize"
          :total="nodeThemeCount"
          :currentPage="currentPage"
          @currentChange="currentChange"
        />
      </template>
      <div
        class="cell item"
        v-for="themeVO in themeVOList"
        v-bind:key="themeVO.nId"
      >
        <div class="row no-gutters">
          <div class="col-1">
            <router-link :to="userUrl(themeVO.themeOwner.nId)">
              <img :src="themeVO.themeOwner.cAvatar" class="avatar" />
            </router-link>
          </div>

          <div class="col-10">
            <span class="item_title">
              <router-link
                :to="themeUrl(themeVO.theme.nId)"
                v-text="themeVO.theme.cThemeTitle"
                class="topic-link"
              ></router-link>
            </span>
            <div class="sep5"></div>
            <span class="topic_info">
              <strong>
                <router-link
                  :to="userUrl(themeVO.themeOwner.nId)"
                  v-text="themeVO.themeOwner.cUsername"
                ></router-link>
              </strong>
              <template v-if="themeVO.countReply > 0">
                &nbsp;•&nbsp; 最后回复
                <strong>
                  <span>{{ ftime(themeVO.lastThemeReply.dReplyTime) }}</span>
                </strong>
              </template>
            </span>
          </div>
          <div class="col-1">
            <router-link
              :to="themeUrl(themeVO.theme.nId)"
              class="count_livid float-right"
              v-text="themeVO.countReply"
            ></router-link>
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
import { getThemeListByUserKeep } from "@api/theme/themeApi";
import ContentHeader from "@common/contentHeader/ContentHeader";
export default {
  components: {
    ContentHeader,
  },
  created() {
    this.getThemeVOListFromServer(
      this.currentPage,
      this.pageSize
    );
  },
  data() {
    return {
      themeVOList: [],
      pageSize: 20,
      nodeThemeCount: 0,
      currentPage: 1
    };
  },
  methods: {
    currentChange(newPage) {
      this.currentPage = newPage;
      this.getThemeVOListFromServer(this.currentPage,this.pageSize);
    },
    getThemeVOListFromServer(page, pageSize) {
      getThemeListByUserKeep(page, pageSize).then(data => {
        let result = data.data;
        this.themeVOList = result.themeVOList;
        this.nodeThemeCount = result.themeCount;
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
    }
  },
  computed: {
    isMultiPage() {
      return this.nodeThemeCount / this.pageSize > 1;
    },
    isNoTheme() {
      return this.nodeThemeCount === 0;
    }
  }
};
</script>

<style></style>
