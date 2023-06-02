<template>
  <MoviesSlider/>

  <div class="mt-5">
    <CharactersSlider />
  </div>
</template>

<script>
import MoviesSlider from '../../components/Movies/MoviesSlider.vue'
import CharactersSlider from '../../components/Characters/CharactersSlider.vue'
export default {
  components: {
    MoviesSlider,
    CharactersSlider
  }
}
</script>

<style>

</style>