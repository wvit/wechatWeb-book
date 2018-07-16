
<script>
import { get } from './util';
import config from './config';
export default {
  async created() {
       wx.login({
        success: function(res) {
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data:{
              appid:config.appid,
              secret:config.appSecret,
              js_code:res.code,
              grant_type:'authorization_code'
            },
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
            let openid = res.data.openid //返回openid
            console.log('openid:'+openid)
            }
          })
        }
    })
    console.log('已经启动');
  }
};
</script>

<style>
</style>