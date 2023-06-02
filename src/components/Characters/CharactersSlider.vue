<template>
  <SectionTitle title="Characters" />

  <Swiper
    v-if="CharacterData"
    :slides-per-view="5"
    :space-between="20"
    :slidesPerGroup="5"
    :modules="modules"
    :navigation="true"
    :loop="true"
    :speed="1000"
    :autoplay="{
      delay: 4500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"
    :breakpoints="{
      '768': {
        slidesPerView: 2,
      },
      '1024': {
        slidesPerView: 3,
      },
      '1600': {
        slidesPerView: 3,
      },
    }"
  >
    <template v-for="data in CharacterData" :key="data.index">
      <SwiperSlide>
        <CharactersCard :character="data"/>
      </SwiperSlide>
    </template>
  </Swiper>

  <CharactersSkeleton v-else />
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
    const CharacterData = ref(null);
    async function getCharacterData() {
      const response = await api.get("people");

      if (response.data.results) {
        CharacterData.value = response.data.results;
      }
    }

    onMounted(() => {
      getCharacterData();
    });

    return {
      modules: [Autoplay,  Navigation],
      CharacterData,
    };
  },
};
</script>

<style>
</style>