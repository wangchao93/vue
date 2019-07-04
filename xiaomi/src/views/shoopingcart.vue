
<template>
	<div class="app-init shoopingcart-box footer-hack">

		<div class="shoopingcart-header">

			<header-back title="购物车"></header-back>

		</div>
 


		<div class="scroll-box gouwu-box">

		 	<div class="shop-wrap" v-if="shopCarListLength == 0" @click="goHome">
        		<img src="../assets/img/empty-car.png" alt="" >
      		</div>


			<div class="shop-item-box" v-for="target in shopCarList" v-else>
			<div class="shop-img" >
				<img :src="target.img" alt="" />
			</div>	
			<div class="shop-wrap shop-list-wrap">
				<p class="title">{{target.title}}</p>
				<p class="money">售价：{{target.money}} 元</p>
				<div class="number-box">
					<span class="btn iconfont icon-jian" @click="jian(target)"></span>
					<span class="num">{{target.length}}</span>
					<span class="btn iconfont icon-jia" @click="jia(target)"></span>
				</div>
			</div>

			
			<span class="delete iconfont icon-del" @click="deleteShop(target)"></span>
			</div>
		</div>

		


		<div class="shop-footer" v-show="shopCarListLength>0">

			<div class="shop-footer-item">
				<p class="totle">共{{shopCarListLength}}件 金额</p>
				<p class="money"><span class="money-totle">{{getAllMoney}}</span>元</p>
			</div>
			<router-link class="shop-footer-item"  tag="div" :to="{path:'/home',query:{time:new Date().getTime()}}">
			继续购物
			</router-link>
			<div class="shop-footer-item jiesuan">
				去结算
			</div>
			
		</div>
		
	</div>
	
</template>
<script type="text/ecmascript-6">
	import headerBack from '../components/header-back';
	import ShopCarTool from '../util/shop-car-tool'
	 export default{
	 	name:'shoopingcart',
	 	data(){
	 		return{
	 			shopCarList:{}
	 		}
	 	},
	 	components:{
	 		headerBack
	 	},
	 	mounted(){
	 		this.shopCar = new ShopCarTool(this.$store)
	 		this.shopCarList = this.shopCar.getAll();
	 		console.log(this.shopCarList)
	 	},
	 	computed:{
	 		shopCarListLength() {
		        var n = 0;
		        for(var i in this.shopCarList){
		          n += this.shopCarList[i].length
		        }
		        return n
      		},
	 		getAllMoney(){
	 			var n = 0;
	 			for(var i in this.shopCarList){
	 				n+= this.shopCarList[i].money * this.shopCarList[i].length
	 			}
	 			return n
	 		}
	 	},
	 	methods:{
	 		jia(target){
	 			this.shopCar.add(target)
	 		},
	 		jian(target){
	 			this.shopCar.minus(target)
	 		},
	 		deleteShop(target){
	 			this.shopCar.remove(target.id)
	 			this.shopCarList = thsi.shopCar.getAll()
	 		},
	 		goHome(){
	 			this.$router.push({path:'/home'})
	 		}
	 	}

	 }
</script>


<style lang="scss" type="text/scss">
	@import "../assets/scss/util";


.shop-item-box{
	display:flex;
	flex-direction:row;
	justify-content:space-between;
	padding:0.2rem getIphonese(14px);
	.shop-img{
		width:getIphonese(178px);
		height:getIphonese(178px);
		border-radius:4px;
		border: 1px solid #eeeeee;
		img{
			width:100%;
			height:100%;
		}
	}
	.number-box{
		padding:0.5rem;
		span{
			padding-right:0.2rem;
		}
	}
}




.shop-footer{
    width:100%;
    height:$footerHeight;
    position:absolute;
    bottom: 0;
    left:0;
    z-index: 600;
    background-color:#fff;
    @include box-sizing;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
    -webkit-box-shadow:0 3px 14px 2px rgba(0,0,0,.12);
    .shop-footer-item{
      display:flex;
      flex-direction:column;
      align-items:center;
      color:#999;
      flex:1;
      .money-totle{
      	color:#ff6b00;
      	font-weight:800;
      	font-size:0.5rem;
      }
      }
      .jiesuan{
      		background-color:#ff6b00;
			height:100%;
			text-align:center;
			line-height:$footerHeight;
			color:#ffffff;
			flex:1
      }
      
    }



</style>
