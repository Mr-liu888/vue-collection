<template>
  <div class='wrap'>
     <div>{{ count }}</div>
     <div>{{double}}</div>
     <div>
       <el-button type="primary" @click="add">+1</el-button>
     </div>
  </div>
</template>

<script lang='ts'>
import { computed, ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    const add = () => {
      count.value ++
    }
    const double = computed(() => {
      return count.value * 2
    })
    return {
      count,
      add,
      double
    }
  }
}
</script>

<style scoped lang='scss'>
 .wrap{
   text-align: center;
 }
</style>
