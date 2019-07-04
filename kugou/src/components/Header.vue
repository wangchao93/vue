<template>
 <div>
   <mt-header fixed title="">
      <router-link to="" slot="left">
        <img src="http://m.kugou.com/v3/static/images/index/logo.png" alt="酷狗音乐">
      </router-link>

      <mt-button  slot="right" @click = "$router.openPage('/Search')">
         <img class="search-icon"  src="http://m.kugou.com/v3/static/images/index/search.png" alt="搜索" >
      </mt-button>
    </mt-header>
   

    <HeaderBack v-if="head.toggle" :title="head.title" :cStyle="head.style"/>
    <NavBar v-else/>
   </div>
</template>

<script type="es6">

import NavBar from '@/components/NavBar'

import HeaderBack from '@/components/HeaderBack'
import { mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  components:{

    NavBar,
    HeaderBack
  },
  computed:{
    ...mapGetters(['head'])
  },
 
}
</script>

<style lang="scss" type="text/scss">
  
.mint-header{
  .search-icon{
    width:20px ;
    height:20px;
  }
}


</style>
