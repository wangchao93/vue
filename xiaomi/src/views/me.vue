<template>

	<div class="app-init me-box">
		
		<div class="user-box public-pading">
			<div class="face-book">
				<img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/normal-face.png" alt="">
			</div>
			<p @click="author">登录 / 注册</p>
		</div>

		<div class="dingdan public-pading" @click="author">我的订单</div>

		<div class="me-tab-box">
			<div class="item" @click="author">
				<p class="icon"><span class="iconfont icon-qianbao"></span></p>
				<p class="name">待付款</p>
			</div>
			<div class="item" @click="author">
				<p class="icon"><span class="iconfont icon-daishouhuo"></span></p>
				<p class="name">待收货</p>
			</div>
			<div class="item" @click="author">
				<p class="icon"><span class="iconfont icon-buoumaotubiao46"></span></p>
				<p class="name">退换修</p>
			</div>

		</div>
		<div class="new-warp">
			<div class="dingdan public-pading" @click="author">
				<span class="iconfont icon-huiyuan" style="color:#fdbf2d"></span>
				<span class="name">会员福利</span>
			</div>
			<div class="dingdan public-pading" @click="author">
				<span class="iconfont icon-qianbao1" style="color:#51bbe0"></span>
				<span class="name">我的优惠</span>
			</div>

		</div>

		<div class="new-warp">
			<div class="dingdan public-pading" @click="author">
				<span class="iconfont icon-fuwuerji2" style="color:#f96c5e"></span>
				<span class="name">服务中心</span>
			</div>
			<div class="dingdan public-pading" @click="author">
				<span class="iconfont icon-shop" style="color:#ff8b43"></span>
				<span class="name">小米之家</span>
			</div>

		</div>

		<div class="new-warp">
			<div class="dingdan public-pading" @click="author">
				<span class="iconfont icon-shezhi" style="color:#818C99"></span>
				<span class="name">设置</span>
			</div>
			

		</div>

	</div>






</template>


<script type="text/javascript">
	

export default{
	methods:{
		author:function(){
			this.$router.push({path:'/author'})
		}
	}
}


</script>



<style lang="scss" type="text/scss">
@import "../assets/scss/util";
.public-pading{
	padding: 0 getIphonese(30px)
}
.user-box{
	display:flex;
	flex-direction:row;
	align-items:center;
	height:getIphonese(142px);
	background:#f37d0f url(http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/bg.63c8e19.png) repeat top center;
	background-size: 7.7rem;
	@include box-sizing;
	padding-top: getIphonese(28px);
	padding-bottom: getIphonese(28px);

   .face-book{
	   	width:1.33rem;
	   	height:1.33rem;
	   	border:3px solid hsla(0,0%,100%,.4);
	   	border-radius: 50%;
	   	overflow:hidden;
	   	@include box-sizing;
	   	img{
	   		width:100%;
	   		height:100%;
	   	}

   }
   p{
		color:#fff;
		padding-left: 0.2rem;
		@include f12px;

	}

}
.dingdan{
	line-height: getIphonese(80px);
	background-color:#fff;
	border-bottom: 1px solid #d9d9d9;
	color:rgba(0,0,0,0.87);
	position:relative;
	
	&:after{
		font-family:iconfont;
		content:"\e628";
		font-size:0.4rem;
		position:absolute;
		right:getIphonese(26px);
		color:#777777;
	}
}
.me-tab-box{
	display:flex;
	flex-direction:row;
	justify-content:space-around;
	
	background-color:#fff;
	margin-bottom: 0.26rem;
	.item{
		height:2.32rem;
		display:flex;
		flex-direction:column;
		align-items:center;
		justify-content:center;
		&:active{
			background-color:#eee;
		}
	}
	.icon{
		font-size:0.6rem;
		color:#a4a4a4;

	}
	.name{
		@include f12px;
		padding-top:0.1rem;
	}
}
.new-warp{
	margin-bottom:0.26rem;
	.dingdan{
		border:none;
	}
	.iconfont{
		font-size:0.6rem;
		position:absolute;
		left:0.5rem;
		text-align: center;
	}
	.name{
		padding-left:1rem;
	}
}



</style>