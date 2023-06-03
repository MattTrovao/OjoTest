<template>
  <SectionTitle title="Planets" />

  <Swiper
    v-if="planetsData.length >= 1"
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
    <template v-for="data in planetsData" :key="data.index">
      <SwiperSlide>
        <PlanetsCard :planet="data" />
      </SwiperSlide>
    </template>
  </Swiper>

  <PlanetsSkeleton v-else />
</template>

<script>
import { onMounted, ref } from "vue";
import api from "../../utils/axios";

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
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const planetList = ref(props.data);
    const planetsData = ref([]);

    async function getPlanetsData() {
      for (let p of planetList.value) {
        let response = await api.get(p.replace("https://swapi.dev/api/", ""));

        if (response.data) {
          planetsData.value.push(response.data);
        }
      }
    }

    onMounted(() => {
      getPlanetsData();
    });

    return {
      modules: [Autoplay,  Navigation],
      planetsData,
    };
  },
};
</script>

<style>
</style>