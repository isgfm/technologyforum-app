import request from '@/request/index'

export function getThemeReply(themeId){
    return request({
        url:'/themereply',
        method:'get',
        params:{
            themeId:themeId
        }
    });
}