<template>
  <div>
    <template v-if="notifyCount == 0">
      <div id="no-comments-yet">
        目前尚无提醒
      </div>
    </template>
    <template v-else>
      <template v-if="isMultiPage">
        <Pagination
          :pageSize="pageSize"
          :total="notifyCount"
          :currentPage="currentPage"
          @currentChange="currentChange"
        />
      </template>
      <div v-for="notifyVO in notifyBOList" v-bind:key="notifyVO.notify.nId">
        <div class="row no-gutters align-items-center notify-box">
          <div class="col-11">
            <div
              v-bind:class="notifyVO.notify.bStatus == 0 ? '' : 'readed-notify'"
              class="float-left item_title"
            >
              <v-runtime-template
                :template="notifyMessage(notifyVO)"
              ></v-runtime-template>
            </div>
          </div>
          <div class="col-1">
            <template v-if="notifyVO.notify.bStatus == 0">
              <img :src="require('@/assets/icon/alert.png')"/>
            </template>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { Ftime } from "@util/themeUtil";
import Pagination from "@common/pagination/Pagination";
import VRuntimeTemplate from "v-runtime-template";
import { getNotifyList, readAllNotify } from "@api/notify/notifyApi";
import { themeRouterHtml, userRouterHtml } from "@/router/routerUrl";
export default {
  components: {
    Pagination,
    VRuntimeTemplate,
  },
  created() {
    this.getNotifyListFromServe(this.currentPage, this.pageSize);
  },
  data() {
    return {
      notifyBOList: [],
      pageSize: 10,
      notifyCount: 0,
      currentPage: 1,
    };
  },
  methods: {
    currentChange(newPage) {
      this.currentPage = newPage;
    },
    getNotifyListFromServe(page, pageSize) {
      getNotifyList(page, pageSize)
        .then((data) => {
          let result = data.data;
          this.notifyBOList = result.notifyBOList;
          this.notifyCount = result.notifyCount;
        this.readNotify();
        })
        .catch((error) => {
          this.$message({
            message: "加载用户提醒列表失败",
            type: "error",
            showClose: true,
          });
        });
    },
    readNotify(){
        readAllNotify().then(data=>{
            this.$store.dispatch("changeNotifyCount", 0);
        }).catch(error=>{
            this.$message({
            message: "更改提醒状态失败",
            type: "error",
            showClose: true,
          });
        })
    },
    notifyMessage(notifyVO) {
      let notifyMessage = "";
      if (notifyVO.notify.nNotifyType == 1) {
        notifyMessage = `<div>用户${userRouterHtml(
          notifyVO.sendUser
        )}在主题${themeRouterHtml(notifyVO.occurTheme)}提到你</div>`;
      }
      if (notifyVO.notify.nNotifyType == 2) {
        notifyMessage = `<p>用户${userRouterHtml(
          notifyVO.sendUser
        )}在你的主题${themeRouterHtml(notifyVO.occurTheme)}中发表了回复</p>`;
      }
      return notifyMessage;
    },
  },
  computed: {
    isMultiPage() {
      return this.notifyCount / this.pageSize > 1;
    },
  },
};
</script>

<style></style>
