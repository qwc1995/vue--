<template>
  <div>
    <!-- 轮播图区域 -->
    <h1>46498</h1>
  </div>
</template>



<script>
// 一进来就要发生请求，业务逻辑写在这里   vue-resource
// export default {
  
// }
</script>



<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

// &表示交集选择器，不写就是后代选择器
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color:blue;
    }
    &:nth-child(3) {
      background-color: cyan;
    }
  }
}
</style>