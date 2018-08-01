<template>
  <div>
    <Card v-bind:key="book.id" v-for='book in books' :book='book'>
      {{book.title}}
    </Card>
  </div>
</template>
<script>
import { get } from '@/util';
import Card from '@/components/Card';
export default {
  components: {
    Card
  },
  data() {
    return {
      books: []
    };
  },
  methods: {
    async getList() {
      const books = await get('/weapp/bookList');
      this.books = books.list;
      console.log(books.list);
    }
  },
  mounted() {
    this.getList();
  }
};
</script>
<style lang='scss'>
</style>
