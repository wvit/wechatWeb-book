<template>
  <div class="book-card">
    <div class="thumb">
      <img :src="book.image" class="image" alt="" mode="aspectFill" />
    </div>
    <div class="detail">
      <div class="row">
        <div class="right">
          {{book.rate}}
        </div>
        <div class="left">
          {{book.title}}
        </div>
      </div>
      <div class="row">
        <div class="right">
          {{book.author}}
        </div>
        <div class="left">
          浏览量
        </div>
      </div>
      <div class="row">
        <div class="right">
          添加人

        </div>
        <div class="left">
          {{book.publisher}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['book']
};
</script>
<style lang='scss' scoped>
.book-card {
  padding: 5rpx;
  overflow: hidden;
  margin-top: 5rpx;
  margin-bottom: 5rpx;
  font-size: 14rpx;
  .thumb {
    width: 90rpx;
    height: 90rpx;
    float: left;
    margin: 0 auto;
    overflow: hidden;
    .img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .detail {
    margin-left: 100rpx;
    .row {
      line-height: 20rpx;
      margin-bottom: 3rpx;
    }
    .right {
      float: right;
    }
    .left {
      margin-right: 80rpx;
    }
  }
}
</style>


