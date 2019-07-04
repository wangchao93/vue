<template>
	
	<div class="app-init">

		<button class="btn" type="button" @click = "add()">添加</button>

	</div>

</template>

<script>
	export default{
		name:'User',
		methods:{
			add () {
				this.$router.push("/add");
			}
		}
	};


</script>

<style scoped lang = "scss">
.app-init{
	text-align: center;


	.btn{
		width: 120px;
		height: 30px;
		background: #42b983;
		color: #fff;
		border:none;
		margin-top: 50px;

	}

}
	
</style>