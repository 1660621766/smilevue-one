<template>
  <div class="floor1">
    <div class="floor1-title">
      <span>1F</span><span>休闲食品</span>
    </div>

    <div class="floor1-con">
      <div class="floor1-big">
        <img :src="floor1_0.image" width="100%"/>
      </div>
      <div class="floor1-small">
        <div>
          <img :src="floor1_1.image" width="100%"/>
        </div>
        <div>
          <img :src="floor1_2.image" width="100%"/>
        </div>
      </div>
       <div class="floor1-rule" v-for="item in floor1_r" :key="item.goodsId">
        <img :src="item.image" alt="" width="100%">
      </div>
    </div>

   
  </div>
</template>

<script>
export default {
  data () {
    return {
      mes:"floor",
      floor1_0:{},
      floor1_1:{},
      floor1_2:{},
      floor1_r:[]
    }
  },
  props:{
    floor1: Array
  },
  watch:{
    floor1 () {
      this.floor1_0=this.floor1[0];
      this.floor1_1=this.floor1[1];
      this.floor1_2=this.floor1[2];
      this.floor1_r=this.floor1.slice(3);
    }
  }
}
</script>

<style scope>
.floor1-title{
  text-align: center;
  font-size: 14px
}
.floor1-title span:nth-child(odd){
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  border-radius: 1rem;
  margin: .3rem;
  background: coral;
  color:#fff;
}
.floor1-title span:nth-child(even){
  display: inline-block;
  color:coral;
}
.floor1-con{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom:1px solid #ddd;
  background: #fff;
}
.floor1-con>div{
  width: 50%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.floor1-big{
  border-right:1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.floor1-con img{
  display: block
}
.floor1-small{
  border-bottom: 1px solid #ddd;
}
.floor1-small div:first-child{
  /* box-sizing: border-box;
  -webkit-box-sizing: border-box; */
  border-bottom:1px solid #ddd;
}
.floor1-rule:nth-child(odd){
   box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-right:1px solid #ddd;
}
</style>
