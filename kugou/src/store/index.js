import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

 const store = new Vuex.Store({
	state:{
		head:{
			toggle:false,
			title:'',
			style:{'background':'rgba(43,162,251,1)'}
		}
	},
	getters:{
		head:state => state.head
	},

	mutations:{
		showHead(state,flag){

			state.head.toggle = flag
		},
		setHeadTitle(state,title){

			state.head.title = title
		},
		setHeadStyle(state,style){
			
			state.head.style = style
		},
		resetHeadStyle: state => {
			state.head.style = {'background': 'rgba(43,162,251,1)'}
		},
	}
 })


export default store