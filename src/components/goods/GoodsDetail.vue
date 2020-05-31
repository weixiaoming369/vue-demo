<template>
  <div>
    <!-- <go-back-header title="商品详情"></go-back-header> -->
    <nav-bar title="商品详情"></nav-bar>
    <div class="outer-swiper">
      <div class="swiper">
        <!--显示的轮播图  -->
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item, index) in images" :key="index">
            <img class="lunboimg" :src="item.url" />
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <div class="product-desc">
      <ul>
        <li>
          <span class="product-desc-span">{{ goodsInfo.title }}</span>
        </li>
        <li class="price-li">
          市场价:<s>￥{{ goodsInfo.market_price }}</s> 销售价:<span
            >￥{{ goodsInfo.sell_price }}</span
          >
        </li>
        <li class="number-li">
          购买数量：<span @click="subCount">-</span
          ><span v-if="count > 0">{{ count }}</span
          ><span @click="addCount">+</span>
        </li>
        <li>
          <mt-button type="primary">立即购买</mt-button>
          <mt-button type="danger" @click="addToCat">加入购物车</mt-button>
        </li>
      </ul>
    </div>
    <div class="ball"></div>
    <div class="product-props">
      <ul>
        <li>商品参数</li>
        <li>商品货号:{{ goodsInfo.goods_num }}</li>
        <li>库存情况：{{ goodsInfo.stock }}件</li>
        <li>
          上架时间:{{ goodsInfo.addTime | dateConvert("YYYY年/MM月/DD日") }}
        </li>
      </ul>
    </div>
    <div class="product-info">
      <ul>
        <li>
          <mt-button type="primary" size="large" plain>图文介绍</mt-button>
          <mt-button type="danger" size="large" plain>商品评论</mt-button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import EventBus from "@/EventBus";
export default {
  data() {
    return {
      images: [
        {
          id: 1,
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590389353684&di=3b4512920e43e3e40a18eb1e40171c84&imgtype=0&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F48%2F11%2F16pic_4811790_b.jpg"
        },
        {
          id: 2,
          url:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4147480226,3583698002&fm=15&gp=0.jpg"
        },
        {
          id: 3,
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590392343259&di=07a9dc112d582b9a478503839b4e80df&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F9539263b5bf8f2e5aa0cb311883b6ab812ad21fcd8ad-ZCBc1L_fw658"
        },
        {
          id: 4,
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590392343258&di=10c02e1296a4959bf83c6bd586829bcb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F52b8252bf3abfbafe16eec660b28d3791612031ad4f93-jvbGcW_fw658"
        },
        {
          id: 5,
          //使用这种方法require('@/assets/01.jpg')可以为img的src属性添加图片
          url: require("@/assets/lun01.jpg")
        }
      ],
      count: 1,
      goodsInfo: {
        goodsTitle: "我是商品标题",
        market_price: 623,
        sell_price: 340,
        goods_num: 2174528345,
        stock: 34,
        addTime: 2013 - 6 - 5
      }
    };
  },
  created() {
    let id = this.$route.params.id;
    console.log(id);
  },
  methods: {
    subCount() {
      if (this.count <= 1) return;
      this.count--;
    },
    addCount() {
      if (this.goodsInfo.stock < this.count) return;
      this.count++;
    },
    addToCat() {
      //通知App组件添加子组件的参数 这里是购物车数量
      EventBus.$emit("addCatCount", this.count);
    }
  }
};
</script>
<style scoped>
.mint-swipe {
  height: 200px;
  width: 100%;
}
.lunboimg {
  width: 100%;
  text-align: center;
  height: 270px;
}
.ball-enter-active {
  animation: bounce-in 1s;
}
@keyframes bounce-in {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(140px, -50px, 0);
  }
  75% {
    transform: translate3d(160px, 0px, 0);
  }
  100% {
    transform: translate3d(140px, 300px, 0);
  }
}
swiper {
  border: 1px solid red;
  margin: 8px;
  border-radius: 5px;
  overflow: hidden;
}
.outer-swiper,
.product-desc,
.product-info,
.product-props {
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin: 3px;
}

.product-desc ul,
.product-props ul .product-info ul {
  padding: 0px;
}

.product-desc ul li,
.product-props ul li,
.product-info ul li {
  list-style: none;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 8px;
}

.product-desc ul > :nth-child(1) span {
  color: blue;
  font-size: 22px;
  font-weight: bold;
}
.product-desc ul > :nth-child(1) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}

.price-li span {
  color: red;
  font-size: 25px;
}
.price-li s {
  margin-right: 16px;
}

/* 加减 */
.number-li span {
  display: inline-block;
  border: 2px solid rgba(0, 0, 0, 0.1);
  width: 25px;
}

/* 商品参数 */
.product-props ul > :nth-child(1) {
  text-align: left;
}
.product-props ul:not(:nth-child(1)) {
  margin-left: 40px;
}
.product-info ul {
  margin-bottom: 70px;
  padding: 0 5;
}
.number-li span {
  text-align: center;
}
.number-li > :nth-child(2) {
  width: 40px;
}
.ball {
  border-radius: 50%;
  background-color: red;
  width: 24px;
  position: absolute;
  top: 440px;
  left: 120px;
  display: inline-block;
  z-index: 99999;
}
</style>
