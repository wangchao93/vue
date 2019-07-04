<template>
	

<div class="app-init details-page">
	
	 <div class="app-init scroll-box footer-hack">
		<div class="banner">
			<swiper :list="info.banner"></swiper>
			<span class="iconfont icon-backer back" @click="$router.back()"></span>
		</div>
		<div class="content">
			<div class="hot">
				<img :src="info.hot" alt="">
			</div>
			<div class="title-box">
				  <h3>{{ info.title }}</h3>
		          <p style="color:#ff4a00">{{ info.bigContent }}</p>
		          <p style="color: #757575"> {{ info.smallContent }} </p>

		          <div class="press">
		            <span class="money" v-if="info.money">￥{{ info.money }}</span>
		            <span class="no-money" v-if="info.noMoney">￥{{ info.noMoney }}</span>
		            <span class="tips" v-for="target in info.tips">{{ target }}</span>
		          </div>
		         

			</div>
			<div class="touch-item-box">
	          <div class="touch-item">
	            <span class="key">已选</span>
	            {{ info.chouse }}
	          </div>
	          <div class="touch-item">
	            <span class="key">送至</span>
	            <span v-for="target in info.address">{{ target }}</span>
	          </div>
        	</div>

	        <div class="touch-item-box">
	          <div class="touch-item">
	            <span class="key">配件</span>
	          </div>
	        </div>

		</div>

	</div> 


	<div class="details-footer">
		
		<router-link class="details-footer-item"  tag="div" :to="{path:'/home',query:{time:new Date().getTime()}}" >
	        <p class="icon">
	          <span class="iconfont icon-shouye"></span>
	        </p>
	        <p class="name">首页</p>
	    </router-link>

		<router-link class="details-footer-item cursom-shopcar" tag="div" :to="{path:'/shoopingcart',query:{time:new Date().getTime()}}">
	        <p class="icon">
	          <span class="iconfont icon-gouwuche"></span>
	        </p>
	        <p class="name">购物车</p>
	        <span class="num" v-show="getShopCarLength > 0" :class="{ 'full': parseInt(getShopCarLength) >= 99 }">{{ parseInt(getShopCarLength) >= 99 ? '99+' : getShopCarLength }}</span>
	     </router-link>
	     <div class="addShopCart" @click="addShopCart">
	     	加入购物车
	     	<span class="bool bool-animate" ref="bool"></span>
	     </div>

	</div>
</div>
</template>

<script type="text/ecmascript-6">

	import VueResource from 'Vue-resource';
	import swiper from '../components/swiper';
	import Parabola from '../util/parabola';
	import { mapGetters } from 'vuex';
	import ShopCarTool from '../util/shop-car-tool';

	export default{
		name:'details',
		data(){
			return{
				info:{},
			}
		},
	components:{
		swiper
	},
	computed:{
		...mapGetters([
			'getShopCarLength'
			])
	},
	mounted(){
		this.getData();
		this.shopCar = new ShopCarTool(this.$store)
		console.log(this.shopCar)
	},
	methods:{
		getData:function(){
			
			this.$http.get('/api/details').then(response => {
				console.log(response.body.data);
				this.info=response.body.data[0]
			},response=>{
				console.log("error")
			})
		},
		addShopCart:function(){
			var root = this
	        var width = document.documentElement.clientWidth || document.body.clientWidth
	        root.$refs.bool.style.display = 'block'

	        var parabola = new Parabola({
	          startPos: {
	            left: root.$refs.bool.offsetLeft,
	            top: root.$refs.bool.offsetTop
	          },
	          endPos: {
	            left: root.$refs.bool.offsetLeft - (4.1 * width / 10),
	            top: root.$refs.bool.offsetTop
	          },
	          duration: 300,
	          onStep (pos) {
	            var position = 'translate3d('+(pos.left - root.$refs.bool.offsetLeft)+'px,'+(pos.top - root.$refs.bool.offsetTop)+'px, 0px)'

	            root.$refs.bool.style.webKitTransform = position
	            root.$refs.bool.style.transform = position
	          },
	          onFinish (pos) {
	            root.$refs.bool.style.display = 'none'
	            root.shopCar.add( root.info )
	          }
	        });

	        parabola.start();

		}
		}
}


</script>

<style lang="scss" type="text/scss">

@import "../assets/scss/util";
   
   
.banner{
	position:relative;
	.back{
		position:absolute;
		z-index:500;
		width:0.826rem;
		height:0.826rem;
		border-radius:50%;
		color:#fff;
		line-height:0.826rem;
		text-align:center;
		display:block;
		background-color:rgba(34,35,43,0.6);
		top:0.32rem;
		left:0.32rem;
	}
}

.title-box{
	 background-color: #fff;
      margin-bottom: 0.2rem;
      padding: 0.2rem 0.4rem;
      @include f12px;

      h3{
      	font-size: .5rem;
        line-height: 1.5em;
        font-weight: normal;
        color: #333;
      }
        
      p{
      	padding-top: 0.1rem;
      }
        
      .press{
      	padding-top: 0.2rem;
      }
        
        .money{
        	color: #ff6700;
          font-size: .56rem;
          font-weight: 700;
        }
          
        .no-money{
        	margin-left: .16rem;
          color: rgba(0,0,0,.54);
          text-decoration: line-through;
        }
          
        .tips{
        	 display: inline-block;
          line-height: 1em;
          padding: .2em;
          color: #fff;
          font-size: 0.3rem;
          background: #ff6700;
          margin-left: 0.2rem;
          border-radius: 2px;
          position: relative;
          top: -0.05rem;
        }

}

         

.touch-item-box{
	margin-bottom: 0.2rem;	
	.touch-item{
		  	line-height: getIphonese(80px);
		    background-color: #fff;
		    color: rgba(0,0,0,.87);
		    position: relative;
		    border-bottom: 1px solid #D9D9D9;

		    padding: 0 0.4rem;
		    @include f12px;
		.key{
	      	color: rgba(0,0,0,.54);
	      	padding-right: 0.2rem;	
	    }
	     &:last-child{
	  	 	border-bottom: none;
	  }
		&:active{
	  	  	background-color: #eee;
	  }
		&:after{
		  	font-family: 'iconfont';
		    content: "\e628";
		    position: absolute;
		    right: getIphonese(26px);
		    color: #3E3E3E;
	  }

	  }
}
  
 
   .addShopCart{
	position: relative;
   }
      
      .bool{
 		position: absolute;
        display: block;
        width: 0.4rem;
        height: 0.4rem;
        background-color: #F2F2F2;
        left: 50%;
        top: 50%;
        margin-left: -0.2rem;
        margin-top: -0.2rem;
        border-radius: 50%;
        display: none;
      }
       


	.details-footer{
		width:100%;
	    height:$footerHeight;
	    position:absolute;
	    bottom: 0;
	    left:0;
	    z-index: 400;
	    background-color:#fff;
	    @include box-sizing;
	    display:flex;
	    flex-direction:row;
	    align-items:center;
	    justify-content:space-around;
	    box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
	    -webkit-box-shadow:0 3px 14px 2px rgba(0,0,0,.12);
		.details-footer-item{
			text-align:center;
			flex:1;
			.icon{
				font-size:0.5rem
			}

		}
		.cursom-shopcar{
			position: relative;
			.num{
				position: absolute;
	          	width: 0.5rem;
	          	height: 0.5rem;
	          	border-radius: 50%;
	         	line-height: 0.5rem;
	          	text-align: center;
	          	background-color: #f95c52;
	          	color: #fff;
	          	right: 0.1rem;
	          	top: 0px;
			}
          
		}
		.addShopCart{
			background-color:#ff6b00;
			flex:2;
			height:100%;
			text-align:center;
			line-height:$footerHeight;
			color:#ffffff;

		}

	}



</style>
