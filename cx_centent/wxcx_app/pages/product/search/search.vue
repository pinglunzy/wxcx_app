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
        <uni-icons
          type="close"
          size="20"
          style="color: gray; opacity: 0.4"
          @click="clearArr()"
        ></uni-icons>
      </view>
      <button class="btn ml10" @click="search()" type="default">搜索</button>
    </view>
    <!-- 最近搜索 -->
    <view class="p-0-20 bg-white" v-if="!selected.length && arr.length">
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
    <!-- 展示搜索商品结算-->
    <view class="goods pr">
      <view
        v-if="selected.length == 0 && total == true"
        style="
          width: 100%;
          height: 500rpx;
          display: flex;
          align-items: center;
          justify-content: center;
          align-items: center;
        "
      >
        <text style="font-size: 30rpx; opacity: 0.6; color: gray"
          >未找到您需要的内容</text
        >
      </view>
      <view class="wrapper" v-else>
        <view class="list">
          <!-- category begin -->
               <view class="items"> 
                <!-- 商品 begin -->
                <view
                  class="good"
                  @click="gotoDetail(good)"
                  v-for="(good, key) in selected"
                  :key="key"
                >
                  <image :src="good.product_image" class="image" mode="aspectFill"></image>
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
                      <!-- <view class="btn-group" v-if="good.spec_types == 20">
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
                      <view class="btn-group" style="display:flex;" v-else>
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
                      </view> -->
                    </view>
                  </view>
                </view>
                <!-- 商品 end -->
              </view>
            <!-- </view> -->
          <!-- </template> -->
          <!-- category end -->
        </view>
      </view>
    </view>
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
      total: false,
      goods: [], //所有商品
      cart_type: 0,
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
      let arrs = this.arr || [];
      if (str != null) {
        search = str;
        this.form.keyWord = search;
      } else {
        search = this.form.keyWord;
        if (typeof search != "undefined" && search != null && search != "") {
          arrs.unshift(search);
          arrs = [...new Set(arrs)];
          arrs = arrs.slice(0, 10);
          self.arr = arrs;
          //搜索时在全部商品中进行匹配
          for (let i = 0; i < goods_list.length; i++) {
            for (let j = 0; j < goods_list[i].products.length; j++)
              if (goods_list[i].products[j].product_name.includes(search)) {
                selected.push(goods_list[i].products[j]);
              }
          }
          self.selected = selected;
          self.total = true;
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
      let category_id = 0;
      let sortType = "all";
    },
    // 清空搜索框
    clearArr() {
      this.form.keyWord = "";
      this.selected = [];
      this.total = false;
    },
    /*清楚缓存*/
    clearStorage() {
      let self = this;
      this.total = false;
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

<style lang="css">
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
/* 筛选后 */
.list {
  /* width: 100%; */
  /* font-size: $font-size-base; */
  background-color: #ffffff;
  padding:15rpx;
}
.goods .wrapper .list .category {
  width: 100%;
}
.list .category .title {
  padding: 30rpx 0;
  display: flex;
  align-items: center;
  /* color: $text-color-base; */
}
.list .category .title .icon {
  width: 38rpx;
  height: 38rpx;
  margin-left: 10rpx;
}
.list .items {
  display: flex;
  flex-direction: column;
  padding-bottom: -30rpx;
}
.list .items .good {
  display: flex;
  align-items: center;
  margin-bottom: 30rpx;
}
.list .items .good .image {
  width: 160rpx;
  height: 160rpx;
  margin-right: 20rpx;
  border-radius: 8rpx;
}
.list .items .good .right {
  flex: 1;
  min-height: 160rpx;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.list .items .good .right .discount {
  font-size: 20rpx;
  border-radius: 5rpx;
  padding: 2rpx 6rpx;
  border: 1rpx solid;
  border-color: #00ff7f;
  color: #00ff7f;
  margin-bottom: 10rpx;
}
.list .items .good .right .name {
  font-size: 30rpx;
  font-weight: 800;
  color: #3a3a3a;
  margin-bottom: 16rpx;
}
.list .items .good .right .tips {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 24rpx;
  color: #28282850;
}
.list .items .good .right .price_and_action {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list .items .good .right .price_and_action .price {
  font-size: 30rpx;
  font-weight: 600;
  color: #ff5800;
}
.list .items .good .right .price_and_action .linprice {
  font-size: 22rpx;
  font-weight: 300;
  color: #999999;
  text-decoration: line-through;
}
</style>
