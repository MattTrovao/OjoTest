<template>
  <SectionTitle title="Characters" />

  <Swiper
    v-if="CharacterData.length >= 1"
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
        <CharactersCard :character="data" />
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
  props: {
    inMovie: {
      type: Array,
      required: false,
    },
  },
  setup(props) {
    const inMovie = ref(props.inMovie);
    const CharacterData = ref([]);
    async function getCharacterData() {
      if (inMovie.length != 0) {
        for (let c of inMovie.value) {
          let response = await api.get(c.replace("https://swapi.dev/api/", ""));

          if (response.data) {
            CharacterData.value.push(response.data);
          }
        }
      } else {
        const response = await api.get("people");

        if (response.data.results) {
          CharacterData.value = response.data.results;
        }
      }
    }

    onMounted(() => {
      getCharacterData();
    });

    return {
      modules: [Autoplay, Navigation],
      CharacterData,
    };
  },
};
</script>

<style>
</style>