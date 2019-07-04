<template>
	<div class="header-nav" v-show = "$route.meta.navIsShow">
		<mt-navbar v-model="selected">
		  <mt-tab-item id="head-nav1"><span @click="$router.openPage('/NewSongs')">新歌</span></mt-tab-item>
		  <mt-tab-item id="head-nav2"><span @click="$router.openPage('/Rank')">排行</span></mt-tab-item>
		  <mt-tab-item id="head-nav3"><span @click="$router.openPage('/Plist')">歌单</span></mt-tab-item>
		  <mt-tab-item id="head-nav4"><span @click="$router.openPage('/Singer')">歌手</span></mt-tab-item>
		</mt-navbar>

	</div>
</template>

<script type="es6">
	export default{
		name:'NavBar',
		data(){
			return{
				selected:'head-nav1'
			}
		},

	}

</script>

<style lang="scss" type="text/scss">
	
.header-nav{
	position:fixed;
	top:40px;
	left:0px;
	right:0px;
}

</style>