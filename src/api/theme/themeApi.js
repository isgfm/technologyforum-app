import request from '@/request/index'

export function getThemeListByTabRouter(tabRouter,page,pageSize){
    return request({
        url:'/theme/themelist/tab/'+tabRouter,
        method:'get',
        params:{
            page:page,
            pageSize:pageSize
        }
    });
}

export function getThemeListByNodeRouter(nodeRouter,page,pageSize){
    return request({
        url:'/theme/themelist/node/'+nodeRouter,
        method:'get',
        params:{
            page:page,
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

export function getTheme(id){
    return request({
        url:'/theme/'+id,
        method:'get'
    });
}

export function getThemeListByUserId(userId,page,pageSize){
    return request({
        url:'/theme/userthemes/'+userId,
        method:'get',
        params:{
            page:page,
            pageSize:pageSize
        }
    });
}

export function getThemeListByUserAttention(page,pageSize){
    return request({
        url:'/theme/user/attention',
        method:'get',
        params:{
            page:page,
            pageSize:pageSize
        }
    });
}

export function getThemeListByUserKeep(page,pageSize){
    return request({
        url:'/theme/user/keep',
        method:'get',
        params:{
            page:page,
            pageSize:pageSize
        }
    });
}

export function isHideTheme(themeId) {
    return request({
      url: '/theme/hide/'+themeId,
      method: 'get'
    })
  }
  
  export function hideTheme(themeId) {
    return request({
      url: '/theme/hide/'+themeId,
      method: 'put'
    })
  }

  export function cancleHideTheme(themeId) {
    return request({
      url: '/theme/cancle/hide/'+themeId,
      method: 'put'
    })
  }

  export function getHideThemeList(page,pageSize) {
    return request({
      url: '/theme/hide/themelist',
      method: 'get',
      params:{
        page:page,
        pageSize:pageSize
    }
    })
  }

  export function getSearchThemeList(searchContent,page,pageSize){
    const data = searchContent;
    return request({
        url:'/theme/themelist/search',
        method:'post',
        params:{
            searchContent:searchContent,
            page:page,
            pageSize:pageSize
        }
    });
}