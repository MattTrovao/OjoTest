<template>
  <header class="header">
    <Container>
      <div class="flex between w100">
        <router-link class="header__logo" to="/">
          <img src="../../assets/jedi.svg" alt="Ordem Jedi" class="jedi">
          <img src="../../assets/empire.svg" alt="Império Galáctico" class="empire">
        </router-link>

        <div class="header__search">
          <input class="search__bar" placeholder="Pesquisar personagem"/>
          <button class="search__btn">
            <font-awesome-icon icon="magnifying-glass" />
          </button>
        </div>
      </div>
    </Container>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>