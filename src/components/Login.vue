<template>
    <div class="login-container d-flex justify-content-center align-items-center">
        <form action="post" class="login-form">
            <div class="form-title">
                <span class="iconfont icon-it"></span>
            </div>
            <div class="input-group">
                <div class="input-group-prepend" id="username">
                    <span class="input-group-text"><span class="iconfont icon-account"></span> </span>
                </div>
                <input type="text" class="form-control" placeholder="用户名" aria-label="username" aria-describedby="username">
            </div>
            <div class="input-group">
                <div class="input-group-prepend" id="passwords">
                    <span class="input-group-text"><span class="iconfont icon-passwords"></span></span>
                </div>
                <input type="password" class="form-control" placeholder="密码" aria-label="passords" aria-describedby="passwords">
            </div>
            <button type="button" class="btn  submit-btn" v-on:click="routerToHome()">登录</button>
        </form>
    </div>
</template>
<script>
export default {
  name: "login",
  methods:{
      routerToHome:function(){
          console.log("跳转至home");
          this.$router.push('/home/default');
      }
  }
};
</script>
<style scoped>
.login-container {
  width: 100%;
  height: 100%;
   
}
.login-form{
    margin-top: -80px;
    border: 1px  rgba(255, 255, 255,0.3) solid;
    border-radius: 8px;
    box-shadow: 2px 2px 5px rgba(255, 255, 255,0.3);
    background-color: rgba(255, 255, 255,0.3);
    color: white;
    padding: 18px 50px 36px;
}
.form-title{
    margin-bottom: 16px;
}
.form-title .icon-it{
    font-size: 60px;
}
/* .input-group-text, */
/* .form-control{
    background-color: transparent;
    border:none;
    
}
.form-control{
    border-bottom: 1px solid white;
} */

.submit-btn{
    margin-top: 26px;
    width:50%;
    color: white;
    background-color: transparent;
    border: 1px solid white;
}
.submit-btn:hover{
    background-color: rgba(255, 255, 255,0.5);
    color: rgba(0,0,0,0.8)
}
</style>


