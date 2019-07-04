<template>

	<div class="app-init rank-info scroll-box">

		<div class="rank-info-hd">

			<img :src="imgUrl.replace('{size}','400')" alt="" width="100%">

			<div class="rank-info-time">
				<span>上次更新时间：{{getToday()}}</span>
			</div>

		</div>

			<mt-cell v-for="(item, index) in plistInfoList" :title="item.filename" :key="index">
				<span class="rank-index" :class="{'rank-list-good' : index<3,'rank-list-first' : index==0, 'rank-list-second' : index==1, 'rank-list-third' : index==2}">{{index + 1}}</span>
				<img class="download-icon" src="../../assets/img/download_icon.png" width="20" height="20">
			</mt-cell>


		
	</div>


</template>
<script type="es6">
	
export default{
		name:"rankInfo",
		data(){
			return{
				imgUrl:'',
				plistInfoList:[],
				opacity:1

			}
		},
		beforeRouteEnter(to,from,next){
			next(vm=>{
				vm.$store.commit('showHead',true)
				
				vm.getPlistInfo();
				//vm.$store.commit('setHeadStyle',{background:'rgba(0,0,0,0.1)'})
				window.onscroll=()=>{
					vm.opacity = window.pageYOffset / 250

					vm.$store.commit('setHeadStyle',{background:'rgba(0,0,0,${vm.opacity})'})
				}

			})

		},
		beforeRouteLeave(to,from,next){
			this.$store.commit('showHead',false)
			window.onscroll=null;
			next()
		},
		mounted(){
			window.onscroll = () => {
				this.opacity = window.pageYOffset / 200
				console.log(this.opacity)
				this.$store.commit('setHeadStyle', {background: `rgba(0,0,0,${this.opacity})`})
			}
		},
		created(){
			this.getPlistInfo()
		},
		methods:{
			getToday(){
				const time = new Date()
				const year = time.getFullYear()
				let  month = time.getMonth()+1
				let date = time.getDate()
				if(month < 10) month = '0' + month
				if(date < 10) date = '0' + date
				return `${year}-${month}-${date}` 
			},

			getPlistInfo(){

				var infoID = this.$route.params.id;

				this.$http.get(`/proxy/rank/info/?rankid=${infoID}&page=1&json=true`).then((res)=>{

					console.log(res)

					this.plistInfoList = res.data.songs.list
					this.imgUrl = res.data.info.banner7url
					this.$store.commit('setHeadTitle',res.data.info.rankname)
				})
			}
		}
	}
</script>

<style lang="scss" type="text/scss">
	
	.rank-info{
		margin-top: 90px;
		.rank-info-hd{
			width:100%;
			height:12.5rem;
			position:relative;
			overflow:hidden;
			img{
				margin-top:-75px;
			}
			.rank-info-time{
				width:100%;
				height:2.8rem;
				background:-webkit-linear-gradient(bottom,rgba(0,0,0,.6),transparent);
				position:absolute;
				left:0px;
				bottom: 0px;
				line-height:2.8rem;
				color:#fff
			}
		}
		.download-icon{
			width:20px;
			height:20px;
		}
		.mint-cell{
			width:100%;
			height:4rem;
			display:table;
			line-height:4rem;

			.mint-cell-title{
				margin-left: 40px;
			}
		}
		
		.rank-index{
			font-size: 12px;
			position:absolute;
			left:20px;
		
			
		}
		.rank-list-good{
				color:#fff;
				display:inline-block;
				padding: 2px 8px;
				border-radius: 8px;
				margin-top:3px !important;
				left:12px !important;
			}
			.rank-list-first {
				background-color: #E80000;
			}
	
			.rank-list-second {
				background-color: #FF7200;
			}
	
			.rank-list-third {
				background-color: #F8B300;
			}

	}
</style>