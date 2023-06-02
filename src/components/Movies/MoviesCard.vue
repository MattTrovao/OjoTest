<template>
  <div :class="`movieCard ${skeleton ? 'skeleton' : ''}`">
    <div class="movieCard__mask" v-if="skeleton">
      <img src="../../assets/SW_logo.png" alt="Star Wars Logo">
    </div>

    <div class="movieCard__img">
      <img 
      :src="`../../../src/assets/covers/episode_${movie.episode_id}.jpg`" 
      alt="" 
      v-if="!skeleton"
      />
    </div>
    <div class="movieCard__data">
      <template v-if="!skeleton">
        <h2 class="data__title">
          <small>
            Episode {{movie.episode_id}} -
          </small>
          {{movie.title}}
        </h2>
        <div class="grid grid--2">
          <p class="data__year">
            {{getYear(movie.release_date)}}
          </p>
          <p class="data__director">
            {{movie.director}}
          </p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import {getYear} from '../../utils/format.js' 

export default {
  props: {
    skeleton: {
      type: Boolean,
      default: false,
    },
    movie: {
      type: Object,
    }
  },
  setup(props) {
    const skeleton = ref(props.skeleton);

    const movie = ref(props.movie)


    return {
      getYear,
      skeleton,
      movie
    };
  },
};
</script>

<style>
</style>