import Vue from 'vue'
import Vuex from 'vuex'
import ShopCarTool from '../util/shop-car-tool'
Vue.use(Vuex);
let shopCar = new ShopCarTool()
const AppLoading={
	state:{
		nowStatus:'loading'
	},
	mutations:{
		nowStatus(state,data){
			state.nowStatus = data
		}
	},
	getters:{
		nowStatus:state =>{
			return state.nowStatus
		}
	}
}


const ShopCar = {
	state:{
		length:shopCar.length()
	},
	mutations:{
		setShopCarLength(state,length){
			state.length = length
		}
	},
	getters:{
		getShopCarLength:state => {
			return state.length
		}
	}
}


export default new Vuex.Store({
	modules:{
		AppLoading,
		ShopCar
	}
})
