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

export function getUserByUserId(userId) {
  return request({
    url: '/user/'+userId,
    method: 'get'
  })
}

export function getUserStateCountByUserId(userId) {
  return request({
    url: '/user/statecount/'+userId,
    method: 'get'
  })
}

export function blockUser(userId) {
  return request({
    url: '/user/block/'+userId,
    method: 'put'
  })
}

export function cancleBlockUser(userId) {
  return request({
    url: '/user/cancle/block/'+userId,
    method: 'put'
  })
}

export function isBlockUser(userId) {
  return request({
    url: '/user/block/'+userId,
    method: 'get'
  })
}

export function getBlockUserList(page,pageSize) {
  return request({
    url: '/user/block/userlist',
    method: 'get',
    params:{
      page:page,
      pageSize:pageSize
  }
  })
}