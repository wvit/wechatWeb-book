
<template>
  <div class="container">
    <div class="userinfo">
      <img v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" alt="logo">
      <img v-else src="../../../static/img/login.png">
      <p v-if="userInfo.nickName">
        {{userInfo.nickName}}
      </p>
      <p v-else>
        未登录
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
import { post, showSuccess, showModal } from '@/util';
import config from '@/config';
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
    async addBook(isbn, openid, userInfo) {
      const res = await post('/weapp/addBook', {
        isbn,
        openid,
        userInfo: {
          userName: userInfo.nickName
        }
      });
      console.log(res);
      showModal('添加成功', `${res.title}添加成功`);
    },
    scanBook() {
      let openid = null;
      wx.login({
        success: function(res) {
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data: {
              appid: config.appid,
              secret: config.appSecret,
              js_code: res.code,
              grant_type: 'authorization_code'
            },
            header: {
              'content-type': 'application/json'
            },
            success: function(res) {
              openid = res.data.openid; //返回openid
              console.log('openid:' + openid);
            }
          });
        }
      });
      wx.scanCode({
        success: res => {
          console.log(res);
          if (res.result) {
            let userInfo = wx.getStorageSync('userInfo');
            this.addBook(res.result, openid, userInfo);
          }
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
  padding: 0 30px;
  .userinfo {
    margin-top: 40px;
    text-align: center;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
  }
}
</style>
