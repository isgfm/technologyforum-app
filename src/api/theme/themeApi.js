import request from '@/request/index'

export function getThemeListByTabId(tabId,startIndex,endIndex){
    return request({
        url:'/theme/themelist/tab',
        method:'get',
        params:{
            tabId:tabId,
            startIndex:startIndex,
            endIndex:endIndex
        }
    });
}

export function getThemeListByNodeId(nodeId,startIndex,endIndex){
    return request({
        url:'/theme/themelist/node',
        method:'get',
        params:{
            nodeId:nodeId,
            startIndex:startIndex,
            endIndex:endIndex
        }
    });
}