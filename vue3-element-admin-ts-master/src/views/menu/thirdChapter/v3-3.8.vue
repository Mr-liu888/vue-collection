<template>
  <div class='wrap'>
    <div>{{ count }}</div>
    <div>
      <el-button @click='add'>+1</el-button>
    </div>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onMounted, onUpdated, onRenderTriggered } from 'vue'
export default {
  setup(){
    const data = reactive({
      count: 0,
      add: () => { return data.count++ }
    })
    onMounted(() =>{
      console.log('onMounted')
    })
    onUpdated(() =>{
      console.log('onUpdated')
    })
    onRenderTriggered((event) => {
      console.log(event)
    })
    const refData = toRefs(data)
    return{
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
