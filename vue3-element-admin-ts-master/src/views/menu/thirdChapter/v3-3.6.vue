<template>
  <div class='wrap'>
    <div>{{ count }}</div>
    <div>{{ double }}</div>
    <div>
      <el-button type="primary" @click="add">+1</el-button>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, reactive, toRefs } from 'vue'
interface dataProps {
  count: number,
  double: number,
  add: () => void
}
export default {
  setup() {
    const data: dataProps = reactive({
      count: 0,
      add : () => { data.count ++ },
      double : computed(() =>  data.count * 2 )
    })
    const refData = toRefs(data)
    return {
      ...refData
    }
  }
}
</script>

<style scoped lang='scss'>
.wrap{
  text-align: center;
}
</style>
