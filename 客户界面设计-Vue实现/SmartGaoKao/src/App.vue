<template>
  <div id="app">
    <el-container>
      <el-header>
        <div id="nav">
          <router-link to="/">首页</router-link> 
          <router-link to="/university">高校浏览</router-link> 
          <router-link to="/community">社区</router-link> 
         
          <a style="font-size:18px;">高考志愿推荐系统</a>
         
          <a></a>
          <div class="user_part">
            剩余查询次数<span style="color:red;backgroud-color:white;"> 3 </span>次
          </div>
          <div class="user_part">
            <el-button type="text" @click="loginVisible = true" class="login">登录</el-button> |
            <el-button type="text" @click="registerVisible = true" class="register">注册</el-button>
            <el-dialog
              title="账号密码登录"
              :visible.sync="loginVisible"
              width="20%"
              center>
              <span>
                <el-input v-model="input_phone" placeholder="请输入手机号"></el-input>
                <el-input v-model="input_loginpwd" placeholder="请输入密码"></el-input>
              </span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="loginVisible = false">取 消</el-button>
                <el-button type="primary" @click="loginVisible = false">确定登录</el-button>
                
              </span>
            </el-dialog>
            <el-dialog
              title="用户注册"
              :visible.sync="registerVisible"
              width="20%"
              center>
              <span>
                <el-input v-model="input_registerphone" placeholder="请输入手机号"></el-input>
                <el-input v-model="input_registerpwd" placeholder="请输入6-30位数字或字母密码"></el-input>
                <el-input v-model="input_name" placeholder="昵称"></el-input>
              </span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="registerVisible = false">取 消</el-button>
                <el-button type="primary" @click="registerVisible = false">确认注册</el-button>
              </span>
            </el-dialog>
          </div>
 
        </div>
      </el-header>
      <el-main>
         <router-view />
      </el-main>
      <el-footer>
        <h4>湘潭大学软件设计实践</h4>
      </el-footer>
    </el-container>

    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginVisible: false,
        registerVisible:false,
        input_loginpwd:"",
        input_phone:""
      };
    }
  };
</script>

<style >
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
  
}

#nav {
  height: 100%;
}

#nav a {
  font-weight: bold;
  color: white;
  padding: 20px;
  padding-right: 60px;
  padding-left: 60px;
  text-decoration-line: none;
  line-height: 60px;
}

#nav a.router-link-exact-active {
  color: white;
  background-color: blue;
}
.el-header{
  background-color:#3b99fc;
  box-shadow: 10px gray;
}
.user_part{
  display: inline;
  padding-left: 40px;
  color: white;
  font-weight: bold;
  
}
.login{
  color: white;
  font-weight: bold;
}
.register{
  color: white;
  font-weight: bold;  
}
.dialog-footer{
  justify-content: space-around;
  width: 100%;
}
.el-input__inner{
  margin-bottom: 10px;
}
.el-main{
  padding: 0;
  
}


</style>
