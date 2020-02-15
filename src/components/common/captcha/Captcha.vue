<template>
  <div>
      <img :src="imgCode" @click="changeImgCode"/>
  </div>
</template>

<script>
import {getCaptcha} from '@api/captcha/captchaApi'
export default {
    name:'Captcha',
    created(){
        this.imgCode = this.captchaUrl;
    },
    data(){
        return {
            captchaUrl:'http://localhost:3333/api/captcha/img',
            imgCode:''
        }
    },
    methods:{
        changeImgCode:function(){
            this.imgCode = this.captchaUrl + '?'+Math.random();
        },
        captchaInit:function(){
            getCaptcha().then(data=>{
                this.imgCode = data.data;
            }).catch(error=>{
                this.$message({type:'error',message:error+':'+'验证码加载失败',showClose: true});
            })
        }
    }
}
</script>

<style>

</style>