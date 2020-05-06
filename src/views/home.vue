<template>
  <!-- <div class="container"/> -->
  <elFrame :src="api"/>
</template>

<script>
import elFrame from '@/components/Iframe/index'

export default {
  components: {
    elFrame
  },

  data () {
    return {
      api: 'http://kuosat.rjgcyj.cn:8081/book-tental/home'
      // 昆明理工大学软件工程yj
    }
  }
}
</script>

<style scoped>
.container {
  height: calc(100vh - 84px);
  width: 100%;
  background-image:url('../assets/img/back.png' );
  background-size: cover;
}
.app-main {
  padding-bottom: 0;
}
</style>
