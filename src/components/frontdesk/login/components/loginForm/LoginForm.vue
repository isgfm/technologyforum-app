<template>
  <el-form
    ref="loginForm"
    :model="loginForm"
    :rules="rules"
    :label-position="right"
    label-width="155px"
    size="mini"
  >
    <el-form-item label="账号" prop="username">
      <el-col :span="12">
        <el-input
          placeholder="用户名或电子邮箱"
          v-model="loginForm.username"
        ></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-col :span="12">
        <el-input
          placeholder="密码"
          type="password"
          v-model="loginForm.password"
        ></el-input>
      </el-col>
    </el-form-item>
    <el-row style="margin-bottom: 18px">
      <el-col :span="16"><captcha /></el-col>
    </el-row>
    <el-form-item label="验证码" prop="validateCode">
      <el-col :span="12">
        <el-input
          placeholder="请输入上图中的验证码"
          v-model="loginForm.validateCode"
        ></el-input>
      </el-col>
    </el-form-item>
    <el-form-item size="small" class="me-login-button">
      <el-col :span="2">
        <el-button type="primary" @click.native.prevent="login('loginForm')"
        >登录</el-button
      >
      </el-col>
      
    </el-form-item>
  </el-form>
</template>

<script>
import Captcha from "@common/captcha/Captcha";
export default {
  name: "Login",
  components: {
    captcha: Captcha
  },
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        validateCode: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { max: 10, message: "不能大于10个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "密码在6到16个字符之间", trigger: "blur" }
        ],
        validateCode: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 5, max: 5, message: "验证码为5位字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login(formName) {
      let that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          that.$store
            .dispatch("login", that.loginForm)
            .then(() => {
              that.$router.go(-1);
            })
            .catch(error => {
              if (error !== "error") {
                that.$message({
                  message: error,
                  type: "error",
                  showClose: true
                });
              }
            });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style></style>
