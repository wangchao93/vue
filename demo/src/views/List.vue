<template>
	
	<div class="app-init">
		<ul>
			<li v-for = "(item, index) in pagelists" :key = "index">
				<p>{{item.title}}</p>
				<p>{{item.content}}</p>
			</li>
			

		</ul>
		

	</div>

</template>

<script>
import store from "@/store";
export default{
	name:'List',
	store,
	computed:{
		pagelists () {
			return store.state.lists

		}
	}


};
	


</script>

<style scoped>
	


	
</style>