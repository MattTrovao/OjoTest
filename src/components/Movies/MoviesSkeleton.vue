<template>
  <div class="grid grid--4">
    <MoviesCard skeleton v-for="item in mock" :key="item"/>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
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