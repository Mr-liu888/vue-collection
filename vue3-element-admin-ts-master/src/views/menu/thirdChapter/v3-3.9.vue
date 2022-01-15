<template>
  <div class='wrap'>
    <div>{{newTitle}}</div>
    <div>
      <el-button @click='add'>+1</el-button>
      <el-button @click='upDateTitle'>updateTitle</el-button>
    </div>
  </div>
</template>

<script lang='ts'>
import { reactive, ref, toRefs, watch } from 'vue'

export default {
  setup(){
    const title = ref('')
    const newTitle = ref('')
    const upDateTitle = () => {
       title.value += "Hello"
    }
    const data = reactive({
      count: 0,
      add: () => {
        return data.count++
      }
    })
    watch([title, () => data.count], (newValue, oldValue) =>{
      newTitle.value = 'update' + title.value
      console.log("oldValue",oldValue)
      console.log("newValue",newValue)
    })
    const refData = toRefs(data)
    return{
      title,
      newTitle,
      upDateTitle,
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
