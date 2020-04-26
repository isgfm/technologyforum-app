<template>
  <!-- <el-form
    ref="profileForm"
    :model="profileForm"
    label-position="right"
    label-width="155px"
    size="mini"
  >
    <el-form-item label="测试">
      <el-col :span="10">
        <span> Viewer第{{ profileForm.nId }}位会员 </span>
      </el-col>
    </el-form-item>
    <el-form-item label="用户名">
      <el-col :span="12">
        <span>{{ profileForm.cUsername }}</span>
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
  </el-form> -->
  <v-form ref="form">
    <v-text-field
      v-model="profileForm.cUsername"
      label="用户名"
      disabled
    ></v-text-field>
    <v-text-field v-model="profileForm.cEmail" label="电子邮件"></v-text-field>
    <v-select v-model="profileForm.nSex" :items="sex" label="性别"></v-select>
    <v-text-field v-model="profileForm.cTelephone" label="电话"></v-text-field>
    <v-text-field
      v-model="profileForm.cPersonalWebsite"
      label="个人网站"
    ></v-text-field>
    <v-text-field v-model="profileForm.cCompany" label="公司"></v-text-field>
    <v-text-field v-model="profileForm.cPosition" label="职位"></v-text-field>
    <v-text-field v-model="profileForm.cLocation" label="所在地"></v-text-field>
    <v-text-field v-model="profileForm.cSignature" label="签名"></v-text-field>
    <v-text-field
      v-model="profileForm.cPersonalIntroduction"
      label="个人介绍"
    ></v-text-field>
    <el-button type="primary" @click="save">
      保存
    </el-button>
  </v-form>
</template>

<script>
import ContentHeader from "@common/contentHeader/ContentHeader";
import { saveProfile, getCurrentUserInfo } from "@api/user/user";
export default {
  created() {
    this.loadUser();
  },
  data() {
    return {
      profileForm: {
        nId: "",
        cUsername: "",
        cEmail: "",
        nSex: "",
        cTelephone: "",
        cPersonalWebsite: "",
        cCompany: "",
        cPosition: "",
        cLocation: "",
        cSignature: "",
        cPersonalIntroduction: "",
      },
      sex: [
        {
          text: "男",
          value: 1,
        },
        {
          text: "女",
          value: 0,
        },
      ],
    };
  },
  methods: {
    loadUser() {
      getCurrentUserInfo()
        .then((data) => {
          let user = data.data;
          this.profileForm.cUsername = user.cUsername;
          this.profileForm.nId = user.nId;
          this.profileForm.cEmail = user.cEmail;
          this.profileForm.nSex = user.nSex;
          this.profileForm.cTelephone = user.cTelephone;
          this.profileForm.cPersonalWebsite = user.cPersonalWebsite;
          this.profileForm.cCompany = user.cCompany;
          this.profileForm.cPosition = user.cPosition;
          this.profileForm.cLocation = user.cLocation;
          this.profileForm.cSignature = user.cSignature;
          this.profileForm.cPersonalIntroduction = user.cPersonalIntroduction;
        })
        .catch((error) => {
          this.$message({
            message: "加载用户失败",
            type: "error",
            showClose: true,
          });
        });
    },
    save() {
      var sex = this.profileForm.nSex;
      if (sex != null) {
        sex = Number(sex);
        this.profileForm.nSex = sex;
      }
      var profileData = JSON.parse(JSON.stringify(this.profileForm));
      saveProfile(profileData)
        .then((data) => {
          this.$message({
            message: "保存成功",
            type: "success",
            showClose: true,
          });
        })
        .catch((error) => {
          this.$message({
            message: error + "保存失败",
            type: "error",
            showClose: true,
          });
        });
    },
  },
};
</script>

<style></style>
