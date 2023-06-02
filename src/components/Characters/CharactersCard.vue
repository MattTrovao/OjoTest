<template>
  <div :class="`charCard ${skeleton ? 'skeleton' : ''}`">
    <div class="charCard__name">
      <h2 v-if="!skeleton">
        {{ character.name }}
      </h2>
    </div>

    <div class="charCard__data">
      <template v-if="!skeleton">
        <p class="data__height">
          Height: <b>{{ setHeight(character.height) }}</b>
        </p>
        <p class="data__birth">
          Birth year: <b>{{ character.birth_year }}</b>
        </p>
      </template>
    </div>
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
    character: {
      type: Object,
    },
  },
  setup(props) {
    const skeleton = ref(props.skeleton);

    const character = ref(props.character);

    function setHeight(height) {
      let heightDecimal = height / 100;

      return heightDecimal;
    }

    return {
      skeleton,
      character,
      setHeight,
    };
  },
};
</script>

<style>
</style>