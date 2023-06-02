<template>
  <div :class="`planet ${skeleton ? 'skeleton' : ''}`">
    <template v-if="!skeleton">
      <h2 class="planet__name">
        {{planet.name}}
      </h2>

      <p class="planet__terrain">
        {{planet.terrain}}
      </p>
    </template>
    <template v-else>
      <img src="../../assets/SW_logo.png" alt="Star Wars Logo" class="planet__mask">
    </template>
  </div>
</template>

<script>
import { ref } from "vue";


export default {
  props: {
    skeleton: {
      type: Boolean,
      default: false,
    },
    planet: {
      type: Object,
    }
  },
  setup(props) {
    const skeleton = ref(props.skeleton);

    const planet = ref(props.planet)


    return {
      skeleton,
      planet
    };
  },
};
</script>

<style>

</style>