<template>
	<div class="app-init singer scroll-box">
		<div class="cell-group">
			<div class="cell-item" @click="$router.openPage('/singer/list/88')">热门歌手</div>
		</div>
		<div class="cell-group">
			<div class="cell-item" @click="$router.openPage('/singer/list/1')">华语男歌手</div>
			<div class="cell-item" @click="$router.openPage('/singer/list/2')">华语女歌手</div>
			<div class="cell-item" @click="$router.openPage('/singer/list/3')">华语组合</div>
		</div>
		<div class="cell-group">
			<div class="cell-item" @click="$router.openPage('/singer/list/4')">日韩男歌手</div>
			<div class="cell-item" @click="$router.openPage('/singer/list/5')">日韩女歌手</div>
			<div class="cell-item" @click="$router.openPage('/singer/list/6')">日韩组合</div>
		</div>
		<div class="cell-group">
			<div class="cell-item" @click="$router.openPage('/singer/list/7')">欧美男歌手</div>
			<div class="cell-item" @click="$router.openPage('/singer/list/8')">欧美女歌手</div>
			<div class="cell-item" @click="$router.openPage('/singer/list/9')">欧美组合</div>
		</div>
	</div>
</template>

<script type="text/javascript">

	

</script>

<style lang="scss" type="text/scss">
	
.singer{
	margin-top: 90px;
	.cell-group{
		margin: 15px 0;
		width: 100%;
		border: 1px solid #e4e4e4;
		border-radius: 5px;
		background-color: #fbfbfb;
		.cell-item{
			padding: 12px 15px;
			font-size: 15px;
			border-bottom: 1px solid #e4e4e4;
			position: relative;
			&:after{
				content: '';
				display: block;
				position: absolute;
				width: 12px;
				height: 100%;
				background: url("../../assets/img/arrow_icon.png") no-repeat center;
				background-size: 12px;
				top: 0;
				right: 15px;
			}
			&:last-of-type{
				border: none;
			}
		}
	}

}

</style>