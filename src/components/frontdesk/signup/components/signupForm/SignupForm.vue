<template>
  <el-form
    ref="signupForm"
    :model="signupForm"
    :rules="rules"
    label-position="right"
    label-width="155px"
    size="mini"
  >
    <el-form-item label="账号" prop="username">
      <el-col :span="12">
        <el-input
          placeholder="用户名或电子邮箱"
          v-model="signupForm.username"
        ></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-col :span="12">
        <el-input
          placeholder="密码"
          type="password"
          v-model="signupForm.password"
        ></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPassword">
      <el-col :span="12">
        <el-input
          placeholder="确认密码"
          type="password"
          v-model="signupForm.checkPassword"
        ></el-input>
      </el-col>
    </el-form-item>
    <el-row style="margin-bottom: 18px">
      <el-col :span="16"><captcha /></el-col>
    </el-row>
    <el-form-item label="验证码" prop="captcha">
      <el-col :span="12">
        <el-input
          placeholder="请输入上图中的验证码"
          v-model="signupForm.captcha"
        ></el-input>
      </el-col>
    </el-form-item>
    <el-form-item size="small" class="me-login-button">
      <el-col :span="2">
        <el-button type="primary" @click.native.prevent="signup('signupForm')"
        >注册</el-button
      >
      </el-col>
      
    </el-form-item>
  </el-form>
</template>

<script>
import Captcha from "@common/captcha/Captcha";
export default {
  name: "Signup",
  components: {
    captcha: Captcha
  },
  data() {
      var validateCheckPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.signupForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      signupForm: {
        username: "",
        password: "",
        checkPassword:'',
        captcha: ""
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
        captcha: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 5, max: 5, message: "验证码为5位字符", trigger: "blur" }
        ],
        checkPassword:[
            { validator: validateCheckPass, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    signup(formName) {
      let that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          that.$store
            .dispatch("register", that.signupForm)
            .then(() => {
                that.$message({message: '注册成功 跳转至首页', type: 'success', showClose: true});
              that.$router.push("/");
            })
            .catch(error => {
              if (error !== "error") {
                that.$message({
                  message: error.message,
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
