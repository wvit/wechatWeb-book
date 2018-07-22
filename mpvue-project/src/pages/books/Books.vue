<template>
    <div>
        <div v-bind:key="book.id" v-for='book in books'>
            {{book.title}}
        </div>
    </div>
</template>
<script>
import { get } from '@/util';
export default {
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
<style>
</style>
