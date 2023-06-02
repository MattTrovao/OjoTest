<template>
  <Header />

  <Page>
    <Movie :id='$route.params.id'/>
  </Page>
</template>

<script>
import Movie from '../../pages/Movie/Movie.vue'


export default {
  components: { Movie },
}
</script>

<style>

</style>