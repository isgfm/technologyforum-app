import request from '@/request/index'

export function attentionUser(userId) {
  return request({
    url: '/attention/user/'+userId,
    method: 'get'
  })
}

export function cancleAttentionUser(userId) {
  return request({
    url: '/attention/cancle/user/'+userId,
    method: 'get'
  })
}

export function blockUser(userId) {
  return request({
    url: '/block/user/'+userId,
    method: 'get'
  })
}

export function cancleBlockUser(userId) {
  return request({
    url: '/block/cancle/user/'+userId,
    method: 'get'
  })
}

export function keepNode(nodeId) {
  return request({
    url: '/keep/node/'+nodeId,
    method: 'get'
  })
}

export function cancleKeepNode(nodeId){
  return request({
    url: '/keep/cancle/node/'+nodeId,
    method: 'get'
  })
}

export function keepTheme(themeId) {
  return request({
    url: '/keep/theme/'+themeId,
    method: 'get'
  })
}

export function cancleKeepTheme(themeId){
  return request({
    url: '/keep/cancle/theme/'+themeId,
    method: 'get'
  })
}