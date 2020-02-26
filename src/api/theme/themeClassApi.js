import request from '@/request/index'

export function getThemeClassByDepth(depth){
    return request({
        url:'/themeclass',
        method:'get',
        params:{
            depth:depth
        }
    });
}

export function getThemeClassTabs(){
    return request({
        url:'/themeclass/tabs',
        method:'get'
    });
}

export function getHomeThemeClass(){
    return request({
        url:'/themeclass/homeclass',
        method:'get'
    });
}

export function getNodeByDepth(depth){
    return request({
        url:'/themeclass',
        method:'get',
        params:{
            depth:depth
        }
    });
}

export function getNodesByTabRouter(tabRouter){
    return request({
        url:'/themeclass/node',
        method:'get',
        params:{
            tabRouter:tabRouter
        }
    });
}

export function getHotNode(limit){
    return request({
        url:'/themeclass/hot',
        method:'get',
        params:{
            limit:limit
        }
    });
}