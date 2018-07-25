<template>
  <div class="book-card">
    <div class="thumb">
      <img :src="book.image" class="image" alt="" mode="widthFix" />
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
  padding: 5px;
  overflow: hidden;
  margin: 5px 0;
  font-size: 14px;
  .thumb {
    width: 90px;
    float: left;
    margin: 0 auto;
    overflow: hidden;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .detail {
    margin-left: 100px;
    .row {
      margin-top: 5px;
      line-height: 20px;
      margin-bottom: 3px;
      .right {
        float: right;
      }
      .left {
        margin-right: 80px;
      }
    }
  }
}
</style>


