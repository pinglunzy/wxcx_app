<template>
  <view class="search-wrap">
    <!-- 搜索框 -->
    <view class="index-search-box d-b-c" id="searchBox">
      <view class="index-search t-c flex-1">
        <span class="icon iconfont icon-sousuo"></span>
        <input
          type="text"
          v-model="form.keyWord"
          class="flex-1 ml10 f30 gray3"
          placeholder-class="f24 gray6"
          placeholder="输入你要的商品"
          confirm-type="search"
          clearButton="always"
          @confirm="search()"
        />
      </view>
      <button class="btn ml10" @click="search()" type="default">搜索</button>
    </view>
    <!-- 最近搜索 -->
    <view class="p-0-20 bg-white" v-if="arr.length">
      <view class="group-hd">
        <view class="left"><text class="min-name">最近搜索</text></view>
        <view class="right">
          <span
            class="icon iconfont icon-lajitong"
            @click="clearStorage"
          ></span>
        </view>
      </view>
      <view class="before-search">
        <text
          class="item"
          v-for="(item, index) in arr"
          :key="index"
          @click="search(arr[index])"
          >{{ arr[index] }}</text
        >
      </view>
    </view>
    <!-- 展示搜索商品結構 -->
    <scroll-view
      class="goods pr"
      :style="'height:' + scrollviewHigh + 'px;'"
      :scroll-with-animation="true"
      :scroll-animation-duration="1"
      scroll-y
      :scroll-top="cateScrollTop"
      @scroll="handleGoodsScroll"
    >
      <view class="wrapper">
        <view class="list">
          <!-- category begin -->
          <template v-for="(item, index) in selected" :key="index">
            <view
              class="category"
              v-if="item.products.length != 0"
              :id="`cate-${item.category_id}`"
            >
              <view class="title">
                <text>{{ item.name }}</text>
              </view>
              <view class="items">
                <!-- 商品 begin -->
                <view
                  class="good"
                  @click="gotoDetail(good)"
                  v-for="(good, key) in item.products"
                  :key="key"
                >
                  <image :src="good.product_image" class="image"></image>
                  <view class="right">
                    <view class="ww100">
                      <view class="name">{{ good.product_name }}</view>
                      <view class="tips text-ellipsis">{{
                        good.selling_point
                      }}</view>
                    </view>
                    <view class="price_and_action">
                      <view>
                        <text style="color: #ff5800; font-size: 22rpx">￥</text>
                        <text class="price">{{ good.product_price }}</text>
                        <text
                          class="linprice"
                          v-if="good.product_price * 1 != good.line_price * 1"
                          >￥{{ good.line_price * 1 }}</text
                        >
                      </view>
                      <view class="btn-group" v-if="good.spec_types == 20">
                        <button
                          type="primary"
                          class="btn property_btn"
                          hover-class="none"
                          size="min"
                          @click.stop="gotoDetail(good)"
                        >
                          选规格
                        </button>
                        <view class="dot" v-if="good.cart_num != 0"
                          >{{ good.cart_num }}
                        </view>
                      </view>
                      <view class="btn-group" v-else>
                        <button
                          type="default"
                          v-if="good.cart_num != 0"
                          plain
                          class="btn reduce_btn"
                          size="min"
                          hover-class="none"
                          @tap.stop="reduceFunc(good)"
                        >
                          <view class="icon icon-jian iconfont iconsami-select">
                          </view>
                        </button>
                        <view class="number" v-if="good.cart_num != 0">
                          {{ good.cart_num }}
                        </view>
                        <button
                          type="primary"
                          class="btn add_btn"
                          size="min"
                          hover-class="none"
                          @tap.stop="addCart(good)"
                        >
                          <view
                            class="icon icon-jia iconfont iconadd-select"
                          ></view>
                        </button>
                      </view>
                    </view>
                  </view>
                </view>
                <!-- 商品 end -->
              </view>
            </view>
          </template>
          <!-- category end -->
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      arr: [],
      goods_list: [],
      selected: [],
	  total:0,
    };
  },
  onLoad(options) {
    this.goods_list = JSON.parse(options.goods_list);
  },
  mounted() {
    /*获取缓存数据*/
    this.getData();
  },
  methods: {
    /*获取缓存里的搜索历史*/
    getData() {
      let self = this;
      /*获取搜索记录*/
      uni.getStorage({
        key: "search_list",
        success: function (res) {
          if (res != null && res.data != null) {
            self.arr = res.data;
          }
        },
      });
    },
    /*搜索*/
    search(str) {
      this.selected = [];
      let self = this;
      let selected = self.selected;
      let goods_list = self.goods_list;
      let search = null;
	  
      if (str != null) {
        search = str;
      } else {
        search = this.form.keyWord;
        let arrs = this.arr || [];
        if (typeof search != "undefined" && search != null && search != "") {
          arrs.unshift(search);
		  arrs = [...new Set(arrs)];
          arrs = arrs.slice(0,10);
		  self.arr = arrs;
          //搜索时在全部商品中进行匹配
          for (let i = 0; i < goods_list.length; i++) {
            if (goods_list[i].name.includes(search)) {
              selected.push(goods_list[i]);
              self.selected = selected;
            }
          }
        } else {
          uni.showToast({
            title: "请输入搜索的关键字",
            icon: "none",
            duration: 2000,
          });
          return false;
        }
        /*设置搜索记录*/
        uni.setStorage({
          key: "search_list",
          data: arrs,
        });
      }
      console.log("匹配完成", JSON.stringify(self.selected));
      let category_id = 0;
      let sortType = "all";
    },
    /*清楚缓存*/
    clearStorage() {
      let self = this;
      uni.removeStorage({
        key: "search_list",
        success: function (res) {
          self.arr = [];
        },
      });
    },
    /*获取数据*/
    getProduct(item) {
      let self = this;
      if (self.clock == true) {
        return;
      }
      self.clock = true;
      self.good = item;
      let product_id = item.product_id;
      /*详情内容格式化*/
      // item.content = utils.format_content(item.content);
      self.detail = item;
      self.showGoodDetailModal();
    },
	/* 购物车商品添加 */
	cartAdd(goods) {
		let self = this;
		if (self.addclock) {
			return;
		}
		self.addclock = true;
		let num = goods.product_num + 1;
		let product_id = goods.product_id;
		let total_num = 1;
		self._post(
			"order.cart/sub", {
				product_id: product_id,
				total_num: total_num,
				cart_id: goods.cart_id,
				type: "up",
				cart_type: 0,
				dinner_type: self.dinner_type,
				shop_supplier_id: self.shop_supplier_id,
				delivery: self.orderType == "takeout" ? 10 : 20,
			},
			function(res) {
				self.addclock = false;
				self.reCart(res);
				self.goods_list.forEach((item, index) => {
					item.products.forEach((product, product_index) => {
						if (product.product_id == goods.product_id) {
							self.$set(product, "cart_num", product.cart_num + 1);
						}
					});
				});
				self.$set(goods, "product_num", num);
				self.$set(goods, "total_num", goods.total_num + 1);
				self.addclock = false;
				self.getCategory();
			},
			function() {
				self.addclock = false;
			}
		);
	},
	
	// 跳转到详情页
    gotoDetail(e) {
      let delivery = this.orderType == "takeout" ? 10 : 20;
      uni.navigateTo({
        url:
          "/pages/product/detail/detail?product_id=" +
          e.product_id +
          "&delivery=" +
          delivery +
          "&bag_type=" +
          this.bag_type +
          "&dinner_type=" +
          this.dinner_type +
          "&cart_type=" +
          this.cart_type,
      });
    },
  },
};
</script>

<style>
.search-wrap .index-search-box .search-box {
  padding: 0 20rpx;
  height: 64rpx;
  line-height: 64rpx;
  background: #f7f7f7;
  border-radius: 50rpx;
  overflow: hidden;
  font-size: 28rpx;
  color: #999;
  box-sizing: border-box;
}

.search-wrap .index-search-box button {
  height: 78rpx;
  line-height: 78rpx;
  border: solid 1rpx #cccccc;
  color: #333333;
  background: #ffffff;
}

.before-search {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: wrap;
}

.before-search .item {
  padding: 16rpx;
  margin-right: 16rpx;
  margin-bottom: 16rpx;
  border-radius: 8rpx;
  color: #686868;
  background: #f0f2f5;
  font-size: 24rpx;
}
</style>
