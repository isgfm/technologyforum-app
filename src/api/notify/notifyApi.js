import request from '@/request/index'

export function getUnreadNotifyList(){
    return request({
        url:'/notify/unread',
        method:'get'
    });
}

export function getReadedNotifyList(){
    return request({
        url:'/notify/readed',
        method:'get'
    });
}

export function getNotifyList(page,pageSize){
    return request({
        url:'/notify/list',
        method:'get',
        params:{
            page:page,
            pageSize:pageSize
        }
    });
}

export function readNotify(notifyId){
    return request({
        url:`/notify/read/${notifyId}`,
        method:'put'
    });
}

export function readAllNotify(){
    return request({
        url:'/notify/readall',
        method:'put'
    });
}

