import request from '@/request/pure'


export function getCaptcha(){
    return request({
        url:'/captcha/img',
        responseType:'arraybuffer',
        method:'get'
    });
}