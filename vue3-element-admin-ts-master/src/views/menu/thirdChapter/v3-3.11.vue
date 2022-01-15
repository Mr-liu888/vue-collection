<template>
  <div class='wrap'>
    <div>
      <h1 v-if='loading'>loading...</h1>
      <div v-if='loaded'>
        <img :src='result.message'>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { useUrlLoader } from '@/hooks/useUrlLoader'
export default {
  setup(){
    const { loaded, loading, result } = useUrlLoader('https://dog.ceo/api/breeds/image/random')
    return{
      loaded,
      loading,
      result
    }
  }
}
</script>

<style scoped lang='scss'>
 .wrap{
   text-align: center;
 }
</style>
