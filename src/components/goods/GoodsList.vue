<template>
  <div>
    <nav-bar title="商品展示"></nav-bar>

    <mt-loadmore :auto-fill="false" :bottom-method="loadBottom" ref="loadMore" :bottom-all-loaded="isLoadAll">
      <ul>
        <li v-for="(item, index) in message">
          <router-link :to="{name:'goodsDetail',params:{id:item.id}}">
            <img :src="item.imgUrl" />
            <div class="title">{{ item.title }}</div>
            <div class="desc">
              <div class="sell">
                <span>￥{{ item.sell_price }}</span>
                <s>￥{{ item.market_price }}</s>
              </div>
              <div class="detail">
                <div class="hot">热卖中</div>
                <div class="count">剩余{{ item.stock_quantity }}件</div>
              </div>
            </div>
          </router-link>
        </li>
        <!-- <li>
          <a>
            <img src="../../assets/preview/p03.jpg" />
            <div class="title">好东西啊</div>
            <div class="desc">
              <div class="sell">
                <span>￥80</span>
                <s>￥9000</s>
              </div>
              <div class="detail">
                <div class="hot">热卖中</div>
                <div class="count">剩余99件</div>
              </div>
            </div>
          </a>
        </li> -->
      </ul>
    </mt-loadmore>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: [
        {
          id: 80,
          title: "一片广阔的绿色坪地",
          add_time: 2012 - 12 - 11,
          digest: "这是一个关于绿色坪地的摘要",
          click: 23,
          imgUrl: require("@/assets/preview/p01.jpg"),
          sell_price: 2000,
          market_price: 3600,
          stock_quantity: 8
        },
        {
          id: 82,
          title: "一座古老的城堡",
          add_time: 2012 - 9 - 11,
          digest: "这是一个关于绿色坪地的摘要",
          click: 23,
          imgUrl: require("@/assets/preview/p03.jpg"),
          sell_price: 2000,
          market_price: 3600,
          stock_quantity: 15
        },
        {
          id: 82,
          title: "一片绿色植被",
          add_time: 2012 - 12 - 11,
          digest: "这是一个关于绿色坪地的摘要",
          click: 23,
          imgUrl: require("@/assets/preview/p05.jpg"),
          sell_price: 2000,
          market_price: 3600,
          stock_quantity: 4
        },
        {
          id: 83,
          title: "一个忠诚的爱犬朋友",
          add_time: 2014 - 1 - 11,
          digest: "这是一个关于绿色坪地的摘要",
          click: 231,
          imgUrl: require("@/assets/preview/p04.jpg"),
          sell_price: 3000,
          market_price: 5600,
          stock_quantity: 1
        },
        {
          id: 82,
          title: "一片绿色植被",
          add_time: 2012 - 12 - 11,
          digest: "这是一个关于绿色坪地的摘要",
          click: 23,
          imgUrl: require("@/assets/preview/p05.jpg"),
          sell_price: 2000,
          market_price: 3600,
          stock_quantity: 4
        },
        {
          id: 83,
          title: "一个忠诚的爱犬朋友",
          add_time: 2014 - 1 - 11,
          digest: "这是一个关于绿色坪地的摘要",
          click: 231,
          imgUrl: require("@/assets/preview/p04.jpg"),
          sell_price: 3000,
          market_price: 5600,
          stock_quantity: 1
        }
      ],
      page:1,
      isLoadAll:false
    };
  },
  created() {
    /* 获取路由参数 id 没有的话默认为1*/
    //let id=this.$route.query.id || '1';
    //this.loadPage(this.page);
  },
  methods: {
    loadPage(page) {
      // this.$axios.get(url)
      // .then(res => {
      //     this.message=res.data;
            // this.page ++;
      // })
      // .catch(err => {
      //     console.error('获取商品列表信息失败',err);
      // })
    },
    concatByPage(page) {
      // this.$axios.get(url)
      // .then(res => {
          //  this.message=this.message.concat(rest.data);
          //  this.$refs.loadMore.onBottomLoaded(); 通知元素重新定位
            // this.page ++;
      // })
      // .catch(err => {
      //     console.error('获取商品列表信息失败',err);
      // })
    },
    loadBottom: function() {
      console.log("上拉加载被执行");
      this.concatByPage(this.page);
    }
  }
};
</script>
<style scoped>
ul {
  overflow: hidden;
}
li {
  width: 50%;
  float: left;
  padding: 6px;
  box-sizing: border-box;
}
li > a:not(.mui-btn) {
  display: block;
  margin: 0;
  padding: 0;
  border: 1px solid #5c5c5c;
  box-shadow: 0 0 4px #666;
  width: 100%;
}
li > a:not(.mui-btn) img {
  width: 100%;
}
.sell > span {
  float: left;
  color: red;
  text-align: left;
}
.detail > .hot {
  float: left;
  text-align: left;
  font-size: 15px;
}
/*撑开 去除浮动条没有的高度 */
.detail {
  overflow: hidden;
}
.desc {
  color: rgba(0, 0, 0, 0.8);
  background-color: rgba(0, 00, 0, 0.2);
}
img {
  height: 200px;
}
</style>
