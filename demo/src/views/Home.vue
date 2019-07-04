<template>
	<div class="app-init">
		<router-view/>
		<ul class="nav">
			
			<li><router-link :to="{name:'list'}">新闻列表</router-link></li>

			<li><router-link :to="{name:'user'}">个人中心</router-link></li>
		</ul>

	</div>
	


</template>

<script>
	
export default{
	name:'Home'
};

</script>

<style scoped lang="scss">
	.app-init{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		.nav{
			widows: 100%;
			height: 60px;
			line-height: 60px;
			position: fixed;
			bottom: 0px;
			left: 0;
			right: 0;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			border-top: 1px solid #42b983;

			li{
				width:50%;
				text-align: center;
				color: #333;
				list-style: none;
				a{
					display: block;
					color: #42b983;
					text-decoration: none;

				}
				.active{
					background: #42b983;
					color: #fff;
							
				}
			}
			

		}

	}


	
</style>