<template>
	<div class="app-init rank scroll-box">
		<mt-cell v-for = "(rank,index) in rankLists" :key = "index" :title = "rank.rankname" :to="`/rank/info/${rank.rankid}`">
			<img slot="icon" :src="rank.imgurl.replace('{size}','400')" width="60" height="60">
		</mt-cell>
		
	</div>
</template>

<script type="text/javascript">
import { Indicator } from 'mint-ui';
	export default{
		name:'Rank',
		data(){
			return{
				rankLists:[]
			}
		},
		created(){

			this.getRankList();
		},
		methods:{
			getRankList(){
				Indicator.open({

				text: '加载中...',
				spinnerType: 'snake'
			});
				this.$http.get('/proxy/rank/list&json=true').then((res) =>{

					console.log(res)
					this.rankLists=res.data.rank.list
				}).then(() => {

				Indicator.close();

			})
			}
		}
	}

</script>
<style lang="scss" type="text/scss">
	
.rank{
	margin-top: 90px;
	img{
		width:60px;
		height:60px;
		margin: 10px;
	}

}

</style>