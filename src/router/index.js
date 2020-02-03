import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from '@frontdesk/home/homeRouterConfig'

// import { getToken } from '../request/token';
// import store from './../store/index';
// import { Message } from 'element-ui';

Vue.use(Router)

const router = new Router({
    routes:[
        homeRouter
    ]
});

export default router;