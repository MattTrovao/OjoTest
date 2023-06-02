<template>
  <div class="grid grid--6">
    <CharactersCard skeleton v-for="item in mock" :key="item"/>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const mock = ref(new Array(6));

    return {
      mock,
    };
  },
};
</script>

<style>
</style>