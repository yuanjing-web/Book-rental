<template>
    <div class="login">
      <el-form ref="loginForm" class="login-form" :model="loginForm" :rules="loginRules">
        <h3 class="title">"书为伴"自助租赁系统</h3>
        <el-form-item prop="username">
          <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="用户名">
            <svg-icon slot="prefix" icon-class="user" class="iconfont input-icon"></svg-icon>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码">
            <svg-icon slot="prefix" icon-class="password" class="iconfont input-icon"></svg-icon>
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" auto-complete="off" placeholder="验证码">
            <svg-icon slot="prefix" icon-class="code" class="iconfont input-icon"></svg-icon>
          </el-input>
        </el-form-item>
        <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">记住我</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button :loading="loading" size="medium" type="primary" style="width:100%;" >
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
      </el-form>
    </div>
</template>

<script>
// import Config from '@/config'

export default {
  name: 'login',
  components: {},
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
        code: '',
        rememberMe: false
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '用户名不能为空' }],
        password: [{ required: true, trigger: 'blur', message: '密码不能为空' }],
        code: [{ required: true, trigger: 'change', message: '验证码不能为空' }]
      },
      loading: false
    }
  }
}
</script>

<style>
/* rel="stylesheet/scss" */
.login {
  width: 100vw;
  height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    /* width: 100%; */
    background-image:url('../assets/img/back.png' );
    background-size: cover;
  }
.title {
    margin: 0px auto 30px auto;
    text-align: center;
    color: #707070;
  }
.login-form{
  border-radius: 6px;
  background: #ffffff;
  opacity: .85;
  width: 400px;
  padding: 25px 25px 5px 25px;
  margin: 126px auto;
  .el-input {
    height: 38px;
    input{
      height: 38px;
    }
  }
  .input-icon {
    height: 39px;width: 14px;margin-left: 2px;
  }
}
</style>
