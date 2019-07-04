<template>
	<div class="app-init plistInfo">
		<div class="">
			
		</div>
	</div>

</template>

<script type="es6">
	export default{
		name:"plistInfo",
		data(){
			return{
				plistInfoList:[]
			}
		},
		created(){
			this.getPlistInfo()
		},
		methods:{

			getPlistInfo(){

				var infoID = this.$route.params.id;

				this.$http.get(`/proxy/plist/info/${infoID}?json=true`).then((res)=>{

					console.log(res)
				})
			}
		}
	}

</script>


<style lang="scss" type="text/scss">
	


</style>