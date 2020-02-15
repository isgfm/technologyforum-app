import Vue from 'vue'
import Router from 'vue-router'
import frontdeskRouter from '@frontdesk/frontdeskRouterConfig'
// import { getToken } from '../request/token';
// import store from './../store/index';
// import { Message } from 'element-ui';

Vue.use(Router)

const router = new Router({
    routes:[
        frontdeskRouter
    ]
});

export default router;