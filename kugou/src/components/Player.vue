<template>
	<div class="player-box">
	 <audio autoplay id="audioPlay"></audio>
		<div class="player-singer-photo">
			<img src="" alt>
		</div>
		<div class="player-title">
			<p class="song-name"></p>
			<p class="singer-name"></p>
		</div>
		<div class="player-icon">
			<i class="player-stop"></i>
			<i class="player-next"></i>
			<i class="player-down"></i>
		</div>
		

	</div>

</template>
<script type="es6">


	
</script>

<style lang="scss" type="text/scss">
	.player-box{
		width:100%;
		height:4.2rem;
		position:fixed;
		bottom:0px;
		left:0px;
		overflow:hidden;
		background:rgba(0,0,0,.9);
		color:#fff;
		.player-singer-photo{
			width:3.75rem;
			height:3.75rem;
			display:inline-block;
			vertical-align: model;

		}
		.player-title{
			width:65%;
			display:inline-block;
			vertical-align:model;
		}
		.player-icon{
			position:absolute;
			right:0.7rem;
			top:1rem;
			.player-stop,.player-next,.player-down{
				width:1.8rem;
				height:1.8rem;
				margin-left:1rem;
				cursor: pointer;
				display:inline-block;
				vertical-align:model;
			}
			.player-stop{
				background:url(../assets/img/pause_icon.png) no-repeat;
				background-size:100%;
			}
			.player-next{
				background:url(../assets/img/next_icon.png) no-repeat;
				background-size:100%;
			}
			.player-down{
				background:url(../assets/img/download_icon.png) no-repeat;
				background-size:100%;
			}

		}


	}

</style>