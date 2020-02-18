import {getToken,setToken, removeToken} from '@/request/token'
import {login, getCurrentUserInfo, logout, register} from '@api/user/user'
const userStore = {
    state:{
        id:-1,
        username:'',
        token:getToken()
    },
    mutations:{
        setToken(state,token){
            state.token = token;
        },
        setId(state,id){
            state.id = id;
        },
        setUsername(state,username){
            state.username = username;
        }
    },
    actions:{
        login({commit}, loginForm) {
            return new Promise((resolve, reject) => {
              login(loginForm.username,loginForm.password,loginForm.captcha).then(data => {
                commit('setToken', data.data['Oauth-Token'])
                commit('setId', data.data['nId'])
                commit('setUsername', data.data['cUsername'])
                setToken(data.data['Oauth-Token'])
                resolve()
              }).catch(error => {
                reject(error)
              })
            })
          },
          // 获取用户信息
          getUserInfo({commit}) {
            return new Promise((resolve, reject) => {
              getCurrentUserInfo().then(data => {
                if (data.data) {
                  commit('setUsername', data.data.cUsername)
                  commit('setId', data.data.nId)
                } else {
                  commit('setUsername', '')
                  commit('setId', -1)
                  removeToken()
                }
                resolve(data)
              }).catch(error => {
                reject(error)
              })
            })
          },
          // 退出
          logout({commit}) {
            return new Promise((resolve, reject) => {
              logout().then(data => {
                data;
                commit('setToken', '')
                commit('setUsername', '')
                commit('setId', -1)
                removeToken()
                resolve()
              }).catch(error => {
                reject(error)
              })
            })
          },
          // 前端 登出
          fedLogOut({commit}) {
            return new Promise((resolve) => {
              commit('setToken', '')
              commit('setUsername', '')
              commit('setId', -1)
              removeToken()
              resolve()
            }).catch(error => {
              throw (error)
            })
          },
          register({commit}, signupForm) {
            return new Promise((resolve, reject) => {
              register(signupForm.username, signupForm.password,signupForm.captcha).then((data) => {
                commit('setToken', data.data['Oauth-Token'])
                commit('setId', data.data['nId'])
                commit('setUsername', data.data['cUsername'])
                setToken(data.data['Oauth-Token'])
                resolve()
              }).catch((error) => {
                reject(error)
              })
            })
          }
    }
}

export default userStore