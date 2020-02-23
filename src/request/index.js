import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store/index'
import { getToken,removeToken} from './token';

const service = axios.create({
    baseURL: 'http://localhost:3333/api',
    timeout: 10000
})


service.interceptors.request.use(config => {
    if (getToken() != '') {
        config.headers['Oauth-Token'] = getToken();
    }
    return config;
}, error => {
    Promise.reject(error);
});

service.interceptors.response.use(
    response => {
  
      //全局统一处理 Session超时
      if (response.headers['session_time_out'] == 'timeout') {
        store.dispatch('fedLogOut')
      }
  
      let res = response.data;
      // if(res.code === undefined)
      //   res = JSON.parse(res);
      // console.log(res);
      //0 为成功状态
      if (res.code !== 0) {
  
        //90001 Session超时
        if (res.code === 90001) {
          return Promise.reject('error');
        }
  
        //20001 用户未登录
        if (res.code === 20001) {
          if(getToken()){
            removeToken();
          }else{
            Message({
              type: 'warning',
              showClose: true,
              message: '未登录或登录超时，请重新登录哦'
            })
          }
          
          
          return Promise.reject('error');
        }
  
        //70001 权限认证错误
        if (res.code === 70001) {
          Message({
            type: 'warning',
            showClose: true,
            message: '你没有权限访问哦'
          })
          return Promise.reject('error');
        }

        //20008 验证码过期
        if (res.code === 20008) {
          Message({
            type: 'warning',
            showClose: true,
            message: '验证码过期'
          })
          return Promise.reject('error');
        }

        //20007 验证码错误
        if (res.code === 20007) {
          Message({
            type: 'error',
            showClose: true,
            message: '验证码错误'
          })
          return Promise.reject('error');
        }
  
        return Promise.reject(res.msg);
        
      } else {
          try{
              res.data = JSON.parse(res.data);
              return res;
          }catch(e){
              return res;
          }
      }
    },
    error => {
      Message({
        type: 'warning',
        showClose: true,
        message: error+'连接超时'
      })
      return Promise.reject('error')
    })


export default service