import request from '@/request/index'

export function getThemeClassByDepth(depth){
    return request({
        url:'/theme/class',
        method:'get',
        params:{
            depth:depth
        }
    });
}

export function getHomeThemeClass(){
    return request({
        url:'/theme/homeclass',
        method:'get'
    });
}