<template>
  <div class='wrap'>
    <div>{{count}}</div>
    <div>
      <el-button @click='add'>+1</el-button>
    </div>
    <div style='margin-top: 10px'>
      <el-button @click='show'>show</el-button>
    </div>
    <Modal :isOpen='modalIsOpen' @close-modal='closeModal'>
      对你撒娇那附近那家阿森纳递解出境暗时刻记得发快递三
    </Modal>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import Modal from '@/components/v3Components/modal.vue'
export default defineComponent({
  components: {
    Modal
  },
  setup(){
    const count = ref(0)
    const modalIsOpen = ref(false)
    const add = () => {
      count.value++
    }
    const show = () => {
      modalIsOpen.value = true
    }
    const closeModal = () => {
      modalIsOpen.value = false
    }
    return{
      count,
      modalIsOpen,
      add,
      show,
      closeModal
    }
  }
})
</script>

<style scoped lang='scss'>
 .wrap{
   text-align: center;
 }
</style>
