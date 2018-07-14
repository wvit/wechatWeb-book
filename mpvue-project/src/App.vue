
<script>
import { get } from './util';
import qcloud from 'wafer2-client-sdk';
import config from './config';
export default {
  created() {
    // qcloud.setLoginUrl(config.loginUrl);

    // qcloud.login({
    //   success: function(userInfo) {
    //     console.log('登录成功', userInfo);
    //   },
    //   fail: function(err) {
    //     console.log('登录失败', err);
    //   }
    // });
    // const res = await get('/weapp/demo');
    // console.log(res);
    console.log('已经启动');
  }
};
</script>

<style>
</style>