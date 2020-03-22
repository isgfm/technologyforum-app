import request from '@/request/index'
import {getCaptcha_Redis_key} from '@/request/captcha'

export function login(username,password,captcha) {
  let data = {
    username,
    password,
    captcha
  };
  return request({
    url: '/login',
    method: 'post',
    headers:{'header-captcha':getCaptcha_Redis_key()},
    data
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'get'
  })
}

export function getCurrentUserInfo() {
  return request({
    url: '/user/currentUser',
    method: 'get'
  })
}

export function register(username,password,captcha) {
  let data = {
    username,
    password,
    captcha
  };
  return request({
    url: '/register',
    method: 'post',
    headers:{'header-captcha':getCaptcha_Redis_key()},
    data
  })
}

export function getUserListFromThemeReply(themeId) {
  return request({
    url: '/user/users/themereply',
    method: 'get',
    params:{
      themeId:themeId
    }
  })
}

export function getUsersByPageAndSize(pageIndex, pageSize) {
  return request({
    url: '/user/users?pageIndex=' + (pageIndex - 1) + '&pageSize=' + pageSize,
    method: 'get'
  })
}

export function saveProfile(data) {
  return request({
    url: '/user/profile/save',
    method: 'post',
    data
  })
}