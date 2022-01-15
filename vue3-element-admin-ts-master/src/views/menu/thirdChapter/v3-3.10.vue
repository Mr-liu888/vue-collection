<template>
  <div class='wrap'>
    <div>
      <h1>X:{{ x }}, Y:{{ y }}</h1>
    </div>
  </div>
</template>

<script lang='ts'>
import { useMousePosition } from '@/hooks/useMousePosition'
export default {
  setup(){
    const { x, y } = useMousePosition()
    return{
      x,
      y
    }
  }
}
</script>

<style scoped lang='scss'>
 .wrap{
   text-align: center;
 }
</style>
