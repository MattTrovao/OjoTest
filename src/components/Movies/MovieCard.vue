<template>
  <div :class="`movieCard ${skeleton && 'skeleton'}`">
    <div class="movieCard__img">
    </div>
    <div class="movieCard__data">
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props:{
    skeleton: {
      type:Boolean,
      default: false,
    }
  },
  setup(props){
    const skeleton = ref(props.skeleton)

    return{
      skeleton
    }
  }
}
</script>

<style>

</style>