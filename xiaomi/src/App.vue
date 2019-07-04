<template>
  <div id="app">

    <div class="app-init">
        <transition :name="transitionName">
          <router-view></router-view>
        </transition>
      

    </div>



    <footer class="footer" v-show="$route.meta.navShow">

      <router-link class="footer-item"  tag="div" :to="{path:'/home',query:{time:new Date().getTime()}}">
        <p class="icon">
          <span class="iconfont icon-shouye"></span>
        </p>
        <p class="name">首页</p>
      </router-link>

      <router-link class="footer-item" tag="div" :to="{path:'/classification',query:{time:new Date().getTime()}}">
        <p class="icon">
          <span class="iconfont icon-fenlei"></span>
        </p>
        <p class="name">分类</p>
      </router-link>

      <router-link class="footer-item shop-car" tag="div" :to="{path:'/shoopingcart',query:{time:new Date().getTime()}}">
        <p class="icon">
          <span class="iconfont icon-gouwuche"></span>
        </p>
        <p class="name">购物车</p>
        <span class="num" v-show="getShopCarLength > 0" :class="{ 'full': parseInt(getShopCarLength) >= 99 }" >{{ getShopCarLength >= 99 ? '99+' : getShopCarLength }}</span>
      </router-link>

      <router-link class="footer-item" tag="div" :to="{path:'/me',query:{time:new Date().getTime()}}">
        <p class="icon">
          <span class="iconfont icon-smile"></span>
        </p>
        <p class="name">我的</p>
      </router-link>

    </footer>

  </div>


</template>

<script>
import { mapGetters } from 'vuex'
export default {

  name: 'App',
  data(){
    return{
      transitionName:"slide-go"
    }
  },
  computed:{
    ...mapGetters([
        'nowStatus',
        'getShopCarLength'
      ])
  },
  watch:{
    '$route' (to,from){
      if(from.query.time){
        if(to.query.time > from.query.time) {
          this.transitionName = "slide-go"
        }else{
          this.transitionName = "slide-back"
        }
      }else{
        this.transitionName = "slide-go"
      }
    }
  }


}

</script>

<style lang="scss" type="text/scss">

@import "./assets/scss/public";
@import "././assets/iconfont/iconfont.css";


</style>
