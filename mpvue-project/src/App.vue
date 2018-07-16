
<script>
import { get } from './util';
export default {
  async created() {
 
    const res = await get('/weapp/demo');
    console.log(123,res);
       wx.login({
      //获取code
      success: function(res) {
       let code = res.code //返回code
        console.log(code)
      }
    })
    console.log('已经启动');
  }
};
</script>

<style>
</style>