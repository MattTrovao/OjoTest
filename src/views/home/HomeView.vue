<template>
  <Header />

  <Page>
    <Home />
  </Page>
</template>

<script>
import Home from '../../pages/Home/Home.vue'
export default {
  components: {
    Home
  }
}
</script>

<style scoped>
.test{
  height: 200vh;
  background: pink;
}
</style>