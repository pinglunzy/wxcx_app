<template>
	<view>
		<view class="diy-banner-box">
			<swiper class="swiper" circular="true" indicator-dots="true"  :indicator-active-color="indicatorActiveColor"
				:autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in itemData.data" :key="index" @click="gotoPages(item)">
					<image :src="item.imgUrl" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="diy-banner-xf d-b-c">
			<view class="banner-xf-box" @click="gotoPage('/'+itemData.params.nav[0].navlinkUrl)">
				<view class="rides">
					<image src="/static/bn_01.png"></image>
				</view>
				<view class="rides_title">{{itemData.params.nav[0].title}}</view>
				<view class="rides_text">{{itemData.params.nav[0].text}}</view>
			</view>
			<view class="banner-xf-box" @click="gotoPage('/'+itemData.params.nav[1].navlinkUrl)">
				<view class="rides">
					<image src="/static/bn_02.png"></image>
				</view>
				<view class="rides_title">{{itemData.params.nav[1].title}}</view>
				<view class="rides_text">{{itemData.params.nav[1].text}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				indicatorActiveColor: '#ffffff'
			}
		},
		props: ['itemData'],
		created() {
			this.interval = this.itemData.params.interval;
			this.indicatorActiveColor = this.itemData.style.btnColor;
		},
		methods: {

			/*跳转页面*/
			gotoPages(e) {
				this.gotoPage(e.linkUrl);
			}
		}
	}
</script>

<style lang="scss">
	.diy-banner-box,
	.diy-banner-box .swiper {
		width: 750rpx;
		height: 500rpx;
	}

	.diy-banner-box image {
		width: 750rpx;
		height: 500rpx;
	}

	.banner-xf-box {
		// flex: 1;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		width: 320rpx;
		height: 280rpx;
		border-radius: 20rpx;
		// @include background_color("background_color");
		background-color: #3bb976;
	}

	.diy-banner-xf {
		width: 660rpx;
		margin: 0 auto;
		position: relative;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		padding: 20rpx;
		background-color: white;
		border-radius: 18rpx;
		box-shadow: 0px 2rpx 8rpx rgba(0, 0, 0, 0.1);
	}

	.rides {
		width: 85rpx;
		height: 85rpx;
		margin-bottom: 28rpx;

		image {
			width: 85rpx;
			height: 85rpx;
		}
	}

	.rides_title {
		color: #ffffff;
		font-weight: 600;
		font-size: 34rpx;

	}

	.rides_text {
		color: #ffffff;
		font-weight: 400;
		font-size: 20rpx;
	}
</style>
