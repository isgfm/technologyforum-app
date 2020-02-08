import request from '@/request/index'

export function getForumState(){
    return request({
        url:'/forum/state',
        method:'get'
    });
}