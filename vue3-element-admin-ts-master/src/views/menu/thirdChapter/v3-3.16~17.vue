<template>
  <div class='wrap'>
    <Suspense>
      <template #default>
        <div>
          <asyncShow/>
          <dog-show/>
        </div>
      </template>
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import asyncShow from '@/components/v3Components/asyncShow.vue'
import dogShow from '@/components/v3Components/dogShow.vue'
export default defineComponent({
  components:{
    asyncShow,
    dogShow
  }
})
</script>

<style scoped lang='scss'>
 .wrap{
   text-align: center;
 }
</style>
