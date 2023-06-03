<template>
  <SectionTitle title="Movies" />

  <Swiper
    v-if="movieData"
    :slides-per-view="3"
    :space-between="20"
    :slidesPerGroup="3"
    :modules="modules"
    :navigation="true"
    :loop="true"
    :speed="1000"
    :autoplay="{
      delay: 4500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"
  >
    <template v-for="data, id in movieData" :key="id">
      <SwiperSlide>
        <MoviesCard :movie="data" :id='`${id+1}`'/>
      </SwiperSlide>
    </template>
  </Swiper>

  <MoviesSkeleton v-else />
</template>

<script>
import { onMounted, ref } from "vue";

import api from "../../utils/axios.js";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const movieData = ref(null);
    async function getMovieData() {
      const response = await api.get("films");

      if (response.data.results) {
        movieData.value = response.data.results;
      }
    }

    onMounted(() => {
      getMovieData();
    });

    return {
      modules: [Autoplay,  Navigation],
      movieData,
    };
  },
};
</script>

<style>
</style>