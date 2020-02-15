import {getToken,setToken, removeToken} from '@/request/token'
import {login, getCurrentUserInfo, logout, register} from '@api/user/user'
const userStore = {
    state:{
        id:-1,
        username:'',
        admin:false,
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
        },
        setAdmin(state,admin){
            state.admin = admin;
        }
    },
    actions:{
        login({commit}, user) {
            return new Promise((resolve, reject) => {
              login(user).then(data => {
                commit('setToken', data.data['Oauth-Token'])
                commit('setId', data.data['id'])
                commit('setUsername', data.data['username'])
                commit('setAdmin', data.data['admin'])
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
                  commit('setUsername', data.data.username)
                  commit('setId', data.data.id)
                  commit('setAdmin', data.data.admin)
                } else {
                  commit('setUsername', '')
                  commit('setId', -1)
                  commit('setAdmin', false)
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
                commit('setAdmin', false)
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
              commit('setAdmin', false)
              removeToken()
              resolve()
            }).catch(error => {
              throw (error)
            })
          },
          register({commit}, user) {
            return new Promise((resolve, reject) => {
              register(user.username, user.password).then((data) => {
                commit('setToken', data.data['Oauth-Token'])
                commit('setId', data.data['id'])
                commit('setUsername', data.data['username'])
                commit('setAdmin', data.data['admin'])
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