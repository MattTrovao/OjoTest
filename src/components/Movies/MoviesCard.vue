<template>
  <div :class="`movieCard ${skeleton ? 'skeleton' : ''}`">
    <div class="movieCard__img">
      <img src="../../assets/covers/episode_4.jpg" alt="" v-if="!skeleton"/>
    </div>
    <div class="movieCard__data">
      <template v-if="!skeleton">
        <h2 class="data__title">Lorem Impsum</h2>
        <div class="grid grid--2">
          <p class="data__year">XXXX</p>
        <p class="data__director">George Lucas</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    skeleton: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const skeleton = ref(props.skeleton);

    return {
      skeleton,
    };
  },
};
</script>

<style>
</style>