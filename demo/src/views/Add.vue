<template>
	
	<div class="app-init">
		<div class="title">
			
			<span>标题：</span>
			<input type="text" v-model = "title">
		</div>
		<div class="content">
			
			<span>内容：</span>
			<input type="text" v-model = "content">
		</div>
		<div class="btn-box">
			<button type="button" @click = "add()">添加</button>
		</div>

	</div>

</template>

<script>
	import store from "@/store";
	export default{
		name:"Add",
		store,
		data (){
			return {
				lists:[],
				title:'',
				content:''

			}
		},
		methods:{
			add () {
				store.commit("addItem",{
					title:this.title,
					content:this.content
				});
				this.title = '';
				this.content = '';
				this.$router.push("/home/list")

			}
		}


	};
	

</script>


<style scoped lang = "scss">
	
.app-init{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	.title,.content{
		width: 92%;
		margin: auto;
		margin-top: 30px;
		input{
			width: 220px;
			height: 25px;
			border:1px solid #ccc;
		}
	}
	.btn-box{
		width: 100%;
		margin: auto;
		text-align: center;
		margin-top: 50px;
		button{
			width: 120px;
			height: 30px;
			background: #42b983;
			color: #fff;
			border:none;
		}

	}
}

	
</style>