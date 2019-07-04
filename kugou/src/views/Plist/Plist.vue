<template>
	<div class="app-init scroll-box plist">
		
		<mt-cell v-for = "(plist,index) in plists" :key = "index" is-link 
				:title = "plist.specialname" 
				:to = "`/plist/info/${plist.specialid}`" 

				:label="String(plist.playcount)">

			<img slot ="icon" :src = "plist.imgurl.replace('{size}','400')">
		</mt-cell>
	</div>
</template>

<script type="es6">
import { Indicator } from 'mint-ui';
	export default{
		name:"plist",
		data(){
			return{
				plists:[]
			}
		},
		created(){
			this.getPlist()
		},
		methods:{
			getPlist(){
				Indicator.open({

				text: '加载中...',
				spinnerType: 'snake'
			});
				this.$http.get('/proxy/plist/index&json=true').then((res) =>{

					console.log(res)
					this.plists = res.data.plist.list.info

				}).then(()=>{
					
					Indicator.close();
				})
			}
		}
	}

</script>
<style lang="scss" type="text/scss">
	.plist{
		margin-top: 90px;
		img{
			width:60px;
			height:60px;
			margin: 10px;
		}

		.mint-cell-text{
			position: absolute;
			left: 90px;
			top: 23px;
			padding-right: 40px;
			height: 16px;
			overflow: hidden;
			line-height: 16px;
		}
		.mint-cell-label{
			position: absolute;
			left: 90px;
			top: 38px;
			&:before{
				content: ' ';
				display: inline-block;
				width: 12px;
				height: 12px;
				background: url("../../assets/img/icon_music.png") no-repeat center;
				background-size: 100%;
			}
		}
	}

</style>