<template>
  <div>
    <template v-if="isNoReply">
      <div id="no-comments-yet">
        目前尚无回复
      </div>
    </template>
    <template v-else>
      <div class="box">
        <div class="cell">
          <span class="gray"
            >{{ totalReply }} 回复 &nbsp;<strong class="snow">|</strong>
            &nbsp;最后回复 {{ lastThemeReply.dReplyTime }}</span
          >
        </div>
        <template v-if="isMultiPage">
          <Pagination
            :pageSize="pageSize"
            :total="totalReply"
            :currentPage="currentPage"
            @currentChange="currentChange"
          />
        </template>
        <div
          class="cell"
          v-for="(reply, index) in replyList"
          v-bind:key="reply.nId"
        >
          <div class="row no-gutters">
            <div class="col-1">
              <router-link :to="memberUrl(reply.themeReplyOwner.nId)">
                <img :src="reply.themeReplyOwner.cAvatar" class="avatar" />
              </router-link>
            </div>
            <div class="col-11">
              <div class="fr">
                <template v-if="loginUser != null">
                  <a
                    href="#"
                    @click="
                      replyOne(
                        reply.themeReplyOwner.nId,
                        reply.themeReplyOwner.cUsername
                      )
                    "
                  >
                    <img
                      :src="require('@/assets/img/reply_neue.png')"
                      align="absmiddle"
                      border="0"
                      alt="Reply"
                      width="20"
                    />
                  </a>
                </template>

                &nbsp;&nbsp;
                <span class="no">{{ (index + 1) * currentPage }}</span>
              </div>
              <div class="sep3"></div>
              <strong>
                <router-link
                  :to="memberUrl(reply.themeReplyOwner.nId)"
                  class="dark"
                  >{{ reply.themeReplyOwner.cUsername }}</router-link
                >
              </strong>
              &nbsp; &nbsp;
              <span class="ago">{{ ftime(reply.themeReply.dReplyTime) }}</span>
              <div class="sep5"></div>
              <div class="reply_content">
                <v-runtime-template
                  :template="reply.themeReply.cReplyContent"
                ></v-runtime-template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { Ftime } from "@util/themeUtil";
import Pagination from "@common/pagination/Pagination";
import { getThemeReply } from "@api/theme/themeReplyApi";
import { memberRouter } from "@/router/routerUrl";
import VRuntimeTemplate from "v-runtime-template";
import {EventBus,REFRESH_EVENT} from "@eventBus/eventBus.js"
export default {
  created() {
    this.getThemeReplyFromServer(this.themeId, this.currentPage, this.pageSize);
  },
  props: {
    themeId: {},
  },
  components: {
    Pagination,
    VRuntimeTemplate,
  },
  data() {
    return {
      replyList: [],
      lastThemeReply: "",
      pageSize: 20,
      totalReply: 0,
      currentPage: 1,
    };
  },
  methods: {
    currentChange(newPage) {
      this.currentPage = newPage;
    },
    getThemeReplyFromServer(themeId, page, pageSize) {
      getThemeReply(themeId, page, pageSize).then((data) => {
        let result = data.data;
        this.replyList = result.themeReplyBOList;
        this.totalReply = result.totalReply;
        this.lastThemeReply = result.lastThemeReply;
      });
    },
    memberUrl(id) {
      return memberRouter(id);
    },
    ftime: function (timespan) {
      return Ftime(timespan);
    },
    replyOne: function (userId, username) {
      this.$store.dispatch("replyOne", { userId, username });
    }
  },
  computed: {
    isMultiPage() {
      return this.totalReply / this.pageSize > 1;
    },
    isNoReply() {
      return this.totalReply === 0;
    },
    loginUser() {
      return this.$store.state.userStore.user;
    },
  },
  mounted(){
    EventBus.$on(REFRESH_EVENT,()=>{
      this.getThemeReplyFromServer(this.themeId, this.currentPage, this.pageSize);
    });
  },
  beforeDestroy(){
    EventBus.$off(REFRESH_EVENT);
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
