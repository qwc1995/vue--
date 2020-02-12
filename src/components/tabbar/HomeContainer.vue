<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <!-- 在组件中，使用v-for循环的话，一定要使用key 每个资源都对应唯一的url -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <!-- 如果要作为表达式计算，要加:bind 即 :src-->
        <img :src="item.img" alt="">
      </mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu2.png" alt="">
                <!-- <span class="mui-badge"></span> -->
                <div class="mui-media-body">图片分享</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频购买</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
      </ul>
  </div>
</template>



<script>
import { Toast } from 'mint-ui'
// 一进来就要发生请求，业务逻辑写在这里   vue-resource
export default {
  //将数据保存到data中，将来用v-for把轮播图渲染到页面 
  data() {
    return {
      lunbotuList:[] //保存轮播图的数组,然后用v-for渲染
    };
  },
  // 一创建组件就会调用create，就会调用method里的方法getLunbotu，拿到数据
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() { //获取轮播图的方法                       回调函数
      this.$axios.get('http://vue.studyit.io/api/getlunbo').then(result => {
        // console.log(result.body);
        if (result.body.status === 0) {
          //成功了
          this.lunbotuList = result.body.message;
        } else {
          // 失败了
          Toast("加载轮播图失败。。。");

        }
      })
    }
  },
  
}
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

    img { //将图片改为自身100%大小
      width: 100%;
      height: 100%;
    }
  }
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }
  .mui-media-body {
    font-size: 13px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>