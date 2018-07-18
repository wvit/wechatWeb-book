
<template>
  <div class="container">
    <div class="userinfo">
      <img v-show="userInfo.avatarUrl" :src="userInfo.avatarUrl" alt="logo">
      <p v-show="userInfo.avatarUrl">
        {{userInfo.nickName}}
      </p>

    </div>
    <YearProgress></YearProgress>
    <button v-if="userInfo.avatarUrl" class="btn" @click="scanBook">
      添加图书
    </button>
    <button v-else class="btn" open-type="getUserInfo" lang="zh_CN" @getuserinfo="userLogin">
      登录
    </button>
  </div>
</template>
<script>
import YearProgress from '@/components/YearProgress';
import { get, showSuccess } from '@/util';
export default {
  components: {
    YearProgress
  },
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
    scanBook() {
      wx.scanCode({
        success: res => {
          console.log(res);
        }
      });
    },
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
<style lang="scss">
.container {
  padding: 0 30rpx;
  .userinfo {
    margin-top: 100rpx;
    text-align: center;
    img {
      width: 150rpx;
      height: 150rpx;
      border-radius: 50%;
      margin: 20rpx;
    }
  }
}
</style>
