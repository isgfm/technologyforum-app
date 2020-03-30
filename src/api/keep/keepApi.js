import request from '@/request/index'

export function getKeep() {
    return request({
      url: '/logout',
      method: 'get'
    })
  }