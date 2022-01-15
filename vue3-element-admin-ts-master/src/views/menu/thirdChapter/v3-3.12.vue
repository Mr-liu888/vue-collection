<template>
  <div class='wrap'>
    <div>
      <h1 v-if='loadingOne'>loading...</h1>
      <div v-if='loadedOne'>
        <img :src='resultOne[0].url'>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { watch } from 'vue'
import { useUrlLoaderOne } from '@/hooks/useUrlLoader'
interface DogResult{
  message: string,
  status: string
}
interface CatResult {
  id: string;
  url: string;
  width: number;
  height: number;
}
export default {
  setup(){
    // const { loadedOne, loadingOne, resultOne } = useUrlLoaderOne<DogResult>('https://dog.ceo/api/breeds/image/random')
    // watch(resultOne, () => {
    //   if(resultOne.value){
    //     console.log(resultOne.value.message)
    //   }
    // })
    // return{
    //   loadedOne,
    //   loadingOne,
    //   resultOne
    // }
    const { loadedOne, loadingOne, resultOne } = useUrlLoaderOne<CatResult[]>('https://api.thecatapi.com/v1/images/search?limit=1')
    watch(resultOne, () => {
      if(resultOne.value){
        console.log(resultOne.value[0].url)
      }
    })
    return{
      loadedOne,
      loadingOne,
      resultOne
    }
  }
}
</script>

<style scoped lang='scss'>
.wrap{
  text-align: center;
}
</style>
