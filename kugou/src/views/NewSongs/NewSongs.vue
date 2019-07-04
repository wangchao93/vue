<template>
	<div class="app-init newSogns scroll-box">
		<div class="swipe">
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for = "(banner,index) in banners" :key = "index">
		  <a :href = "banner.extra.tourl">
		  	<img :src="banner.imgurl" :title="banner.title">
		  </a>
		  </mt-swipe-item>
		</mt-swipe>
	</div>
		<mt-cell v-for="(song, index) in songList" :title="song.filename" :key="index">
			<img class="download-icon" src="../../assets/img/download_icon.png" width="20" height="20">
		</mt-cell>
	</div>
</template>

<script type="text/javascript">

import { Indicator } from 'mint-ui';

export default{
	name:"NewSongs",
	data(){
		return{
			banners:[],
			songList:[]
		}
	},
	created(){
		this.getSongs()
	},
	methods:{
		getSongs(){
			Indicator.open({

				text: '加载中...',
				spinnerType: 'snake'
			});
			this.$http.get('/proxy/?json=true').then((res) => {

				console.log(res)

				this.banners=res.data.banner;
				this.songList=res.data.data

			}).then(() => {

				Indicator.close();

			})
		}
	}
}
	

</script>

<style lang="scss" type="text/scss">

.newSogns{
	margin-top: 90px;
	.swipe{

		height:140px;

	}
	.mint-cell-wrapper{
		height:80px;
	}
	.download-icon{
		width:20px;
		height:20px;
	}
}


</style>

