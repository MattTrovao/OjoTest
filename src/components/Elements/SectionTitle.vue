<template>
  <section class="sectionTitle">
    <h2>
      {{title}}
    </h2>
  </section>
</template>

<script>
import { ref } from 'vue';
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
  },

  setup(props){
    const title = ref(props.title)

    return{
      title,
    }
  }
};
</script>

<style>
</style>