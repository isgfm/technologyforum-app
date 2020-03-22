<template>
  <el-form
    ref="profileForm"
    :model="profileForm"
    label-position="right"
    label-width="155px"
    size="mini"
  >
  <el-form-item>
      <el-col :span="10">
        <span> V2EX第{{ user != null ? user.nId : "数据未加载" }}位会员 </span>
      </el-col>
    </el-form-item>
    <el-form-item label="用户名">
      <el-col :span="12">
        <span>{{ user != null ? user.cUsername : "" }}</span>
        <!-- <el-input v-model="profileForm.test"></el-input> -->
      </el-col>
    </el-form-item>
    <el-form-item label="性别" prop="nSex">
      <el-col :span="12">
        <el-select v-model="profileForm.nSex">
          <el-option key="1" label="男" value="1"> </el-option>
          <el-option key="0" label="女" value="0"> </el-option>
        </el-select>
      </el-col>
    </el-form-item>
    <el-form-item label="手机号" prop="cTelephone">
      <el-col :span="12">
        <el-input v-model="profileForm.cTelephone"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="电子邮件" prop="cEmail">
      <el-col :span="12">
        <el-input v-model="profileForm.cEmail"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="个人网站" prop="cPersonalWebsite">
      <el-col :span="12">
        <el-input v-model="profileForm.cPersonalWebsite"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="所在公司" prop="cCompany">
      <el-col :span="12">
        <el-input v-model="profileForm.cCompany"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="工作职位" prop="cPosition">
      <el-col :span="12">
        <el-input v-model="profileForm.cPosition"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="所在地" prop="cLocation">
      <el-col :span="12">
        <el-input v-model="profileForm.cLocation"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="签名" prop="cSignature">
      <el-col :span="12">
        <el-input v-model="profileForm.cSignature"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="个人简介" prop="cPersonalIntroduction">
      <el-col :span="12">
        <el-input v-model="profileForm.cPersonalIntroduction"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item class="me-login-button">
      <el-col :span="2">
        <el-button type="primary" @click="save">保存</el-button>
      </el-col>
    </el-form-item>
  </el-form>
</template>

<script>
import ContentHeader from "@common/contentHeader/ContentHeader";
import { saveProfile } from "@api/user/user";
export default {
  data() {
    return {
      profileForm: {
        cEmail: "",
        nSex: "",
        cTelephone: "",
        cPersonalWebsite: "",
        cCompany: "",
        cPosition: "",
        cLocation: "",
        cSignature: "",
        cPersonalIntroduction: ""
      }
    };
  },
  computed: {
    user: function() {
      return this.$store.state.userStore.user;
    }
  },
  watch: {
    user: {
      handler(newVal, oldVal) {
        if (newVal != null) {
          this.profileForm.cEmail = this.user.cEmail;
          this.profileForm.nSex = String(this.user.nSex);
          this.profileForm.cTelephone = this.user.cTelephone;
          this.profileForm.cPersonalWebsite = this.user.cPersonalWebsite;
          this.profileForm.cCompany = this.user.cCompany;
          this.profileForm.cPosition = this.user.cPosition;
          this.profileForm.cLocation = this.user.cLocation;
          this.profileForm.cSignature = this.user.cSignature;
          this.profileForm.cPersonalIntroduction = this.user.cPersonalIntroduction;
        }
      }
    }
  },
  methods: {
    save() {
      var sex = this.profileForm.nSex;
      if (sex != null) {
        sex = Number(sex);
        this.profileForm.nSex = sex;
      }
      var profileData = JSON.parse(JSON.stringify(this.profileForm));
      saveProfile(profileData)
        .then(data => {
          this.$message({
            message: "保存成功",
            type: "success",
            showClose: true
          });
        })
        .catch(error => {
          this.$message({
            message: error + "保存失败",
            type: "error",
            showClose: true
          });
        });
    }
  }
};
</script>

<style></style>
