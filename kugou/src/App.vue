<template>
  <div id="app-init">
    <Header/>
    <router-view/>

	<Player/>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Player from '@/components/Player'
  export default{
    
    components:{
      Header,Player
  }
}
</script>

<style lang="scss" type="text/scss">

@import "scss/public.scss";



</style>
