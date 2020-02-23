<template>
  <div>
      <img :src="imgCode" @click="changeImgCode"/>
  </div>
</template>

<script>
import {getCaptcha} from '@api/captcha/captchaApi'
import {setCaptcha_Redis_key} from '@/request/captcha'
export default {
    name:'Captcha',
    created(){
        this.captchaInit();
    },
    data(){
        return {
            imgCode:''
        }
    },
    methods:{
        changeImgCode:function(){
            this.imgCode = this.captchaUrl + '?'+Math.random();
        },
        captchaInit:function(){
            getCaptcha().then(data=>{
                this.imgCode = "data:image/jpeg;base64,"+Buffer.from(data.data, 'binary').toString('base64');
                console.log(data.headers["header-captcha"]);
                setCaptcha_Redis_key(data.headers["header-captcha"]);
            }).catch(error=>{
                this.$message({type:'error',message:error+':'+'验证码加载失败',showClose: true});
            })
        }
    }
}
</script>

<style>

</style>