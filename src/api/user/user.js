import request from '@/request/index'

export function login(username,password,captcha) {
  let data = {
    username,
    password,
    captcha
  };
  return request({
    url: '/login',
    method: 'post',
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
    data
  })
}

export function getAllUser() {
  return request({
    url: '/user/allUser',
    method: 'get'
  })
}

export function getUsersByPageAndSize(pageIndex, pageSize) {
  return request({
    url: '/user/users?pageIndex=' + (pageIndex - 1) + '&pageSize=' + pageSize,
    method: 'get'
  })
}