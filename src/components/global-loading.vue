<template>
	<transition name="opct">
		<div v-show="show" type="global" ref="global-loading" class="loading">
			<div class="loading-pop">
				<!-- loading -->
				<div class="ytp-spinner">
					<div class="ytp-spinner-container">
						<div class="ytp-spinner-rotator">
							<div class="ytp-spinner-left">
								<div class="ytp-spinner-circle"></div>
							</div>
							<div class="ytp-spinner-right">
								<div class="ytp-spinner-circle"></div>
							</div>
						</div>
					</div>
				</div>
				<!-- text -->
				<p class="laoding-msg">操作进行中……</p>
			</div>
		</div>
	</transition>
</template>
<script>
	import Bus from '@u/bus'
	export default {
		data(){
			return {
				show: false
			}
		},
		created(){
			Bus.$on('showLoading', () => {
				this.show = true;
			});
			Bus.$on('hideLoading', () => {
				this.show = false;
			});
		}
	}
</script>
<style lang="scss" scoped>
	.loading[type=global]{
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgba(0,0,0,.4);
		z-index: 999999999;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.loading-pop{
		width: 240px;
		height: 220px;
		border-radius: 10px;
		background: rgba(0,0,0,.8);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		flex-direction: column;
	}
	.laoding-msg{
		color: #000;
		font-weight: bold;
		padding: 40px 0 0;
		color: #fe893c;
	}
	.ytp-spinner {
	  width: 80px;
	  height: 80px;
	  position: relative;
	}
	.ytp-spinner-container {
	  pointer-events: none;
	  position: absolute;
	  width: 100%;
	  padding-bottom: 100%;
	  top: 50%;
	  left: 50%;
	  margin-top: -50%;
	  margin-left: -50%;
	  animation: ytp-spinner-linspin 1568.23529647ms linear infinite;
	  -webkit-animation: ytp-spinner-linspin 1568.23529647ms linear infinite;
	}
	.ytp-spinner-rotator {
	  position: absolute;
	  width: 100%;
	  height: 100%;
	  -webkit-animation: ytp-spinner-easespin 5332ms cubic-bezier(0.4,0.0,0.2,1) infinite both;
	  animation: ytp-spinner-easespin 5332ms cubic-bezier(0.4,0.0,0.2,1) infinite both;
	}
	.ytp-spinner-left {
	  right: 49%;
	  position: absolute;
	  top: 0;
	  left: 0;
	  bottom: 0;
	  overflow: hidden;
	}
	.ytp-spinner-circle {
	  box-sizing: border-box;
	  position: absolute;
	  width: 200%;
	  height: 100%;
	  border-style: solid;
	  border-color: #fe893c #fe893c transparent;
	  border-radius: 50%;
	  border-width: 6px;
	}
	.ytp-spinner-left .ytp-spinner-circle {
	  left: 0;
	  right: -100%;
	  border-right-color: transparent;
	  -webkit-animation: ytp-spinner-left-spin 1333ms cubic-bezier(0.4,0.0,0.2,1) infinite both;
	  animation: ytp-spinner-left-spin 1333ms cubic-bezier(0.4,0.0,0.2,1) infinite both;
	}
	.ytp-spinner-right {
	  left: 49%;
	  position: absolute;
	  top: 0;
	  right: 0;
	  bottom: 0;
	  overflow: hidden;
	}
	.ytp-spinner-right .ytp-spinner-circle {
	  left: -100%;
	  right: 0;
	  border-left-color: transparent;
	  -webkit-animation: ytp-right-spin 1333ms cubic-bezier(0.4,0.0,0.2,1) infinite both;
	  animation: ytp-right-spin 1333ms cubic-bezier(0.4,0.0,0.2,1) infinite both;
	}
	@-webkit-keyframes ytp-spinner-linspin {
		100%{
		  transform: rotate(360deg);
		}
	}
	@-moz-keyframes ytp-spinner-linspin {
		100%{
		  transform: rotate(360deg);
		}
	}
	@-webkit-keyframes ytp-spinner-easespin{
		12.5%{
		  transform: rotate(135deg);
		}25%{
		  transform: rotate(270deg);
		}37.5%{
		  transform: rotate(405deg);
		}50% {
		  transform: rotate(540deg);
		}62.5%{
		  transform: rotate(675deg);
		}75% {
		  transform: rotate(810deg);
		}87.5% {
		  transform: rotate(945deg);
		}100% {
		  transform: rotate(1080deg);
		}
	}
	@-moz-keyframes ytp-spinner-easespin{
		12.5%{
		  transform: rotate(135deg);
		}25%{
		  transform: rotate(270deg);
		}37.5%{
		  transform: rotate(405deg);
		}50% {
		  transform: rotate(540deg);
		}62.5%{
		  transform: rotate(675deg);
		}75% {
		  transform: rotate(810deg);
		}87.5% {
		  transform: rotate(945deg);
		}100% {
		  transform: rotate(1080deg);
		}
	}
	@-webkit-keyframes ytp-spinner-left-spin{
		0% {
	  	transform: rotate(130deg);
		}50%{
		  transform: rotate(-5deg);
		}100%{
		  transform: rotate(130deg);
		}
	}
	@-moz-keyframes ytp-spinner-left-spin{
		0% {
	  	transform: rotate(130deg);
		}50%{
		  transform: rotate(-5deg);
		}100%{
		  transform: rotate(130deg);
		}
	}
	@-webkit-keyframes ytp-right-spin{
		0%{
	    transform: rotate(-130deg);
		}50%{
		  transform: rotate(5deg);
		}100%{
		  transform: rotate(-130deg);
		}
	}
	@-moz-keyframes ytp-right-spin{
		0%{
	    transform: rotate(-130deg);
		}50%{
		  transform: rotate(5deg);
		}100%{
		  transform: rotate(-130deg);
		}
	}
	/* 外层透明度 */
	.opct-enter-active, .opct-leave-active {
	  transition: opacity .4s;
	}
	.opct-enter, .opct-leave-to {
	  opacity: 0;
	}
</style>