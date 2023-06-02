<template>
  <template v-if="movieData == null">
    <p>Carregando</p>
  </template>

  <template v-else>
    <SectionTitle :title="`${movieData?.title}`" />

    <div class="grid grid--2">
      <div class="movieDesc px-2">
        <p>
          {{ movieData.opening_crawl }}
        </p>

        <hr>

        <div class="grid grid--2 px-2">
          <p>
            Release Date:
          </p>
          <p>
            <b>{{formatDate(movieData.release_date)}}</b>
          </p>

          <p>
            Director:
          </p>
          <p>
            <b>{{movieData.director}}</b>
          </p>

          <p>
            Producer:
          </p>
          <p>
            <b>{{movieData.producer}}</b>
          </p>
        </div>
      </div>

      <div
        class="movieImg"
        :style="`background-image:url(../../../src/assets/covers/episode_${movieData.episode_id}.jpg)`"
      ></div>
    </div>

    <PlanetsSlider :data="planetsList"/>

    <CharactersSlider :inMovie="charactersList" />

  </template>
</template>

<script>
import { onMounted, ref } from "vue";
import api from "../../utils/axios";
import { formatDate } from '../../utils/format';

import PlanetsSlider from '../../components/Planets/PlanetsSlider.vue'
import CharactersSlider from '../../components/Characters/CharactersSlider.vue'

export default {
  components: {
    PlanetsSlider,
    CharactersSlider,
  },
  props: ["id"],
  setup(props) {
    const id = ref(props.id);

    const movieData = ref(null);
    const planetsList = ref(null)
    const charactersList = ref(null)

    async function getMovieData() {
      const response = await api(`films/${id.value}`);

      if (response.data) {
        movieData.value = response.data;
        planetsList.value = movieData.value.planets
        charactersList.value = movieData.value.characters
      }
    }

    onMounted(() => {
      getMovieData();
    });

    return {
      formatDate,
      id,
      movieData,
      planetsList,
      charactersList,
    };
  },
};
</script>

<style>
</style>