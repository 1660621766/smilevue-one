<template>
  <!-- 首页主体 -->
  <div class="main-index">
    <!-- 头部模块 -->
    <div class="head-search">
      <van-row>
        <van-col span='3' class="head-center">
          <img :src="headImgUrl" width="60%" class="head-img">
        </van-col>
        <van-col span='16'>
          <input type="text" placeholder="查找" class="head-input"/>
        </van-col>
        <van-col span='5' class="head-center">
          <van-button class="head-btn">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <!-- vant的滑动模块 -->
    <div class="vant-swiper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in swiperImg" :key="index">
          <img v-lazy="item.image" width="100%"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 商品推荐模块 -->
    <div class="category">
      <div class="category-box" v-for="item in category" :key="item.mallCategoryId">
        <img :src="item.image">
        <span>{{item.mallCategoryName}}</span>
      </div>
    </div>
    <!-- 内部测试logo -->
    <div class="test-logo">
        <img :src="testLogo" width="100%">
    </div>
    <!-- 商品swiper模块 -->
    <div class="recommend-area">
      <div class="recommend-title">商品推荐</div>
      <div class="recommend-body">
        <swiper :options="SwiperOption">
          <swiper-slide v-for="item in recommendGoods" :key="item.goodsId">
            <div class="recommend-item">
              <img :src="item.image" width="100%">
              <div>{{item.goodsName}}</div>
              <div>￥{{item.price}}(￥{{item.mallPrice}})</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- 楼层模块 -->
    <floor-components></floor-components>
  </div>
    
</template>


<script>
import axios from 'axios'
import FloorComponents from "./FloorComponents"
export default {
  data () {
    return {
      SwiperOption:{
        slidesPerView: 3, // 默认显示5个
      },
      headImgUrl: require('@/assets/images/map1.png'),
      swiperImg:[],
      category:[],
      testLogo:'',
      recommendGoods:[]
    }
  },
  components: {
    FloorComponents
  },
  created () {
    
    axios.post('https://www.easy-mock.com/mock/5ca327f1631fd621979e5271/example/index')
    .then((res) => {
      console.log(res)
      if(res.status==200){
        this.swiperImg = res.data.data.slides;
        this.category = res.data.data.category;
        this.testLogo=res.data.data.advertesPicture.PICTURE_ADDRESS;
        this.recommendGoods = res.data.data.recommend;
      }
      
    })
  }
}
</script>

<style scope>
.main-index{
  width: 100%;
  background: #f0f0f0
}
.head-search{
  width: 100%;
  height: 2.2rem;
  line-height: 2.2rem;
  background: #e5017d;
  overflow: hidden;
}
.head-center{
  text-align: center
}
.head-img{
  vertical-align: middle;
}
.head-input{
  width: 95%;
  height: 1.3rem;
  padding-left: 5px;
  background: #e5017d;
  border: 0px;
  border-bottom: 1px solid #fff;
  font-size: .8rem;
  color: #fff
}
.head-btn{
    height: 1.4rem;
    line-height: 1.4rem;
    border-radius: 5px;
}
.vant-swiper{
  clear: both;
  height: 0;
  /* max-height: 9rem; */
  padding-bottom: 44%;
  overflow: hidden;
}

.category{
  height: 0;
  padding-bottom: 21%;
  margin: .3rem .3rem .3rem .3rem;
  font-size: 12px;
  background: #fff;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.category-box{
  text-align: center;
  padding: .3rem;
}
.category-box img{
  width:80%
}
.category-box span{
  display: inherit;
}

.recommend-area{
  background: #fff
}
.recommend-title{
  height: 1.8rem;
  line-height: 1.8rem;
  font-size: 14px;
  color: #E27876;
  padding-left: .4rem;
  border-bottom:1px solid #f0f0f0
}
.recommend-body{
  height: 0;
  padding-bottom: 47%;
}
.recommend-item{
  width:99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}
</style>
