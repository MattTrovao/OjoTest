<template>
  <div class="grid grid--3">
    <PlanetsCard skeleton v-for="item in mock" :key="item"/>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const mock = ref(new Array(3));

    return {
      mock,
    };
  },
};
</script>

<style>

</style>