
<template>
  <div>
    <img v-show="userInfo" :src="userInfo.avatarUrl" alt="logo">
    <p v-show="userInfo">{{userInfo.nickName}}</p>
    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="userLogin">登录</button>
  </div>
</template>
<script>
import { get, showSuccess } from '@/util';
export default {
  data() {
    return {
      userInfo: {}
    };
  },
  created() {
    let userState = wx.getStorageSync('userInfo');
    if (userState) {
      this.userInfo = userState;
    }
  },

  methods: {
    userLogin(res) {
      let userState = wx.getStorageSync('userInfo');
      if (!userState) {
        showSuccess('登录成功');
        this.userInfo = res.target.userInfo;
        wx.setStorageSync('userInfo', res.target.userInfo);
      }
    }
  }
};
</script>
<style>
</style>
