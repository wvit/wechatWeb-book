<template>
    <div>
        个人中心页面
        <button open-type="getUserInfo" lang="zh-CN"
 @getuserinfo="login">登录</button>
    </div>
</template>
<script>
export default {
    methods:{
        login(info){
        console.log(info)
        }
    }
}
</script>
<style>

</style>
