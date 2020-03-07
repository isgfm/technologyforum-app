import request from '@/request/index'

export function getThemeReply(themeId,page,pageSize){
    return request({
        url:'/themereply',
        method:'get',
        params:{
            themeId:themeId,
            page:page,
            pageSize:pageSize
        }
    });
}