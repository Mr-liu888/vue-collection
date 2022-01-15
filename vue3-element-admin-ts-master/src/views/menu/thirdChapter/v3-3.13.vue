<template>

</template>

<script lang='ts'>
import {defineComponent} from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      default: 'ltj'
    }
  },
  setup(props){
    console.log(props.name)
  }
})
// export default {
//   props: {
//     name: {
//       type: String,
//       default: 'ltj'
//     }
//   },
//   setup(props){
//     console.log(props.name)
//   }
// }
</script>

<style scoped>

</style>
