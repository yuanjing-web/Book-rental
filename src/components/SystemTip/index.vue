<!-- 标题图标 -->
<template>
  <div class="title">
    <img src="@/assets/img/navbar-bg.png" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import '~styles/variables.scss';

  .title {
    display: inline-block;
    font-size: 26px;
    line-height: 50px;
    margin: 0 0 0 10px;
    font-weight: 600;
    color: $navbarText;
    background-image:url('../../assets/logo/read.png' );
  }
</style>
