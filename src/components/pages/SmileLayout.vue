<template>
  <div class="head">
    <div class="heead-search">
      <van-row>
        <van-col span='4'>
          <img :src="headImgUrl" width="65%">
        </van-col>
        <van-col span='16'>
          <input type="text" placeholder="查找" class="head-input"/>
        </van-col>
        <van-col span='4'>
          <van-button class="head-btn">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <div class="swiper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in swiperImg" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
    
</template>


<script>
import axios from 'axios'
export default {
  data () {
    return {
      headImgUrl: require('@/assets/images/map1.png'),
      swiperImg:[],
    }
  },
  created () {
    axios.post('https://www.easy-mock.com/mock/5ca327f1631fd621979e5271/example/index')
    .then((res) => {
      console.log(res)
      this.swiperImg=res.data.data.slides;
    })
  }
}
</script>

<style scope>
.head{
  width: 100%;
  height: 2.2rem;
  line-height: 2.2rem;
  background: #e5017d
}
.head-input{
  width: 95%;
  height: 1.3rem;
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
</style>
