import Vue from "vue";
import Router from "vue-router";
import frontdeskRouter from "@frontdesk/frontdeskRouterConfig";
import { getToken } from "../request/token";
import store from "./../store/index";
import { Message } from "element-ui";

Vue.use(Router);

const router = new Router({
  routes: [frontdeskRouter]
});

router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (store.state.userStore.user === null) {
      store
        .dispatch("getUserInfo")
        .then(data => {
          //获取用户信息
          next();
        })
        .catch(error => {
          next();
        });
    }
    next();
  } else {
    if (to.matched.some(r => r.meta.requireLogin)) {
      Message({
        type: "warning",
        showClose: true,
        message: "请先登录哦"
      });
      
    } else {
      next();
    }
  }
});

export default router;
