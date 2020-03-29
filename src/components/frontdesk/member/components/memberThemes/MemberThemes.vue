<template>
  <div>
    <template v-if="isNoReply">
      <div id="no-comments-yet">
        目前尚无主题
      </div>
    </template>
    <template v-else>
      <template v-if="isMultiPage">
        <Pagination
          :pageSize="pageSize"
          :total="totalReply"
          :currentPage="currentPage"
          @currentChange="currentChange"
        />
      </template>
      <div
        class="cell item"
        v-for="themeVO in themeList"
        v-bind:key="themeVO.nId"
      >
        <div class="row no-gutters">
          <div class="col-11">
            <span class="item_title">
              <router-link
                :to="themeUrl(themeVO.theme.nId)"
                v-text="themeVO.theme.cThemeTitle"
                class="topic-link"
              ></router-link>
            </span>
            <div class="sep5"></div>
            <span class="topic_info">
              <router-link
                class="node"
                :to="nodeUrl(themeVO.theme.nThemeClass)"
                v-text="themeVO.themeClassName"
              ></router-link>
              &nbsp;•&nbsp;
              <strong>
                <router-link
                  :to="memberUrl(themeVO.themeOwner.nId)"
                  v-text="themeVO.themeOwner.cUsername"
                ></router-link>
              </strong>
              &nbsp;•&nbsp;
              创建于
<strong>
                <span>{{ ftime(themeVO.theme.dCreateTime) }}</span>
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
            <a
              :href="themeUrl(themeVO.theme.nId)"
              class="count_livid float-right"
              v-text="themeVO.countReply"
            ></a>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { Ftime } from "@util/themeUtil";
import Pagination from "@common/pagination/Pagination";
import { getThemeListByUserId } from "@api/theme/themeApi";
import { memberRouter, themeRouter, nodeRouter } from "@/router/routerUrl";
export default {
  created() {
    this.getThemeListFromServer(
      this.$route.params.userId,
      this.currentPage,
      this.pageSize
    );
  },
  props: {
    userId: {}
  },
  components: {
    Pagination
  },
  data() {
    return {
      themeList: [],
      pageSize: 20,
      totalReply: 0,
      currentPage: 1
    };
  },
  methods: {
    currentChange(newPage) {
      this.currentPage = newPage;
    },
    getThemeListFromServer(themeId, page, pageSize) {
      getThemeListByUserId(themeId, page, pageSize).then(data => {
        let result = data.data;
        this.themeList = result.themeVOList;
        this.totalReply = result.themeCount;
      });
    },
    memberUrl(id) {
      return memberRouter(id);
    },
    ftime: function(timespan) {
      return Ftime(timespan);
    },
    nodeUrl: function(router) {
      return nodeRouter(router);
    },
    themeUrl: function(themeId) {
      return themeRouter(themeId);
    }
  },
  computed: {
    isMultiPage() {
      return this.totalReply / this.pageSize > 1;
    },
    isNoReply() {
      return this.totalReply === 0;
    }
  }
};
</script>

<style>
.thank_area {
  display: inline-block;
  line-height: 100%;
  vertical-align: middle;
}

.no {
  font-size: 9px;
  line-height: 9px;
  font-weight: 500;
  border-radius: 10px;
  display: inline-block;
  background-color: #f0f0f0;
  color: #ccc;
  padding: 2px 5px;
  cursor: pointer;
}

.reply_content {
  font-size: 14px;
  line-height: 1.6;
  color: #000;
  word-break: break-word;
}

#no-comments-yet {
  padding: 10px;
  font-size: var(--box-font-size);
  line-height: var(--box-line-height);
  background-color: transparent;
  border-radius: var(--box-border-radius);
  box-shadow: none;
  border: 2px dashed rgba(0, 0, 0, 0.15);
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  color: rgba(0, 0, 0, 0.15);
}
</style>
