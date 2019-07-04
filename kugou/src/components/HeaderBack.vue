<template>

	<div class="header-back">

		<mt-header :title="title" :style="cStyle">
		  <router-link to="" slot="left">
		    <mt-button icon="back" @click="routerBack">
		    	
		    </mt-button>
		  </router-link>
		  
		</mt-header>
	</div>

</template>

<script type="es6">
	export default{
		props:['title','to','cStyle'],
		methods:{
			routerBack(){
				//console.log(this.$router)
				this.$router.go(-1);
			}
		}
	}

</script>

<style lang="scss" type="text/scss">
	
.header-back{
	position:fixed;
	top:40px;
	left:0px;
	right:0px;
	.mint-header{
		background: -webkit-linear-gradient(top,rgba(0,0,0,.6),transparent);
		z-index: 999;
		font-size: 18px;

	}
}
</style>