import request from '@/request/index'

export function getThemeListByTabId(tabId,offset,pageSize){
    return request({
        url:'/theme/themelist/tab/'+tabId,
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