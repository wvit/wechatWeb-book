
<template>
    <div>
        <img v-show="userInfo" :src="userInfo.avatarUrl" alt="logo">
        <p v-show="userInfo">{{userInfo.nickName}}</p>
        <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="userLogin">登录</button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {}
    };
  },
  methods: {
    userLogin(res) {
      console.log(res);
      this.userInfo = res.target.userInfo;
    }
  }
};
</script>
<style>
</style>
