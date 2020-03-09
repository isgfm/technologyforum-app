import request from '@/request/index'

export function getThemeListByTabId(tabRouter,offset,pageSize){
    return request({
        url:'/theme/themelist/tab/'+tabRouter,
        method:'get',
        params:{
            offset:offset,
            pageSize:pageSize
        }
    });
}

export function getThemeListByNodeId(nodeId,offset,pageSize){
    return request({
        url:'/theme/themelist/node/'+nodeId,
        method:'get',
        params:{
            offset:offset,
            pageSize:pageSize
        }
    });
}

export function getTodayHotTheme(limit){
    return request({
        url:'/theme/hot',
        method:'get',
        params:{
            limit:limit
        }
    });
}

export function publishTheme(themeForm){
    const data = {
        cThemeTitle:themeForm.themeTitle,
        cThemeContent:themeForm.themeContent,
        nThemeClass:themeForm.themeClass
    }
    return request({
        url:'/theme/publish',
        method:'post',
        data
    });
}

export function keepTheme(id){
    return request({
        url:'/theme/kepp',
        method:'get',
        params:{
            id:id
        }
    });
}

export function getTheme(id){
    return request({
        url:'/theme/'+id,
        method:'get'
    });
}

