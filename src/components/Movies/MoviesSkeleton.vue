<template>
  <div class="grid grid--4">
    <MovieCard skeleton v-for="item in mock" :key="item"/>
  </div>
</template>

<script>
import { ref } from "vue";
import MovieCard from '../Movies/MovieCard.vue';
export default {
  components: {
    MovieCard,
  },
  setup() {
    const mock = ref(new Array(4));

    return {
      mock,
    };
  },
};
</script>

<style>
</style>