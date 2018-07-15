
<template>
  <div>
    个人中心页面
    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="userInfo">登录</button>
  </div>

</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    userInfo(info) {
      console.log(info);
    }
  }
};
</script>
<style>
</style>
