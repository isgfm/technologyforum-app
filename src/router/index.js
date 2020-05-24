import Vue from "vue";
import Router from "vue-router";
import frontdeskRouter from "@frontdesk/frontdeskRouterConfig";
import backSatgeRouter from "@backstage/backStageRouterConfig"
import { getToken } from "../request/token";
import store from "./../store/index";
import { Message } from "element-ui";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [frontdeskRouter,backSatgeRouter]
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {//判断是否有标题
      document.title = to.meta.title
    }

  if (getToken()) {
    if(to.matched.some(r => r.meta.needAdmin)&&
    (store.state.userStore.user == null||store.state.userStore.user.nAdmin != 1)){
      Message({
        type: "warning",
        showClose: true,
        message: "权限不足"
      });
      next({path:'/'})
    }

    if (store.state.userStore.user === null) {
      store
        .dispatch("getUserInfo")
        .then(data => {
          //获取用户信息
          next();
        })
        .catch(error => {
          next({path:'/'})
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
      next({path:'/'})
    } else {
      next();
    }
  }
});

export default router;
