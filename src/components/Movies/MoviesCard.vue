<template>
  <router-link :to="`${id ? '/movie/'+id : ''}`" :class="`movieCard ${skeleton ? 'skeleton' : ''}`">
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
          {{movie.title}} ({{movie?.episode_id}})
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
  </router-link>
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
    },
    id: {
      type: String,
    }
  },
  setup(props) {
    const skeleton = ref(props.skeleton);

    const movie = ref(props.movie)

    const id = ref(props.id)

    return {
      getYear,
      skeleton,
      movie,
      id
    };
  },
};
</script>

<style>
</style>