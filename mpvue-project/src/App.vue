
<script>
import { get } from './util';
import qcloud from 'wafer2-client-sdk';
import config from './config';
export default {
  async created() {
    // qcloud.setLoginUrl(config.loginUrl);
    // qcloud.login({
    //   success: function(userInfo) {
    //     console.log('登录成功', userInfo);
    //   },
    //   fail: function(err) {
    //     console.log('登录失败', err);
    //   }
    // });
    // wx.login({
    //   success: function(res) {
    //     wx.request({
    //       url: 'https://api.weixin.qq.com/sns/jscode2session',
    //       data: {
    //         appid: config.appid,
    //         secret: config.appSecret,
    //         js_code: res.code,
    //         grant_type: 'authorization_code'
    //       },
    //       header: {
    //         'content-type': 'application/json'
    //       },
    //       success: function(res) {
    //         let openid = res.data.openid; //返回openid
    //         console.log('openid:' + openid);
    //       }
    //     });
    //   }
    // });
    console.log('已经启动');
  }
};
</script>

<style lang='scss'>
.btn {
  color: #fff;
  background: #ea5a49;
  margin: 10rpx 0;
  padding: 0 15rpx;
  border-radius: 10rpx;
  font-size: 34rpx;
  line-height: 80rpx;
  width: 100%;
}
.btn:active {
  background: #fa5a49;
}
</style>