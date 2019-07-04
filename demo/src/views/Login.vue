<template>
	
	<div class="app-init">
		<form v-if = "!isReg">
			<div class="user-name">
				<span>用户名：</span>
				<input type="text" v-model = "userName">
				
			</div>
			<div class="password">
				<span>密码：</span>
				<input type="password" v-model = "password">
			</div>

			<button type="button" @click = "login()">登录</button>
			<button type="button" @click = "reg()">注册</button>
		</form>


		<form v-else>
			<div class="user-name">
				<span>用户名：</span>
				<input type="text" v-model = "userName">
				
			</div>
			<div class="password">
				<span>密码：</span>
				<input type="password" v-model = "password">
			</div>

			<div class="repeat">
				<span>确认密码：</span>
				<input type="password" v-model = "repeat">
			</div>

			<button type="button" @click = "addUser()">确定</button>
			<button type="button" @click = "cancel()">取消</button>
		</form>

	</div>

</template>

<script>

	export default{

		data (){
			return {
				isReg: false,
				userName: "",
				password: "",
				repeat: ""

			}
		},
		methods:{
			login () {
				if(localStorage.getItem("userName")===this.userName && localStorage.getItem("password")===this.password){
					this.$router.push("home/list")
				}else{
					alert("用户名密码错误")
				}
				
			},
			reg () {
				this.isReg = true;
			},
			cancel () {
				this.isReg = false;
			
			},
			addUser () {
				if(this.password === this.repeat && this.password!="" && this.userName != ""){

					localStorage.setItem("userName",this.userName);
					localStorage.setItem("password",this.password);
					this.isReg = false;
				}else{
					alert("两次密码输入不一致");
				}

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
	.user-name,.password,.repeat{
		width: 92%;
		margin: auto;
		margin-top: 30px;
		span{
			display: inline-block;
			width: 90px;
		}
	}


	input{
		width: 240px;
		height: 25px;
		border:1px solid #ccc;
	}

	button{
		width: 40%;
		height: 30px;
		margin-top: 30px;
		margin-left: 20px;
		background: #42b983;
		border:none;
		color: #fff;
		border-radius: 4px;
	}




}

	


	
</style>