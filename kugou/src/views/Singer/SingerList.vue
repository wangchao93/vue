<template>
	<div class="app-init singerList scroll-box">
	 <mt-cell v-for = "(singer,index) in singerLists" :key = "index" :title = "singer.singername">
			<img slot="icon" :src="singer.imgurl.replace('{size}','400')" width="60" height="60">
		</mt-cell>
	</div>
</template>
<script type="es6">

	import { Indicator } from 'mint-ui';

	export default{
		name:"SingerList",
		data(){
			return{
				singerLists:[]
			}
		},
		beforeRouteEnter(to,from,next){
			next(vm=>{
				vm.$store.commit('showHead',true)
				vm.$store.commit('setHeadStyle',{'background': '#fff'})
				vm.getSingerList();
			})

		},
		beforeRouteLeave(to,from,next){
			this.$store.commit('showHead',false)
			this.$store.commit('resetHeadStyle')
			next()
		},
		created(){
			this.getSingerList()
		},
		methods:{
			getSingerList(){
				Indicator.open({
		          text: '加载中...',
		          spinnerType: 'snake'
		        });
				var singerID = this.$route.params.id;

				this.$http.get(`/proxy/singer/list/${singerID}?json=true`).then((res)=>{

					console.log(res)

					this.singerLists = res.data.singers.list.info;
					this.$store.commit('setHeadTitle',res.data.classname)

				}).then(() => {

					Indicator.close()

				})
			}
		}
	}

</script>

<style lang="scss" type="text/scss">
	.singerList{
		margin-top: 90px;
		img{
			width:60px;
			height:60px;
			margin:10px;
		}

	}
	.mint-header{
			color:#333 ;
		}
</style>