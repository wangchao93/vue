<template>
  <div class="header-back">
    
    <span class="iconfont icon-backer back" @click="$router.go(-1)"></span>
    <p>{{title}}</p>
    <span class="iconfont icon-sousuo-copy search"></span>
    
  </div>
   
</template>

<script type="text-ecmascript-6">
export default {
  name:'header-back',
  props:{
    title:{
      type:String,
      default:'标题'
    }
  }
 
}
</script>
<style lang="scss" type="text/scss">

@import '../assets/scss/util';

.header-back{
  line-height:getIphonese(42px);
  background-color:#f2f2f2;
  padding:getIphonese(30px) 0;
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  @include f14px;
  color:#666666;
  .iconfont{
    font-size:0.58rem;
    color:#919191;
  }
  .back,.search{
    padding:0 getIphonese(44px);
  }
  

}






 </style>
