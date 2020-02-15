import request from '@/request/index'

export function getCaptcha(){
    return request({
        url:'/captcha/img',
        responseType:'arraybuffer',
        method:'get'
    });
}