<template>
  <div id="views">
    <el-container>
      <!-- 侧边栏，菜单 -->
      <el-aside width="205px">
        <div class="side-logo">
          <a href="/views" style="text-decoration: none;">
            <img src="./../../assets/logo/Books.png" style="width:35px;float:left;padding:10px 0">
            <h4 style="color:#fff;padding:17px 0;font-size:17px">图书租赁管理</h4>
          </a>
        </div>
        <el-menu>
          <el-menu-item index="1">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-view"></i>图书预览</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-chat-dot-round"></i>读者留言</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-menu"></i>系统管理</template>
              <el-menu-item index="4-1">选项1</el-menu-item>
              <el-menu-item index="4-2">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-paperclip"></i>图书收藏</template>
              <el-menu-item index="5-1">选项1</el-menu-item>
              <el-menu-item index="5-2">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title"><i class="el-icon-date"></i>历史记录</template>
              <el-menu-item index="6-1">选项1</el-menu-item>
              <el-menu-item index="6-2">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title"><i class="el-icon-setting"></i>系统设置</template>
              <el-menu-item index="7-1">选项1</el-menu-item>
              <el-menu-item index="7-2">选项2</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <!-- 头部header -->
        <el-header style="text-align: right; font-size: 15px">
          <el-dropdown>
            <i class="el-icon-s-custom" style="margin-right: 5px;"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>编辑</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span style="margin-right:25px">王小虎</span>
        </el-header>
      <!-- 内容 -->
      <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'viewsManage',
  data () {
    return {
    }
  }
}
</script>
<style>
/* lang='scss' rel="stylesheet/scss" scoped */
*{
  margin: 0;
  padding: 0;
}
#views{
  width: 100vw;
  height: 100vh;
  background-color: #eff1f4;
}
#views .el-menu, .el-aside {
    background-color: #34bfa3;
    color: #fff;
  }
  aside.el-aside{
    height: 100%;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
  }
  ul.el-menu{
    font-size: 15px;
    font-weight: bold;
  }
  .el-header {
    background-color: #fff;
    color: #333;
    size: 10px;
    text-align: center;
    line-height: 60px;
    border-bottom:2px solid #34bfa3;
  }
  div.side-logo {
      padding: 0 20px;
      height: 56px;
      text-decoration: none;
    }
  .el-main {
    background-color: #eff1f4;
    color: #333;
    text-align: center;
  }
</style>
