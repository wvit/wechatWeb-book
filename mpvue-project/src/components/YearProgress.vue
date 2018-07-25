<template>
  <div class="progressbar">
    <progress :percent='percentNum' activeColor='#EA5A49'></progress>
    <p>
      {{year}}年已经过去{{days}}天，{{percentNum}}%
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    isLeapYear() {
      let year = new Date().getFullYear();
      if (year % 400 === 0) {
        return true;
      } else if (year % 4 === 0 && year % 100 != 0) {
        return true;
      } else {
        return false;
      }
    },
    getDayOfYear() {
      return this.isLeapYear() ? 366 : 365;
    }
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
    days() {
      let startDay = new Date();
      startDay.setMonth(0);
      startDay.setDate(1);
      let today = new Date().getTime() - startDay.getTime();
      return parseInt(today / 1000 / 60 / 60 / 24) + 1;
    },
    percentNum() {
      return (this.days / this.getDayOfYear() * 100).toFixed(1);
    }
  }
};
</script>
<style lang='scss'>
.progressbar {
  width: 100%;
  text-align: center;
  margin: 30px 0;
  p {
    margin-top: 10px;
  }
}
</style>


