<template>
  <div class='wrap'>
    <div>
      <p v-for='item in numbers' :key='item'>{{ item }}</p>
    </div>
    <div>{{ person.name }}</div>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs } from 'vue'
interface dataProps {
  numbers: number[],
  person: { name?: string}
}
export default {
  setup() {
    const data:dataProps = reactive({
      numbers: [0,1,2],
      person: {}
    })
    data.numbers[0] = 10;
    data.person.name = 'ltj';
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
