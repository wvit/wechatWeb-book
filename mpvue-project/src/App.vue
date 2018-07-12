
<script>
import { get } from './util';
export default {
  async created() {
    const res = await get('/weapp/demo');
    console.log(res);
    console.log('已经启动');
  }
};
</script>

<style>
</style>