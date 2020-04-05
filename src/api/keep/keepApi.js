import request from '@/request/index'

export function attentionUser(userId) {
  return request({
    url: '/relation/attention/user/'+userId,
    method: 'put'
  })
}

export function cancleAttentionUser(userId) {
  return request({
    url: '/relation/attention/user/'+userId,
    method: 'delete'
  })
}

export function isAttentionUser(userId) {
  return request({
    url: '/relation/attention/user/'+userId,
    method: 'get'
  })
}


export function blockUser(userId) {
  return request({
    url: '/relation/block/user/'+userId,
    method: 'put'
  })
}

export function cancleBlockUser(userId) {
  return request({
    url: '/relation/block/user/'+userId,
    method: 'delete'
  })
}

export function isBlockUser(userId) {
  return request({
    url: '/relation/block/user/'+userId,
    method: 'get'
  })
}

export function keepNode(nodeId) {
  return request({
    url: '/keep/node/'+nodeId,
    method: 'put'
  })
}

export function cancleKeepNode(nodeId){
  return request({
    url: '/keep/node/'+nodeId,
    method: 'delete'
  })
}

export function isKeepNode(nodeId) {
  return request({
    url: '/keep/node/'+nodeId,
    method: 'get'
  })
}

export function keepTheme(themeId) {
  return request({
    url: '/keep/theme/'+themeId,
    method: 'put'
  })
}

export function cancleKeepTheme(themeId){
  return request({
    url: '/keep/theme/'+themeId,
    method: 'delete'
  })
}

export function isKeepTheme(themeId) {
  return request({
    url: '/keep/theme/'+themeId,
    method: 'get'
  })
}