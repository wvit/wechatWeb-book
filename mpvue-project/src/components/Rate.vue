<template>
  <div class="rate">
    <span> ☆☆☆☆☆</span>
    <div class="hollow" :style="style">
      ★★★★★
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [Number, String],
      default: '0'
    }
  },
  computed: {
    style() {
      return `width:${this.value / 2 * 16 - (this.value / 2 - 1) * 4}px;`;
    }
  }
};
</script>
<style lang="scss">
.rate {
  position: relative;
  font-size: 16px;
  display: inline-block;
  .hollow {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    overflow: hidden;
  }
}
</style>