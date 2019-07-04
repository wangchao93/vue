<template>
	
<div class="app-init home-box">

	<header class="home-header">

		<div class="search-box">
			<div class="logo">
				<span class="iconfont icon-xiaomi"></span>
			</div>
			<div class="input-box">
				<span class="iconfont icon-sousuo-copy"></span>
				<input type="text" placeholder="搜索商品名称" class="input" />
			</div>

			<div class="myselft">
				<span class="iconfont icon-smile"></span>
			</div>

		</div>

		<nav class="menu-box scroll-box-x">

			<div class="item" :class="{ 'active' : index == navListActiveIndex}" v-for="(value,index) in navList" @click="navChange(index)">
				<span>{{value.name}}</span>
			</div>
			
		</nav>
		
	</header>

	<div class="app-init scroll-box tab-box footer-hack">

		<swiper :list="bannerList"></swiper>

		<div class="nav-mi">
			<div>
				<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011022292984819.png" alt="" @click="details(123)">
			</div>
			<div>
				<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011022292372054.png" alt="">
			</div>
			<div>
				<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011022291629252.png" alt="">
			</div>
			<div>
				<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011022290460400.png" alt="">
			</div>
			
		</div>

		<div class="shop-item clear">
			<img class="href fl" src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011114551289342.png" alt="">

			<img class="href fr" style="margin-bottom:0.05rem" src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011114550596671.png" alt="">
			<img class="href fr" src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011114550596671.png" alt="">
		</div>

		<div class="shop-item clear">
			<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/a589d24e74c4d96191dd46635054e804.jpg" alt="">

		</div>
		<div class="shop-item clear">
			<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011115034174111.png" alt="">

		</div>
		<div class="shop-item clear">
			<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011115033089933.png" alt="">

		</div>

		<div class="shop-item">
			<div class="shop-box clear">
				<div class="shop-box-item" v-for="item in shopList">
					<img :src="item.src" alt="">
					<p class="title">{{item.title}}</p>
					<p class="con">{{item.con}}</p>
					<p class="money">
						<span class="small">￥</span><span>{{item.money}}</span>
					</p>
				</div>
			</div>

		</div>

	</div>
	
</div>




</template>

<script type="text/ecmascript-6">

	import swiper from '../components/swiper';

	export default{
		data(){
			return{
				navList:[
			{
				name:"推荐"
			},
			{
				name:"手机"
			},
			{
				name:"智能"
			},
			{
				name:"电视"
			},
			{
				name:"电脑"
			},
			{
				name:"全面屏"
			},
			{
				name:"生活周边"
			},
			{
				name:"盒子"
			},
			{
				name:"艺术"
			}
			],
			bannerList : [
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/01.png',
            href: '/detail/1001'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/02.jpg',
            href: '/detail/1002'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/03.jpg',
            href: '/detail/1003'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/04.jpg',
            href: '/detail/1004'
          }
        ],
        shopList:[
        	 {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          }
        ],
			navListActiveIndex:0
			}
			
		},
		components:{
			swiper
		},
		methods:{

			navChange(index){

				this.navListActiveIndex=index

			},
			details:function(id){
				this.$router.push({
					path:`/details/${id}`
				})
			}

		}
	}
</script>
<style lang="scss" type="text/scss">

@import "../assets/scss/util";

.home-header{
	background-color:#f2f2f2;
	z-index:200;
	box-shadow:0 2px 4px -1px rgba(0,0,0,0.2);
	position:relative;
	.search-box{
		display:flex;
		flex-direction:row;
		justify-content:space-around;
		align-items:center;
		padding: getIphonese(16px) 0;
		text-align:center;

		.logo{
			width:getIphonese(43px);
			padding:0 getIphonese(23px);
			color:#ff6b00;
			font-size:0.7rem;
			flex:1
		}
		.iconfont{
			font-size:0.6rem;
		}
		.input-box{
			height:getIphonese(58px);
			position:relative;
			flex:9;
			.input{
				width:100%;
				height:100%;
				border:1px solid #e5e5e5;
				border-radius:4px;
				@include box-sizing;
				padding-left:getIphonese(54px)
			}
			.icon-sousuo-copy{
				position:absolute;
				color:#9c9c9c;
				opacity: 0.8;
				left:getIphonese(10px);
				top:getIphonese(5px)

			}
		}
		.myselft{
			flex:2
		}

	}
	.menu-box{
		display:flex;
		flex-direction:row;
		align-items:center;
	
		.item{
			padding:0 getIphonese(17px);
			white-space: nowrap;
			color:#7c7c7c;
			span{
				display:inline-block;
				line-height:getIphonese(70px);
				position:relative;
				
			}

		}
		.active{
				color:#ed5b00;
				span{
					&:after{
					content:'';
					display:inline-block;
					width:100%;
					height:2px;
					background-color:#ed5b00;
					position:absolute;
					left:0px;
					bottom:0px;

				}
				}
				
			}
		&::-webkit-scrollbar {
            width: 0px;
            height:0px;
        }
	}

}

.home-box{

 .tab-box{
	top:2.5rem;

	
	.nav-mi{
		display:flex;
		flex-direction:row;
		justify-conten:space-around;
		align-items:center;
	}
	.shop-item{
		margin-top: 0.15rem;
		.href{
			width:4.96rem;
		}
		.shop-box-item{
			width:50%;
			float:left;
			margin-bottom:0.24rem;
			@include box-sizing;
			 &:nth-child(odd){
				padding-right: 0.03rem;
			 }
			  &:nth-child(even){
				padding-left: 0.03rem;
			 }
			img{
				min-height: 4.96rem;
			}
			p{
				padding:0 0.2rem;
			}
			.title{
				font-size:0.36rem;
				color:rgba(0,0,0,0.87);
				padding-top:0.2rem;
			}
			.con{
				margin-top:0.06rem;
				font-size:0.32rem;
				line-height:0.38rem;
				color:rgba(0,0,0,0.54)
			}
			.money{
				font-size:0.38rem;
				color:#ea625b;
				padding-top:0.05rem;
				.small{
					font-size:0.3rem;
				}
			}

		}
	}

}

}
</style>

